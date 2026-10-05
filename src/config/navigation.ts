export type NavItem = {
  key: string;
  path: string;
  icon?: unknown;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES: string[] = [];
