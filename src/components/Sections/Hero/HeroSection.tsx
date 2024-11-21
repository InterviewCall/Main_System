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
            <h1 className='text-gradient text-2xl md:text-[50px] md:leading-[74px] font-bold'>
              Full Stack Web Development with Placement Assistance
            </h1>
            <h2 className='text-lg text-white font-light md:block hidden'>
              Choose MERN stack or Spring Boot and acquire expertise through
              practical application and real-world projects.
            </h2>
            <div className='md:flex flex-wrap items-start gap-2 justify-start hidden'>
              {HeroSectionOptions.map((option, index) => (
                <HeroOption key={option} option={option} index={index} />
              ))}
            </div>
          </div>
          <div className='md:p-[3px] p-[2px] bg-gradient-to-br from-[#306EBD] to-[#00FFE0] rounded-2xl shadow-custom-multi md:block hidden'>
            <div className='bg-primaryblue py-8 min-h-32 rounded-2xl flex justify-between items-center'>
              {HeroSectionStats.map((stat, index) => (
                <HeroStat key={index} stats={HeroSectionStats} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='md:w-1/2 w-full'>
          <HeroSectionForm />
      </div>
      <div className='md:hidden flex gap-12 flex-col'>
        <div className='flex-wrap items-start gap-2 justify-start flex'>
          {HeroSectionOptions.map((option, index) => (
            <HeroOption key={option} option={option} index={index} />
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