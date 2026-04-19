import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink } from 'lucide-react';

export default function VideoContainer({ video, index }) {
  // Extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(video.youtube_url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
    >
      {/* Video Player */}
      <div className="relative w-full aspect-video bg-slate-950">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600">
            <p>No video available</p>
          </div>
        )}
      </div>

      {/* Video Details */}
      <div className="p-6">
        {/* Title & Year */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold text-white leading-tight">
            {video.title}
          </h3>
          {video.year && (
            <Badge variant="outline" className="flex items-center gap-1 bg-slate-800/50 border-slate-700">
              <Calendar className="w-3 h-3" />
              {video.year}
            </Badge>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed mb-4">
          {video.description}
        </p>

        {/* Tags */}
        {video.tags && video.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {video.tags.map((tag, idx) => (
              <Badge 
                key={idx} 
                className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* YouTube Link */}
        {video.youtube_url && (
          <a
            href={video.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Project Details
          </a>
        )}
      </div>
    </motion.div>
  );
}