import Image from 'next/image';
import { FC } from 'react';

import CardImageOne from '~/images/IndustrySectionCardImageOne.png';
import CardImageThree from '~/images/IndustrySectionCardImageThree.png';
import CardImageTwo from '~/images/IndustrySectionCardImageTwo.png';
import industrySectionImage from '~/images/industrySectionImage.png';

const IndustrySection: FC = () => {
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
        <Image src={industrySectionImage} alt='IndustrySectionImage' />
      </div>
      <div className='flex flex-col space-y-12'>
        <div className='space-y-2'>
          <p className='text-ankerblue font-semibold md:text-4xl text-base'>
            THE ONLY 1:1 MENTORSHIP PROGRAM
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