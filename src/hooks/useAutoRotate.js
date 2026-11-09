/**
 * useAutoRotate — Cycles an active index on an interval so card groups can
 * auto-advance. Pauses on hover/focus, restarts on manual selection and is
 * disabled when the user prefers reduced motion.
 */
import { useCallback, useEffect, useRef, useState } from 'react';

const useAutoRotate = (length, { interval = 5000, enabled = true } = {}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const isEnabled = enabled && length > 1;

  useEffect(() => {
    if (!isEnabled || isPaused) return undefined;

    timerRef.current = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % length);
    }, interval);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [activeIndex, interval, isEnabled, isPaused, length]);

  useEffect(() => {
    const handleVisibility = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const select = useCallback(
    (index) => {
      setActiveIndex(((index % length) + length) % length);
    },
    [length],
  );

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  const pauseHandlers = {
    onMouseEnter: pause,
    onMouseLeave: resume,
    onFocusCapture: pause,
    onBlurCapture: (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) resume();
    },
  };

  return {
    activeIndex,
    select,
    isPaused,
    pause,
    resume,
    pauseHandlers,
    isEnabled,
  };
};

export default useAutoRotate;
