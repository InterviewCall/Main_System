'use client';

import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { setBrochureModal } from '@/lib/features/brochure/brochure';
import { useAppDispatch } from '@/lib/hooks';
// import { GoArrowDown } from 'react-icons/go';

const DownloadBrochureButton: FC = () => {
    const pathName = usePathname();
    const dispatch = useAppDispatch();
    const [downloadBrochure, setDownloadBrochure] = useState('');
    useEffect(() => {
      if(pathName == '/fullstack-mern') {
        setDownloadBrochure('brochure');
      }
      else if(pathName == '/job-switch') {
        setDownloadBrochure('js-download');
      }
    }, [pathName]);
    return (
      <button onClick={() => dispatch(setBrochureModal(true))} className={`${downloadBrochure} relative md:w-fit w-full py-3 md:py-4 md:px-11 flex justify-center gap-5 bg-white text-black items-center border border-white overflow-hidden hover:scale-95 duration-300`}>
        {/* <span className='animate-shine absolute w-full h-full bg-gradient-to-r from-transparent via-white to-transparent cursor-default'></span> */}
        <p className='ml-2 text-[18px] font-[600] uppercase'>
          Download Syllabus
        </p>
        {/* <div className='p-1 rounded-full bg-black text-white flex items-center justify-center'>
          <GoArrowDown className='w-6 h-6' />
        </div> */}
      </button>
    );
};

export default DownloadBrochureButton;