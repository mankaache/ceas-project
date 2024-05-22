import { commonImages } from "@/assets";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScreenSize } from "@/hooks";
import React from "react";
interface EventCardsProps {
  title: string;
  linkText: string;
  href: string;
  id?: string;
}
const EventCard = ({ title, linkText, href }: EventCardsProps) => {
  const { isMd, isXl, isXxl } = useScreenSize();

  React.useEffect(() => {}, [isMd]);

  return (
    <Link
      href={""}
      className={cn(
        "card w-full md:w-[48%] lg:w-[31%] cursor-pointer transition-all bg-white shadow-lg rounded-lg border border-gray-200 py-3 px-2"
      )}
    >
      <div
        className={
          "bg-black/20 w-full relative h-[250px] overflow-hidden rounded-lg mb-2"
        }
      >
        <Image
          fill
          priority
          alt="image"
          src={commonImages.noImage}
          className={"w-full h-full object-cover"}
        />
      </div>
      <Link href={""}>
        <h3 className={"block font-semibold text-primary text-2xl pt-1 pb-1"}>
          {title}
        </h3>
        {/*<p className={'text-base pb-3 text-light'}>Lorem Ipsum is simply dummy text </p>*/}
      </Link>
      <Link href={href} className={"text-center text-lg text-secondary "}>
        {linkText}
      </Link>
    </Link>
  );
};

export default EventCard;
