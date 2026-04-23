import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCcw, Users, DollarSign, Activity } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: "Contaminação Fecal Recorrente",
    description: "Pacientes incontinentes expõem curativos a contato direto com fezes, comprometendo a integridade do tratamento.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: RefreshCcw,
    title: "Trocas Precoces de Curativos",
    description: "Curativos contaminados exigem substituição antes do tempo ideal, multiplicando procedimentos e custos.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Users,
    title: "Sobrecarga da Enfermagem",
    description: "Retrabalho constante consome horas assistenciais que poderiam ser dedicadas ao cuidado direto do paciente.",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: DollarSign,
    title: "Custos Hospitalares Crescentes",
    description: "Cada troca adicional representa custo com material, mão de obra e tempo de internação prolongado.",
    color: "from-rose-500 to-rose-600"
  },
  {
    icon: Activity,
    title: "Risco de Lesão por Pressão",
    description: "Umidade e contaminação comprometem o microclima cutâneo, aumentando vulnerabilidade a lesões.",
    color: "from-red-600 to-red-700"
  }
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            O Desafio Invisível
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Custo Oculto da
            <span className="text-red-600"> Contaminação Fecal</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Pacientes incontinentes representam um desafio diário para equipes de enfermagem. 
            Cada contaminação gera uma cascata de custos invisíveis que se acumulam silenciosamente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <problem.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-700 leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                O problema não é apenas clínico.
              </h3>
              <p className="text-gray-300 text-lg">
                É uma questão de gestão estratégica de recursos hospitalares.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-center px-6">
                <p className="text-4xl font-bold text-[#00A878]">40%</p>
                <p className="text-gray-700 text-sm mt-1">dos pacientes<br/>são incontinentes</p>
              </div>
              <div className="w-px h-16 bg-white/20" />
              <div className="text-center px-6">
                <p className="text-4xl font-bold text-[#00A878]">3x</p>
                <p className="text-gray-700 text-sm mt-1">mais trocas<br/>de curativos</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}