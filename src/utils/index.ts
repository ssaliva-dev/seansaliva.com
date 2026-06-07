import { getPagePath } from '../pagePaths';

export function createPageUrl(pageName: string) {
  return getPagePath(pageName);
}
