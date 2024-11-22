'use client';

import axios, { AxiosError, AxiosResponse } from 'axios';
import Image from 'next/image';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import OTPInput from 'react-otp-input';

import Loader from '@/components/Sections/Hero/Loader';
import Timer from '@/components/Sections/Hero/Timer';
import {
  Channel,
  HeroSectionFormData,
  RequestOtp,
  ResponseOtp,
  VerifyOtpRequest,
  VerifyOtpResponse,
} from '@/types';
import { initiateOtp, otpVerification } from '@/utils';
import Rocket from '~/images/Rocket.png';

const HeroSectionForm: FC = () => {
  const [stepOtp, setStepOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [requestId, setRequestId] = useState('');
  const [errorOtp, setErrorOtp] = useState<string | undefined>('');
  const [startTime, setStartTime] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<HeroSectionFormData>({
    defaultValues: {
      phoneNumber: '',
    },
  });

  const verifyOtp: SubmitHandler<HeroSectionFormData> = async () => {
    try {
      const response: AxiosResponse<VerifyOtpResponse, VerifyOtpRequest> =
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
      console.log(response.data.requestId);
    } catch (error) {
      const otpError = error as AxiosError<VerifyOtpResponse>;
      setErrorOtp(otpError.response?.data.description);
    }
  };

  async function sendOtp() {
    setIsLoading(true);
    setStartTime(!startTime);
    if (stepOtp) {
      setOtp('');
    }

    try {
      const response: AxiosResponse<ResponseOtp, RequestOtp> = await axios.post(
        initiateOtp(),
        {
          phoneNumber: `91${getValues('phoneNumber')}`,
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
      setIsLoading(false);
      setStepOtp(true);
      console.log(response.data.requestId);
      setRequestId(response.data.requestId);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-full max-w-md mx-auto md:max-w-lg bg-gradient-to-tr from-[#00FFE0] to-[#306EBD] p-[3px] rounded-2xl relative'>
      {isLoading && <Loader />}
      <div
        className={`bg-gradient-to-tr from-[#000] to-[#020304] py-6 px-4 md:py-10 md:px-10 rounded-xl flex flex-col gap-6 ${
          isLoading ? 'blur-[3px]' : ''
        }`}
      >
        <p className='text-xl md:text-3xl text-white font-semibold text-center'>
          Book a <span className='text-teal'>Free</span> Live Demo Class
        </p>
        <div className='flex flex-col gap-8'>
          <div>
            {!stepOtp ? (
              <>
                <div className='flex items-center bg-white rounded-md'>
                  <div className='bg-gray-300 p-3 md:p-4 text-black text-lg rounded-l-md'>
                    +91
                  </div>
                  <input
                    {...register('phoneNumber', {
                      required: 'Phone Number is Required',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Invalid Phone Number Format',
                      },
                    })}
                    placeholder='Enter Phone Number'
                    className='w-full p-3 md:p-4 text-black outline-none rounded-r-md'
                  />
                </div>
                {errors.phoneNumber && (
                  <p className='text-red-500 text-sm mt-2'>
                    {errors.phoneNumber.message}
                  </p>
                )}
              </>
            ) : (
              <div className='flex flex-col items-center gap-6'>
                <p className='text-lg text-white'>
                  Enter OTP sent to the mobile number{' '}
                  <span className='block text-sm'>
                    #{getValues('phoneNumber')}
                  </span>
                </p>
                <OTPInput
                  value={otp}
                  numInputs={4}
                  onChange={setOtp}
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
                {errorOtp && <p className='text-red-400 text-lg'>{errorOtp}</p>}
                <Timer startTime={startTime} sendOtp={sendOtp} />
              </div>
            )}
          </div>
          <button
            onClick={stepOtp ? handleSubmit(verifyOtp) : sendOtp}
            className='bg-violet rounded-md p-4 text-white text-lg flex items-center justify-center gap-3 hover:scale-95 transition-transform'
          >
            {stepOtp ? 'Register Now' : 'Continue'}
            <Image src={Rocket} alt='Rocket' className='mix-blend-screen' />
          </button>
        </div>
        <p className='text-xs text-white text-center mt-4'>
          By continuing, you agree to{' '}
          <span className='text-teal cursor-pointer'>
            InterviewCall&apos;s Terms
          </span>{' '}
          and <span className='text-teal cursor-pointer'>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default HeroSectionForm;
