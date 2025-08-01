import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Globe, PenTool, Target, TrendingUp, Users, Zap, FileText, Brain, Sparkles, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const WebsiteCopyShowcase = () => {
  const [activeWebsite, setActiveWebsite] = useState<'nextcx' | 'docubaat'>('nextcx');

  const websiteCopy = {
    nextcx: {
      name: 'NextCX.ai',
      url: 'https://nextcx.ai/',
      tagline: 'AI-Driven Customer Support Revolution',
      color: 'coral',
      icon: Zap,
      copy: {
        headline: "NextCX.ai redefines customer support with AI-driven chatbots that provide real-time, personalized interactions.",
        description: "The platform allows businesses to deploy no-code AI chatbots with seamless integration, optimizing operations and enhancing customer engagement. With easy customization, instant deployment, and third-party integrations, NextCX.ai helps businesses grow by improving support efficiency, increasing conversions, and automating workflows.",
        keyPoints: [
          "AI-driven chatbots for real-time support",
          "No-code deployment and customization",
          "Seamless third-party integrations",
          "Automated workflow optimization",
          "Enhanced customer engagement"
        ]
      },
      metrics: {
        conversionLift: "35%",
        engagementIncrease: "45%",
        supportEfficiency: "60%"
      },
      copyStrategy: {
        tone: "Professional, Tech-Forward, Solution-Oriented",
        focus: "Business Benefits & ROI",
        audience: "B2B Decision Makers, Tech Leaders"
      }
    },
    docubaat: {
      name: 'Docubaat',
      url: 'https://docubaat.com/',
      tagline: 'Unleash Your Documents',
      color: 'sage',
      icon: Brain,
      copy: {
        headline: "Docubaat is an AI-powered document reader that lets you upload, summarize, and interact with your documents effortlessly.",
        description: "Whether you're a student, professional, or knowledge seeker, Docubaat streamlines document management and provides instant insights. Transform how you work with documents through intelligent AI-powered analysis and interaction.",
        keyPoints: [
          "AI-powered document analysis",
          "Effortless upload and summarization",
          "Interactive document conversations",
          "Instant insights and extraction",
          "Multi-format document support"
        ]
      },
      metrics: {
        userSatisfaction: "92%",
        timesSaved: "70%",
        adoptionRate: "85%"
      },
      copyStrategy: {
        tone: "Approachable, Intelligent, Empowering",
        focus: "Productivity & Ease of Use",
        audience: "Students, Professionals, Knowledge Workers"
      }
    }
  };

  const currentWebsite = websiteCopy[activeWebsite];

  const getColorClasses = (color: string) => {
    const colorMap = {
      coral: "border-coral/20 bg-coral/5",
      sage: "border-sage/20 bg-sage/5",
      "pink-soft": "border-pink-soft/20 bg-pink-soft/5"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const getActiveColorClasses = (color: string) => {
    const colorMap = {
      coral: "bg-coral text-white",
      sage: "bg-sage text-white",
      "pink-soft": "bg-pink-soft text-white"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const getAccentColorClasses = (color: string) => {
    const colorMap = {
      coral: "text-coral",
      sage: "text-sage",
      "pink-soft": "text-pink-soft"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const handleWebsiteClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: metricsRef, visibleItems: metricsVisible } = useStaggeredAnimation(3, 150);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Website <span className="text-coral">Copywriting</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting compelling website copy that converts visitors into customers. Strategic messaging 
            that communicates value propositions clearly and drives business results.
          </p>
        </div>

        {/* Website Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-lg p-1 shadow-soft border">
            {Object.entries(websiteCopy).map(([key, website]) => (
              <button
                key={key}
                onClick={() => setActiveWebsite(key as 'nextcx' | 'docubaat')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeWebsite === key 
                    ? getActiveColorClasses(website.color)
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <website.icon className="h-4 w-4" />
                {website.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Copy Showcase */}
        <div className="max-w-6xl mx-auto">
          <Card 
            ref={cardRef}
            className={`overflow-hidden shadow-card border-none bg-white/70 backdrop-blur-sm mb-8 transition-all duration-700 ${
              cardVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Header */}
            <div className={`p-6 border-b border-border/50 ${getColorClasses(currentWebsite.color)}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${getActiveColorClasses(currentWebsite.color)}`}>
                    <currentWebsite.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{currentWebsite.name}</h3>
                    <p className={`text-sm font-medium ${getAccentColorClasses(currentWebsite.color)}`}>
                      {currentWebsite.tagline}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => handleWebsiteClick(currentWebsite.url)}
                  className={`${getActiveColorClasses(currentWebsite.color)} hover:opacity-90`}
                  size="sm"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  View Live Site
                </Button>
              </div>
            </div>

            {/* Copy Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Main Copy */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <PenTool className="h-5 w-5 text-coral" />
                    Website Copy
                  </h4>
                  
                  {/* Headline */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-coral">
                    <h5 className="text-sm font-medium text-muted-foreground mb-2">HEADLINE</h5>
                    <p className="text-lg font-semibold text-foreground leading-relaxed">
                      {currentWebsite.copy.headline}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-sage">
                    <h5 className="text-sm font-medium text-muted-foreground mb-2">DESCRIPTION</h5>
                    <p className="text-foreground leading-relaxed">
                      {currentWebsite.copy.description}
                    </p>
                  </div>

                  {/* Key Points */}
                  <div>
                    <h5 className="text-sm font-medium text-muted-foreground mb-3">KEY MESSAGING POINTS</h5>
                    <div className="space-y-2">
                      {currentWebsite.copy.keyPoints.map((point, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className={`h-4 w-4 ${getAccentColorClasses(currentWebsite.color)}`} />
                          <span className="text-sm text-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Strategy & Results */}
                <div>
                  {/* Copy Strategy */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-sage" />
                      Copy Strategy
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h5 className="text-sm font-medium text-blue-700 mb-1">Tone & Voice</h5>
                        <p className="text-sm text-blue-600">{currentWebsite.copyStrategy.tone}</p>
                      </div>
                      
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h5 className="text-sm font-medium text-purple-700 mb-1">Focus Areas</h5>
                        <p className="text-sm text-purple-600">{currentWebsite.copyStrategy.focus}</p>
                      </div>
                      
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="text-sm font-medium text-green-700 mb-1">Target Audience</h5>
                        <p className="text-sm text-green-600">{currentWebsite.copyStrategy.audience}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results Metrics */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-coral" />
                      Impact Metrics
                    </h4>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {Object.entries(currentWebsite.metrics).map(([key, value]) => (
                        <div key={key} className={`p-4 rounded-lg border-2 ${getColorClasses(currentWebsite.color)}`}>
                          <div className={`text-2xl font-bold ${getAccentColorClasses(currentWebsite.color)}`}>
                            {value}
                          </div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Analysis */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-border/50">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-coral" />
                Copy Analysis
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-coral">Clear Value Prop</div>
                  <div className="text-sm text-muted-foreground">Immediately communicates core benefits</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-sage">Action-Oriented</div>
                  <div className="text-sm text-muted-foreground">Drives user engagement and conversions</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-600">SEO Optimized</div>
                  <div className="text-sm text-muted-foreground">Strategic keyword integration</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="coral" 
            size="lg" 
            className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-soft"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ✍️ Let's Craft Your Website Copy
            <PenTool className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebsiteCopyShowcase;