import { commonImages } from "@/assets";
import { FormationCards } from "../Cards";
import { Button } from "@/components";

const SectionThree = () => {
  return (
    <div className={"w-[95%] md:w-[90%] mb-20 mx-auto max-w-screen-2xl"}>
      <h3 className={"text-center text-3xl py-5 font-semibold pb-1"}>
        Nos <span className={" text-secondary"}>Programmes De </span> Formation
      </h3>
      <p
        className={
          "py-3 text-center mx-auto w-full md:w-[60%] text-base md:text-lg lg:text-xl mb-6"
        }
      >
        Nous proposons des programmes de formation aux organisations partenaires
        et aux organisations individuelles
      </p>
      <div className={"flex flex-wrap gap-6 items-stretch"}>
        {[
          {
            title:
              "Practiciens de l’observation independante des ressources forestieres",
            slug: "practiciens-de-lobservation-independante-des-ressources-forestieres",
            desc: "",
            image: commonImages.Aboutus4,
          },
        ].map((program, idx) => (
          <FormationCards
            key={idx}
            image={program.image}
            title={program.title}
            href={`/training-programs/${program.slug}`}
            desc={program.desc}
          />
        ))}
      </div>

      <div className={"flex mt-12 justify-center items-center"}>
        <Button href={"/training-programs"} text={"Voir tout nos programmes de formations"} />
      </div>
    </div>
  );
};

export default SectionThree;
