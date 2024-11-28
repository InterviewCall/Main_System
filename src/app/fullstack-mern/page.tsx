import AlumniSection from '@/components/Sections/Alumni/AlumniSection';
import CurriculamSection from '@/components/Sections/Curriculam/CurriculamSection';
// import EventSection from '@/components/Sections/Event/EventSection';
import FAQSection from '@/components/Sections/FAQ/FAQSection';
import HeroSection from '@/components/Sections/Hero/HeroSection';
import IndustrySection from '@/components/Sections/Industry/IndustrySection';
import LearnerSection from '@/components/Sections/Learner/LearnerSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AlumniSection />
      <IndustrySection />
      <CurriculamSection />
      <LearnerSection />
      {/* <EventSection /> */}
      <FAQSection />
    </div>
  );
}
