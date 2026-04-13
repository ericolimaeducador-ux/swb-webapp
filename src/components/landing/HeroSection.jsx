import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Shield, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoBadge from '@/components/shared/LogoBadge';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0066B3] via-[#004080] to-[#002855]">
      {/* Abstract medical pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00A878] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="max-w-2xl space-y-6 md:space-y-8">
              <div className="inline-flex flex-col gap-4 rounded-2xl border border-white/30 bg-white/10 px-5 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-6 sm:py-8">
                <LogoBadge mode="dark" size="hero" showWordmark className="shadow-none" />
                <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/5 px-3 py-1.5">
                  <Shield className="w-4 h-4 text-[#00A878]" />
                  <span className="text-white/90 text-[12px] md:text-[13px] font-semibold tracking-[0.02em]">Tecnologia em Proteção Sacral</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.03] tracking-tight max-w-[13ch]">
                SWB: Cada cuidado
                <span className="block text-[#00A878]">importa.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-[62ch]">
                Barreira física inteligente contra contaminação fecal.
                <span className="text-white font-medium"> Menos retrabalho. Mais eficiência assistencial. Gestão inteligente de custos hospitalares.</span>
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                <Link to={createPageUrl('Marketplace')} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#00A878] hover:bg-[#008f66] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#00A878]/30 transition-all hover:scale-105">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/5511947391805?text=Olá! Gostaria de falar com um especialista sobre o SWB."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[#0066B3] font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all hover:scale-105">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Falar com Especialista
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/15 flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-white/60 text-sm">Satisfação</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">24h</p>
                <p className="text-white/60 text-sm">Suporte</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block">
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00A878]/30 via-[#0066B3]/20 to-transparent rounded-3xl blur-3xl" />
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#004080]/20 to-[#00A878]/10 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(0,102,179,0.15) 0%, rgba(0,168,120,0.1) 50%, rgba(0,40,85,0.2) 100%)'}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#002855]/40" />
                <video
                  src="/logoanimado.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover mix-blend-multiply"
                />
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