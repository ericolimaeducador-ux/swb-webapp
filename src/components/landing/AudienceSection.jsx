import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Stethoscope, Heart, Users } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    title: "Hospitais",
    description: "UTIs, enfermarias, centros cirúrgicos e unidades de cuidados intensivos.",
    features: ["Alto volume de pacientes", "Protocolos rigorosos", "Gestão de custos"]
  },
  {
    icon: Home,
    title: "ILPIs",
    description: "Instituições de Longa Permanência para Idosos com residentes acamados.",
    features: ["Cuidado contínuo", "Equipe reduzida", "Prevenção prioritária"]
  },
  {
    icon: Stethoscope,
    title: "Clínicas",
    description: "Clínicas especializadas em tratamento de feridas e reabilitação.",
    features: ["Atendimento especializado", "Acompanhamento próximo", "Resultados mensuráveis"]
  },
  {
    icon: Heart,
    title: "Home Care",
    description: "Serviços de atendimento domiciliar para pacientes dependentes.",
    features: ["Cuidado personalizado", "Ambiente familiar", "Orientação técnica"]
  },
  {
    icon: Users,
    title: "Cuidadores",
    description: "Profissionais e familiares que prestam cuidado direto ao paciente.",
    features: ["Treinamento simples", "Aplicação fácil", "Resultado visível"]
  }
];

export default function AudienceSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#0066B3]/10 text-[#0066B3] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Público-Alvo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Para Quem é o
            <span className="text-[#0066B3]"> SWB?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvido para atender as necessidades de diferentes ambientes de cuidado, 
            sempre com foco na proteção do paciente e eficiência da equipe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066B3] to-[#004080] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <audience.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{audience.title}</h3>
                <p className="text-gray-600 mb-4">{audience.description}</p>
                <div className="space-y-2">
                  {audience.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00A878]" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}