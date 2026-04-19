import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  Award,
  Mail,
  Globe,
  Download,
  Linkedin,
  MapPin,
  Phone,
  GraduationCap,
  Users,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  awards,
  coreCompetencies,
  education,
  experiences,
  organizations,
  profile,
} from "@/components/resume/resumeData";

export default function Resume() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          icon={FileText}
          title="Resume"
          subtitle="Government technology leadership, municipal digital infrastructure, and public-facing UX across 25+ years of execution."
        />

        {/* Profile Card */}
        <GlassCard className="p-8 mb-12" hover={false}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/10 bg-slate-900 flex-shrink-0">
              <img
                src="/profile/sean-saliva-sidebar.jpg"
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">
                {profile.name}
              </h2>
              <p className="text-xl text-cyan-400 mb-4">
                {profile.role} | {profile.tagline}
              </p>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {profile.summary}
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {profile.extendedSummary}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={profile.phoneHref} className="hover:text-cyan-400 transition-colors">
                    {profile.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={profile.emailHref} className="hover:text-cyan-400 transition-colors">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href={profile.website} className="hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    {profile.websiteLabel}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <a href={profile.linkedin} className="hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                    {profile.linkedinLabel}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                >
                  <a href={profile.resumePath} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    View LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <GlassCard className="p-6" hover={false}>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Award className="w-6 h-6 text-cyan-400" />
              Professional Summary
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              {profile.summary}
            </p>
            <p className="text-slate-400 leading-relaxed">
              {profile.extendedSummary}
            </p>
          </GlassCard>

          <GlassCard className="p-6" hover={false}>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Award className="w-6 h-6 text-cyan-400" />
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map((skill) => (
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

                    <GlassCard className="p-6" hover={false}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <h4 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h4>
                        <span className="text-sm text-cyan-400">
                          {exp.start} - {exp.end}
                        </span>
                      </div>
                      <p className="text-purple-400 mb-2">
                        {exp.company}
                        {exp.type ? ` | ${exp.type}` : ""}
                      </p>
                      <p className="text-slate-500 text-sm mb-4">{exp.location}</p>
                      {exp.highlight ? (
                        <Badge className="mb-4 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {exp.highlight}
                        </Badge>
                      ) : null}
                      <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
                        {exp.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
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

        <div className="grid lg:grid-cols-2 gap-8">
          <GlassCard className="p-6" hover={false}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              Education
            </h3>
            <div className="space-y-5">
              {education.map((item) => (
                <div key={`${item.institution}-${item.degree}`}>
                  <p className="text-lg font-semibold text-white">
                    {item.prefix ? `${item.prefix}, ` : ""}
                    {item.degree}
                  </p>
                  <p className="text-purple-400">
                    {item.institution}
                    {item.year ? ` | ${item.year}` : ""}
                  </p>
                  {item.achievements ? (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.achievements.map((achievement) => (
                        <Badge
                          key={achievement}
                          variant="outline"
                          className="border-slate-700 text-slate-400 text-xs"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="space-y-8">
            <GlassCard className="p-6" hover={false}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-400" />
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {awards.map((award) => (
                  <div key={award.title}>
                    <p className="text-lg font-semibold text-white">
                      {award.title} ({award.year})
                    </p>
                    <p className="text-purple-400 mb-2">{award.issuer}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6" hover={false}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-cyan-400" />
                Honors & Organizations
              </h3>
              <div className="flex flex-wrap gap-2">
                {organizations.map((organization) => (
                  <Badge
                    key={organization}
                    variant="outline"
                    className="border-slate-700 text-slate-400 text-xs"
                  >
                    {organization}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
