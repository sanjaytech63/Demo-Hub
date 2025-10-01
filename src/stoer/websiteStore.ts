import { persist } from 'zustand/middleware';
import { WebsiteStore, Website } from '../types';
import { create } from 'zustand';

const buildWebsite = (url: string, title: string, description: string): Website => {
  const id = Math.random().toString(36).substring(7);
  const favicon = `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`;
  return {
    id,
    url,
    title,
    description,
    favicon,
    isFavorite: false,
    createdAt: new Date(),
  };
};

const defaultWebsites: Website[] = [
  buildWebsite(
    'https://youtube-thumbnail-download-three.vercel.app/',
    'YouTube Thumbnail Downloader',
    'Download YouTube video thumbnails easily.'
  ),
  buildWebsite(
    'https://image-gallery-omega-tan.vercel.app/',
    'Image Gallery',
    'A demo image gallery app built with React.'
  ),
  buildWebsite(
    'https://avatar-generator-neon-phi.vercel.app/',
    'Avatar Generator',
    'Generate avatars instantly online.'
  ),
  buildWebsite(
    'https://notes-kohl-delta-61.vercel.app/',
    'Notes App',
    'Simple notes application.'
  ),
  buildWebsite(
    'https://imagify-delta-five.vercel.app/',
    'Imagify',
    'Image processing / manipulation tool.'
  ),
  buildWebsite(
    'https://bg-gradients-hv28.vercel.app/',
    'BG Gradients',
    'Background gradient generator.'
  ),
  buildWebsite(
    'https://user-data-wheat.vercel.app/',
    'User Data',
    'User data demo / profile app.'
  ),
  buildWebsite(
    'https://fast-save-alpha.vercel.app/',
    'Fast Save',
    'Quick save and download tool.'
  ),
  buildWebsite(
    'https://space-around-orcin.vercel.app/',
    'Space Around',
    'Space exploration and information app.'
  ),
];

export const useWebsiteStore = create<WebsiteStore>()(
  persist(
    (set, get) => ({
      websites: defaultWebsites,
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
