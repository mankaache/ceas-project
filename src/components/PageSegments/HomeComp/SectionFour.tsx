import { commonImages } from "@/assets";
import { ActualiteCard, EventCard } from "../Cards";
import { Button } from "@/components";

const SectionFour = () => {
  return (
    <div className={"w-[95%] mx-auto md:w-[90%] max-w-screen-2xl px-2 md:px-0"}>
      <h3
        className={"text-center capitalize text-primary font-semibold text-3xl"}
      >
        Notre Actualité
      </h3>
      <p
        className={
          "py-3 text-center mx-auto w-full md:w-[60%] text-base md:text-lg lg:text-xl mb-6"
        }
      >
        Nous organisons des événements et organisons des sorties sur le terrain
        et proposons également de nombreuses opportunités de stages
      </p>


      <ActualiteCard/>
      <div className={"flex mt-12 justify-center items-center"}>
        <Button href={"/news/events"} text={"voir tout nos événements"} />
      </div>

    </div>
  );
};

export default SectionFour;
