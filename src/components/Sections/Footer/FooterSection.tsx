import Image from 'next/image';
import { FC } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import Buildings from '~/images/Buildings.png';

import FooterInput from './FooterInput';
import Link from 'next/link';

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
                                            <p className='text-xl font-extralight'>Privacy Policy</p>
                                            <p className='text-xl font-extralight'>Hire from us</p>
                                            <p className='text-xl font-extralight'>Job Portal</p>
                                        </div>
                                </div>
                            </div>

                            <div className='flex flex-col text-white gap-8'>
                                <p className='font-semibold text-2xl'>Product</p>
                                <div>
                                        <div className='flex flex-col'>
                                            <p className='text-xl font-extralight'>FSWD Program</p>
                                            <p className='text-xl font-extralight'>Job Switch</p>
                                            <p className='text-xl font-extralight'>Masterclass</p>
                                            <Link href='/terms-conditions' className='text-xl font-extralight transition-all duration-200 hover:font-bold'>Terms</Link>
                                            <Link href='/refund-policy' className='text-xl font-extralight transition-all duration-200 hover:font-bold'>Refund Policy</Link>
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

                                <FooterInput />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-2 flex flex-col gap-8 bg-gradient-to-b from-[#003BD1] to-[#0010A4] p-8 rounded-xl'>
                    <p className='font-bold text-3xl text-white'>Support</p>
                    <p className='text-white font-extralight'>
                        Have a questions?{' '}
                        <span className='font-bold underline italic'>Get in touch</span> or
                        check out our{' '}
                        <span className='font-bold underline italic'>Help Center</span>.{' '}
                    </p>
                    <p className='text-white font-extralight'>
                        You can also text our support team at{' '}
                        <span className='font-bold underline italic'>(+91) 6295797609</span> or
                        email us at{' '}
                        <span className='font-bold underline italic'>support@interviewcall.club</span>
                    </p>
                    <div className='flex gap-6 items-center mt-auto'>
                    <FaFacebookF className='text-white text-2xl' />
                    <FaYoutube className='text-white text-2xl' />
                    <FaTwitter className='text-white text-2xl' />
                    <FaLinkedin className='text-white text-2xl' />
                    <FaInstagram className='text-white text-2xl' />
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