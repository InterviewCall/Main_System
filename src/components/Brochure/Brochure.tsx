'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError, AxiosResponse } from 'axios';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MdCancel } from 'react-icons/md';

import { INVALID_NUMBERS } from '@/constant/checkInvalidNumbers';
import { setBrochureModal } from '@/lib/features/brochure/brochure';
// import { setCallbackModal, setLoading } from '@/lib/features/callback/callback';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  BrochureForm,
  brochureZodSchema,
} from '@/schemas/brochureSchema';
import { RegisterResponse } from '@/types';
// import CallbackImage from '~/images/callback.png';
import FulstackImage from '~/images/fullstackBrochure.png';
import JobswitchImage from '~/images/jobswitchBrochure.png';

import Loader from '../Sections/Hero/Loader';

const Brochure: FC = () => {
  const pathName = usePathname();
  const loading = useAppSelector((state) => state.callback.loading);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    getValues,
    reset,
    handleSubmit
  } = useForm<BrochureForm>({
    defaultValues: {
      fullName: '',
      email: '',
      mobileNumber: '',
    },
    resolver: zodResolver(brochureZodSchema),
  });

  const onSubmit: SubmitHandler<BrochureForm> = async () => {

    const mobile = getValues('mobileNumber');
    if(INVALID_NUMBERS.includes(mobile)) {
      toast.error('Please Enter a valid mobile number');
      return;
    }

    const requestObject = {
      programName: pathName == '/job-switch' ? 'Job Switch' : 'Fullstack-Mern',
      candidateName: getValues('fullName'),
      candidateEmail: getValues('email'),
      candidatePhone: getValues('mobileNumber')
    };

    try {
      const response: Promise<AxiosResponse<RegisterResponse>> = axios.post('/api/brochure', requestObject);
      toast.promise(response, {
        loading: 'Redirecting to the brochure page',
        success: 'Successfully redirected',
        error: 'Something went wrong'
      });
      await response;
      const brochureLink = (pathName == '/job-switch') ? process.env.NEXT_PUBLIC_JOB_SWITCH_BROCHURE : process.env.NEXT_PUBLIC_FULLSTACK_BROCHURE;
      window.open(brochureLink, '_blank');
    } catch (error) {
      const err = error as AxiosError<RegisterResponse>;
      toast.error(String(err.response?.data?.message));
    } finally {
      reset();
      dispatch(setBrochureModal(false));
    }
  };

  function showFormError(errorMsg: string | undefined) {
    toast.error(errorMsg || '');
  }

  useEffect(() => {
    const errorField = errors.fullName || errors.email || errors.mobileNumber;
    if(errorField) {
      showFormError(errorField.message);
    }
  }, [errors]);

  return (
    <div id='my_modal_1' className='w-full fixed top-0 flex justify-center items-center h-full z-[998] bg-black/70'>
      {loading && <Loader />}
      <div className='bg-white flex lg:flex-row flex-col lg:w-[60%] w-[90%] p-6 gap-8 rounded-md relative'>
        <button className='absolute md:right-3 md:top-3 top-0 right-0 z-[3]' onClick={() => dispatch(setBrochureModal(false))}>
          <MdCancel size={30} />
        </button>
        <div className='md:w-1/2 w-full flex max-lg:justify-center z-[2]'>
          <Image
            src={pathName == '/job-switch' ? JobswitchImage : FulstackImage}
            alt='advisor'
            width={400}
            height={400}
          />
        </div>
        <div className='flex flex-col justify-center lg:w-1/2 w-full gap-y-8'>
          <p className='text-black xl:text-4xl text-xl font-bold'>
            Download Brochure
          </p>
          {/* <p className='text-black'>Your Topic of Interest *</p> */}
          <form className='flex flex-col gap-1 w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col -translate-y-5 gap-3 w-full'>
              {/* <select
                defaultValue=''
                {...register('selectExperience')}
                className={clsx(
                  errors && errors.selectExperience && 'border-red-500',
                  'focus:ring-0 focus:outline-none w-full text-neutral-400'
                )}
              >
                <option className='text-neutral-400' value='' disabled>
                  Select Experience Level
                </option>
                <option
                  className='text-black'
                  value='Fresher'
                >
                  Fresher
                </option>
                <option className='text-black' value='Experienced'>
                  Experienced
                </option>
              </select> */}

              {/* <select
                defaultValue=''
                {...register('selectPrograms')}
                className={clsx(
                  errors && errors.selectPrograms && 'border-red-500',
                  'focus:ring-0 focus:outline-none w-full text-neutral-400'
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
              </select> */}

              <input
                type='text'
                placeholder='Enter Full Name'
                className={clsx(
                  errors && errors.fullName && 'focus:ring-red-500 ring-red-500 focus:ring-1 animate-shake',
                  'w-full border-0 placeholder:text-neutral-400 rounded-md p-2 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2'
                )}
                {...register('fullName')}
              />

              <input
                type='text'
                placeholder='Enter Email'
                className={clsx(
                  errors && errors.email && 'focus:ring-red-500 ring-red-500 focus:ring-1 animate-shake',
                  'w-full border-0 rounded-md p-2 placeholder:text-neutral-400 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2'
                )}
                {...register('email')}
              />

              <div className='w-full flex gap-x-3'>

                <input
                  type='text'
                  placeholder='Enter Phone'
                  className={clsx(
                    errors && errors.mobileNumber && 'focus:ring-red-500 ring-red-500 focus:ring-1 animate-shake',
                    'w-full rounded-md border-0 placeholder:text-neutral-400 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2'
                  )}
                  {...register('mobileNumber')}
                />
              </div>
            </div>

            <button type='submit' className='bg-[#b30158] w-full text-white text-sm uppercase py-2 rounded-md hover:scale-95 duration-300'>
              Download Brochure
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
