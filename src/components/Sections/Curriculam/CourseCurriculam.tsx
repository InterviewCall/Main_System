// 'use client';

// import clsx from 'clsx';
// import Image from 'next/image';
// import { FC, useState } from 'react';
// import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

// import { Courses } from '@/utils';
// import CourseCurriculamGoldenBack from '~/images/CourseCurriculamGoldenBack.png';

// import CourseCard from './CourseCard';

// const CourseCurriculam: FC = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       className={clsx(
//         'relative grid grid-cols-1 border-[#4E586B] block-border rounded-xl gap-12 transition-all duration-300',
//         open
//           ? 'md:max-h-[5000px] max-h-[8000px] overflow-visible'
//           : 'max-h-[625px] overflow-clip'
//       )}
//     >
//       <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-4 md:px-8'>
//         {Courses.map((course) => (
//           <CourseCard
//             key={course.courseName}
//             courseName={course.courseName}
//             courseDuration={course.courseDuration}
//             courseDescription={course.courseDescription}
//             courseKeyPoints={course.courseKeyPoints}
//           />
//         ))}
//       </div>

//       <div className='relative md:flex md:flex-col hidden w-full gap-2 items-center p-4 rounded-xl overflow-hidden bg-opacity-55'>
//         {/* Golden Background Image */}
//         <Image
//           src={CourseCurriculamGoldenBack}
//           className='absolute -m-4 object-cover w-full h-full z-10'
//           alt='GoldenBack'
//         />

//         {/* Text Content */}
//         <p className='md:text-4xl text-lg text-header-grey font-bold z-20 text-center'>
//           READY FOR SOFTWARE ROLES
//         </p>
//         <p className='text-header-grey md:text-base text-xs text-center z-20'>
//           Covering all modules above makes you ready to apply for Software roles
//         </p>
//       </div>

//       {/* Gradient Overlay */}
//       <div
//         className={clsx(
//           'absolute bg-gradient-to-t from-[#00000083] to-transparent h-full w-full rounded-xl transition-all duration-300',
//           open ? 'hidden' : 'visible'
//         )}
//       />

//       {/* Toggle Button */}
//       <div
//         className={clsx(
//           'absolute md:translate-x-[48%] translate-x-[45%] w-full z-[990]',
//           open ? '-bottom-6' : 'bottom-6'
//         )}
//       >
//         <button
//           onClick={() => setOpen(!open)}
//           className={clsx(
//             'w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center transition-all duration-300',
//             open ? 'rotate-180' : 'rotate-0'
//           )}
//         >
//           <MdKeyboardDoubleArrowDown
//             style={{
//               color: 'white',
//               width: '24px',
//               height: '24px',
//             }}
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseCurriculam;

'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

import { Course } from '@/types';
import { JobSwitchCourses, MernCourses } from '@/utils';
import CourseCurriculamGoldenBack from '~/images/CourseCurriculamGoldenBack.png';

import CourseCard from './CourseCard';

const CourseCurriculam: FC = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const[Courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if(pathName == '/job-switch' || pathName == '/program') {
      setCourses(JobSwitchCourses);
    }
    else if(pathName == '/fullstack-mern') {
      setCourses(MernCourses);
    } else if(pathName == '/transformer') {
      setCourses(JobSwitchCourses);
    }
  }, [pathName]);
  return (
    <div
      className={clsx(
        'relative grid grid-cols-1 border-[#4E586B] block-border rounded-xl gap-8 transition-all duration-300',
        open
          ? 'md:max-h-[9000px] max-h-[15000px] overflow-visible'
          : 'max-h-[650px] overflow-hidden'
      )}
    >
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-4 md:px-8'>
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

      <div className='relative flex flex-col w-full gap-4 items-center p-4 rounded-xl overflow-hidden bg-opacity-55 md:mx-0 sm:mx-0 mx-0'>
        {/* Golden Background Image */}
        <Image
          src={CourseCurriculamGoldenBack}
          className='absolute -m-4 object-cover w-full h-full z-10'
          alt='GoldenBack'
        />

        {/* Text Content */}
        <p className='md:text-4xl text-xl text-header-grey font-bold z-20 text-center'>
          READY FOR SOFTWARE ROLES
        </p>
        <p className='text-header-grey md:text-base text-sm text-center z-20'>
          Covering all modules above makes you ready to apply for Software roles
        </p>
      </div>

      {/* Gradient Overlay */}
      <div
        className={clsx(
          'absolute bg-gradient-to-t from-[#00000083] to-transparent h-full w-full rounded-xl transition-all duration-300',
          open ? 'hidden' : 'block'
        )}
      />

      {/* Toggle Button */}
      <div
        className={clsx(
          'absolute left-1/2 transform -translate-x-1/2 w-full z-[990] flex justify-center',
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