'use client';

import axios, { AxiosError, AxiosResponse } from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import OTPInput from 'react-otp-input';

import Loader from '@/components/Sections/Hero/Loader';
import Timer from '@/components/Sections/Hero/Timer';
import {
  Channel,
  HeroSectionFormData,
  RequestOtp,
  ResponseOtp,
  VerifyOtpResponse,
} from '@/types';
import isValidMobileNumber, { initiateOtp, otpVerification } from '@/utils';
import Rocket from '~/images/Rocket.png';

const HeroSectionForm: FC = () => {
  const [stepOtp, setStepOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [requestId, setRequestId] = useState('');
  const [errorNumber, setErrorNumber] = useState('');
  const [errorOtp, setErrorOtp] = useState<string | undefined>('');
  const [startTime, setStartTime] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
  } = useForm<HeroSectionFormData>({
    defaultValues: {
      phoneNumber: '',
    },
  });

  const verifyOtp: SubmitHandler<HeroSectionFormData> = async () => {
    if(otp) setIsLoading(true);

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
        toast.success('Verified Successfully');
        setStepOtp(false);
        setIsLoading(false);
        router.push('/fullstack-web-development-demo-class');
    } catch (error) {
      const otpError = error as AxiosError<VerifyOtpResponse>;
      setErrorOtp(otpError.response?.data.description);
    }
  };

  async function sendOtp() {
    if(getValues('phoneNumber')) {
      if(!isValidMobileNumber(getValues('phoneNumber'))) {
        setErrorNumber('Request Error : Incorrect Mobile Number');
        return;
      }

      setIsLoading(true);
      setStartTime(!startTime);
    }
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
      setRequestId(response.data.requestId);
    } catch (error) {
      const otpError = error as AxiosError<ResponseOtp>;
      setErrorOtp(otpError.response?.data.description);
    }
  }

  return (
    <div className='w-full max-w-md mx-auto md:max-w-lg bg-gradient-to-tr from-[#00FFE0] to-[#000] p-[3px] rounded-2xl relative'>
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
                {errorNumber && (
                  <p className='text-red-400 text-lg mt-2'>
                    {errorNumber}
                  </p>
                )}

                {errorOtp && <p className='text-red-400 text-lg'>{errorOtp}</p>}
              </>
            ) : (
              <div className='flex flex-col items-center justify-center gap-6'>
                <p className='text-lg text-white'>
                  Enter OTP sent to the mobile number{' '}
                  <span className='block text-sm text-center'>
                    #{getValues('phoneNumber')}
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
        <div className='text-xs text-white hidden md:flex items-center justify-center mt-4 md:gap-x-1 gap-0'>
          <p>By continuing, you agree to{' '}</p>
          <Link href='/terms-conditions' className='group'>
            <div className='text-teal cursor-pointer'>
              InterviewCall&apos;s Terms
            </div>
            <div className='w-full h-[1.5px] bg-teal scale-0 group-hover:scale-100 duration-300 origin-left'></div>
          </Link>
          and
          <Link href='/privacy-policy' className='group'>
            <div className='text-teal cursor-pointer'>Privacy Policy</div>
            <div className='w-full h-[1.5px] bg-teal scale-0 group-hover:scale-100 duration-300 origin-left'></div>
          </Link>
        </div>

        {/* For Mobile View */}
        <p className='text-xs md:hidden block text-white text-center'>
          By continuing, you agree to{' '}
          <span onClick={() => router.push('/terms-conditions')} className='text-teal cursor-pointer'>
            InterviewCall&apos;s Terms
          </span>{' '}
          and{' '}
          <span onClick={() => router.push('/privacy-policy')} className='text-teal cursor-pointer'>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default HeroSectionForm;
