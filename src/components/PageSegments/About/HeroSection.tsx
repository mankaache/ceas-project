import { commonImages } from "@/assets";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const HeroSection = () => {
  return (
    <div
      className={
        "h-[55vh] md:h-[60vh] lg:h-[calc(100vh-150px)] xl:h-[calc(100vh-150px)] 2xl:h-[75vh] w-full bg-center bg-cover bg-no-repeat flex justify-center items-center"
      }
      style={{
        backgroundImage: ` url(${commonImages.Aboutus4.src})`,
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.6)",
        backgroundBlendMode: "darken",
      }}
    >
      
      <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
         {[
          "Le CEAS est un cadre Inédit et Unique de transfert de compétence et de partage d’expertise en matière de suivi de la gestion des RN et de l’Environnement dans la sous-région du bassin du Congo, voir en Afrique. Son modèle garanti l’émergence « des praticiens qualifiés pour un suivi des ressources naturelles de qualité",
          "Le CEAS-GRNE produit des experts en surveillance capables de fournir des informations de qualité et d’accompagner les services en charge de la gestion des RN dans leurs missions régaliennes de contrôle ",
          "Le CEAS-GRNE est le cadre idéal de renforcement des capacités des professionnels du suivi de la gestion des ressources naturelles, assurant ainsi la crédibilité et la pérennité de l’observation indépendante Indépendant et de son impact dans la réduction des illégalités forestières ",
          " Le CEAS-GRNE offre une formation professionnelle adaptée, pour augmenter la capacité et la crédibilité de la veille citoyenne dans la gestion des ressources forestières au niveau local, national ou régional ",
          "Le CEAS-GRNE met à niveau les capacités des observateurs en matière de surveillance communautaires des RN ",
          "Le CEAS-GRNE offre un cadre de formation pratique, idéal pour la recherche et l’analyse des enjeux et défis de la gestion durable des RN ",
          "Le CEAS-GRNE propose à travers des modules spécifiques, des enseignements et partages d’expériences sur les outils et techniques d’investigation appropriés aux problématiques de la gestion des RN ",
        ].map((item, idx) => (
          <SwiperSlide  key={idx} style={{color:'#fff', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p className="w-[80%] text-2xl capitalize leading-10 font-semibold"> {item}</p>
           
            </SwiperSlide>
         
        ))}
       </Swiper>
    </>
    </div>
  );
};

export default HeroSection;
