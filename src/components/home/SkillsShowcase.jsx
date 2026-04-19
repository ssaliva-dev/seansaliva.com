import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Globe, Palette, Video, Bot, Figma, ArrowRight, Briefcase } from 'lucide-react';
import { competencyCards } from '@/components/resume/resumeData';

const iconMap = {
  'municipal-web': Globe,
  'ux-accessibility': Figma,
  broadcast: Video,
  'ai-delivery': Bot,
  'regulated-design': Palette,
  leadership: Briefcase,
};

export default function SkillsShowcase() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Core Competencies
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Municipal delivery, civic UX, operational leadership, and AI-accelerated execution
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencyCards.map((skill, index) => {
            const Icon = iconMap[skill.key];
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={createPageUrl(skill.page)}>
                  <div className="group h-full p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:-translate-y-2">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.gradient} bg-opacity-20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
