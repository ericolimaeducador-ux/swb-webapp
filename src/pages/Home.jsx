import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionSection from '../components/landing/SolutionSection';
import NursingImpactSection from '../components/landing/NursingImpactSection';
import EconomicImpactSection from '../components/landing/EconomicImpactSection';
import ScienceSection from '../components/landing/ScienceSection';
import AudienceSection from '../components/landing/AudienceSection';
import CTASection from '../components/landing/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <NursingImpactSection />
      <EconomicImpactSection />
      <ScienceSection />
      <AudienceSection />
      <CTASection />
    </div>
  );
}