'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AuthJobSwitch = (WrappedComponent: FC) => {
    return function ProtectedRoute() {
        const router = useRouter();
        const [isMounted, setIsMounted] = useState(false);

        useEffect(() => {
            setIsMounted(true);
        }, []);
        
        useEffect(() => {
            if (!isMounted) return;
            if(!localStorage.getItem('requestId')) {
            router.replace('/job-switch');
            toast.error('You havn\'t booked yet, Redirecting to the booking page...');
            }
        }, [router, isMounted]);

        if(!localStorage.getItem('requestId') || !isMounted) {
            return null;
        }

        return <WrappedComponent />;
    };
};

export default AuthJobSwitch;