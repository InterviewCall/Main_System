import { redirect } from 'next/navigation';

import { cfaWhatsappCommunity } from '@/utils';

export default function JoinCFACommunity() {
    redirect(cfaWhatsappCommunity);
}