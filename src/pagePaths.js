export const PAGE_PATHS = {
  Home: '/',
  AIAutomation: '/AIAutomation',
  AIEngineering: '/ai-engineering',
  WebDesign: '/WebDesign',
  GraphicDesign: '/GraphicDesign',
  GitHubProjects: '/GitHubProjects',
  VideoProduction: '/VideoProduction',
  Podcast: '/Podcast',
  Resume: '/Resume',
  Contact: '/Contact',
  ProjectDetail: '/ProjectDetail',
};

function normalizePageName(pageName) {
  return String(pageName ?? '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-_]/g, '');
}

export function getPagePath(pageName) {
  if (!pageName || pageName === 'Home' || pageName === '/') {
    return '/';
  }

  if (typeof pageName === 'string' && pageName.startsWith('/')) {
    return pageName;
  }

  return PAGE_PATHS[pageName] ?? `/${normalizePageName(pageName)}`;
}
