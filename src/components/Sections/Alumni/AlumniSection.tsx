'use client';

import Image from 'next/image';
import { FC, useRef } from 'react';
import Marquee from 'react-fast-marquee';

import { PlayVideoRef } from '@/types';
import { AlumniCards } from '@/utils';
import People from '~/images/People.png';

import AlumniCard from './AlumniCard';
import DownloadBrochureButton from './DownloadBrochureButton';

const AlumniSection: FC = () => {
  const videoRef1 = useRef<PlayVideoRef>(null!);
  const videoRef2 = useRef<PlayVideoRef>(null!);
  const videoRef3 = useRef<PlayVideoRef>(null!);
  const videoRef4 = useRef<PlayVideoRef>(null!);
  const videoRef5 = useRef<PlayVideoRef>(null!);

  const videoRefArray = [videoRef1, videoRef2, videoRef3, videoRef4, videoRef5];

  function handleVideoStart(videoIndex: number) {
    videoRefArray.forEach((_, index) => {
      if(index == videoIndex) {
        videoRefArray[index].current?.handlePlaying(true);
      }
      else {
        videoRefArray[index].current?.handlePlaying(false);
      }
    })
  }
  return (
    <div className='flex flex-col gap-20 bg-black-to-blue md:pt-24 pt-12 overflow-x-hidden'>
      {/* Brochure Download Section */}
      <div className='flex flex-col items-center gap-6 px-4 md:px-24'>
        <p className='md:text-2xl text-lg font-medium text-white text-center'>
          Full Stack Web Development Brochure
        </p>
        <DownloadBrochureButton buttonTitle='DOWNLOAD MERN BROCHURE' />
      </div>

      {/* Alumni Section */}
      <div className='flex flex-col items-center px-4 md:px-24'>
        <div className='flex flex-col items-center gap-8'>
          {/* Alumni Title */}
          <div>
            <p className='md:text-7xl text-4xl font-bold text-center bg-clip-text text-transparent bg-text-gradient'>
              Hear it from Our <br />
            </p>
            <p className='mt-2 md:text-[120px] leading-[72px] md:leading-[120px] text-7xl font-bold text-center bg-clip-text text-transparent bg-text-gradient'>
              Alumni
            </p>
          </div>

          {/* Alumni Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-y-16 md:gap-x-28 justify-items-center'>
            {/* First Row - 3 Cards */}
            {AlumniCards.slice(0, 3).map((card, index) => (
              <AlumniCard
                key={index}
                index={index}
                ref={videoRefArray[index]}
                startVideo={(videoIndex) => handleVideoStart(videoIndex)}
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

            {/* Second Row - 2 Cards */}
            <div className='col-span-full flex flex-wrap md:flex-nowrap justify-center gap-y-9 gap-x-28'>
              {AlumniCards.slice(3, 5).map((card, index) => (
                <AlumniCard
                  key={index}
                  index={index}
                  ref={videoRefArray[index]}
                  startVideo={(videoIndex) => handleVideoStart(videoIndex)}
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
          </div>

          {/* Pro Software Engineer Section */}
          <div className='px-4 md:px-24 md:mt-0'>
            <p className='md:text-5xl text-lg font-bold text-center bg-clip-text text-transparent bg-text-gradient'>
              Meet the team that will make you a
            </p>
            <p className='md:text-7xl md:leading-[84px] text-2xl font-bold text-center bg-clip-text text-transparent bg-text-gradient'>
              Pro Software Engineer
            </p>
          </div>
        </div>

        {/* People Image */}
        <Image
          src={People}
          alt='People'
          width={1302}
          height={440}
          loading='lazy'
          className='px-4 md:px-24 w-full object-contain'
        />

        {/* Marquee Section */}
        <div className='w-screen bg-darkblue mt-8'>
          <Marquee className='w-screen'>
            <div className='bg-darkblue flex gap-6 text-white md:text-xl text-base font-medium overflow-clip p-2'>
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
