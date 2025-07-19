
import { Card, CardContent } from "./ui/card";
import { Award, Users, TrendingUp, Star, CheckCircle, Globe } from "lucide-react";

const TrustSignals = () => {
  const achievements = [
    {
      icon: Award,
      title: "Google Certified",
      description: "Digital Marketing Professional",
      color: "coral"
    },
    {
      icon: Users,
      title: "50+ Projects",
      description: "Successfully delivered",
      color: "sage"
    },
    {
      icon: TrendingUp,
      title: "4.8/5 Rating",
      description: "Client satisfaction score",
      color: "pink-soft"
    },
    {
      icon: CheckCircle,
      title: "100% On-Time",
      description: "Delivery record",
      color: "coral"
    }
  ];

  const clientTypes = [
    "B2B SaaS Companies",
    "AI & Tech Startups", 
    "Digital Marketing Agencies",
    "E-commerce Brands",
    "Professional Services",
    "Educational Platforms"
  ];

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      coral: "text-coral bg-coral/10",
      sage: "text-sage bg-sage/10",
      "pink-soft": "text-pink-soft bg-pink-soft/10"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  return (
    <section className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-coral">Growing Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nearly 4 years of delivering results-driven content for diverse industries. 
            Here's what sets my work apart and why clients keep coming back.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-none shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${getIconColorClasses(achievement.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">{achievement.title}</h3>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Client Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-coral" />
              What Clients Say
            </h3>
            
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-coral fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground font-medium mb-4">
                  "Pallavi's strategic approach to content completely transformed our organic reach. 
                  Her ability to translate complex AI concepts into engaging content is remarkable."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Marketing Director, AI Startup
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-sage fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground font-medium mb-4">
                  "The email campaigns consistently outperformed our benchmarks. 
                  Her storytelling approach made technical features feel personal and compelling."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Founder, B2B SaaS Platform
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-pink-soft fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground font-medium mb-4">
                  "Professional, reliable, and results-driven. Pallavi delivered exactly what we needed 
                  to boost our content marketing efforts."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  — Content Manager, Tech Company
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Industries Served */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Globe className="h-6 w-6 text-sage" />
              Industries I Serve
            </h3>
            
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-soft mb-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {clientTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-coral flex-shrink-0" />
                      <span className="text-foreground text-sm">{type}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recognition */}
            <Card className="bg-gradient-soft p-6 border-none shadow-soft">
              <div className="text-center">
                <Award className="h-12 w-12 text-coral mx-auto mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Google Digital Marketing Certified
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Continuously updating skills with the latest digital marketing best practices and strategies.
                </p>
                <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full text-sm">
                  <CheckCircle className="h-4 w-4 text-sage" />
                  <span className="text-foreground">Verified Certification</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
