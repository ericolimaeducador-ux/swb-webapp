import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

const artigoModules = import.meta.glob('../artigos/*', {
  eager: true,
  import: 'default',
  query: '?url'
});

const artigoContents = import.meta.glob('../artigos/*.html', {
  eager: true,
  import: 'default',
  query: '?raw'
});

const formatTitle = (filePath) => {
  const fileName = filePath.split('/').pop() || '';
  const titleWithoutExtension = fileName.replace(/\.[^/.]+$/, '');
  return titleWithoutExtension
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const extractMeta = (html = '', filePath = '') => {
  const title =
    html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]
      ?.replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim() || formatTitle(filePath);

  const summary =
    html.match(/<p[^>]*class=["'][^"']*article-summary[^"']*["'][^>]*>([\s\S]*?)<\/p>/i)?.[1]
      ?.replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim() || 'Documento técnico-científico disponível para consulta.';

  const badges = Array.from(html.matchAll(/<span[^>]*class=["'][^"']*badge[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi))
    .map((match) => match[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  return { title, summary, badges };
};

const articles = Object.entries(artigoModules)
  .filter(([path]) => path.toLowerCase().endsWith('.html'))
  .map(([path, url]) => ({
    path,
    url,
    ...extractMeta(artigoContents[path], path)
  }))
  .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));

export default function BaseCientifica() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Base Científica e Evidências | SWB Brasil</title>
        <meta name="description" content="Artigos, revisões e estudos sobre contaminação fecal de curativos sacrais, higiene de feridas e o racional científico por trás do Sistema de Proteção SWB." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Base Científica e Evidências | SWB Brasil" />
        <meta property="og:description" content="Artigos, revisões e estudos sobre contaminação fecal de curativos sacrais, higiene de feridas e o racional científico por trás do Sistema de Proteção SWB." />
        <meta property="og:image" content="https://swbbrasil.com.br/og-image.png" />
      </Helmet>
      <section className="pt-16 pb-12 bg-gradient-to-br from-[#0066B3] to-[#004080]">
        <div className="container mx-auto px-6 lg:px-12">
          <Link to={createPageUrl('Home')}>
            <Button variant="secondary" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para início
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Base Científica
          </h1>
          <p className="text-white/90 text-lg max-w-3xl">
            Confira os artigos e documentos que fundamentam as evidências científicas do SWB.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          {articles.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {articles.map((article) => (
                <article
                  key={article.path}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0066B3]/10">
                      <FileText className="h-6 w-6 text-[#0066B3]" />
                    </div>
                    <div className="min-w-0">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {article.badges.slice(0, 3).map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl font-semibold leading-snug text-slate-950">{article.title}</h2>
                    </div>
                  </div>
                  <p className="mb-6 line-clamp-4 flex-1 text-sm leading-6 text-slate-600">
                    {article.summary}
                  </p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#0066B3] text-white hover:bg-[#004080]">
                      Abrir artigo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Nenhum artigo encontrado</h2>
              <p className="text-slate-700">
                Adicione os arquivos dos artigos na pasta src/artigos para que apareçam nesta página.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
