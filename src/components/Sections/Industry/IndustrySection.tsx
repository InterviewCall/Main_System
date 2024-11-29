'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import CardImageOne from '~/images/IndustrySectionCardImageOne.png';
import CardImageThree from '~/images/IndustrySectionCardImageThree.png';
import CardImageTwo from '~/images/IndustrySectionCardImageTwo.png';
import industrySectionImage from '~/images/industrySectionImage.png';
import industrySectionImageJobSwitch from '~/images/industrySectionImageJobSwitch.png';
import industrySectionImageMobile from '~/images/industrySectionImageMobile.png';
import industrySectionImageMobileJobSwitch from '~/images/industrySectionImageMobileJobSwitch.png';

const IndustrySection: FC = () => {
  const pathName = usePathname();
  const [programeName, setProgrameName] = useState('');

  useEffect(() => {
    if(pathName == '/fullstack-mern') {
      setProgrameName('FULLSTACK WEB DEVELOPMENT');
    }
    else if(pathName == '/job-switch') {
      setProgrameName('JOB SWITCH');
    }
  }, [pathName]);

    return (
        <div className='bg-white px-4 md:px-24 md:pt-24 py-4 flex flex-col md:space-y-24 space-y-12'>
      <div className='flex flex-col space-y-12'>
        <div className='space-y-2'>
          <p className='text-ankerblue font-semibold md:text-4xl text-base'>
            INDUSTRY REQUIREMENTS
          </p>
          <p className='font-semibold md:text-5xl text-2xl'>
            What top tech companies search for?
          </p>
        </div>
        <Image src={pathName == '/job-switch' ? industrySectionImageMobileJobSwitch : industrySectionImageMobile} alt='industrySectionImageMobile' loading='lazy' className='md:hidden block' />
        <Image src={pathName == '/job-switch' ? industrySectionImageJobSwitch : industrySectionImage} alt='IndustrySectionImage' loading='lazy' className='md:block hidden' />
      </div>
      <div className='flex flex-col space-y-12'>
        <div className='space-y-2'>
          <p className='text-ankerblue font-semibold md:text-4xl text-base'>
            THE ONLY {programeName} BOOTCAMP
          </p>
          <p className='font-semibold md:text-5xl text-2xl'>
            That Makes You Industry Ready & Future Proof
          </p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
          <Image src={CardImageOne} alt='cardImageOne' />
          <Image src={CardImageTwo} alt='cardImageTwo' />
          <Image src={CardImageThree} alt='cardImageThree' />
        </div>
      </div>
    </div>
    );
};

export default IndustrySection;