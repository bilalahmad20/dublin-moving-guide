'use client';

import { resources, getAllCategories } from '@/data/resources';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function ResourcesPage() {
  const categories = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredResources =
    selectedCategory === 'all'
      ? resources
      : resources.filter((r) => r.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      government: '🏛️',
      housing: '🏠',
      banking: '💳',
      mobile: '📱',
      transportation: '🚗',
      community: '🤝',
      emergency: '🚨',
    };
    return icons[category] || '📌';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🔗 Resources</h1>
        <p className="text-gray-600">
          All important links and contact information in one place
        </p>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Resources
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {getCategoryIcon(category)} {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Resources List */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start mb-3">
              <span className="text-2xl mr-2">{getCategoryIcon(resource.category)}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                <span className="text-xs text-gray-500 uppercase">
                  {resource.category}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">{resource.description}</p>

            <div className="space-y-2">
              {resource.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-700 text-sm group"
                >
                  <ExternalLink className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="group-hover:underline">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-500">No resources found in this category.</p>
        </div>
      )}
    </div>
  );
}
