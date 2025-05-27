'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import Loader from '../Sections/Hero/Loader';

export default function ClientThankYouPage() {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false);
  const [seconds, setSeconds] = useState(5);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check submission flag
  useEffect(() => {
    const submitted = sessionStorage.getItem('isSubmitted');
    if (submitted === 'true') {
      setIsAllowed(true);
    } else {
      setTimeout(() => {
        router.back();
      }, 1000);
    }
  }, [router]);

  // Start countdown if allowed
  useEffect(() => {
    if (!isAllowed) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev == 0) {
          clearInterval(intervalRef.current!);
          sessionStorage.removeItem('isSubmitted');
          router.back();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAllowed, router]);

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return { mins, secs };
  };

  const { mins, secs } = formatTime(seconds);

  if (!isAllowed) {
    return (
      <div className='h-screen bg-black flex justify-center items-center'>
        <Loader />
      </div>
    );
  }

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
            <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
          </svg>
        </div>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
          Thank You!
        </h1>
        <p className='text-lg text-gray-600 mb-6'>
          Thank you for registering for a{' '}
          <span className='font-semibold text-indigo-600'>free demo class</span>.
        </p>

        <div className='text-gray-700 text-sm'>
          Redirecting in{' '}
          <span className='countdown font-mono text-2xl'>
            <span style={{ '--value': mins } as React.CSSProperties}></span>:
            <span style={{ '--value': secs } as React.CSSProperties}></span>
          </span>
        </div>
      </div>
    </main>
  );
}
