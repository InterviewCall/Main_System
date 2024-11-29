'use client';

import { FC } from 'react';
import { GoArrowDown } from 'react-icons/go';

const DownloadBrochureButton: FC = () => {
    return (
      <button className='relative brochure py-2 px-4 rounded-full flex gap-5 bg-black text-white items-center border border-white download-brochure overflow-hidden'>
        <span className='animate-shine absolute w-full h-full  bg-gradient-to-r from-transparent via-white to-transparent cursor-default'></span>
        <p className='ml-2 text-base font-medium uppercase'>
          Download Brochure
        </p>
        <div className='p-1 rounded-full bg-white text-black flex items-center justify-center'>
          <GoArrowDown className='w-6 h-6' />
        </div>
      </button>
    );
};

export default DownloadBrochureButton;