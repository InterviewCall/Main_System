"use client";

import Image from "next/image";
import { FC, FormEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import AlumniCard from "@/components/Sections/MasterClass/AlumniCard";
import {
  handleEmail,
  handleFirstName,
  handlePhone,
} from "@/lib/features/webinars/webinarjamRequestSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RequestOtp, ResponseOtp, WebinarRequest, Channel, VerifyOtpResponse, WebinarResponse } from "@/types";
import {
    initiateOtp,
  isValidEmail,
  isValidMobileNumber,
  MasterClassAlumnis,
  MasterclassMentorQualification,
  MasterclassSessionLearn,
  otpVerification,
  registerWebinarJam,
} from "@/utils";
import MasterClassLearnerCard1 from "~/images/MasterClassLearnerCard1.png";
import MasterClassLearnerCard2 from "~/images/MasterClassLearnerCard2.png";
import MasterClassLearnerCard3 from "~/images/MasterClassLearnerCard3.png";
import MasterClassTop from "~/images/MasterclassTop.png";

import Loader from "../Sections/Hero/Loader";
import OTPInput from "react-otp-input";
import Timer from "../Sections/Hero/Timer";
import axios, { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const MasterClass: FC = () => {
  const webinarRequestState = useAppSelector((state) => state.webinarRequest);
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<WebinarRequest>({
    defaultValues: {
      first_name: "",
      email: "",
      phone: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [stepOtp, setStepOtp] = useState(false);
  const [errorOtp, setErrorOtp] = useState<string | undefined>("");
  const [otp, setOtp] = useState('');
  const [startTime, setStartTime] = useState(false);
  const [requestId, setRequestId] = useState('');
  const dispatch = useAppDispatch();


  async function requestOtp() {
    setStartTime(!startTime);
    if(stepOtp) setOtp('');

    try {
        const response: AxiosResponse<ResponseOtp, RequestOtp> = await axios.post(
          initiateOtp(),
          {
            phoneNumber: `91${getValues('phone')}`,
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
        toast.promise(Promise.resolve(response), {
            loading: 'Loading',
            success: 'OTP Generated',
            error: 'Something went wrong, try again'
        });
        await response;
        setRequestId(response.data.requestId);
        setStepOtp(true);
      } catch (error) {
        const otpError = error as AxiosError<ResponseOtp>;
        setErrorOtp(otpError.response?.data.description);
      }
  }

  async function verifyOtp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
        setStepOtp(false);

        const response = await fetch(registerWebinarJam(), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              api_key: process.env.NEXT_PUBLIC_API_KEY,
              first_name: getValues('first_name'),
              email: getValues('email'),
              phone: getValues('phone'),
              webinar_id: 1,
              schedule: 1,
            }),
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data: WebinarResponse = await response.json();
      
          toast.promise(
            Promise.resolve(data),
            {
              loading: 'Loading',
              success: 'Verified Successfully',
              error: 'Something went wrong, try again',
            }
          );
      
          console.log(data);

        // const response: AxiosResponse<WebinarResponse> = await axios.post(registerWebinarJam(), {
        //     api_key: process.env.NEXT_PUBLIC_API_KEY,
        //     first_name: getValues('first_name'),
        //     email: getValues('email'),
        //     phone: getValues('phone'),
        //     webinar_id: 1,
        //     schedule: 1
        // }, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        // toast.promise(Promise.resolve(response), {
        //     loading: 'Loading',
        //     success: 'Verified Successfully',
        //     error: 'Something went wrong, try again'
        // });
        // console.log(response.data);
    } catch (error) {
      setIsLoading(false);
      const otpError = error as AxiosError<VerifyOtpResponse>;
      setErrorOtp(otpError.response?.data.description);
    }
  }

  const sendOtp: SubmitHandler<WebinarRequest> = async () => {
    setStartTime(!startTime);
    if(stepOtp) setOtp('');

    try {
        const response: AxiosResponse<ResponseOtp, RequestOtp> = await axios.post(
          initiateOtp(),
          {
            phoneNumber: `91${getValues('phone')}`,
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
        toast.promise(Promise.resolve(response), {
            loading: 'Loading',
            success: 'OTP Generated',
            error: 'Something went wrong, try again'
        });
        setRequestId(response.data.requestId);
        setStepOtp(true);
      } catch (error) {
        const otpError = error as AxiosError<ResponseOtp>;
        setErrorOtp(otpError.response?.data.description);
      }
  };
  return (
    <div className="bg-white relative">
      {/* Top Image */}
      <div className="w-full">
        <Image src={MasterClassTop} alt="MasterClassTop" />
      </div>

      {/* Webinar Embed */}
      {/* <div
        className='md:fixed md:top-[18%] md:right-16 w-64 h-28 z-10 rounded-md wj-embed-wrapper'
        data-webinar-hash='962zwbw'
        ref={scriptContainerRef}
      ></div> */}

      <div>
        {stepOtp ? (
          <form
            onSubmit={verifyOtp}
            className="bg-white w-full md:w-[29vw] h-[38vh] flex flex-col items-center justify-between md:fixed md:top-[19%] md:right-16 p-8"
          >
            <div className="flex flex-col items-center justify-between gap-y-6 mt-6">
              <p className="text-lg text-black">
                Enter OTP sent to the mobile number{" "}
                <span className="block text-sm text-black text-center">
                  #{getValues('phone')}
                </span>
              </p>
              <OTPInput
                value={otp}
                numInputs={4}
                onChange={setOtp}
                renderSeparator={<span className="w-6"></span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: "50px",
                  height: "60px",
                  borderRadius: "8px",
                  fontSize: "1.5rem",
                  outline: "none",
                  border: "1px solid gray",
                }}
              />
              {errorOtp && <p className="text-red-400 text-lg">{errorOtp}</p>}
              {/* <Timer startTime={startTime} textColor="text-black" requestOtp={requestOtp} /> */}
              
            </div>
            <Timer startTime={startTime} textColor="text-black" requestOtp={requestOtp} />
            <button
              type="submit"
              className="w-full bg-red-400 p-4 rounded-lg text-white hover:scale-95 duration-300"
            >
              Register Now
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit(sendOtp)}
            className="bg-white w-full md:w-[29vw] h-auto flex flex-col gap-y-7 md:fixed md:top-[19%] md:right-16 p-8"
            noValidate
          >
            <div className="w-full flex flex-col gap-y-1">
              <p className="text-lg">
                First Name<span className="text-red-500">*</span>
              </p>
              <input
                {...register("first_name", {
                  required: "First Name is Required",
                })}
                className="w-full rounded-md border-0 p-3 shadow-[5px_5px_49px_9px_rgba(204,204,204,0.77)] focus:ring-2 focus:ring-black"
                placeholder="Enter First Name"
                type="text"
              />
              {errors.first_name && (
                <p className="text-red-400 text-sm">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-y-1">
              <p className="text-lg">
                Email<span className="text-red-500">*</span>
              </p>
              <input
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid Email Address",
                  },
                })}
                className="w-full rounded-md border-0 p-3 shadow-[5px_5px_49px_9px_rgba(204,204,204,0.77)] focus:ring-2 focus:ring-black"
                placeholder="Enter Email"
                type="email"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-y-1">
              <p className="text-lg">
                Phone No<span className="text-red-500">*</span>
              </p>
              <div className="flex">
                <div className="bg-gray-300 p-3 md:p-3 text-black text-lg rounded-l-md">
                  +91
                </div>
                <input
                  {...register("phone", {
                    required: "Phone Number is Required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Invalid Phone Number",
                    },
                  })}
                  className="w-full rounded-e-md focus:rounded-md border-0 p-3 shadow-[5px_5px_49px_9px_rgba(204,204,204,0.77)] focus:ring-2 focus:ring-black"
                  placeholder="Enter Phone Number"
                  type="text"
                />
              </div>
              {errors.phone && (
                <p className="text-red-400 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-red-400 p-4 rounded-lg text-white hover:scale-95 duration-300"
            >
              Register Now
            </button>
          </form>
        )}
      </div>

      {/* Main Content */}
      <div className="w-full md:w-[65%]  mt-14 px-4 lg:px-20">
        {/* Title */}
        <p className="text-2xl md:text-4xl font-bold text-center md:text-left">
          How E-commerce Platforms like Amazon Use Data Science
        </p>

        {/* Session Details */}
        <div className="flex flex-col md:flex-row mt-4 gap-3 md:gap-x-5">
          <p className="text-[#5a6273] flex gap-x-3">
            <span className="font-semibold">STARTS ON:</span>
            <span>November 19, 2024 7:30 PM (IST)</span>
          </p>
          <p className="text-[#5a6273] flex gap-x-3">
            <span className="font-semibold">ENDS ON:</span>
            <span>November 19, 2024 10:00 PM (IST)</span>
          </p>
          <p className="text-[#5a6273] flex gap-x-3">
            <span className="font-semibold">VENUE:</span>
            <span>Online</span>
          </p>
        </div>

        <div className="w-full h-[1px] bg-[#5a6273] mt-10"></div>

        {/* About Section */}
        <div className="bg-[#f3fafe] w-full mt-20 p-3">
          <p className="text-xl md:text-2xl text-[#085294] font-bold">
            About this Masterclass
          </p>
        </div>
        <div className="mt-3 text-[#5a6273] text-sm md:text-base">
          Did you know that Amazon generates over 35% of its sales through
          personalised product recommendations? And how do you think that
          happens? That’s the power of Data Science.
          <br />
          <br />
          The role of data in e-commerce is pivotal—enabling companies to
          predict customer demand, segment their audience, and secure platforms
          from fraud.
          <br />
          <br />
          This LIVE session will guide you through the cutting-edge applications
          used by Amazon&apos;s Data Scientists, covering the use of data to
          forecast trends, optimise operations, and ensure security.
          <br />
          <br />
        </div>

        {/* Learning Section */}
        <div className="bg-[#f3fafe] w-full mt-2 p-3">
          <p className="text-xl md:text-2xl text-[#085294] font-bold">
            What You Will Learn From This Session
          </p>
        </div>
        <ul className="list-disc mt-4 ml-6 md:ml-11 text-sm md:text-base">
          {MasterclassSessionLearn.map((item, index) => (
            <li key={index} className="text-[#5a6273]">
              {item}
            </li>
          ))}
        </ul>

        {/* Mentor Section */}
        <div className="bg-[#f3fafe] w-full mt-2 p-3">
          <p className="text-xl md:text-2xl text-[#085294] font-bold">
            Meet Pulkit Aneja
          </p>
        </div>
        <ul className="list-disc mt-4 ml-6 md:ml-11 text-sm md:text-base">
          {MasterclassMentorQualification.map((item, index) => (
            <li key={index} className="text-[#5a6273]">
              {item}
            </li>
          ))}
        </ul>

        {/* Learners Section */}
        <div className="bg-[#f3fafe] w-full mt-2 p-3">
          <p className="text-xl md:text-2xl text-[#085294] font-bold">
            What our Learners have to say
          </p>
        </div>
        <div className="flex md:flex-row flex-col  mt-7 gap-4 md:gap-3 justify-center items-center">
          <Image
            src={MasterClassLearnerCard1}
            alt="Learner 1"
            width={300}
            height={200}
          />
          <Image
            src={MasterClassLearnerCard2}
            alt="Learner 2"
            width={300}
            height={200}
          />
          <Image
            src={MasterClassLearnerCard3}
            alt="Learner 3"
            width={300}
            height={200}
          />
        </div>

        {/* Alumni Section */}
        <div className="bg-[#f3fafe] w-full mt-2 p-3">
          <p className="text-xl md:text-2xl text-[#085294] font-bold">
            Discover successful alumni
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-x-6 mt-8 items-center justify-center">
          {MasterClassAlumnis.map((alumni, index) => (
            <AlumniCard
              key={index}
              alumniImage={alumni.alumniImage}
              alumniName={alumni.alumniName}
              alumniGradDate={alumni.alumniGradDate}
              alumniPreScaler={alumni.alumniPreScaler}
              alumniPostScaler={alumni.alumniPostScaler}
              alumniRole={alumni.alumniRole}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasterClass;
