'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError, AxiosResponse } from 'axios';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MdCancel } from 'react-icons/md';

import { setCallbackModal, setLoading } from '@/lib/features/callback/callback';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  CallBackForm,
  callbackFormZodSchema,
} from '@/schemas/callbackFormSchema';
import { OptionType, RegisterResponse } from '@/types';
import { getCountryOptions } from '@/utils';
import CallbackImage from '~/images/callback.png';

import Loader from '../Sections/Hero/Loader';

const Select = dynamic(() => import('react-select'), { ssr: false });

const Callback: FC = () => {
  const loading = useAppSelector((state) => state.callback.loading);
  const [selectedCountry, setSelectedCountry] = useState<OptionType | null>(
    null
  );
  const [countryOptions, setCountryOptions] = useState<OptionType[]>([]);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    getValues,
    reset,
    handleSubmit,
  } = useForm<CallBackForm>({
    defaultValues: {
      selectExperience: '',
      selectPrograms: '',
      fullName: '',
      email: '',
      mobileNumber: '',
    },
    resolver: zodResolver(callbackFormZodSchema),
  });

  useEffect(() => {
    setCountryOptions(getCountryOptions());
  }, []);

  const onSubmit: SubmitHandler<CallBackForm> = async () => {
    if(!selectedCountry) {
      toast.error('Please Select Your Country Code');
      return;
    }

    const requestObject = {
      experienceLevel: getValues('selectExperience'),
      programName: getValues('selectPrograms'),
      candidateName: getValues('fullName'),
      candidateEmail: getValues('email'),
      candidateCountryCode: selectedCountry.label,
      candidatePhone: getValues('mobileNumber'),
    };

    try {
      dispatch(setLoading(true));
      const response: AxiosResponse<RegisterResponse> = await axios.post(
        '/api/callback',
        requestObject
      );
      dispatch(setLoading(false));
      toast.success(response.data.message);
    } catch (error) {
      const err = error as AxiosError<RegisterResponse>;
      toast.error(String(err.response?.data?.message));
    } finally {
      reset();
      dispatch(setLoading(false));
      dispatch(setCallbackModal(false));
    }
  };
  return (
    <div
      id='my_modal_1'
      className='w-full fixed top-4 md:top-0 flex justify-center items-center h-full z-[999] bg-black/70'
    >
      {loading && <Loader />}
      <div className='bg-white flex lg:flex-row flex-col lg:w-[60%] w-[90%] p-6 lg:gap-x-6 gap-y-3 items-center rounded-md relative'>
        <button
          className='absolute right-0 top-0'
          onClick={() => dispatch(setCallbackModal(false))}
        >
          <MdCancel size={30} />
        </button>
        <div className='md:w-1/2 w-full flex max-lg:justify-center'>
          <Image
            src={CallbackImage}
            alt='advisor'
            className='w-[90%] object-contain'
            // width={400}
            // height={400}
          />
        </div>
        <div className='flex flex-col justify-center lg:w-1/2 w-full gap-6'>
          <p className='text-black xl:text-4xl text-xl font-bold'>
            Talk to our Advisor!
          </p>
          <p className='text-black'>Your Topic of Interest *</p>
          <form
            className='flex flex-col gap-1 w-full'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex flex-col -translate-y-5 gap-3 w-full'>
              <select
                defaultValue=''
                {...register('selectExperience')}
                className={clsx(
                  errors &&
                    errors.selectExperience &&
                    'focus:ring-red-500 ring-red-500 focus:ring-1 animate-shake',
                  'w-full border-0 placeholder:text-neutral-400 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2'
                )}
              >
                <option className='text-neutral-400' value='' disabled>
                  Select Experience Level
                </option>
                <option className='text-black' value='Fresher'>
                  Fresher
                </option>
                <option className='text-black' value='Experienced'>
                  Experienced
                </option>
              </select>

              <select
                defaultValue=''
                {...register('selectPrograms')}
                className={clsx(
                  errors &&
                    errors.selectPrograms &&
                    'focus:ring-red-500 ring-red-500 focus:ring-1 animate-shake',
                  'w-full border-0 placeholder:text-neutral-400 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2'
                )}
              >
                <option className='text-neutral-400' value='' disabled>
                  Select Program
                </option>
                <option
                  className='text-black'
                  value='Fullstack Web Development Program'
                >
                  Fullstack Web Development Program
                </option>
                <option className='text-black' value='Job Switch Program'>
                  Job Switch Program
                </option>
              </select>

              <input
                type='text'
                placeholder='Enter Full Name'
                className={clsx(
                  errors &&
                    errors.fullName &&
                    'focus:ring-red-500 ring-red-500 focus:ring-1 animate-shake',
                  'w-full border-0 placeholder:text-neutral-400 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2'
                )}
                {...register('fullName')}
              />

              <input
                type='text'
                placeholder='Enter Email'
                className={clsx(
                  errors &&
                    errors.email &&
                    'focus:ring-red-500 ring-red-500 focus:ring-1 animate-shake',
                  'w-full border-0 placeholder:text-neutral-400 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2'
                )}
                {...register('email')}
              />

              <div className='w-full flex gap-x-3'>
                <Select
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={(newValue) =>
                    setSelectedCountry(newValue as OptionType)
                  }
                  placeholder='Code'
                  className='md:w-[28%] w-[35%] cursor-pointer'
                  isSearchable
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      border: `2px solid ${
                        state.isFocused ? '#D5DEE5' : '#D5DEE5'
                      }`,
                      boxShadow: state.isFocused ? 'none' : undefined,
                      padding: '0.15rem',
                      borderRadius: '0.375rem', // rounded-md equivalent
                      backgroundColor: 'white',
                      cursor: 'pointer',
                    }),
                  }}
                />

                <input
                  type='text'
                  placeholder='Enter Phone'
                  className={clsx(
                    errors &&
                      errors.mobileNumber &&
                      'focus:ring-red-500 ring-red-500 focus:ring-1 animate-shake',
                    'md:w-[72%] w-[65%] rounded-md border-0 placeholder:text-neutral-400 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2'
                  )}
                  {...register('mobileNumber')}
                />
              </div>
            </div>

            <button
              type='submit'
              className='bg-[#b30158] w-full text-white text-sm uppercase py-2 rounded-md hover:scale-95 duration-300'
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Callback;
