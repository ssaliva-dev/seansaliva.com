import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Calendar, ExternalLink, Play } from 'lucide-react';

export default function VideoContainer({ video, index }) {
  // Extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(video.youtube_url);
  const localVideoUrl = video.video_url ? encodeURI(video.video_url) : null;
  const hasPlayableVideo = Boolean(videoId || localVideoUrl);
  const youtubeEmbedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    : null;
  const youtubeThumbnailUrl = videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : null;
  const customThumbnailUrl = video.thumbnail_url
    ? encodeURI(video.thumbnail_url)
    : (video.image_url ? encodeURI(video.image_url) : null);
  const previewThumbnailUrl = customThumbnailUrl || youtubeThumbnailUrl;
  const externalUrl = video.youtube_url ? encodeURI(video.youtube_url) : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
      itemScope
      itemType="https://schema.org/VideoObject"
    >
      <meta itemProp="name" content={video.title} />
      <meta itemProp="description" content={video.description} />
      {video.tags?.length > 0 && (
        <meta itemProp="keywords" content={video.tags.join(', ')} />
      )}
      {video.year && (
        <meta itemProp="datePublished" content={`${video.year}-01-01`} />
      )}
      {localVideoUrl && <meta itemProp="contentUrl" content={localVideoUrl} />}
      {video.youtube_url && <meta itemProp="embedUrl" content={video.youtube_url} />}

      {/* Video Player */}
      <div className="relative w-full aspect-video bg-slate-950">
        {hasPlayableVideo ? (
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="group relative block w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:ring-offset-2 focus:ring-offset-slate-950"
                aria-label={`Play ${video.title} in lightbox`}
              >
                {previewThumbnailUrl ? (
                  <img
                    src={previewThumbnailUrl}
                    alt={`${video.title} thumbnail`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : localVideoUrl ? (
                  <video
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover pointer-events-none"
                    aria-hidden="true"
                  >
                    <source src={localVideoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
                )}
                <div className="absolute inset-0 bg-slate-950/45 group-hover:bg-slate-950/25 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25">
                    <Play className="w-4 h-4 fill-slate-950" />
                    Watch Video
                  </span>
                </div>
              </button>
            </DialogTrigger>

            <DialogContent className="w-[95vw] max-w-6xl p-0 border border-slate-700/60 bg-slate-950/95 overflow-hidden">
              <DialogTitle className="sr-only">{video.title}</DialogTitle>
              <DialogDescription className="sr-only">
                Expanded video player in a lightbox modal.
              </DialogDescription>
              <div className="w-full aspect-video bg-black">
                {youtubeEmbedUrl ? (
                  <iframe
                    src={youtubeEmbedUrl}
                    title={`${video.title} player`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <video
                    controls
                    autoPlay
                    preload="metadata"
                    className="w-full h-full"
                    title={`${video.title} player`}
                  >
                    <source src={localVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </DialogContent>
          </Dialog>
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
            <Badge variant="outline" className="flex items-center gap-1 bg-slate-800/50 border-slate-700 text-white">
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
        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {video.youtube_url ? 'Watch on YouTube' : 'Watch Full Video'}
          </a>
        )}
      </div>
    </motion.article>
  );
}
