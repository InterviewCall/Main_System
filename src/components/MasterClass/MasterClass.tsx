

import Image from 'next/image';
import { FC } from 'react';

import AlumniCard from '@/components/Sections/MasterClass/AlumniCard';
import {
  MasterClassAlumnis,
  MasterClassAlumnisMobile,
} from '@/utils';
import MasterClassTop from '~/images/masterclass.png';
import MasterClassTopMobile from '~/images/masterclass_mobile.png';
import MasterClassLearnerCard1 from '~/images/MasterClassLearnerCard1.png';
import MasterClassLearnerCard2 from '~/images/MasterClassLearnerCard2.png';
import MasterClassLearnerCard3 from '~/images/MasterClassLearnerCard3.png';

// import MasterClassTop from '~/images/MasterclassTop.png';
import MasterclassForm from '../Forms/MasterclassForm/MasterclassForm';

const MasterClass: FC = () => {
  return (
    <div className='bg-white relative'>
      {/* Top Image */}
      <div className='w-full md:pt-6'>
        <Image src={MasterClassTop} alt='MasterClassTop' loading='lazy' className='xl:block hidden' />
        <Image src={MasterClassTopMobile} alt='MasterClassTop' loading='lazy' className='xl:hidden block' />
      </div>

      <MasterclassForm />

      {/* Main Content */}
      <div className='w-full md:w-[60%] mt-14 px-4 md:pl-16'>
        {/* Title */}
        <p className='text-[1.5rem] leading-6 md:text-[1.6rem] md:leading-[1.3] font-bold text-center md:text-left'>
        What it takes to be a Software Engineer at Microsoft, Google, Amazon
        </p>

        {/* Session Details */}
        <div className='flex flex-col md:flex-row mt-8 gap-3 md:gap-x-5'>
          <p className='text-[#5a6273] flex text-[13px] gap-x-3'>
            <span className='font-semibold'>STARTS ON:</span>
            <span>Saturday, March 15, 2025 7:30 PM (IST)</span>
          </p>
          <p className='text-[#5a6273] flex text-[13px] gap-x-3'>
            <span className='font-semibold'>ENDS ON:</span>
            <span>Saturday, March 15, 2025 9:30 PM (IST)</span>
          </p>
          <p className='text-[#5a6273] flex text-[13px] gap-x-3'>
            <span className='font-semibold'>VENUE:</span>
            <span>Online</span>
          </p>
        </div>

        <div className='w-full h-[1px] bg-[#5a6273] mt-8'></div>

        {/* About Section */}
        <div className='bg-[#f3fafe] w-full mt-20 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            About this Masterclass
          </p>
        </div>
        <div className='mt-3 text-[#5a6273] text-sm md:text-base'>
          {/* Did you know that Amazon generates over 35% of its sales through
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
          <br /> */}

By 2026, India is expected to create over 3 million new Software Engineering positions! But what’s driving this surge in demand? Software Engineers are the backbone of technological innovation, building scalable systems, optimizing performance, solving complex challenges, and driving digital transformation across industries.

If you aspire to become a Software Engineer at top tech companies like Microsoft, Google, or Amazon, this session is for you! Join industry expert Sunyul Hossen on Friday, 15th March, from 7:30 PM to 9:00 PM as he shares insider strategies, key skills, and the mindset required to crack high-paying software engineering positions. Don’t miss out!

Register now!
        </div>

        {/* Learning Section */}
        <div className='bg-[#f3fafe] w-full mt-2 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            What You Will Learn From This Session
          </p>
        </div>

        <br />

        <div>
        Skills required to become a Software Engineer at the world’s top companies <br />

How top engineers approach problem-solving and tackle complex technical challenges <br />

How to tackle interview rounds at the world’s top companies <br />

A systematic approach to breaking down problems and optimizing solutions for real-world applications
        </div>
        {/* <ul className='list-disc mt-4 ml-6 md:ml-11 text-sm md:text-base'>
          {MasterclassSessionLearn.map((item, index) => (
            <li key={index} className='text-[#5a6273]'>
              {item}
            </li>
          ))}
        </ul> */}

        {/* Mentor Section */}
        {/* <div className='bg-[#f3fafe] w-full mt-2 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            Meet Pulkit Aneja
          </p>
        </div> */}
        {/* <ul className='list-disc mt-4 ml-6 md:ml-11 text-sm md:text-base'>
          {MasterclassMentorQualification.map((item, index) => (
            <li key={index} className='text-[#5a6273]'>
              {item}
            </li>
          ))}
        </ul> */}

        {/* Learners Section */}
        <div className='bg-[#f3fafe] w-full mt-2 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            What our Learners have to say
          </p>
        </div>
        <div className='md:pl-7 flex md:flex-row flex-col mt-7 gap-4 md:gap-5 justify-center items-center'>
          <Image
            src={MasterClassLearnerCard1}
            alt='Learner 1'
            width={250}
            height={200}
            className='shadow-[16px_14px_15px_-3px_rgba(0,0,0,0.1)] rounded-md'
          />
          <Image
            src={MasterClassLearnerCard2}
            alt='Learner 2'
            width={250}
            height={200}
            className='shadow-[16px_14px_15px_-3px_rgba(0,0,0,0.1)] rounded-md'
          />
          <Image
            src={MasterClassLearnerCard3}
            alt='Learner 3'
            width={250}
            height={200}
            className='shadow-[16px_14px_15px_-3px_rgba(0,0,0,0.1)] rounded-md'
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
