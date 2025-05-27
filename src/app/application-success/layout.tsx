// app/thank-you/layout.tsx
import Image from 'next/image';
import Script from 'next/script';
import type { ReactNode } from 'react';

export default function ThankYouLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Meta Pixel Script */}
      <Script id='meta-pixel' strategy='afterInteractive'>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '578021844720285');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* NoScript fallback (you can also move this to app/layout.tsx) */}
      <noscript>
        <Image
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=578021844720285&ev=PageView&noscript=1'
          alt='Meta Pixel'
        />
      </noscript>

      {children}
    </>
  );
}
