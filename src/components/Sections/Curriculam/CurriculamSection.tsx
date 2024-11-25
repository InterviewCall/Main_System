import Image from 'next/image';
import { FC } from 'react';
import Marquee from 'react-fast-marquee';

import {
  BlueTooth,
  Capture,
  ChooseMentor,
  Frame,
  Girl,
  Handshake,
  HashBack,
  LeftLight,
  LiveLearning,
  LiveLearningGlobe,
  Logo,
  LogoJust,
  Meeting,
  MentorText,
  P1,
  P2,
  P3,
  Resume,
  RightLight,
  Toggle,
  Triangle,
  Users,
} from '@/assets/CurriculamSectionAssets';
import AnimatedWrapperImages from '@/components/Caraousel/AnimatedWrapperImages';

// import { Companies } from '@/utils';
import Caraousel from './Caraousel';
import CourseCurriculam from './CourseCurriculam';
import MentorContainer from './MentorContainer';
import { Companies } from '@/utils';

const CurriculamSection: FC = () => {
  return (
    <div className='bg-gradient-to-b from-darkblue to-black px-4 md:px-24 md:py-24 py-4 flex flex-col space-y-24 overflow-hidden'>
      <div className='flex flex-col md:space-y-12 space-y-4'>
        <div className='md:space-y-6 space-y-3'>
          <p className='text-ankerblue font-semibold text-base md:text-2xl'>
            OUR CURRICULUM
          </p>
          <p className='font-semibold text-2xl md:text-5xl text-white'>
            Expert-Designed Course Structure
          </p>
        </div>
      </div>

      <CourseCurriculam />
      <p className='md:hidden block text-5xl font-bold bg-clip-text text-transparent bg-text-gradient'>
        Meet Mentors & Instructors
      </p>
      <Image
        src={MentorText}
        alt=''
        width={2157}
        height={122}
        className='md:block hidden'
      />

      <MentorContainer />

      <div className='flex flex-col space-y-12'>
        <div className='space-y-6'>
          <p className='text-ankerblue font-semibold text-base md:text-2xl'>
            FULL STACK WEB DEVELOPMENT COURSE STRUCTURE
          </p>
          <p className='font-semibold text-2xl md:text-5xl text-white'>
            Your Journey With InterviewCall
          </p>
        </div>
      </div>

      <div className='w-full md:space-y-24 space-y-12'>
        <div className='flex flex-col md:space-y-16 space-y-8'>
          <div className='flex items-center md:gap-8 gap-4'>
            <div className='md:w-20 md:h-20 w-10 h-10 rounded-xl flex items-center justify-center bg-white'>
              <p className='md:text-5xl text-2xl font-bold'>1</p>
            </div>
            <p className='md:text-5xl text-2xl font-bold text-white'>
              Onboarding Session
            </p>
          </div>

          <div className='md:grid md:grid-cols-4 flex flex-col md:gap-8 gap-20 w-full'>
            <div className='col-span-1 bg-select-card rounded-xl p-8 flex flex-col justify-between'>
              <div className='flex flex-col gap-4'>
                <Image src={LogoJust} alt='LogoJust' width={40} height={40} />
                <p className='bg-gradient-to-br from-white to-ankerblue inline-block text-transparent bg-clip-text font-semibold text-4xl'>
                  Intro Session
                </p>
              </div>

              <div className='flex flex-col gap-1'>
                <p className='text-header-grey font-bold text-lg'>
                  Start in a Customised
                </p>
                <p className='text-header-grey font-light'>
                  Cohort. Build Connections
                </p>
              </div>
            </div>

            <div className='col-span-2 p-8 bg-gradient-to-b from-[#0D35C2] via-[#0038FF] to-[#0D35C2] rounded-xl flex flex-col items-center justify-end gap-12 relative'>
              <Image
                src={HashBack}
                alt='HashBack'
                className='absolute w-full h-full top-0 z-40'
              />
              <Image
                src={P1}
                alt='P1'
                width={80}
                height={80}
                className='absolute -top-10 -left-4 z-50'
              />
              <Image
                src={P2}
                alt='P2'
                width={60}
                height={60}
                className='absolute -top-10 translate-x-[(calc(50%))] z-50'
              />
              <Image
                src={P3}
                alt='P3'
                width={80}
                height={80}
                className='absolute -top-10 -right-4 z-50'
              />
              <button className='z-50 h-20 md:w-96 w-72'>
                <Image src={ChooseMentor} alt='ChooseMentor' />
              </button>
              <p className='text-white font-light z-50'>
                Select the right mentor for guidance and gain invaluable
                insights to boost your career.
              </p>
            </div>

            <div className='col-span-1 min-h-72 md:h-auto bg-ankerblue rounded-xl p-8 relative flex flex-col items-start justify-end gap-1 overflow-clip'>
              <Image
                src={Girl}
                alt='Girl'
                width={400}
                height={400}
                className='object-cover scale-105 absolute top-0 left-0 z-0'
              />
              <p className='text-xl text-white z-20'>Meet a</p>
              <p className='text-4xl text-white z-20 font-semibold'>
                Learning Cordinator
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:space-y-16 space-y-8 pt-8 md:pt-0'>
          <div className='flex items-center gap-8'>
            <div className='md:w-20 md:h-20 w-10 h-10 rounded-xl flex items-center justify-center bg-white'>
              <p className='md:text-5xl text-2xl font-bold'>2</p>
            </div>
            <p className='md:text-5xl text-2xl font-bold text-white'>
              Live Learning
            </p>
          </div>

          <div className='relative md:block hidden w-full h-full'>
            {/* Background Image */}
            <Image
              src={LiveLearning}
              alt='Live Learning Background'
              className='w-full h-full object-cover'
            />

            {/* Center Ball Image */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] flex items-center justify-center'>
              <Image
                src={LiveLearningGlobe}
                alt='Animated Globe'
                className='animate-rotateSlow w-[268px] h-[268px] object-cover'
              />
            </div>
          </div>

          <div className='flex flex-col gap-10 w-full md:hidden'>
            <div className='col-span-1 bg-select-card rounded-xl p-8 flex flex-col gap-24'>
              <div className='flex flex-col gap-4'>
                <Image src={LogoJust} alt='LogoJust' width={40} height={40} />
                <p className='bg-gradient-to-br from-white to-ankerblue inline-block text-transparent bg-clip-text font-semibold text-3xl'>
                  Practice with <br />
                  Assignments <br />& Homework
                </p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-header-grey font-bold text-lg'>
                  10 Months of
                </p>
                <p className='text-header-grey font-light'>Assisted Learning</p>
              </div>
            </div>
            <div className='col-span-2 p-8 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#ACC6FA] via-[#012FD5] to-[#012299] rounded-xl flex flex-col items-center justify-start gap-4 relative'>
              <Image src={Logo} alt='Logo' width={201} height={47} />
              <p className='text-white font-medium md:text-5xl text-3xl text-center'>
                Live Classroom <br />& Doubt Solving
              </p>
            </div>
            <div className='col-span-1 grid grid-rows-2 gap-8'>
              <div className='bg-select-card rounded-xl p-8 row-span-1 flex items-center justify-center'>
                <div className='w-[132px] h-[72px]'>
                  <Toggle />
                </div>
              </div>
              <div className='bg-select-card rounded-xl p-8 row-span-2 flex flex-col gap-4'>
                <p className='bg-gradient-to-br from-white to-ankerblue inline-block text-transparent bg-clip-text font-semibold text-3xl'>
                  AI-assisted
                </p>
                <div className='bg-[#bfa7fb26] rounded-md p-2'>
                  <p className='text-header-grey font-light text-lg text-center'>
                    problem solving
                  </p>
                </div>
              </div>
            </div>
            <div className='col-span-1 grid grid-rows-3 gap-8'>
              <div className='bg-select-card rounded-xl p-8 row-span-2 flex flex-col items-center justify-between gap-4'>
                <div className='flex flex-col gap-1 items-center'>
                  <p className='bg-gradient-to-br from-[#FFB266] via-[#E9766F] to-[#C04350] inline-block text-transparent bg-clip-text font-semibold text-5xl'>
                    1:1
                  </p>
                  <p className='text-header-grey font-light text-lg text-center'>
                    Guidance from Mentors
                  </p>
                </div>
                <div className='w-[144px] h-[58px]'>
                  <Users />
                </div>
              </div>
              <div className='bg-select-card rounded-xl p-8 row-span-1 flex items-center justify-center'>
                <button className='rounded-full bg-[#273490] ring-offset-[0px] ring-offset-primaryblue ring-8 ring-blue-900 shadow-inner py-3 px-4'>
                  <p className='text-xl text-white'>Give 1:1 Mocks</p>
                </button>
              </div>
            </div>
            <div className='bg-select-card relative rounded-xl flex-col p-8 row-span-1 flex items-start justify-end gap-8'>
              <div className='top-0 absolute md:block hidden left-0 w-[106px] h-[154px]'>
                <LeftLight />
              </div>
              <div className='w-[52px] h-[52px]'>
                <BlueTooth />
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-header-grey font-bold text-lg'>
                  Cloud Sandbox
                </p>
                <p className='text-header-grey font-light'>
                  Hands-on practice in a real cloud environment.
                </p>
              </div>
            </div>
            <div className='bg-select-card relative rounded-xl flex-col p-8 row-span-1 flex items-start justify-end gap-8'>
              <div className='absolute md:block hidden top-0 right-0 w-[106px] h-[154px]'>
                <RightLight />
              </div>
              <div className='w-[52px] h-[52px]'>
                <Capture />
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-header-grey font-bold text-lg'>
                  1:1 Teaching Assistant
                </p>
                <p className='text-header-grey font-light'>
                  Problem Solving Support over chat and video call.
                </p>
              </div>
            </div>
            <div className='bg-select-card rounded-xl flex-col p-8 row-span-1 flex items-start justify-center gap-4'>
              <div className='flex flex-col gap-1'>
                <p className='text-header-grey font-bold text-lg'>
                  Interview Preparation
                </p>
                <p className='text-header-grey font-light'>
                  Dynamic Preparation for different Interviews.
                </p>
              </div>
              <div className='w-[206px] h-[260px] md:ml-auto md:mx-0 mx-auto'>
                <Frame />
              </div>
            </div>
          </div>

          <div className='flex flex-col md:space-y-16 space-y-8 pt-8 md:pt-0'>
            <div className='flex items-center gap-8'>
              <div className='md:w-20 md:h-20 min-w-10 min-h-10 rounded-xl flex items-center justify-center bg-white'>
                <p className='md:text-5xl text-2xl font-bold'>3</p>
              </div>
              <p className='md:text-5xl text-2xl font-bold text-white'>
                Training & Placement Support
              </p>
            </div>

            <div className='md:grid md:grid-cols-7 flex flex-col md:gap-8 gap-10'>
              <div className='col-span-5 object-contain'>
                <Image src={Meeting} alt='Meeting' className='object-cover' />
              </div>

              <div className='col-span-2 bg-select-card rounded-xl items-center p-8 gap-4 flex flex-col'>
                <div className='w-24 h-24'>
                  <Image src={Resume} alt='Resume' />
                </div>
                <div className='flex flex-col gap-1 items-center'>
                  <p className='bg-gradient-to-br from-white to-ankerblue inline-block text-transparent bg-clip-text font-semibold text-3xl'>
                    Resume Building
                  </p>
                  <p className='text-header-grey font-light text-center'>
                    Build an impactful, professional resume with expert
                    mentorship.
                  </p>
                </div>
              </div>

              <div className='col-span-7 z-50 object-contain bg-purple-800 py-4 rounded-xl'>
                <Marquee>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <p key={i} className='text-white text-xl'>
                      <span className='md:text-3xl text-base ml-3'>
                        GET INDUSTRY READY
                      </span>{' '}
                      Get access to exclusive job openings within our network.
                    </p>
                  ))}
                </Marquee>
              </div>

              <div className='col-span-7 relative object-contain space-y-4 md:space-y-0 bg-purple-800 p-8 rounded-xl flex flex-col md:flex-row justify-between'>
                <Image
                  src={Handshake}
                  alt='Handshake'
                  className='w-full -top-24 left-0 absolute md:block hidden'
                />
                <div className='flex flex-col gap-4 z-50'>
                  <p className='md:text-3xl text-xl font-bold text-white'>
                    Placement Training
                  </p>
                  <p className='md:text-xl text-sm font-light text-white'>
                    Focused training to excel in tech <br /> recruitment
                    process.
                  </p>
                </div>
                <div className='w-full h-[1px] bg-white bg-opacity-50 md:hidden' />
                <div className='flex flex-col gap-4 z-50'>
                  <p className='md:text-3xl text-xl font-bold text-white md:text-right'>
                    Placement Support
                  </p>
                  <p className='md:text-xl text-sm font-light text-white md:text-right'>
                    End-to-end assistance to secure your <br /> dream job.
                  </p>
                </div>
              </div>
            </div>
            <div className='relative md:block hidden'>
              <Caraousel />
              <div className='absolute w-24 h-24 md:left-[47%] left-[38%] -translate-y-4'>
                <Triangle />
              </div>
            </div>

            <div className='md:hidden block'>
              <div className='relative mask-linear'>
                <Marquee autoFill direction='right'>
                    <div className='flex'>
                      {Companies.map((item, index) => (
                        <Image key={index} src={item} width={80} height={80} alt='image' />
                      ))}
                    </div>
                </Marquee>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent opacity-50 pointer-events-none"></div> */}
              </div>

              <div className='relative mask-linear'>
                <Marquee speed={30} autoFill direction='left'>
                    <div className='flex'>
                      {Companies.map((item, index) => (
                        <Image key={index} src={item} width={80} height={80} alt='image' />
                      ))}
                    </div>
                </Marquee>
              </div>
            </div>

            {/* <div className='w-full md:hidden block'>
              <AnimatedWrapperImages />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculamSection;
