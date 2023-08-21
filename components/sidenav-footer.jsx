import UserAvatar from "@/components/user-avatar";
import { FiKey } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";

const SidenavFooter = () => {
  return (
    <section className="absolute bottom-0 w-full py-2 pr-4">
      <Separator className="my-2" />
      <Button variant="ghost" className="w-full justify-start gap-4">
        <FiKey />
        Upgrade Membership
      </Button>
      <Button variant="ghost" className="w-full justify-between gap-4">
        <figure className="flex items-center gap-4">
          <UserAvatar width={32} height={32} />
          Landrei Zerna
        </figure>
        <BiDotsHorizontalRounded className="" />
      </Button>
    </section>
  );
};

export default SidenavFooter;
