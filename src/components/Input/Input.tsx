import { FC } from 'react';

import { HeroSectionInputProps } from '@/types';

const Input: FC<HeroSectionInputProps> = ({ name, type = 'text', placeholder, register, error}) => {
    return (
        <>
            <div className='w-full rounded-md flex bg-white items-center'>
                <div className='text-black bg-gray-300 md:p-[12px] p-[14px] text-[1rem]'>+91</div>
                <input
                    {...register(name)}
                    type={type}
                    placeholder={placeholder}
                    className='input-field' 
                />
            </div>

            {error && <p className='text-red-500 text-sm'>{error.message}</p>}
        </>
    );
};

export default Input;