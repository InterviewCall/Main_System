import { FC } from 'react';

import HeroSectionForm from '@/components/Forms/HeroSectionForm/HeroSectionForm';
import { HeroSectionOptions, HeroSectionStats } from '@/utils';

import HeroOption from './HeroOption';
import HeroStat from './HeroStat';

const HeroSection: FC = () => {
    return (
    <div className='flex md:flex-row flex-col px-4 md:px-24 bg-black md:pt-24 py-4 gap-8 md:gap-0'>
      <div className='md:w-1/2 w-full'>
        <div className='flex gap-20 flex-col'>
          <div className='flex gap-12 flex-col'>
            <h1 className='text-gradient text-2xl md:text-[40px] md:leading-[52px] font-bold'>
              Full Stack Web Development with Placement Assistance
            </h1>
            <h2 className='text-lg text-white font-normal md:block hidden'>
              Choose MERN stack or Spring Boot and acquire expertise through
              practical application and real-world projects.
            </h2>
            <div className='md:flex flex-wrap items-start gap-2 justify-start hidden'>
              {HeroSectionOptions.map((option) => (
                <HeroOption key={option} option={option} />
              ))}
            </div>
          </div>
          <div className='md:p-[3px] p-[2px] bg-gradient-to-br from-[#306EBD] to-[#00FFE0] rounded-2xl shadow-custom-multi md:block hidden'>
            <div className='bg-primaryblue p-6 min-h-32 rounded-xl flex justify-between items-center'>
              {HeroSectionStats.map((stat, index) => (
                <HeroStat key={index} stats={HeroSectionStats} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='md:w-1/2 w-full'>
        <div className='md:p-[3px] p-[2px] bg-gradient-to-tr from-[#00FFE0] to-[#000] rounded-2xl w-full md:w-fit ml-auto'>
          <div className='bg-gradient-to-tr from-[#000] to-[#020304] py-4 md:py-10 md:p-10 p-4 rounded-xl flex flex-col gap-6 md:gap-10 items-center'>
            <p className='md:text-3xl text-xl text-white font-semibold'>
              Book a <span className='text-teal'>Free</span> Live Demo Class
            </p>
            <div className='flex flex-col gap-8 w-full'>
              <div className='flex flex-col gap-6 w-full'>
                <HeroSectionForm />
              </div>
              <p className='text-[9px] text-white text-center'>
                By continuing, you agree to{' '}
                <span className='text-teal cursor-pointer'>
                  InterviewCall&apos;s Terms
                </span>{' '}
                and{' '}
                <span className='text-teal cursor-pointer'>Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden flex gap-12 flex-col'>
        <div className='flex-wrap items-start gap-2 justify-start flex'>
          {HeroSectionOptions.map((option) => (
            <HeroOption key={option} option={option} />
          ))}
        </div>
        <div className='md:p-[3px] p-[2px] bg-gradient-to-br from-[#306EBD] to-[#00FFE0] rounded-xl shadow-custom-multi'>
          <div className='bg-primaryblue p-4 rounded-xl flex justify-between items-center'>
            {HeroSectionStats.map((stat, index) => (
              <HeroStat key={index} stats={HeroSectionStats} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default HeroSection;