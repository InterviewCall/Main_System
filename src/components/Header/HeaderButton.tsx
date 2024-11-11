'use client';

import { FC } from 'react';

const HeaderButton: FC = () => {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }
    return (
        <button onClick={scrollToTop}>
        <div className='p-[3px] bg-gradient-to-b from-[#00FFE0] to-[#0B2463] rounded-full shadow-custom-multi'>
          <p className='text-white md:py-2 md:px-6 px-4 py-[10px] md:text-base text-xs whitespace-nowrap rounded-full bg-black'>
            Request Callback
          </p>
        </div>
      </button>
    );
};

export default HeaderButton;