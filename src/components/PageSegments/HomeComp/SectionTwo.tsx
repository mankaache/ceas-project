/* eslint-disable react/no-unescaped-entities */
import { commonImages } from "@/assets";
import { Button } from "@/components";
import Image from "next/image";
const SectionTwo = () => {
  return (
    <div
      className={
        "max-w-screen-2xl flex justify-center items-center  lg:items-start mt-10 mb-20 flex-col-reverse lg:flex-row w-[96%] mx-auto gap-10 md:gap-24"
      }
    >
      <div className={""}>
        <div className={"grid grid-rows-2 grid-cols-2 gap-4"}>
          <div className={"size-[140px] md:size-[220px] relative"}>
            <Image
              fill
              priority
              src={commonImages.Aboutus1}
              alt={"about us"}
              className="rounded-tl-[70px] "
            />
          </div>
          <div className={"size-[140px] md:size-[220px]  relative"}>
            <Image
              fill
              priority
              src={commonImages.Aboutus2}
              alt={"about us"}
              className="rounded-tr-[70px]"
            />
          </div>
          <div
            className={
              "size-[140px] md:size-[220px] rounded-br-[70px] relative"
            }
          >
            <Image
              fill
              priority
              src={commonImages.Aboutus3}
              alt={"about us"}
              className="rounded-bl-[70px]"
            />
          </div>
          <div
            className={
              "size-[140px] md:size-[220px] rounded-br-[70px] relative"
            }
          >
            <Image
              fill
              priority
              src={commonImages.Aboutus4}
              alt={"about us"}
              className="rounded-br-[70px]"
            />
          </div>
        </div>
      </div>
      <div className={"w-full lg:w-[50%] px-4"}>
        <h3
          className={
            "font-semibold text-3xl md:text-4xl lg:text-4xl mb-4 border-l-4 border-secondary pl-2"
          }
        >
          We offer solutions to reduce the{" "}
          <span className={"text-secondary"}> bad practices </span>in farming
        </h3>
        <div className="flex flex-col items-center lg:items-start justify-center lg:pl-6 xl:pl-8">
          <p className={"text-lg leading-8 "}>
            There's a growing need for independent monitoring of how well Congo
            Basin countries enforce laws around natural resources. While there
            are many independent groups doing this, they don't work well
            together due to distrust, data quality concerns, and differing
            goals. This lack of collaboration has been a problem for over a
            decade.
          </p>
          <p className={"text-lg mt-2 leading-8"}>
            A team of specialists under the organization FLAG has been working
            since 2014 to improve independent monitoring of forest regulations
            in the Congo Basin.
          </p>
          <div className={"mt-8"}>
            <Button href={"/about"} text={"See more"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
