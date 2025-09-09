import { motion } from 'framer-motion';
import { Website } from '../types';

interface WebsitePreviewProps {
  website: Website;
  onClose: () => void;
}

const WebsitePreview = ({ website, onClose }: WebsitePreviewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex flex-col"
    >
      {/* Preview Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900/80 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <img
            src={website.favicon}
            alt=""
            className="w-6 h-6 rounded"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMjEgMTZ2NGEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJ2LTRhMiAyIDAgMDEyLTJoMTZhMiAyIDAgMDEyIDJ6TTQgNnY2aDE2VjZINHoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==';
            }}
          />
          <h2 className="text-white font-semibold">{website.title}</h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-300 transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in new tab
          </a>
          
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Preview Content */}
      <div className="flex-1 relative">
        <iframe
          src={website.url}
          className="absolute inset-0 w-full h-full"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          title={website.title}
        />
      </div>
    </motion.div>
  );
};

export default WebsitePreview;