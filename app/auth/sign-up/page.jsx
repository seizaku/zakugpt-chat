"use client";
import Container from "@/components/layouts/container";
import AuthForm from "@/components/layouts/auth-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import AppLogo from "@/components/app-logo";
import AuthProviderButtons from "@/components/provider-button";

const AuthSignIn = () => {
  const { isLoaded, signUp, signIn, setActive } = useSignUp();
  const [email_address, setEmail] = useState("");
  const [pendingVerification, setpendingVerification] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    await signUp
      .create({
        email_address,
      })
      .then((res) => {
        signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      })
      .then((res) => {
        setpendingVerification(true);
      })
      .catch((error) => console.error(error));
  };

  const verifyEmail = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    await signUp
      .attemptEmailAddressVerification({
        code,
      })
      .then(async (res) => {
        await setActive({ session: res.createdSessionId });
        setEmailVerified(true);
        router.push("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container className="container flex h-screen w-full items-center justify-center bg-background">
      <section className="text-center">
        {!pendingVerification && (
          <AuthForm onSubmit={hanldeSubmit}>
            <AppLogo />
            <h3 className="pt-4 font-semibold text-md">
              Sign up to ZakuGPT AI
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
            <Button className="w-full">Continue</Button>
            <small className="text-xs">
              {" Already have an account? "}
              <Link className="font-bold" href="/auth/sign-in">
                Sign in
              </Link>
            </small>
            <div className="flex w-full items-center justify-center gap-2 overflow-hidden">
              <Separator />
              <span className="text-xs ">OR</span>
              <Separator />
            </div>
            <AuthProviderButtons />
          </AuthForm>
        )}
        {pendingVerification && (
          <AuthForm onSubmit={verifyEmail}>
            {!emailVerified && (
              <>
                <AppLogo />
                <h1 className="text-xl font-semibold">
                  Verify Your Email Address
                </h1>
                <p className="">
                  Please verify your email using the sent code <br /> to
                  complete your registration.
                </p>
                <Input
                  onChange={(e) => setCode(e.target.value)}
                  type="text"
                  placeholder="Enter code"
                />
                <Button className="w-full">Verify Email</Button>
              </>
            )}
            {emailVerified && (
              <>
                <AppLogo />
                <h1 className="text-xl font-semibold">Verification Complete</h1>
                <p className="">
                  Thank you for your patience! <br /> Redirecting to site..
                </p>
              </>
            )}
          </AuthForm>
        )}
      </section>
    </Container>
  );
};

export default AuthSignIn;
