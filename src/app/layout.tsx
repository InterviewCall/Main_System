import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import Header from '@/components/Header/Header';
import FooterSection from '@/components/Sections/Footer/FooterSection';
import { siteConfig } from '@/constant/config';


// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <script id="convertful-api" src="https://app.convertful.com/Convertful.js?owner=82326" async></script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NH58QMDECM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NH58QMDECM');
          `}
        </Script>
        <Script id='meta-pixel-init' strategy='afterInteractive'>
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
        <noscript>
          <Image
            height='1'
            width='1'
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=578021844720285&ev=PageView&noscript=1'
            alt='Facebook Pixel'
          />
        </noscript>
      </head>
      <body>
        <Header />
        <Toaster position='top-center' />
          <div className='pt-20'>{children}</div>
        <FooterSection />
      </body>
    </html>
  );
}
