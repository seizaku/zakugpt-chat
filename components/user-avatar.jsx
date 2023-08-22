"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

const UserAvatar = ({ src, height, width, className }) => {
  return (
    <Avatar>
      <AvatarImage
        height={height}
        width={width}
        className={cn(`min-h-[32px] min-w-[32px] rounded-md`, className)}
        src={src}
        alt="user-avatar"
      />
      <AvatarFallback className="text-xs">A.I</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
