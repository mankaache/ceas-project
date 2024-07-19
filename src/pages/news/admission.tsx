import { BaseLayout } from "@/components";
import React from "react";

const Admission = () => {
  return (
    <BaseLayout>
      <div className="max-w-screen-4xl mx-auto w-full flex items-center justify-center">
        <div className="conditions w-full md:w-4/5 lg:w-3/5 px-4 md:px-8 py-8">
          <h1 className="text-2xl font-semibold text-primary">
            Le centre d’Excellence et d’Application pour le Suivi de la Gestion
            des Ressources Naturelles et de l’Environnement CEAS-GRNE offre une
            formation pratique, qualifiante, courte et en interaction avec
            plusieurs référents comprenant
          </h1>

          <ul className="list-disc ml-4 lg:ml-8 mt-4 [&>li]:mt-1 [&>li]:text-lg">
            <li>01 mois à distance </li>
            <li>01 mois en présentiel au CEAS ;</li>
            <li>02 mois de stage en organisation.</li>
          </ul>

          <h2 className="text-2xl mt-10 font-semibold text-primary">
            Formation ouverte pour les ressortissants des pays du Bassin du
            Congo qui remplissent les conditions ci-après :{" "}
          </h2>
          <ul className="list-disc ml-4 lg:ml-8 mt-4 [&>li]:mt-1 [&>li]:text-lg pb-10">
            <li>Passeport en cours de validité </li>
            <li>
              Diplôme de BAC+3 dans les domaines de foresterie, du droit, de
              l’économie et/ou des sciences sociales{" "}
            </li>
            <li>
              Expérience professionnelle d’au moins trois années dans la
              pratique de l’OI{" "}
            </li>
            <li>
              Lettre de recommandation par une organisation impliquée dans
              l’observation indépendante des ressources forestières
            </li>
            <li>
              Note conceptuelle d’une page sur son projet de fin de formation,
              validée par son encadreur au sein de l’organisation{" "}
            </li>
            <li>
              Charte d’alternance dûment signée par les différentes parties{" "}
            </li>
            <li>
              Preuve d’engagement sur l’honneur de votre organisation à
              respecter le chronogramme des activités de formation
            </li>
            <li>Réussir avec succès un prétexte de sélection</li>
          </ul>

          <div className="mt-10">
            <h3 className="font-semibold text-primary text-2xl pb-5">
              Comment postuler ?
            </h3>
            <p className="text-lg ">
              {" "}
              Les candidat.e.s intéressé.e.s sont prié.e.s d’envoyer leur
              Curriculum vitae (CV), une lettre de motivation et une note
              conceptuelle sur un projet de fin de formation à l’adresse <span className="text-blue-500 font-semibold underline">flagprogramme@gmail.com</span> <br />
               Précisez en intitulé du mail de
              candidature : <strong>Candidature_Praticien OI_CEAS-GRNE</strong> 

              
            </p>

            <p className="text-lg mt-6 font-semibold">Période de candidature <br />
          Mai-juin <br />
Début de la formation : Juin -juillet
</p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Admission;
