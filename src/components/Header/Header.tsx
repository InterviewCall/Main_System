'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { PageSwipe } from '@/types';
import HeaderBanner from '~/images/HeaderBanner.png';

import Logo from '../../../public/images/Logo.png';
import MasterClassHeader from '../MasterClassHeader/MasterClassHeader';
import HeaderButton from './HeaderButton';

const Header: FC = () => {
  const [page, setPage] = useState<PageSwipe>('');
  const pathName = usePathname();
  const routePath = pathName;
  useEffect(() => {
    const newPathName = routePath.split('/');
    if(newPathName[1] == 'fullstack-mern') {
      setPage('Full Stack - MERN');
    }
    else if(newPathName[1] == 'job-switch') {
      setPage('Job Switch');
    }
    else if(newPathName[1] == 'masterclass') {
      setPage('Masterclass');
    }
  }, [pathName, page, routePath]);
  return routePath == '/masterclass' ? (
    <MasterClassHeader />
  ) : (
    <>
    <div className='md:hidden block fixed z-[999]'>
      <div className='w-screen h-12 bg-gradient-to-r from-[#041029] to-[#6D2E99] hover:from-violet hover:to-violet flex items-center justify-center gap-x-3'>
          <Image src={HeaderBanner} alt='' className='w-[23px] h-[23px]' />
          <p className='text-white text-sm'>
            Need Help? Talk to us at <span className='text-lg'>08069640804</span>
          </p>
      </div>
      <nav className='w-screen py-4 justify-between flex items-center px-4 md:px-24 md:hidden h-20 bg-black'>
        <Link href='/'>
          <Image
            src={Logo}
            alt=''
            width={201}
            height={47}
            className='md:w-[201px] min-w-[145px] w-[145px] md:h-[47px] h-[47px] object-contain min-h-[34px]'
          />
        </Link>

        {/* For Future Refrence */}
        {/* <div className='flex items-center space-x-8'>
          <div className='group'>
            <div className='group'>
              <div
                className='text-[#00FFE0] text-[13px]'
              >
                  {page}
              </div>
                <div
                  className='w-full h-[2.5px] bg-[#00FFE0]'
                ></div>
            </div>
          </div>
        </div> */}

        <HeaderButton />
      </nav>
      </div>
      <div className='fixed md:block hidden z-[999]'>
        <div className='w-screen h-12 bg-gradient-to-r from-[#041029] to-[#6D2E99] hover:from-violet hover:to-violet md:flex items-center justify-center hidden gap-x-3'>
          <Image src={HeaderBanner} alt='' className='w-[23px] h-[23px]' />
          <p className='text-white text-sm'>
            Need Help? Talk to us at <span className='text-lg'>08069640804</span>{' '}
            or{' '}
            <span className='advisor text-lg underline cursor-pointer'>
              Request a Call
            </span>
          </p>
        </div>
        <nav className='w-screen py-4 justify-between flex items-center px-4 md:px-24 fixed  h-20 bg-black'>
          <Link href='/'>
            <Image
              src={Logo}
              alt=''
              width={201}
              height={47}
              className='md:w-[201px] min-w-[145px] w-[145px] md:h-[47px] h-[47px] object-contain min-h-[34px]'
            />
          </Link>
          <div className='hidden md:flex items-center space-x-8'>
            <div className='group'>
              <div
                className='text-[#00FFE0]'
              >
                {page}
              </div>
              <div
                className='w-full h-[2.5px] bg-[#00FFE0]'
              ></div>
            </div>
          </div>

          <HeaderButton />
        </nav>
      </div>
    </>
  );
};

export default Header;
