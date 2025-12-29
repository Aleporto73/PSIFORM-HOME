
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductCore from './pages/ProductCore';
import ToolEssential from './pages/ToolEssential';
import WhitePaper from './pages/WhitePaper';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Simple hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (hash && ['home', 'abasimples', 'psiway', 'neurorastreio', 'psicopei', 'psiform-forms', 'psicopedagohub', 'white-paper'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: Page) => {
    window.location.hash = page;
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'abasimples': return <ProductCore type="abasimples" onNavigate={navigate} />;
      case 'psiway': return <ProductCore type="psiway" onNavigate={navigate} />;
      case 'neurorastreio': return <ProductCore type="neurorastreio" onNavigate={navigate} />;
      case 'psicopei': return <ProductCore type="psicopei" onNavigate={navigate} />;
      case 'psiform-forms': return <ToolEssential type="psiform-forms" onNavigate={navigate} />;
      case 'psicopedagohub': return <ToolEssential type="psicopedagohub" onNavigate={navigate} />;
      case 'white-paper': return <WhitePaper />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100">
      <Header onNavigate={navigate} currentPage={currentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;
