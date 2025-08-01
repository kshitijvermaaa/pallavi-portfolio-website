import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'rotate-in' | 'slide-in-down';
  delay?: number;
  className?: string;
}

const AnimatedSection = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0,
  className = ''
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible 
          ? `animate-${animation} opacity-100` 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;