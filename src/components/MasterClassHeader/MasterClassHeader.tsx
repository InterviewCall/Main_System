import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import HeaderButton from '@/components/Header/HeaderButton';
import HeaderBanner from '~/images/HeaderBanner.png';

import Logo from '../../../public/images/Logo.png';

const MasterClassHeader: FC = () => {
  return (
    <>
    <nav className='w-screen py-4 justify-between flex items-center px-4 md:px-24 fixed md:hidden z-[999] h-20 bg-black'>
        <Link href='/job-switch'>
          <Image
            src={Logo}
            alt=''
            width={201}
            height={47}
            className='md:w-[201px] min-w-[145px] w-[145px] md:h-[47px] h-[47px] object-contain min-h-[34px]'
          />
        </Link>
        <div className='hidden items-center space-x-8'>
          <div>
            <div className='text-[#00FFE0]'>
              Masterclass
            </div>
            <div className='w-full h-[2.5px] bg-[#00FFE0]'></div>
          </div>
        </div>

        <HeaderButton />
    </nav>
    <div className='fixed md:block hidden z-[999]'>
      <div className='w-screen h-12 bg-gradient-to-r from-[#041029] to-[#6D2E99] hover:from-violet hover:to-violet md:flex items-center justify-center hidden gap-x-3'>
        <Image src={HeaderBanner} alt='' className='w-[23px] h-[23px]' />
        <p className='text-white text-sm'>Need Help? Talk to us at <span className='text-lg'>6295797609</span> or <span className='advisor text-lg underline cursor-pointer'>Request a Call</span></p>
      </div>
      <nav className='w-screen py-4 justify-between flex items-center px-4 md:px-24 fixed  h-20 bg-black'>
        <Link href='/job-switch'>
          <Image
            src={Logo}
            alt='logo'
            width={201}
            height={47}
            className='md:w-[201px] min-w-[145px] w-[145px] md:h-[47px] h-[47px] object-contain min-h-[34px]'
          />
        </Link>
        <div className='hidden md:flex items-center space-x-8'>
          <div>
            <div className='text-[#00FFE0]'>
              Masterclass
            </div>
            <div className='w-full h-[2.5px] bg-[#00FFE0]'></div>
          </div>
        </div>

        <HeaderButton />
      </nav>
    </div>
    </>
  );
};

export default MasterClassHeader;