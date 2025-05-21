import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

// import { BsTwitterX } from 'react-icons/bs';
// import { FaFacebookF, FaInstagram, FaLinkedin, FaSpotify, FaYoutube } from 'react-icons/fa';
import { FooterIcons } from '@/utils';
import Buildings from '~/images/Buildings.png';

// import FooterInput from './FooterInput';

const FooterSection: FC = () => {
    return (
        <div className='bg-gradient-to-b from-[#0B0D41] to-[#1C22A7]'>
            <div className='md:grid md:grid-cols-7 flex flex-col gap-8 px-4 md:px-24 pt-24'>
                <div className='col-span-5 md:gap-24 gap-8 flex flex-col bg-gradient-to-b from-[#003BD1] to-[#0010A4] p-8 rounded-xl shadow-xl'>
                    <p className='font-bold md:text-3xl text-xl text-white'>
                        Don&apos;t leave just yet,
                        <br /> explore these resources!
                    </p>

                    <div className='md:grid md:grid-cols-4 flex flex-col gap-y-9'>
                            <div className='flex flex-col text-white gap-8'>
                                <p className='font-semibold text-2xl'>Company</p>
                                <div>
                                        <div className='flex flex-col'>
                                            <Link href='/contact-us' className='text-xl font-extralight transition-all duration-200 hover:font-bold'>Contact Us</Link>
                                            <Link href='/privacy-policy' className='text-xl font-extralight transition-all duration-200 hover:font-bold'>Privacy Policy</Link>
                                            {/* <p className='text-xl font-extralight'>Hire from us</p> */}
                                            {/* <p className='text-xl font-extralight'>Job Portal</p> */}
                                        </div>
                                </div>
                            </div>

                            <div className='flex flex-col text-white gap-8'>
                                <p className='font-semibold text-2xl'>Product</p>
                                <div>
                                        <div className='flex flex-col'>
                                            <Link href='/terms-conditions' className='text-xl font-extralight transition-all duration-200 hover:font-bold'>Terms</Link>
                                            <Link href='/refund-policy' className='text-xl font-extralight transition-all duration-200 hover:font-bold'>Refund Policy</Link>
                                            <Link href='/program' className='text-xl font-extralight transition-all duration-200 hover:font-bold'>Payments</Link>
                                        </div>
                                </div>
                            </div>

                        <div className='col-span-2 flex flex-col gap-8 text-white'>
                            <p className='font-semibold text-2xl'>Subscribe to our newsletter</p>
                            <div className='flex flex-col gap-4'>
                                <p className='text-xl font-light'>
                                    Be the first to receive exciting news,
                                    <br /> insider tips, and special promotions.
                                </p>

                                {/* <FooterInput /> */}
                                <span>Copyright&copy;IVYLEAGUE CSFORALL ACADEMY PRIVATE LIMITED. All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-2 flex flex-col gap-8 bg-gradient-to-b from-[#003BD1] to-[#0010A4] p-8 rounded-xl'>
                    <p className='font-bold text-3xl text-white'>Support</p>
                    <p className='text-white font-extralight'>
                        Have a questions?{' '} <br />
                        <span>Get in touch</span> or
                        check out our{' '}
                        <Link href='/contact-us' className='font-bold underline italic cursor-pointer hover:text-[1.13rem] duration-300'>Help Center</Link>.{' '}
                    </p>
                    <p className='text-white font-extralight'>
                        You can also text our support team at{' '}
                        <span className='font-bold italic'>6295797609</span> <br /> <br />
                        email us at{' '}
                        <span className='font-bold italic'>support@interviewcall.club</span>
                    </p>
                    <div className='flex gap-6 items-center justify-center mt-auto'>
                        {FooterIcons.map((IconComponent, index) => (
                            <Link 
                                href={IconComponent.iconLink} 
                                key={index} 
                                className='text-white text-2xl cursor-pointer hover:scale-150 duration-300'
                            >
                                <IconComponent.iconName />
                            </Link>
                        ))}
                    </div>
                </div>
        </div>
        <Image
            src={Buildings}
            alt='Buildings'
            loading='lazy'
            className='w-full'
        />
    </div>
    );
};

export default FooterSection;