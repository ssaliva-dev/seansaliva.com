import React from 'react';
import { Figma } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { getProjectsByCategory } from '../components/projects/projectsData';

export default function UIUXDesignPage() {
  const projects = getProjectsByCategory('ui_ux_design');

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Figma}
          title="UI/UX Design"
          subtitle="Creating intuitive and beautiful user experiences through research, wireframing, prototyping, and user-centered design principles."
        />
        <ProjectsGrid projects={projects} isLoading={false} />
      </div>
    </div>
  );
}