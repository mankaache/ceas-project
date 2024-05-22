import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher";
import { NAV_MENU } from "./NavMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";

export default function Sidebar() {
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {}, [toggle]);
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <Button
          onClick={() => setToggle(!toggle)}
          variant="outline"
          className={cn("border border-gray-900")}
        >
          <AiOutlineMenu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="px-1 py-2 overflow-y-scroll">
        <SheetHeader>
          <div className="w-full flex flex-col pb-4 items-center justify-center">
            <LanguageSwitcher />
            <div className="md:hidden">
              <SearchBar />
            </div>
          </div>
        </SheetHeader>

        <SheetDescription>
          <div className="w-full m-0 flex flex-col items-center justify-center">
            {NAV_MENU.map((item, idx) => (
              <SideItem key={idx} item={item} />
            ))}
          </div>
        </SheetDescription>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

const SideItem = ({ item }: { item: (typeof NAV_MENU)[number] }) => {
  const { pathname } = useRouter();

  return (
    <>
      {item.children ? (
        <Accordion
          type="single"
          collapsible
          className="w-full text-lg border-none"
        >
          <AccordionItem value="item-1 [&[data-state=open]>div]:bg-primary">
            <AccordionTrigger className="trigger text-lg font-bold p-4 hover:no-underline hover:bg-primary hover:text-white [&[data-state=open]]:bg-primary [&[data-state=open]]:text-white">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col border-l ml-2 ">
              {item.children.map((child) => (
                <Link key={child.href} href={child.href}>
                  <div
                    className={cn(
                      "px-2 py-4 m-0 text-lg font-semibold hover:text-primary",
                      pathname === child.href ? "text-primary" : ""
                    )}
                  >
                    <p className="ml-4">{child.title}</p>
                  </div>
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <div className="w-full">
          <Link href={item.href}>
            <div
              className={cn(
                "p-4 border-b w-full text-left text-lg font-bold hover:bg-primary hover:text-white",
                pathname === item.href ? "bg-primary text-white" : ""
              )}
            >
              {item.title}
            </div>
          </Link>
        </div>
      )}
    </>
  );
};
