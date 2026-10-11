import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  fallbackIcon?: React.ReactNode;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackText,
  fallbackIcon,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-neutral-100 text-neutral-600 border border-neutral-200 text-center p-4 rounded-lg select-none ${className}`}
        role="img"
        aria-label={alt || 'Imagem institucional'}
      >
        {fallbackIcon && <div className="mb-2 text-neutral-400">{fallbackIcon}</div>}
        <span className="text-xs font-semibold text-neutral-700 tracking-wide uppercase">
          {fallbackText || alt || 'Belo Horizonte'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      onLoad={() => setIsLoaded(true)}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-90'} ${className}`}
      {...props}
    />
  );
};
