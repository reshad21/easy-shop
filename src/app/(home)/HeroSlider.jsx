"use client";
import mainSlider from '@/data/mainSlider';
import 'swiper/css/bundle';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleHeroSlider from './SingleHeroSlider';

const HeroSlider = () => {
    return (
        <section className='main-slider'>
            <Swiper
                slidesPerView={1}
                loop
                navigation
                effect='fade'
                autoplay
                modules={[Navigation, EffectFade, Autoplay]}
            >
                {
                    mainSlider.map((data) => <SwiperSlide key={data.id}>
                        <SingleHeroSlider data={data} />
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default HeroSlider;