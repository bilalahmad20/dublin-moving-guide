'use client';

interface GuideContentRendererProps {
  content: string;
}

export default function GuideContentRenderer({ content }: GuideContentRendererProps) {
  // Helper function to render text with bold formatting
  const renderTextWithBold = (text: string) => {
    // Split by ** for bold text
    const parts = text.split('**');
    return parts.map((part, i) => {
      // Odd indices are bold (between **)
      if (i % 2 === 1) {
        return <strong key={i} className="font-bold text-gray-900">{part}</strong>;
      }
      return part;
    });
  };

  // Process the content to add proper styling
  const processContent = (rawContent: string) => {
    // Split by lines and process each section
    const lines = rawContent.split('\n').filter(line => line.trim());

    return lines.map((line, index) => {
      const trimmed = line.trim();

      // Headers starting with #
      if (trimmed.startsWith('# ')) {
        const headerText = trimmed.replace('# ', '');
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
            {renderTextWithBold(headerText)}
          </h2>
        );
      }

      if (trimmed.startsWith('## ')) {
        const headerText = trimmed.replace('## ', '');
        return (
          <h3 key={index} className="text-xl font-bold text-gray-900 mt-5 mb-2">
            {renderTextWithBold(headerText)}
          </h3>
        );
      }

      if (trimmed.startsWith('### ')) {
        const headerText = trimmed.replace('### ', '');
        return (
          <h4 key={index} className="text-lg font-semibold text-gray-900 mt-4 mb-2">
            {renderTextWithBold(headerText)}
          </h4>
        );
      }

      // Bullet points
      if (trimmed.startsWith('- ')) {
        const bulletText = trimmed.replace('- ', '');
        return (
          <li key={index} className="ml-6 mb-2 text-gray-700 leading-relaxed">
            {renderTextWithBold(bulletText)}
          </li>
        );
      }

      // Regular paragraph
      if (trimmed.length > 0) {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-3">
            {renderTextWithBold(trimmed)}
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
