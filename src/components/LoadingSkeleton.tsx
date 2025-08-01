interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'circle' | 'rectangle';
  animate?: boolean;
}

const LoadingSkeleton = ({ 
  className = '', 
  variant = 'rectangle',
  animate = true 
}: LoadingSkeletonProps) => {
  const baseClasses = "bg-gray-200 rounded";
  const animationClasses = animate ? "animate-pulse" : "";
  
  const variantClasses = {
    text: "h-4 w-full",
    card: "h-32 w-full",
    circle: "h-12 w-12 rounded-full",
    rectangle: "h-6 w-24"
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses} ${className}`}
    />
  );
};

export default LoadingSkeleton;