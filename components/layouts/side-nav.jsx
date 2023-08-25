import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { ChatHistory } from "@/components/chat-history";
import SidenavFooter from "@/components/sidenav-footer";

const SideNav = () => {
  return (
    <aside className="fixed hidden h-screen max-h-screen w-72 flex-col border-r bg-background dark:bg-zinc-900 md:flex rounded-r-xl">
      <ul className="mb-2 p-2">
        <li className="flex gap-2">
          <Button variant="outline" className="w-full justify-start gap-2 py-6">
            <FiPlus />
            New Chat
          </Button>
        </li>
      </ul>
      <nav className="h-full">
        <ChatHistory />
      </nav>
      <section className="p-2">
        <SidenavFooter />
      </section>
    </aside>
  );
};

export default SideNav;
