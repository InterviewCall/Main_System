'use client';

import { FC } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

import { DownloadBrochureButtonProps } from '@/types';

const DownloadBrochureButton: FC<DownloadBrochureButtonProps> = ({ buttonTitle }) => {
    return (
        <button className='py-2 px-4 rounded-full flex gap-3 items-center border border-white'>
          <p className='text-base text-white font-medium'>
            {buttonTitle}
          </p>
          <div className='w-9 h-9 rounded-full bg-white flex items-center justify-center'>
            <GoArrowUpRight className='w-6 h-6' />
          </div>
        </button>
    );
};

export default DownloadBrochureButton;