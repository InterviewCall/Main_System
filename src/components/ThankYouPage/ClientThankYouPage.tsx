'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Loader from '../Sections/Hero/Loader';

export default function ClientThankYouPage() {
    const router = useRouter();
    const [isAllowed, setIsAllowed] = useState(false);

    useEffect(() => {
        const submitted = sessionStorage.getItem('isSubmitted');
        if(submitted === 'true') {
            setIsAllowed(true);

            setTimeout(() => {
                router.push('/job-switch');
                sessionStorage.removeItem('isSubmitted');
            }, 3000);
        } else {
            router.replace('/job-switch');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    if(!isAllowed) return (
        <div className='h-screen bg-white'>
            <Loader />
        </div>
    );

  return (
    <main className='min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4'>
      <div className='bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full text-center'>
        <div className='mb-6'>
          <svg
            className='mx-auto h-16 w-16 text-green-500'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 13l4 4L19 7'
            />
          </svg>
        </div>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
          Thank You!
        </h1>
        <p className='text-lg text-gray-600'>
          Thank you for registering for a <span className='font-semibold text-indigo-600'>free demo class</span>
        </p>
      </div>
    </main>
  );
}