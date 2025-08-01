import { useEffect, useState } from 'react';

// Easing function for smooth scrolling
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

export const useSmoothScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToElement = (
    elementId: string, 
    duration: number = 1000,
    offset: number = -80
  ) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    setIsScrolling(true);
    
    const startPosition = window.scrollY;
    const targetPosition = element.offsetTop + offset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easedProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return { scrollToElement, isScrolling };
};

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navigation height

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    handleScroll(); // Set initial active section
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};