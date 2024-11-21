import Image from 'next/image';
import { FC } from 'react';

import { Events } from '@/utils';
import EventsHeading from '~/images/EventsHeading.png';

import EventCard from './EventCard';

const EventSection: FC = () => {
    return (
        <div className='bg-black px-4 md:px-24 py-4 md:py-24 flex flex-col md:space-y-24 space-y-12'>
            <Image src={EventsHeading} alt='' width={1850} height={122} className='md:block hidden' />
            <p className='md:hidden block text-2xl font-bold bg-clip-text text-transparent bg-text-gradient'>
                Explore InterviewCall Events
            </p>

            <div className='flex md:flex-row flex-col relative w-full md:gap-0 gap-12 items-center justify-evenly'>
                {Events.map((event, index) => (
                    <EventCard
                        key={index}
                        eventPersonName={event.eventPersonName}
                        eventTitle={event.eventTitle}
                        eventPersonImage={event.eventPersonImage}
                        eventPrice={event.eventPrice}
                        eventType={event.eventType}
                        eventPersonNameColor={event.eventPersonNameColor}
                        cardWrapperMDHeight={event.cardWrapperMDHeight}
                        cardWrapperMDWidth={event.cardWrapperMDWidth} 
                    />
                ))}
            </div>
        </div>
    );
};

export default EventSection;