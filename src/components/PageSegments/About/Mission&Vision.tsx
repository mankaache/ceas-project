/* eslint-disable react/no-unescaped-entities */
import { commonImages } from "@/assets";
import Image from "next/image";
const MissionVision = () => {
  return (
    <div className={"relative mt-6"}>
      <div className="w-[400px] h-[400px] rounded-full bg-orange-300/20 absolute left-[-200px] top-0"></div>

      <div className="max-w-screen-2xl flex md:w-[85%] mx-auto px-4 w-full items-center gap-6 flex-col justify-center py-4">
        <div className="border-dashed border-4 p-3 border-secondary w-full">
          <div
            className={"w-10 relative flex justify-center items-center mb-4"}
          >
            <Image
              fill
              priority
              className={"w-full object -cover"}
              src={commonImages.bulb}
              alt={"Mission"}
            />
          </div>
          <h3 className={"font-semibold text-3xl md:text-3xl pb-3"}>Mission</h3>
          <div className={"text-lg text-justify pb-2"}>
            <p>
              Les missions du Centre d'Excellence et d'Application au Suivi de
              la Gestion des Ressources Naturelles et de l’Environnement
              (CEAS-GRNE) peuvent être formulées comme suit:
            </p>
            <ul className="list-decimal ml-4 lg:ml-8 mt-4 [&>li]:mt-1">
              <li>
                Fournir un espace d'apprentissage mutuel et de renforcement des
                capacités pour toutes les parties prenantes impliquées dans la
                surveillance de la gestion des ressources naturelles;
              </li>
              <li>
                Promouvoir la professionnalisation et l'efficacité dans la
                surveillance de la gestion des ressources naturelles en offrant
                des formations et des ressources de qualité;
              </li>
              <li>
                Démontrer et promouvoir les bonnes pratiques en matière de
                surveillance des ressources naturelles, en partageant des
                méthodes efficaces et innovantes;
              </li>
              <li>
                Contribuer à l'amélioration de la qualité et de la crédibilité
                de l'observation indépendante en matière de gestion des
                ressources naturelles;
              </li>
              <li>
                Favoriser la concertation et l'excellence dans le domaine de la
                surveillance de la gestion des ressources naturelles.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-dashed border-4 p-3 border-secondary w-full">
          <div
            className={"w-10 flex relative justify-center items-center mb-4"}
          >
            <Image
              fill
              priority
              className={"w-full object -cover"}
              src={commonImages.bulb}
              alt={"Mission"}
            />
          </div>
          <h3 className={"font-semibold text-3xl md:text-3xl pb-3"}>Vision</h3>
          <div className={"text-lg text-justify pb-2"}>
            <p>
              Le CEAS-GRNE ambitionne à l’horizon 2030 de mettre sur le marché
              de l’emploi, une masse critique de praticiens qualifiés en matière
              de suivi de la gestion des ressources naturelles pouvant répondre
              à la fois aux besoins en ressource humaine des organisations qui
              œuvrent dans ce domaine et à la nécessité d’une gestion durable et
              responsable des ressources naturelles dans le Bassin du Congo.
            </p>
            <p className="mt-4">
              Le CEAS se veut ainsi être le principal centre d’excellence et
              d'expertise technique dans la région du Bassin du Congo, dédié à
              la formation en surveillance de la gestion des ressources
              naturelles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
