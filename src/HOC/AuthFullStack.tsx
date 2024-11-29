'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AuthFullStack = (WrappedComponent: FC) => {
    return function ProtectedRoute() {
        const router = useRouter();
        const [isMounted, setIsMounted] = useState(false);
        const [value, setValue] = useState<string | null>(null);

        useEffect(() => {
            setIsMounted(true);
            
            if (typeof window !== 'undefined') {
                const requestId = localStorage.getItem('requestId');
                if(requestId == null) {
                  router.replace('/fullstack-mern');
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

export default AuthFullStack;