import React from 'react';
import { Page } from '../types';

interface ToolEssentialProps {
  type: 'psiform-forms' | 'psicopedagohub';
  onNavigate: (page: Page) => void;
}

const ToolEssential: React.FC<ToolEssentialProps> = ({ type, onNavigate }) => {
  const content = {
    'psiform-forms': {
      title: "Psiform — Formulários Profissionais",
      subtitle: "Documentos revisados e assinatura eletrônica jurídica",
      description: "Hub de apoio prático com mais de 300 formulários editáveis e modelos técnicos revisados conforme as resoluções vigentes.",
      features: [
        "Banco de 300+ documentos (Word/Canva)",
        "Assinatura eletrônica (Lei 14.063/20)",
        "Assistentes GPT de apoio estrutural",
        "Planilhas de correção de dados",
        "Acesso vitalício com pagamento único"
      ],
      limits: "Não é prontuário completo. Atua como suporte documental imediato.",
      cta: "Acessar agora",
      url: "https://psiform.com.br" // Placeholder or specific link if known
    },
    'psicopedagohub': {
      title: "PsicopedagoHUB",
      subtitle: "Ferramentas práticas para Psicopedagogia",
      description: "Plataforma operacional para atuação imediata com materiais prontos e alinhados à BNCC.",
      features: [
        "230+ formulários editáveis",
        "CogniTest: 500+ atividades digitais",
        "Planilhas de correção automática",
        "Assistentes GPT para relatórios BNCC",
        "Assinatura eletrônica jurídica incluída"
      ],
      limits: "Recurso operacional. Não substitui plataformas CORE.",
      cta: "Acessar agora",
      url: "https://psicopedagohub.com.br"
    }
  };

  const t = content[type];

  return (
    <div className="bg-[#0f172a] min-h-screen pt-32 pb-16 text-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-up">
            <span className="text-teal-400 font-black tracking-[0.5em] text-[9.35px] uppercase mb-6 block">Ferramenta Essencial — Camada 2</span>
            <h1 className="serif text-[44px] md:text-[55px] text-white mb-6 tracking-tight leading-none">{t.title}</h1>
            <p className="text-[22px] text-indigo-300 mb-8 italic opacity-90 font-light tracking-tight leading-relaxed">"{t.subtitle}"</p>
            <p className="text-slate-400 leading-relaxed mb-10 text-[19.8px] font-medium tracking-tight">{t.description}</p>
            
            <div className="p-9 bg-white/5 rounded-lg border border-white/5 mb-10 shadow-xl relative group overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 opacity-50"></div>
              <h3 className="font-black text-white text-[10.45px] uppercase tracking-[0.5em] mb-6">O que você encontra:</h3>
              <ul className="space-y-4">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-[17.6px] font-medium text-slate-300">
                    <span className="w-2.5 h-2.5 bg-teal-500 rounded-full shadow-[0_0_6px_#14b8a6]"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-11 py-5 bg-teal-500 hover:bg-white hover:text-slate-900 text-slate-950 font-black text-[11.55px] uppercase tracking-[0.5em] rounded transition-all duration-500 shadow-[0_15px_30px_rgba(20,184,166,0.2)] text-center"
            >
              {t.cta}
            </a>
          </div>

          <div className="relative animate-fade-up delay-200 hidden lg:block">
            <div className="aspect-square bg-[#020617] rounded-lg overflow-hidden border border-white/5 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
              <div className="text-white/5 text-[12.65rem] font-black serif select-none group-hover:scale-105 transition-transform duration-[2000ms]">
                {t.title.charAt(0)}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 p-9 bg-indigo-950/40 backdrop-blur-xl rounded-lg border border-indigo-500/30 max-w-[350px] shadow-2xl">
              <h4 className="font-black text-white text-[9.35px] uppercase tracking-[0.5em] mb-4">Limites Institucionais</h4>
              <p className="text-indigo-200 text-[15.4px] leading-relaxed font-medium">
                {t.limits}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center">
          <button 
            onClick={() => onNavigate('home')}
            className="text-slate-600 hover:text-white transition-all text-[10.45px] font-black uppercase tracking-[0.5em] group flex items-center gap-3 mx-auto"
          >
            <span className="group-hover:-translate-x-1.5 transition-transform">←</span> Voltar para o Início
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolEssential;