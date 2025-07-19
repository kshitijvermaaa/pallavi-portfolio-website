
import { Card, CardContent } from "./ui/card";
import { CheckCircle, TrendingUp, Mail, Globe, Clock, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: CheckCircle,
      number: "100+",
      label: "Content Pieces Delivered",
      color: "coral"
    },
    {
      icon: TrendingUp,
      number: "35%",
      label: "Blog Traffic Growth",
      color: "sage"
    },
    {
      icon: Mail,
      number: "25%+",
      label: "Email Open Rates",
      color: "pink-soft"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Global Clients",
      color: "coral"
    },
    {
      icon: Clock,
      number: "100%",
      label: "On-Time Delivery",
      color: "sage"
    },
    {
      icon: Star,
      number: "4.8/5",
      label: "Client Satisfaction",
      color: "pink-soft"
    }
  ];

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      coral: "text-coral bg-coral/10",
      sage: "text-sage bg-sage/10",
      "pink-soft": "text-pink-soft bg-pink-soft/10"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const getNumberColor = (color: string) => {
    const colorMap = {
      coral: "text-coral",
      sage: "text-sage",
      "pink-soft": "text-pink-soft"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why <span className="text-coral">Hire Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Numbers that speak louder than words. Here's the impact I've delivered for clients across industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-none shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 group text-center">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${getIconColorClasses(stat.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className={`text-2xl md:text-3xl font-bold mb-2 ${getNumberColor(stat.color)} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl max-w-4xl mx-auto shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to see similar results for your brand?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how data-driven content strategy can transform your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-coral text-white px-6 py-3 rounded-lg font-medium hover:bg-coral/90 transition-colors"
              >
                📞 Book Free Discovery Call
              </a>
              <a 
                href="mailto:pallavi.tanya.dey@gmail.com" 
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-6 py-3 rounded-lg font-medium border hover:bg-gray-50 transition-colors"
              >
                📩 Send Quick Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
