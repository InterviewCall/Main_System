'use client';


import 'react-datepicker/dist/react-datepicker.css';

import { format } from 'date-fns';
import { FC, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { SubmitHandler, useForm } from 'react-hook-form';
import TimezoneSelect, { ITimezone } from 'react-timezone-select';

import { registerForEverWebinar } from '@/lib/features/webinars/everwebinarResponse';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { EverWebinarRequest } from '@/types';
import { getGmtOffset } from '@/utils';

const JobSwitchForm: FC = () => {
  const webinarResponse = useAppSelector((state) => state.everWebinarResponse);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<EverWebinarRequest>({
    defaultValues: {
      first_name: '',
      email: '',
    },
  });
  const [isClient, setIsClient] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>('UTC');

  useEffect(() => {
    if(webinarResponse.user.thank_you_url) {
      window.open(webinarResponse.user.thank_you_url, '_blank');
    }
  }, [webinarResponse.user.thank_you_url]);

  useEffect(() => {
    setSelectedTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    setIsClient(true);
  }, []);

  const registerWebinar: SubmitHandler<EverWebinarRequest> = async () => {

    try {
        const foremattedDate = startDate ? format(startDate, 'yyyy-MM-dd HH:mm') : '';

        const requestObject: EverWebinarRequest = {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          webinar_id: 4,
          first_name: getValues('first_name'),
          email: getValues('email'),
          schedule: 6,
          timezone: getGmtOffset(selectedTimezone.toString()),
          date: foremattedDate
        };

        await dispatch(registerForEverWebinar(requestObject));
      } catch (error) {
        throw error;
      }
  };

  if (!isClient) {
    // Avoid rendering the TimezoneSelect component until we are on the client
    return null;
  }
    return (
        <div>
          <form
            onSubmit={handleSubmit(registerWebinar)}
            className='bg-[#FFFFFF] rounded-lg w-full md:max-w-[30vw] h-auto flex flex-col gap-y-5 md:fixed md:top-[24%] md:right-[2%] p-5 shadow-[2px_8px_15px_5px_rgba(0,0,0,0.1)]'
            noValidate
          >
            <div className='w-full flex flex-col gap-y-1'>
                <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
            </div>

            <div className='w-full flex flex-col gap-y-1'>
                <p className='text-lg'>
                    Date & Time<span className='text-red-500'>*</span>
                </p>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    showPopperArrow
                    dateFormat='yyyy-MM-dd HH:mm'
                    timeFormat='HH:mm'
                    className='w-full ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2 border-none rounded-md'
                />
            </div>
            <div className='w-full flex flex-col gap-y-1'>
              <input
                {...register('first_name', {
                  required: 'First Name is Required',
                })}
                className='w-full rounded-md border-0 p-3 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2 placeholder:text-[#999999]'
                placeholder='Enter First Name'
                type='text'
              />
              {errors.first_name && (
                <p className='text-red-400 text-sm'>
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div className='w-full flex flex-col gap-y-1'>
              <input
                {...register('email', {
                  required: 'Email is Required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid Email Address',
                  },
                })}
                className='w-full rounded-md border-0 p-3 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2 placeholder:text-[#999999]'
                placeholder='Enter Email'
                type='email'
              />
              {errors.email && (
                <p className='text-[#FF516C] text-sm'>{errors.email.message}</p>
              )}
            </div>

            <button
              type='submit'
              className='w-full bg-[#FF516C] mt-1 p-4 rounded-lg text-white hover:scale-95 duration-300'
            >
              Register Free
            </button>
          </form>
      </div>
    );
};

export default JobSwitchForm;