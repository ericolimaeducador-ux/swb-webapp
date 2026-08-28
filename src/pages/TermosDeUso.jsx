import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { FileText, Mail } from 'lucide-react';

// Última atualização: 28 de agosto de 2026

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Termos de Uso | SWB Brasil</title>
        <meta name="description" content="Condições de navegação e uso do site institucional do SWB Brasil: propriedade intelectual, conteúdo informativo e limitações de responsabilidade." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Termos de Uso | SWB Brasil" />
        <meta property="og:description" content="Condições de navegação e uso do site institucional do SWB Brasil: propriedade intelectual, conteúdo informativo e limitações de responsabilidade." />
        <meta property="og:image" content="https://swbbrasil.com.br/SWBFOTOMARKETING.png" />
      </Helmet>
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/85">
              <FileText className="h-4 w-4 text-[#00A878]" />
              Condições de uso do site
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Termos de Uso
            </h1>
            <p className="text-lg text-white/80">
              Condições para navegação e uso do site institucional do SWB Brasil.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <p className="text-sm text-gray-500 mb-10">
            Última atualização: 28 de agosto de 2026
          </p>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">1. Aceitação dos termos</h2>
              <p>
                Ao acessar e utilizar este site, você declara ter lido e concordado
                com estes Termos de Uso e com a{' '}
                <Link to={createPageUrl('PoliticaPrivacidade')} className="text-[#00A878] font-medium hover:underline">
                  Política de Privacidade
                </Link>
                . Se não concordar com qualquer condição, não utilize o site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">2. Sobre o site</h2>
              <p>
                Este site tem caráter exclusivamente informativo e institucional
                sobre o Sistema de Proteção para Região Sacral (SWB). O conteúdo
                pode ser alterado, atualizado ou removido a qualquer momento, sem
                aviso prévio.
              </p>
              <p className="mt-3">
                O site é mantido por <strong>55.747.955 ERICO HENRIQUE DE LIMA
                ARAUJO - ME</strong>, inscrita no CNPJ sob o nº{' '}
                <strong>55.747.955/0001-07</strong>, com endereço na Rua Levindo
                Lopes, 391 - Savassi, Belo Horizonte - MG.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">3. Uso permitido</h2>
              <p>Ao utilizar o site, você se compromete a não:</p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>Utilizá-lo para qualquer finalidade ilícita ou não autorizada;</li>
                <li>
                  Tentar obter acesso não autorizado a sistemas, servidores ou
                  dados relacionados ao site;
                </li>
                <li>
                  Introduzir código malicioso ou realizar ações que prejudiquem o
                  funcionamento do site;
                </li>
                <li>
                  Reproduzir, distribuir ou explorar comercialmente o conteúdo sem
                  autorização.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">4. Propriedade intelectual</h2>
              <p>
                A marca "SWB Sacral Protection" é objeto de pedido de registro
                depositado junto ao Instituto Nacional da Propriedade Industrial
                (INPI), processo nº 943945607, atualmente em fase de análise. O
                dispositivo SWB é também objeto de pedido de patente nacional
                depositado junto ao INPI sob o nº 2006283125 (Patente Nacional nº
                119578), atualmente em fase de exame técnico. Enquanto os pedidos
                estiverem em análise, o uso não autorizado de marca, layout,
                textos, imagens ou da tecnologia descrita no pedido de patente
                permanece vedado, sob as normas de concorrência desleal e proteção
                de propriedade intelectual aplicáveis, independentemente da
                concessão final dos registros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">5. Conteúdo informativo e de saúde</h2>
              <p>
                As informações sobre o produto e os conteúdos científicos
                publicados neste site têm finalidade informativa e não substituem a
                avaliação, o diagnóstico ou a orientação de profissionais de saúde
                habilitados. A decisão de uso do produto em contexto assistencial é
                de responsabilidade do profissional e da instituição.
              </p>
              <p className="mt-3">
                O SWB é regularizado junto à ANVISA sob a{' '}
                <strong>Notificação nº 80220130014</strong>, na condição de{' '}
                <strong>Dispositivo Médico Classe I (baixo risco)</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">6. Links para sites de terceiros</h2>
              <p>
                O site pode conter links para páginas externas (redes sociais,
                referências científicas, entre outros). Não temos controle sobre o
                conteúdo desses sites e não nos responsabilizamos por eles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">7. Limitação de responsabilidade</h2>
              <p>
                O site é fornecido "no estado em que se encontra". Empregamos
                esforços razoáveis para manter as informações corretas e o site
                disponível, mas não garantimos ausência de erros, interrupções ou
                indisponibilidades. Na máxima extensão permitida pela legislação
                aplicável, não nos responsabilizamos por danos decorrentes do uso
                ou da impossibilidade de uso do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">8. Formulário de contato</h2>
              <p>
                Ao enviar mensagens pelo formulário de contato, você é responsável
                pela veracidade das informações fornecidas e concorda com o
                tratamento dos dados conforme a{' '}
                <Link to={createPageUrl('PoliticaPrivacidade')} className="text-[#00A878] font-medium hover:underline">
                  Política de Privacidade
                </Link>
                . Não insira dados de pacientes ou informações sigilosas de
                terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">9. Alterações dos termos</h2>
              <p>
                Estes Termos podem ser modificados a qualquer momento. A versão
                vigente é sempre a publicada nesta página, com a data de última
                atualização indicada no topo. O uso continuado do site após
                alterações representa concordância com os novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">10. Legislação aplicável e foro</h2>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do
                Brasil. Fica eleito o foro da comarca de{' '}
                <strong>Belo Horizonte - MG</strong> para dirimir eventuais
                controvérsias, com renúncia a qualquer outro, por mais privilegiado
                que seja.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">11. Contato</h2>
              <p>
                Dúvidas sobre estes Termos podem ser enviadas para{' '}
                <a href="mailto:comercial@swbbrasil.com.br" className="text-[#00A878] font-medium hover:underline">
                  comercial@swbbrasil.com.br
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-5 h-5 text-[#00A878]" />
              <a href="mailto:comercial@swbbrasil.com.br" className="font-medium hover:underline">
                comercial@swbbrasil.com.br
              </a>
            </div>
            <Link
              to={createPageUrl('PoliticaPrivacidade')}
              className="text-[#0066B3] font-semibold hover:underline"
            >
              Ver Política de Privacidade →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
