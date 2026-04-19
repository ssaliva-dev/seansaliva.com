import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { createPageUrl } from '@/utils';
import { projects } from '@/components/projects/projectsData';

export default function ProjectDetail() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const projectId = params.get('id');
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to={createPageUrl('Home')}>
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to={createPageUrl('Home')}>
            <Button variant="ghost" className="text-slate-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative h-96 rounded-3xl overflow-hidden mb-8 border border-slate-700/50"
        >
          <img 
            src={project.image_url} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          {project.featured && (
            <Badge className="absolute top-6 right-6 bg-gradient-to-r from-cyan-500 to-purple-500 border-0">
              Featured
            </Badge>
          )}
        </motion.div>

        {/* Content */}
        <div className="space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-slate-400 mb-6">
              {project.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert max-w-none"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">About This Project</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>
          </motion.div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="border-slate-600 text-slate-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}

          {/* Additional Images */}
          {project.images && project.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-white">Project Gallery</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div 
                    key={index}
                    className="relative h-64 rounded-2xl overflow-hidden border border-slate-700/50"
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}