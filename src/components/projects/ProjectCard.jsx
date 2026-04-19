import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { createPageUrl } from '@/utils';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Link to={`${createPageUrl('ProjectDetail')}?id=${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-500 cursor-pointer"
      >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        {project.image_url ? (
          <img 
            src={project.image_url} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30" />
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 px-3 py-1">
              Featured
            </Badge>
          </div>
        )}
        
        {/* Year */}
        {project.year && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Calendar className="w-3 h-3" />
            {project.year}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        {project.description && (
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-500">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Link */}
        {project.link && (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
      </div>
      </motion.div>
    </Link>
  );
}