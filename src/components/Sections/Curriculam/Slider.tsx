import 'swiper/css';
import 'swiper/css/effect-coverflow';

import Image from 'next/image';
import { FC } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Amazon from '~/Logos/Amazon.png';
import Apple from '~/Logos/Apple.png';
import Atlassian from '~/Logos/Atlassian.png';
import Google from '~/Logos/Google.png';
import Lyft from '~/Logos/LYFT.png';
import Meta from '~/Logos/Meta.png';
import Microsoft from '~/Logos/Microsoft.png';
import Netflix from '~/Logos/Netflix.png';
import Zomato from '~/Logos/Zomato.png';

const Slider: FC = () => {
    return (
        <div className="mt-40 cursor-not-allowed">
            <Swiper
                effect={'coverflow'}
                grabCursor={false}
                centeredSlides={true}
                loop={true}
                slidesPerView={7}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                speed={2000}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -95,
                    depth: 250,
                    modifier: 3.0,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
            >
                <SwiperSlide>
                    <Image src={Atlassian} alt="burger"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Google} alt="burger"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Netflix} alt="burger"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Meta} alt="burger"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Apple} alt="burger"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Amazon} alt="burger"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Lyft} alt="burger"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Microsoft} alt="burger"  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Zomato} alt="burger"  />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;