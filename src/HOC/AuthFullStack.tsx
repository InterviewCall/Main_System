import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthFullStack = (WrappedComponent: FC) => {
    return function ProtectedRoute() {
        const router = useRouter();
        useEffect(() => {
            if(!localStorage.getItem('requestId')) {
            router.replace('/fullstack-mern');
            toast.error('You havn\'t booked yet, Redirecting to the booking page...');
            }
        }, [router]);

        if(!localStorage.getItem('requestId')) {
            return null;
        }

        return <WrappedComponent />;
    };
};

export default AuthFullStack;