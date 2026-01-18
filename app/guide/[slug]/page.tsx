'use client';

import { useParams } from 'next/navigation';
import { getGuideSectionBySlug, getAllGuideSections } from '@/data/guide-content';
import ChecklistItem from '@/components/ChecklistItem';
import { useChecklist } from '@/contexts/ChecklistContext';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Generate static paths for all guide sections
export async function generateStaticParams() {
  const sections = getAllGuideSections();
  return sections.map((section) => ({
    slug: section.slug,
  }));
}

export default function GuideSectionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const section = getGuideSectionBySlug(slug);
  const { getTaskById } = useChecklist();

  if (!section) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Section Not Found</h1>
        <Link
          href="/dublin-moving-guide/guide"
          className="text-green-600 hover:text-green-700"
        >
          Back to Guide
        </Link>
      </div>
    );
  }

  const relatedTasks = section.relatedTasks
    .map(taskId => getTaskById(taskId))
    .filter(Boolean);

  return (
    <div className="space-y-6">
      {/* Back Link */}
      <Link
        href="/dublin-moving-guide/guide"
        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Guide
      </Link>

      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{section.title}</h1>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="prose prose-green max-w-none">
          <div dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br />') }} />
        </div>
      </div>

      {/* External Links */}
      {section.externalLinks.length > 0 && (
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <ExternalLink className="w-5 h-5 mr-2 text-blue-600" />
            Useful Links
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {section.externalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="font-medium text-blue-600 hover:text-blue-700">
                  {link.title} →
                </div>
                {link.description && (
                  <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                )}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* FAQs */}
      {section.faqs && section.faqs.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {section.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Tasks */}
      {relatedTasks.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Related Tasks</h3>
          <div className="space-y-4">
            {relatedTasks.map((task) => (
              <ChecklistItem key={task!.id} task={task!} showCategory />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
