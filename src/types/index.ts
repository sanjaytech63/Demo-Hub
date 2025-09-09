export interface Website {
  id: string;
  url: string;
  title: string;
  description: string;
  favicon: string;
  isFavorite: boolean;
  createdAt: Date;
}

export interface WebsiteStore {
  websites: Website[];
  addWebsite: (website: Omit<Website, 'id' | 'createdAt' | 'favicon'>) => void;
  removeWebsite: (id: string) => void;
  toggleFavorite: (id: string) => void;
  updateWebsite: (id: string, updates: Partial<Website>) => void;
}