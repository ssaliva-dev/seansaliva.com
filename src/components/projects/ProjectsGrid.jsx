import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FolderOpen } from 'lucide-react';

export default function ProjectsGrid({ projects, isLoading }) {
  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="h-80 rounded-2xl bg-slate-800/50 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <div className="w-20 h-20 rounded-2xl bg-slate-800/50 flex items-center justify-center mx-auto mb-6">
          <FolderOpen className="w-10 h-10 text-slate-600" />
        </div>
        <h3 className="text-xl font-semibold text-slate-400 mb-2">No projects yet</h3>
        <p className="text-slate-500">Projects will appear here once added.</p>
      </motion.div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}