import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ 
  title, 
  subtitle, 
  icon: Icon,
  align = 'left' 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      {Icon && (
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6`}>
          <Icon className="w-7 h-7 text-cyan-400" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
        <div className="h-1 w-3 rounded-full bg-cyan-500/50" />
        <div className="h-1 w-1 rounded-full bg-cyan-500/30" />
      </div>
    </motion.div>
  );
}