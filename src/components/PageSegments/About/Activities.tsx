import { commonImages } from "@/assets";
import { Button } from "@/components";
import Link from "next/link";
import Image from "next/image";

const Activities = () => {
  return (
    <div className="bg-secondary/20 pt-1 md:pt-0">
      <div className="w-[96%] lg:w-[95%] max-w-screen-2xl mx-auto mt-10 mb-4 ">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-12 pb-12 md:py-12 px-6 items-start w-full ">
          <div className={"relative w-[400px] aspect-square max-w-full flex-1"}>
            <Image
              fill
              objectFit="cover"
              src={commonImages.Aboutus2}
              alt={""}
              className={"w-full h-full"}
            />
          </div>
          <div className={"w-full flex-1"}>
            <h3 className={"font-semibold text-3xl text-center md:text-left"}>
              We have activities we carry out to promote{" "}
              <span className={"text-secondary"}>sustainaibility</span>{" "}
            </h3>
            <p className={"mb-5 mt-4 text-justify"}>
              We all have a role to play in ensuring a sustainable future. This
              means finding ways to meet our needs without harming the ability
              of future generations to meet theirs. To achieve this, we can
              engage in a variety of activities that promote sustainability.
              These might involve everyday practices like reducing waste and
              conserving resources, or larger-scale actions like supporting
              renewable energy initiatives or advocating for environmental
              policies.
            </p>
            <div className={"flex flex-col lg:flex-row items-center gap-3"}>
              <Button
                className="w-full text-center text-base lg:text-sm xl:text-base"
                href={"/news/events"}
                text={"See our events"}
              />
              <Link
                href={"/training-programs"}
                className={
                  "w-full text-center text-base lg:text-sm xl:text-base border px-4 py-3 hover:font-bold hover:border-2 border-secondary text-secondary rounded-lg bg-transparent"
                }
              >
                See our Training programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
