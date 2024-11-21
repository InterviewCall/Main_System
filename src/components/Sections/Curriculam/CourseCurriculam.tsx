'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { FC, useState } from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

import { Courses } from '@/utils';
import CourseCurriculamGoldenBack from '~/images/CourseCurriculamGoldenBack.png';

import CourseCard from './CourseCard';

const CourseCurriculam: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={clsx(
        'relative grid grid-cols-1 border-[#4E586B] block-border rounded-xl gap-12 transition-all duration-300',
        open
          ? 'md:max-h-[5000px] max-h-[8000px] overflow-visible'
          : 'max-h-[625px] overflow-clip'
      )}
    >
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {Courses.map((course) => (
          <CourseCard
            key={course.courseName}
            courseName={course.courseName}
            courseDuration={course.courseDuration}
            courseDescription={course.courseDescription}
            courseKeyPoints={course.courseKeyPoints}
          />
        ))}
      </div>

      <div className="bg-yellow-500 bg-opacity-55 flex flex-col w-full gap-1 items-center p-4 rounded-xl relative overflow-clip">
        <Image
          src={CourseCurriculamGoldenBack}
          className="absolute -m-4 object-cover w-full h-full z-40"
          alt="GoldenBack"
        />
        <p className="md:text-4xl text-sm text-header-grey font-bold z-50">
          READY FOR FULL STACK DEV ROLE
        </p>
        <p className="text-header-grey md:text-base text-xs text-center z-50">
          Covering all modules above makes you ready to apply for Full Stack Web
          Dev roles
        </p>
      </div>
      <div
        className={clsx(
          'absolute bg-gradient-to-t from-[#00000083] to-transparent h-full w-full rounded-xl transition-all duration-300',
          open ? 'hidden' : 'visible'
        )}
      />

      <div
        className={clsx(
          'absolute md:translate-x-[48%] translate-x-[45%] w-full z-[990]',
          open ? '-bottom-6' : 'bottom-6'
        )}
      >
        <button
          onClick={() => setOpen(!open)}
          className={clsx(
            'w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center transition-all duration-300',
            open ? 'rotate-180' : 'rotate-0'
          )}
        >
          <MdKeyboardDoubleArrowDown
            style={{
              color: 'white',
              width: '24px',
              height: '24px',
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default CourseCurriculam;
