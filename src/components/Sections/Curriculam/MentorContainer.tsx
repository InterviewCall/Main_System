'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { FC, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

import { Mentor } from '@/types';
import { Mentors } from '@/utils';
import { mentorCardPositioning } from '@/utils';

import MentorCard from './MentorCard';

const MentorContainer: FC = () => {
  const [mentorDetails, setMentorDetails] = useState<Mentor[]>(Mentors);

  function handleNext() {
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

  function handlePrev() {
    setMentorDetails((prevDetails) => {
      const newMentorDetails = [...prevDetails];
      const shiftedMentorDetails = newMentorDetails.pop();
      if (shiftedMentorDetails) newMentorDetails.unshift(shiftedMentorDetails);
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

  return (
    <>
      {/* Desktop View */}
      <div className='relative bg-gradient-to-br from-[#15111C] to-[#000000] px-4 md:px-12 py-20 rounded-xl md:flex justify-around hidden z-10 drop-shadow-2xl shadow-sm shadow-[#ffffff36]'>
        {/* Mentor Details */}
        <div className='flex flex-col gap-y-8 h-fit'>
          <p
            className={clsx(
              'inline-block text-transparent bg-clip-text text-7xl md:text-[4rem] font-bold',
              mentorDetails[0].mentorAlt === 'N3'
                ? 'bg-gradient-to-r from-[#00C2FF] to-white'
                : mentorDetails[0].mentorAlt === 'N2'
                ? 'bg-gradient-to-r from-[#ECC231] to-white'
                : 'bg-gradient-to-r from-[#FF4C65] to-white'
            )}
          >
            {mentorDetails[0].mentorName}
          </p>

          <p className='text-header-grey w-full md:w-[500px] text-sm md:text-base leading-6'>
            {mentorDetails[0].mentorExperience}
          </p>

          <button
            onClick={() => redirect(mentorDetails[0].mentorLinkedinProfile)}
            className='py-2 px-4 rounded-full flex gap-3 items-center border border-white w-fit'
          >
            <p className='text-sm md:text-base text-white font-medium'>
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
        <div className='flex flex-row items-center justify-center gap-8 md:gap-0'>
          <button
            onClick={handlePrev}
            className='bg-gradient-to-tl flex items-center justify-center translate-x-6 from-black to-[#313036] w-10 h-10 md:w-11 md:h-11 rounded-full ring-2 ring-slate-400'
          >
            <MdOutlineChevronLeft
              style={{
                color: 'white',
                width: '24px',
                height: '24px',
              }}
            />
          </button>

          <div className='relative w-[300px] md:w-[400px] h-[275px]'>
            {mentorDetails.map((mentor) => (
              <MentorCard
                key={mentor.mentorAlt}
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

          <button
            onClick={handleNext}
            className='bg-gradient-to-tl flex items-center justify-center -translate-x-6 from-black to-[#313036] w-10 h-10 md:w-11 md:h-11 rounded-full ring-2 ring-slate-400'
          >
            <MdOutlineChevronRight
              style={{
                color: 'white',
                width: '24px',
                height: '24px',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className='flex flex-col md:hidden mx-auto gap-16'>
        {mentorDetails.map((mentor, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center gap-4'
          >
            <Image
              src={mentor.mentorImage}
              alt={mentor.mentorAlt}
              loading='lazy'
              className='object-cover '
            />
            <div className='flex flex-col justify-center items-center mb-20'>
              <p
                className={clsx(
                  'inline-block text-transparent bg-clip-text text-3xl font-bold',
                  mentor.mentorAlt === 'N3'
                    ? 'bg-gradient-to-r from-[#00C2FF] to-white'
                    : mentor.mentorAlt === 'N2'
                    ? 'bg-gradient-to-r from-[#ECC231] to-white'
                    : 'bg-gradient-to-r from-[#FF4C65] to-white'
                )}
              >
                {mentor.mentorName}
              </p>
              <p className='text-header-grey text-sm text-center leading-5 px-[20]'>
                {mentor.mentorExperience}
              </p>
              <button className='py-2 px-4 rounded-full flex gap-3 items-center border border-white'>
                <p className='text-sm text-white font-medium'>
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
