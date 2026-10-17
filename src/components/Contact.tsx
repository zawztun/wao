import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Have questions or want to get involved? We'd love to hear from you. Send us a message and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary border border-brand-primary/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">info@worldarakaneseorganization.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-accent/10 rounded-lg text-brand-accent border border-brand-accent/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Call Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">(415) 260-7911</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-secondary/10 rounded-lg text-brand-secondary border border-brand-secondary/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Visit Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">1514 Innes Ave, San Francisco, CA 94124</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#16171d] p-8 rounded-2xl shadow-xl border-2 border-brand-secondary/20"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-primary hover:bg-red-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group shadow-lg border-2 border-brand-highlight"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
