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
  const [page, setPage] = useState<PageSwipe>('mern');
  const pathName = usePathname();
  const routePath = pathName;
  useEffect(() => {
    if (pathName.length == 1) {
      setPage('mern');
    } else {
      const newPathName = pathName.split('/');
      if (newPathName[1] == 'job-switch' && page != 'job-switch') {
        setPage('job-switch');
      } else if (newPathName[1] == 'masterclass' && page != 'masterclass') {
        setPage('masterclass');
      }
    }
  }, [pathName, page]);
  return routePath == '/masterclass' ? (
    <MasterClassHeader />
  ) : (
    <>
      <nav className='w-screen py-4 justify-between flex items-center px-4 md:px-24 fixed md:hidden z-[999] h-20 bg-black'>
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
          <Link href='/' className='group' onClick={() => setPage('mern')}>
            <div
              className={`${
                page == 'mern' ? 'text-[#00FFE0]' : 'text-white'
              } hover:text-[#00FFE0]  duration-300`}
            >
              Full Stack - MERN
            </div>
            <div
              className={`w-full h-[2.5px] bg-[#00FFE0] ${
                page == 'mern'
                  ? 'scale-100'
                  : 'scale-0 group-hover:scale-100 duration-[400ms] origin-left'
              }`}
            ></div>
          </Link>
          <Link
            href='/job-switch'
            className='group'
            onClick={() => setPage('job-switch')}
          >
            <div
              className={`${
                page == 'job-switch' ? 'text-[#00FFE0]' : 'text-white'
              } hover:text-[#00FFE0]  duration-300`}
            >
              Job Switch
            </div>
            <div
              className={`w-full h-[2.5px] bg-[#00FFE0] ${
                page == 'job-switch'
                  ? 'scale-100'
                  : 'scale-0 group-hover:scale-100 duration-[400ms] origin-left'
              }`}
            ></div>
          </Link>
          <Link
            href='/masterclass'
            className='group'
            onClick={() => setPage('masterclass')}
          >
            <div
              className={`${
                page == 'masterclass' ? 'text-[#00FFE0]' : 'text-white'
              } hover:text-[#00FFE0]  duration-300`}
            >
              Masterclass
            </div>
            <div
              className={`w-full h-[2.5px] bg-[#00FFE0] ${
                page == 'masterclass'
                  ? 'scale-100'
                  : 'scale-0 group-hover:scale-100 duration-[400ms] origin-left'
              }`}
            ></div>
          </Link>
        </div>

        <HeaderButton />
      </nav>
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
            <Link href='/' className='group' onClick={() => setPage('mern')}>
              <div
                className={`${
                  page == 'mern' ? 'text-[#00FFE0]' : 'text-white'
                } hover:text-[#00FFE0]  duration-300`}
              >
                Full Stack - MERN
              </div>
              <div
                className={`w-full h-[2.5px] bg-[#00FFE0] ${
                  page == 'mern'
                    ? 'scale-100'
                    : 'scale-0 group-hover:scale-100 duration-[400ms] origin-left'
                }`}
              ></div>
            </Link>
            <Link
              href='/job-switch'
              className='group'
              onClick={() => setPage('job-switch')}
            >
              <div
                className={`${
                  page == 'job-switch' ? 'text-[#00FFE0]' : 'text-white'
                } hover:text-[#00FFE0]  duration-300`}
              >
                Job Switch
              </div>
              <div
                className={`w-full h-[2.5px] bg-[#00FFE0] ${
                  page == 'job-switch'
                    ? 'scale-100'
                    : 'scale-0 group-hover:scale-100 duration-[400ms] origin-left'
                }`}
              ></div>
            </Link>
            <Link
              href='/masterclass'
              className='group'
              onClick={() => setPage('masterclass')}
            >
              <div
                className={`${
                  page == 'masterclass' ? 'text-[#00FFE0]' : 'text-white'
                } hover:text-[#00FFE0]  duration-300`}
              >
                Masterclass
              </div>
              <div
                className={`w-full h-[2.5px] bg-[#00FFE0] ${
                  page == 'masterclass'
                    ? 'scale-100'
                    : 'scale-0 group-hover:scale-100 duration-[400ms] origin-left'
                }`}
              ></div>
            </Link>
          </div>

          <HeaderButton />
        </nav>
      </div>
    </>
  );
};

export default Header;
