import { BaseLayout } from "@/components";
import React from "react";

const Admission = () => {
  return (
    <BaseLayout>
      <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-center">
        <div className="conditions w-full md:w-4/5 lg:w-3/5 px-4 md:px-8 py-8">
          <h1 className="text-3xl text-primary">
            Conditions d’admission au CEAS-GRNE
          </h1>
          <p className="text-slate-500 text-sm">
            Formation ouverte pour les ressortissants des pays du Bassin du
            Congo qui remplissent les conditions ci-après :
          </p>

          <ul className="list-disc ml-4 lg:ml-8 mt-4 [&>li]:mt-1">
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
        </div>
      </div>
    </BaseLayout>
  );
};

export default Admission;
