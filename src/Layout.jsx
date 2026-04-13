import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Menu, X, ChevronRight, 
  Instagram, Youtube, Music2,
  Mail, Phone, MapPin, ArrowRight, Stethoscope
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Início', page: 'Home' },
  { label: 'Base Científica', page: 'BaseCientifica' },
  { label: 'Benefícios', page: 'Benefits' },
  { label: 'Produto', page: 'Marketplace' },
  { label: 'Contato', page: 'Contact' }
];

const socialLinks = [
  { icon: Instagram, url: 'https://www.instagram.com/swbbrasil', label: 'Instagram' },
  { icon: Youtube, url: 'https://www.youtube.com/@S.W.BBRASILSWB', label: 'YouTube' },
  { icon: Music2, url: 'https://open.spotify.com/show/52dKlW73TAGB26vESYIQ0o?si=uAXxJIw6S6uYa_ucAX4z5A', label: 'Spotify' }
];

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHome = currentPageName === 'Home';
  const headerSurface = isScrolled || !isHome
    ? 'border-white/80 bg-white/80 shadow-[0_18px_50px_rgba(15,23,42,0.09)] backdrop-blur-xl'
    : 'border-white/15 bg-white/8 backdrop-blur-md';
  const textColor = 'text-slate-800';
  const navPillSurface = isScrolled || !isHome
    ? 'bg-slate-50/90 ring-1 ring-slate-200/80'
    : 'bg-white/10 ring-1 ring-white/15';
  const topBadgeSurface = isScrolled || !isHome
    ? 'bg-[#E9F6F1] text-[#006B4F]'
    : 'bg-[#E9F6F1]/85 text-[#0B5B45]';

  return (
    <div className="swb-shell min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6 lg:px-8">
        <div className={`section-frame rounded-[28px] border transition-all duration-300 ${headerSurface}`}>
          <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img
                src="/logoswb.jpg"
                alt="SWB - Sacral Protection"
                className="h-12 w-auto rounded-2xl"
              />
              <div className="hidden min-[420px]:block">
                <p className={`text-sm font-semibold uppercase tracking-[0.24em] ${textColor}`}>SWB Brasil</p>
                <p className={`text-xs ${isScrolled || !isHome ? 'text-slate-500' : 'text-slate-600'}`}>
                  Proteção sacral com foco assistencial
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden items-center gap-2 rounded-full px-3 py-2 md:flex ${navPillSurface}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    currentPageName === link.page
                      ? 'bg-[#00A878] text-white shadow-[0_10px_24px_rgba(0,168,120,0.24)]'
                      : `${textColor} hover:bg-white/10 hover:text-[#00A878]`
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden items-center gap-3 lg:flex">
              <div className={`rounded-full px-4 py-2 text-xs font-semibold ${topBadgeSurface}`}>
                Solução para hospitais, ILPIs e home care
              </div>
              <a 
                href="https://wa.me/5511947391805?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20SWB."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full bg-[#00A878] px-6 font-semibold text-white shadow-[0_12px_30px_rgba(0,168,120,0.24)] hover:bg-[#008f66]">
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${textColor}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-b-[28px] border-t border-slate-200/80 bg-white/95 md:hidden"
            >
              <div className="px-6 py-6">
                <nav className="space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.page}
                      to={createPageUrl(link.page)}
                      className={`flex items-center justify-between py-3 border-b border-gray-100 font-medium ${currentPageName === link.page ? 'text-[#00A878]' : 'text-gray-900'}`}
                    >
                      {link.label}
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                    Atendimento consultivo para instituições e equipes de enfermagem.
                  </div>
                  <a 
                    href="https://wa.me/5511947391805"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full rounded-xl bg-[#00A878] py-6 font-semibold text-white hover:bg-[#008f66]">
                      Falar com Especialista
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-28">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#07121f] text-white">
        <div className="absolute inset-0">
          <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-[#0066B3]/20 blur-3xl" />
          <div className="absolute bottom-0 right-[-8%] h-80 w-80 rounded-full bg-[#00A878]/20 blur-3xl" />
        </div>

        <div className="section-frame relative py-16">
          <div className="mb-12 grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/85">
                <Stethoscope className="h-4 w-4 text-[#00A878]" />
                Atualização de cuidado, não só de produto
              </div>
              <h3 className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
                Reduza retrabalho e preserve o cuidado com uma camada extra de proteção assistencial.
              </h3>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="https://wa.me/5511947391805?text=Ol%C3%A1!%20Quero%20entender%20como%20o%20SWB%20se%20encaixa%20na%20minha%20institui%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full rounded-full bg-[#00A878] px-6 py-6 font-semibold text-white hover:bg-[#008f66] sm:w-auto">
                  Falar com Especialista
                </Button>
              </a>
              <Link to={createPageUrl('BaseCientifica')}>
                <Button variant="outline" className="w-full rounded-full border-white/20 bg-white/5 px-6 py-6 font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto">
                  Ver Base Científica
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="/logoswb.jpg" 
                  alt="SWB - Sacral Protection" 
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Sistema de Proteção para Região Sacral. Tecnologia inovadora 
                para prevenção de contaminação fecal em pacientes incontinentes.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#00A878] transition-colors"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Navegação</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link 
                      to={createPageUrl(link.page)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Público */}
            <div>
              <h4 className="font-bold text-lg mb-4">Para Quem</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Hospitais</li>
                <li>ILPIs</li>
                <li>Clínicas</li>
                <li>Home Care</li>
                <li>Cuidadores</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#00A878] mt-0.5" />
                  <div>
                    <p className="text-white">+55 11 947391805</p>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#00A878] mt-0.5" />
                  <div>
                    <p className="text-white">comercial@swbbrasil.com.br</p>
                    <p className="text-gray-400 text-sm">E-mail</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00A878] mt-0.5" />
                  <div>
                    <p className="text-white">São Paulo, SP</p>
                    <p className="text-gray-400 text-sm">Brasil</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="section-frame py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
              <p>© 2026 SWB - Sistema de Proteção Sacral. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}