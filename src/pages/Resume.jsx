import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  Award,
  Mail,
  Globe,
  Palette,
  Video,
  Camera,
  Bot,
  Code,
  Figma,
  Download,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/components/resume/resumeData";

const skills = [
  {
    category: "Web Design & Development",
    icon: Code,
    items: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "WordPress",
      "Responsive Design",
      "API Integration",
    ],
  },
  {
    category: "UI/UX Design",
    icon: Figma,
    items: [
      "Figma",
      "Adobe XD",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },
  {
    category: "Graphic Design",
    icon: Palette,
    items: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "InDesign",
      "Brand Identity",
      "Print Design",
      "Logo Design",
    ],
  },
  {
    category: "Video Production",
    icon: Video,
    items: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
    ],
  },
  {
    category: "Photography",
    icon: Camera,
    items: [
      "Portrait Photography",
      "Product Photography",
      "Lightroom",
      "Photo Editing",
      "Studio Lighting",
      "Composition",
    ],
  },
  {
    category: "AI & Automation",
    icon: Bot,
    items: [
      "AI Tools",
      "Workflow Automation",
      "ChatGPT",
      "Midjourney",
      "Process Optimization",
      "Integration",
    ],
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          icon={FileText}
          title="Resume"
          subtitle="Over 20 years of experience across multiple creative disciplines."
        />

        {/* Profile Card */}
        <GlassCard className="p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-white">SS</span>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">
                Sean Saliva
              </h2>
              <p className="text-xl text-cyan-400 mb-4">
                Creative Technologist & Multi-Disciplinary Designer
              </p>

              <p className="text-slate-400 mb-6 leading-relaxed">
                A seasoned creative professional with over two decades of
                experience in web design, graphic design, video production,
                photography, and AI automation. Passionate about leveraging
                technology to create compelling visual experiences and
                streamlined digital solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>
                    <a href="mailto:s.saliva@yahoo.com">s.saliva@yahoo.com</a>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>
                    <a href="http://www.seansaliva.com/">www.seansaliva.com</a>
                  </span>
                </div>
                <a
                  href="/resume/Sean-Saliva-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>
                    <a href="/resumes/Sean-Saliva-2026.pdf">Download Resume</a>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-cyan-400" />
            Skills & Expertise
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <GlassCard
                  key={skillGroup.category}
                  className="p-5"
                  delay={index * 0.1}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">
                      {skillGroup.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-slate-800/50 text-slate-300 border border-slate-700/50 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            Work Experience
          </h3>

          {experiences && experiences.length > 0 ? (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30" />

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-6 w-10 h-10 rounded-xl bg-slate-900 border-2 border-cyan-500/50 flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                    </div>

                    <GlassCard className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <h4 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h4>
                        <span className="text-sm text-cyan-400">
                          {exp.start_year} - {exp.end_year || "Present"}
                        </span>
                      </div>
                      <p className="text-purple-400 mb-3">{exp.company}</p>
                      {exp.description && (
                        <p className="text-slate-400 text-sm mb-4">
                          {exp.description}
                        </p>
                      )}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="border-slate-700 text-slate-400 text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <GlassCard className="p-8 text-center">
              <Briefcase className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">
                Experience entries will appear here once added.
              </p>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
}
