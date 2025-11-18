import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide, } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';

const brandLogos = [amazon, casio, moonstar, randstad, star, start_people]

const Brands = () => {
    return <>
        <h2 className='text-lg text-secondary font-bold text-center mt-10'>We've helped thousands of sales teams</h2>
        <Swiper className='my-10'
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            autoplay={
                {
                    delay: 900,
                    disableOnInteraction: false,
                }
            }
            modules={[Autoplay]}


        >
            {
                brandLogos.map((logo, index) => <SwiperSlide key={index}>
                    <img src={logo} alt="" />
                </SwiperSlide>)
            }
        </Swiper>
    </>
};

export default Brands;