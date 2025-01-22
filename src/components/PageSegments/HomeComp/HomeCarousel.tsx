// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { commonImages } from "@/assets";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export default function HomeCarousel() {
  return (
    <>
      <Swiper
        speed={2000}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        className="mySwiper"
        loop={true}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
      >
        {[
        
          { image: commonImages.carousel1 },
          // { image: commonImages.carousel2 },
          { image: commonImages.carousel3 },
          { image: commonImages.carousel4 },
          { image: commonImages.carousel5 },
          { image: commonImages.carousel6 },
        ].map((item, idx) => (
          <SwiperSlide
            key={idx}
            className={
              "bg-center home-slide text-white bg-cover bg-no-repeat w-full h-full"
            }
            style={{
              backgroundImage: `url(${item.image.src})`,
              backgroundRepeat: "no-repeat!important",
            }}
          />
        ))}
      </Swiper>
    </>
  );
}
