'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';

import { useAppSelector } from '@/lib/hooks';
import { ModalFormData } from '@/types';

interface TimerProps {
  requestOtp: SubmitHandler<ModalFormData>
  textColor: string
  handleSubmit: UseFormHandleSubmit<ModalFormData>
}

const Timer: FC<TimerProps> = ({ requestOtp, textColor, handleSubmit }) => {
    const startTime = useAppSelector((state) => state.otpState.startTime);
    const [diff, setDiff] = useState(60 * 1000);
    const id = useRef<NodeJS.Timeout>(null!);
  
    useEffect(() => {
      const endTime = Date.now() + 60 * 1000;
  
      id.current = setInterval(() => {
        const remainingTime = endTime - Date.now();
        setDiff(Math.max(0, remainingTime));
  
        if (remainingTime <= 0) {
          clearInterval(id.current);
        }
      }, 1000);
  
      return () => clearInterval(id.current);
    }, [startTime]);
    
    const time = (Math.ceil(diff / 1000));
    return (
      <div className=''>
        <p onClick={handleSubmit(requestOtp)} className={`text-lg ${textColor} ${time == 0 ? 'cursor-pointer text-blue-700 hover:text-blue-500 duration-300 hover:scale-90' : 'cursor-none pointer-events-none'}`}>
            Resend OTP 
            {time != 0 && (
                <span>({`00:${String(time).padStart(2, '0')}`})</span>
            )}
        </p>
      </div>
    );
};
  
export default Timer;