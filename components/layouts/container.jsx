import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return (
    <div className={cn("mx-auto dark:bg-zinc-900", className)}>{children}</div>
  );
};

export default Container;
