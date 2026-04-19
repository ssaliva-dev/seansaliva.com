import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import SkillsShowcase from '@/components/home/SkillsShowcase';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <HeroSection />

      {/* Skills */}
      <SkillsShowcase />

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 p-12 text-center"
            >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-500/10 blur-[80px]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Modernizing Public-Facing
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Digital Services</span>
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                If you need someone who can bridge strategy, infrastructure, UX, communications, and execution, let's talk about the role, initiative, or modernization effort ahead.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-6 text-lg rounded-xl"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Start the Conversation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
