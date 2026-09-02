import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { getWhatsAppLink } from '@/lib/config';
import { motion } from 'framer-motion';
import { TrendingDown, Package, Clock, Building2, Calculator, ArrowRight, MessageCircle } from 'lucide-react';

const costs = [
  {
    icon: Package,
    title: "Custo por Contaminação",
    description: "Cada episódio desencadeia uma cascata de consequências: substituição de materiais, tempo da equipe redirecionado, higienização e descarte adequado — o impacto vai muito além do item trocado."
  },
  {
    icon: Clock,
    title: "Custo por Troca Extra",
    description: "Uma troca não planejada mobiliza insumos, tempo de enfermagem, protocolo de descarte e registro. É um esforço assistencial que se repete a cada ocorrência."
  },
  {
    icon: Building2,
    title: "Custo Hora Enfermagem",
    description: "Procedimentos não programados consomem horas da equipe que poderiam estar dedicadas ao cuidado planejado, pressionando a escala e a rotina da unidade."
  },
  {
    icon: TrendingDown,
    title: "Internação Prolongada",
    description: "Complicações associadas à umidade e à contaminação podem estender o tempo de internação, aumentando a exposição do paciente e o uso de recursos da instituição."
  }
];

export default function EconomicImpactSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066B3]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#00A878]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-[#00A878] px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Impacto Econômico
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gestão Inteligente de
            <span className="text-[#00A878]"> Custos Hospitalares</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cada troca não planejada representa consumo de materiais, tempo assistencial e descarte.
            O SWB ajuda instituições a organizar esse indicador operacional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {costs.map((cost, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066B3] to-[#004080] flex items-center justify-center mb-5">
                  <cost.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cost.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cost.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0066B3]/10 mb-6">
              <Calculator className="w-6 h-6 text-[#0066B3]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Uma estimativa feita com os seus números
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Cada hospital tem uma realidade diferente. Em vez de projeções genéricas, preferimos
              construir um panorama a partir do seu histórico de ocorrências e do seu volume assistencial
              — de forma transparente, mostrando onde existe espaço para ganho operacional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center justify-center gap-2 bg-[#0066B3] hover:bg-[#004080] text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Falar com um especialista
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={getWhatsAppLink('Olá! Quero falar com um especialista sobre o impacto operacional do SWB.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
