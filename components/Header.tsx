import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-9 h-9 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-[17.6px] group-hover:bg-teal-500 transition-all duration-500 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            ψ
          </div>
          <span className="text-[17.6px] font-extrabold tracking-tighter text-white uppercase italic">PSIFORM</span>
        </div>

        <nav className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            {[
              { id: 'home', label: 'Início' },
              { id: 'white-paper', label: 'White paper' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as Page)}
                className={`text-[10.45px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative py-1.5 group ${
                  currentPage === item.id ? 'text-teal-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-px bg-teal-500 transition-all duration-300 ${currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-white/10 mx-1 hidden md:block"></div>

          <a 
            href="https://psicoblog.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10.45px] font-black uppercase tracking-widest text-teal-400 hover:text-white transition-all border border-teal-400/30 hover:border-white px-4 py-2 rounded-full"
          >
            Psicoblog
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;