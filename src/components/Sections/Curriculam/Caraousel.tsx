'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

const DynamicSwiper = dynamic(() => import('./Slider'), { ssr: false }); 

const Caraousel: FC = () => {
    return (
        <div>
            <DynamicSwiper />
        </div>
    );
};

export default Caraousel;