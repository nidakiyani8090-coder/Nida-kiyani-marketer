import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#EDE5DB] text-[#6D263C] p-6 text-center ${className}`}
      >
        <ImageIcon className="w-8 h-8 mb-2 opacity-60" strokeWidth={1.5} />
        <span className="font-serif text-sm text-[#282525]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
