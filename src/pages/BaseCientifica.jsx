import React from 'react';
import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

const artigoModules = import.meta.glob('../artigos/*', {
  eager: true,
  import: 'default',
  query: '?url'
});

const formatTitle = (filePath) => {
  const fileName = filePath.split('/').pop() || '';
  const titleWithoutExtension = fileName.replace(/\.[^/.]+$/, '');
  return titleWithoutExtension
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const articles = Object.entries(artigoModules)
  .map(([path, url]) => ({
    path,
    url,
    title: formatTitle(path)
  }))
  .sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));

export default function BaseCientifica() {
  return (
    <div className="min-h-screen bg-slate-50">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <article
                  key={article.path}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0066B3]/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-[#0066B3]" />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-4">{article.title}</h2>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#0066B3] hover:bg-[#004080] text-white">
                      Abrir artigo
                      <ExternalLink className="w-4 h-4 ml-2" />
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
