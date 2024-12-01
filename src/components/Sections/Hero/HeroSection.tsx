'use client';

import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import HeroSectionForm from '@/components/Forms/HeroSectionForm/HeroSectionForm';
import { HeroSectionOptions, HeroSectionStats } from '@/utils';

import HeroOption from './HeroOption';
import HeroStat from './HeroStat';

const HeroSection: FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const pathName = usePathname();

  useEffect(() => {
    if(pathName == '/fullstack-mern') {
      setTitle('Full Stack Web Development with Placement Assistance');
      setDescription('Learn DSA, MERN, System Design, DevOps and AI to become the top 1% developer');
    }
    else if(pathName == '/job-switch') {
      setTitle('Job Switch Bootcamp with Placement Assistance');
      setDescription('Acquire in-demand skills and real-world expertise through practical application and projects tailored to help you switch careers or advance in your current domain.');
    }
  }, [pathName]);
  return (
    <div className='flex flex-col mt-5 md:flex-row px-4 md:px-24 bg-black md:pt-24 py-8 gap-8'>
      {/* Left Content */}
      <div className='md:w-1/2 w-full'>
        <div className='flex flex-col gap-8'>
          {/* Title and Subtitle */}
          <div className='flex flex-col gap-6'>
            <h1 className='text-gradient text-3xl md:text-[45px] md:leading-[74px] font-bold'>
              {title}
            </h1>
            <h2 className='text-base md:text-lg text-white font-light'>
              {description}
            </h2>
            {/* Options - Desktop */}
            <div className='hidden md:flex flex-wrap items-start gap-2'>
              {HeroSectionOptions.map((option, index) => (
                <HeroOption key={option} option={option} index={index} />
              ))}
            </div>
          </div>

          {/* Stats Section - Desktop */}
          <div className='md:w-[780px] hidden md:block bg-gradient-to-br from-[#306EBD] to-[#00FFE0] p-[3px] rounded-2xl shadow-custom-multi'>
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
        </div>
      </div>

      {/* Right Form */}
      <div className='md:w-1/2 w-full'>
        <HeroSectionForm />
      </div>

      {/* Options and Stats - Mobile */}
      <div className='flex flex-col gap-6 md:hidden'>
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
  );
};

export default HeroSection;
