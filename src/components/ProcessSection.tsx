
import { Card, CardContent } from "./ui/card";
import { Target, Lightbulb, PenTool, CheckCircle, TrendingUp, ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Target,
      title: "Understand",
      description: "Deep dive into your brand, audience, and goals to create a foundation for success.",
      details: ["Brand analysis", "Audience research", "Goal setting", "Competitive analysis"],
      color: "coral"
    },
    {
      icon: Lightbulb,
      title: "Strategize",
      description: "Develop a custom content plan tailored to your objectives and market position.",
      details: ["Content strategy", "Channel planning", "Timeline creation", "KPI definition"],
      color: "sage"
    },
    {
      icon: PenTool,
      title: "Create",
      description: "Craft compelling, on-brand content that resonates with your target audience.",
      details: ["Content creation", "SEO optimization", "Brand voice alignment", "Visual coordination"],
      color: "pink-soft"
    },
    {
      icon: CheckCircle,
      title: "Collaborate",
      description: "Work closely with you to refine and perfect every piece of content.",
      details: ["Review cycles", "Feedback integration", "Revisions", "Approval process"],
      color: "coral"
    },
    {
      icon: TrendingUp,
      title: "Optimize",
      description: "Monitor performance and continuously improve content for better results.",
      details: ["Performance tracking", "A/B testing", "Data analysis", "Strategy refinement"],
      color: "sage"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      coral: "bg-coral/10 text-coral border-coral/20",
      sage: "bg-sage/10 text-sage border-sage/20",
      "pink-soft": "bg-pink-soft/10 text-pink-soft border-pink-soft/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      coral: "text-coral bg-coral/10",
      sage: "text-sage bg-sage/10",
      "pink-soft": "text-pink-soft bg-pink-soft/10"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How I <span className="text-coral">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A proven 5-step process that ensures your content not only looks great but drives real business results. 
            Every project follows this structured approach for consistent, high-quality outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <Card className="h-full bg-white/70 backdrop-blur-sm border-none shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${getIconColorClasses(step.color)} group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-muted-foreground/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-soft p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's schedule a free consultation to discuss your content needs and how this process can work for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-coral text-white px-6 py-3 rounded-lg font-medium hover:bg-coral/90 transition-colors"
              >
                📞 Book Free Consultation
              </a>
              <a 
                href="mailto:pallavi.tanya.dey@gmail.com" 
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-6 py-3 rounded-lg font-medium border hover:bg-gray-50 transition-colors"
              >
                ✉️ Send Quick Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
