import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Play, ExternalLink, Video, Eye, Users } from "lucide-react";

const YouTubeWorksSection = () => {
  const youtubeWorks = [
    {
      id: "dog-training-script",
      title: "Dog Training Mastery",
      videoUrl: "https://youtu.be/xKXQh3vAhsw?si=OsEnQXdZGAuQ720Y",
      description: "Crafted engaging script for comprehensive dog training guide, focusing on positive reinforcement techniques and building strong human-canine bonds.",
      thumbnail: `https://img.youtube.com/vi/xKXQh3vAhsw/maxresdefault.jpg`,
      tags: ["Pet Training", "Educational Content", "Script Writing"],
      color: "coral",
      metrics: "Engaging educational content",
      duration: "Training Guide"
    },
    {
      id: "pet-care-script",
      title: "Complete Pet Care Guide",
      videoUrl: "https://youtu.be/CVey5F1BUWo?si=hBwawRVTalbKmnGM",
      description: "Developed comprehensive script covering essential pet care practices, health monitoring, and creating optimal living environments for pets.",
      thumbnail: `https://img.youtube.com/vi/CVey5F1BUWo/maxresdefault.jpg`,
      tags: ["Pet Care", "Health & Wellness", "Content Strategy"],
      color: "sage",
      metrics: "Comprehensive care guide",
      duration: "Care Guide"
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

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="youtube-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            YouTube <span className="text-coral">Script Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing my video scriptwriting expertise through educational content that engages audiences 
            and delivers valuable insights in the pet care and training space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {youtubeWorks.map((work, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm">
              <div className="relative overflow-hidden cursor-pointer" onClick={() => handleVideoClick(work.videoUrl)}>
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 hover:bg-white p-4 rounded-full transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <Play className="h-8 w-8 text-coral ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Video className="h-4 w-4" />
                    <span>{work.duration}</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="bg-white/90 text-foreground border-white/20 hover:bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoClick(work.videoUrl);
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Watch
                  </Button>
                </div>
                <div className={`absolute top-4 right-4 p-2 rounded-full bg-white/90 ${getIconColorClasses(work.color)}`}>
                  <Video className="h-5 w-5" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-coral transition-colors">
                  {work.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {work.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-sage mb-2">Content Focus:</div>
                  <div className="text-sm text-muted-foreground">{work.metrics}</div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getColorClasses(work.color)} transition-all duration-300 hover:scale-105`}
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
          <Button 
            variant="coral" 
            size="lg" 
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🎬 Let's Create Your Next Video Script
            <Video className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeWorksSection;