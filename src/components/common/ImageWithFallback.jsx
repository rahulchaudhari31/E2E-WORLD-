/**
 * ImageWithFallback — Image with a shimmering placeholder, blur-up reveal
 * and a clear fallback state when an asset cannot be loaded.
 */
import { useState } from 'react';
import { ImageOff } from 'lucide-react';

/**
 * @param {object} props
 * @param {string} props.src Image source URL.
 * @param {string} props.alt Alternative text; use an empty string for decorative images.
 * @param {string} [props.className] Classes for the wrapper.
 * @param {string} [props.imgClassName] Classes for the image element.
 * @param {string} [props.fallbackClassName] Extra classes for the placeholder layer.
 * @param {'lazy'|'eager'} [props.loading='lazy'] Native loading strategy.
 * @param {'high'|'low'|'auto'} [props.fetchPriority='auto'] Fetch priority hint.
 */
const ImageWithFallback = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  fallbackClassName = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  ...props
}) => {
  const [status, setStatus] = useState('loading');
  const failed = status === 'error';

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {status !== 'loaded' && (
        <div
          className={`absolute inset-0 ${
            failed ? 'bg-slate-200' : 'image-skeleton'
          } ${fallbackClassName}`}
          aria-hidden="true"
        >
          {failed && (
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center text-slate-400">
              <ImageOff size={28} strokeWidth={1.5} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                Image unavailable
              </span>
            </span>
          )}
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchpriority={fetchPriority}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`h-full w-full object-cover transition-[opacity,filter,transform] duration-700 ${
          status === 'loaded'
            ? 'scale-100 opacity-100 blur-0'
            : 'scale-105 opacity-0 blur-md'
        } ${imgClassName}`}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;
