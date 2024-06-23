"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useRouter } from "next/router";
import { useScreenSize } from "@/hooks";
import { menuMap } from "@/data";

const media: { title: string; href: string; description?: string }[] = [
  {
    title: menuMap["photos"],
    href: "/media/photos",
  },

  {
    title: menuMap["videos"],
    href: "/media/videos",
  },

  {
    title: menuMap["articles"],
    href: "/media/articles",
  },

  {
    title: menuMap["documents"],
    href: "/media/documents",
  },
];

const news: { title: string; href: string; description?: string }[] = [
  {
    title: menuMap["events"],
    href: "/news/events",
  },
  {
    title: menuMap["admission"],
    href: "/news/admission",
  },
];

export const NAV_MENU: {
  title: string;
  href: string;
  description?: string;
  children?: { title: string; href: string; description?: string }[];
}[] = [
  {
    title: menuMap["home"],
    href: "/",
  },
  {
    title: menuMap["about"],
    href: "/about",
  },
  {
    title: menuMap["training-programs"],
    href: "/training-programs",
  },
  {
    title: menuMap["media"],
    href: "/media",
    children: media,
  },
  {
    title: menuMap["news"],
    href: "/news",
    children: news,
  },
  {
    title: menuMap["e-learning"],
    href: process.env.NEXT_PUBLIC_E_LEARNING_URL as string,
  },
  {
    title: menuMap["contact"],
    href: "/contact",
  },
];

function NavMenuItem({ item }: { item: (typeof NAV_MENU)[number] }) {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <NavigationMenu
      className={cn(
        pathname === item.href ? "text-primary underline" : "",
        "font-extrabold"
      )}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          {item.children ? (
            <>
              <NavigationMenuTrigger className="text-base">
                {item.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className={cn(
                  "text-md min-w-[130px] gap-3 p-2 md:min-w-[130px] lg:min-w-[130px]"
                )}
              >
                <ul>
                  {item.children.map((child) => (
                    <ListItem
                      key={child.title}
                      title={child.title}
                      href={child.href}
                      className={cn(
                        child.href === pathname ? "bg-primary/30" : ""
                      )}
                    >
                      {child.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </>
          ) : (
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "text-base")}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link legacyBehavior passHref ref={ref} {...props}>
          <div
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/30 hover:text-accent-foreground focus:bg-primary/30 focus:text-accent-foreground",
              className
            )}
          >
            <div className="text-md font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function NavMenu() {
  const { isMd, isXl } = useScreenSize();

  const NAV_ITEMS = React.useMemo(() => {
    return NAV_MENU.filter((item) => {
      if (isMd) {
        return !["/training-programs", "/media", "/news"].includes(item.href);
      }

      if (isXl) {
        return ![
          "/training-programs",
          process.env.NEXT_PUBLIC_E_LEARNING_URL,
        ].includes(item.href);
      }

      return true;
    });
  }, [isMd, isXl]);
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-1">
        {NAV_ITEMS.map((item) => (
          <NavMenuItem key={item.title} item={item} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
