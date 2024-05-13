// import React, { useRef, useState } from 'react';
// Import Swiper React components
import {commonImages} from '@/assets'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeCarousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className={'bg-center home-slide  text-white bg-cover bg-no-repeat w-full h-full'} style={{backgroundImage:`url(${commonImages.slide1}`, backgroundRepeat:'no-repeat !important'}}>
                    <p className={'z-[100]'}>Slide 1</p>
                    </SwiperSlide>
                <SwiperSlide  className={'bg-center home-slide  text-white bg-cover bg-no-repeat w-full h-full'} style={{backgroundImage:`url(${commonImages.slide2}`, backgroundRepeat:'no-repeat !important'}}><p className={'z-[100]'}>Slide 1</p></SwiperSlide>
                <SwiperSlide  className={'bg-center home-slide  text-white bg-cover bg-no-repeat w-full h-full'} style={{backgroundImage:`url(${commonImages.slide3}`, backgroundRepeat:'no-repeat !important'}}><p className={'z-[100]'}>Slide 1</p></SwiperSlide>
                <SwiperSlide  className={'bg-center home-slide text-white bg-cover bg-no-repeat w-full h-full'} style={{backgroundImage:`url(${commonImages.slide4}`, backgroundRepeat:'no-repeat !important'}}><p className={'z-[100]'}>Slide 1</p></SwiperSlide>

            </Swiper>
        </>
    );
}
