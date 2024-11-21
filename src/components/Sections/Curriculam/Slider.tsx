import 'swiper/css';
import 'swiper/css/effect-coverflow';

import Image from 'next/image';
import { FC } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Amazon,
  Apple,
  Atlassian,
  Google,
  Lyft,
  Meta,
  Microsoft,
  Netflix,
  Zomato,
} from '@/assets/CurriculamSectionAssets';

const Slider: FC = () => {
    return (
        <div className="md:mt-40 mt-10 cursor-not-allowed">
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
                <SwiperSlide>
                    <Image src={Atlassian} alt="Atlassian"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Google} alt="Google"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Netflix} alt="Netflix"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Meta} alt="Meta"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Apple} alt="Apple"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Amazon} alt="Amazon"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Lyft} alt="Lyft"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Microsoft} alt="Microsoft"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Zomato} alt="Zomato"  />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;