'use client';

import { useEffect } from 'react';

const WebinarEmbed = () => {
  useEffect(() => {
    // Dynamically add the external script after the component mounts
    const script = document.createElement('script');
    script.src = 'https://event.webinarjam.com/register/962zwbw/embed-form?formButtonText=REGISTER%20FOR%20FREE&formAccentColor=%23FF516C&formAccentOpacity=1&formBgColor=%23ffffff&formBgOpacity=1';
    script.async = true;
    document.querySelector('.wj-embed-wrapper')?.appendChild(script);

    // Cleanup script if component unmounts
    return () => {
      const wrapper = document.querySelector('.wj-embed-wrapper');
      if (wrapper && wrapper.lastChild === script) {
        wrapper.removeChild(script);
      }
    };
  });

  return (
    <div className="wj-embed-wrapper" data-webinar-hash="962zwbw">
      {/* The script will inject content into this wrapper */}
    </div>
  );
};

export default WebinarEmbed;
  
