import Image from 'next/image';
import { FC } from 'react';
import Marquee from 'react-fast-marquee';

import { PastLearners } from '@/utils';
// import { Learners } from '@/utils';
import MeetLearners from '~/images/MeetLearners.png';

// import LearnerCard from './LearnerCard';

const LearnerSection: FC = () => {
  return (
    <div className='bg-black px-4 md:px-24 py-24 flex flex-col space-y-24'>
      <Image src={MeetLearners} alt='' width={1850} height={122} className='md:block hidden'  />
      <p className='md:hidden block text-5xl font-bold bg-clip-text text-transparent bg-text-gradient'>
        Meet Our Past Learners
      </p>

      <div className='w-full'>
        <div className='relative mask-linear'>
          <Marquee speed={30} autoFill direction='left'>
            <div className='flex'>
              {PastLearners.map((learner, index) => (
                <Image key={index} src={learner.learnerImage} alt='learnerImage' width={150} height={150} loading='lazy' />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
      {/* <div className='flex md:flex-row md:justify-evenly flex-col items-end mx-auto md:mx-0 gap-8'>
        {Learners.map((learner, index) => (
          <LearnerCard
            key={index}
            learnerImage={learner.learnerImage}
            learnerCompany={learner.learnerCompany}
            learnerRole={learner.learnerRole}
            companyIcon={learner.companyIcon}
            companyRingColor={learner.companyRingColor}
            learnerImageHeight={learner.learnerImageHeight}
          />
        ))}
      </div> */}
    </div>
  );
};

export default LearnerSection;
