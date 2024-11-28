'use client';

import { FC } from 'react';
import { GoArrowDown } from 'react-icons/go';

import { DownloadBrochureButtonProps } from '@/types';

const DownloadBrochureButton: FC<DownloadBrochureButtonProps> = ({ buttonTitle }) => {
    return (
        <button className='brochure py-2 px-4 rounded-full flex justify-between items-center border border-white download-brochure'>
          <p className='text-base text-white font-medium uppercase'>
            {buttonTitle}
          </p>
          <div className='p-2 rounded-full bg-white flex items-center justify-center'>
            <GoArrowDown className='w-6 h-6' />
          </div>
        </button>
    );
};

export default DownloadBrochureButton;