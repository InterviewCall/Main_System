'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AuthJobSwitch = (WrappedComponent: FC) => {
    return function ProtectedRoute() {
        const router = useRouter();
        const [isMounted, setIsMounted] = useState(false);

        useEffect(() => {
            if (typeof window !== 'undefined') {
                setIsMounted(true);
            }
        }, []);
        
        useEffect(() => {
            if (!isMounted) return;
            if(!localStorage.getItem('requestId')) {
            router.replace('/jfullstack-mern');
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