import { commonImages } from "@/assets";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
interface CardProps {
  title: string;
  desc: string;
  href: string;
  id?: string;
  image?: string | StaticImageData;
}

const FormationCards = ({
  title,
  desc,
  href,
  image = commonImages.noImage,
}: CardProps) => {
  return (
    <Link
      href={href}
      className={
        "card text-wrap w-full md:w-[48%] lg:w-[31%] bg-white rounded-lg shadow-lg border border-gray-200 py-4 px-2"
      }
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
          src={image}
          className={"w-full h-full object-cover"}
        />
      </div>
      <div className={"w-full"}>
        <h3
          className={
            "font-semibold text-2xl text-primary pt-2 pb-3 text-center"
          }
        >
          {title}
        </h3>
        {desc && (
          <p className={"text-base pb-3 text-light text-center"}>{desc}</p>
        )}
        <Link
          className={
            "pt-2 font-semibold inline-block text-center text-lg text-secondary w-full"
          }
          href={href}
        >
          Voir les détails
        </Link>
      </div>
    </Link>
  );
};

export default FormationCards;
