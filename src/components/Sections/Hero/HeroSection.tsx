'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import FormModal from '@/components/Forms/FormModal/FormModal';
import { setShowModal } from '@/lib/features/heroSectionOtp/otpSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { HeroSectionOptions, HeroSectionStats } from '@/utils';
import HeroSectionImage from '~/images/HeroSectionImage.png';

import DownloadBrochureButton from '../Alumni/DownloadBrochureButton';
import HeroOption from './HeroOption';
import HeroStat from './HeroStat';

const HeroSection: FC = () => {
  const showModal = useAppSelector((state) => state.otpState.showModal);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const pathName = usePathname();

  useEffect(() => {
    if (pathName == '/fullstack-mern') {
      setTitle('Get Job Ready for Top Tech Companies');
      setDescription(
        '8-month structured program building all the right skills you need to get placed at top tech companies.'
      );
    } else if (pathName == '/job-switch') {
      setTitle('Level Up Your Career & Grab Your Dream Tech Job');
      setDescription(
        '6-month program designed by industry leaders to accelerate your switch to top product companies.'
      );
    } else if (pathName == '/transformer') {
      setTitle('Upskill & Ace Your Tech Career');
      setDescription('Program designed by industry leaders to accelerate your switch to top product companies.');
    }
  }, [pathName]);
  return (
    <>
      {showModal && <FormModal />}
      <div className='flex flex-col px-4 md:px-28 md:flex-row bg-black md:pt-28 pt-16 py-4 gap-8 md:gap-[8rem]'>
        {/* Left Content */}
        <div className='md:w-1/2 w-full'>
          <div className='flex flex-col gap-8 w-full'>
            {/* Title and Subtitle */}
            <div className='flex flex-col gap-6'>
              <h1 className='text-gradient text-[1.7rem] md:text-[38px] md:leading-[60px] font-bold'>
                {title}
              </h1>
              <h2 className='text-base md:text-lg text-white font-light'>
                {description}
              </h2>
              <div className='w-full flex flex-col md:flex-row gap-y-5 md:gap-x-6'>
                <button
                  className='relative md:w-[35%] w-full py-3 md:py-4 md:px-[2.2rem] uppercase font-[600] flex gap-5 bg-[#1371FF] text-white items-center justify-center overflow-hidden hover:scale-95 duration-300'
                  onClick={() => dispatch(setShowModal(true))}
                >
                  {/* <span className='animate-shine absolute w-full h-full bg-gradient-to-r from-transparent via-white to-transparent cursor-default'></span> */}
                  <p className='text-[18px]'>Apply Now</p>
                </button>
                
                <div className='cursor-pointer'>
                  <DownloadBrochureButton />
                </div>
              </div>
              {/* Options - Desktop */}
              <div className='hidden md:flex flex-wrap items-start gap-2 w-full'>
                {HeroSectionOptions.map((option, index) => (
                  <HeroOption key={option} option={option} index={index} />
                ))}
              </div>
            </div>

            {/* Stats Section - Desktop */}
            <div className='md:w-[49vw] hidden md:block bg-gradient-to-br from-[#306EBD] to-[#00FFE0] p-[3px] rounded-2xl shadow-custom-multi'>
              <div className='bg-primaryblue py-8 rounded-2xl flex justify-between items-center'>
                {HeroSectionStats.map((stat, index) => (
                  <HeroStat
                    key={index}
                    stats={HeroSectionStats}
                    stat={stat}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Options and Stats - Mobile */}
            <div className='flex flex-col mt-7 gap-6 md:hidden'>
              <div className='flex flex-wrap items-start gap-2'>
                {HeroSectionOptions.map((option, index) => (
                  <HeroOption key={option} option={option} index={index} />
                ))}
              </div>
              <div className='bg-gradient-to-br from-[#306EBD] to-[#00FFE0] p-[2px] rounded-xl shadow-custom-multi'>
                <div className='bg-primaryblue p-4 rounded-xl flex justify-between items-center'>
                  {HeroSectionStats.map((stat, index) => (
                    <HeroStat
                      key={index}
                      stats={HeroSectionStats}
                      stat={stat}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className='md:w-1/2 w-full'>
          <Image src={HeroSectionImage} alt='HeroSectionImage' className='w-full object-cover' />
        </div>
        
      </div>
    </>
  );
};

export default HeroSection;
