'use client';

import { FC } from 'react';

import { setCallbackModal } from '@/lib/features/callback/callback';
import { useAppDispatch } from '@/lib/hooks';

const HeaderButton: FC = () => {
    const dispatch = useAppDispatch();

      // useEffect(() => {
      //   setTimeout(() => {
      //       dispatch(setCallbackModal(true));
      //   }, 30000);
      // }, []);
    return (
      <>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button onClick={() => dispatch(setCallbackModal(true))}>
          <div className='p-[3px] bg-gradient-to-b from-[#00FFE0] to-[#0B2463] rounded-full shadow-custom-multi'>
            <p className='text-white md:py-2 md:px-6 px-4 py-[10px] md:text-base text-xs whitespace-nowrap rounded-full bg-black'>
              Request Callback
            </p>
          </div>
        </button>
        {/* <div id='my_modal_1' className='w-[50%]'>
          <div className='bg-white flex xl:flex-row flex-col xl:w-full w-[90%] p-6 gap-8 rounded-md relative'>
            <button className='absolute right-0 top-0'>
              <MdCancel size={30} />
            </button>
            <div className='xl:w-1/2 w-full flex max-xl:justify-center'>
              <Image
                src='https://app.convertful.com/uploads/user/82770/Group%2039533-4.png?1740149387500?900x1075'
                alt='advisor'
                width={400}
                height={400} 
              />
            </div>
            <div className='flex flex-col justify-center xl:w-1/2 w-full gap-6'>
              <p className='text-black xl:text-4xl text-xl font-bold'>Talk to our Advisor!</p>
              <p className='text-black'>Your Topic of Interest *</p>
              <form className='flex flex-col gap-3 w-full'>

                <div className='flex flex-col -translate-y-5 gap-3 w-full'>
                  <select defaultValue='' {...register('selectExperience')} className={clsx(errors && errors.selectExperience && 'border-red-500', 'focus:ring-0 focus:outline-none w-full text-neutral-400')}>
                    <option className='text-neutral-400' value='' disabled>Select Experience Level</option>
                    <option className='text-black' value="Fullstack Web Development Program">Fresher</option>
                    <option className='text-black' value="Job Switch Program">Experienced</option>
                  </select>

                  <select defaultValue='' {...register('selectPrograms')} className={clsx(errors && errors.selectPrograms && 'border-red-500', 'focus:ring-0 focus:outline-none w-full text-neutral-400')}>
                    <option className='text-neutral-400' value='' disabled>Select Program</option>
                    <option className='text-black' value="Fullstack Web Development Program">Fullstack Web Development Program</option>
                    <option className='text-black' value="Job Switch Program">Job Switch Program</option>
                  </select>

                  <input 
                    type='text'
                    placeholder='Enter Full Name'
                    className={clsx(errors && errors.fullName && 'border-red-500', 'w-full placeholder:text-neutral-400')}
                    {...register('fullName')}
                  />

                  <input 
                    type='text'
                    placeholder='Enter Email'
                    className={clsx(errors && errors.email && 'border-red-500', 'w-full placeholder:text-neutral-400')}
                    {...register('email')}
                  />

                  <input 
                    type='text'
                    placeholder='Enter Phone'
                    className={clsx(errors && errors.mobileNumber && 'border-red-500', 'w-full placeholder:text-neutral-400')}
                    {...register('mobileNumber')}
                  />
                </div>   

                <button className='bg-[#b30158] w-full text-white text-sm uppercase py-2 rounded-md hover:scale-95 duration-300'>Continue</button>
              </form>
            </div>
          </div>
        </div> */}
      </>
    );
};

export default HeaderButton;