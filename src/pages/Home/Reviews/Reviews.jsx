import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Swiper modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Your Review Card
import ReviewCard from './ReviewCard';

import customerTop from '../../../assets/customer-top.png'

const Reviews = ({ reviewsPromise }) => {

    const reviews = use(reviewsPromise);
    console.log(reviews);

    return <>
        <div className='text-center my-20'>
            <img src={customerTop} className='mx-auto' />
            <h1 className='text-secondary text-xl font-bold mb-3'>What our customers are sayings</h1>
            <p className='text-gray-400 w-[50%] mx-auto mb-10'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
        </div>

        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}

            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}

            coverflowEffect={{
                rotate: 150,
                stretch: 10,
                depth: 400,
                modifier: 1,
                scale: 0.75,
                slideShadows: true,
            }}

            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper py-10"
        >
            {reviews.map(review => (
                <SwiperSlide key={review.id}>
                    <ReviewCard review={review} />
                </SwiperSlide>
            ))}
        </Swiper>
    </>
};

export default Reviews;
