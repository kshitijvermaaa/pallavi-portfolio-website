
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, TrendingUp, Mail, FileText, Video, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import projectImage from "@/assets/project-showcase.jpg";

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "skil-ai",
      title: "Skil.AI Content Strategy",
      description: "Developed 100+ content pieces boosting blog traffic by 35% in 6 months. Led email campaigns achieving 25%+ open rates and 7% CTR.",
      image: projectImage,
      tags: ["Content Strategy", "SEO", "Email Marketing"],
      color: "coral",
      icon: TrendingUp,
      metrics: "35% traffic increase, 25%+ open rates"
    },
    {
      id: "alore-email",
      title: "Alore Email Campaigns",
      description: "Created 25+ email campaigns resulting in 28% increase in open rates and 22% lift in replies. Generated 50+ qualified leads through success stories.",
      image: projectImage,
      tags: ["Email Copywriting", "Lead Generation", "A/B Testing"],
      color: "sage",
      icon: Mail,
      metrics: "28% open rate increase, 50+ qualified leads"
    },
    {
      id: "seo-portfolio",
      title: "SEO Content Portfolio",
      description: "Published 80+ SEO-optimized blog articles increasing organic traffic by 20%. Improved SEO for 10+ pages through strategic keyword research.",
      image: projectImage,
      tags: ["SEO Writing", "Content Marketing", "Keyword Research"],
      color: "pink-soft",
      icon: FileText,
      metrics: "80+ articles, 20% traffic growth"
    },
    {
      id: "dlf-magazine",
      title: "DLF Magazine Editorial",
      description: "Wrote and edited digital magazine reflecting cultural and literary values. Collaborated with designers on layout, tone, and delivery.",
      image: projectImage,
      tags: ["Editorial", "Content Creation", "Brand Voice"],
      color: "coral",
      icon: Award,
      metrics: "Full magazine production"
    },
    {
      id: "lets-off-leash",
      title: "Let's Off Leash Scripts",
      description: "Scripted and optimized 15+ pet-parenting video scripts, contributing to audience engagement and channel growth.",
      image: projectImage,
      tags: ["Video Scripts", "YouTube", "Audience Engagement"],
      color: "sage",
      icon: Video,
      metrics: "15+ video scripts"
    },
    {
      id: "freelance-portfolio",
      title: "Freelance Portfolio",
      description: "Delivered 50+ projects including blogs, product descriptions, and whitepapers. Maintained 4.8/5 rating with 100% on-time delivery.",
      image: projectImage,
      tags: ["Freelance", "Diverse Content", "Client Relations"],
      color: "pink-soft",
      icon: ExternalLink,
      metrics: "50+ projects, 4.8/5 rating"
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
      coral: "text-coral",
      sage: "text-sage",
      "pink-soft": "text-pink-soft"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-coral">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here's a selection of my content strategy and copywriting projects, showcasing measurable results 
            and the diverse range of content I create for different industries and purposes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="bg-white/90 text-foreground border-white/20 hover:bg-white"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Case Study
                    </Button>
                  </div>
                </div>
                <div className={`absolute top-4 right-4 p-2 rounded-full bg-white/90 ${getIconColorClasses(project.color)}`}>
                  <project.icon className="h-5 w-5" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-coral transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-sage mb-2">Key Results:</div>
                  <div className="text-sm text-muted-foreground">{project.metrics}</div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getColorClasses(project.color)} transition-all duration-300 hover:scale-105`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="coral" size="lg" className="group">
            📞 Let's Create Magic Together
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
