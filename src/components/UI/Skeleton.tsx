import React from 'react';
import './Skeleton.scss';

interface SkeletonProps {
  /**
   * Variant of skeleton
   * - text: Single line text
   * - title: Larger text (heading)
   * - circular: Circle (for avatars)
   * - rectangular: Rectangle (for images, cards)
   * - rounded: Rectangle with rounded corners
   */
  variant?: 'text' | 'title' | 'circular' | 'rectangular' | 'rounded';
  
  /**
   * Width of skeleton (CSS value: px, %, rem, etc.)
   */
  width?: string | number;
  
  /**
   * Height of skeleton (CSS value: px, %, rem, etc.)
   */
  height?: string | number;
  
  /**
   * Number of skeleton lines (only for text variant)
   */
  count?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Animation type
   */
  animation?: 'pulse' | 'wave' | 'none';
}

/**
 * Skeleton component for loading states
 * Provides visual placeholder while content is loading
 * 
 * @example
 * ```tsx
 * // Text skeleton
 * <Skeleton variant="text" count={3} />
 * 
 * // Avatar skeleton
 * <Skeleton variant="circular" width={50} height={50} />
 * 
 * // Image skeleton
 * <Skeleton variant="rectangular" width="100%" height={200} />
 * 
 * // Custom skeleton
 * <Skeleton width={300} height={20} animation="wave" />
 * ```
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  count = 1,
  className = '',
  animation = 'pulse',
}) => {
  const getDefaultDimensions = () => {
    switch (variant) {
      case 'title':
        return { width: '60%', height: '32px' };
      case 'text':
        return { width: '100%', height: '16px' };
      case 'circular':
        return { width: '40px', height: '40px' };
      case 'rectangular':
      case 'rounded':
        return { width: '100%', height: '200px' };
      default:
        return { width: '100%', height: '16px' };
    }
  };

  const defaultDimensions = getDefaultDimensions();
  const finalWidth = width ?? defaultDimensions.width;
  const finalHeight = height ?? defaultDimensions.height;

  // Dynamic styles based on props - inline styles necessary for dynamic sizing
  // eslint-disable-next-line react/forbid-component-props
  const skeletonStyle: React.CSSProperties = {
    width: typeof finalWidth === 'number' ? `${finalWidth}px` : finalWidth,
    height: typeof finalHeight === 'number' ? `${finalHeight}px` : finalHeight,
  };

  const skeletonClasses = [
    'skeleton',
    `skeleton--${variant}`,
    `skeleton--${animation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Render multiple skeletons for text
  if (variant === 'text' && count > 1) {
    return (
      <div className="skeleton-group">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={skeletonClasses}
            style={{
              ...skeletonStyle,
              // Make last line shorter for more realistic look
              width: index === count - 1 ? '80%' : finalWidth,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={skeletonClasses}
      style={skeletonStyle}
      aria-hidden="true"
      aria-label="Loading..."
    />
  );
};

/**
 * Pre-configured skeleton for card loading
 */
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`skeleton-card ${className}`}>
      <Skeleton variant="rectangular" height={180} />
      <div className="skeleton-card__content">
        <Skeleton variant="title" width="70%" />
        <Skeleton variant="text" count={3} />
        <div className="skeleton-card__footer">
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
    </div>
  );
};

/**
 * Pre-configured skeleton for profile loading
 */
export const SkeletonProfile: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`skeleton-profile ${className}`}>
      <Skeleton variant="circular" width={100} height={100} />
      <Skeleton variant="title" width="60%" />
      <Skeleton variant="text" count={2} width="80%" />
    </div>
  );
};

export default Skeleton;

