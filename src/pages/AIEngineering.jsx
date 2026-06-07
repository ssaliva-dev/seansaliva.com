import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  FileText,
  Gauge,
  Layers3,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from 'lucide-react';
import { createPageUrl } from '@/utils';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const portfolioCards = [
  {
    title: 'Production-Style AI Document Extraction Workflow',
    status: 'In Progress',
    statusClass: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20',
    summary:
      'An AI workflow for ingesting business documents, extracting structured data, validating outputs, routing uncertain cases to review, and tracking latency, token cost, and failure states.',
    techStack: [
      'Python',
      'FastAPI',
      'Postgres',
      'Redis',
      'Docker',
      'OpenAI/Anthropic',
      'structured outputs',
      'Pydantic',
    ],
    proofPoints: [
      'Structured JSON extraction',
      'Schema validation',
      'Background job processing',
      'Retry and fallback handling',
      'Cost and latency tracking',
      'Human review queue',
    ],
    ctaLabel: 'Build Log Coming Soon',
  },
  {
    title: 'RAG Knowledge Assistant',
    status: 'Planned / In Progress',
    statusClass: 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
    summary:
      'A retrieval-augmented assistant for internal knowledge bases that ingests documents, chunks and embeds content, retrieves relevant sources, answers with citations, and refuses unsupported answers.',
    techStack: [
      'Python',
      'embeddings',
      'vector database',
      'Postgres/pgvector or Qdrant',
      'RAG',
      'citations',
      'retrieval evals',
    ],
    proofPoints: [
      'Document ingestion',
      'Chunking and embeddings',
      'Vector search',
      'Source-grounded answers',
      'Refusal behavior',
      'Retrieval evaluation',
    ],
    ctaLabel: 'Build Log Coming Soon',
  },
  {
    title: 'Controlled AI Workflow Agent',
    status: 'Planned',
    statusClass: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
    summary:
      'A controlled AI agent pattern for operational workflows: limited tool use, approval gates, action logs, and failure handling before executing sensitive tasks.',
    techStack: [
      'LLM tool calling',
      'LangGraph or custom workflow state',
      'Python/Node',
      'audit logs',
      'approval gates',
    ],
    proofPoints: [
      'Tool calling',
      'Permission boundaries',
      'Human approval before sensitive actions',
      'Action logging',
      'Failure recovery',
      'Rollback-aware workflow design',
    ],
    ctaLabel: 'Build Log Coming Soon',
  },
];

const focusAreas = [
  {
    title: 'LLM-powered workflow automation',
    description: 'Turning repetitive work into dependable systems with clear inputs, outputs, and approvals.',
    icon: Workflow,
  },
  {
    title: 'Structured outputs and validation',
    description: 'Schema-first outputs with validation, retries, and predictable downstream handling.',
    icon: FileText,
  },
  {
    title: 'RAG and knowledge retrieval systems',
    description: 'Document-aware assistants that answer from sources, not vibes.',
    icon: BrainCircuit,
  },
  {
    title: 'AI evaluation and regression testing',
    description: 'Golden datasets, failure cases, and repeatable evaluation loops.',
    icon: CheckCircle2,
  },
  {
    title: 'Cost, latency, and reliability monitoring',
    description: 'Measuring what the model costs, how long it takes, and where it breaks.',
    icon: Gauge,
  },
  {
    title: 'Human-in-the-loop approval systems',
    description: 'Review queues and action gates where judgment should stay with people.',
    icon: Users,
  },
  {
    title: 'Secure AI-assisted software delivery',
    description: 'Using AI to accelerate work without weakening access controls or accountability.',
    icon: ShieldCheck,
  },
  {
    title: 'Production readiness for AI features',
    description: 'Observability, failure handling, and operational ownership before launch.',
    icon: Clock3,
  },
];

const stackGroups = [
  {
    label: 'Backend',
    items: ['Python', 'FastAPI', 'Node.js', 'REST APIs'],
  },
  {
    label: 'Data',
    items: ['Postgres', 'SQL', 'Redis', 'JSON schemas', 'document processing'],
  },
  {
    label: 'AI/LLMs',
    items: ['OpenAI', 'Anthropic', 'structured outputs', 'tool calling', 'prompt/version workflows'],
  },
  {
    label: 'RAG',
    items: ['Embeddings', 'chunking', 'vector databases', 'retrieval', 'citations'],
  },
  {
    label: 'Production',
    items: ['Docker', 'GitHub Actions', 'logging', 'monitoring', 'cost tracking', 'error handling'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS'],
  },
];

const hiringFit = [
  'AI Product Engineer',
  'AI Automation Engineer',
  'AI Solutions Engineer',
  'LLM Application Engineer',
  'Technical AI Implementation Specialist',
  'Backend Engineer, AI Features',
];

const learningSprint = [
  'FastAPI backend',
  'Postgres persistence',
  'Redis/background worker',
  'Docker Compose development environment',
  'Structured LLM extraction',
  'Validation and retry handling',
  'RAG knowledge base',
  'Golden dataset evals',
  'Cost and latency tracking',
  'Technical README and architecture diagram',
];

function TechPill({ children }) {
  return (
    <span className="rounded-lg border border-slate-700/60 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-300">
      {children}
    </span>
  );
}

export default function AIEngineering() {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription =
      document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    const previousKeywords =
      document.querySelector('meta[name="keywords"]')?.getAttribute('content') ?? '';

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    document.title = 'Sean Saliva | AI Product Engineer & Digital Systems Builder';
    setMeta(
      'description',
      'Portfolio of Sean Saliva, an AI Product Engineer and digital systems builder focused on practical AI workflows, document automation, RAG knowledge systems, and production-ready AI tools.',
    );
    setMeta(
      'keywords',
      'AI Engineer, AI Product Engineer, AI Automation Engineer, LLM Engineer, RAG, FastAPI, OpenAI, Anthropic, workflow automation, digital systems',
    );

    return () => {
      document.title = previousTitle;
      setMeta('description', previousDescription);
      setMeta('keywords', previousKeywords);
    };
  }, []);

  return (
    <div className="min-h-screen px-6 py-8 md:px-12 md:py-12">
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/60 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl md:p-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200"
              >
                <Sparkles className="h-4 w-4" />
                AI Product Engineer & Digital Systems Builder
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-4xl font-bold tracking-tight text-white md:text-6xl"
              >
                AI Engineering
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 max-w-3xl text-2xl font-semibold text-cyan-300 md:text-3xl"
              >
                AI Product Engineer & Digital Systems Builder
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-6 max-w-3xl text-lg leading-8 text-slate-300"
              >
                I build practical AI-powered software systems: document extraction workflows, internal knowledge assistants,
                workflow automation, and controlled AI agents with validation, evaluation, and human approval built in.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 max-w-3xl text-base leading-7 text-slate-400"
              >
                25+ years building digital systems across government, finance, e-commerce, and public-sector operations.
                Now focused on production-grade AI workflows using Python, FastAPI, Postgres, Redis, Docker, OpenAI/Anthropic,
                RAG, evals, and observability.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-4 max-w-3xl text-sm leading-7 text-slate-500"
              >
                Experienced in public-sector digital infrastructure, web platforms, stakeholder delivery, and AI-augmented application development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600">
                  <a href="#portfolio">
                    View AI Systems Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <Link to={createPageUrl('Contact')}>
                    Contact Me
                    <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400"
              >
                <Link className="transition-colors hover:text-cyan-300" to={createPageUrl('Resume')}>
                  View Resume
                </Link>
                <Link className="transition-colors hover:text-cyan-300" to={createPageUrl('GitHubProjects')}>
                  GitHub Projects
                </Link>
                <Link className="transition-colors hover:text-cyan-300" to={createPageUrl('Home')}>
                  Home
                </Link>
              </motion.div>
            </div>

            <GlassCard className="border-slate-700/60 p-6 md:p-8" hover={false}>
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <BrainCircuit className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">What I’m focused on now</p>
                  <p className="text-lg font-semibold text-white">Production-minded AI systems</p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  'Document extraction with schema validation and review queues',
                  'RAG knowledge assistants with citations and refusal behavior',
                  'Controlled workflow agents with approval gates and audit logs',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-cyan-300">
                  <BadgeCheck className="h-4 w-4" />
                  Build posture
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Honest, controlled, and production-oriented. I’m documenting the system as I build it.
                </p>
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="portfolio" className="scroll-mt-24">
          <SectionHeader
            icon={FileText}
            title="AI Systems Portfolio"
            subtitle="These are build logs and work-in-progress systems, not fake case studies. The goal is to show how I think about production AI work."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {portfolioCards.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="flex h-full flex-col p-6" hover={false}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <Badge className={`${project.statusClass} shrink-0`}>{project.status}</Badge>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.summary}</p>

                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((item) => (
                        <TechPill key={item}>{item}</TechPill>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Proof Points
                    </p>
                    <ul className="space-y-2">
                      {project.proofPoints.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <Button
                      disabled
                      variant="outline"
                      className="w-full border-slate-700 bg-transparent text-slate-400"
                    >
                      {project.ctaLabel}
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            icon={Workflow}
            title="AI Engineering Focus Areas"
            subtitle="The systems I’m building toward are practical, testable, and safe to operate."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <GlassCard className="h-full p-5" hover={false}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{area.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{area.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section>
          <SectionHeader
            icon={Layers3}
            title="Technical Stack I’m Working With"
            subtitle="A practical stack for building and operating AI-enabled software systems."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stackGroups.map((group) => (
              <GlassCard key={group.label} className="p-6" hover={false}>
                <h3 className="text-lg font-semibold text-white">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechPill key={item}>{item}</TechPill>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            icon={BrainCircuit}
            title="Why My Background Transfers"
            subtitle="I am not approaching AI from zero. The core job is still building dependable software."
          />

          <GlassCard className="p-6 md:p-8" hover={false}>
            <p className="max-w-4xl text-lg leading-8 text-slate-300">
              I am not approaching AI from zero. My background is building and maintaining real digital systems for public-facing organizations:
              websites, broadcast platforms, service workflows, stakeholder tools, and operational infrastructure. That experience transfers directly
              into AI engineering because production AI is still software: architecture, data flow, reliability, cost, security, user experience, and accountability.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                'I understand real users, messy workflows, and operational constraints.',
                'I have shipped public-facing systems where reliability and clarity matter.',
                'I use AI coding tools as leverage, but I focus on architecture, validation, testing, and ownership.',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        <section>
          <SectionHeader
            icon={Clock3}
            title="Current Learning Sprint"
            subtitle="Current sprint: building a production-style AI workflow system with document ingestion, structured extraction, validation, background jobs, RAG, evals, and observability."
          />

          <GlassCard className="p-6 md:p-8" hover={false}>
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">In Progress</Badge>
              <Badge variant="outline" className="border-slate-700 text-slate-400">
                Build sprint
              </Badge>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {learningSprint.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        <section>
          <SectionHeader
            icon={BadgeCheck}
            title="Where I Fit Best"
            subtitle="I am strongest in roles that combine practical software delivery, AI-assisted development, workflow automation, stakeholder understanding, and production-minded implementation."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {hiringFit.map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <GlassCard className="h-full p-5" hover={false}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                      <BadgeCheck className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{role}</h3>
                      <p className="text-sm text-slate-400">Best fit when the team needs delivery and clarity.</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <GlassCard className="overflow-hidden p-6 md:p-8" hover={false}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Next step
                </p>
                <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                  Let’s talk about practical AI delivery, not hype.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  I’m interested in roles and projects where AI needs to be useful, measurable, and safe to operate in the real world.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600">
                  <Link to={createPageUrl('Contact')}>
                    Contact Me
                    <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Link to={createPageUrl('Resume')}>
                    View Resume
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Link to={createPageUrl('GitHubProjects')}>
                    GitHub Projects
                  </Link>
                </Button>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
