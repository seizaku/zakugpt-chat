import { Button } from "@/components/ui/button";
import { useSignIn } from "@clerk/nextjs";
import { BiLogoGoogle, BiLogoGithub } from "react-icons/bi";

const AuthProviderButtons = ({ children, ...props }) => {
  const { isLoaded, signIn } = useSignIn();
  const OAuthProvider = (e, strategy) => {
    e.preventDefault();
    if (!isLoaded) return;
    const signInOAuth = (strategy) => {
      signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
    };
    signInOAuth(strategy);
  };
  return (
    <>
      <Button
        variant="outline"
        className="flex w-full justify-start gap-4 text-xs sm:text-sm"
        onClick={(e) => OAuthProvider(e, "oauth_google")}
      >
        <BiLogoGoogle />
        Continue with Google
      </Button>
      <Button
        variant="outline"
        className="flex w-full justify-start gap-4 text-xs sm:text-sm"
        onClick={(e) => OAuthProvider(e, "oauth_github")}
      >
        <BiLogoGithub />
        Continue with Github
      </Button>
    </>
  );
};

export default AuthProviderButtons;
