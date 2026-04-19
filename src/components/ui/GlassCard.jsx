import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function GlassCard({ 
  children, 
  className, 
  hover = true,
  delay = 0,
  ...props 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-slate-900/50 backdrop-blur-xl",
        "border border-slate-700/50",
        hover && "hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10",
        "transition-all duration-500",
        className
      )}
      {...props}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}