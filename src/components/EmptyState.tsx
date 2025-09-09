interface EmptyStateProps {
  onAddWebsite: () => void;
}

const EmptyState = ({ onAddWebsite }: EmptyStateProps) => {
  return (
    <div className="text-center py-12">
      <div className="mx-auto w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </div>
      <h3 className="text-xl font-medium mb-2">No websites added yet</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-4">Add your first Vercel deployment to get started</p>
      <button
        onClick={onAddWebsite}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Add Your First Website
      </button>
    </div>
  );
};

export default EmptyState;