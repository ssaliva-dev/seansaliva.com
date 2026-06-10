import React from 'react';
import { Palette } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ImageGallery from '@/components/gallery/ImageGallery';
import { graphicDesignImages } from '@/components/gallery/graphicDesignImages';

export default function GraphicDesign() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Palette}
          title="Graphic Design"
          subtitle="Selected posters, apparel campaigns, wellness ads, and brand concepts designed to stay bold, readable, and on-message."
        />

        <ImageGallery images={graphicDesignImages} />
      </div>
    </div>
  );
}
