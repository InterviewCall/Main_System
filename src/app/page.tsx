'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import AlumniSection from '@/components/Sections/Alumni/AlumniSection';
import CurriculamSection from '@/components/Sections/Curriculam/CurriculamSection';
import EventSection from '@/components/Sections/Event/EventSection';
import FAQSection from '@/components/Sections/FAQ/FAQSection';
import HeroSection from '@/components/Sections/Hero/HeroSection';
import IndustrySection from '@/components/Sections/Industry/IndustrySection';
import LearnerSection from '@/components/Sections/Learner/LearnerSection';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/job-switch');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <HeroSection />
      <AlumniSection />
      <IndustrySection />
      <CurriculamSection />
      <LearnerSection />
      <EventSection />
      <FAQSection />
    </div>
  );
}
