'use client';

import axios, { AxiosError } from 'axios';
import parsePhoneNumberFromString, { getCountryCallingCode } from 'libphonenumber-js';
import dynamic from 'next/dynamic';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiFillCloseCircle } from 'react-icons/ai';
import OTPInput from 'react-otp-input';

import { INVALID_NUMBERS } from '@/constant/checkInvalidNumbers';
import {
  resetForm,
  sendOtpRequest,
  setIsLoading,
  setOtp,
  setStartTime,
  verifyOtpRequest,
} from '@/lib/features/heroSectionOtp/otpSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  Channel,
  ModalFormData,
  OptionType,
  OtpVerificationRequest,
  RegisterResponse,
  RequestOtp,
} from '@/types';
import { getCountryOptions } from '@/utils';

import Loader from './Loader';
import Timer from './Timer';

const Select = dynamic(() => import('react-select'), { ssr: false });

const FormModal: FC = () => {
  const formState = useAppSelector((state) => state.otpState);
  const [selectedCountry, setSelectedCountry] = useState<OptionType | null>(
    null
  );
  const [countryOptions, setCountryOptions] = useState<OptionType[]>([]);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<ModalFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
    },
  });

  useEffect(() => {
    setCountryOptions(getCountryOptions());
  }, []);

  const sendOtp: SubmitHandler<ModalFormData> = async () => {
    if(!selectedCountry) {
        toast.error('Please Select Your Country Code');
        return;
    }

    const callingcode = getCountryCallingCode(selectedCountry.value);
    const phoneNumber = parsePhoneNumberFromString(
      `+${callingcode}${getValues('phone')}`
    );
  
    if (!phoneNumber || !phoneNumber.isValid() || INVALID_NUMBERS.includes(phoneNumber?.nationalNumber)) {
      toast.error('Please enter a valid phone number');
      return;
    }

    dispatch(setIsLoading(true));
    dispatch(setStartTime(!formState.startTime));

    if (formState.stepOtp) {
      dispatch(setOtp(''));
    }

    const makeRequest: RequestOtp = {
      phoneNumber: `+${getCountryCallingCode(selectedCountry.value)}${getValues('phone')}`,
      expiry: 60,
      otpLength: 4,
      channels: [Channel.SMS],
    };

    const requestObject = {
      candidateName: getValues('fullName'),
      candidateEmail: getValues('email'),
      candidateCountryCode: selectedCountry.label,
      candidatePhone: getValues('phone'),
    };

    try {
      await axios.post('/api/apply', requestObject);
      await dispatch(sendOtpRequest(makeRequest));
    } catch (error) {
      dispatch(setIsLoading(false));
      const err = error as AxiosError<RegisterResponse>;
      toast.error(String(err.response?.data?.message));
    }
  };

  const verifyOtp: SubmitHandler<ModalFormData> = async () => {
    if (!formState.otp) return;

    if (formState.otp) dispatch(setIsLoading(true));

    const makeRequest: OtpVerificationRequest = {
      requestId: formState.requestId,
      otp: formState.otp,
    };

    const response = await dispatch(verifyOtpRequest(makeRequest));
    if (response.meta.requestStatus == 'fulfilled') reset();
  };

  function clearForm() {
    dispatch(resetForm());
    reset();
  }

  return (
    <div className='fixed w-screen bg-white/40 backdrop-blur-sm mt-10 h-screen z-[999]'>
      {/* Desktop View Button */}
      <button
        className={`absolute right-4 md:block hidden ${
          formState.isLoading ? 'blur-sm pointer-events-none' : ''
        }`}
        onClick={clearForm}
      >
        <AiFillCloseCircle size={40} color='white' />
      </button>

      {formState.isLoading && <Loader />}

      {!formState.stepOtp ? (
        <div
          className={`bg-[#FFFFFF] md:w-[40%] w-[95%] h-auto p-8 mx-auto md:mt-5 mt-36 rounded-lg relative ${
            formState.isLoading ? 'blur-sm pointer-events-none' : ''
          }`}
        >
          {/* Modile View Button */}
          <button
            className='absolute right-1 top-1 md:hidden block'
            onClick={clearForm}
          >
            <AiFillCloseCircle size={40} color='gray' />
          </button>
          <div>
            <div className='flex flex-col gap-y-2'>
              <p className='text-[#1371FF] font-semibold text-2xl'>Apply Now</p>
              <p className='text-black text-lg'>
                Next Batch Starts In May First Week
              </p>
            </div>
            <form
              onSubmit={handleSubmit(sendOtp)}
              className='flex flex-col gap-y-6 mt-3'
            >
              <div className='w-full flex flex-col gap-y-1'>
                <input
                  {...register('fullName', {
                    required: 'Full Name is Required',
                  })}
                  className='rounded-md p-3 border-0 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2 placeholder:text-[#999999] text-black'
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
                  className='rounded-md p-3 border-0 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2 placeholder:text-[#999999] text-black'
                  placeholder='Enter Email'
                  type='text'
                />
                {errors.email && (
                  <p className='text-[#FF516C] text-sm'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className='w-full flex flex-col gap-y-1'>
                <div className='w-full flex gap-x-4'>
                  <Select
                    options={countryOptions}
                    value={selectedCountry}
                    onChange={(newValue) =>
                      setSelectedCountry(newValue as OptionType)
                    }
                    placeholder='Code'
                    className='md:w-[28%] w-[35%] cursor-pointer md:block hidden'
                    isSearchable
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        border: `2px solid ${
                          state.isFocused ? '#D5DEE5' : '#D5DEE5'
                        }`,
                        boxShadow: state.isFocused ? 'none' : undefined,
                        padding: '0.45rem',
                        borderRadius: '0.375rem', // rounded-md equivalent
                        backgroundColor: 'white',
                        cursor: 'pointer',
                      }),
                    }}
                  />

                  <Select
                    options={countryOptions}
                    value={selectedCountry}
                    onChange={(newValue) =>
                      setSelectedCountry(newValue as OptionType)
                    }
                    placeholder='Code'
                    className='md:w-[28%] w-[35%] cursor-pointer md:hidden block'
                    menuPlacement='top'
                    isSearchable
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        border: `2px solid ${
                          state.isFocused ? '#D5DEE5' : '#D5DEE5'
                        }`,
                        boxShadow: state.isFocused ? 'none' : undefined,
                        padding: '0.45rem',
                        borderRadius: '0.375rem', // rounded-md equivalent
                        backgroundColor: 'white',
                        cursor: 'pointer',
                      }),
                    }}
                  />
                  <input
                    {...register('phone', {
                      required: 'Phone Number is Required',
                      pattern: {
                        value: /^[1-9]\d{1,14}$/,
                        message: 'Invalid Phone Number Format',
                      },
                    })}
                    className='md:w-[72%] w-[65%] rounded-md p-3 border-0 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2 placeholder:text-[#999999] text-black'
                    placeholder='Enter Phone Number'
                    type='text'
                  />
                </div>
                {errors.phone && (
                  <p className='text-[#FF516C] text-sm'>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <button
                type='submit'
                className='w-full p-3 text-lg rounded-lg bg-[#1371FF] hover:scale-95 duration-300 font-[600] uppercase text-white'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div
          className={`bg-[#FFFFFF] md:w-[30%] w-[95%] h-auto p-3 md:p-8 mx-auto mt-48 md:mt-16 rounded-lg relative ${
            formState.isLoading ? 'blur-sm pointer-events-none' : ''
          }`}
        >
          <button
            className='absolute right-0 top-0 md:hidden block'
            onClick={clearForm}
          >
            <AiFillCloseCircle size={40} color='gray' />
          </button>
          <div className='flex flex-col items-center gap-y-5 md:gap-y-7 mt-6 md:mt-0'>
            <p className='text-lg'>
              Enter OTP sent to the mobile number{' '}
              <span className='block text-sm text-center'>
                #{getValues('phone')}
              </span>
            </p>
            <OTPInput
              value={formState.otp}
              numInputs={4}
              onChange={(otp) => dispatch(setOtp(otp))}
              renderSeparator={<span className='w-6'></span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: '50px',
                height: '60px',
                borderRadius: '8px',
                fontSize: '1.5rem',
                outline: 'none',
                border: '1px solid black',
                color: 'black',
              }}
            />
            <Timer
              textColor='black'
              requestOtp={sendOtp}
              handleSubmit={handleSubmit}
            />
            {formState.errorOtp && (
              <p className='text-[#FF516C] text-sm'>{formState.errorOtp}</p>
            )}
            <div className='w-[70%] pb-5 md:pb-0'>
              <button
                onClick={handleSubmit(verifyOtp)}
                className='p-3 rounded-lg text-lg font-[600] uppercase bg-[#1371FF] w-full text-white mt-1'
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
