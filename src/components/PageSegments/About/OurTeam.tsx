import { commonImages } from "@/assets";
import Image from "next/image";
import Teamcards from "./Teamcards";
import TeamMembers from "./TeamMembers";

const OurTeam = () => {
  return (
    <div>
      <div className="h-full w-full flex justify-center items-center flex-col py-8 px-6">
        <div className="pt-7 max-w-screen-2xl">
          <h2 className="text-center text-3xl md:text-4xl text-accent font-bold">
          NOTRE ÉQUIPE
          </h2>
          {/* <p className="w-full md:w-[60%] mx-auto pt-4 text-lg text-center">
            Ci-dessous, nous présentons un organigramme de la façon dont notre
            équipe est structurée et les différents niveaux d’autorité dans
            notre entreprise
          </p> */}
        </div>
        {/* <div className="flex relative justify-center items-center flex-wrap pt-2 h-[400px] md:h-[600px] aspect-square max-w-full">
          <Image
            fill
            objectFit="fill"
            src={commonImages.organigram}
            alt={"team"}
            className={""}
          />
        </div> */}
        <div className="w-[95%] md:w-[90%] mx-auto mt-14">
        <TeamMembers/>

        </div>

      </div>
    </div>
  );
};

export default OurTeam;
