'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🇮🇪</span>
            <span className="text-xl font-bold text-gray-900">
              Dublin Moving Guide
            </span>
          </div>

          <div className="text-sm text-gray-600">
            For Userpilot Colleagues
          </div>
        </div>
      </div>
    </nav>
  );
}
