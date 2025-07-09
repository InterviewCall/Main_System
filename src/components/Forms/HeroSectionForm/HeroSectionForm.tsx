// 'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
// import axios, { AxiosError, AxiosResponse } from 'axios';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { FC, useState } from 'react';
// import { Controller, SubmitHandler, useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';

// import Loader from '@/components/Sections/Hero/Loader';
// import SelectAnswer from '@/components/Select/Select';
// import { Input } from '@/components/ui/input';
// import { fromDropDowns } from '@/constant/formDropdownOptions';
// import useUTMTracker from '@/hooks/useUTMTracker';
// import {
//   ApplyResponse,
//   CandidateDetails,
//   ErrorResponse,
//   HeroSectionFormData,
//   HeroSectionFormSchema,
// } from '@/types';
// import checkPositiveLead from '@/utils/checkPositiveLead';
// import Rocket from '~/images/Rocket.png';

// const HeroSectionForm: FC = () => {
//   useUTMTracker();
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     control,
//     formState: { errors }
//   } = useForm<HeroSectionFormData>({
//     defaultValues: {
//       phoneNumber: '',
//       fullName: '',
//       email: '',
//       currentCTC: '',
//       yearsOfExperience: '',
//       domainOfInterest: ''
//     },
//     resolver: zodResolver(HeroSectionFormSchema)
//   });

//   const onSubmit: SubmitHandler<HeroSectionFormData> = async (data: HeroSectionFormData) => {
//     try {
//       let routerPath: string;
//       setIsLoading(true);
//       const storedUtmData = sessionStorage.getItem('utmData') ?? '{}';
//       let response: AxiosResponse<ApplyResponse>;
//       const requestBody: CandidateDetails = {
//         candidateName: data.fullName,
//         candidateEmail: data.email,
//         candidatePhone: data.phoneNumber,
//         lookingForSwitch: data.lookingForSwitch,
//         willingForUpskill: data.willingForUpskill,
//         yearsOfExperience: data.yearsOfExperience,
//         currentCTC: data.currentCTC,
//         domainOfInterest: data.domainOfInterest,
//         utmData: JSON.parse(storedUtmData)
//       };

//       if(checkPositiveLead(data)) {
//         response = await axios.post('/api/apply/positive', requestBody);
//         routerPath = '/application-success';
//       } else {
//         response = await axios.post('/api/apply/negative', requestBody);
//         routerPath = '/submission-received';
//       }

//       if(response.data.data == null) {
//         toast.success('Already applied');
//       } else {
//         toast.success('Successfully submitted your details');
//       }

//       sessionStorage.setItem('isSubmitted', 'true');
//       router.push(routerPath);
//     } catch (error) {
//       const err = error as AxiosError<ErrorResponse>;
//       const message = err.response?.data.message || 'Something went wrong!';
//       toast.error(message);
//     } finally {
//       setIsLoading(false);
//       reset();
//     }
//   };

//   // const verifyOtp: SubmitHandler<HeroSectionFormData> = async () => {
//   //   if(otp) setIsLoading(true);

//   //   try {
//   //       await axios.post(
//   //         otpVerification(),
//   //         { requestId: requestId, otp: otp },
//   //         {
//   //           headers: {
//   //             clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//   //             clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
//   //             'Content-Type': 'application/json',
//   //           },
//   //         }
//   //       );
//   //       toast.success('Verified Successfully');
//   //       setStepOtp(false);
//   //       setIsLoading(false);
//   //       reset();
//   //       router.push(page);
//   //   } catch (error) {
//   //     setIsLoading(false);
//   //     const otpError = error as AxiosError<VerifyOtpResponse>;
//   //     setErrorOtp(otpError.response?.data.description);
//   //   }
//   // };

//   // async function sendOtp() {
//   //   if(getValues('phoneNumber')) {
//   //     if(!isValidMobileNumber(getValues('phoneNumber'))) {
//   //       setErrorNumber('Request Error : Incorrect Mobile Number');
//   //       return;
//   //     }

//   //     setIsLoading(true);
//   //     setStartTime(!startTime);
//   //   }
//   //   if (stepOtp) {
//   //     setOtp('');
//   //   }

//   //   try {
//   //     const response: AxiosResponse<ResponseOtp, RequestOtp> = await axios.post(
//   //       initiateOtp(),
//   //       {
//   //         phoneNumber: `91${getValues('phoneNumber')}`,
//   //         expiry: 60,
//   //         otpLength: 4,
//   //         channels: [Channel.SMS],
//   //       },
//   //       {
//   //         headers: {
//   //           clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//   //           clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
//   //           'Content-Type': 'application/json'
//   //         },
//   //       }
//   //     );
//   //     setIsLoading(false);
//   //     setStepOtp(true);
//   //     setRequestId(response.data.requestId);
//   //     localStorage.setItem('requestId', response.data.requestId);
//   //   } catch (error) {
//   //     const otpError = error as AxiosError<ResponseOtp>;
//   //     setErrorOtp(otpError.response?.data.description);
//   //   }
//   // }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md mx-auto md:max-w-lg bg-gradient-to-tr from-[#00FFE0] to-[#000] p-[3px] rounded-2xl relative'>
//       {isLoading && <Loader />}
//       <div
//         className={`bg-gradient-to-tr from-[#000] to-[#020304] py-6 px-4 md:py-7 md:px-10 rounded-xl flex flex-col gap-6 ${
//           isLoading ? 'blur-[3px]' : ''
//         }`}
//       >
//         <p className='text-xl md:text-3xl text-white font-semibold text-center'>
//           Book a <span className='text-teal'>Free</span> Live Demo Class
//         </p>

//         <div className='flex gap-x-2 w-full'>
//           <div className='flex flex-col w-[50%]'>
//             <Input
//               {...register('fullName')}
//               placeholder='Full Name' 
//               className='text-black placeholder:text-sm outline-none rounded-r-md p-5 rounded-xl bg-white'
//             />

//             {errors && errors.fullName && (
//               <p className='text-xs text-red-500'>{errors.fullName.message}</p>
//             )}
//           </div>

//           <div className='flex flex-col w-[50%]'>
//             <div className='flex items-center w-full'>
//               {/* <div className='text-black placeholder:text-sm text-base rounded-lg max-md:pr-4 max-md:py-2 p-2 bg-slate-200'>
//                 +91
//               </div> */}
//               <Input
//                 {...register('phoneNumber')}
//                 placeholder='Phone Number'
//                 className='text-black placeholder:text-sm outline-none rounded-r-md w-full p-5 rounded-xl bg-white'
//               />
//             </div>

//             {errors && errors.phoneNumber && (
//               <p className='text-xs text-red-500'>{errors.phoneNumber.message}</p>
//             )}
//           </div>
//         </div>

//         <div className='flex flex-col'>
//           <Input
//             {...register('email')}
//             placeholder='Email Address' 
//             className='text-black placeholder:text-sm outline-none rounded-xl p-5 bg-white'
//           />

//           {errors && errors.email && (
//             <p className='text-xs text-red-500'>{errors.email.message}</p>
//           )}
//         </div>

//         <div className='flex gap-x-2 w-full'>
//           {fromDropDowns.slice(0, 2).map((dropDown) => (
//             <div key={dropDown.label} className='w-[50%]'>
//               <label className='text-white text-sm max-md:text-xs'>{dropDown.question}</label>
//               <Controller 
//                 name={dropDown.label as keyof typeof HeroSectionFormSchema.shape}
//                 control={control}
//                 render={({ field }) => (
//                   <SelectAnswer 
//                     options={dropDown.options} 
//                     value={field.value ?? ''}
//                     onChange={field.onChange}
//                   />
//                 )}
//               />

//               {errors && errors[dropDown.label as keyof typeof HeroSectionFormSchema.shape] && (
//                 <p className='text-xs text-red-500'>
//                   {errors[dropDown.label as keyof typeof HeroSectionFormSchema.shape]?.message}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className='flex gap-x-2 w-full'>
//           {fromDropDowns.slice(2, 4).map((dropDown) => (
//             <div key={dropDown.label} className='w-[50%]'>
//               <label className='text-white text-sm max-md:text-xs'>{dropDown.question}</label>
//               <Controller 
//                 name={dropDown.label as keyof typeof HeroSectionFormSchema.shape}
//                 control={control}
//                 render={({ field }) => (
//                   <SelectAnswer 
//                     options={dropDown.options} 
//                     value={field.value ?? ''}
//                     onChange={field.onChange}
//                   />
//                 )}
//               />

//               {errors && errors[dropDown.label as keyof typeof HeroSectionFormSchema.shape] && (
//                 <p className='text-xs text-red-500'>
//                   {errors[dropDown.label as keyof typeof HeroSectionFormSchema.shape]?.message}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className='flex gap-x-2 w-full'>
//           {fromDropDowns.slice(4, 5).map((dropDown) => (
//             <div key={dropDown.label} className='w-full'>
//               <label className='text-white text-sm max-md:text-xs'>{dropDown.question}</label>
//               <Controller 
//                 name={dropDown.label as keyof typeof HeroSectionFormSchema.shape}
//                 control={control}
//                 render={({ field }) => (
//                   <SelectAnswer 
//                     options={dropDown.options} 
//                     value={field.value ?? ''}
//                     onChange={field.onChange}
//                   />
//                 )}
//               />

//               {errors && errors[dropDown.label as keyof typeof HeroSectionFormSchema.shape] && (
//                 <p className='text-xs text-red-500'>
//                   {errors[dropDown.label as keyof typeof HeroSectionFormSchema.shape]?.message}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>

//         <button
//           type='submit'
//           className='bg-violet rounded-md p-3 text-white text-[1rem] font-semibold flex items-center justify-center gap-3 hover:scale-95 transition-transform'
//         >
//           BOOK FREE LIVE CLASS
//           <Image src={Rocket} alt='Rocket' className=' w-10 h-10 object-contain' />
//         </button>
        
//         {/* <div className='flex flex-col gap-8'>
//           <div>
//             {!stepOtp ? (
//               <>
//                 <div className='flex items-center bg-white rounded-md'>
//                   <div className='bg-gray-300 p-3 md:p-4 text-black text-lg rounded-l-md'>
//                     +91
//                   </div>
//                   <input
//                     {...register('phoneNumber', {
//                       required: 'Phone Number is Required',
//                       pattern: {
//                         value: /^[6-9]\d{9}$/,
//                         message: 'Invalid Phone Number Format',
//                       },
//                     })}
//                     placeholder='Enter Phone Number'
//                     className='w-full p-3 md:p-4 text-black outline-none rounded-r-md'
//                   />
//                 </div>
//                 {errorNumber && (
//                   <p className='text-red-400 text-lg mt-2'>
//                     {errorNumber}
//                   </p>
//                 )}

//                 {errorOtp && <p className='text-red-400 text-lg'>{errorOtp}</p>}
//               </>
//             ) : (
//               <div className='flex flex-col items-center justify-center gap-6'>
//                 <p className='text-lg text-white'>
//                   Enter OTP sent to the mobile number{' '}
//                   <span className='block text-sm text-center'>
//                     #{getValues('phoneNumber')}
//                   </span>
//                 </p>
//                 <OTPInput
//                   value={otp}
//                   numInputs={4}
//                   onChange={setOtp}
//                   renderSeparator={<span className='w-6'></span>}
//                   renderInput={(props) => <input {...props} />}
//                   inputStyle={{
//                     width: '50px',
//                     height: '60px',
//                     borderRadius: '8px',
//                     fontSize: '1.5rem',
//                     outline: 'none',
//                     border: '1px solid gray',
//                   }}
//                 />
//                 {errorOtp && <p className='text-red-400 text-lg'>{errorOtp}</p>}
//                 <Timer textColor='text-white' startTime={startTime} requestOtp={sendOtp} />
//               </div>
//             )}
//           </div>
//           <button
//             onClick={stepOtp ? handleSubmit(verifyOtp) : sendOtp}
//             className='bg-violet rounded-md p-3 text-white text-[1rem] font-semibold flex items-center justify-center gap-3 hover:scale-95 transition-transform'
//           >
//             BOOK FREE LIVE CLASS
//             <Image src={Rocket} alt='Rocket' className=' w-10 h-10 object-contain' />
//           </button>
//         </div> */}
//         <div className='text-xs text-white hidden md:flex items-center justify-center mt-2 md:gap-x-1 gap-0'>
//           <p>By continuing, you agree to{' '}</p>
//           <Link href='/terms-conditions' className='group'>
//             <div className='text-teal cursor-pointer'>
//               InterviewCall&apos;s Terms
//             </div>
//             <div className='w-full h-[1.5px] bg-teal scale-0 group-hover:scale-100 duration-300 origin-left'></div>
//           </Link>
//           and
//           <Link href='/privacy-policy' className='group'>
//             <div className='text-teal cursor-pointer'>Privacy Policy</div>
//             <div className='w-full h-[1.5px] bg-teal scale-0 group-hover:scale-100 duration-300 origin-left'></div>
//           </Link>
//         </div>

//         {/* For Mobile View */}
//         <p className='text-xs md:hidden block text-white text-center'>
//           By continuing, you agree to{' '} <br />
//           <span onClick={() => router.push('/terms-conditions')} className='text-teal cursor-pointer'>
//             InterviewCall&apos;s Terms
//           </span>{' '}
//           and{' '}
//           <span onClick={() => router.push('/privacy-policy')} className='text-teal cursor-pointer'>Privacy Policy</span>
//         </p>
//       </div>
//     </form>
//   );
// };

// export default HeroSectionForm;
