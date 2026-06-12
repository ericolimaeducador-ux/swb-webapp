import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0066B3] via-[#004080] to-[#002855] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00A878]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
            <Shield className="w-10 h-10 text-[#00A878]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Proteção Assistencial
            <span className="block text-[#00A878]">Para a Rotina Sacral</span>
          </h2>

          <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Transforme a forma como sua instituição gerencia o cuidado ao paciente incontinente. 
            O SWB é o primeiro passo para uma assistência mais eficiente e econômica.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to={createPageUrl('Marketplace')}>
              <Button 
                size="lg" 
                className="bg-[#00A878] hover:bg-[#008f66] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg shadow-[#00A878]/30 transition-all hover:scale-105"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a 
              href="https://wa.me/5511947391805?text=Olá! Gostaria de saber mais sobre o SWB."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="ghost"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-7 text-lg rounded-xl backdrop-blur-sm transition-all hover:scale-105"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Resposta em até 24h</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Consultoria especializada</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Suporte dedicado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
