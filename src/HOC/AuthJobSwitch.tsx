'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AuthJobSwitch = (WrappedComponent: FC) => {
    return function ProtectedRoute() {
        const router = useRouter();
        const [isMounted, setIsMounted] = useState(false);
        const [value, setValue] = useState<string | null>(null);

        useEffect(() => {
            setIsMounted(true);

            if (typeof window !== 'undefined') {
                const requestId = localStorage.getItem('requestId');
                if(requestId == null) {
                  router.replace('/job-switch');
                  toast.error('You haven\'t booked yet, Redirecting to the booking page...');
                }
                else {
                    setValue(requestId);
                }
              }
        }, [router]);

        if(!value || !isMounted) {
            return null;
        }

        return <WrappedComponent />;
    };
};

export default AuthJobSwitch;