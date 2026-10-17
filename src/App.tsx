
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';
import waoLogo from './data/photos/wao_logo.jpg';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-12 px-4 bg-white dark:bg-[#16171d] border-t-4 border-brand-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <img 
                src={waoLogo} 
                alt="WAO Logo" 
                className="w-10 h-10 object-contain rounded-full border-2 border-brand-highlight shadow-sm"
              />
              <div className="text-2xl font-black text-brand-primary tracking-tighter">WAO</div>
            </div>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/profile.php?id=100064737364702" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors font-bold">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors font-bold">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors font-bold">Instagram</a>
            </div>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-100 dark:border-gray-800 pt-8">
            <p className="mb-2 font-medium">1514 Innes Ave, San Francisco, CA 94124 | (415) 260-7911</p>
            <p className="text-xs">© 2026 World Arakanese Organization. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
