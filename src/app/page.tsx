import { Suspense } from 'react';

import ClientHomePage from '@/components/HomePage/ClientHomePage';
import LoaderForRoute from '@/components/LoaderForRoute/LoaderForRoute';

export default function HomePage() {
  return (
    <Suspense fallback={<LoaderForRoute />}>
      <ClientHomePage />
    </Suspense>
  );
}