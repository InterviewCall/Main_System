import Image from 'next/image';
import { FC } from 'react';
import ContactInformation from '~/images/Contact-Information.png';

const ContactUs: FC = () => {
    return (
        <div>
            <Image src={ContactInformation} alt='contact-info' />
        </div>
    );
};

export default ContactUs;