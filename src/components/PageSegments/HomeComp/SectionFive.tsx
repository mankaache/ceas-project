import { commonImages } from "@/assets";
import { Button } from "@/components";
import Image from "next/image";

const SectionFive = () => {
  return (
    <div className={"w-full mt-16 bg-secondary/20"}>
      <div
        className={
          "max-w-screen-2xl flex w-[95%] md:w-[90%] pb-20 pt-6 md:pt-20 items-center gap-12 md:gap-20 justify-center  md:items-start mx-auto flex-col md:flex-row-reverse "
        }
      >
        <div className={"relative flex-1 w-full md:w-[50%]"}>
          <div
            className={
              //   "size-[300px] relative md:size-[400px] overflow-hidden rounded-lg  z-10"
              "h-[300px] w-full relative md:h-[400px] md:w-auto overflow-hidden rounded-lg  z-10 mt-8 md:mt-0"
            }
          >
            <Image
              fill
              priority
              src={commonImages.Aboutus5}
              alt={"a propos de nous"}
              className={"size-full object-cover"}
            />
          </div>
          <div
            className={
              "size-[80px] bg-accent absolute left-[-47px] top-[-47px] hidden md:block"
            }
          ></div>
        </div>
        <div className={"flex-1"}>
          <h3
            className={
              "font-semibold text-3xl leading-8 md:text-4xl xl:text-5xl mb-4  pl-2 text-center md:text-left"
            }
          >
            Nous <span className={"text-secondary"}> Priorisons </span>le
            travail sur le terrain <br className={"block md:hidden"} /> et les
            meilleures pratiques
          </h3>
          <p className={"text-lg md:text-xl mt-10 text-center md:text-left"}>
            Amener les gens à faire les choses correctement est essentiel pour
            l’environnement et l’écosystème dans son ensemble.
          </p>
          <div
            className={
              "mt-12 flex items-center justify-center md:justify-start"
            }
          >
            <Button href={"/about"} text={"Voyez ce que nous faisons"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
