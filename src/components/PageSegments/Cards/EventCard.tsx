import { commonImages } from "@/assets";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { useScreenSize } from "@/hooks";
import React from "react";
interface EventCardsProps {
  title: string;
  image?: string | StaticImageData;
  id?: string;
}
const EventCard = ({
  title,
  image = commonImages.noImage,
}: EventCardsProps) => {
  const { isMd, isXl, isXxl } = useScreenSize();

  React.useEffect(() => {}, [isMd]);

  return (
    <div
      className={cn(
        "card w-full md:w-[30%] lg:w-[25%] transition-all bg-white shadow-lg rounded-lg border border-gray-200 py-3 px-2"
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
          src={image ?? commonImages.noImage}
          className={"w-full h-full object-cover"}
        />
      </div>

      <h3 className={"block font-semibold text-primary text-lg pt-1 pb-1"}>
        {title}
      </h3>
      {/*<p className={'text-base pb-3 text-light'}>Lorem Ipsum is simply dummy text </p>*/}
{/* 
      <Link href={href} className={"text-center text-lg text-secondary "}>
        {linkText}
      </Link> */}
    </div>
  );
};

export default EventCard;
