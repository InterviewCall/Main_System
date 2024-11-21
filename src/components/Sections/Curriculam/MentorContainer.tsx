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
      <div className="relative w-full bg-gradient-to-br from-[#15111C] to-[#000000] px-12 py-20 rounded-xl md:flex justify-around hidden z-10  drop-shadow-2xl shadow-sm shadow-[#ffffff36] stroke-red-400">

        <div className='top-outline absolute top-0 left-0 w-full h-[1px] bg-custom-gradient'></div>
        <div className='bottom-outline absolute bottom-0 left-0 w-full h-[1px] bg-custom-gradient'></div>
        
        <div className="flex flex-col gap-y-8 h-fit">
          <p
            className={clsx(
              'inline-block text-transparent bg-clip-text text-8xl font-bold',
              mentorDetails[0].mentorAlt === 'N3'
                ? 'bg-gradient-to-r from-[#00C2FF] to-white'
                : mentorDetails[0].mentorAlt === 'N2'
                ? 'bg-gradient-to-r from-[#ECC231] to-white'
                : 'bg-gradient-to-r from-[#FF4C65] to-white'
            )}
          >
            {mentorDetails[0].mentorName}
          </p>

          <p className="text-header-grey w-[500px] text-[16px]">
            {mentorDetails[0].mentorExperience}
          </p>

          <button
            onClick={() => redirect(mentorDetails[0].mentorLinkedinProfile)}
           className="py-2 px-4 rounded-full flex gap-3 items-center border border-white w-fit">
            <p className="text-base text-white font-medium">
              VISIT LINKEDIN PROFILE
            </p>
            <FaLinkedin
              style={{
                color: '#0076B2',
                width: '24px',
                height: '24px',
              }}
            />
          </button>
        </div>

        <div className="flex flex-row items-center justify-center gap-12">
          <div className="relative w-[400px] h-[275px]">
            <button
              onClick={handlePrev}
              className="bg-gradient-to-tl absolute left-3 translate-y-28 flex items-center justify-center from-black to-[#313036] w-11 h-11 rounded-full ring-2 ring-slate-400"
            >
              <MdOutlineChevronLeft
                style={{
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  marginLeft: '2px',
                }}
              />
            </button>

            {/* A Mentor Card Wrapper for medium size screen is needed in future */}
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

            <button
              onClick={handleNext}
              className="bg-gradient-to-tl absolute -right-20 translate-y-[115px] flex items-center justify-center from-black to-[#313036] w-11 h-11 rounded-full ring-2 ring-slate-400"
            >
              <MdOutlineChevronRight
                style={{
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  marginLeft: '2px',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* This is the temporary mobile view it should be a MentorCard Component in future */}
      <div className="flex flex-col md:hidden mx-auto gap-16">
        {mentorDetails.map((mentor, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className='flex flex-col -space-y-6'>
              <Image
                src={mentor.mentorImage}
                alt={mentor.mentorAlt}
                loading="lazy"
              />

              <div className="flex flex-col text-center gap-4 items-center justify-center mt-8">
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

                <p className="text-header-grey text-[10px] text-center leading-4 w-72">
                  {mentor.mentorExperience}
                </p>

                <button className="py-2 px-4 rounded-full flex gap-3 items-center border border-white w-fit">
                  <p className="text-base text-white font-medium">
                    VISIT LINKEDIN PROFILE
                  </p>
                  <FaLinkedin
                    style={{
                      color: '#0076B2',
                      width: '24px',
                      height: '24px',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MentorContainer;
