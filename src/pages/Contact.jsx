import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Mail, Phone, MapPin, 
  Instagram, Youtube, Music2,
  Clock, Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '../components/shared/ContactForm';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/swbbrasil', color: 'hover:bg-pink-500' },
  { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@S.W.BBRASILSWB', color: 'hover:bg-red-600' },
  { icon: Music2, label: 'Spotify', url: 'https://open.spotify.com/show/52dKlW73TAGB26vESYIQ0o?si=uAXxJIw6S6uYa_ucAX4z5A', color: 'hover:bg-green-500' }
];

const contactInfo = [
  { 
    icon: MessageCircle, 
    title: 'WhatsApp', 
    value: '+55 (11) 94739-1805',
    action: 'https://wa.me/5511947391805',
    actionLabel: 'Iniciar conversa'
  },
  { 
    icon: Mail, 
    title: 'E-mail', 
    value: 'comercial@swbbrasil.com.br',
    action: 'mailto:comercial@swbbrasil.com.br',
    actionLabel: 'Enviar e-mail'
  },
  { 
    icon: Phone, 
    title: 'Telefone', 
    value: '+55 (11) 94739-1805',
    action: 'tel:+5511947391805',
    actionLabel: 'Ligar agora'
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#0066B3] via-[#004080] to-[#002855] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00A878]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fale Conosco
            </h1>
            <p className="text-xl text-white/80">
              Estamos prontos para atender sua instituição e apresentar como o SWB 
              pode transformar o cuidado ao paciente incontinente.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066B3] to-[#004080] flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600 mb-3">{info.value}</p>
                      <a 
                        href={info.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#0066B3] hover:text-[#004080] font-medium text-sm"
                      >
                        {info.actionLabel}
                        <Send className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href="https://wa.me/5511947391805?text=Olá! Gostaria de saber mais sobre o SWB."
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-[#00A878] to-[#008f66] rounded-2xl p-6 text-white hover:shadow-xl transition-all hover:scale-[1.02]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">WhatsApp Direto</h3>
                      <p className="text-white/80 text-sm">Resposta rápida e personalizada</p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#0066B3]" />
                  <h3 className="font-bold text-gray-900">Horário de Atendimento</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p className="text-sm text-gray-500 mt-4">
                    * Mensagens fora do horário serão respondidas no próximo dia útil
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Redes Sociais</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Envie uma Mensagem</h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas úteis.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}