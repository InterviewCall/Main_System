

import { FC, Suspense } from 'react';

import StoreProvider from '@/app/StoreProvider';
import LoaderForRoute from '@/components/LoaderForRoute/LoaderForRoute';
import MasterClass from '@/components/MasterClass/MasterClass';

const Page: FC = () => {
  return (
    <StoreProvider>
      <Suspense fallback={<LoaderForRoute />}>
        <MasterClass />
      </Suspense>
    </StoreProvider>
  );
};

export default Page;
