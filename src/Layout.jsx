import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Shield, Menu, X, ChevronRight, 
  Instagram, Youtube, Music2,
  Mail, Phone, MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Início', page: 'Home' },
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
  const headerBg = isScrolled || !isHome 
    ? 'bg-white/95 backdrop-blur-md shadow-sm' 
    : 'bg-transparent';
  const textColor = isScrolled || !isHome ? 'text-gray-900' : 'text-white';
  const logoColor = isScrolled || !isHome ? 'text-[#0066B3]' : 'text-white';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6990ca27ebb6e2fb5d662b83/6ac36028e_Logoswb.jpg" 
                alt="SWB - Sacral Protection" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`font-medium transition-colors ${textColor} hover:text-[#00A878] ${currentPageName === link.page ? 'text-[#00A878]' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href="https://wa.me/5511947391805?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20SWB."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#00A878] hover:bg-[#008f66] text-white font-semibold px-6 rounded-xl">
                  Falar com Especialista
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
              className="md:hidden bg-white border-t"
            >
              <div className="container mx-auto px-6 py-6">
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
                <div className="mt-6">
                  <a 
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#00A878] hover:bg-[#008f66] text-white font-semibold py-6 rounded-xl">
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
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6990ca27ebb6e2fb5d662b83/6ac36028e_Logoswb.jpg" 
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
                    <p className="text-white">+55 (11) 94739-1805</p>
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
          <div className="container mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
              <p>© 2024 SWB - Sistema de Proteção Sacral. Todos os direitos reservados.</p>
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