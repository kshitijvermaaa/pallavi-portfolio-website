import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  isScrolling: boolean;
  targetSection?: string;
}

const ScrollIndicator = ({ isScrolling, targetSection }: ScrollIndicatorProps) => {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    if (isScrolling) {
      setShowIndicator(true);
      const timer = setTimeout(() => setShowIndicator(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [isScrolling]);

  if (!showIndicator) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
      <div className="bg-white/90 backdrop-blur-md rounded-full p-4 shadow-lg border border-coral/20 animate-pulse">
        <div className="flex flex-col items-center gap-2">
          <ChevronDown className="h-6 w-6 text-coral animate-bounce" />
          {targetSection && (
            <span className="text-sm font-medium text-coral capitalize">
              Scrolling to {targetSection}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;