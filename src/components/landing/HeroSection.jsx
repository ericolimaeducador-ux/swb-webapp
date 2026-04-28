import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Shield, MessageCircle, ArrowRight, BadgeCheck, Activity, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(38,208,164,0.18),_transparent_18%),linear-gradient(135deg,_#0a3f72_0%,_#062a4f_46%,_#041729_100%)]">
      {/* Abstract medical pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[-6%] top-16 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-[-2%] h-96 w-96 rounded-full bg-[#00A878] blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
        <div className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.75),transparent)]" />
      </div>

      <div className="section-frame relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#7EF0C8]" />
              <Shield className="w-4 h-4 text-[#00A878]" />
              <span className="text-sm font-medium text-white/90">Tecnologia em Proteção Sacral</span>
            </div>

            <h1 className="mb-6 max-w-3xl text-5xl leading-[0.95] text-white md:text-6xl lg:text-7xl">
              Menos contaminação.
              <span className="block text-[#9AF2D6]">Mais controle assistencial.</span>
            </h1>

            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-white/95 md:text-2xl">
              Barreira física inteligente contra contaminação fecal. 
              <span className="font-semibold text-white"> Menos retrabalho. Mais eficiência assistencial. 
              Gestão inteligente de custos hospitalares.</span>
            </p>

            <div className="mb-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Foco</p>
                <p className="text-base font-semibold text-white">Proteção da região sacral</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Impacto</p>
                <p className="text-base font-semibold text-white">Redução de retrabalho clínico</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Aplicação</p>
                <p className="text-base font-semibold text-white">Hospitais, ILPIs e home care</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl('Marketplace')}>
                <Button
                  size="lg"
                  className="rounded-full bg-[#00A878] px-8 py-6 text-lg font-semibold text-white shadow-lg shadow-[#00A878]/30 transition-all hover:scale-105 hover:bg-[#008f66]">
                  
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
                href="https://wa.me/5511947391805?text=Olá! Gostaria de falar com um especialista sobre o SWB."
                target="_blank"
                rel="noopener noreferrer">
                
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white bg-white/10 px-8 py-6 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:text-[#0066B3]">
                  
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Falar com Especialista
                </Button>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-white/85">
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <BadgeCheck className="h-5 w-5 text-[#7EF0C8]" />
                <span className="text-sm font-medium">Design orientado à rotina assistencial</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <Activity className="h-5 w-5 text-[#7EF0C8]" />
                <span className="text-sm font-medium">Pensado para eficiência clínica e econômica</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block">
            
            <div className="relative">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#00A878]/30 via-[#0066B3]/20 to-transparent blur-3xl" />
              <div className="absolute -inset-1 rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-sm" />
              <div className="relative aspect-[16/9] w-full rounded-[32px] overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/9zvChImgFCM"
                  title="SWB Brasil - Vídeo institucional"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="mt-4 rounded-[28px] border border-white/15 bg-[#041b31]/75 p-5 backdrop-blur-md">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#9AF2D6]">Proposta de valor</p>
                <p className="text-2xl font-bold text-white">Uma camada simples que reduz um problema caro.</p>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  Produto pensado para integrar prevenção, operação e gestão com leitura rápida de benefício clínico.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>);

}
