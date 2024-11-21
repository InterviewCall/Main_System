import Image from 'next/image';
import { FC } from 'react';
import { FaArrowDown } from 'react-icons/fa';

import { MasterClassAlumniCardProps } from '@/types';

const AlumniCard: FC<MasterClassAlumniCardProps> = ({ alumniImage, alumniName, alumniGradDate, alumniPreScaler, alumniPostScaler, alumniRole }) => {
    return (
        <div className='relative w-[217px] h-[450px] bg-white flex flex-col items-center gap-y-3 shadow-[-8px_4px_29px_3px_rgba(0,_0,_0,_0.1)] transition-all duration-500 hover:scale-105 cursor-pointer mt-8'>
            <div className='mt-10 shadow-[19px_9px_29px_0px_rgba(0,_0,_0,_0.1)] rounded-full'>
                <Image src={alumniImage} alt='' width={70} className='rounded-full object-cover' />
            </div>

            <div className='flex flex-col items-center mt-4'>
                <p className='text-lg font-bold'>{alumniName}</p>
                <p className='text-[#324766] text-sm'>{alumniGradDate}</p>
            </div>

            <div className='mt-2 flex flex-col items-center'>
                <p className='text-[#91a1b7] text-[11px]'>Pre Scaler</p>
                <p className='font-bold text-[15px]'>{alumniPreScaler}</p>
            </div>

            <FaArrowDown color='#4ea1ff' size={30} className='mt-2' />

            <div className='flex flex-col items-center mt-3'>
                <p className='text-[#91a1b7] text-[11px]'>Post Scaler</p>
                <Image src={alumniPostScaler} alt='' width={120} className='object-contain' />
            </div>

            <div className='absolute bottom-0'>
                <p className='font-bold mt-2'>{alumniRole}</p>
            </div>
        </div>
    );
};

export default AlumniCard;