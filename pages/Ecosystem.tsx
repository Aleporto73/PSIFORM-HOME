
import React from 'react';
import { Page } from '../types';
import { CORE_PRODUCTS, ESSENTIAL_TOOLS } from '../constants';

interface EcosystemProps {
  onNavigate: (page: Page) => void;
}

const Ecosystem: React.FC<EcosystemProps> = ({ onNavigate }) => {
  return (
    <div className="py-20 animate-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="serif text-4xl text-slate-900 mb-6">Ecossistema Psiform</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Aqui, nada concorre. Cada solução tem escopo claro, papel definido e responsabilidade preservada. 
            Organizamos nossas soluções por profundidade técnica e finalidade real.
          </p>
        </div>

        {/* Core Layer */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-widest text-sm flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px]">1</span>
              Camada 1 — Plataformas CORE
            </h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <p className="text-sm text-slate-500 mb-10 max-w-2xl">
            Uso contínuo, profundidade técnica e gestão de dados sensíveis. Sistemas recorrentes que sustentam a prática profissional de longo prazo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PRODUCTS.map((prod) => (
              <div key={prod.id} className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{prod.name}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{prod.description}</p>
                </div>
                <button 
                  onClick={() => onNavigate(prod.id as Page)}
                  className="w-full py-3 text-indigo-600 border border-indigo-100 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors"
                >
                  {prod.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Layer */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-widest text-sm flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px]">2</span>
              Camada 2 — Ferramentas Essenciais
            </h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <p className="text-sm text-slate-500 mb-10 max-w-2xl">
            Portas de entrada, valor imediato e acesso vitalício. Recursos focados em demandas operacionais imediatas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ESSENTIAL_TOOLS.map((tool) => (
              <div key={tool.id} className="bg-white border border-slate-200 p-8 rounded-xl flex items-center justify-between hover:shadow-lg transition-all">
                <div className="max-w-md">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{tool.description}</p>
                  <button 
                    onClick={() => onNavigate(tool.id as Page)}
                    className="text-slate-900 font-bold text-sm underline underline-offset-8 hover:text-indigo-600 transition-colors"
                  >
                    {tool.cta}
                  </button>
                </div>
                <div className="hidden sm:block w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
