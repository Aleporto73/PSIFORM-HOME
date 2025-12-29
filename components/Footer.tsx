import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#020617] text-slate-400 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-9 h-9 bg-slate-800 rounded flex items-center justify-center text-white font-bold text-[17.6px] border border-white/10">ψ</div>
              <span className="text-[23.1px] font-black text-white tracking-tighter uppercase italic">Psiform Institutional</span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm mb-8 text-[14.3px] font-medium">
              Marca guarda-chuva de organização e curadoria para tecnologia profissional em psicologia, psicopedagogia e educação.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full shadow-[0_0_6px_#14b8a6]"></span>
                <p className="text-[8.8px] uppercase tracking-[0.3em] font-bold text-slate-500">Tecnologia como apoio.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full shadow-[0_0_6px_#14b8a6]"></span>
                <p className="text-[8.8px] uppercase tracking-[0.3em] font-bold text-slate-500">Decisão preservada.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-[0.4em] text-[8.8px]">Conformidade e Ética</h4>
              <ul className="text-[11.55px] space-y-4 font-bold tracking-wider">
                <li className="text-slate-500 hover:text-teal-400 transition-colors cursor-default flex items-center gap-2">
                  <span className="opacity-30">/</span> LGPD
                </li>
                <li className="text-slate-500 hover:text-teal-400 transition-colors cursor-default flex items-center gap-2">
                  <span className="opacity-30">/</span> Resolução CFP nº 06/2019
                </li>
                <li className="text-slate-500 hover:text-teal-400 transition-colors cursor-default flex items-center gap-2">
                  <span className="opacity-30">/</span> Lei nº 14.063/20
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-[0.4em] text-[8.8px]">Institucional</h4>
              <ul className="text-[11.55px] space-y-4 font-bold tracking-wider">
                <li><button onClick={() => onNavigate('white-paper')} className="text-slate-500 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-teal-500/50 pb-0.5">White Paper</button></li>
                <li><button onClick={() => onNavigate('home')} className="text-slate-500 hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-teal-500/50 pb-0.5">Início</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[8.8px] text-slate-600 font-black tracking-[0.3em] uppercase">
          <p>© 2025 Psiform Institutional. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <p>ESTRUTURA</p>
            <p>GOVERNANÇA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;