import { motion, AnimatePresence } from 'framer-motion';
import WebsiteCard from './WebsiteCard';
import EmptyState from './EmptyState';
import { Website } from '../types';

interface WebsiteGridProps {
  websites: Website[];
  onWebsiteSelect: (website: Website) => void;
  onAddWebsite: () => void;
}

const WebsiteGrid = ({ websites, onWebsiteSelect, onAddWebsite }: WebsiteGridProps) => {
  if (websites.length === 0) {
    return <EmptyState onAddWebsite={onAddWebsite} />;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold mb-8">My Demo Websites</h2>
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {websites?.map((website) => (
            <WebsiteCard
              key={website.id}
              website={website}
              onSelect={onWebsiteSelect}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default WebsiteGrid;