import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { SheetSideNav } from "@/components/sidenav-sheet";
import AppIcon from "@/components/app-icon";
const TopNav = () => {
  return (
    <header className="fixed bg-background top-0 z-10 h-14 w-full border-b dark:bg-zinc-900 md:hidden">
      <nav className="flex items-center h-14 justify-between p-1 px-2">
        <SheetSideNav />
        <AppIcon />
        <Button variant="ghost">
          <FiPlus />
        </Button>
      </nav>
    </header>
  );
};

export default TopNav;
