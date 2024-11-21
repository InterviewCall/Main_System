import { FC } from 'react';

import { HeroStatProps } from '@/types';

const HeroStat: FC<HeroStatProps> = ({ stats, stat, index }) => {
  return (
    <>
      {index != stats.length && index != 0 && (
        <div className="h-20 bg-gray-500 w-[0.25px]" />
      )}
      <div className="flex flex-col w-full items-center">
        <p className="text-white md:text-2xl text-sm font-bold">{stat.count}</p>
        <p className="text-white md:text-[18px] text-[9px] font-[400]">{stat.title.row1}</p>
        <p className="text-white md:text-[18px] text-[9px] font-[400]">{stat.title.row2}</p>
      </div>
    </>
  );
};

export default HeroStat;
