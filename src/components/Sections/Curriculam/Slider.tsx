import 'swiper/css';
import 'swiper/css/effect-coverflow';

import Image from 'next/image';
import { FC } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AllCompanies } from '@/utils';

const Slider: FC = () => {
    return (
        <div className="md:mt-64 mt-10 mask-linear cursor-not-allowed">
            <Swiper
                effect={'coverflow'}
                grabCursor={false}
                centeredSlides={true}
                loop={true}
                slidesPerView={6}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                speed={2000}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -60,
                    depth: 210,
                    modifier: 2.5,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Autoplay]}
            >
                {AllCompanies.map((company, index) => (
                    <SwiperSlide key={index}>
                        <Image src={company} alt='companyImage' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;