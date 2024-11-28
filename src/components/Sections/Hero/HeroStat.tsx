import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { HeroStatProps } from '@/types';

const HeroStat: FC<HeroStatProps> = ({ stats, stat, index }) => {
  const pathName = usePathname();
  return (
    <>
      {index != stats.length && index != 0 && (
        <div className="h-20 bg-gray-500 w-[5px]" />
      )}
      <div className="flex flex-col w-full items-center">
        <p className="text-white md:text-2xl text-sm font-bold">{pathName == '/job-switch' ? stat.jobSwitchCount : stat.count}</p>
        <p className="text-white md:text-[18px] text-[9px] font-[400]">{stat.title.row1}</p>
        <p className="text-white md:text-[18px] text-[9px] font-[400]">{pathName == '/job-switch' ? stat.title.jobSwitchRow2 : stat.title.row2}</p>
      </div>
    </>
  );
};

export default HeroStat;
