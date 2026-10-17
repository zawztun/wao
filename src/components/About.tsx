import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Empowering the Arakanese Community
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Formed in 2005 and based in San Francisco, the World Arakanese Organization (WAO) is a dedicated 501(c)(3) non-profit organization. Our primary mission is to advocate for the rights and welfare of the Arakanese people globally.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We focus on raising awareness, providing humanitarian assistance, and preserving our rich cultural heritage. Through education and advocacy, we strive to build a stronger, more resilient community that is well-represented and supported.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <span className="block text-3xl font-bold text-brand-primary">10k+</span>
                <span className="text-sm text-gray-500">Members</span>
              </div>
              <div className="text-center border-l border-brand-secondary pl-4">
                <span className="block text-3xl font-bold text-brand-accent">15+</span>
                <span className="text-sm text-gray-500">Countries</span>
              </div>
              <div className="text-center border-l border-brand-secondary pl-4">
                <span className="block text-3xl font-bold text-brand-primary">50+</span>
                <span className="text-sm text-gray-500">Projects</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-secondary">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop"
                alt="Community gathering"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-highlight/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
