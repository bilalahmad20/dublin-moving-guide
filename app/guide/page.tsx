'use client';

import { getAllGuideSections } from '@/data/guide-content';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function GuidePage() {
  const sections = getAllGuideSections();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">📖 Complete Guide</h1>
        <p className="text-gray-600">
          Detailed information about every step of moving to Dublin
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`/dublin-moving-guide/guide/${section.slug}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-green-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-green-600" />
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {section.content.substring(0, 150)}...
                </p>
                {section.relatedTasks.length > 0 && (
                  <p className="text-xs text-green-600 mt-2">
                    {section.relatedTasks.length} related tasks
                  </p>
                )}
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
