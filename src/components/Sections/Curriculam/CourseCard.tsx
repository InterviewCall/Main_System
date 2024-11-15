import Image from 'next/image';
import { FC } from 'react';
import { CiCalendar } from 'react-icons/ci';

import { CourseCardProps } from '@/types';
import BlueBack from '~/images/BlueBack.png';

const CourseCard: FC<CourseCardProps> = ({ courseName, courseDuration, courseDescription, courseKeyPoints }) => {
  return (
    <div className="flex flex-col gap-4 w-full h-auto">
      <div className="bg-blue-800 flex flex-col w-full gap-4 p-4 rounded-xl relative overflow-clip">
        <Image
          src={BlueBack}
          className="absolute object-fill -m-4 scale-105 z-40"
          alt="BlueBack"
        />
        <p className="md:text-3xl text-xl text-header-grey font-bold z-50">
          {courseName}
        </p>
        <p className="md:text-xl text-sm text-header-grey flex items-center gap-2 z-50">
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
      <div className="bg-slate-800 flex flex-col w-full gap-4 bg-opacity-40 p-4 rounded-xl">
        <p className="md:text-xl text-xs text-header-grey">🤔 Why learn this</p>
        <p className="text-header-grey font-light md:text-xl text-xs">
          {courseDescription}
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {courseKeyPoints.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 flex flex-col w-fit bg-opacity-40 py-2 px-4 md:text-xl text-xs rounded-xl text-header-grey"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
