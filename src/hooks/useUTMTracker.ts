'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { UtmData } from '@/types';

function useUTMTracker() {
    const searchParams = useSearchParams();
    const [utmData, setUtmData] = useState<UtmData>({
        utm_source: '',
        utm_campaign: '',
        adset_name: '',
        ad_name: '',
        placement: ''
    });

    useEffect(() => {
        if(searchParams.size == 5) {
            const utmData: UtmData = {
                utm_source: searchParams.get('utm_source') ?? '',
                utm_campaign: searchParams.get('utm_campaign') ?? '',
                adset_name: searchParams.get('adset_name') ?? '',
                ad_name: searchParams.get('ad_name') ?? '',
                placement: searchParams.get('placement') ?? ''
            };

            sessionStorage.setItem('utm_data', JSON.stringify(utmData));
            setUtmData(utmData);
        } else {
            const stored = sessionStorage.getItem('utm_data');
            if(stored) {
                const parsed = JSON.parse(stored) as UtmData;
                setUtmData(parsed);
            }
        }
    }, [searchParams]);

    return { utmData };
}

export default useUTMTracker;