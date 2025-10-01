import { motion } from 'framer-motion';
interface HeaderProps {
  onAddWebsite: () => void;
}

const Header = ({onAddWebsite }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg"></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Demo Hub
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* <SearchBar /> */}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAddWebsite}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center space-x-2 shadow-md hover:bg-indigo-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add Website</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;