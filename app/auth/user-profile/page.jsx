import Container from "@/components/layouts/container";
import { UserProfile } from "@clerk/nextjs";

const AuthUserProfile = () => {
  return (
    <Container className="flex justify-center">
      <UserProfile />;
    </Container>
  );
};

export default AuthUserProfile;
