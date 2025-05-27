import { Suspense } from 'react';

import ClientFullstackMernPage from '@/components/FullstackMernPage/ClientFullstackMernPage';
import LoaderForRoute from '@/components/LoaderForRoute/LoaderForRoute';

export default function FullstackMernPage() {
  return (
    <Suspense fallback={<LoaderForRoute />}>
      <ClientFullstackMernPage />
    </Suspense>
  );
}