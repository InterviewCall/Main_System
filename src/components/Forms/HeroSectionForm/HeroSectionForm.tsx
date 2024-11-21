'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Image from 'next/image';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';
import OTPInput from 'react-otp-input';

import Loader from '@/components/Sections/Hero/Loader';
import Timer from '@/components/Sections/Hero/Timer';
// import Input from '@/components/Input/Input';
import { Channel, HeroSectionFormData, RequestOtp, ResponseOtp, VerifyOtpRequest, VerifyOtpResponse } from '@/types';
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
    }
  });

  const verifyOtp: SubmitHandler<HeroSectionFormData> = async () => {
    try {
      const response: AxiosResponse<VerifyOtpResponse, VerifyOtpRequest> = await axios.post(otpVerification(), {
        requestId: requestId,
        otp: otp
      }, {
        headers: {
          clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
          clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data.requestId);
    } catch (error) {
      const otpError = error as AxiosError<VerifyOtpResponse>;
      setErrorOtp(otpError.response?.data.description);
    }
  };

  async function sendOtp() {
    setIsLoading(true);
    setStartTime(!startTime);
    if(stepOtp) {
      setOtp('');
    }

    try {
      const response: AxiosResponse<ResponseOtp, RequestOtp> = await axios.post(initiateOtp(), {
        phoneNumber: `91${getValues('phoneNumber')}`,
        expiry: 60,
        otpLength: 4,
        channels: [Channel.SMS]
      }, {
        headers: {
          clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
          clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
        }
      });
      setIsLoading(false);
      setStepOtp(true);
      console.log(response.data.requestId);
      setRequestId(response.data.requestId);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="md:p-[3px] p-[2px] bg-gradient-to-tr from-[#00FFE0] to-[#000] rounded-2xl w-full md:w-fit ml-auto relative">
      {isLoading && <Loader />}
      <div
        className={`bg-gradient-to-tr from-[#000] to-[#020304] py-4 md:py-20 md:p-10 p-4 rounded-xl flex flex-col gap-6 md:gap-10 items-center ${
          isLoading ? 'blur-[3px]' : ''
        }`}
      >
        <p className="md:text-3xl text-xl text-white font-semibold">
          Book a <span className="text-teal">Free</span> Live Demo Class
        </p>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-6 w-full">
            <div
              className="flex flex-col gap-7 w-full"
            >

              {!stepOtp ? (
                <>
                  <div className="w-full rounded-md flex bg-white items-center">
                    <div className="text-black bg-gray-300 md:p-[12px] p-[14px] text-[1rem] rounded-s-md">
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
                      placeholder="Enter Phone Number"
                      className="input-field"
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </>
              ) : (
                <div className="w-full flex flex-col items-center gap-y-8">
                  <div className="text-white text-lg">
                    Enter OTP sent to the mobile number
                    <p className="text-center text-sm">
                      #{getValues('phoneNumber')}
                    </p>
                  </div>
                  <OTPInput
                    value={otp}
                    numInputs={4}
                    onChange={setOtp}
                    renderSeparator={<span className="w-6"></span>}
                    renderInput={(props) => <input {...props} />}
                    shouldAutoFocus={true}
                    inputStyle={{
                      width: '60px',
                      height: '70px',
                      borderRadius: '8px',
                      fontSize: '2rem',
                      outline: 'none',
                      border: '1px solid gray',
                      boxShadow: '0 0 0 2px gray',
                      transition: 'box-shadow 0.2s ease',
                    }}
                  />

                  {errorOtp && <p className='text-red-400 text-lg'>{errorOtp}</p>}
                  <Timer startTime={startTime} sendOtp={sendOtp} />
                </div>
              )}

              {stepOtp ? (
                <button
                  onClick={handleSubmit(verifyOtp)}
                  className="bg-violet rounded-md p-3 flex items-center justify-center space-x-3 disabled:opacity-50 hover:scale-95 duration-300"
                >
                  <p className="text-white text-xl text-center">Register Now</p>
                  <Image
                    src={Rocket}
                    alt="Rocket"
                    className="mix-blend-screen"
                  />
                </button>
              ) : (
                <button onClick={sendOtp} className="bg-violet rounded-md p-3 flex items-center justify-center space-x-3 hover:scale-95 duration-300 disabled:opacity-50">
                  <p className="text-white text-xl text-center">Continue</p>
                </button>
              )}
            </div>
          </div>
          <p className="text-[9px] text-white text-center">
            By continuing, you agree to{' '}
            <span className="text-teal cursor-pointer">
              InterviewCall&apos;s Terms
            </span>{' '}
            and <span className="text-teal cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionForm;
