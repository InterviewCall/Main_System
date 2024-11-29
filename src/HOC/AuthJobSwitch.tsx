'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthJobSwitch = (WrappedComponent: FC) => {
    return function ProtectedRoute() {
        const router = useRouter();
        useEffect(() => {
            if(!localStorage.getItem('requestId')) {
            router.replace('/job-switch');
            toast.error('You havn\'t booked yet, Redirecting to the booking page...');
            }
        }, [router]);

        if(!localStorage.getItem('requestId')) {
            return null;
        }

        return <WrappedComponent />;
    };
};

export default AuthJobSwitch;