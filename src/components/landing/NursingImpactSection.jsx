import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, ClipboardCheck, Users } from 'lucide-react';

const impacts = [
  {
    icon: Clock,
    title: "Reduz Retrabalho",
    description: "Menos trocas emergenciais significa mais tempo para cuidado planejado e humanizado.",
    stat: "-60%",
    statLabel: "retrabalho"
  },
  {
    icon: Heart,
    title: "Otimiza Tempo Assistencial",
    description: "Horas liberadas podem ser direcionadas para atividades de maior valor clínico.",
    stat: "+2h",
    statLabel: "por turno"
  },
  {
    icon: ClipboardCheck,
    title: "Organiza o Cuidado",
    description: "Protocolos mais previsíveis e menos interrupções não planejadas na rotina.",
    stat: "95%",
    statLabel: "adesão"
  },
  {
    icon: Users,
    title: "Apoia a Linha de Frente",
    description: "Uma ferramenta que trabalha junto com a equipe, não contra ela.",
    stat: "98%",
    statLabel: "aprovação"
  }
];

export default function NursingImpactSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#00A878]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#00A878]/10 text-[#00A878] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Impacto na Enfermagem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mais Tempo para o que
            <span className="text-[#00A878]"> Realmente Importa</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A enfermagem merece ferramentas que facilitem seu trabalho, não que o compliquem. 
            O SWB foi pensado para quem está na linha de frente do cuidado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-b from-[#F8FAFC] to-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#00A878]/10 flex items-center justify-center mb-5 group-hover:bg-[#00A878] transition-colors">
                  <impact.icon className="w-8 h-8 text-[#00A878] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{impact.title}</h3>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">{impact.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-3xl font-bold text-[#00A878]">{impact.stat}</p>
                  <p className="text-gray-700 text-sm">{impact.statLabel}</p>
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
          className="mt-16 bg-gradient-to-r from-[#00A878] to-[#008f66] rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            "O SWB mudou nossa rotina. Agora temos mais controle e menos surpresas."
          </h3>
          <p className="text-white/80 text-lg">
            — Coordenadora de Enfermagem, Hospital de Referência
          </p>
        </motion.div>
      </div>
    </section>
  );
}