import * as React from "react";
import { Button } from "./ui/button";

interface HamburgerMenuProps {
  handleClick: () => void;
  isOpen: boolean;
  variant:
    | "default"
    | "destructive"
    | "ghost"
    | "link"
    | "outline"
    | "secondary";
}

export function HamburgerMenu({
  handleClick,
  isOpen,
  variant,
}: HamburgerMenuProps) {
  React.useEffect(() => {
    // Toggle body overflow when the modal is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    // Cleanup function to reset body overflow on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <Button
      className="flex flex-col justify-center items-center"
      onClick={handleClick}
      variant={variant}>
      <span
        className={`block bg-foreground transition-all duration-300 ease-out 
              h-0.5 w-5 rounded-sm
              ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}
              `}></span>
      <span
        className={`block my-0.5 bg-foreground transition-all duration-300 ease-out
              h-0.5 w-5 rounded-sm
              ${isOpen ? "opacity-0" : "opacity-100"}
              `}></span>
      <span
        className={`block bg-foreground transition-all duration-300 ease-out
              h-0.5 w-5 rounded-sm
              ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}
              `}></span>
    </Button>
  );
}
