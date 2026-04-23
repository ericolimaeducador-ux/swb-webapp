import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, Clock, Heart, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Barreira Física Protetora",
    description: "Cria uma camada de proteção que minimiza o contato direto de fezes com curativos e pele."
  },
  {
    icon: Layers,
    title: "Preservação do Microambiente",
    description: "Contribui para manter condições favoráveis na região sacral, apoiando a integridade cutânea."
  },
  {
    icon: Clock,
    title: "Ação Preventiva",
    description: "Atua antes que a contaminação ocorra, evitando a cascata de complicações subsequentes."
  },
  {
    icon: Heart,
    title: "Apoio aos Protocolos",
    description: "Integra-se aos protocolos institucionais de prevenção de lesões por pressão."
  }
];

export default function SolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0066B3]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#0066B3]/10 text-[#0066B3] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              A Solução
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SWB: Proteção
              <span className="text-[#0066B3]"> Inteligente</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              O Sistema de Proteção para Região Sacral representa uma abordagem inovadora 
              e estratégica para um dos maiores desafios do cuidado ao paciente incontinente.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0066B3]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#0066B3]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-700 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066B3]/20 to-[#00A878]/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6990ca27ebb6e2fb5d662b83/566b629ec_SWB_landing_hero_1920x1080_FINAL_v6.png" 
                alt="Como usar o SWB - Passo a passo de aplicação"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}