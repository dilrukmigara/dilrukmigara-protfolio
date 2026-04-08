import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Leadership } from './components/Leadership';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-x-hidden">
      {/* Circuit board pattern background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="circuit-pattern"></div>
      </div>
      
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Leadership />
        <Footer />
      </main>
    </div>
  );
}

export default App;
