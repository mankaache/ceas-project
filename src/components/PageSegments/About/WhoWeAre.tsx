import { commonImages } from "@/assets";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className={"relative"}>
      <div className="w-[300px] h-[300px] rounded-full bg-primary/20 absolute left-[-150px] top-[0px]"></div>
      <div className={"my-12 w-[90%] md:w-[80%] mx-auto max-w-screen-2xl"}>
        <h3
          className={"text-center lg:pb-4 text-3xl text-primary font-semibold"}
        >
          Who we are
        </h3>

        <div
          className={"flex flex-col lg:flex-row items-start mt-4 gap-10 w-full"}
        >
          <div className={"relative flex-1 w-full max-h-[400px] aspect-square"}>
            <Image
              fill
              priority
              className={"w-full h-full object-cover"}
              alt={"d"}
              src={commonImages.Aboutus5}
            />
          </div>
          <p className={" flex-1 leading-8 text-lg text-justify"}>
            L’introduction des notions de bonne gouvernance dans le grand
            secteur de la gestion des ressources naturelles a induit la
            nécessité d’une surveillance plus accrue de l’application des textes
            et réglementations dans les pays du bassin du Congo tant par les
            administrations en charge du contrôle que par les tiers. Plus de 20
            ans après l’extension de l’Observation Indépendante (OI) de
            l’application des lois et réglementations dans la plupart des pays
            africains, l’on constate que c’est dans le secteur forestier que
            l’on observe le plus clairement une tendance vers la
            professionnalisation de la surveillance indépendante. En effet, la
            société civile et les communautés déploient une grande diversité
            d’outils, procédures et technologies, autant que d’expertises plus
            ou moins coordonnées pour réaliser des actions de suivi indépendant.
          </p>
        </div>
      </div>
      <div className={"my-20 w-[90%] md:w-[80%] mx-auto max-w-screen-2xl"}>
        <h3 className={"text-center text-xl font-semibold"}></h3>

        <div
          className={
            "flex items-start flex-col lg:flex-row-reverse mt-10 gap-10 w-full"
          }
        >
          <div className={"relative flex-1 w-full max-h-[400px] aspect-square"}>
            <Image
              fill
              priority
              className={"w-full h-full object-cover"}
              alt={"d"}
              src={commonImages.Aboutus5}
            />
          </div>
          <p className={" flex-1 leading-8 text-lg text-justify"}>
            L’introduction des notions de bonne gouvernance dans le grand
            secteur de la gestion des ressources naturelles a induit la
            nécessité d’une surveillance plus accrue de l’application des textes
            et réglementations dans les pays du bassin du Congo tant par les
            administrations en charge du contrôle que par les tiers. Plus de 20
            ans après l’extension de l’Observation Indépendante (OI) de
            l’application des lois et réglementations dans la plupart des pays
            africains, l’on constate que c’est dans le secteur forestier que
            l’on observe le plus clairement une tendance vers la
            professionnalisation de la surveillance indépendante. En effet, la
            société civile et les communautés déploient une grande diversité
            d’outils, procédures et technologies, autant que d’expertises plus
            ou moins coordonnées pour réaliser des actions de suivi indépendant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
