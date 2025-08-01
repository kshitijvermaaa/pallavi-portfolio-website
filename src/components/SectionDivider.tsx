import { Separator } from "./ui/separator";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface SectionDividerProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'featured' | 'social';
}

const SectionDivider = ({ title, subtitle, variant = 'default' }: SectionDividerProps) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true
  });

  const getVariantClasses = () => {
    switch (variant) {
      case 'featured':
        return 'bg-gradient-to-r from-coral/10 to-pink-soft/10 border-coral/20';
      case 'social':
        return 'bg-gradient-to-r from-sage/10 to-green-50 border-sage/20';
      default:
        return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200';
    }
  };

  if (!title) {
    return (
      <div 
        ref={elementRef}
        className={`py-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <Separator className="max-w-4xl mx-auto" />
      </div>
    );
  }

  return (
    <div 
      ref={elementRef}
      className={`py-8 border-t border-b ${getVariantClasses()} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className={`text-2xl md:text-3xl font-bold text-foreground mb-2 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}>
          {title}
        </h3>
        {subtitle && (
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionDivider;