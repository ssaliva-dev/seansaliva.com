import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  BookOpen,
  CalendarDays,
  Code2,
  ExternalLink,
  GitFork,
  Github,
  Loader2,
  Star,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const GITHUB_USERNAME = 'ssaliva-dev';
const PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
const PROFILE_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;
const REPOS_API_URL = `${PROFILE_API_URL}/repos?sort=updated&direction=desc&per_page=100`;
const REPO_DESCRIPTION_OVERRIDES = {
  'supportops-ai':
    'AI support operations platform that automates triage, context-aware response drafting, and human-in-the-loop workflow execution.',
  'supptops-ai':
    'AI support operations platform that automates triage, context-aware response drafting, and human-in-the-loop workflow execution.',
};

const formatDate = (dateString) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString));

const getLanguageColor = (language) => {
  const colors = {
    JavaScript: 'bg-yellow-400',
    TypeScript: 'bg-blue-400',
    CSS: 'bg-cyan-400',
    HTML: 'bg-orange-400',
    PHP: 'bg-indigo-400',
    Python: 'bg-emerald-400',
    Shell: 'bg-slate-400',
  };

  return colors[language] || 'bg-purple-400';
};

const getRepoDescription = (repo) => {
  const repoName = (repo.name || '').toLowerCase();
  return (
    REPO_DESCRIPTION_OVERRIDES[repoName] ||
    repo.description ||
    'A public repository from the GitHub project workspace.'
  );
};

export default function GitHubProjects() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadGitHubProjects() {
      try {
        setIsLoading(true);
        setError('');

        const [profileResponse, reposResponse] = await Promise.all([
          fetch(PROFILE_API_URL, { signal: controller.signal }),
          fetch(REPOS_API_URL, { signal: controller.signal }),
        ]);

        if (!profileResponse.ok || !reposResponse.ok) {
          throw new Error('Unable to load GitHub projects right now.');
        }

        const [profileData, reposData] = await Promise.all([
          profileResponse.json(),
          reposResponse.json(),
        ]);

        setProfile(profileData);
        setRepos(Array.isArray(reposData) ? reposData : []);
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError('Unable to load GitHub projects right now.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadGitHubProjects();

    return () => controller.abort();
  }, []);

  const visibleRepos = useMemo(() => {
    const portfolioRepos = repos.filter((repo) => !repo.fork && !repo.archived);
    const sourceRepos = portfolioRepos.length > 0 ? portfolioRepos : repos;

    return sourceRepos
      .slice()
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .slice(0, 12);
  }, [repos]);

  const languages = useMemo(() => {
    const uniqueLanguages = new Set(
      visibleRepos.map((repo) => repo.language).filter(Boolean)
    );

    return Array.from(uniqueLanguages).slice(0, 8);
  }, [visibleRepos]);

  const stats = [
    {
      label: 'Public Repos',
      value: profile?.public_repos ?? visibleRepos.length,
    },
    {
      label: 'Portfolio Projects',
      value: visibleRepos.length,
    },
    {
      label: 'Languages',
      value: languages.length,
    },
  ];

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          icon={Github}
          title="GitHub Projects"
          subtitle="A live look at selected repositories, experiments, and production code from my GitHub workspace."
        />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/60 backdrop-blur-xl"
        >
          <div className="grid gap-6 p-6 lg:grid-cols-[1.4fr_1fr] lg:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-800">
                {profile?.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt={`${profile.login} GitHub avatar`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Github className="h-10 w-10 text-cyan-400" />
                )}
              </div>
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-md border-0 bg-gradient-to-r from-cyan-500 to-purple-500 px-2.5 py-0.5 text-xs font-semibold text-white">
                    GitHub Workspace
                  </span>
                  <span className="text-sm text-slate-400">@{GITHUB_USERNAME}</span>
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  {profile?.name || 'Sean Saliva'}
                </h3>
                <p className="max-w-2xl text-sm leading-6 text-slate-400">
                  Code-focused projects spanning React, automation, web operations,
                  deployment workflows, and practical tools for modern digital service delivery.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-700/50 bg-slate-950/50 p-4 text-center"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-800/70 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div className="flex flex-wrap gap-2">
              {languages.length > 0 ? (
                languages.map((language) => (
                  <span
                    key={language}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-300"
                  >
                    <span className={`h-2 w-2 rounded-full ${getLanguageColor(language)}`} />
                    {language}
                  </span>
                ))
              ) : (
                <span className="text-sm text-slate-500">Languages will appear after repositories load.</span>
              )}
            </div>

            <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
              <span className="inline-flex w-full items-center justify-center rounded-xl border-0 bg-white px-4 py-2 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-200 sm:w-auto">
                <Github className="mr-2 h-4 w-4" />
                View GitHub Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </span>
            </a>
          </div>
        </motion.section>

        {isLoading && <LoadingState />}
        {!isLoading && error && <ErrorState message={error} />}
        {!isLoading && !error && visibleRepos.length === 0 && <EmptyState />}
        {!isLoading && !error && visibleRepos.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleRepos.map((repo, index) => (
              <RepositoryCard key={repo.id} repo={repo} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="h-72 rounded-2xl border border-slate-700/50 bg-slate-900/50"
        >
          <div className="flex h-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-8 text-center"
    >
      <AlertCircle className="mx-auto mb-4 h-10 w-10 text-amber-300" />
      <h3 className="mb-2 text-xl font-semibold text-white">GitHub is taking a breather</h3>
      <p className="mb-6 text-slate-400">{message}</p>
      <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
        <span className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800">
          Open GitHub Directly
          <ExternalLink className="ml-2 h-4 w-4" />
        </span>
      </a>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-12 text-center"
    >
      <BookOpen className="mx-auto mb-4 h-10 w-10 text-slate-500" />
      <h3 className="mb-2 text-xl font-semibold text-slate-300">No public projects found</h3>
      <p className="text-slate-500">Public repositories will appear here when they are available.</p>
    </motion.div>
  );
}

function RepositoryCard({ repo, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group flex min-h-72 flex-col rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10">
            <Code2 className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-white transition-colors group-hover:text-cyan-400">
              {repo.name}
            </h3>
            <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
              <CalendarDays className="h-3.5 w-3.5" />
              Updated {formatDate(repo.pushed_at || repo.updated_at)}
            </div>
          </div>
        </div>

        {repo.visibility && (
          <span className="inline-flex shrink-0 items-center rounded-md border border-slate-600 px-2.5 py-0.5 text-xs font-semibold text-slate-400">
            {repo.visibility}
          </span>
        )}
      </div>

      <p className="mb-5 min-h-16 text-sm leading-6 text-slate-400">{getRepoDescription(repo)}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {repo.language && (
          <span className="inline-flex items-center gap-2 rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300">
            <span className={`h-2 w-2 rounded-full ${getLanguageColor(repo.language)}`} />
            {repo.language}
          </span>
        )}
        {repo.topics?.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="rounded-lg border border-slate-700/50 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-400"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-slate-800/70 pt-4">
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5" />
            {repo.stargazers_count}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <GitFork className="h-3.5 w-3.5" />
            {repo.forks_count}
          </span>
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          View Repo
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}
