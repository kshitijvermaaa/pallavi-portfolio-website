
import { Card, CardContent } from "./ui/card";
import { Mail, Search, Globe, Target, FileText, Repeat, PenTool, Users } from "lucide-react";
import { Button } from "./ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "with 25%+ open rates",
      details: "Strategic email sequences that convert subscribers into customers through compelling storytelling and data-driven optimization.",
      color: "coral"
    },
    {
      icon: Search,
      title: "SEO Blogs",
      description: "with 35% traffic boosts",
      details: "Research-backed content that ranks on Google and drives qualified traffic to your business.",
      color: "sage"
    },
    {
      icon: Globe,
      title: "Website Copy",
      description: "that aligns with brand voice",
      details: "Conversion-focused web copy that tells your brand story and guides visitors through your funnel.",
      color: "pink-soft"
    },
    {
      icon: Target,
      title: "Content Strategy",
      description: "that maps to funnel stages",
      details: "Comprehensive content plans that align with your business goals and customer journey.",
      color: "coral"
    },
    {
      icon: FileText,
      title: "Case Studies",
      description: "that convert leads into clients",
      details: "Compelling success stories that build trust and demonstrate your value proposition.",
      color: "sage"
    },
    {
      icon: PenTool,
      title: "Newsletters & LinkedIn",
      description: "Ghostwriting services",
      details: "Regular content that keeps your audience engaged and positions you as a thought leader.",
      color: "pink-soft"
    },
    {
      icon: Repeat,
      title: "Repurposed Content",
      description: "for extended shelf life",
      details: "Transform one piece of content into multiple formats to maximize your content investment.",
      color: "coral"
    },
    {
      icon: Users,
      title: "Retainer Projects",
      description: "ongoing partnerships",
      details: "Long-term content partnerships for consistent, high-quality output aligned with your growth.",
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
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What I <span className="text-coral">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I specialize in creating high-performing content across the entire customer journey. 
            Here's how I can help your business grow:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${getIconColorClasses(service.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-coral transition-colors">
                  {service.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${service.color === 'coral' ? 'text-coral' : service.color === 'sage' ? 'text-sage' : 'text-pink-soft'}`}>
                  {service.description}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-soft p-8 rounded-3xl text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              📌 Available for retainer projects, short-term campaigns, or ongoing freelance roles.
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you need a one-time content audit or ongoing strategic support, 
              I'm here to help scale your content efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="coral" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                📞 Let's Talk Strategy
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
