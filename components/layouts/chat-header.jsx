import { Button } from "@/components/ui/button";
import { FiSun, FiMoon, FiShare2 } from "react-icons/fi";
import { ModeToggle } from "@/components/mode-toggle";

const Header = ({ children, className }) => {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4">
      <ModeToggle />
      <h4 className="self-center text-sm font-medium text-foreground">
        NextGPT AI {`(GPT 3.5)`}
      </h4>
      <Button variant="ghost">
        <FiShare2 />
      </Button>
    </header>
  );
};

export default Header;
