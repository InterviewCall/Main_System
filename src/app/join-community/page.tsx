import { redirect } from 'next/navigation';

import { whatsappCommunity } from '@/utils';

export default function JoinCommunity() {
    redirect(whatsappCommunity);
}