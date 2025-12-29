import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

// Fix: Moved MapLink component definition outside the Home component and used React.FC with explicit prop types.
// This ensures that the component is correctly recognized as accepting children by the JSX parser.
interface MapLinkProps {
  id: Page;
  children: React.ReactNode;
  onNavigate: (page: Page) => void;
}

const MapLink: React.FC<MapLinkProps> = ({ id, children, onNavigate }) => (
  <button
    onClick={() => onNavigate(id)}
    className="hover:text-white hover:bg-teal-500/20 px-1 rounded transition-all duration-300 cursor-pointer border-b border-transparent hover:border-teal-400/50"
  >
    {children}
  </button>
);

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const scrollToArchitecture = () => {
    const section = document.getElementById('arquitetura');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0f172a] text-slate-200">
      {/* Seção 1: Hero - Espaçamento Amplo e Foco Tipográfico */}
      <section className="relative pt-48 pb-40 px-6 overflow-hidden bg-tech-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1),transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 text-teal-400 text-[9.35px] font-black tracking-[0.4em] uppercase rounded-full mb-10 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></span>
            PSIFORM — MARCA INSTITUCIONAL
          </span>
          
          <h1 className="text-[55px] md:text-[66px] font-extrabold text-white mb-10 leading-[1] tracking-tighter max-w-5xl mx-auto">
            Psiform — Ecossistema Profissional para <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Psicologia, Psicopedagogia e Educação</span>
          </h1>
          
          <p className="text-[17.6px] md:text-[19.8px] text-slate-400 mb-14 leading-relaxed max-w-3xl mx-auto font-medium tracking-tight">
            Soluções organizadas por profundidade de uso, responsabilidade técnica e delimitação institucional clara.
          </p>
          
          <div className="flex flex-col items-center gap-6">
             <button 
              onClick={scrollToArchitecture}
              className="px-10 py-5 bg-indigo-600 hover:bg-teal-500 text-white font-black text-[11.55px] uppercase tracking-[0.3em] rounded transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(20,184,166,0.2)] hover:-translate-y-0.5"
            >
              Explorar Arquitetura
            </button>
            
            <button 
              onClick={scrollToArchitecture}
              className="group inline-flex items-center gap-2 text-slate-500 hover:text-white font-bold transition-all text-[9.35px] uppercase tracking-[0.4em]"
            >
              Ver arquitetura do ecossistema
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Seção 2: Papel Institucional - Cards com Design de "White Paper" */}
      <section className="py-32 bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
            <div className="lg:col-span-5">
              <h2 className="text-[44px] md:text-[55px] font-black text-white mb-8 tracking-tighter leading-none">
                O papel institucional da Psiform
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[19.8px] text-slate-400 leading-relaxed font-medium tracking-tight">
                A Psiform atua como instância institucional de organização, curadoria, validação e direcionamento de um ecossistema de soluções independentes para profissionais da psicologia, psicopedagogia e educação.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
            {[
              { 
                title: "ATUAÇÃO INSTITUCIONAL", 
                desc: "A Psiform atua no nível institucional, exercendo governança, organização, curadoria e direcionamento do ecossistema, sem executar práticas clínicas, educacionais ou operacionais." 
              },
              { 
                title: "ÂMBITO DE ATUAÇÃO", 
                desc: "A Psiform define diretrizes institucionais que orientam as plataformas do ecossistema, sem interferir na execução clínica, educacional ou operacional." 
              },
              { 
                title: "ARQUITETURA DO ECOSSISTEMA", 
                desc: "As plataformas do ecossistema operam de forma independente, com escopo claramente definido, autonomia técnica e responsabilidades próprias." 
              },
              { 
                title: "DECISÃO PROFISSIONAL", 
                desc: "A responsabilidade técnica e a tomada de decisão permanecem integralmente sob responsabilidade do profissional habilitado." 
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 bg-[#0f172a] hover:bg-[#1e1b4b] transition-all duration-700">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-11 h-px bg-teal-500/30 group-hover:w-15 group-hover:bg-teal-500 transition-all duration-700"></span>
                  <h4 className="font-black text-white uppercase tracking-[0.3em] text-[9.35px]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-400 group-hover:text-slate-200 text-[17.6px] leading-relaxed font-medium transition-colors duration-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3: Arquitetura - Aplicação da Paleta Elegante Escura */}
      <section id="arquitetura" className="py-32 bg-[#0f172a] relative border-t border-white/5">
        <div className="absolute inset-0 bg-tech-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <header className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="serif text-[55px] md:text-[66px] text-white mb-8 tracking-tight">Um Ecossistema, Duas Camadas, Nenhuma Concorrência</h2>
            <p className="text-slate-400 italic text-[19.8px] leading-relaxed font-light">
              Estruturamos soluções que não competem, mas se complementam em uma jornada profissional lógica e defensável.
            </p>
          </header>

          <div className="mb-32">
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-[10.45px] font-black uppercase tracking-[0.5em] text-indigo-400 shrink-0">Camada 1 — Plataformas CORE</h3>
              <div className="h-px bg-white/10 flex-grow"></div>
            </div>
            
            <p className="text-slate-300 mb-16 max-w-2xl text-[19.8px] leading-relaxed font-medium tracking-tight">Sistemas de profundidade para a prática contínua, sustentando a clínica e a educação com rigor técnico.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "AbaSimples | Intervenção ABA", desc: "Modelo financeiro previsível e biblioteca com 170+ protocols para escala clínica sem sacrifício técnico.", page: "abasimples" },
                { name: "NeuroRastreio | Rastreio Neurofuncional", desc: "Mapeamento objetivo de funções cognitivas usando paradigmas científicos clássicos para apoio à decisão.", page: "neurorastreio" },
                { name: "Psiway | Clínica TCC", desc: "Organização do raciocínio clínico Beck-style conectando anamnese, sessões e evolução contínua.", page: "psiway" },
                { name: "PsicoPEI | Psicopedagogia", desc: "Transforma o PEI de um documento estático em um processo clínico vivo com relatórios baseados em evidência.", page: "psicopei" }
              ].map((prod, idx) => (
                <div key={idx} className="bg-white/5 p-11 rounded-lg border border-white/5 hover:border-indigo-500/50 hover:bg-white/[0.07] transition-all duration-700 group relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-[60px] group-hover:bg-indigo-500/10 transition-all"></div>
                  <h4 className="text-[26.4px] font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors leading-tight">{prod.name}</h4>
                  <p className="text-slate-400 text-[17.6px] mb-8 leading-relaxed font-medium">{prod.desc}</p>
                  <button 
                    onClick={() => onNavigate(prod.page as Page)} 
                    className="flex items-center gap-3 text-indigo-400 text-[9.35px] font-black uppercase tracking-[0.4em] group-hover:gap-6 transition-all duration-500 group-hover:text-white"
                  >
                    Conhecer a plataforma <span className="text-[19.8px]">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-[10.45px] font-black uppercase tracking-[0.5em] text-teal-400 shrink-0">Camada 2 — Ferramentas Essenciais</h3>
              <div className="h-px bg-white/10 flex-grow"></div>
            </div>

            <p className="text-slate-300 mb-16 max-w-2xl text-[19.8px] leading-relaxed font-medium tracking-tight">Portas de Entrada com Valor Imediato para necessidades operacionais específicas.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-11 rounded-lg border border-white/5 hover:border-teal-500/50 hover:bg-white/[0.07] transition-all duration-700 group relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 blur-[60px] group-hover:bg-teal-500/10 transition-all"></div>
                <h4 className="text-[26.4px] font-bold mb-6 text-white group-hover:text-teal-400 transition-colors leading-tight">Psiform Formulários</h4>
                <p className="text-slate-400 text-[17.6px] mb-8 leading-relaxed font-medium">+300 formulários revisados e sistema de assinatura eletrônica jurídica (Lei 14.063/20).</p>
                <button 
                  onClick={() => onNavigate('psiform-forms')} 
                  className="flex items-center gap-3 text-teal-400 text-[9.35px] font-black uppercase tracking-[0.4em] group-hover:gap-6 transition-all duration-500 group-hover:text-white"
                >
                  Acessar agora <span className="text-[19.8px]">→</span>
                </button>
              </div>
              <div className="bg-white/5 p-11 rounded-lg border border-white/5 hover:border-teal-500/50 hover:bg-white/[0.07] transition-all duration-700 group relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 blur-[60px] group-hover:bg-teal-500/10 transition-all"></div>
                <h4 className="text-[26.4px] font-bold mb-6 text-white group-hover:text-teal-400 transition-colors leading-tight">PsicopedagoHUB</h4>
                <p className="text-slate-400 text-[17.6px] mb-8 leading-relaxed font-medium">Recursos práticos, planilhas e assistentes de apoio pedagógico alinhados à BNCC.</p>
                <button 
                  onClick={() => onNavigate('psicopedagohub')} 
                  className="flex items-center gap-3 text-teal-400 text-[9.35px] font-black uppercase tracking-[0.4em] group-hover:gap-6 transition-all duration-500 group-hover:text-white"
                >
                  Acessar agora <span className="text-[19.8px]">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Mapa de Governança - Minimalismo Técnico */}
      <section className="py-40 bg-[#020617] relative border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-28">
            <h2 className="serif text-[44px] md:text-[66px] text-white mb-8 tracking-tight">Estrutura de Governança Psiform</h2>
            <div className="h-[2.5px] w-28 bg-teal-500 mx-auto shadow-[0_0_15px_rgba(20,184,166,0.6)]"></div>
          </div>
          
          <div className="bg-[#0f172a] p-12 md:p-24 rounded-2xl border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.6)] overflow-x-auto relative">
            <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
            <div className="text-teal-400 font-mono text-[14.3px] leading-[2.4] text-left relative z-10 opacity-90 whitespace-pre">
{`        PSIFORM
(GOVERNO, CURADORIA, VALIDAÇÃO)
         |
         ├─ PLATAFORMAS CORE
         │  (Uso Contínuo • Dados Sensíveis)
         │  ├─ `}<MapLink id="abasimples" onNavigate={onNavigate}>AbaSimples (Intervenção ABA)</MapLink>{`
         │  ├─ `}<MapLink id="neurorastreio" onNavigate={onNavigate}>NeuroRastreio (Neurofuncional)</MapLink>{`
         │  ├─ `}<MapLink id="psiway" onNavigate={onNavigate}>Psiway (Psicológica – TCC)</MapLink>{`
         │  └─ `}<MapLink id="psicopei" onNavigate={onNavigate}>PsicoPEI (Psicopedagógica)</MapLink>{`
         │
         └─ FERRAMENTAS ESSENCIAIS
            (Valor Imediato • Entrada Rápida)
            ├─ `}<MapLink id="psiform-forms" onNavigate={onNavigate}>Psiform – Formulários</MapLink>{`
            └─ `}<MapLink id="psicopedagohub" onNavigate={onNavigate}>PsicopedagoHUB</MapLink>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-slate-600 font-mono text-[10.45px] uppercase tracking-[0.6em] font-black">Blueprint de Integração Institucional v2.0 // EST. 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;