'use client';

import axios, { AxiosError, AxiosResponse } from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { setLoading } from '@/lib/features/masterclass/masterclassSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import OTPInput from 'react-otp-input';
// import Timer from '@/components/Sections/Hero/Timer';
// import { setLink } from '@/lib/features/masterclass/masterclassSlice';
// import { registerForWebinar } from '@/lib/features/webinars/webinarjamResponseSlice';
// import { useAppDispatch } from '@/lib/hooks';
import { RegisterRequest, RegisterResponse } from '@/types';
// import { initiateOtp, otpVerification } from '@/utils';

const MasterclassForm: FC = () => {
  // const webinarResponse = useAppSelector((state) => state.webinarResponse);
  const loading = useAppSelector((state) => state.masterclass.loading);
  // const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterRequest>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
    },
  });

  // const [stepOtp, setStepOtp] = useState(false);
  // const [errorOtp, setErrorOtp] = useState<string | undefined>('');
  // const [otp, setOtp] = useState('');
  // const [startTime, setStartTime] = useState(false);
  // const [requestId, setRequestId] = useState('');

  // useEffect(() => {
  //   if(webinarResponse.user.thank_you_url) {
  //     window.open(webinarResponse.user.thank_you_url, '_blank');
  //   }
  // }, [webinarResponse.user.thank_you_url]);

  // async function requestOtp() {
  //   setStartTime(!startTime);
  //   if(stepOtp) setOtp('');

  //   try {
  //       const response: AxiosResponse<ResponseOtp, RequestOtp> = await axios.post(
  //         initiateOtp(),
  //         {
  //           phoneNumber: `91${getValues('phone')}`,
  //           expiry: 60,
  //           otpLength: 4,
  //           channels: [Channel.SMS],
  //         },
  //         {
  //           headers: {
  //             clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  //             clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  //             'Content-Type': 'application/json'
  //           },
  //         }
  //       );
  //       toast.promise(Promise.resolve(response), {
  //           loading: 'Loading',
  //           success: 'OTP Generated',
  //           error: 'Something went wrong, try again'
  //       });
  //       setRequestId(response.data.requestId);
  //       setStepOtp(true);
  //     } catch (error) {
  //       const otpError = error as AxiosError<ResponseOtp>;
  //       setErrorOtp(otpError.response?.data.description);
  //     }
  // }

  // async function verifyOtp(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
    

  //   try {
  //       await axios.post(
  //         otpVerification(),
  //         { requestId: requestId, otp: otp },
  //         {
  //           headers: {
  //             clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  //             clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );
  //       setStepOtp(false);

  //       const requestObject: WebinarRequest = {
  //         api_key: process.env.NEXT_PUBLIC_API_KEY,
  //         webinar_id: 1,
  //         first_name: getValues('first_name'),
  //         email: getValues('email'),
  //         schedule: 1,
  //         phone: getValues('phone')
  //       };

  //       await dispatch(registerForWebinar(requestObject));
  //     } catch (error) {
  //       const otpError = error as AxiosError<VerifyOtpResponse>;
  //       setErrorOtp(otpError.response?.data.description);
  //     }
  // }

  // const sendOtp: SubmitHandler<WebinarRequest> = async () => {
  //   setStartTime(!startTime);
  //   if(stepOtp) setOtp('');

  //   try {
  //       const response: AxiosResponse<ResponseOtp, RequestOtp> = await axios.post(
  //         initiateOtp(),
  //         {
  //           phoneNumber: `91${getValues('phone')}`,
  //           expiry: 60,
  //           otpLength: 4,
  //           channels: [Channel.SMS],
  //         },
  //         {
  //           headers: {
  //             clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  //             clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  //             'Content-Type': 'application/json'
  //           },
  //         }
  //       );
  //       toast.promise(Promise.resolve(response), {
  //           loading: 'Loading',
  //           success: 'OTP Generated',
  //           error: 'Something went wrong, try again'
  //       });
  //       setRequestId(response.data.requestId);
  //       setStepOtp(true);
  //     } catch (error) {
  //       const otpError = error as AxiosError<ResponseOtp>;
  //       setErrorOtp(otpError.response?.data.description);
  //     }
  // };

  const registerMasterclass: SubmitHandler<RegisterRequest> = async () => {
    const requestObject = {
      candidateName: getValues('fullName'),
      candidateEmail: getValues('email'),
      candidatePhone: getValues('phone')
    };

    try {
      dispatch(setLoading(true));
      const response: AxiosResponse<RegisterResponse> = await axios.post('/api/make-registration', requestObject);
      dispatch(setLoading(false));   
      toast.success(response.data.message);
      router.push('/masterclass-registration');
    } catch (error) {
      dispatch(setLoading(false)); 
      const err = error as AxiosError<RegisterResponse>;
      toast.error(String(err.response?.data?.message));
    }
  };
    return (
        <div>
          <form
            onSubmit={handleSubmit(registerMasterclass)}
            className={clsx(loading && 'backdrop-blur-lg', 'bg-white relative w-full rounded-lg lg:max-w-[29vw] h-auto flex flex-col gap-y-4 lg:fixed lg:top-[26%] lg:right-[2%] p-6 shadow-[2px_8px_15px_5px_rgba(0,0,0,0.1)]')}
            noValidate
          >
            <div className='w-full flex flex-col gap-y-1'>
              <input
                {...register('fullName', {
                  required: 'Full Name is required',
                  minLength: {
                    value: 2,
                    message: 'Full Name must be at least 2 characters long',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Full Name must not exceed 50 characters',
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: 'Full Name should contain only letters and spaces',
                  },
                })}
                className='w-full rounded-md border-0 p-3 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2 placeholder:text-[#999999]'
                placeholder='Enter Full Name'
                type='text'
              />
              {errors.fullName && (
                <p className='text-[#FF516C] text-sm'>
                  {errors.fullName.message}
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
                      value: /^[6-9][0-9]{9}$/,
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
              className='w-full bg-[#FF516C] mt-3 p-4 rounded-lg text-white hover:scale-95 duration-300 uppercase font-bold'
            >
              Register For Free
            </button>
          </form>
      </div>
    );
};

export default MasterclassForm;