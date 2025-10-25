import { useEffect, useState, useCallback } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

interface UseScrollPositionOptions {
  throttle?: number;
}

/**
 * Custom hook to track scroll position
 * Returns current scroll position (x, y) with optional throttling
 * 
 * @param throttle - Milliseconds to throttle scroll event (default: 100ms)
 * 
 * @example
 * ```tsx
 * const { x, y } = useScrollPosition({ throttle: 200 });
 * 
 * return (
 *   <div>
 *     Scroll position: X={x}, Y={y}
 *   </div>
 * );
 * ```
 */
export function useScrollPosition({ throttle = 100 }: UseScrollPositionOptions = {}): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  const handleScroll = useCallback(() => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const throttledHandleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, throttle);
      }
    };

    // Get initial position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll, throttle]);

  return scrollPosition;
}

export default useScrollPosition;

