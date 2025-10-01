import { useState } from 'react';
import { useWebsiteStore } from '../stoer/websiteStore';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const updateSearchQuery = useWebsiteStore((state) => state.updateWebsite);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    // updateSearchQuery(query);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search websites..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
      />
      <svg
        className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;