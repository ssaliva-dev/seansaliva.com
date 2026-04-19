import React from 'react';
import { Video } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import VideoContainer from '@/components/video/VideoContainer';
import { getProjectsByCategory } from '@/components/projects/projectsData';

export default function VideoProduction() {
  const videos = getProjectsByCategory('video_production');

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Video}
          title="Video Production"
          subtitle="Producing engaging video content from concept to final delivery, including motion graphics and post-production."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <VideoContainer key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}