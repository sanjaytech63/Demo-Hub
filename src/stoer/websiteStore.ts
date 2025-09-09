
import { persist } from 'zustand/middleware';
import { Website, WebsiteStore } from '../types';
import { create } from 'zustand';

export const useWebsiteStore = create<WebsiteStore>()(
  persist(
    (set) => ({
      websites: [],
      addWebsite: (website) => {
        const id = Math.random().toString(36).substring(7);
        const favicon = `https://www.google.com/s2/favicons?domain=${new URL(website.url).hostname}&sz=64`;
        set((state) => ({
          websites: [...state.websites, { ...website, id, favicon, createdAt: new Date() }],
        }));
      },
      removeWebsite: (id) => {
        set((state) => ({
          websites: state.websites.filter((website) => website.id !== id),
        }));
      },
      toggleFavorite: (id) => { 
        set((state) => ({
          websites: state.websites.map((website) =>
            website.id === id ? { ...website, isFavorite: !website.isFavorite } : website
          ),
        }));
      },
      updateWebsite: (id, updates) => {
        set((state) => ({
          websites: state.websites.map((website) =>
            website.id === id ? { ...website, ...updates } : website
          ),
        }));
      },
    }),
    {
      name: 'demo-hub-storage',
    }
  )
);