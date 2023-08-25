import Container from "@/components/layouts/container";
import { UserProfile } from "@clerk/nextjs";

const AuthUserProfile = () => {
  return (
    <Container className="flex justify-center bg-zinc-900 h-screen">
      <UserProfile />
    </Container>
  );
};

export default AuthUserProfile;
