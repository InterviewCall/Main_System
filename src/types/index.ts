import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

export interface IHeroStat {
    count: string
    title: string
}

export interface HeroStatProps {
    stats: IHeroStat[]
    stat: IHeroStat
    index: number
}

export type HeroOptionProps = {
    option: string
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

export type DownloadBrochureButtonProps = {
    buttonTitle: string
}

export interface AlumniCardType {
    cardImage: StaticImageData
    checkTitle: string
    videoPath: string
    alumniName: string
    alumniJobDesc: string
    alumniJobDescTextColor: string
    cardWrapperShadowColor: string
    cardWrapperBackgroundColor: string
    cardWrapperHeight?: string
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
}

export type MentorCardProps = Mentor;