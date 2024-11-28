'use client';

import axios, { AxiosError, AxiosResponse } from 'axios';
import { FC, FormEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import OTPInput from 'react-otp-input';

import Timer from '@/components/Sections/Hero/Timer';
import { registerForWebinar } from '@/lib/features/webinars/webinarjamResponseSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Channel, RequestOtp, ResponseOtp, VerifyOtpResponse, WebinarRequest } from '@/types';
import { initiateOtp, otpVerification } from '@/utils';

const MasterclassForm: FC = () => {
  const webinarResponse = useAppSelector((state) => state.webinarResponse);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<WebinarRequest>({
    defaultValues: {
      first_name: '',
      email: '',
      phone: '',
    },
  });

  const [stepOtp, setStepOtp] = useState(false);
  const [errorOtp, setErrorOtp] = useState<string | undefined>('');
  const [otp, setOtp] = useState('');
  const [startTime, setStartTime] = useState(false);
  const [requestId, setRequestId] = useState('');

  useEffect(() => {
    if(webinarResponse.user.thank_you_url) {
      window.open(webinarResponse.user.thank_you_url, '_blank');
    }
  }, [webinarResponse.user.thank_you_url]);

  async function requestOtp() {
    setStartTime(!startTime);
    if(stepOtp) setOtp('');

    try {
        const response: AxiosResponse<ResponseOtp, RequestOtp> = await axios.post(
          initiateOtp(),
          {
            phoneNumber: `91${getValues('phone')}`,
            expiry: 60,
            otpLength: 4,
            channels: [Channel.SMS],
          },
          {
            headers: {
              clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
              clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
              'Content-Type': 'application/json'
            },
          }
        );
        toast.promise(Promise.resolve(response), {
            loading: 'Loading',
            success: 'OTP Generated',
            error: 'Something went wrong, try again'
        });
        setRequestId(response.data.requestId);
        setStepOtp(true);
      } catch (error) {
        const otpError = error as AxiosError<ResponseOtp>;
        setErrorOtp(otpError.response?.data.description);
      }
  }

  async function verifyOtp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    

    try {
        await axios.post(
          otpVerification(),
          { requestId: requestId, otp: otp },
          {
            headers: {
              clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
              clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
              'Content-Type': 'application/json',
            },
          }
        );
        setStepOtp(false);

        const requestObject: WebinarRequest = {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          webinar_id: 1,
          first_name: getValues('first_name'),
          email: getValues('email'),
          schedule: 1,
          phone: getValues('phone')
        };

        await dispatch(registerForWebinar(requestObject));
      } catch (error) {
        const otpError = error as AxiosError<VerifyOtpResponse>;
        setErrorOtp(otpError.response?.data.description);
      }
  }

  const sendOtp: SubmitHandler<WebinarRequest> = async () => {
    setStartTime(!startTime);
    if(stepOtp) setOtp('');

    try {
        const response: AxiosResponse<ResponseOtp, RequestOtp> = await axios.post(
          initiateOtp(),
          {
            phoneNumber: `91${getValues('phone')}`,
            expiry: 60,
            otpLength: 4,
            channels: [Channel.SMS],
          },
          {
            headers: {
              clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
              clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
              'Content-Type': 'application/json'
            },
          }
        );
        toast.promise(Promise.resolve(response), {
            loading: 'Loading',
            success: 'OTP Generated',
            error: 'Something went wrong, try again'
        });
        setRequestId(response.data.requestId);
        setStepOtp(true);
      } catch (error) {
        const otpError = error as AxiosError<ResponseOtp>;
        setErrorOtp(otpError.response?.data.description);
      }
  };
    return (
        <div>
        {stepOtp ? (
          <form
            onSubmit={verifyOtp}
            className='bg-white w-full overflow-x-hidden md:max-w-[29vw] flex flex-col items-center justify-between md:fixed md:top-[17%] md:right-[2%] p-8'
          >
            <div className='flex flex-col items-center justify-between gap-y-6 mt-6'>
              <p className='text-lg text-black'>
                Enter OTP sent to the mobile number{' '}
                <span className='block text-sm text-black text-center'>
                  #{getValues('phone')}
                </span>
              </p>
              <OTPInput
                value={otp}
                numInputs={4}
                onChange={setOtp}
                renderSeparator={<span className='w-6'></span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: '50px',
                  height: '60px',
                  borderRadius: '8px',
                  fontSize: '1.5rem',
                  outline: 'none',
                  border: '1px solid gray',
                }}
              />
              {errorOtp && <p className='text-[#FF516C] text-lg'>{errorOtp}</p>}
              {/* <Timer startTime={startTime} textColor='text-black' requestOtp={requestOtp} /> */}
              
            </div>
            <Timer startTime={startTime} textColor='text-black' requestOtp={requestOtp} />
            <button
              type='submit'
              className='w-full bg-[#FF516C] p-4 rounded-lg text-white hover:scale-95 duration-300'
            >
              Register Now
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit(sendOtp)}
            className='bg-white w-full rounded-lg md:max-w-[30vw] h-auto flex flex-col gap-y-4 md:fixed md:top-[29%] md:right-[2%] p-6 shadow-[2px_8px_15px_5px_rgba(0,0,0,0.1)]'
            noValidate
          >
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
                <p className='text-[#FF516C] text-sm'>
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
            <div className='w-full flex flex-col gap-y-1'>
              <div className='flex gap-2'>
                <div className='bg-gray-300 p-3 md:p-3 text-black text-lg rounded-s-md'>
                  +91
                </div>
                <input
                  {...register('phone', {
                    required: 'Phone Number is Required',
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Invalid Phone Number',
                    },
                  })}
                  className='w-full rounded-md focus:rounded-md border-0 p-3 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2 placeholder:text-[#999999]'
                  placeholder='Enter Phone Number'
                  type='text'
                />
              </div>
              {errors.phone && (
                <p className='text-[#FF516C] text-sm'>{errors.phone.message}</p>
              )}
            </div>

            <button
              type='submit'
              className='w-full bg-[#FF516C] mt-3 p-4 rounded-lg text-white hover:scale-95 duration-300'
            >
              Register For Free
            </button>
          </form>
        )}
      </div>
    );
};

export default MasterclassForm;