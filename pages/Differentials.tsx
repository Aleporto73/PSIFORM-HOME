
import React from 'react';
import { Page } from '../types';

interface DifferentialsProps {
  onNavigate: (page: Page) => void;
}

const Differentials: React.FC<DifferentialsProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-white py-24 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest text-[10px] uppercase mb-4 block">Base Institucional</span>
          <h1 className="serif text-4xl md:text-5xl text-slate-900 mb-8 leading-tight">
            Diferenciais Estruturantes do <span className="italic">Ecossistema Psiform</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            A Psiform não oferece atalhos clínicos. Oferecemos estrutura, rigor técnico e blindagem ética para profissionais que valorizam a responsabilidade técnica em saúde e educação.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 space-y-24">
          
          {/* 1. Governance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="serif text-2xl text-slate-900 mb-6">1. Governança Institucional</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Como marca guarda-chuva, a Psiform atua como uma instância superior de curadoria e validação. Nosso papel é garantir que cada solução inserida no ecossistema cumpra requisitos rigorosos de qualidade técnica e segurança institucional, eliminando a fragmentação e a incerteza profissional sobre as ferramentas adotadas na prática clínica.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm italic text-slate-500 text-sm leading-relaxed">
              "A Psiform não é o executor, mas o garantidor do rigor ético que sustenta a confiança entre o profissional e a tecnologia."
            </div>
          </div>

          {/* 2. Layered Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="order-2 md:order-1 flex flex-col gap-4">
              <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                <h4 className="font-bold text-indigo-900 text-xs uppercase mb-2">Camada 1 — CORE</h4>
                <p className="text-indigo-800/70 text-xs">Uso contínuo e gestão de dados sensíveis para profundidade técnica.</p>
              </div>
              <div className="p-6 bg-slate-100 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-xs uppercase mb-2">Camada 2 — ESSENCIAL</h4>
                <p className="text-slate-600 text-xs">Entrada rápida e valor imediato para suporte operacional diário.</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="serif text-2xl text-slate-900 mb-6">2. Arquitetura em Camadas</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nossa hierarquia funcional separa claramente soluções de uso contínuo (CORE) de ferramentas operacionais (Essenciais). Esta estrutura garante que o profissional utilize a ferramenta certa para o nível de complexidade exigido, evitando o uso inadequado de recursos e promovendo uma jornada profissional organizada e defensável.
              </p>
            </div>
          </div>

          {/* 3. Ethics & 4. No Competition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="serif text-2xl text-slate-900 mb-6">3. Ética e Responsabilidade</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Nosso posicionamento é inegociável: a tecnologia serve como apoio, nunca como substituta da decisão humana. Cumprimos rigorosamente com:
              </p>
              <ul className="space-y-2 text-xs text-slate-500 font-mono">
                <li>• LGPD (Privacidade de Dados)</li>
                <li>• Resolução CFP nº 06/2019</li>
                <li>• Lei nº 14.063/20 (Assinaturas)</li>
              </ul>
            </div>
            <div>
              <h2 className="serif text-2xl text-slate-900 mb-6">4. Sinergia sem Competição</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                No ecossistema Psiform, as soluções são complementares. Não existe sobreposição de escopo entre AbaSimples, Psiway, NeuroRastreio ou PsicoPEI. Cada plataforma resolve um problema estrutural específico do setor, permitindo que o profissional transite entre as soluções de forma fluida e coerente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Professional Focus & CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="serif text-3xl text-slate-900 mb-8">Foco no Profissional</h2>
          <p className="text-slate-600 leading-relaxed mb-12">
            Entregamos clareza e estrutura. Nosso objetivo final é que o profissional tenha em mãos um ecossistema que proteja sua prática e eleve o padrão técnico dos atendimentos prestados, com transparência total sobre o que cada ferramenta pode e não pode realizar.
          </p>
          <button 
            onClick={() => onNavigate('ecossistema')}
            className="px-10 py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl active:scale-95"
          >
            Conhecer o Ecossistema Psiform
          </button>
        </div>
      </section>
    </div>
  );
};

export default Differentials;
