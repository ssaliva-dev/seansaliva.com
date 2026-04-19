import React from 'react';
import { Globe } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import { getProjectsByCategory } from '@/components/projects/projectsData';

export default function WebDesign() {
  const projects = getProjectsByCategory('web_design');

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          icon={Globe}
          title="Web Design & Development"
          subtitle="Creating responsive, user-centric websites and web applications using modern technologies and best practices."
        />

        <ProjectsGrid projects={projects} isLoading={false} />
      </div>
    </div>
  );
}