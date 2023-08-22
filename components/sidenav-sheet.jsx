import { Button } from "@/components/ui/button";
import { FiMenu, FiPlus } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChatHistory } from "@/components/chat-history";
import SidenavFooter from "@/components/sidenav-footer";

export function SheetSideNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <FiMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="p-2">
          <Button variant="outline" className="w-full justify-start gap-2 py-6">
            <FiPlus />
            New Chat
          </Button>
        </SheetHeader>
        <nav className="h-full">
          <ChatHistory />
          <section className="p-2">
            <SidenavFooter />
          </section>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
