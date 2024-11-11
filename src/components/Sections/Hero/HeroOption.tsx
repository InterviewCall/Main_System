import { FC } from 'react';
import { MdOutlineHourglassFull } from 'react-icons/md';

import { HeroOptionProps } from '@/types';

const HeroOption: FC<HeroOptionProps> = ({ option }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-700 w-fit rounded-full md:py-2 md:px-4 py-1 px-2">
      <div className="bg-black rounded-full border-[1px] w-5 h-5 flex items-center justify-center">
        <MdOutlineHourglassFull
          style={{
            color: '#00FFE0',
            height: '14px',
            width: '14px',
          }}
        />
      </div>
      <p className="text-white whitespace-nowrap md:text-sm text-xs font-medium">{option}</p>
    </div>
  );
};

export default HeroOption;
