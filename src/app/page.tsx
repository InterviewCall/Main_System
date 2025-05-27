import { Suspense } from 'react';

import ClientHomePage from '@/components/HomePage/ClientHomePage';

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientHomePage />
    </Suspense>
  );
}