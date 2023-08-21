import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";
import UserAvatar from "@/components/user-avatar";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { UserButton } from "@clerk/nextjs";

export function UserMenuButton() {
  return (
    <Button variant="ghost" className="w-full justify-between">
      <span className="flex items-center gap-4">
        <UserButton userProfileMode="modal" afterSignOutUrl="/" />
        {/* Landrei Zerna */}
      </span>
      <BiDotsHorizontalRounded />
    </Button>
  );
}
