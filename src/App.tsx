import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Stats from './components/Stats';

function App() {
  const [activeTab, setActiveTab] = useState('intro');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Sync theme class with document element for global CSS variables and Tailwind dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Reset scroll position on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      console.log('Theme toggled to:', newTheme);
      return newTheme;
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'intro': return <Hero setActiveTab={setActiveTab} />;
      case 'about': return <About setActiveTab={setActiveTab} />;
      case 'experience':
      case 'projects': return <Experience activeTab={activeTab} />;
      case 'skills': return <Skills />;
      case 'education': return <Education />;
      case 'contact': return <Contact setActiveTab={setActiveTab} />;
      case 'stats': return <Stats />;
      default: return <Hero />;
    }
  };

  return (
    <div>
      <Layout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
      >
        {renderContent()}
      </Layout>
    </div>
  );
}

export default App;
