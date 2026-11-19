import React, { useState } from 'react';
import { Compass } from 'lucide-react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
  imgClassName?: string;
  loading?: 'eager' | 'lazy';
}

export function ArchitecturalImage({
  src,
  alt,
  title,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}: ArchitecturalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-surface-subtle text-muted-foreground p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Compass className="w-8 h-8 stroke-[1.25] mb-3 text-primary" aria-hidden="true" />
        <p className="font-display text-lg text-foreground tracking-tight">{title}</p>
        <p className="text-xs text-muted-foreground mt-1">Registro fotográfico arquitetônico</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-surface-subtle ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
