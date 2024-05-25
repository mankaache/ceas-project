import { commonImages } from "@/assets";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div>
      <div className="h-full w-full flex justify-center items-center flex-col py-8 px-6">
        <div className="pt-7 max-w-screen-2xl">
          <h2 className="text-center text-3xl md:text-4xl text-accent font-bold">
            Our Team Organisation
          </h2>
          <p className="w-full md:w-[60%] mx-auto pt-4 text-lg text-center">
            Below we present an organigram of how our team in structured and the
            different levels to authority in our company
          </p>
        </div>
        <div className="flex relative justify-center items-center flex-wrap pt-2 h-[400px] md:h-[600px] aspect-square max-w-full">
          <Image
            fill
            objectFit="fill"
            src={commonImages.organigram}
            alt={"team"}
            className={""}
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
