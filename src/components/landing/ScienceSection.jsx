import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Microscope, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const topics = [
  {
    icon: Microscope,
    title: "Incontinência Fecal",
    description: "Impacto na integridade cutânea e qualidade de vida do paciente."
  },
  {
    icon: FileText,
    title: "Curativos Sacrais",
    description: "Fatores que interferem na adesão, troca e proteção do curativo."
  },
  {
    icon: BookOpen,
    title: "Microclima Cutâneo",
    description: "Influência da umidade e temperatura na saúde da pele."
  },
  {
    icon: GraduationCap,
    title: "Higiene e Barreiras",
    description: "Boas práticas para reduzir exposição do curativo a contaminantes."
  }
];

export default function ScienceSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0066B3] via-[#00A878] to-[#0066B3]" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#0066B3]/10 text-[#0066B3] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Fundamentação Científica
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Base Científica
              <span className="text-[#0066B3]"> Sólida</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              O SWB é fundamentado em evidências científicas consolidadas sobre a consequência
              do rastreio fecal pela fenda interglútea e manejo de pacientes incontinentes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0066B3]/10 flex items-center justify-center flex-shrink-0">
                    <topic.icon className="w-5 h-5 text-[#0066B3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{topic.title}</h4>
                    <p className="text-gray-700 text-xs mt-1">{topic.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to={createPageUrl("BaseCientifica")}>
              <Button 
                size="lg"
                className="bg-[#0066B3] hover:bg-[#004080] text-white font-semibold px-8 py-6 text-lg rounded-xl"
              >
                Conheça a Base Científica
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
              <div className="space-y-4">
                {[
                  "Wound dressing performance literature",
                  "Incontinence care and hygiene literature",
                  "Fecal contamination and dressing failure studies",
                  "Health economics and nursing workload references"
                ].map((ref, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0066B3]/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#0066B3]" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{ref}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-[#0066B3] to-[#004080] rounded-2xl text-center">
                <p className="text-white/90 text-sm mb-2">Referências Bibliográficas</p>
                <p className="text-4xl font-bold text-white">+50</p>
                <p className="text-white/70 text-sm mt-1">artigos científicos revisados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
