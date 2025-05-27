'use client';

import { usePathname } from 'next/navigation';

import AlumniSection from '@/components/Sections/Alumni/AlumniSection';
import CurriculamSection from '@/components/Sections/Curriculam/CurriculamSection';
// import EventSection from '@/components/Sections/Event/EventSection';
import FAQSection from '@/components/Sections/FAQ/FAQSection';
import HeroSection from '@/components/Sections/Hero/HeroSection';
import IndustrySection from '@/components/Sections/Industry/IndustrySection';
import LearnerSection from '@/components/Sections/Learner/LearnerSection';
import { heroSectionDetails } from '@/constant/heroSectionDetails';

export default function Home() {
  const pathName = usePathname();
  return (
    <div>
      <HeroSection title={heroSectionDetails[pathName].title} description={heroSectionDetails[pathName].description} />
      <AlumniSection />
      <IndustrySection />
      <CurriculamSection />
      <LearnerSection />
      {/* <EventSection /> */}
      <FAQSection />
    </div>
  );
}
