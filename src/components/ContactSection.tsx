
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail, ArrowRight, MapPin, Linkedin, Award, Globe, Calendar, FileText } from "lucide-react";

const ContactSection = () => {
  const contactOptions = [
    {
      icon: Mail,
      title: "Let's Talk",
      description: "Drop me a line at pallavi.tanya.dey@gmail.com",
      action: "Send Email",
      href: "mailto:pallavi.tanya.dey@gmail.com",
      color: "coral"
    },
    {
      icon: Linkedin,
      title: "Connect on LinkedIn",
      description: "Let's connect professionally and discuss opportunities",
      action: "View Profile",
      href: "https://www.linkedin.com/in/pallavi-dey-367979198/",
      color: "sage"
    },
    {
      icon: FileText,
      title: "Download My Resume",
      description: "Get a detailed overview of my work and results",
      action: "Download PDF",
      href: "https://drive.google.com/file/d/171LCl7u9FH7nAO9ATTceCQYQ-01ywxOU/view?usp=sharing",
      color: "pink-soft"
    }
  ];

  const languages = [
    { language: "English", proficiency: "Fluent" },
    { language: "Hindi", proficiency: "Native" },
    { language: "Bengali", proficiency: "Native" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      coral: "text-coral bg-coral/10 hover:bg-coral/20",
      sage: "text-sage bg-sage/10 hover:bg-sage/20",
      "pink-soft": "text-pink-soft bg-pink-soft/10 hover:bg-pink-soft/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-coral">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to boost your content strategy and drive real results? I'd love to discuss how we can 
            work together to create compelling content that engages your audience and supports your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-none shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${getColorClasses(option.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{option.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{option.description}</p>
                <Button 
                  variant="outline" 
                  className="group hover:bg-current/10"
                  onClick={() => window.open(option.href, '_blank')}
                >
                  {option.action}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-coral" />
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-coral" />
                <span className="text-foreground">pallavi.tanya.dey@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-sage" />
                <a 
                  href="https://www.linkedin.com/in/pallavi-dey-367979198/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-sage transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-pink-soft" />
                <span className="text-foreground">India</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-coral" />
                <span className="text-foreground">Google Digital Marketing Certified</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Globe className="h-6 w-6 text-sage" />
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-foreground font-medium">{lang.language}</span>
                  <span className="text-sm px-3 py-1 bg-sage/10 text-sage rounded-full">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Boost Your <span className="text-coral">Content Strategy</span>?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you need email campaigns, SEO content, case studies, or comprehensive content strategy, 
                I'm here to help your brand achieve measurable results.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full"></div>
                  <span className="text-foreground">Free consultation call</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span className="text-foreground">Quick turnaround time</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-soft rounded-full"></div>
                  <span className="text-foreground">Data-driven approach</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <Button 
                variant="coral" 
                size="xl" 
                className="group"
                onClick={() => window.open('mailto:pallavi.tanya.dey@gmail.com', '_blank')}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Available for new projects • Quick response time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
