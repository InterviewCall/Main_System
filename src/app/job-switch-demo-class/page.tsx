'use client';

import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import { FC } from 'react';

// import toast from 'react-hot-toast';
import JobSwitchForm from '@/components/Forms/JobSwitchForm/JobSwitchForm';
import AlumniCard from '@/components/Sections/MasterClass/AlumniCard';
import AuthJobSwitch from '@/HOC/AuthJobSwitch';
import {
  JobSwitchMasterclassMentorQualification,
  JobSwitchMasterclassSessionLearn,
  MasterClassAlumnis,
  MasterClassAlumnisMobile,
} from '@/utils';
import JobSwitch_SM from '~/images/JobSwitch_Mobile.png';
import JobSwitch_MD from '~/images/JobSwitch_Programme.png';
import MasterClassLearnerCard1 from '~/images/MasterClassLearnerCard1.png';
import MasterClassLearnerCard2 from '~/images/MasterClassLearnerCard2.png';
import MasterClassLearnerCard3 from '~/images/MasterClassLearnerCard3.png';

const MasterClassPage: FC = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   if(!localStorage.getItem('requestId')) {
  //     router.replace('/job-switch');
  //     toast.error('You havn\'t booked yet, Redirecting to the booking page...');
  //   }
  // }, [router]);

  return (
    <div className='bg-white relative'>
      {/* Top Image */}
      <div className='w-full mt-8 md:block hidden'>
        <Image src={JobSwitch_MD} alt='MasterClassTop' loading='lazy' />
      </div>

      <div className='w-full md:hidden block'>
        <Image src={JobSwitch_SM} alt='MasterClassTop' loading='lazy' />
      </div>

      <JobSwitchForm />

      {/* Main Content */}
      <div className='w-full md:w-[60%] mt-14 px-4 md:pl-16'>
        {/* Title */}
        <p className='text-[1.5rem] leading-7 md:text-[1.8rem] md:leading-[1.3] font-bold text-center md:text-left'>
          The Job Switch Blueprint: Unlock High-Paying Tech Roles with our Job Switch Bootcamp
        </p>

        {/* Session Details */}
        <div className='flex flex-col md:flex-row mt-8 gap-3 md:gap-x-5'>
          <p className='text-[#5a6273] flex text-[13px] gap-x-3'>
            <span className='font-semibold'>STARTS ON:</span>
            <span>November 19, 2024 7:30 PM (IST)</span>
          </p>
          <p className='text-[#5a6273] flex text-[13px] gap-x-3'>
            <span className='font-semibold'>ENDS ON:</span>
            <span>November 19, 2024 10:00 PM (IST)</span>
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
          This Masterclass is designed for professionals who are looking to transition into the tech industry or enhance their current skills to secure higher-paying roles. Whether you’re coming from a non-technical background or already have experience in tech, this session will give you a clear roadmap to success in web development.
          <br />
          <br />
          In this session, you’ll get an in-depth overview of our Job Switch Bootcamp, which covers everything from programming fundamentals to advanced topics like full-stack development, system design, and AI integration. Our experienced instructors will guide you through the key skills needed to thrive in today’s competitive job market, while also preparing you for technical interviews.
          <br />
          <br />
          If you&apos;re ready to take your career to the next level, this Masterclass will provide valuable insights on how to leverage cutting-edge technologies, improve your problem-solving skills, and enhance your employability.
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
          {JobSwitchMasterclassSessionLearn.map((item, index) => (
            <li key={index} className='text-[#5a6273]'>
              {item}
            </li>
          ))}
        </ul>
        <p className='text-[#5a6273] mt-3 md:ml-8 ml-4'>
        By the end of the session, you’ll know how our bootcamp can help you upgrade your skills and launch your career in tech.
        </p>

        {/* Mentor Section */}
        <div className='bg-[#f3fafe] w-full mt-2 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
           Meet Sunyul Hossen
          </p>
        </div>
        <ul className='list-disc mt-4 ml-6 md:ml-11 text-sm md:text-base'>
          {JobSwitchMasterclassMentorQualification.map((item, index) => (
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
        <div className='md:pl-7 flex md:flex-row flex-col  mt-7 gap-4 md:gap-5 justify-center items-center'>
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

export default AuthJobSwitch(MasterClassPage);
