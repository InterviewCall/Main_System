import Image from 'next/image';
import { FC } from 'react';
import Marquee from 'react-fast-marquee';

import { AlumniCards } from '@/utils';
import People from '~/images/People.png';

import AlumniCard from './AlumniCard';
import DownloadBrochureButton from './DownloadBrochureButton';

const AlumniSection: FC = () => {
    return (
    <div className='flex flex-col gap-20 bg-black-to-blue md:pt-24 pt-12 overflow-x-hidden'>
      <div className='flex flex-col items-center gap-6 px-4 md:px-24'>
        <p className='md:text-2xl text-lg font-medium text-white text-center'>
          Full Stack Web Development Brochure
        </p>
        <DownloadBrochureButton buttonTitle='DOWNLOAD MERN BROCHURE' />
      </div>
      <div className='flex flex-col items-center px-4 md:px-24'>
        <div className='flex flex-col items-center gap-8'>
          <div>
            <p className='md:text-7xl text-4xl font-bold text-center bg-clip-text text-transparent bg-text-gradient'>
              Hear it from Our <br />
            </p>
            <p className='mt-2 md:text-[120px] leading-[72px] md:leading-[120px] text-7xl font-bold text-center bg-clip-text text-transparent bg-text-gradient'>
              Alumni
            </p>
          </div>
          <div className='flex flex-wrap  md:flex-row my-12 flex-col items-end justify-center px-4 w-full md:gap-x-56 md:gap-y-28 gap-16'>
            {AlumniCards.map((card, index) => (
              <AlumniCard
                key={index}
                checkTitle={card.checkTitle}
                cardImage={card.cardImage}
                videoPath={card.videoPath}
                alumniName={card.alumniName}
                alumniJobDesc={card.alumniJobDesc}
                alumniJobDescTextColor={card.alumniJobDescTextColor}
                cardWrapperShadowColor={card.cardWrapperShadowColor}
                cardWrapperBackgroundColor={card.cardWrapperBackgroundColor}
                cardWrapperHeight={card.cardWrapperHeight}
                cardWrapperRingColor={card.cardWrapperRingColor}
                cardShadowFromColor={card.cardShadowFromColor}
                cardShadowViaColor={card.cardShadowViaColor}
                videoPlayButtonBorderColor={card.videoPlayButtonBorderColor}
              />
            ))}
          </div>
          <div className='px-4 md:px-24 md:mt-0'>
            <p className='md:text-5xl text-lg font-bold text-center bg-clip-text text-transparent bg-text-gradient'>
              Meet the team that will make you a
            </p>
            <p className='md:text-7xl md:leading-[84px] text-2xl font-bold text-center bg-clip-text text-transparent bg-text-gradient'>
              Pro Software Engineer
            </p>
          </div>
        </div>
        <Image
          src={People}
          alt='People'
          width={1302}
          height={440}
          loading='lazy'
          className='px-4 md:px-24'
        />
        <div className='w-screen bg-darkblue'>
          <Marquee className='w-screen'>
            <div
              key={1}
              className='bg-darkblue flex gap-6 text-white md:text-xl text-base font-medium overflow-clip p-2'
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <p key={i}>Batch starts on 10th Sept 2024. LIMITED SEATS.</p>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
    );
};

export default AlumniSection;