import Image from 'next/image';
import { FC } from 'react';
import { CiCalendar } from 'react-icons/ci';

import { CourseCardProps } from '@/types';
import CourseCurriculamBlueBack from '~/images/CourseCurriculamBlueBack.png';

const CourseCard: FC<CourseCardProps> = ({ courseName, courseDuration, courseDescription, courseKeyPoints }) => {
  return (
    <div className='flex flex-col gap-4 w-full h-auto'>
      <div className='flex flex-col w-full gap-4 p-4 rounded-xl relative overflow-clip'>
        <Image
          src={CourseCurriculamBlueBack}
          className='absolute object-cover -m-4 scale-105 z-10'
          alt='BlueBack'
        />
        <p className='md:text-3xl text-xl text-header-grey font-bold z-20'>
          {courseName}
        </p>
        <p className='md:text-xl text-sm text-header-grey flex items-center gap-2 z-20'>
          <span>
            <CiCalendar
              style={{
                width: '24px',
                height: '24px',
              }}
            />
          </span>
          {courseDuration}
        </p>
      </div>
      <div className='bg-slate-800 flex flex-col w-full gap-4 bg-opacity-40 p-4 rounded-xl'>
        <p className='md:text-xl text-sm text-header-grey'>🤔 Why learn this</p>
        <p className='text-header-grey font-light md:text-xl text-sm'>
          {courseDescription}
        </p>
      </div>
      <div className='flex flex-wrap gap-2'>
        {courseKeyPoints.map((item, index) => (
          <div
            key={index}
            className='bg-slate-800 flex flex-col w-fit bg-opacity-40 py-2 px-4 md:text-lg text-xs rounded-xl text-header-grey'
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
