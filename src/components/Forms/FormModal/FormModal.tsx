'use client';

import { AxiosError } from 'axios';
import { FC } from 'react';
import { SubmitHandler,useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiFillCloseCircle } from 'react-icons/ai';
import OTPInput from 'react-otp-input';

import { resetForm, sendOtpRequest, setErrorOtp, setIsLoading, setOtp, setStartTime, verifyOtpRequest } from '@/lib/features/heroSectionOtp/otpSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Channel, ModalFormData, OtpVerificationRequest, RequestOtp, ResponseOtp, VerifyOtpResponse } from '@/types';

import Loader from './Loader';
import Timer from './Timer';

const FormModal: FC = () => {
    const formState = useAppSelector((state) => state.otpState);
    const dispatch = useAppDispatch();
    console.log(formState.otp);
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

    const sendOtp: SubmitHandler<ModalFormData> = async () => {
        dispatch(setIsLoading(true));
        dispatch(setStartTime(!formState.startTime));

        if(formState.stepOtp) {
            dispatch(setOtp(''));
        }

        try {
            const makeRequest: RequestOtp = {
                phoneNumber: `91${getValues('phone')}`,
                expiry: 60,
                otpLength: 4,
                channels: [Channel.SMS]
            };

            await dispatch(sendOtpRequest(makeRequest));
            toast.success('Otp Send Successfully');
        } catch (error) {
            const otpError = error as AxiosError<ResponseOtp>;
            dispatch(setErrorOtp(otpError.response?.data.description));
        }
    };

    const verifyOtp: SubmitHandler<ModalFormData> = async () => {
        if(formState.otp) setIsLoading(true);

        try {
            const makeRequest: OtpVerificationRequest = {
                requestId: formState.requestId,
                otp: formState.otp
            };

            await dispatch(verifyOtpRequest(makeRequest));
            toast.success('Verified Successfully');
            reset();
        } catch (error) {
            const otpError = error as AxiosError<VerifyOtpResponse>;
            dispatch(setErrorOtp(otpError.response?.data.description));
        }
    };
    
    return (
        <div className='fixed w-screen bg-white/40 backdrop-blur-sm mt-7 h-screen z-[999]'>
            {/* Desktop View Button */}
            <button className={`absolute right-4 md:block hidden ${formState.isLoading ? 'blur-sm pointer-events-none' : ''}`} onClick={() => dispatch(resetForm())}>
                <AiFillCloseCircle size={40} color='white' />
            </button>

            {formState.isLoading && <Loader />}

            {!formState.stepOtp ? (
            <div className={`bg-[#FFFFFF] md:w-[40%] w-[95%] h-auto p-8 mx-auto md:mt-44 mt-36 rounded-lg relative ${formState.isLoading ? 'blur-sm pointer-events-none' : ''}`}>
                {/* Modile View Button */}
                <button className='absolute right-1 top-1 md:hidden block' onClick={() => dispatch(resetForm())}>
                    <AiFillCloseCircle size={40} color='gray' />
                </button>
                <div>
                    <div className='flex flex-col gap-y-2'>
                        <p className='text-blue-500 font-semibold text-2xl'>Apply Now</p>
                        <p className='text-black text-lg'>Next Batch Starts In December</p>
                    </div>
                    <form onSubmit={handleSubmit(sendOtp)} className='flex flex-col gap-y-6 mt-3'>
                        <div className='w-full flex flex-col gap-y-1'>
                            <input
                                {...register('fullName', {
                                    required: 'Full Name is Required'
                                })} 
                                className='rounded-md p-3 border-0 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2 placeholder:text-[#999999] text-black'
                                placeholder='Enter Full Name'
                                type='text'
                            />
                            {errors.fullName && (
                                <p className='text-[#FF516C] text-sm'>{errors.fullName.message}</p>
                            )}
                        </div>

                        <div className='w-full flex flex-col gap-y-1'>
                            <input
                                {...register('email', {
                                    required: 'Email is Required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Invalid Email Address',
                                    }
                                })} 
                                className='rounded-md p-3 border-0 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2 placeholder:text-[#999999] text-black'
                                placeholder='Enter Email'
                                type='text'
                            />
                            {errors.email && (
                                <p className='text-[#FF516C] text-sm'>{errors.email.message}</p>
                            )}
                        </div>
                        
                        <div className='w-full flex flex-col gap-y-1'>
                            <div className='w-full flex gap-x-4'>
                                <input
                                    className='w-[15%] md:w-[10%] rounded-md p-1 border-0 ring-2 ring-[#D5DEE5] placeholder:text-[#999999]'
                                    value='+91'
                                    disabled
                                />
                                <input
                                    {...register('phone', {
                                        required: 'Phone Number is Required',
                                        pattern: {
                                        value: /^[6-9]\d{9}$/,
                                        message: 'Invalid Phone Number Format',
                                        },
                                    })} 
                                    className='md:w-[90%] w-[85%] rounded-md p-3 border-0 ring-2 ring-[#D5DEE5] focus:ring-[#D5DEE5] focus:ring-2 placeholder:text-[#999999] text-black'
                                    placeholder='Enter Phone Number'
                                    type='text'
                                />
                            </div>
                            {errors.phone && (
                                <p className='text-[#FF516C] text-sm'>{errors.phone.message}</p>
                            )}
                        </div>

                        <button type='submit' className='btn btn-primary text-white'>Apply Now</button>
                    </form>
                </div>
            </div>) : (
                <div className={`bg-[#FFFFFF] md:w-[30%] w-[95%] h-auto p-3 md:p-8 mx-auto mt-48 md:mt-52 rounded-lg relative ${formState.isLoading ? 'blur-sm pointer-events-none' : ''}`}>
                    <button className='absolute right-0 top-0 md:hidden block'>
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
                        <Timer textColor='black' requestOtp={sendOtp} handleSubmit={handleSubmit} />
                        {formState.errorOtp && (
                            <p className='text-[#FF516C] text-sm'>{formState.errorOtp}</p>
                        )}
                        <div className='w-[70%] pb-5 md:pb-0'>
                            <button onClick={handleSubmit(verifyOtp)} className='btn btn-success w-full text-white mt-1'>Apply Now</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormModal;