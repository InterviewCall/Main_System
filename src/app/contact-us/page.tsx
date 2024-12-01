import Image from 'next/image';
import { FC } from 'react';

import ContactInformation from '~/images/Contact-Information.png';
import ContactInformationMobile from '~/images/ContactInformationMobile.png';

const ContactUs: FC = () => {
    return (
        <div>
            <Image src={ContactInformationMobile} alt='ContactInformation' className='md:hidden mt-10 block' />
            <Image src={ContactInformation} alt='contact-info' className='md:block mt-10 hidden' />
        </div>
    );
};

export default ContactUs;