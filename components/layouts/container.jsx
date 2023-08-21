import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return <div className={cn("mx-auto", className)}>{children}</div>;
};

export default Container;
