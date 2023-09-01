import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { FiMessageSquare } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export const ChatHistory = () => {
  return (
    <ScrollArea className="max-w-72 w-72 p-2">
      {/* <ul>
        <h6 className="px-4 py-2 text-xs font-medium">Today</h6>
        <li>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "my-1 flex w-full items-center justify-start gap-2 py-6"
            )}
          >
            <FiMessageSquare />
            Next.js Fullstack
          </Link>
        </li>
        <h6 className="px-4 py-2 text-xs font-medium">Previous 7 Days</h6>
        <li>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "my-1 flex w-full items-center justify-start gap-2 py-6"
            )}
          >
            <FiMessageSquare />
            Evolution of Modern Computer
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "my-1 flex w-full items-center justify-start gap-2 py-6"
            )}
          >
            <FiMessageSquare />
            Computer History Evolution
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "my-1 flex w-full items-center justify-start gap-2 py-6"
            )}
          >
            <FiMessageSquare /> Automated Fire Alarm System
          </Link>
        </li>
      </ul> */}
    </ScrollArea>
  );
};
