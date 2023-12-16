import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { HamburgerMenu } from "./HamburgerMenu";

export function MainNavigationMenu() {
  const [isOpen, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <NavigationMenu className="absolute top-10 left-1/2 max-sm:-translate-x-1/2 sm:top-16 sm:left-16 z-50">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <HamburgerMenu
                handleClick={handleClick}
                isOpen={isOpen}
                variant="outline"
              />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="max-sm:hidden">
            <NavigationMenuLink>
              <a key="m" href="/menu" className={navigationMenuTriggerStyle()}>
                Menu
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="max-sm:hidden">
            <NavigationMenuLink>
              <a key="a" href="/" className={navigationMenuTriggerStyle()}>
                About
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Button className="max-sm:h-full" variant={"outline"}>
                Book a table
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <ModeToggle />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div
        className={`fixed w-screen overflow-hidden h-screen bg-background inset-0 z-50 p-4 
        ${
          isOpen
            ? "flex opacity-100 transition-opacity duration-300 ease-in"
            : "hidden opacity-0"
        }
        `}>
        <div className="w-full flex flex-col items-center justify-center pt-16 px-4 border border-border rounded-lg">
          <div className="absolute top-6 right-6">
            <HamburgerMenu
              handleClick={handleClick}
              isOpen={isOpen}
              variant="ghost"
            />
          </div>
          <a className="text-7xl hover:text-primary transition-colors" href="/">
            Home
          </a>
          <a
            className="text-7xl my-4 hover:text-primary transition-colors"
            href="/menu">
            Menu
          </a>
          <a
            className="text-7xl hover:text-primary transition-colors"
            href="/about">
            About
          </a>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
