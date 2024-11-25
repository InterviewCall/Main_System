import Image from 'next/image';
import React from 'react';

import { Companies } from '@/utils';

const AnimatedWrapperImages: React.FC = () => {
  // Number of items to animate
//   const items = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className='relative mt-8 w-[90%] max-w-[100vw] h-[10vh] mx-auto overflow-hidden mask-linear'>
      {Companies.map((item, index) => (
        <Image
            key={index}
            src={item}
            alt="images"
            width={120} // Adjust width as per your requirement
            height={80} // Adjust height as per your requirement
            className="itemLeftImages rounded-md absolute"
            style={{
            animationDelay: `calc(30s / ${Companies.length} * (${Companies.length} - ${index}) * -1)`,
            }}
        />
      ))}
    </div>
  );
};

export default AnimatedWrapperImages;
