import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>SWB Brasil | Proteção Inteligente para a Região Sacral</title>
        <meta name="description" content="Sistema SWB: barreira física que reduz o contato de fezes com a região sacral e curativos em pacientes incontinentes, apoiando o cuidado clínico e reduzindo retrabalho." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SWB Brasil | Proteção Inteligente para a Região Sacral" />
        <meta property="og:description" content="Sistema SWB: barreira física que reduz o contato de fezes com a região sacral e curativos em pacientes incontinentes, apoiando o cuidado clínico e reduzindo retrabalho." />
        <meta property="og:image" content="https://swbbrasil.com.br/og-image.png" />
      </Helmet>
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