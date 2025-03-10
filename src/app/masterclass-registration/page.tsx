'use client';

import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

// import { useAppSelector } from '@/lib/hooks';
import WpGroupQr from '~/images/wpgroupqr.png';

const MasterclassRegistration: FC = () => {
    // const link = useAppSelector((state) => state.masterclass.link);
    // const router = useRouter();

    // useEffect(() => {
    //     if(!link) {
    //         router.push('/masterclass');
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [link]);
    return (
        <div className='bg-white w-full h-full flex justify-center items-center pt-24 pb-16'>
            <div className='w-[95%] md:w-[85%] bg-[#F5F5F5] h-[90%] rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                <div className='w-full bg-[#EAFFEC] text-[#0D3661] xl:text-2xl text-xl font-bold flex justify-center items-center gap-4 p-3 rounded-t-xl'>
                    <IoIosCheckmarkCircleOutline size={40} className='md:block hidden' />
                    <p className='max-md:text-center'>YAY! You have been successfully registered for this event!</p>
                </div>

                <div className='w-full flex md:flex-row flex-col'>
                    <div className='xl:w-[60%] md:w-[55%] w-full h-full bg-white flex flex-col justify-center gap-4 xl:p-14 p-6 rounded-es-xl'>
                        <div className='flex xl:flex-row flex-col items-center xl:gap-3 gap-5'>
                            <div className='flex items-center gap-5'>
                                <BsWhatsapp className='text-green-500 md:order-1 order-2 text-5xl xl:text-4xl' />
                                <p className='text-[#212121] md:order-2 order-1 text-xl xl:text-2xl font-bold'>Join this event&apos;s WhatsApp Group</p>
                            </div>
                            <button onClick={() => window.open('https://chat.whatsapp.com/CyaGIPVVkLP6p6jeZ3EGQG', '_blank')} className='bg-[#1BD742] w-full text-white px-12 py-4 md:hidden block rounded-lg xl:text-xl text-[1rem] font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-95 duration-300'>Join WhatsApp Group</button>

                            <div className='flex items-center justify-center gap-x-3 w-full md:hidden'>
                                <div className='bg-[#D1D1D1] h-[1.5px] w-[28%]'></div>
                                <p className='text-[#696969] text-base'>Why to join ?</p>
                                <div className='bg-[#D1D1D1] h-[1.5px] w-[28%]'></div>
                            </div>
                        </div>

                        <div className='grid xl:grid-cols-2 grid-cols-1 gap-5'>
                            <div className='w-full py-6 px-4 border-2 border-[#C5C4C9] rounded-xl flex flex-col justify-center gap-4'>
                                <p className='text-xl text-[#0D3661] font-bold'>Free masterclass <br /> notes</p>
                                <p className='text-xl text-[#717171]'>Get important notes and learning material after the masterclass.</p>
                            </div>

                            <div className='w-full py-6 px-4 border-2 border-[#C5C4C9] rounded-xl flex flex-col justify-center gap-4'>
                                <p className='text-xl text-[#0D3661] font-bold'>Event <br /> Joining Link</p>
                                <p className='text-xl text-[#717171]'>Get a joining link before the session and stay updated with the event details.</p>
                            </div>

                            <div className='w-full py-6 px-4 border-2 border-[#C5C4C9] rounded-xl flex flex-col justify-center gap-4'>
                                <p className='text-xl text-[#0D3661] font-bold'>Certificate <br /> Link</p>
                                <p className='text-xl text-[#717171]'>Receive a link to sharable and certificate and show off your new skills.</p>
                            </div>

                            <div className='w-full py-6 px-4 border-2 border-[#C5C4C9] rounded-xl flex flex-col justify-center gap-4'>
                                <p className='text-xl text-[#0D3661] font-bold'>No Spams <br /> gurantee</p>
                                <p className='text-xl text-[#717171]'>Group is only for this event and will be used for bonus material and reminders.</p>
                            </div>
                        </div>
                    </div>
                    <div className='xl:w-[40%] md:w-[45%] md:block hidden'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='flex flex-col gap-6'>
                                <div className='flex justify-center'>
                                    <Image
                                        src={WpGroupQr}
                                        alt='Qr Code' 
                                        width={250}
                                        height={250}
                                    />
                                </div>

                                <div className='flex items-center justify-center gap-7'>
                                    <div className='bg-[#D1D1D1] h-[1.5px] w-[35%]'></div>
                                    <p className='text-[#696969] text-xl font-semibold'>or</p>
                                    <div className='bg-[#D1D1D1] h-[1.5px] w-[35%]'></div>
                                </div>

                                <p className='flex justify-center text-[#040A0A] font-semibold'>Click here to join</p>

                                <button onClick={() => window.open('https://chat.whatsapp.com/CyaGIPVVkLP6p6jeZ3EGQG', '_blank')} className='bg-[#1BD742] text-white px-12 py-4 rounded-lg text-xl font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-95 duration-300'>Join WhatsApp Group</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterclassRegistration;