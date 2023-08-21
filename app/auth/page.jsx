import Container from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { BiLogoGoogle, BiLogoGithub } from "react-icons/bi";

const AuthSignIn = () => {
  return (
    <Container className="container flex h-screen w-full items-center justify-center bg-background">
      <section className="text-center">
        <form
          action=""
          className="grid place-items-center gap-3 rounded-md border p-12"
        >
          <Image
            alt="auth-page-logo"
            height={64}
            width={64}
            src={"/chatgpt-logo.svg"}
            className="animate-spin ease-in-out dark:invert"
          />
          <p className="py-4 text-center text-sm">
            Welcome to Next ZakuGPT AI <br />
            Log in with our auth providers to continue
          </p>
          <Input type="email" placeholder="Enter email address" />
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
      </section>
    </Container>
  );
};

export default AuthSignIn;
