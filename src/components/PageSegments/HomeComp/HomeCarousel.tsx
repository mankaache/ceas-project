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
          { image: commonImages.slide1 },
          { image: commonImages.slide2 },
          { image: commonImages.slide3 },
          { image: commonImages.slide4 },
        ].map((item) => (
          <SwiperSlide
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
