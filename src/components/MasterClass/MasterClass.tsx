'use client';

import Image from 'next/image';
import { FC } from 'react';

import AlumniCard from '@/components/Sections/MasterClass/AlumniCard';
import {
  MasterClassAlumnis,
  MasterClassAlumnisMobile,
  MasterclassMentorQualification,
  MasterclassSessionLearn,
} from '@/utils';
import MasterClassLearnerCard1 from '~/images/MasterClassLearnerCard1.png';
import MasterClassLearnerCard2 from '~/images/MasterClassLearnerCard2.png';
import MasterClassLearnerCard3 from '~/images/MasterClassLearnerCard3.png';
import MasterClassTop from '~/images/MasterclassTop.png';

import MasterclassForm from '../Forms/MasterclassForm/MasterclassForm';

const MasterClass: FC = () => {
  return (
    <div className='bg-white relative'>
      {/* Top Image */}
      <div className='w-full'>
        <Image src={MasterClassTop} alt='MasterClassTop' loading='lazy' />
      </div>

      <MasterclassForm />

      {/* Main Content */}
      <div className='w-full md:w-[65%] mt-14 px-4 md:pl-16'>
        {/* Title */}
        <p className='text-2xl md:text-3xl font-bold text-center md:text-left'>
          How E-commerce Platforms like Amazon Use Data Science
        </p>

        {/* Session Details */}
        <div className='flex flex-col md:flex-row mt-4 gap-3 md:gap-x-5'>
          <p className='text-[#5a6273] flex text-[13px] gap-x-3'>
            <span className='font-semibold'>STARTS ON:</span>
            <span>November 19, 2024 7:30 PM (IST)</span>
          </p>
          <p className='text-[#5a6273] flex text-sm gap-x-3'>
            <span className='font-semibold'>ENDS ON:</span>
            <span>November 19, 2024 10:00 PM (IST)</span>
          </p>
          <p className='text-[#5a6273] flex text-sm gap-x-3'>
            <span className='font-semibold'>VENUE:</span>
            <span>Online</span>
          </p>
        </div>

        <div className='w-full h-[1px] bg-[#5a6273] mt-10'></div>

        {/* About Section */}
        <div className='bg-[#f3fafe] w-full mt-20 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            About this Masterclass
          </p>
        </div>
        <div className='mt-3 text-[#5a6273] text-sm md:text-base'>
          Did you know that Amazon generates over 35% of its sales through
          personalised product recommendations? And how do you think that
          happens? That’s the power of Data Science.
          <br />
          <br />
          The role of data in e-commerce is pivotal—enabling companies to
          predict customer demand, segment their audience, and secure platforms
          from fraud.
          <br />
          <br />
          This LIVE session will guide you through the cutting-edge applications
          used by Amazon&apos;s Data Scientists, covering the use of data to
          forecast trends, optimise operations, and ensure security.
          <br />
          <br />
        </div>

        {/* Learning Section */}
        <div className='bg-[#f3fafe] w-full mt-2 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            What You Will Learn From This Session
          </p>
        </div>
        <ul className='list-disc mt-4 ml-6 md:ml-11 text-sm md:text-base'>
          {MasterclassSessionLearn.map((item, index) => (
            <li key={index} className='text-[#5a6273]'>
              {item}
            </li>
          ))}
        </ul>

        {/* Mentor Section */}
        <div className='bg-[#f3fafe] w-full mt-2 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            Meet Pulkit Aneja
          </p>
        </div>
        <ul className='list-disc mt-4 ml-6 md:ml-11 text-sm md:text-base'>
          {MasterclassMentorQualification.map((item, index) => (
            <li key={index} className='text-[#5a6273]'>
              {item}
            </li>
          ))}
        </ul>

        {/* Learners Section */}
        <div className='bg-[#f3fafe] w-full mt-2 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            What our Learners have to say
          </p>
        </div>
        <div className='flex md:flex-row flex-col  mt-7 gap-4 md:gap-5 justify-center items-center'>
          <Image
            src={MasterClassLearnerCard1}
            alt='Learner 1'
            width={300}
            height={200}
          />
          <Image
            src={MasterClassLearnerCard2}
            alt='Learner 2'
            width={300}
            height={200}
          />
          <Image
            src={MasterClassLearnerCard3}
            alt='Learner 3'
            width={300}
            height={200}
          />
        </div>

        {/* Alumni Section */}
        <div className='bg-[#f3fafe] w-full mt-2 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            Discover successful alumni
          </p>
        </div>
        <div className='flex md:flex-row flex-col gap-y-6 items-center justify-center'>
            <div className='md:hidden block'>
              {MasterClassAlumnisMobile.map((alumni, index) => (
                <AlumniCard 
                  key={index}
                  alumniImage={alumni.alumniImage}
                />
              ))}
            </div>
            <div className='md:flex gap-x-6 hidden'>
              {MasterClassAlumnis.map((alumni, index) => (
                <AlumniCard
                  key={index}
                  alumniImage={alumni.alumniImage}
                />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default MasterClass;
