export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "vehicles", path: "/vehicles", isContentType: true },
  { key: "maps", path: "/maps", isContentType: true },
  { key: "modes", path: "/modes", isContentType: true },
  { key: "features", path: "/features", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.slice(1));

export type NavItem = NavigationItem;
