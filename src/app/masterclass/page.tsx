'use client';

import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';

import AlumniCard from '@/components/Sections/MasterClass/AlumniCard';
import { MasterClassAlumnis, MasterclassDataScienceAbout ,MasterclassMentorQualification, MasterclassSessionLearn } from '@/utils';
import MasterClassLearnerCard1 from '~/images/MasterClassLearnerCard1.png';
import MasterClassLearnerCard2 from '~/images/MasterClassLearnerCard2.png';
import MasterClassLearnerCard3 from '~/images/MasterClassLearnerCard3.png';
import MasterClassLearnerDown from '~/images/MasterClassLearnerDown.png';
import MasterClassTop from '~/images/MasterclassTop.png';

const MasterClassPage: FC = () => {
    const scriptContainerRef = useRef<HTMLDivElement | null>(null);
    // const [key, setKey] = useState(0);

    const injectScript = () => {
        if (scriptContainerRef.current) {
            // Clear any existing script content
            scriptContainerRef.current.innerHTML = '';

            // Create and inject the script
            const script = document.createElement('script');
            script.src =
                'https://event.webinarjam.com/register/31ywotn/embed-form?formButtonText=Register&formAccentColor=%2329b6f6&formAccentOpacity=0.95&formBgColor=%23ffffff&formBgOpacity=1';
            script.async = true;
            script.onload = () => {
                console.log('Webinar script loaded successfully');
            };

            script.onerror = () => {
                console.error('Failed to load webinar script');
            };
            scriptContainerRef.current.appendChild(script);
        }
    };

    useEffect(() => {
        console.log('enter the useEffect');
        injectScript();

        // Cleanup script on unmount
        // return () => {
        //     if (scriptContainerRef.current) {
        //         scriptContainerRef.current.innerHTML = '';
        //     }
        // };
    }, []);

    useEffect(() => {
        const preventBackNavigation = () => {
          // Push the current state back to the history stack
          window.history.pushState(null, '', window.location.href);
        };
    
        // Push initial state to the history
        window.history.pushState(null, '', window.location.href);
    
        // Continuously prevent navigation by overriding the popstate
        window.addEventListener('popstate', preventBackNavigation);
    
        return () => {
          // Clean up the event listener on unmount
          window.removeEventListener('popstate', preventBackNavigation);
        };
      }, []);
    
    

    // useEffect(() => {
    //     const handleRouteChange = () => {
    //         setKey((prevKey) => prevKey + 1); // Increment key to reinitialize
    //     };

    //     // Listen for route changes
    //     window.addEventListener('popstate', handleRouteChange);

    //     return () => {
    //         window.removeEventListener('popstate', handleRouteChange);
    //     };
    // }, []);
    return (
        <div className='bg-white relative'>
            <Image src={MasterClassTop} alt='MasterClassTop' />
            
            <div className='z-10 w-[450px] h-28 fixed top-44 right-16 rounded-md wj-embed-wrapper'
            data-webinar-hash="31ywotn"
            ref={scriptContainerRef}
            >
                
            </div>

            <div className='w-[65vw] ml-44 mt-14 '>
                <p className='text-4xl font-bold'>
                    How E-commerce Platforms like Amazon Use Data Science
                </p>

                <div className='flex mt-4 gap-x-5'>
                    <p className='text-[#5a6273] flex gap-x-3'>
                        <span className='font-semibold'>STARTS ON:</span>
                        <span>November 19, 2024 7:30 PM (IST)</span>
                    </p>

                    <p className='text-[#5a6273] flex gap-x-3'>
                        <span className='font-semibold'>ENDS ON:</span>
                        <span>November 19, 2024 10:00 PM (IST)</span>
                    </p>

                    <p className='text-[#5a6273] flex gap-x-3'>
                        <span className='font-semibold'>VENUE:</span>
                        <span>Online</span>
                    </p>
                </div>

                <div className='w-full h-[1px] bg-[#5a6273] mt-10'></div>

                <div className='bg-[#f3fafe] w-full mt-20 p-3'>
                    <p className='text-2xl text-[#085294] font-bold'>About this Masterclass</p>
                </div>

                <div className='mt-3 text-[#5a6273] text-[1rem]'>
                    Did you know that Amazon generates over 35% of its sales through personalised product recommendations? And how do you think that happens? That’s the power of Data Science.
                    <br />
                    <br />

                    The role of data in e-commerce is pivotal—enabling companies to predict customer demand, segment their audience, and secure platforms from fraud.
                    <br />
                    <br />

                    This LIVE session will guide you through the cutting-edge applications used by Amazon&apos;s Data Scientists, covering the use of data to forecast trends, optimise operations, and ensure security.
                    <br />
                    <br />

                    Register for this Scaler Masterclass with <strong>Ex-Data Scientist-II</strong>, <strong>Pulkit Aneja</strong> on <strong>19th November</strong>, <strong>Tuesday</strong> at <strong>7:30 PM</strong> to unlock the potential of data-driven innovation and take your career to the next level!
                    <br />
                    <br />
                    
                    Don&apos;t miss this chance to elevate your career in the evolving world of e-commerce!
                </div>

                <div className='bg-[#f3fafe] w-full mt-2 p-3'>
                    <p className='text-2xl text-[#085294] font-bold'>What You Will Learn From This Session</p>
                </div>

                <ul className='list-disc mt-4 ml-11'>
                    {MasterclassSessionLearn.map((item, index) => (
                        <li key={index} className='text-[#5a6273] text-[1rem]'>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className='bg-[#f3fafe] w-full mt-2 p-3'>
                    <p className='text-2xl text-[#085294] font-bold'>Meet Pulkit Aneja</p>
                </div>

                <ul className='list-disc mt-4 ml-11'>
                    {MasterclassMentorQualification.map((item, index) => (
                        <li key={index} className='text-[#5a6273] text-[1rem]'>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className='bg-[#f3fafe] w-full mt-2 p-3'>
                    <p className='text-2xl text-[#085294] font-bold'>What our Learners have to say</p>
                </div>

                <div className='flex mt-7'>
                    <Image src={MasterClassLearnerCard1} alt='' width={340} />
                    <Image src={MasterClassLearnerCard2} alt='' width={340} />
                    <Image src={MasterClassLearnerCard3} alt='' width={340} />
                </div>

                <div className='mt-8'>
                    <Image src={MasterClassLearnerDown} alt='' />
                </div>

                <div className='bg-[#f3fafe] w-full mt-2 p-3'>
                    <p className='text-2xl text-[#085294] font-bold'>About Scaler Data Science</p>
                </div>

                <div className='mt-3 text-[#5a6273] text-[1rem]'>
                    Many professionals (like us!) enter the field of Data Science by working on toy data sets and have no real-world knowledge of using real data. We are exposed to ‘old’ teaching methods and are taught to ‘cram’ content. When they start working in the industry, they fail to catch up on the skills that the industry needs because they never learnt the real-world application of using messy data and thus, end up lagging behind their peers. This leads to a loss of confidence and stops them from accelerating in their career. This is where Scaler Data Science solves the problems!
                    <br />
                    <br />

                    Scaler Data Science is a tailor-made program to master the foundations of Data Science and Machine Learning and to take your career to the next level, via: 
                </div>

                <ul className='list-disc mt-4 ml-11'>
                    {MasterclassDataScienceAbout.map((item, index) => (
                        <li key={index} className='text-[#5a6273] text-[1rem]'>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className='text-black font-bold text-3xl mt-20'>
                    Discover successful alumni who had the same profile as you before joining Scaler
                </div>

                <div className='flex gap-x-10 bg-white mb-20'>
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

export default MasterClassPage;