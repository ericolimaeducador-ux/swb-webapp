import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Package, Clock, Building2, Calculator } from 'lucide-react';

const costs = [
  {
    icon: Package,
    title: "Custo por Contaminação",
    description: "Cada evento de contaminação dispara uma sequência de custos diretos e indiretos.",
    value: "R$ 85",
    unit: "/evento"
  },
  {
    icon: Clock,
    title: "Custo por Troca Extra",
    description: "Material, tempo de enfermagem, descarte adequado e documentação.",
    value: "R$ 120",
    unit: "/troca"
  },
  {
    icon: Building2,
    title: "Custo Hora Enfermagem",
    description: "Tempo dedicado a procedimentos não planejados tem custo mensurável.",
    value: "R$ 45",
    unit: "/hora"
  },
  {
    icon: TrendingDown,
    title: "Internação Prolongada",
    description: "Complicações podem estender dias de internação e custos associados.",
    value: "R$ 800",
    unit: "/dia"
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
            Cada contaminação evitada representa economia real. O SWB é uma ferramenta 
            de gestão financeira tanto quanto clínica.
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
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{cost.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-3xl font-bold text-[#00A878]">{cost.value}</span>
                  <span className="text-gray-500 text-sm ml-1">{cost.unit}</span>
                </div>
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0066B3]/10 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-[#0066B3]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Simulação de Economia</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Para um hospital com 100 leitos e média de 30% de pacientes incontinentes, 
                a prevenção de apenas 50% das contaminações pode representar economia significativa.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Economia mensal estimada</span>
                  <span className="text-2xl font-bold text-[#0066B3]">R$ 15.000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-700">Economia anual projetada</span>
                  <span className="text-2xl font-bold text-[#00A878]">R$ 180.000</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">ROI médio</span>
                  <span className="text-2xl font-bold text-[#00A878]">320%</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0066B3]/5 to-[#00A878]/5 rounded-2xl p-8 text-center">
              <p className="text-6xl font-bold text-[#0066B3] mb-2">4:1</p>
              <p className="text-xl text-gray-700 font-medium mb-4">Retorno sobre Investimento</p>
              <p className="text-gray-700">
                Para cada R$ 1 investido em SWB, hospitais economizam em média R$ 4 
                em custos evitados.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}