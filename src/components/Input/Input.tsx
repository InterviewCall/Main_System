import { FC } from 'react';

import { HeroSectionInputProps } from '@/types';

const Input: FC<HeroSectionInputProps> = ({ name, type = 'text', placeholder, register, error}) => {
    return (
        <>
            <div className='px-[14px] py-3 border w-full border-gray-300 rounded-md flex items-center bg-white'>
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