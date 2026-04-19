import React from 'react';
import { Palette } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ImageGallery from '@/components/gallery/ImageGallery';
import { graphicDesignImages } from '@/components/gallery/graphicDesignImages';

export default function GraphicDesign() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          icon={Palette}
          title="Graphic Design"
          subtitle="Crafting visual identities, brand systems, and compelling graphics that communicate your message effectively."
        />

        <ImageGallery images={graphicDesignImages} />
      </div>
    </div>
  );
}