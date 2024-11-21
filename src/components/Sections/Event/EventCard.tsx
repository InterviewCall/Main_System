import Image from 'next/image';
import { FC } from 'react';
import { MdArrowOutward } from 'react-icons/md';

import { EventCardProps } from '@/types';

const EventCard: FC<EventCardProps> = ({
  eventPersonName,
  eventPersonImage,
  eventTitle,
  eventType,
  eventPrice,
  cardWrapperMDHeight = 'md:h-[400px]',
  cardWrapperMDWidth = 'md:w-[340px]',
  eventPersonNameColor,
}) => {
  return (
    <div
      className={`${cardWrapperMDWidth} ${cardWrapperMDHeight} w-full h-[450px] flex flex-col justify-evenly z-40 rounded-xl p-8 relative overflow-clip bg-[#232323] border border-[#4F4F4F]`}
    >
      <div className="flex flex-col gap-4 self-start">
        <p className={`${eventPersonNameColor} font-semibold`}>
          {eventPersonName}
        </p>
        <p className="text-3xl text-white font-bold">{eventTitle}</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <p className="text-white font-semibold">{eventType}</p>
          <p className="text-white font-extralight text-sm">₹{eventPrice}/-</p>
        </div>
        <button className="rounded-3xl flex items-center gap-1 z-[999] w-fit border bg-[#353535] border-[#4F4F4F] px-4 py-2">
          <p className="font-extralight text-sm text-white">Register Now</p>
          <MdArrowOutward color="#FFF" />
        </button>
      </div>
      <Image
        src={eventPersonImage}
        alt="P7"
        loading="lazy"
        className="absolute bottom-0 right-0"
      />
    </div>
  );
};

export default EventCard;
