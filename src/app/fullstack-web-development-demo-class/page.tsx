'use client';

import Image from 'next/image';
import { FC } from 'react';

import FSWDForm from '@/components/Forms/FSWDForm/FSWDForm';
import AlumniCard from '@/components/Sections/MasterClass/AlumniCard';
import {
  FSDWMasterclassMentorQualification,
  FSDWMasterclassSessionLearn,
  MasterClassAlumnis,
  MasterClassAlumnisMobile} from '@/utils';
import FSWD_SM from '~/images/FSWD_Mobile.png';
import FSWD_MD from '~/images/FSWD_Programme.png';
import MasterClassDemo from '~/images/MasterclassDemo.png';
import MasterClassLearnerCard1 from '~/images/MasterClassLearnerCard1.png';
import MasterClassLearnerCard2 from '~/images/MasterClassLearnerCard2.png';
import MasterClassLearnerCard3 from '~/images/MasterClassLearnerCard3.png';

const MasterClassPage: FC = () => {

  return (
    <div className='bg-white relative'>
      {/* Top Image */}
      <div className='w-full mt-8 md:block hidden'>
        <Image src={FSWD_MD} alt='MasterClassTop' loading='lazy' />
      </div>

      <div className='w-full md:hidden block'>
        <Image src={FSWD_SM} alt='MasterClassTop' loading='lazy' />
      </div>

      <FSWDForm />

      {/* Main Content */}
      <div className='w-full md:w-[60%] mt-14 px-4 md:pl-16'>
        {/* Title */}
        <p className='text-[1.5rem] text-black leading-7 md:text-[1.8rem] md:leading-[1.3] font-bold text-center md:text-left'>
          Launch Your Tech Career with Full Stack Web Development & Guaranteed Placement Assistance
        </p>

        {/* Session Details */}
        <div className='flex flex-col md:flex-row mt-8 gap-3 md:gap-x-5'>
          <p className='text-[#5a6273] flex text-[13px] gap-x-2'>
            <span className='font-semibold'>STARTS ON:</span>
            <span>November 19, 2024 7:30 PM (IST)</span>
          </p>
          <p className='text-[#5a6273] flex text-[13px] gap-x-2'>
            <span className='font-semibold'>ENDS ON:</span>
            <span>November 19, 2024 10:00 PM (IST)</span>
          </p>
          <p className='text-[#5a6273] flex text-[13px] gap-x-2'>
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
          Welcome to this exclusive Masterclass on Full Stack Web Development with Placement Assistance, where we&apos;ll guide you through everything you need to know to launch a successful career in tech. Whether you’re a beginner or someone looking to upskill, this session will provide valuable insights into the world of full stack development, including the key technologies, tools, and frameworks you’ll be mastering.
          <br />
          <br />
          Throughout this Masterclass, we&apos;ll cover the roadmap to becoming a highly sought-after full stack developer, from understanding core programming languages to building real-world applications. Plus, we’ll dive deep into industry-specific topics like job interviews, building a strong portfolio, and leveraging placement assistance to land your dream job.
          <br />
          <br />
          With hands-on training from instructors who are top professionals from companies like Google, Microsoft, Meta, and Amazon, you&apos;ll gain the technical expertise and practical skills required to thrive in today&apos;s tech job market.
          <br />
          <br />
          Our focus isn&apos;t just on coding – we prepare you for the entire journey, from learning full stack development to mastering job interviews, negotiating your salary, and securing job placements with some of the biggest tech companies in the world.
          <br />
          <br />
          Join us and discover how this Masterclass can set you on the path to success!
        </div>

        {/* Learning Section */}
        <div className='bg-[#f3fafe] w-full mt-2 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            What You Will Learn From This Session
          </p>
        </div>
        <ul className='list-disc mt-4 ml-6 md:ml-11 text-sm md:text-base'>
          {FSDWMasterclassSessionLearn.map((item, index) => (
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
          {FSDWMasterclassMentorQualification.map((item, index) => (
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

        <br />
        <br />

        <Image src={MasterClassDemo} alt='MasterClassDemo' />

        <div className='bg-[#f3fafe] w-full mt-2 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            About InterviewCall Full Stack Web Development Program
          </p>
        </div>

        <div className='mt-3 text-[#5a6273] text-sm md:text-base'>
          InterviewCall Full Stack Web Development Program is an immersive, hands-on training course designed to transform aspiring developers into job-ready professionals. Whether you&apos;re new to coding or looking to advance your tech career, this program will provide you with the practical skills and real-world experience necessary to thrive in the rapidly growing tech industry.
          <br />
          <br />
          Our Full Stack Web Development Program offers:
          <br />
          <br />
          Comprehensive Curriculum: From basic programming to advanced full-stack web development, our structured modules cover the essential technologies you need to succeed, including HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. You’ll learn both front-end and back-end development, ensuring you&apos;re equipped to handle every aspect of web application development.
          <br />
          <br />
          Industry-Leading Instructors: Learn from seasoned professionals who have worked with top tech giants such as Google, Meta, and Amazon. Their expertise and insights will guide you through the curriculum, keeping you aligned with industry standards and best practices.
          <br />
          <br />
          AI Integration & DevOps: Stay ahead of the curve with lessons on integrating Generative AI into your web applications and applying DevOps principles for streamlined development and deployment. These cutting-edge skills are highly sought after by employers and will give you a competitive edge in the job market.
          <br />
          <br />
          Interview & Placement Support: Our program includes comprehensive interview preparation, including mock interviews, resume building, and LinkedIn optimization. Our dedicated placement team works closely with you to ensure you are well-prepared for real-world job opportunities, connecting you with over 550+ companies actively hiring tech talent.
          <br />
          <br />
          Job Guarantee & Flexibility: We&apos;re committed to your success! The program comes with 12 months of placement support, and if you don’t secure a job within this period, we offer a 100% refund. Flexible payment plans and EMI options ensure you can focus on your learning without worrying about finances.
          <br />
          <br />
          Scholarships & Financial Assistance: To ensure accessibility, we offer scholarships of up to ₹20,000 and affordable payment options. We believe that cost should not be a barrier to your career advancement.
          <br />
          <br />
          Why Choose InterviewCall Full Stack Web Development Program?
          <br />
          <br />
          Designed for Aspiring Developers: Whether you&apos;re a beginner or looking to upskill in web development, this program is tailored to help you master both foundational and advanced concepts in full-stack development.
          <br />
          <br />
          Real-World Projects: Gain hands-on experience by working on live projects that simulate real industry conditions, ensuring you’re job-ready from day one.
          <br />
          <br />
          Flexible Learning Options: With live interactive classes, recorded sessions, and 1:1 teaching assistant support, you can learn at your own pace and according to your schedule.
          <br />
          <br />
          Career-Ready Skills: From building dynamic websites to integrating AI and adopting DevOps practices, you’ll gain the skills that are in demand by employers worldwide.
          <br />
          <br />
          Take the next step in your tech career today! Join the InterviewCall Full Stack Web Development Program and unlock exciting opportunities in the fast-paced world of web development.
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

export default MasterClassPage;
