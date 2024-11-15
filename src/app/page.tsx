import AlumniSection from '@/components/Sections/Alumni/AlumniSection';
import CurriculamSection from '@/components/Sections/Curriculam/CurriculamSection';
import HeroSection from '@/components/Sections/Hero/HeroSection';
import IndustrySection from '@/components/Sections/Industry/IndustrySection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AlumniSection />
      <IndustrySection />
      <CurriculamSection />
    </div>
  );
}
