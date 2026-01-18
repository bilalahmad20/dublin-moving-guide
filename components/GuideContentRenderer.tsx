'use client';

interface GuideContentRendererProps {
  content: string;
}

export default function GuideContentRenderer({ content }: GuideContentRendererProps) {
  // Process the content to add proper styling
  const processContent = (rawContent: string) => {
    // Split by lines and process each section
    const lines = rawContent.split('\n').filter(line => line.trim());

    return lines.map((line, index) => {
      const trimmed = line.trim();

      // Headers starting with #
      if (trimmed.startsWith('# ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
            {trimmed.replace('# ', '')}
          </h2>
        );
      }

      if (trimmed.startsWith('## ')) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-900 mt-5 mb-2">
            {trimmed.replace('## ', '')}
          </h3>
        );
      }

      if (trimmed.startsWith('### ')) {
        return (
          <h4 key={index} className="text-lg font-semibold text-gray-900 mt-4 mb-2">
            {trimmed.replace('### ', '')}
          </h4>
        );
      }

      // Bullet points
      if (trimmed.startsWith('- ')) {
        return (
          <li key={index} className="ml-6 mb-2 text-gray-700 leading-relaxed">
            {trimmed.replace('- ', '')}
          </li>
        );
      }

      // Bold text
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        return (
          <p key={index} className="font-bold text-gray-900 mt-3 mb-2">
            {trimmed.replace(/\*\*/g, '')}
          </p>
        );
      }

      // Regular paragraph
      if (trimmed.length > 0) {
        // Check if it contains bold text
        const hasBold = trimmed.includes('**');
        if (hasBold) {
          const parts = trimmed.split('**');
          return (
            <p key={index} className="text-gray-700 leading-relaxed mb-3">
              {parts.map((part, i) =>
                i % 2 === 0 ? part : <strong key={i} className="font-bold text-gray-900">{part}</strong>
              )}
            </p>
          );
        }

        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-3">
            {trimmed}
          </p>
        );
      }

      return null;
    });
  };

  return (
    <div className="space-y-2">
      {processContent(content)}
    </div>
  );
}
