import { FC } from 'react';

import { HeroStatProps } from '@/types';

const HeroStat: FC<HeroStatProps> = ({ stats, stat, index }) => {
  return (
    <>
      {index != stats.length && index != 0 && (
        <div className="h-10 bg-gray-500 w-[0.25px]" />
      )}
      <div className="flex flex-col items-center gap-0">
        <p className="text-white md:text-xl text-sm font-bold">{stat.count}</p>
        <p className="text-white md:text-sm text-[9px] font-light">{stat.title}</p>
      </div>
    </>
  );
};

export default HeroStat;
