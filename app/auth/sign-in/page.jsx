"use client";
import Container from "@/components/layouts/container";
import AuthFormContainer from "@/components/layouts/form-container";
import AppLogo from "@/components/app-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { BiLoaderAlt } from "react-icons/bi";
import AuthProviderButtons from "@/components/provider-button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { useToast } from "@/components/ui/use-toast";

const AuthSignIn = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [pendingVerification, setpendingVerification] = useState(false);
  const [code, setCode] = useState();
  const router = useRouter();
  const { toast } = useToast();

  const displayError = (error) => {
    toast({
      variant: "destructive",
      title: "Authentication Failed",
      description: error.errors[0].longMessage,
    });
  };
  const displaySuccess = () => {
    toast({
      className: "bg-green-600 text-white",
      title: "Login Successfully!",
      description: "Redirecting user to homepage..",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    await signIn
      .create({
        identifier: email,
      })
      .then(async ({ supportedFirstFactors }) => {
        const { emailAddressId } = supportedFirstFactors.find(
          (factor) => (factor.strategy = "email_code")
        );
        await signIn.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId,
        });
      })
      .then(() => {
        setpendingVerification(true);
      })
      .catch((err) => displayError(err));
  };

  const verifyEmail = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;

    await signIn
      .attemptFirstFactor({
        strategy: "email_code",
        code,
      })
      .then(async (res) => {
        displaySuccess();
        await setActive({ session: res.createdSessionId });
        router.push("/");
      })
      .catch((err) => {
        displayError(err);
      });
  };

  return (
    <Container className="flex h-screen w-full items-center justify-center bg-background">
      <section className="text-center">
        {!pendingVerification && (
          <AuthFormContainer>
            <form onSubmit={handleSubmit}>
              <AppLogo className="mx-auto" />
              <h3 className="pt-4 font-semibold text-md">
                Sign in to ZakuGPT AI
              </h3>
              <p className="pb-4 text-center text-sm">
                Use your email address or use the OAuth <br /> providers below.
              </p>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email address"
                required
              />
              <Button className="w-full my-2">Continue</Button>
            </form>
            <small className="text-xs">
              {" Don't have an account? "}
              <Link className="font-bold" href="/auth/sign-up">
                Sign up
              </Link>
            </small>
            <figure className="flex w-full items-center justify-center gap-2 overflow-hidden">
              <Separator />
              <span className="text-xs ">OR</span>
              <Separator />
            </figure>
            <AuthProviderButtons method={"sign-in"} />
          </AuthFormContainer>
        )}
        {pendingVerification && (
          <form onSubmit={verifyEmail}>
            <AuthFormContainer>
              <AppLogo />
              <h1 className="text-xl font-semibold">
                Verify Your Email Address
              </h1>
              <p className="">
                Please verify your email using the sent code <br /> to complete
                your registration.
              </p>
              <Input
                onChange={(e) => setCode(e.target.value)}
                type="text"
                placeholder="Enter code"
              />
              <Button className="w-full">Verify Email</Button>
            </AuthFormContainer>
          </form>
        )}
      </section>
    </Container>
  );
};

export default AuthSignIn;
