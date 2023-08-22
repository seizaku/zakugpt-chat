"use client";
import Container from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { BiLogoGoogle, BiLogoGithub, BiLoaderAlt } from "react-icons/bi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";

const AuthSignIn = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [username, setUsername] = useState("");
  const [email_address, setEmail] = useState("");
  const [pendingVerification, setpendingVerification] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    try {
      await signUp.create({
        email_address,
        username,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setpendingVerification(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: [...code].join(""),
      });

      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
        return;
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        setEmailVerified(true);
        setTimeout(() => {
          router.push("/");
        }, [3000]);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const handleCodeInput = (e, index) => {
    e.preventDefault();
    let value = e.target.value;
    if (isNaN(value)) return;
    let newArr = [...code];
    newArr[index] = value;
    setCode(newArr);
    console.log(code);
    return;
  };

  return (
    <Container className="container flex h-screen w-full items-center justify-center bg-background">
      <section className="text-center">
        {!pendingVerification && (
          <form
            onSubmit={handleSubmit}
            className="grid place-items-center gap-3 rounded-md border p-12"
          >
            <Image
              alt="auth-page-logo"
              height={48}
              width={48}
              src={"/chatgpt-logo.svg"}
              className="ease-in-out dark:invert"
            />
            <p className="py-4 text-center text-sm">
              Welcome to Next ZakuGPT AI <br />
              Please sign up your account to continue
            </p>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter username"
              required
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email address"
              required
            />
            <Button className="w-full">Continue</Button>
            <figure className="flex w-full items-center justify-center gap-2 overflow-hidden">
              <Separator />
              <span className="text-xs ">OR</span>
              <Separator />
            </figure>
            <Button
              className="flex w-full justify-start gap-4 text-xs sm:text-sm"
              variant="outline"
            >
              <BiLogoGoogle />
              Continue with Google
            </Button>
            <Button
              className="flex w-full justify-start gap-4 text-xs sm:text-sm"
              variant="outline"
            >
              <BiLogoGithub />
              Continue with Github
            </Button>
          </form>
        )}

        {pendingVerification && (
          <form
            onSubmit={handleVerifyEmail}
            className="grid place-items-center gap-3 rounded-md border p-12"
          >
            {!emailVerified && (
              <>
                <Image
                  alt="auth-page-logo"
                  height={48}
                  width={48}
                  src={"/chatgpt-logo.svg"}
                  className="animate-spin ease-in-out dark:invert"
                />
                <h1 className="text-xl font-semibold">
                  Verify Your Email Address
                </h1>
                <p className="">
                  Please verify your email using the sent code <br /> to
                  complete your registration.
                </p>
                <ul className="flex gap-2 py-2">
                  <li>
                    <Input
                      onChange={(e) => handleCodeInput(e, 0)}
                      type="text"
                      value={code[0]}
                      maxLength="1"
                      placeholder="0"
                      className="w-12 h-12 px-4"
                    />
                  </li>
                  <li>
                    <Input
                      onChange={(e) => handleCodeInput(e, 1)}
                      type="text"
                      value={code[1]}
                      maxLength="1"
                      placeholder="0"
                      className="w-12 h-12 px-4"
                    />
                  </li>
                  <li>
                    <Input
                      onChange={(e) => handleCodeInput(e, 2)}
                      type="text"
                      value={code[2]}
                      maxLength="1"
                      placeholder="0"
                      className="w-12 h-12 px-4"
                    />
                  </li>
                  <li>
                    <Input
                      onChange={(e) => handleCodeInput(e, 3)}
                      type="text"
                      value={code[3]}
                      maxLength="1"
                      placeholder="0"
                      className="w-12 h-12 px-4"
                    />
                  </li>
                  <li>
                    <Input
                      onChange={(e) => handleCodeInput(e, 4)}
                      type="text"
                      value={code[4]}
                      maxLength="1"
                      placeholder="0"
                      className="w-12 h-12 px-4"
                    />
                  </li>
                  <li>
                    <Input
                      onChange={(e) => handleCodeInput(e, 5)}
                      type="text"
                      value={code[5]}
                      maxLength="1"
                      placeholder="0"
                      className="w-12 h-12 px-4"
                    />
                  </li>
                </ul>
                <Button className="w-full">Verify Email</Button>
              </>
            )}
            {emailVerified && (
              <>
                <Image
                  alt="auth-page-logo"
                  height={48}
                  width={48}
                  src={"/chatgpt-logo.svg"}
                  className="ease-in-out dark:invert"
                />
                <h1 className="text-xl font-semibold">Verification Complete</h1>
                <p className="">
                  Thank you for your patience! <br /> Redirecting to site..
                </p>
              </>
            )}
          </form>
        )}
      </section>
    </Container>
  );
};

export default AuthSignIn;
