'use client';

import { FC, useEffect, useRef, useState } from 'react';

interface TimerProps {
  sendOtp: () => Promise<void>
  startTime: boolean
}

const Timer: FC<TimerProps> = ({ sendOtp, startTime }) => {
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
      <div className='text-white'>
        <p onClick={sendOtp} className={`text-lg ${time == 0 ? 'cursor-pointer text-blue-700 hover:text-blue-500 duration-300 hover:scale-90' : 'cursor-none pointer-events-none'}`}>
            Resend OTP 
            {time != 0 && (
                <span>({`00:${String(time).padStart(2, '0')}`})</span>
            )}
        </p>
      </div>
    );
};
  
export default Timer;