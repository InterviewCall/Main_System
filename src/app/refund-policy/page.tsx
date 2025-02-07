import { FC } from 'react';

const RefundPolicy: FC = () => {
    return (
        <div className='text-black bg-white'>
            <div className='md:w-[77%] w-[83%] mx-auto'>
                <div className='text-[#8532c2] text-xl font-[500] md:pt-40 pt-20'>InterviewCall Refund and Placement Assistance Policy</div>

                <div className='font-[400] mt-6'>
                    <p className='font-bold text-xl'>
                        Refund Policy 
                    </p>

                    <br />
                    <br />

                    <p>
                        – Candidates may opt out from the trial within the first 14 days of the program and request a full refund of their down payment.
                    </p>
                </div>

                <div className='text-[#8532c2] text-xl font-[500] mt-12'>General Terms for Refund and Placement Policies</div>

                <div className='font-[400] mt-6'>
                    <p>
                        – Candidates must submit all refund requests in writing via the designated email [<span className='text-[#066bd2]'>refund@interviewcall.club</span>].
                    </p>

                    <br />
                    <br />

                    <p>
                        – Refunds will be processed only if eligibility criteria and timelines are strictly met.
                    </p>

                    <br />
                    <br />

                    <p>
                        – During the placement assistance period, the placement team will provide support services such as resume building, interview preparation, networking, etc.
                    </p>

                    <br />
                    <br />

                    <p>
                        – Once approved, refunds will be transferred within 45-60 business days.
                    </p>
                </div>

                <div className='font-[400] mt-16 pb-20'>
                    <p>
                        By using the website and registering on InterviewCall.club, you authorize InterviewCall to contact you via email, phone call, or SMS to provide services, share product information, and offer promotions, even if you are registered under DND/DNC/NCPR services. This authorization is valid for up to 365 days from your registration date. The policy outlines InterviewCall’s collection and handling of personally identifiable information (PII) obtained directly from you or shared by business partners. During registration, InterviewCall collects your first name, last name, contact number, email, date of birth, and gender, and may send SMS/email alerts regarding service updates, login details, and promotional messages.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;