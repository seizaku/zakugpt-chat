import { Button } from "@/components/ui/button";
import { FiPlus, FiMenu } from "react-icons/fi";
import { SheetSideNav } from "@/components/sidenav-sheet";
const TopNav = () => {
  return (
    <header className="fixed top-0 z-10 h-16 w-full border-b dark:bg-zinc-900 md:hidden rounded-b-2xl">
      <nav className="flex items-center h-16 justify-between p-1 px-2">
        <SheetSideNav />
        <Button variant="ghost">
          <FiPlus />
        </Button>
      </nav>
    </header>
  );
};

export default TopNav;
