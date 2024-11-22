'use client';

import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';

import AlumniCard from '@/components/Sections/MasterClass/AlumniCard';
import {
  MasterClassAlumnis,
  MasterclassMentorQualification,
  MasterclassSessionLearn,
} from '@/utils';
import MasterClassLearnerCard1 from '~/images/MasterClassLearnerCard1.png';
import MasterClassLearnerCard2 from '~/images/MasterClassLearnerCard2.png';
import MasterClassLearnerCard3 from '~/images/MasterClassLearnerCard3.png';
import MasterClassTop from '~/images/MasterclassTop.png';

const MasterClassPage: FC = () => {
  const scriptContainerRef = useRef<HTMLDivElement | null>(null);

  const injectScript = () => {
    if (scriptContainerRef.current) {
      // Clear any existing script content
      scriptContainerRef.current.innerHTML = '';

      // Create and inject the script
      const script = document.createElement('script');
      script.src =
        'https://event.webinarjam.com/register/31ywotn/embed-form?formButtonText=Register&formAccentColor=%2329b6f6&formAccentOpacity=0.95&formBgColor=%23ffffff&formBgOpacity=1';
      script.async = true;
      script.onload = () => {
        console.log('Webinar script loaded successfully');
      };

      script.onerror = () => {
        console.error('Failed to load webinar script');
      };
      scriptContainerRef.current.appendChild(script);
    }
  };

  useEffect(() => {
    injectScript();
  }, []);

  useEffect(() => {
    const preventBackNavigation = () => {
      window.history.pushState(null, '', window.location.href);
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', preventBackNavigation);

    return () => {
      window.removeEventListener('popstate', preventBackNavigation);
    };
  }, []);

  return (
    <div className='bg-white relative'>
      {/* Top Image */}
      <div className='w-full'>
        <Image src={MasterClassTop} alt='MasterClassTop' layout='responsive' />
      </div>

      {/* Webinar Embed */}
      <div
        className='fixed top-[25%] right-4 md:right-16 w-64 h-28 z-10 rounded-md wj-embed-wrapper'
        data-webinar-hash='31ywotn'
        ref={scriptContainerRef}
      ></div>

      {/* Main Content */}
      <div className='w-full md:w-[70vw]  mt-14 px-4 lg:px-20'>
        {/* Title */}
        <p className='text-2xl md:text-4xl font-bold text-center md:text-left'>
          How E-commerce Platforms like Amazon Use Data Science
        </p>

        {/* Session Details */}
        <div className='flex flex-col md:flex-row mt-4 gap-3 md:gap-x-5'>
          <p className='text-[#5a6273] flex gap-x-3'>
            <span className='font-semibold'>STARTS ON:</span>
            <span>November 19, 2024 7:30 PM (IST)</span>
          </p>
          <p className='text-[#5a6273] flex gap-x-3'>
            <span className='font-semibold'>ENDS ON:</span>
            <span>November 19, 2024 10:00 PM (IST)</span>
          </p>
          <p className='text-[#5a6273] flex gap-x-3'>
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
        <div className='flex flex-wrap mt-7 gap-4 md:gap-8 justify-center'>
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
        <div className='flex flex-wrap gap-x-10 mt-8 justify-center'>
          {MasterClassAlumnis.map((alumni, index) => (
            <AlumniCard
              key={index}
              alumniImage={alumni.alumniImage}
              alumniName={alumni.alumniName}
              alumniGradDate={alumni.alumniGradDate}
              alumniPreScaler={alumni.alumniPreScaler}
              alumniPostScaler={alumni.alumniPostScaler}
              alumniRole={alumni.alumniRole}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasterClassPage;
