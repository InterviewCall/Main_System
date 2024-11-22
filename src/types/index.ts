import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

export interface IHeroStat {
    count: string
    title: {
        row1: string,
        row2: string
    }
}

export interface HeroStatProps {
    stats: IHeroStat[]
    stat: IHeroStat
    index: number
}

export type HeroOptionProps = {
    option: string
    index: number
}

export type HeroSectionInputWrapper = {
    children: ReactNode
}

export const HeroSectionFormSchema = z.object({
    firstName: z.string().min(1, 'First Name is Required'),
    lastName: z.string().min(1, 'Last Name is Required'),
    email: z.string().min(1, 'Email is Required').email('Invalid Email Address'),
    phoneNumber: z.string().min(1, 'Phone Number is Required').regex(/^\+?[\d\s()-]{7,15}$/, 'Invalid Phone Number Format')
});

export type HeroSectionFormData = z.infer<typeof HeroSectionFormSchema>;

export interface HeroSectionInputProps {
    name: 'firstName' | 'lastName' | 'email' | 'phoneNumber'
    type?: string,
    placeholder: string,
    register: UseFormRegister<HeroSectionFormData>
    error?: FieldError
}

export interface AlumniCardProps {
    index: number
    checkTitle: string
    cardImage: StaticImageData
    videoPath: string
    cardImageHeight?: number
    cardImageWidth?: number
    alumniName: string
    alumniJobDesc: string
    alumniJobDescTextColor: string
    cardWrapperShadowColor: string
    cardWrapperHeight?: string
    cardWrapperWidth?: string
    cardWrapperBackgroundColor: string
    cardWrapperRingColor: string
    cardShadowFromColor: string
    cardShadowViaColor: string
    videoPlayButtonBorderColor: string
    startVideo: (index: number) => void
}

export type DownloadBrochureButtonProps = {
    buttonTitle: string
}

export interface AlumniCard {
    checkTitle: string
    cardImage: StaticImageData
    videoPath: string
    cardImageHeight?: number
    cardImageWidth?: number
    alumniName: string
    alumniJobDesc: string
    alumniJobDescTextColor: string
    cardWrapperShadowColor: string
    cardWrapperHeight?: string
    cardWrapperWidth?: string
    cardWrapperBackgroundColor: string
    cardWrapperRingColor: string
    cardShadowFromColor: string
    cardShadowViaColor: string
    videoPlayButtonBorderColor: string
}

export interface Course {
    courseName: string
    courseDuration: string
    courseDescription: string
    courseKeyPoints: string[]
}

export type CourseCardProps = Course

export interface Mentor {
    cardWrapperTopPosition: string
    cardWrapperLeftPosition: string
    cardWrapperZIndex: string
    cardHeight: string
    cardWidth: string
    mentorImage: StaticImageData
    mentorAlt: string
    mentorName: string
    mentorExperience: string
    mentorLinkedinProfile: string
}

export type MentorCardProps = Mentor;

export interface LearnerCardProps {
    learnerImage: StaticImageData
    learnerCompany: string
    learnerRole: string
    learnerImageHeight?: string
    companyRingColor: string
    companyIcon: string
}

export type Learner = LearnerCardProps;

export interface EventCardProps {
    eventPersonName: string
    eventPersonImage: StaticImageData
    eventTitle: string
    eventType: string
    eventPrice: number
    cardWrapperMDWidth?: string
    cardWrapperMDHeight?: string
    eventPersonNameColor: string
}

export type Event = EventCardProps;

export interface FAQ {
    question: string
    answer: string
}

export interface FooterSectionArrayType {
    itemName: string
    itemArray: string[]
}

export interface MasterClassAlumni {
    alumniImage: StaticImageData
    alumniName: string
    alumniGradDate: string
    alumniPreScaler: string
    alumniPostScaler: StaticImageData
    alumniRole: string
}

export type MasterClassAlumniCardProps = MasterClassAlumni;

export enum Channel {
    SMS = 'SMS',
    WHATSAPP = 'WHATSAPP',
    MAIL = 'MAIL'
}
export interface RequestOtp {
    phoneNumber: string
    expiry: number
    otpLength: number
    channels: Channel[]
}

export interface ResponseOtp {
    requestId: string
    message: string
    errorCode: string
    description: string
}

export interface VerifyOtpRequest {
    requestId: string
    otp: string
}

export interface VerifyOtpResponse {
    requestId: string
    isOTPVerified: boolean
    message: string
    errorCode: string
    description: string
}

export type PageSwipe = 'mern' | 'job-switch' | 'masterclass';

export interface PlayVideoRef {
    handlePlaying: (playing: boolean) => void
}