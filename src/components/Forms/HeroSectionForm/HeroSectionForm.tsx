'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Image from 'next/image';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Input from '@/components/Input/Input';
import { HeroSectionFormData, HeroSectionFormSchema } from '@/types';
import Rocket from '~/images/Rocket.png';

const HeroSectionForm: FC = () => {
  const { register, formState: { errors }, handleSubmit, getValues, reset } = useForm<HeroSectionFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    resolver: zodResolver(HeroSectionFormSchema),
  });

  const onSubmit: SubmitHandler<HeroSectionFormData> = async () => {
    try {
      const response = await axios.post('/api/register',
        {
          to: 'itskingshukdeb@gmail.com',
          subject: 'Someone wants to register for the course',
          text: `
                  <div style='padding: 24px;'>
                    <h3>Hi Sunyul,</h3>
                    <p>A user has shown interest in your course. Here are the details:</p>
                    <table>
                      <tr>
                        <td>
                          Name: <b>${getValues('firstName')} ${getValues('lastName')}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Email:
                          <b>
                            <a href='mailto:${getValues('email')}'>${getValues('email')}</a>
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Phone Number: <b>${getValues('phoneNumber')}</b>
                        </td>
                      </tr>
                    </table>
                  </div>
                `,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status == 200) {
        toast.success('Email sent successfully');
      } else {
        toast.error('An error occurred while sending the email');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('An error occurred while sending the email');
    } finally {
        reset();
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-5 w-full'
    >
      <Input
        name='firstName'
        placeholder='First Name'
        register={register}
        error={errors.firstName}
      />

      <Input
        name='lastName'
        placeholder='Last Name'
        register={register}
        error={errors.lastName}
      />

      <Input
        name='email'
        placeholder='Email'
        register={register}
        error={errors.email}
      />

      <Input
        name='phoneNumber'
        placeholder='Phone Number'
        register={register}
        error={errors.phoneNumber}
      />

      <button
        type='submit'
        className='bg-violet rounded-md p-3 flex items-center justify-center space-x-3 disabled:opacity-50'
      >
        <p className='text-white text-xl text-center'>Register Now</p>
        <Image src={Rocket} alt='Rocket' className='mix-blend-screen' />
      </button>
    </form>
  );
};

export default HeroSectionForm;
