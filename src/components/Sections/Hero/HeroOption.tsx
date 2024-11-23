import Image from 'next/image';
import { FC } from 'react';

import { HeroOptionProps } from '@/types';
import HeroStatOption1 from '~/images/HeroStatOption1.png';
import HeroStatOption2 from '~/images/HeroStatOption2.png';
import HeroStatOption3 from '~/images/HeroStatOption3.png';
import HeroStatOption4 from '~/images/HeroStatOption4.png';

const HeroOption: FC<HeroOptionProps> = ({ option, index }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-700 w-fit rounded-full md:py-[10px] relative md:px-4 py-2 px-2">
      <div className="w-5 h-5 flex items-center justify-center">
        {index == 0 ? (
          <Image src={HeroStatOption1} alt='' className='absolute object-cover w-[90px] md:h-[340px] h-[250px] md:right-[10.2rem] md:bottom-[-11.34rem] bottom-[-8.14rem]' />
        ) : index == 1 ? (
          <Image src={HeroStatOption2} alt='' className='absolute object-cover w-[90px] md:h-[340px] h-[250px] md:right-[9.9rem] md:bottom-[-11.34rem] bottom-[-8.14rem]' />
        ) : index == 2 ? (
          <Image src={HeroStatOption3} alt='' className='absolute object-cover w-[90px] md:h-[340px] h-[250px] md:right-[9.6rem] md:bottom-[-11.34rem] bottom-[-8.14rem]' />
        ) : (
          <Image src={HeroStatOption4} alt='' className='absolute object-cover w-[90px] md:h-[340px] h-[250px] md:right-[6.5rem] md:bottom-[-11.34rem] bottom-[-8.14rem]' />
        )}
      </div>
      <p className="text-white whitespace-nowrap md:text-[16px] text-xs font-medium">{option}</p>
    </div>
  );
};

export default HeroOption;
