import { Button } from "@/components/ui/button";
import { FiPlus, FiMenu } from "react-icons/fi";
import { SheetSideNav } from "@/components/sidenav-sheet";
const TopNav = () => {
  return (
    <header className="fixed top-0 z-10 h-12 w-full border-b bg-background md:hidden">
      <nav className="flex items-center justify-between p-1 px-2">
        <SheetSideNav />
        <Button variant="ghost">
          <FiPlus />
        </Button>
      </nav>
    </header>
  );
};

export default TopNav;
