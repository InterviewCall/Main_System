import Image from 'next/image';
import { FC } from 'react';

// import { FaArrowDown } from 'react-icons/fa';
import { MasterClassAlumniCardProps } from '@/types';

const AlumniCard: FC<MasterClassAlumniCardProps> = ({ alumniImage }) => {
    return (
        <div className='flex md:flex-row md:gap-x-7 gap-y-8 my-11 shadow-[16px_14px_15px_-3px_rgba(0,0,0,0.1)]'>
            <Image src={alumniImage} alt='' className='rounded-xl hover:cursor-pointer hover:scale-110 duration-300' />
        </div>
    );
};

export default AlumniCard;