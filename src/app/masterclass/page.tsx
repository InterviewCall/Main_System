

import { FC } from 'react';

import StoreProvider from '@/app/StoreProvider';
import MasterClass from '@/components/MasterClass/MasterClass';

const Page: FC = () => {
  return (
    <StoreProvider>
      <MasterClass />
    </StoreProvider>
  );
};

export default Page;
