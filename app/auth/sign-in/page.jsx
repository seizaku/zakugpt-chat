"use client";
import Container from "@/components/layouts/container";
import AuthForm from "@/components/layouts/auth-form";
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

const AuthSignIn = () => {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [pendingVerification, setpendingVerification] = useState(false);
  const [code, setCode] = useState();

  const hanldeSubmit = async (e) => {
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
      .then((res) => {
        setpendingVerification(true);
      })
      .catch((err) => console.log(err));
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
        await setActive({ session: res.createdSessionId });
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="container flex h-screen w-full items-center justify-center bg-background">
      <section className="text-center">
        {!pendingVerification && (
          <AuthForm onSubmit={hanldeSubmit}>
            <AppLogo />
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
            <Button className="w-full">
              {pendingVerification ? (
                <span className="animate-spin">
                  <BiLoaderAlt />
                </span>
              ) : (
                "Continue"
              )}
            </Button>
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
            <AuthProviderButtons />
          </AuthForm>
        )}
        {pendingVerification && (
          <AuthForm onSubmit={verifyEmail}>
            <>
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
            </>
          </AuthForm>
        )}
      </section>
    </Container>
  );
};

export default AuthSignIn;
