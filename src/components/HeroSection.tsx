
import { Button } from "./ui/button";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-coral">
                <Sparkles className="h-5 w-5 animate-bounce-gentle" />
                <span className="text-sm font-medium tracking-wide uppercase">
                  Content Strategist & Copywriter
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Content that{" "}
                <span className="text-coral">Converts</span>.{" "}
                <br />
                Strategy that{" "}
                <span className="text-sage">Scales</span>.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                I'm{" "}
                <span className="font-semibold text-coral">Pallavi Dey</span> — a Content Strategist & Copywriter helping{" "}
                <span className="font-semibold text-sage">SaaS</span>,{" "}
                <span className="font-semibold text-pink-soft">AI</span>, and{" "}
                <span className="font-semibold text-coral">B2B brands</span> grow with compelling, high-performing content across the full funnel.
              </p>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-coral" />
                <span>India</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="coral" 
                size="xl"
                className="group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="soft" 
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Content strategist and copywriter"
                className="w-full h-auto rounded-3xl shadow-card animate-float"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-pink-soft/30 rounded-full blur-lg animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
