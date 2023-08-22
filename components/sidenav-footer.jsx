import { FiKey } from "react-icons/fi";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { UserButton } from "@/components/user-button";

const SidenavFooter = () => {
  return (
    <section className="absolute bottom-0 w-full py-3 pr-4">
      <Button variant="ghost" className="w-full justify-start gap-4 py-6">
        <FiKey />
        Upgrade Membership
      </Button>
      <UserButton />
    </section>
  );
};

export default SidenavFooter;
