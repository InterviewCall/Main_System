import Image from 'next/image';
import React from 'react';

import Logo from '../../../public/images/Logo.png';
import HeaderButton from './HeaderButton';

const Header = () => {

  return (
    <nav className='w-screen py-4 justify-between flex items-center px-4 md:px-24 h-20 bg-black fixed z-[999]'>
      <a href='#'>
        <Image
          src={Logo}
          alt=''
          width={201}
          height={47}
          className='md:w-[201px] min-w-[145px] w-[145px] md:h-[47px] h-[47px] object-contain min-h-[34px]'
        />
      </a>
      <div className='hidden md:flex items-center space-x-8'>
        <a href='#' className='text-white'>
          Full Stack - MERN
        </a>
        <a href='#' className='text-white'>
          Job Switch
        </a>
        <a href='#' className='text-white'>
          Masterclass
        </a>
      </div>

      <HeaderButton />
    </nav>
  );
};

export default Header;
