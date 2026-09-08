import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Leadership } from './components/Leadership';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { SmartFarm } from './components/SmartFarm';
import { Research } from './components/Research';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Listen to manual pushState / replaceState calls
    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  const isSmartFarm = currentPath === '/smartfarm' || currentPath === '/samrtfarm';
  const isResearch = currentPath.startsWith('/research');

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-x-hidden">
      {/* Circuit board pattern background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="circuit-pattern"></div>
      </div>
      
      <Navigation />
      
      <main className="relative z-10">
        {isResearch ? (
          <Research initialSubpath={currentPath} />
        ) : isSmartFarm ? (
          <SmartFarm />
        ) : (
          <>
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Leadership />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
