import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Shield, Mail } from 'lucide-react';

// Última atualização: 28 de agosto de 2026

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Política de Privacidade | SWB Brasil</title>
        <meta name="description" content="Como o SWB Brasil coleta, usa e protege os dados pessoais informados no site, em conformidade com a LGPD (Lei nº 13.709/2018)." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Política de Privacidade | SWB Brasil" />
        <meta property="og:description" content="Como o SWB Brasil coleta, usa e protege os dados pessoais informados no site, em conformidade com a LGPD (Lei nº 13.709/2018)." />
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
              <Shield className="h-4 w-4 text-[#00A878]" />
              Privacidade e proteção de dados
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Política de Privacidade
            </h1>
            <p className="text-lg text-white/80">
              Como o SWB Brasil trata os dados pessoais coletados neste site, em
              conformidade com a Lei nº 13.709/2018 (LGPD).
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
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">1. Quem somos</h2>
              <p>
                Este site é mantido por <strong>55.747.955 ERICO HENRIQUE DE LIMA
                ARAUJO - ME</strong>, inscrita no CNPJ sob o nº{' '}
                <strong>55.747.955/0001-07</strong>, com endereço na Rua Levindo
                Lopes, 391 - Savassi, Belo Horizonte - MG, responsável pela
                divulgação do Sistema de Proteção para Região Sacral (SWB) e pelo
                tratamento dos dados pessoais descritos nesta política.
              </p>
              <p className="mt-3">
                Para qualquer assunto relacionado a esta política ou ao tratamento
                dos seus dados pessoais, o canal de contato é o e-mail{' '}
                <a href="mailto:comercial@swbbrasil.com.br" className="text-[#00A878] font-medium hover:underline">
                  comercial@swbbrasil.com.br
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">2. Quais dados coletamos</h2>
              <p>
                Coletamos apenas os dados que você fornece voluntariamente ao
                preencher o formulário de contato disponível no site:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>Nome</li>
                <li>E-mail</li>
                <li>Telefone</li>
                <li>Instituição</li>
                <li>Mensagem livre (conteúdo que você optar por escrever)</li>
              </ul>
              <p className="mt-3">
                Não solicitamos dados pessoais sensíveis. O formulário de contato
                não deve ser utilizado para inserir dados de saúde, dados de
                pacientes ou quaisquer informações confidenciais de terceiros.
              </p>
              <p className="mt-3">
                A hospedagem deste site roda sobre a infraestrutura do GitHub Pages.
                No nível da plataforma, o GitHub pode registrar dados técnicos de
                acesso (como endereço IP, data/hora e user-agent) conforme descrito
                na{' '}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00A878] font-medium hover:underline"
                >
                  GitHub General Privacy Statement
                </a>
                , que rege esse tratamento de logs de acesso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">3. Para que usamos seus dados</h2>
              <p>Os dados coletados no formulário são utilizados exclusivamente para:</p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>Responder à sua solicitação comercial ou institucional;</li>
                <li>Entrar em contato para dar continuidade ao atendimento;</li>
                <li>Elaborar orçamentos, propostas e informações sobre o produto.</li>
              </ul>
              <p className="mt-3">
                Não utilizamos os dados para publicidade direcionada nem para
                decisões automatizadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">4. Base legal</h2>
              <p>
                O tratamento dos dados informados no formulário de contato tem como
                base legal o <strong>consentimento do titular</strong>, nos termos
                do art. 7º, inciso I, da LGPD, manifestado no momento do envio do
                formulário. Quando aplicável, o atendimento a solicitações também
                pode se apoiar no art. 7º, inciso V (execução de procedimentos
                preliminares relacionados a contrato a pedido do titular).
              </p>
              <p className="mt-3">
                Como não tratamos dados pessoais sensíveis, não se aplica o regime
                do art. 11 da LGPD. Caso você inclua espontaneamente na mensagem
                qualquer informação de saúde, ela será tratada apenas para
                responder ao seu contato e poderá ser eliminada a seu pedido.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">5. Compartilhamento de dados</h2>
              <p>
                <strong>
                  Não vendemos, alugamos nem compartilhamos seus dados pessoais com
                  terceiros para fins de marketing.
                </strong>
              </p>
              <p className="mt-3">
                Para viabilizar o recebimento das mensagens enviadas pelo formulário
                de contato, os dados passam pelos seguintes operadores, que os
                tratam apenas para essa finalidade e sob nossas instruções:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  <strong>EmailJS</strong> — processa o envio do formulário e
                  encaminha a mensagem para a nossa caixa de e-mail. A EmailJS é
                  sediada nos Estados Unidos, o que caracteriza{' '}
                  <strong>transferência internacional de dados</strong> para país
                  que pode não possuir grau de proteção de dados equivalente ao do
                  Brasil.
                </li>
                <li>
                  <strong>Google / Gmail</strong> — conta de e-mail conectada como
                  remetente das mensagens enviadas via EmailJS.
                </li>
                <li>
                  <strong>Hostinger</strong> — provedor de hospedagem da caixa de
                  e-mail corporativa <em>comercial@swbbrasil.com.br</em>, onde as
                  mensagens do formulário são efetivamente recebidas e armazenadas.
                </li>
              </ul>
              <p className="mt-3">
                Poderemos divulgar dados quando exigido por lei, ordem judicial ou
                requisição de autoridade competente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">6. Por quanto tempo guardamos</h2>
              <p>
                Mantemos os dados enviados pelo formulário de contato por até{' '}
                <strong>24 (vinte e quatro) meses após o último contato</strong> com
                você. Após esse período, os dados são eliminados ou anonimizados
                automaticamente, ressalvada a guarda necessária para o cumprimento
                de obrigações legais ou regulatórias.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">7. Seus direitos como titular</h2>
              <p>
                Nos termos do art. 18 da LGPD, você pode, a qualquer momento,
                solicitar:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso aos seus dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>
                  Anonimização, bloqueio ou eliminação de dados desnecessários ou
                  tratados em desconformidade com a lei;
                </li>
                <li>Portabilidade dos dados, quando aplicável;</li>
                <li>Eliminação dos dados tratados com base no consentimento;</li>
                <li>Informação sobre com quem compartilhamos seus dados;</li>
                <li>Revogação do consentimento.</li>
              </ul>
              <p className="mt-3">
                Para exercer esses direitos, escreva para{' '}
                <a href="mailto:comercial@swbbrasil.com.br" className="text-[#00A878] font-medium hover:underline">
                  comercial@swbbrasil.com.br
                </a>
                . Podemos solicitar informações para confirmar sua identidade antes
                de atender ao pedido.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">8. Segurança da informação</h2>
              <p>
                Adotamos medidas técnicas e organizacionais razoáveis para proteger
                os dados pessoais contra acesso não autorizado, perda ou uso
                indevido. Ainda assim, nenhum meio de transmissão pela internet ou
                de armazenamento eletrônico é totalmente seguro, e não podemos
                garantir segurança absoluta.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">9. Cookies</h2>
              <p>
                Este site não utiliza cookies de publicidade ou de rastreamento de
                comportamento de visitantes, nem ferramentas de analytics de
                terceiros para monitorar a navegação.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">10. Encarregado (DPO)</h2>
              <p>
                No momento, não há um Encarregado pelo Tratamento de Dados Pessoais
                formalmente nomeado. As solicitações relacionadas a dados pessoais e
                ao exercício dos direitos do titular devem ser encaminhadas para{' '}
                <a href="mailto:comercial@swbbrasil.com.br" className="text-[#00A878] font-medium hover:underline">
                  comercial@swbbrasil.com.br
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0066B3] mb-3">11. Alterações desta política</h2>
              <p>
                Esta política pode ser atualizada a qualquer momento. A versão
                vigente é sempre a publicada nesta página, com a data de última
                atualização indicada no topo.
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
              to={createPageUrl('TermosDeUso')}
              className="text-[#0066B3] font-semibold hover:underline"
            >
              Ver Termos de Uso →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
