import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-[#16171d]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Key Initiatives
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the impactful work we do to support and empower the Arakanese community worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col h-full"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-brand-highlight">
                  {project.badge}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <button className="text-brand-primary font-bold text-sm hover:text-brand-accent flex items-center gap-2 transition-colors">
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
