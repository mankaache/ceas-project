import { commonImages } from "@/assets";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCalendar } from "react-icons/fa";
import dayjs from "dayjs";
interface CardProps {
  title: string;
  desc?: string;
  href: string;
  id?: string;
  location?:string;
  image?: string | StaticImageData;
}

const FormationCards = ({
  title,
  desc,
  location,
  href,
  image = commonImages.noImage,
}: CardProps) => {
  return (
    <div
    className={
      "card mt-6 w-full md:w-[48%] lg:w-[31%] bg-white shadow-lg rounded-lg"
    }
  >
    <p
      className={
        "bg-black/20 w-full h-[300px] relative overflow-hidden rounded-lg mb-2"
      }
    >
      <Image
        src={image}
        fill
        priority
        alt={'image'}
        objectFit="cover"
      />
    </p>
    <div className={"w-full py-3 px-2"}>
      <h3 className={"font-semibold text-[1.3em] pt-2 pb-3 "}>
        {title}
      </h3>
      
      <Link
        className={
          "pt-2 font-semibold inline-block text-center w-full text-primary text-base"
        }
        href={href}
      >
        Voir les détails
      </Link>
    </div>
  </div>
  );
};

export default FormationCards;
