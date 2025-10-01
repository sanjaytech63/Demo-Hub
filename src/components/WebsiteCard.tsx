import { motion } from 'framer-motion';
import { Website } from '../types';
import { useWebsiteStore } from '../stoer/websiteStore';

interface WebsiteCardProps {
  website: Website;
  onSelect: (website: Website) => void;
}

const WebsiteCard = ({ website, onSelect }: WebsiteCardProps) => {
  const removeWebsite = useWebsiteStore((state) => state.removeWebsite);
  const toggleFavorite = useWebsiteStore((state) => state.toggleFavorite);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
    >
      <div 
        className="h-40 bg-gray-200 dark:bg-gray-700 relative cursor-pointer"
        onClick={() => onSelect(website)}
      >
        <iframe
          src={website.url}
          className="w-full h-full pointer-events-none"
          sandbox="allow-same-origin"
          title={`Preview of ${website.title}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-medium">Click to preview</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-3">
            <img
              src={website.favicon}
              alt=""
              className="w-6 h-6 rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMjEgMTZ2NGEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJ2LTRhMiAyIDAgMDEyLTJoMTZhMiAyIDAgMDEyIDJ6TTQgNnY2aDE2VjZINHoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==';
              }}
            />
            <h3 className="font-semibold truncate">{website.title}</h3>
          </div>
          <button
            onClick={() => toggleFavorite(website.id)}
            className="text-gray-400 hover:text-yellow-500 transition-colors"
          >
            {website.isFavorite ? (
              <svg className="w-5 h-5 fill-yellow-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            )}
          </button>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {website.description || 'No description provided'}
        </p>
        
        <div className="flex justify-between items-center">
          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            Open in new tab
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeWebsite(website.id);
            }}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WebsiteCard;