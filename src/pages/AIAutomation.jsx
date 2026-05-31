import React from 'react';
import { Bot } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import { getProjectsByCategory } from '@/components/projects/projectsData';

export default function AIAutomation() {
  const projects = getProjectsByCategory('ai_automation');

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          icon={Bot}
          title="AI Development"
          subtitle="Building AI-powered applications, agents, and workflows through an AI development process."
        />

        <ProjectsGrid projects={projects} isLoading={false} />
      </div>
    </div>
  );
}
