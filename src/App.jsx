import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import WebsiteGrid from './components/WebsiteGrid';
import AddWebsiteForm from './components/AddWebsiteForm';
import WebsitePreview from './components/WebsitePreview';
import { useWebsiteStore } from './stoer/websiteStore';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const websites = useWebsiteStore((state) => state.websites);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onAddWebsite={() => setShowAddForm(true)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <WebsiteGrid 
          websites={websites}
          onWebsiteSelect={setSelectedWebsite}
          onAddWebsite={() => setShowAddForm(true)}
        />
      </main>

      <AnimatePresence>
        {showAddForm && (
          <AddWebsiteForm onClose={() => setShowAddForm(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedWebsite && (
          <WebsitePreview 
            website={selectedWebsite} 
            onClose={() => setSelectedWebsite(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;