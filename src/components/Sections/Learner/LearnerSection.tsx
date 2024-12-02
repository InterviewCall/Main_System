import Image from 'next/image';
import { FC } from 'react';
import Marquee from 'react-fast-marquee';

import { PastLearnersRow1, PastLearnersRow2 } from '@/utils';
import MeetLearners from '~/images/MeetLearners.png';

const LearnerSection: FC = () => {
  return (
    <div className='bg-black px-4 md:px-24 py-24 flex flex-col space-y-24'>
      <Image src={MeetLearners} alt='' width={1850} height={122} className='md:block hidden'  />
      <p className='md:hidden block text-5xl font-bold bg-clip-text text-transparent bg-text-gradient'>
        Meet Our Past Learners
      </p>

      <div className='w-full'>
        <div className='relative mask-linear flex flex-col md:gap-y-12 gap-y-8'>
          <Marquee speed={30} pauseOnHover autoFill direction='left'>
              {PastLearnersRow1.map((learnerImage, index) => (
                <Image 
                  key={index} 
                  src={learnerImage} 
                  alt='learnerImage' 
                  loading='lazy' 
                  className='mx-4 md:w-[8vw] w-[24vw]'
                />
              ))}
          </Marquee>

          <Marquee speed={30} pauseOnHover autoFill direction='right'>
              {PastLearnersRow2.map((learnerImage, index) => (
                <Image 
                  key={index} 
                  src={learnerImage} 
                  alt='learnerImage' 
                  loading='lazy' 
                  className='mx-4 md:w-[8vw] w-[24vw]'
                />
              ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LearnerSection;
