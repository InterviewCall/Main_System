// import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { MentorCardProps } from '@/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MentorCard: FC<MentorCardProps> = ({ mentorImage, mentorAlt, mentorName, mentorExperience, cardWrapperTopPosition, cardWrapperLeftPosition, cardWrapperZIndex, cardHeight, cardWidth }) => {
    return (
        // <div className={`absolute ${cardWrapperTopPosition} ${cardWrapperLeftPosition} ${cardWrapperZIndex}`}>
        //     <div
        //         className={clsx(
        //           'relative flex items-center justify-center rounded-3xl overflow-clip ring-offset-4 ring-offset-black',
        //           mentorAlt == 'N3'
        //             ? 'bg-[#00C2FF] ring-4 ring-[#00C2FF] shadow-blue-multi'
        //             : mentorAlt == 'N2'
        //             ? 'bg-[#ECC231] ring-4 ring-[#ECC231] shadow-yellow-multi'
        //             : 'bg-[#FF4C65] ring-4 ring-[#FF4C65] shadow-red-multi'
        //         )}
        //         style={{
        //             width: `${cardWidth}`,
        //             height: `${cardHeight}`,
        //           }}
        //     >
        //         <div className='absolute top-0 w-full z-30 h-full bg-gradient-to-b from-transparent via-transparent to-[#000000b2]' />
        //         <div
        //           className={clsx(
        //             'absolute top-0 w-full z-50 h-full',
        //             mentorAlt == 'N3'
        //               ? 'bg-gradient-to-b from-[#00c3ff75] via-[#00c3ff13] to-[#000000b6]'
        //               : mentorAlt == 'N2'
        //               ? 'bg-gradient-to-b from-[#ecc3317d] via-[#ecc3310d] to-[#000000b6]'
        //               : 'bg-gradient-to-b from-[#ff4c647f] via-[#ff4c6412] to-[#000000b6]'
        //           )}
        //         />
        //         <Image
        //           src={mentorImage}
        //           alt={mentorAlt}
        //           loading='lazy'
        //           width={296}
        //           height={416}
        //           className='object-fill absolute z-40 top-0'
        //         />
        //     </div>
        // </div>

        // For Temporary
        <div className={`absolute ${cardWrapperTopPosition} ${cardWrapperLeftPosition} ${cardWrapperZIndex}`}>
          <div style={{width: `${cardWidth}`, height: `${cardHeight}`, position: 'relative'}}>
            <Image
              src={mentorImage}
              alt={mentorAlt}
              width={392}
              height={560}
              loading='lazy'
            />
          </div>
        </div>
    );
};

export default MentorCard;