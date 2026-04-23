import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  Shield, Heart, Droplets, Thermometer,
  Clock, RefreshCcw, ClipboardCheck, Users,
  TrendingDown, Calculator, PiggyBank, BarChart3,
  ArrowRight, CheckCircle
} from 'lucide-react';

const clinicalBenefits = [
  {
    icon: Shield,
    title: "Proteção da Região Sacral",
    description: "Barreira física que minimiza o contato direto de fezes com a pele e curativos existentes."
  },
  {
    icon: Droplets,
    title: "Redução de Contaminação",
    description: "Diminui significativamente a exposição da área sacral a agentes contaminantes."
  },
  {
    icon: Heart,
    title: "Apoio à Prevenção de LPP",
    description: "Contribui para protocolos de prevenção de lesões por pressão em pacientes de risco."
  },
  {
    icon: Thermometer,
    title: "Preservação do Microambiente",
    description: "Ajuda a manter condições favoráveis de temperatura e umidade na região."
  }
];

const operationalBenefits = [
  {
    icon: RefreshCcw,
    title: "Menos Retrabalho",
    description: "Redução de procedimentos não planejados e trocas emergenciais de curativos."
  },
  {
    icon: Clock,
    title: "Menos Trocas Desnecessárias",
    description: "Curativos podem permanecer por tempo adequado sem contaminação precoce."
  },
  {
    icon: ClipboardCheck,
    title: "Organização Assistencial",
    description: "Rotinas mais previsíveis e planejáveis para a equipe de enfermagem."
  },
  {
    icon: Users,
    title: "Otimização de Equipe",
    description: "Liberação de tempo para atividades de maior valor clínico e humanizado."
  }
];

const economicBenefits = [
  {
    icon: PiggyBank,
    title: "Redução de Custos com Curativos",
    description: "Potencial economia significativa em materiais de curativos e coberturas especiais."
  },
  {
    icon: Calculator,
    title: "Otimização de Horas",
    description: "Menor consumo de horas de enfermagem em procedimentos de retrabalho."
  },
  {
    icon: BarChart3,
    title: "Custo-Efetividade",
    description: "Retorno sobre investimento comprovado em múltiplas instituições."
  },
  {
    icon: TrendingDown,
    title: "Redução de Internação",
    description: "Menor risco de complicações que poderiam prolongar tempo de internação."
  }
];

function BenefitCard({ benefit, index, color }) {
  const colorClasses = {
    blue: 'from-[#0066B3] to-[#004080]',
    green: 'from-[#00A878] to-[#008f66]',
    purple: 'from-purple-600 to-purple-700'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
          <benefit.icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
        <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
      </div>
    </motion.div>
  );
}

function BenefitSection({ title, subtitle, benefits, color, bgColor }) {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Benefits() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#0066B3] via-[#004080] to-[#002855] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00A878]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Benefícios Comprovados
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Impacto Real em
              <span className="text-[#00A878]"> Três Dimensões</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              O SWB oferece benefícios clínicos, operacionais e econômicos que transformam 
              a gestão do cuidado ao paciente incontinente.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Clinical Benefits */}
      <BenefitSection
        title="Benefícios Clínicos"
        subtitle="Proteção e prevenção para o paciente"
        benefits={clinicalBenefits}
        color="blue"
        bgColor="bg-white"
      />

      {/* Operational Benefits */}
      <BenefitSection
        title="Benefícios Operacionais"
        subtitle="Eficiência para a equipe de enfermagem"
        benefits={operationalBenefits}
        color="green"
        bgColor="bg-gray-50"
      />

      {/* Economic Benefits */}
      <BenefitSection
        title="Benefícios Econômicos"
        subtitle="Gestão inteligente de recursos"
        benefits={economicBenefits}
        color="purple"
        bgColor="bg-white"
      />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '60%', label: 'Redução de contaminação' },
              { value: '40%', label: 'Menos trocas de curativo' },
              { value: '2h', label: 'Economia por turno' },
              { value: '320%', label: 'ROI médio' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-5xl font-bold text-[#00A878] mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0066B3] to-[#004080]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Transformar seu Cuidado?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Descubra como o SWB pode beneficiar sua instituição com uma avaliação personalizada.
            </p>
            <Link to={createPageUrl('Marketplace')}>
              <Button 
                size="lg" 
                className="bg-[#00A878] hover:bg-[#008f66] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}