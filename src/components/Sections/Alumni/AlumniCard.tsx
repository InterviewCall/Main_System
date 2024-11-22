'use client';

import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { FaRegCirclePause } from 'react-icons/fa6';

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
      onClick={() => setIsPlaying(!isPlaying)}
      className={`relative flex items-center justify-center ${cardWrapperShadowColor} ${cardWrapperWidth} ${cardWrapperHeight} rounded-3xl ${cardWrapperBackgroundColor} overflow-hidden ring-offset-4 ring-offset-black ring-4 ${cardWrapperRingColor} cursor-pointer`}
    >
      {!isPlaying && (
        <div className='absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#000000b2] z-30' />
      )}
      <div
        className={`absolute top-0 w-full h-full bg-gradient-to-b ${cardShadowFromColor} ${cardShadowViaColor} to-[#000000b6] z-50`}
      />
      <div className='absolute flex items-center gap-2 bg-gradient-to-r from-[#1E1C1C] via-[#1e1c1cb0] to-[#1E1C1C] rounded-3xl p-2 top-4 left-4 z-50 text-xs'>
        <Image src={Check} alt='Check' width={20} height={20} />
        <p className='text-transparent bg-clip-text bg-text-gradient pr-2'>
          {checkTitle}
        </p>
      </div>
      {!isPlaying && (
        <Image
          src={cardImage}
          alt='Card Image'
          width={cardImageWidth}
          height={cardImageHeight}
          className='absolute top-0 w-full h-full object-cover'
        />
      )}
      {isPlaying && (
        <>
          <video
          ref={videoRef}
          loop
          autoPlay={false}
          preload='none'
          src={videoPath}
          className='absolute top-0 w-full h-full cursor-pointer object-cover z-30'
        >
            Your browser does not support the video tag.
          </video>

          <button className='absolute z-40'>
            <FaRegCirclePause color='white' size={60} />
          </button>
        </>
      )}
      {!isPlaying && (
        <button
          className='absolute w-14 h-14 flex items-center justify-center bg-white rounded-full z-50'
        >
          <div
            className={`w-0 h-0 ml-1 border-t-[10px] border-b-[10px] border-l-[20px] ${videoPlayButtonBorderColor}`}
          />
        </button>
      )}
      <div className='absolute bottom-4 left-4 flex flex-col gap-2 z-50'>
        <p className='text-transparent bg-clip-text bg-text-gradient text-xl font-bold'>
          {alumniFirstName.toUpperCase()} <br /> {alumniLastName.toUpperCase()}
        </p>
        <p className={`${alumniJobDescTextColor} text-lg`}>
          {alumniJobDesc}
        </p>
      </div>
    </div>
  );
};

export default AlumniCard;
