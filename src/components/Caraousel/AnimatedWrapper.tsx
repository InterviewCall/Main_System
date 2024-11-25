import Image from 'next/image';
import React from 'react';

import Google from '~/Logos/Google.png';

const AnimatedWrapper: React.FC = () => {
  // Number of items to animate
  const items = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className='relative mt-8 w-[90%] max-w-[100vw] h-[20vh] mx-auto overflow-hidden mask-linear'>
      {items.map((item) => (
        <div
          key={item}
          className='itemLeft bg-rose-600 rounded-md absolute'
          style={{
            animationDelay: `calc(30s / 10 * (10 - ${item}) * -1)`,
          }}
        >
            <Image src={Google} alt='' width={90} height={90} />
        </div>
      ))}
    </div>
  );
};

export default AnimatedWrapper;
