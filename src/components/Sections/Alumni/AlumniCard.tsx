'use client';

import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';

import { AlumniCardProps } from '@/types';
import Check from '~/images/Check.png';

const AlumniCard: FC<AlumniCardProps> = ({
  checkTitle,
  cardImage,
  videoPath,
  cardImageHeight = 416,
  cardImageWidth = 296,
  alumniName,
  alumniJobDesc,
  alumniJobDescTextColor,
  cardWrapperShadowColor,
  cardWrapperHeight = 'h-[416px]',
  cardWrapperWidth = 'w-[296px]',
  cardWrapperBackgroundColor,
  cardWrapperRingColor,
  cardShadowFromColor,
  cardShadowViaColor,
  videoPlayButtonBorderColor,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null!);
  const alumniNameArray = alumniName.split(' ');
  const alumniFirstName = alumniNameArray[0];
  const alumniLastName = alumniNameArray[1];

  useEffect(() => {
    if (isPlaying) {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  }, [isPlaying]);
  return (
    <div
      className={`relative flex items-center justify-center ${cardWrapperShadowColor} ${cardWrapperWidth} ${cardWrapperHeight} rounded-3xl ${cardWrapperBackgroundColor} overflow-clip ring-offset-4 ring-offset-black ring-4 ${cardWrapperRingColor}`}
    >
      {!isPlaying && (
        <div className='absolute top-0 w-full z-30 h-full bg-gradient-to-b from-transparent via-transparent to-[#000000b2]' />
      )}
      <div
        className={`absolute top-0 w-full z-50 h-full bg-gradient-to-b ${cardShadowFromColor} ${cardShadowViaColor} to-[#000000b6]`}
      />
      <div className='absolute drop-shadow-lg shadow-lg flex items-center gap-2 rounded-3xl p-2 top-4 left-4 text-xs z-50 bg-gradient-to-r from-[#1E1C1C] via-[#1e1c1cb0] to-[#1E1C1C]'>
        <Image src={Check} alt='Check' width={20} height={20} />
        <p className='text-center bg-clip-text text-transparent bg-text-gradient pr-2'>
          {checkTitle}
        </p>
      </div>
      {!isPlaying && (
        <Image
          src={cardImage}
          alt='N3'
          loading='lazy'
          width={cardImageWidth}
          height={cardImageHeight}
          className='object-fill absolute z-40 top-0'
        />
      )}
      {isPlaying && (
        <video
          loop
          autoPlay
          preload='none'
          ref={videoRef}
          src={videoPath}
          className='z-999 w-full h-full object-cover absolute top-0'
        >
          Your browser does not support the video tag.
        </video>
      )}
      {!isPlaying && (
        <button
          onClick={() => setIsPlaying(true)}
          className='rounded-full flex items-center justify-center bg-white ring-8 ring-opacity-45 ring-[#FFF] w-14 h-14 z-50'
        >
          <div
            className={`w-0 h-0 ml-1 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] ${videoPlayButtonBorderColor}`}
          ></div>
        </button>
      )}
      <div className='absolute flex flex-col items-start gap-2 rounded-3xl p-2 bottom-4 left-4 z-50'>
        <p className='text-left bg-clip-text font-bold text-transparent bg-text-gradient text-xl'>
          {alumniFirstName} <br /> {alumniLastName}
        </p>
        <p
          className={`text-lg ${alumniJobDescTextColor} encode-sans-expanded-light`}
        >
          {alumniJobDesc}
        </p>
      </div>
    </div>
  );
};

export default AlumniCard;
