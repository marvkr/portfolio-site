import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, h as renderSlot, i as renderComponent, j as renderHead, m as maybeRenderHead } from '../astro_Vgpa9rId.mjs';
import { clsx } from 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
/* empty css                          */
import { twMerge } from 'tailwind-merge';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown, ChevronRight, Check, Circle, Sun, Moon } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/marvinkaunda/Desktop/Code Projects/Astro-Restaurant-Template/node_modules/.pnpm/astro@4.0.3_typescript@5.3.3/node_modules/astro/components/ViewTransitions.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center bg-background p-1 rounded-2xl border border-border/50",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function ModeToggle() {
  const [theme, setThemeState] = React.useState("theme-light");
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);
  React.useEffect(() => {
    const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState("theme-light"), children: "Light" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState("dark"), children: "Dark" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState("system"), children: "System" })
    ] })
  ] });
}

function HamburgerMenu({
  handleClick,
  isOpen,
  variant
}) {
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsxs(
    Button,
    {
      className: "flex flex-col justify-center items-center",
      onClick: handleClick,
      variant,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block bg-foreground transition-all duration-300 ease-out 
              h-0.5 w-5 rounded-sm
              ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}
              `
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block my-0.5 bg-foreground transition-all duration-300 ease-out
              h-0.5 w-5 rounded-sm
              ${isOpen ? "opacity-0" : "opacity-100"}
              `
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block bg-foreground transition-all duration-300 ease-out
              h-0.5 w-5 rounded-sm
              ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}
              `
          }
        )
      ]
    }
  );
}

function MainNavigationMenu() {
  const [isOpen, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NavigationMenu, { className: "absolute top-10 left-1/2 max-sm:-translate-x-1/2 sm:top-16 sm:left-16 z-50", children: /* @__PURE__ */ jsxs(NavigationMenuList, { children: [
      /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuLink, { children: /* @__PURE__ */ jsx(
        HamburgerMenu,
        {
          handleClick,
          isOpen,
          variant: "outline"
        }
      ) }) }),
      /* @__PURE__ */ jsx(NavigationMenuItem, { className: "max-sm:hidden", children: /* @__PURE__ */ jsx(NavigationMenuLink, { children: /* @__PURE__ */ jsx("a", { href: "/menu", className: navigationMenuTriggerStyle(), children: "Menu" }, "m") }) }),
      /* @__PURE__ */ jsx(NavigationMenuItem, { className: "max-sm:hidden", children: /* @__PURE__ */ jsx(NavigationMenuLink, { children: /* @__PURE__ */ jsx("a", { href: "/about", className: navigationMenuTriggerStyle(), children: "About" }, "a") }) }),
      /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuLink, { children: /* @__PURE__ */ jsx(Button, { className: "max-sm:h-full", variant: "outline", children: "Book a table" }) }) }),
      /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuLink, { children: /* @__PURE__ */ jsx(ModeToggle, {}) }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed w-screen overflow-hidden h-screen bg-background inset-0 z-50 p-4 
        ${isOpen ? "flex opacity-100 transition-opacity duration-300 ease-in" : "hidden opacity-0"}
        `,
        children: /* @__PURE__ */ jsxs("div", { className: "w-screen flex flex-col items-center justify-center pt-16 px-4 border border-border rounded-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6", children: /* @__PURE__ */ jsx(
            HamburgerMenu,
            {
              handleClick,
              isOpen,
              variant: "ghost"
            }
          ) }),
          /* @__PURE__ */ jsx("a", { className: "text-7xl hover:text-primary transition-colors", href: "/", children: "Home" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "text-7xl my-4 hover:text-primary transition-colors",
              href: "/menu",
              children: "Menu"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "text-7xl hover:text-primary transition-colors",
              href: "/about",
              children: "About"
            }
          )
        ] })
      }
    )
  ] });
}
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(
    "a",
    {
      ref,
      className: cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-medium leading-none", children: title }),
        /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children })
      ]
    }
  ) }) });
});
ListItem.displayName = "ListItem";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<script>
	const getThemePreference = () => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};
	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
 
	if (typeof localStorage !== 'undefined') {
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('dark');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
	}

	document.addEventListener('astro:before-swap', ev => {
		const isDark = getThemePreference() === 'dark';
        ev.newDocument.documentElement.classList[isDark ? 'add' : 'remove']('dark');
	});
<\/script> <html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"`, "><title>", "</title>", "", "</head> <body> ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "MainNavigationMenu", MainNavigationMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MainNavigationMenu", "client:component-export": "MainNavigationMenu" }), renderSlot($$result, $$slots["default"]));
}, "/Users/marvinkaunda/Desktop/Code Projects/Astro-Restaurant-Template/src/layouts/Layout.astro", void 0);

const MAX_RATING = 5;
function RatingCard({ rating, platform, logo }) {
  const filledStarArray = Array(Math.floor(rating)).fill(void 0);
  const emptyStarArray = Array(MAX_RATING - Math.floor(rating)).fill(void 0);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center border border-border max-sm:p-5 p-8 rounded-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center max-md:flex-col max-md:gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row", children: [
        filledStarArray.map((_, index) => /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-4 h-4 text-primary me-1",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 22 20",
            children: /* @__PURE__ */ jsx("path", { d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" })
          },
          index
        )),
        emptyStarArray.map((_, index) => /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-4 h-4 text-gray-300 me-1 dark:text-gray-500",
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 22 20",
            children: /* @__PURE__ */ jsx("path", { d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" })
          },
          index + filledStarArray.length
        ))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ jsx("p", { className: "ms-1 text-sm font-medium text-foreground", children: rating }),
        /* @__PURE__ */ jsx("p", { className: "ms-1 text-sm font-medium text-foreground", children: "out of" }),
        /* @__PURE__ */ jsx("p", { className: "ms-1 text-sm font-medium text-foreground", children: MAX_RATING })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center mt-3 gap-2", children: [
      /* @__PURE__ */ jsx("img", { className: "h-6 w-6", src: logo, alt: platform }),
      /* @__PURE__ */ jsxs("p", { className: "max-sm:text-xs text-xl", children: [
        "on ",
        platform
      ] })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:h-screen px-6 py-6 grid grid-flow-row lg:grid-cols-2 gap-4 overflow-hidden"> <div class="flex flex-col gap-4"> <div class="relative h-40 lg:h-full overflow-hidden rounded-3xl"> <img class="absolute w-full h-full inset-0 object-cover z-0" src="./images/menu-page-image.webp" alt="plate of sushi"> <div class="absolute inset-x-0 bottom-0 left-0 h-60 bg-gradient-to-t from-black to-transparent z-10"></div> <!-- H1 element for the restaurant name --> <h1 class="absolute bottom-3 lg:bottom-5 left-5 text-white text-3xl lg:text-7xl font-bold z-20">About</h1> </div> <div class="grid grid-cols-2 gap-4"> ${renderComponent($$result2, "RatingCard", RatingCard, { "rating": 4.7, "platform": "Google", "logo": "/google-logo.svg" })} ${renderComponent($$result2, "RatingCard", RatingCard, { "rating": 4.7, "platform": "TripAdvisor", "logo": "/tripadvisor-logo.svg" })} </div> </div> <div class="relative py-4 grid-rows-5"> <div class="row-span-1 grid-cols-2"></div> <div class="row-span-2"></div> <div class="row-span-2"></div> </div> </div> ` })}`;
}, "/Users/marvinkaunda/Desktop/Code Projects/Astro-Restaurant-Template/src/pages/about.astro", void 0);

const $$file = "/Users/marvinkaunda/Desktop/Code Projects/Astro-Restaurant-Template/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, about as a, cn as c };
