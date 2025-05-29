'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { UtmData } from '@/types';

function useUTMTracker() {
    const searchParams = useSearchParams();
    

    useEffect(() => {
        const existingUtmData = sessionStorage.getItem('utmData');

        if(!existingUtmData) {
            const data: UtmData = {};

            for(const [key, value] of searchParams.entries()) {
                data[key] = value;
            }
            
            sessionStorage.setItem('utmData', JSON.stringify(data));
        }
    }, [searchParams]);
}

export default useUTMTracker;