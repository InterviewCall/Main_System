'use client';

// import axios from 'axios';
import { FC, useState } from 'react';
// import toast from 'react-hot-toast';

// import { verifyEmailFormat } from '@/utils';

const FooterInput: FC = () => {
  const [email, setEmail] = useState('');

  // async function handleSubmit() {
  //   if (!verifyEmailFormat(email)) {
  //     toast.error('Please enter a valid email!');
  //     return;
  //   }

  //   try {
  //     const response = axios.post(
  //       '/api/register',
  //       {
  //         to: 'itskingshukdeb@gmail.com',
  //         subject: 'Someone wants to join the newsletter',
  //         text: `
  //                 <div
  //                   style='padding: 24px;'
  //                 >
  //                   <h3>Hi Sunyul,</h3>
  //                   <p>A user has shown interest in your newsletter. Here are the details:</p>
  //                   <table>
  //                     <tr>
  //                       <td>
  //                         Email:
  //                         <b>
  //                           <a href='mailto:${email}'>${email}</a>
  //                         </b>
  //                       </td>
  //                     </tr>
  //                   </table>
  //                 </div>
  //               `,
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  //     toast.promise(response, {
  //       loading: 'Subscribing',
  //       success: 'SuccessFully subscribed',
  //       error: 'An error occurred while sending the email',
  //     });
  //     await response;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  return (
    <div className='rounded-full w-full bg-white items-center flex justify-between py-1 px-2 cursor-no-drop'>
      <input
        disabled
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='ml-4 min-w-[100px] text-black outline-none w-min border-none focus:ring-0 focus:outline-none focus:border-none cursor-no-drop'
      />

      <button
        disabled
        className='py-2 px-4 bg-[#000D86] rounded-full disabled:opacity-50 cursor-no-drop'
      >
        Subscribe
      </button>
    </div>
  );
};

export default FooterInput;
