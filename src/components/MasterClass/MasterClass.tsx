'use client';

import clsx from 'clsx';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import { FC } from 'react';

import AlumniCard from '@/components/Sections/MasterClass/AlumniCard';
import { useAppSelector } from '@/lib/hooks';
// import { useAppSelector } from '@/lib/hooks';
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
import Loader from '../Sections/Hero/Loader';
// import Loader from '../Sections/Hero/Loader';

const MasterClass: FC = () => {
  const loading = useAppSelector((state) => state.masterclass.loading);
  // const router = useRouter();
  // useEffect(() => {
  //   router.back();
  // }, [router]);
  return (
    <div className={clsx(loading && 'flex justify-center items-center w-full h-full')}>
      {loading && <Loader />}
    <div className={clsx('bg-white relative w-full', loading && 'blur-sm')}>
        {/* <Loader /> */}
      {/* Top Image */}
      <div className='w-full md:pt-6'>
        <Image src={MasterClassTop} alt='MasterClassTop' loading='lazy' className='lg:block hidden' />
        <Image src={MasterClassTopMobile} alt='MasterClassTop' loading='lazy' className='lg:hidden block' />
      </div>

      <MasterclassForm />

      {/* Main Content */}
      <div className='w-full md:w-[67%] mt-14 px-4 md:pl-16'>
        {/* Title */}
        <p className='w-full text-[1.5rem] leading-6 md:text-[1.46rem] md:leading-[1.1] font-bold text-center md:text-left'>
        How to Think in Patterns — Not Just Solve Leetcode Problems
        </p>

        {/* Session Details */}
        <div className='flex flex-col mt-8 gap-x-3 gap-y-2 md:gap-x-5 w-full'>
          <div className='flex md:flex-row flex-col gap-x-3 gap-y-2 w-full'>
            <p className='text-[#5a6273] flex text-[15px] md:text-[14.4px] gap-x-1'>
              <span className='font-semibold'>STARTS ON:</span>
              <span>Saturday, 09th August, 2025 6:30 PM (IST)</span>
            </p>
            <p className='text-[#5a6273] flex text-[15px] md:text-[14.4px] gap-x-1'>
              <span className='font-semibold'>ENDS ON:</span>
              <span>Saturday, 09th August, 2025 8:00 PM (IST)</span>
            </p>
          </div>
          <p className='text-[#5a6273] flex text-[15px] md:text-[14.4px] gap-x-1'>
            <span className='font-semibold'>VENUE:</span>
            <span>Online</span>
          </p>
        </div>

        <div className='w-full h-[1px] bg-[#5a6273] mt-8'></div>

        {/* About Section */}
        <div className='bg-[#f3fafe] w-full mt-10 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            About this Masterclass
          </p>
        </div>
        <div className='mt-5 text-[#5a6273] text-sm md:text-base'>
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

By 2026, India is set to create over 3 million new Software Engineering roles. What&apos;s driving this boom? Tech companies are doubling down on engineers who can build scalable systems, solve complex problems, and drive real innovation.

<br /> If you’re aiming for companies like Google, Microsoft, or Amazon, just solving Leetcode won’t cut it. You need to be great at algorithms — and more importantly, sharp at recognizing patterns. <br /> This session is built to give you exactly that edge. 🔥 Master the algorithm patterns behind ₹30L–₹50L offers. <br /> Join industry expert <span><b>Sunyul Hossen — Ex-Goldman Sachs, Founder of InterviewCall —</b></span> this Saturday, <span><b>09th August</b></span>, from <span><b>6:30 PM</b></span> to <span><b>8:00 PM</b></span> as he shares insider strategies, key skills, and the mindset required to crack high-paying software engineering positions. Don’t miss out!

Register now!
        </div>

        {/* Learning Section */}
        <div className='bg-[#f3fafe] w-full mt-10 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            What You Will Learn From This Session
          </p>
        </div>

        <div className='mt-5'>
          <ul className='list-disc pl-3'>
            <li>The real patterns behind Google, Uber, and FAANG interviews</li>
            <li> 80 Algorithms that can solve 800+ Leetcode problems </li>
            <li>Why even good coders keep getting rejected</li>
            <li> How to structure your preparation</li>
          </ul>
        {/* Skills required to become a Software Engineer at the world’s top companies <br />

How top engineers approach problem-solving and tackle complex technical challenges <br />

How to tackle interview rounds at the world’s top companies <br />

A systematic approach to breaking down problems and optimizing solutions for real-world applications */}
        </div>
        {/* <ul className='list-disc mt-4 ml-6 md:ml-11 text-sm md:text-base'>
          {MasterclassSessionLearn.map((item, index) => (
            <li key={index} className='text-[#5a6273]'>
              {item}
            </li>
          ))}
        </ul> */}

        {/* Mentor Section */}
        <div className='bg-[#f3fafe] w-full mt-10 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            Meet Sunyul Hossen
          </p>
        </div>

        <ul className='list-disc pl-3 mt-5'>
          <li>Ex - Software Engineer @Goldman Sachs Poland</li>
          <li>Ex - Software Engineer @Adobe, American Express</li>
          <li>Offer Holder - Amazon London, The D.E. Shaw Group Luxembourg, Uber</li>
        </ul>
        {/* <ul className='list-disc mt-4 ml-6 md:ml-11 text-sm md:text-base'>
          {MasterclassMentorQualification.map((item, index) => (
            <li key={index} className='text-[#5a6273]'>
              {item}
            </li>
          ))}
        </ul> */}

        {/* Learners Section */}
        <div className='bg-[#f3fafe] w-full mt-10 p-3'>
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
        <div className='bg-[#f3fafe] w-full mt-10 p-3'>
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

        <div className='bg-[#f3fafe] w-full mt-10 p-3'>
          <p className='text-xl md:text-2xl text-[#085294] font-bold'>
            About InterviewCall
          </p>
        </div>

        <div className='mt-5 text-[#5a6273] text-sm md:text-base pb-10'>
        <b>About InterviewCall Job Switch Bootcamp</b> - <br />
        <br />
        InterviewCall Job Switch Bootcamp is an immersive, hands-on training program designed for professionals who are ready to make a career shift into web development or elevate their current tech roles to secure higher-paying positions. Whether you’re looking to transition from a non-tech background or level up your expertise in a tech field, our bootcamp offers the perfect blend of foundational knowledge, advanced skills, and real-world experience to make you job-ready in the rapidly growing tech industry. <br />
        <br />
        <b>Our Job Switch Bootcamp provides:</b> <br />
        <br />
        <b>Comprehensive Curriculum:</b> From programming basics to advanced full-stack web development, our structured modules ensure that you gain proficiency in essential technologies such as C++, JavaScript, React, Node.js, MongoDB, and more. Whether you&apos;re just starting or looking to enhance your existing skills, the program is designed to take you step by step, ensuring mastery over each concept. <br />
        <br />
        <b>Industry-Leading Instructors:</b> Learn from experienced instructors who have worked at top tech companies like Amazon, Google, and Microsoft. Their real-world insights and mentorship will guide you throughout your learning journey, ensuring you stay updated with industry trends and best practices. <br />
        <br />
        <b>AI Integration & DevOps:</b> Stay ahead of the curve with lessons on integrating Generative AI into your applications and applying DevOps principles. These cutting-edge skills are increasingly in demand and will help you stand out in a competitive job market. <br />
        <br />
        <b>Interview & Placement Support:</b> Our bootcamp goes beyond just teaching. We provide comprehensive interview preparation, including mock interviews, resume building, and personal branding through LinkedIn optimization. Our dedicated placement team works tirelessly to connect you with over 550+ companies actively hiring for tech talent. <br />
        <br />
        <b>Job Guarantee & Flexibility:</b> We’re committed to your success! The program includes 12 months of placement support, and if you don’t land a job within this period, we offer a 100% refund. Plus, our flexible payment plans and EMI options ensure that you can focus on your learning without worrying about finances. <br />
        <br />
        <b>Scholarships & Financial Assistance:</b> To make this career-boosting opportunity accessible to as many professionals as possible, we offer scholarships of up to ₹20,000, along with affordable payment plans, ensuring that cost isn’t a barrier to your career transformation. <br />
        <br />
        <span className='text-lg'><b>Why Choose InterviewCall Job Switch Bootcamp?</b></span> <br />
        <br />

        <ul className='list-disc space-y-2 pl-6'>
          <li>
          <b>⁠Designed for Professionals:</b> Whether you are in AI/ML, data science, project management, or another tech or non-tech field, our program is tailor-made to help you switch to web development or secure better roles in your current field.
          </li>
          <li>
          <b>Real-World Projects:</b> Learn by doing! You’ll work on hands-on projects, case studies, and real-world assignments that simulate industry conditions, giving you the practical experience employers are looking for.
          </li>
          <li>
          <b>Flexible Learning:</b> Attend live interactive classes, access recorded sessions, and benefit from 1:1 teaching assistant support—all designed to fit your schedule.
          </li>
        </ul> <br />
        Take the next step in your career today. Join the InterviewCall Job Switch Bootcamp and unlock new opportunities in the tech industry!
        </div>
      </div>
    </div>
    </div>
  );
};

export default MasterClass;
