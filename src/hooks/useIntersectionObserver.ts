import { useEffect, useRef, useState, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

interface IntersectionObserverResult {
  ref: RefObject<HTMLElement>;
  isIntersecting: boolean;
  entry?: IntersectionObserverEntry;
}

/**
 * Custom hook to observe element visibility using Intersection Observer API
 * Useful for lazy loading, animations on scroll, infinite scroll, etc.
 * 
 * @param threshold - Percentage of visibility required to trigger (0-1)
 * @param root - Element used as viewport for checking visibility
 * @param rootMargin - Margin around root element
 * @param freezeOnceVisible - Stop observing once element becomes visible
 * 
 * @example
 * ```tsx
 * const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });
 * 
 * return (
 *   <div ref={ref}>
 *     {isIntersecting ? 'Visible!' : 'Not visible'}
 *   </div>
 * );
 * ```
 */
export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}): IntersectionObserverResult {
  const ref = useRef<HTMLElement>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [isIntersecting, setIsIntersecting] = useState(false);

  const frozen = freezeOnceVisible && isIntersecting;

  useEffect(() => {
    const node = ref.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
      setIsIntersecting(entry.isIntersecting);
    }, observerParams);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, frozen]);

  return { ref, isIntersecting, entry };
}

export default useIntersectionObserver;

