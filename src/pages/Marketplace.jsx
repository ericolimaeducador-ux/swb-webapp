import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Shield, Package, Ruler, FileText, CheckCircle,
  MessageCircle, ArrowRight, Info, BookOpen } from
'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import ContactForm from '../components/shared/ContactForm';

const specifications = [
{ label: 'Material', value: 'Espuma de poliuretano de alta qualidade' },
{ label: 'Formato', value: 'Anatômico para região sacral' },
{ label: 'Dimensões', value: '18cm x 20cm (padrão adulto)' },
{ label: 'Espessura', value: '5mm de proteção' },
{ label: 'Cor', value: 'Cinza grafite' },
{ label: 'Embalagem', value: 'Individual, não estéril' },
{ label: 'Validade', value: '3 anos (fechado)' }];


const features = [
'Barreira física contra contaminação fecal',
'Fácil aplicação e remoção',
'Não interfere em curativos existentes',
'Confortável para uso prolongado',
'Permeável ao vapor',
'Descartável após uso'];

const productImages = [
  { src: '/1.png', alt: 'SWB - Produto imagem 1' },
  { src: '/2.png', alt: 'SWB - Produto imagem 2' },
  { src: '/3.png', alt: 'SWB - Produto imagem 3' }
];


export default function Marketplace() {
  const [carouselApi, setCarouselApi] = React.useState(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    onSelect();
    carouselApi.on('select', onSelect);
    carouselApi.on('reInit', onSelect);

    return () => {
      carouselApi.off('select', onSelect);
      carouselApi.off('reInit', onSelect);
    };
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Produto SWB — Sistema de Proteção Sacral | SWB Brasil</title>
        <meta name="description" content="Conheça o dispositivo SWB, barreira para proteção da região sacral. Notificação ANVISA nº 80220130014, Dispositivo Médico Classe I. Solicite uma proposta." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Produto SWB — Sistema de Proteção Sacral | SWB Brasil" />
        <meta property="og:description" content="Conheça o dispositivo SWB, barreira para proteção da região sacral. Notificação ANVISA nº 80220130014, Dispositivo Médico Classe I. Solicite uma proposta." />
        <meta property="og:image" content="https://swbbrasil.com.br/og-image.png" />
      </Helmet>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#0066B3] via-[#004080] to-[#002855] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00A878]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">
            
            <Badge className="bg-white/10 text-white border-white/20 mb-4">
              Produto Médico
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SWB - Sistema de Proteção Sacral
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Tecnologia inovadora para proteção da região sacral em pacientes incontinentes
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            
            {/* Product Video */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/k1HT-8EoG-c"
                  title="SWB - Vídeo de Aplicação"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full" />
                
              </div>
            </div>

            {/* Product Image Carousel */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <Carousel
                opts={{ loop: true }}
                setApi={setCarouselApi}
                className="w-full max-w-xl mx-auto"
              >
                <CarouselContent>
                  {productImages.map((image) => (
                    <CarouselItem key={image.src}>
                      <div className="flex justify-center">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-[65%] h-auto rounded-2xl"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {productImages.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      aria-label={`Ir para imagem ${index + 1}`}
                      onClick={() => carouselApi?.scrollTo(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        currentSlide === index ? 'bg-[#0066B3] w-6' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {currentSlide + 1} / {productImages.length}
                </span>
              </div>
            </div>

            {/* Quick Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00A878]" />
                Características Principais
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) =>
                <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A878] mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Product Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            
            <Tabs defaultValue="details" className="space-y-6">
              <TabsList className="grid grid-cols-2 bg-gray-100 p-1 rounded-xl">
                <TabsTrigger value="details" className="rounded-lg">Detalhes</TabsTrigger>
                <TabsTrigger value="quote" className="rounded-lg">Orçamento</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                {/* Description */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Descrição do Produto</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    O SWB (Sistema de Proteção para Região Sacral) é um dispositivo médico 
                    desenvolvido para criar uma barreira física protetora na região sacral de 
                    pacientes incontinentes. Fabricado em espuma de poliuretano de alta qualidade, 
                    o SWB minimiza o contato direto de fezes com curativos e área sacral, contribuindo 
                    para rotinas de higiene, troca de fraldas e otimização do cuidado.
                  </p>

                  <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <p className="text-amber-800 text-sm">
                      Produto para uso profissional. Consulte as instruções de uso antes da aplicação.
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid sm:grid-cols-[0.95fr_1.05fr]">
                    <div className="bg-gray-100">
                      <img
                        src="/SWB_BOX.jpeg"
                        alt="Caixa SWB com 30 unidades"
                        className="h-full min-h-64 w-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <Badge className="mb-4 w-fit bg-[#E9F6F1] text-[#006B4F] border-[#00A878]/20">
                        Caixa com 30 unidades
                      </Badge>
                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Valor da caixa
                      </p>
                      <div className="mt-2 flex items-end gap-2">
                        <span className="text-4xl font-bold text-gray-950">R$ 419,00</span>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-gray-700">
                        Embalagem fechada com 30 dispositivos SWB para uso profissional.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-[#0066B3]" />
                    Especificações Técnicas
                  </h3>
                  <div className="space-y-3">
                    {specifications.map((spec, index) =>
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      
                        <span className="text-gray-700">{spec.label}</span>
                        <span className="font-medium text-gray-900">{spec.value}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Regulatory */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#0066B3]" />
                    Informações Regulatórias
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-700">Número de Notificação ANVISA</span>
                      <span className="font-medium text-gray-900">80220130014</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-700">Classificação</span>
                      <span className="font-medium text-gray-900">Dispositivo Médico Classe I</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-700">Fabricação</span>
                      <span className="font-medium text-gray-900">Brasil</span>
                    </div>
                  </div>
                </div>

                {/* Instruções de Uso */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#0066B3]" />
                    Instruções de Uso
                  </h3>
                  <a
                    href="/arquivos/SWB_Instrucoes_de_uso.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-md hover:shadow-lg hover:border-[#0066B3]/40 transition-all cursor-pointer"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0066B3]/10">
                      <BookOpen className="w-6 h-6 text-[#0066B3]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">Instruções de Uso</p>
                      <p className="text-sm text-gray-600">Veja como aplicar o dispositivo corretamente</p>
                    </div>
                    <ArrowRight className="w-5 h-5 flex-shrink-0 text-gray-400 transition-all group-hover:translate-x-0.5 group-hover:text-[#0066B3]" />
                  </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5511947391805?text=Olá! Gostaria de solicitar um orçamento do SWB."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1">
                    
                    <Button className="w-full h-14 bg-[#00A878] hover:bg-[#008f66] text-white font-semibold text-lg rounded-xl">
                      <MessageCircle className="mr-2 w-5 h-5" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </TabsContent>

              <TabsContent value="quote">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Solicitar Orçamento</h2>
                  <p className="text-gray-700 mb-6">
                    Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas úteis.
                  </p>
                  <ContactForm showQuantity={true} />
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>);

}
