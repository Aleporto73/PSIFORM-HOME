import React from 'react';

const WhitePaper: React.FC = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen pt-32 pb-24 text-slate-300 selection:bg-teal-500/30">
      <div className="max-w-4xl mx-auto px-6 animate-fade-up">
        {/* Header do Documento */}
        <header className="mb-20 border-b border-white/5 pb-14 relative">
          <div className="absolute -top-8 left-0 text-[9.35px] font-black tracking-[1em] text-teal-400 uppercase opacity-50">DOCUMENTO OFICIAL // 2025</div>
          <h1 className="serif text-[55px] md:text-[66px] text-white mb-6 leading-[1] tracking-tighter">
            WHITE PAPER — PSIFORM
          </h1>
          <p className="text-[26.4px] text-indigo-400 font-medium serif italic mb-6 leading-snug max-w-3xl tracking-tight">
            Eficiência Estrutural como Estratégia de Inclusão
          </p>
          <div className="h-[3px] w-28 bg-teal-500 shadow-[0_0_10px_#14b8a6]"></div>
        </header>

        <article className="space-y-20">
          {/* Resumo Executivo */}
          <section>
            <h2 className="text-teal-400 font-black tracking-[0.6em] text-[10.45px] uppercase mb-8">Resumo Executivo</h2>
            <div className="prose prose-invert prose-slate max-w-none text-slate-400 leading-[1.8] text-[19.8px] font-medium tracking-tight space-y-6">
              <p>
                A exclusão em saúde e educação não decorre da falta de conhecimento científico. Ela é consequência direta de <strong className="text-white">arquiteturas ineficientes</strong>, que concentram ferramentas essenciais e restringem o acesso qualificado.
              </p>
              <div className="p-11 bg-white/[0.03] border-l-4 border-teal-500 rounded-r-lg italic text-[22px] text-slate-200 font-light leading-relaxed shadow-xl">
                "A Psiform nasce para enfrentar esse problema <strong className="text-teal-400 font-bold">no nível do modelo</strong>. Eficiência aplicada com rigor técnico e sustentabilidade econômica."
              </div>
            </div>
          </section>

          {/* 1. O Problema */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/5 pt-16">
            <div className="md:col-span-4">
              <h2 className="serif text-[33px] text-white leading-tight">1. O Problema</h2>
            </div>
            <div className="md:col-span-8 text-slate-400 space-y-5 text-[17.6px] font-medium leading-relaxed">
              <p>O setor consolidou estruturas caracterizadas por alto custo e baixa atualização tecnológica:</p>
              <ul className="space-y-4">
                {[
                  "Alto custo dissociado da eficiência;",
                  "Baixa atualização tecnológica;",
                  "Fragmentação diagnóstica;",
                  "Dependência de modelos proprietários."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-teal-500 font-black text-[13.2px]">/ 0{i+1}</span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. A Tese */}
          <section className="bg-white/5 text-white p-14 rounded-lg shadow-xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 blur-[80px]"></div>
            <h2 className="text-teal-400 font-black tracking-[0.6em] text-[10.45px] uppercase mb-10">2. A Tese</h2>
            <blockquote className="text-[44px] serif italic mb-10 leading-[1.1] tracking-tighter text-white">
              "Quando a arquitetura é eficiente, o acesso deixa de ser exceção."
            </blockquote>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Tecnologia nativa",
                "Fim da ineficiência",
                "Profundidade funcional",
                "Integração clara"
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white/[0.03] rounded-lg border border-white/5 text-[10.45px] font-black uppercase tracking-[0.2em] text-teal-400 flex items-center gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Conclusão */}
          <section className="pt-20 border-t-2 border-white">
            <h2 className="serif text-[44px] md:text-[66px] text-white mb-8 tracking-tight">Conclusão</h2>
            <p className="text-[26.4px] text-slate-400 leading-snug mb-14 font-light tracking-tight">
              A Psiform demonstra que é possível alinhar excelência técnica e ampliação real do acesso.
            </p>
            <p className="text-white font-black serif text-[33px] md:text-[44px] leading-tight tracking-tighter">
              A exclusão é resolvida por <span className="text-teal-400 underline decoration-indigo-500 decoration-4 underline-offset-4">arquitetura compatível</span>.
            </p>
          </section>

          {/* Assinatura Final */}
          <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded flex items-center justify-center text-[#0f172a] font-black text-[22px] mb-8">ψ</div>
            <p className="text-white font-black tracking-[0.8em] text-[9.35px] uppercase mb-4">PSIFORM INSTITUTIONAL</p>
            <div className="flex flex-col md:flex-row gap-5 items-center text-slate-600 text-[9.35px] font-mono tracking-[0.4em] uppercase">
              <p>Eficiência Estrutural</p>
              <span className="hidden md:block opacity-20">•</span>
              <p>Governança Ética</p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default WhitePaper;