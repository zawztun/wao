import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utils';

import hero1 from '../data/photos/Sittwe-Myan-Bay-of-Bengal.webp';
import hero2 from '../data/photos/651183574_10236584993079143_1457588391491883583_n.jpg';
import hero3 from '../data/photos/839166311_1124297520590011_4668145836243454897_n.jpg';
import hero4 from '../data/photos/597930153_25480494818248175_6982073370529403630_n.jpg';
import hero5 from '../data/photos/_99837837_mrauku-20184201.jpg.webp';

const images = [ hero1,hero2, hero3, hero4,hero5];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x > 100) prevSlide();
            else if (info.offset.x < -100) nextSlide();
          }}
          className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          World Arakanese Organization
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-10 space-y-4"
        >
          <div className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase italic drop-shadow-xl">
            <span className="text-brand-highlight">Love</span> • <span className="text-brand-secondary">Harmony</span> • <span className="text-brand-accent">Unity</span>
          </div>
          <div className="text-xl md:text-3xl font-bold text-brand-highlight tracking-widest drop-shadow-md py-3 bg-black/30 backdrop-blur-sm rounded-xl px-6 inline-block">
            ချစ်လီ ~ ညီလီ ~ စည်းလုံးလီ
          </div>
          <p className="text-lg md:text-xl text-gray-200 font-medium pt-4">
            Advocating for the rights and welfare of the Arakanese people.
          </p>
        </motion.div>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-primary hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-bold transition-all shadow-lg border-2 border-brand-highlight"
        >
          Learn More
        </motion.button>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-brand-secondary/30 hover:bg-brand-secondary/60 text-white transition-colors border border-white/50"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-brand-secondary/30 hover:bg-brand-secondary/60 text-white transition-colors border border-white/50"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentIndex === index ? "bg-brand-highlight w-8" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  );
};
