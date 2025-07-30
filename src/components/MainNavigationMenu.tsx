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
      <NavigationMenu className="fixed lg:absolute top-10 left-1/2 max-lg:-translate-x-1/2 lg:top-16 lg:left-16 z-50">
        <NavigationMenuList>
          <NavigationMenuItem className="lg:hidden">
            <NavigationMenuLink>
              <HamburgerMenu
                handleClick={handleClick}
                isOpen={isOpen}
                variant="outline"
              />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="max-lg:hidden">
            <NavigationMenuLink>
              <a href="/">
                <Button variant="outline" size="sm">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline strokeLinecap="round" strokeLinejoin="round" points="9,22 9,12 15,12 15,22" />
                  </svg>
                </Button>
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="max-sm:hidden">
            <NavigationMenuLink>
              <a key="e" href="/experience" className={navigationMenuTriggerStyle()}>
                Experience
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="max-sm:hidden">
            <NavigationMenuLink>
              <a key="s" href="/skills" className={navigationMenuTriggerStyle()}>
                Skills
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <a href="mailto:marvinkr@icloud.com">
                <Button className="max-sm:h-full" variant={"outline"}>
                  Contact Me
                </Button>
              </a>
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
        <div className="w-screen flex flex-col items-center justify-center pt-16 px-4 border border-border rounded-lg">
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
            href="/experience">
            Experience
          </a>
          <a
            className="text-7xl hover:text-primary transition-colors"
            href="/skills">
            Skills
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
