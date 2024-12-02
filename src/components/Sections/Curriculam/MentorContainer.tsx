'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { FC, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineChevronLeft } from 'react-icons/md';

import Dequeue from '@/library/Dequeue';
import { Mentor } from '@/types';
import { Mentors } from '@/utils';
import { mentorCardPositioning } from '@/utils';

import MentorCard from './MentorCard';

const queue = new Dequeue<Mentor[]>();
const chunkSize = 3;
for(let index = 0; index < Mentors.length; index += chunkSize) {
  const chunk = Mentors.slice(index, index + chunkSize);
  queue.pushBack(chunk);
}

const MentorContainer: FC = () => {
  const [mentorDetails, setMentorDetails] = useState<Mentor[]>(queue.front());
  const [tracker, setTracker] = useState(1);

  const experienceOfMentor = mentorDetails[0].mentorExperience.split('|');

  function handleNext() {
    if(tracker == mentorDetails.length) {
      const shiftElementFromQueue = queue.popFront();
      if(shiftElementFromQueue) queue.pushBack(shiftElementFromQueue);
      setMentorDetails(queue.front());
      setTracker(1);
      return;
    }

    setTracker(tracker + 1);

    setMentorDetails((prevDetails) => {
      const newMentorDetails = [...prevDetails];
      const shiftedMentorDetails = newMentorDetails.shift();
      if (shiftedMentorDetails) newMentorDetails.push(shiftedMentorDetails);
      return newMentorDetails.map((mentor, index) => ({
        ...mentor,
        cardWrapperTopPosition: mentorCardPositioning.topPositions[index],
        cardWrapperLeftPosition: mentorCardPositioning.leftPositions[index],
        cardWrapperZIndex: mentorCardPositioning.zIndexes[index],
        cardHeight: mentorCardPositioning.cardHeight[index],
        cardWidth: mentorCardPositioning.cardWidth[index],
      }));
    });
  }

  // function handlePrev() {
  //   if(tracker == 1) {
  //     const shiftElementFromQueue = queue.popBack();
  //     if(shiftElementFromQueue) queue.pushFront(shiftElementFromQueue);
  //     setMentorDetails(queue.front());
  //     return;
  //   }

  //   setTracker(tracker - 1);

  //   setMentorDetails((prevDetails) => {
  //     const newMentorDetails = [...prevDetails];
  //     const shiftedMentorDetails = newMentorDetails.pop();
  //     if (shiftedMentorDetails) newMentorDetails.unshift(shiftedMentorDetails);
  //     return newMentorDetails.map((mentor, index) => ({
  //       ...mentor,
  //       cardWrapperTopPosition: mentorCardPositioning.topPositions[index],
  //       cardWrapperLeftPosition: mentorCardPositioning.leftPositions[index],
  //       cardWrapperZIndex: mentorCardPositioning.zIndexes[index],
  //       cardHeight: mentorCardPositioning.cardHeight[index],
  //       cardWidth: mentorCardPositioning.cardWidth[index],
  //     }));
  //   });
  // }

  return (
    <>
      {/* Desktop View */}
      <div className='md:w-[100%] relative bg-gradient-to-br from-[#15111C] to-[#000000] px-4 md:pl-[5rem] md:pr-[4.83rem] py-20 rounded-[3rem] md:flex justify-between hidden z-10 drop-shadow-2xl shadow-sm shadow-[#ffffff36]'>

      <div className='top-outline absolute top-0 left-0 w-full h-[1px] bg-custom-gradient'></div>
      <div className='bottom-outline absolute bottom-0 left-0 w-full h-[1px] bg-custom-gradient'></div>

        {/* Mentor Details */}
        <div className='flex flex-col gap-y-12'>
          <p
            className={clsx(
              'inline-block text-transparent bg-clip-text text-7xl md:text-[3.3rem] font-bold',
              mentorDetails[0].mentorAlt === 'N3'
                ? 'bg-gradient-to-r from-[#00C2FF] to-white'
                : mentorDetails[0].mentorAlt === 'N2'
                ? 'bg-gradient-to-r from-[#ECC231] to-white'
                : mentorDetails[0].mentorAlt == 'N4'
                ? 'bg-gradient-to-r from-[#03fd9a] to-white'
                : mentorDetails[0].mentorAlt == 'N5'
                ? 'bg-gradient-to-r from-[#0167e3] to-white'
                : mentorDetails[0].mentorAlt == 'N6'
                ? 'bg-gradient-to-r from-[#c0c0c0] to-white'
                : 'bg-gradient-to-r from-[#FF4C65] to-white'
            )}
          >
            {mentorDetails[0].mentorName}
          </p>

          <p className='text-header-grey w-full text-sm md:text-[14px] leading-6'>
            {experienceOfMentor.length == 5 ? (
              <>
                <span>
                  {experienceOfMentor[0]} | {experienceOfMentor[1]}
                </span>

                <br />

                <span>
                  {experienceOfMentor[2]}
                </span>

                <br />

                <span>
                  {experienceOfMentor[3]} | {experienceOfMentor[4]}
                </span>
              </>
            ) : (
              <>
                <span>
                  {experienceOfMentor[0]}
                </span>

                <br />

                <span>
                  {experienceOfMentor[1]}
                </span>

                <br />

                <span>
                  {experienceOfMentor[2]} | {experienceOfMentor[3]}
                </span>
              </>
            )}
          </p>

          <button
            onClick={() => window.open(mentorDetails[0].mentorLinkedinProfile, '_blank')}
            className='py-2 px-4 rounded-full flex gap-3 items-center border border-white w-fit text-white hover:text-blue-600 duration-300'
          >
            <p className='text-sm md:text-base font-medium'>
              VISIT LINKEDIN PROFILE
            </p>
            <FaLinkedin
              style={{
                color: '#0076B2',
                width: '20px',
                height: '20px',
              }}
            />
          </button>
        </div>

        {/* Mentor Cards */}
        <div className='flex flex-row items-center justify-center gap-8 md:gap-[5rem]'>
          <button
            onClick={handleNext}
            className='bg-gradient-to-tl flex items-center justify-center translate-x-[3.5rem] from-black to-[#313036] w-10 h-10 md:w-11 md:h-11 rounded-full ring-2 ring-slate-400 hover:scale-125 duration-300'
          >
            <MdOutlineChevronLeft
              style={{
                color: 'white',
                width: '24px',
                height: '24px',
              }}
            />
          </button>

          <div className='relative w-[300px] md:w-[318px] h-[275px]'>
            {mentorDetails.map((mentor, index) => (
              <MentorCard
                key={index}
                mentorImage={mentor.mentorImage}
                mentorAlt={mentor.mentorAlt}
                mentorName={mentor.mentorName}
                mentorExperience={mentor.mentorExperience}
                mentorLinkedinProfile={mentor.mentorLinkedinProfile}
                cardWrapperTopPosition={mentor.cardWrapperTopPosition}
                cardWrapperLeftPosition={mentor.cardWrapperLeftPosition}
                cardWrapperZIndex={mentor.cardWrapperZIndex}
                cardHeight={mentor.cardHeight}
                cardWidth={mentor.cardWidth}
              />
            ))}
          </div>
          
          {/* <button
            onClick={handleNext}
            className='bg-gradient-to-tl flex items-center justify-center -translate-x-4 translate-y-1 from-black to-[#313036] w-10 h-10 md:w-11 md:h-11 rounded-full ring-2 ring-slate-400 hover:scale-125 duration-300'
          >
            <MdOutlineChevronRight
              style={{
                color: 'white',
                width: '24px',
                height: '24px',
              }}
            />
          </button> */}
        </div>
      </div>

      {/* Mobile View */}
      <div className='flex flex-col md:hidden mx-auto gap-1'>
        {Mentors.map((mentor, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center gap-1'
          >
            <Image
              src={mentor.mentorImage}
              alt={mentor.mentorAlt}
              loading='lazy'
              className='object-cover '
            />
            <div className='flex flex-col justify-center items-center gap-y-3 mb-20'>
              <p
                className={clsx(
                  'inline-block text-transparent bg-clip-text text-3xl font-bold',
                  mentor.mentorAlt === 'N3'
                    ? 'bg-gradient-to-r from-[#00C2FF] to-white'
                    : mentor.mentorAlt === 'N2'
                    ? 'bg-gradient-to-r from-[#ECC231] to-white'
                    : mentor.mentorAlt == 'N4'
                    ? 'bg-gradient-to-r from-[#03fd9a] to-white'
                    : mentor.mentorAlt == 'N5'
                    ? 'bg-gradient-to-r from-[#0167e3] to-white'
                    : mentor.mentorAlt == 'N6'
                    ? 'bg-gradient-to-r from-[#c0c0c0] to-white'
                    : 'bg-gradient-to-r from-[#FF4C65] to-white'
                )}
              >
                {mentor.mentorName}
              </p>
              <p className='text-header-grey text-sm text-center leading-5 px-[20]'>
                {mentor.mentorExperience}
              </p>
              <button 
                onClick={() => window.open(mentor.mentorLinkedinProfile, '_blank')}
                className='py-2 px-4 rounded-full flex gap-3 items-center border border-white text-white hover:text-blue-600 duration-300'
              >
                <p className='text-sm font-medium'>
                  VISIT LINKEDIN PROFILE
                </p>
                <FaLinkedin
                  style={{
                    color: '#0076B2',
                    width: '20px',
                    height: '20px',
                  }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MentorContainer;
