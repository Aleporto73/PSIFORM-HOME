import React from 'react';
import { Page } from '../types';

interface ProductCoreProps {
  type: 'abasimples' | 'psiway' | 'neurorastreio' | 'psicopei';
  onNavigate: (page: Page) => void;
}

const ProductCore: React.FC<ProductCoreProps> = ({ type, onNavigate }) => {
  const content = {
    abasimples: {
      title: "AbaSimples",
      subtitle: "Intervenção ABA com padrão internacional real",
      description: "Plataforma digital voltada à organização, aplicação e acompanhamento da prática ABA, desenvolvida para profissionais e clínicas que atuam no atendimento de pessoas com TEA.",
      problem: "O crescimento dos diagnósticos exige escala clínica com responsabilidade técnica. Modelos baseados em cobrança por paciente penalizam clínicas e criam barreiras econômicas.",
      solution: "Ruptura com a lógica de cobrança progressiva. Valor fixo previsível, biblioteca com 170+ protocolos e PEI automático.",
      features: [
        "Biblioteca organizada em 12 domínios funcionais",
        "Cadastro de protocolos personalizados",
        "Padronização automática de critérios de evolução",
        "Gestão de equipe e acessos controlados",
        "Conformidade integral com LGPD"
      ],
      ethical: "O AbaSimples não substitui a avaliação diagnóstica nem a decisão profissional. É uma ferramenta de organização da prática.",
      cta: "Conhecer a plataforma AbaSimples",
      url: "https://abasimples.com.br"
    },
    psiway: {
      title: "Psiway",
      subtitle: "Sistema clínico especializado em Terapia Cognitivo-Comportamental",
      description: "Plataforma estruturada para psicólogos que atuam com TCC, com foco em organização do raciocínio clínico e documentação técnica rigorosa.",
      problem: "A prática clínica em TCC exige coerência longitudinal e documentação clara. No dia a dia, o tempo é consumido por tarefas administrativas fragmentadas.",
      solution: "Organização do pensamento clínico modelo Beck. Anamnese estruturada, plano de tratamento dinâmico e evolução longitudinal.",
      features: [
        "Anamnese guiada por roteiro técnico TCC",
        "Associação dinâmica de pensamentos automáticos",
        "Registro e síntese estruturada de sessões",
        "Envio de escalas via Web App ao paciente",
        "Agenda com atendente virtual"
      ],
      ethical: "O Psiway não diagnostica nem prescreve. Sugestões técnicas atuam como apoio, mantendo a responsabilidade integral com o psicólogo.",
      cta: "Conhecer a plataforma Psiway",
      url: "https://psiway.com.br"
    },
    neurorastreio: {
      title: "NeuroRastreio",
      subtitle: "Plataforma modular de rastreio neurofuncional",
      description: "Instrumento digital de rastreio neurocognitivo funcional destinado exclusivamente ao uso profissional como apoio à decisão clínica e educacional.",
      problem: "Decisões clínicas sem baseline funcional ou dados organizados dificultam o encaminhamento e o monitoramento precoce.",
      solution: "O NeuroRastreio CORE avalia indicadores transversais de ansiedade e regulação emocional através de paradigmas cognitivos.",
      features: [
        "Módulo CORE: Ansiedade e Regulação",
        "Arquitetura Modular em integração",
        "Paradigmas: Stroop, Flanker, Go/No-Go",
        "Relatórios técnicos e simplificados",
        "Equivalência conceitual, não psicométrica"
      ],
      ethical: "NÃO é diagnóstico. NÃO é teste psicológico. É instrumento de rastreio que antecede avaliações clínicas formais.",
      cta: "Conhecer a plataforma NeuroRastreio",
      url: "https://neurorastreio.com.br"
    },
    psicopei: {
      title: "PsicoPEI",
      subtitle: "Plataforma clínica para Psicopedagogia e PEI",
      description: "Sistema clínico focado na construção formal de Planos Educacionais Individualizados (PEI) com acompanhamento longitudinal.",
      problem: "O PEI é um direito legal, mas frequentemente improvisado. Psicopedagogos carecem de ferramentas para demonstrar evolução real.",
      solution: "Transformação do PEI em um processo vivo. Da anamnese estruturada ao acompanhamento gráfico de evolução assistida.",
      features: [
        "Anamnese psicopedagógica completa",
        "Geração estruturada de PEI e PDI",
        "Registro longitudinal com gráficos",
        "Sugestões de atividades pedagógicas",
        "Comunicação com pais e responsáveis"
      ],
      ethical: "O PsicoPEI não substitui o julgamento profissional. Ele organiza o raciocínio psicopedagógico tornando o processo transparente.",
      cta: "Conhecer a plataforma PsicoPEI",
      url: "https://psicopei.com.br"
    }
  };

  const p = content[type];

  return (
    <div className="bg-[#0f172a] text-slate-200">
      {/* Hero */}
      <section className="bg-[#020617] pt-32 pb-24 px-6 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1),transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-teal-400 font-black tracking-[0.5em] text-[9.35px] uppercase mb-6 block animate-fade-up">Solução CORE — Camada 1</span>
          <h1 className="serif text-[55px] md:text-[66px] text-white mb-8 tracking-tight animate-fade-up">{p.title}</h1>
          <p className="text-[22px] text-indigo-300 italic mb-8 font-light opacity-90 leading-relaxed max-w-2xl mx-auto tracking-tight animate-fade-up">"{p.subtitle}"</p>
          <div className="w-24 h-[2px] bg-teal-500 mx-auto mb-10 shadow-[0_0_8px_#14b8a6] animate-fade-up"></div>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto text-[17.6px] font-medium tracking-tight animate-fade-up">{p.description}</p>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-[#0f172a] relative">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-16">
            <div>
              <h3 className="text-[10.45px] font-black text-slate-500 uppercase tracking-[0.5em] mb-6">Problema Estrutural</h3>
              <p className="text-slate-300 leading-relaxed text-[22px] font-medium tracking-tight border-l border-indigo-500/30 pl-8 italic">{p.problem}</p>
            </div>
            
            <div className="p-10 bg-indigo-950/20 border border-indigo-500/30 rounded-lg shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
              <h3 className="text-[10.45px] font-black text-indigo-400 uppercase tracking-[0.5em] mb-5">A Proposta Psiform</h3>
              <p className="text-white font-bold text-[26.4px] leading-tight tracking-tighter">{p.solution}</p>
            </div>
          </div>

          <div className="bg-white/5 p-11 rounded-lg border border-white/5 shadow-xl">
            <h3 className="text-[10.45px] font-black text-slate-500 uppercase tracking-[0.5em] mb-8">Funcionalidades Técnicas</h3>
            <ul className="space-y-6">
              {p.features.map((f, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-300 group">
                  <span className="w-7 h-7 bg-indigo-600/20 text-teal-400 rounded flex items-center justify-center text-[9.35px] font-black shrink-0 mt-0.5 border border-teal-500/30 shadow-[0_0_8px_rgba(20,184,166,0.15)] group-hover:bg-teal-500 group-hover:text-white transition-all">✓</span>
                  <span className="text-[17.6px] font-medium tracking-tight">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ethics & CTA */}
      <section className="py-32 bg-[#020617] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="p-16 bg-[#0f172a] rounded-lg border border-white/5 shadow-2xl mb-16 relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            
            <h3 className="text-[26.4px] font-black text-white mb-6 tracking-tight uppercase">Posicionamento Ético</h3>
            <p className="text-slate-400 text-[17.6px] leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
              {p.ethical}
            </p>
            <a 
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-11 py-5 bg-indigo-600 hover:bg-teal-500 text-white font-black text-[11.55px] uppercase tracking-[0.5em] rounded transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1 text-center"
            >
              {p.cta}
            </a>
          </div>
          
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center justify-center gap-3 mx-auto text-slate-500 text-[10.45px] font-black uppercase tracking-[0.4em] hover:text-teal-400 transition-all group"
          >
            <span className="group-hover:-translate-x-1.5 transition-transform">←</span> Voltar para o Início
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductCore;