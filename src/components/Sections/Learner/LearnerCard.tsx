import Image from 'next/image';
import Amazon from 'public/svg/AmazonPlain.svg';
import Google from 'public/svg/GooglePlain.svg';
import Microsoft from 'public/svg/MicrosoftPlain.svg';
import { FC } from 'react';

import { LearnerCardProps } from '@/types';

const LearnerCard: FC<LearnerCardProps> = ({
  learnerImage,
  learnerCompany,
  learnerRole,
  companyIcon,
  companyRingColor,
  learnerImageHeight = 'h-[500px]',
}) => {
  return (
    <div className="relative w-fit rounded-2xl overflow-clip">
      <Image
        src={learnerImage}
        alt={`${learnerImage}`}
        loading="lazy"
        className={`rounded-xl z-10 ${learnerImageHeight} object-cover`}
      />
      <div className="absolute left-4 z-[990] bottom-6">
        <p className="text-xl font-bold text-white">{learnerCompany}</p>
        <p className="font-light text-white">{learnerRole}</p>
      </div>
      <div
        className={`w-12 h-12 flex items-center justify-center absolute right-4 z-[990] bottom-6 bg-white rounded-2xl ring-4 ${companyRingColor}`}
      >
        {companyIcon == 'google' ? (
          <Google className="w-8 h-8" />
        ) : companyIcon == 'Microsoft' ? (
          <Microsoft className="w-8 h-8" />
        ) : (
          <Amazon className="w-8 h-8" />
        )}
      </div>
      <div className="absolute bg-gradient-to-t from-black to-transparent z-[900] bottom-0 w-full h-36"></div>
    </div>
  );
};

export default LearnerCard;
