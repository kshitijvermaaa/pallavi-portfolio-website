
import { Card, CardContent } from "./ui/card";
import { Heart, Lightbulb, Zap, Users, TrendingUp, Target, Award, BookOpen, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef: valuesRef, visibleItems: valuesVisible } = useStaggeredAnimation(4, 150);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.3 });

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Nearly 4 years of experience delivering high-impact content that drives engagement and leads.",
      color: "text-coral"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Proven track record of boosting blog traffic by 35% and email open rates by 25%+.",
      color: "text-sage"
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinking",
      description: "Aligning content with business goals through data-backed optimization and storytelling.",
      color: "text-pink-soft"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working seamlessly with sales, product, and design teams for unified messaging.",
      color: "text-coral"
    }
  ];

  const achievements = [
    { number: "100+", label: "Content Pieces Created" },
    { number: "35%", label: "Blog Traffic Increase" },
    { number: "4", label: "Years Experience" },
    { number: "25%+", label: "Email Open Rates" }
  ];

  const brandLogos = [
    { name: "Skil.AI", logo: "🤖" },
    { name: "Alore", logo: "📧" },
    { name: "DLF Magazine", logo: "📖" },
    { name: "Let's Off Leash", logo: "🐕" },
    { name: "Freelancer", logo: "💼" },
    { name: "Infinity Business", logo: "∞" }
  ];

  return (
    <section id="about" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your Go-To Content Strategist for <span className="text-coral">Data-Driven Storytelling</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I bring nearly 4 years of experience creating SEO blogs, case studies, web copy, email campaigns, and more — all driven by data and tailored to audience behavior. My strength lies in bridging brand strategy with compelling storytelling to generate real business outcomes.
          </p>
        </div>

        {/* Brand Logos */}
        <div className="mb-16">
          <p className="text-center text-muted-foreground mb-8">Trusted by brands like:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brandLogos.map((brand, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft hover:shadow-card transition-all duration-300">
                <span className="text-2xl">{brand.logo}</span>
                <span className="text-foreground font-medium">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-none shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-current/10 ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Let's Create Content That <span className="text-coral">Converts</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in creating content that not only engages audiences but also drives real business results. 
              From email campaigns that achieve 25%+ open rates to SEO blogs that boost organic traffic, 
              I focus on measurable outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need email copywriting, SEO content, case studies, or comprehensive content strategy, 
              I'm here to help your brand tell its story effectively and drive growth.
            </p>
            
            <div className="flex items-center gap-3 mt-6">
              <Award className="h-5 w-5 text-coral" />
              <span className="text-foreground font-medium">Google Digital Marketing Certified</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/171LCl7u9FH7nAO9ATTceCQYQ-01ywxOU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="coral" className="group">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <Button
                variant="outline"
                onClick={() =>
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-soft p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-coral mb-2 group-hover:text-sage transition-colors duration-300">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
