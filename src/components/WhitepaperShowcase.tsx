import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Download, Calendar, User, BookOpen, Award, Zap } from "lucide-react";

const WhitepaperShowcase = () => {
  const whitepapers = [
    {
      id: 1,
      title: "AI Automation in Omnichannel Contact Centers – A Skil.ai White Paper",
      excerpt: "Transforming Customer Service with AI-Powered Virtual Assistants. A comprehensive guide to implementing AI automation that delivers exceptional customer experiences across all channels.",
      description: "This strategic whitepaper explores how Skil.ai's AI-powered platform revolutionizes contact center operations through intelligent virtual assistants. It addresses critical challenges like fragmented customer journeys, high operational costs, and limited scalability while demonstrating how AI automation can achieve 25-30% cost reduction and 67% customer satisfaction rates.",
      downloadUrl: "/Skil%20AI%20-%20Whitepaper.pdf",
      author: "Pallavi",
      date: "January 2025",
      pages: "21 pages",
      category: "AI & Contact Centers",
      tags: ["AI Automation", "Contact Centers", "Virtual Assistants", "Omnichannel", "Customer Service"],
      color: "sage",
      icon: FileText,
      keyInsights: [
        "AI automation can reduce customer service operational costs by 25-30%",
        "95% of customer interactions will be AI-powered by 2025",
        "Omnichannel AI support achieves 67% CSAT vs 28% for disconnected channels",
        "Average ROI of $3.50 returned for every $1 invested in AI customer service"
      ],
      readingTime: "18 min read"
    },
    {
      id: 2,
      title: "CX Transformation with AI for Seamless Customer Engagement – NextCX.ai",
      excerpt: "Reimagining Customer Experience through AI-Powered Chatbots and Omnichannel Integration. A comprehensive analysis of how AI transforms customer engagement across all touchpoints.",
      description: "This strategic whitepaper explores how organizations can leverage NextCX.ai's AI-powered platform to deliver seamless, intelligent customer engagement. It addresses critical CX challenges like disconnected channels, slow response times, and high support costs while demonstrating how AI chatbots can increase satisfaction by 39% and reduce support costs by 30%.",
      downloadUrl: "/Next%20CX%20-%20Whitepaper.pdf",
      author: "Pallavi",
      date: "August 2025",
      pages: "23 pages",
      category: "AI & Customer Experience",
      tags: ["AI Transformation", "Customer Experience", "Omnichannel", "ChatBots", "Digital Innovation"],
      color: "coral",
      icon: Award,
      keyInsights: [
        "AI-driven omnichannel integration increases customer lifetime value by 25%",
        "Seamless CX can raise customer satisfaction from 28% to 67%",
        "No-code bot deployment reduces implementation time from months to weeks",
        "Real-time personalization drives 40% higher revenue than traditional approaches"
      ],
      readingTime: "25 min read"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      coral: "border-coral/20 hover:border-coral/40",
      sage: "border-sage/20 hover:border-sage/40",
      "pink-soft": "border-pink-soft/20 hover:border-pink-soft/40"
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

  const getButtonColorClasses = (color: string) => {
    const colorMap = {
      coral: "bg-coral text-white hover:bg-coral/90",
      sage: "bg-sage text-white hover:bg-sage/90",
      "pink-soft": "bg-pink-soft text-white hover:bg-pink-soft/90"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const handleDownload = (downloadUrl: string, title: string) => {
    if (downloadUrl !== "#") {
      window.open(downloadUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.log(`Download requested for: ${title}`);
    }
  };

  return (
    <section id="whitepaper-showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Research <span className="text-coral">Whitepapers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In-depth research and strategic insights that demonstrate thought leadership and 
            provide actionable frameworks for business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {whitepapers.map((paper, index) => (
            <Card 
              key={paper.id} 
              className={`group overflow-hidden border-2 ${getColorClasses(paper.color)} shadow-soft hover:shadow-card transition-all duration-300 hover:scale-[1.02] bg-white/70 backdrop-blur-sm`}
            >
              {/* Header with Icon and Category */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${getIconColorClasses(paper.color)}`}>
                    <paper.icon className="h-6 w-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getIconColorClasses(paper.color)} border ${getColorClasses(paper.color)}`}>
                    {paper.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-coral transition-colors leading-tight">
                  {paper.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {paper.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{paper.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{paper.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>{paper.pages}</span>
                  </div>
                </div>

                {/* Key Insights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Key Insights:
                  </h4>
                  <ul className="space-y-2">
                    {paper.keyInsights.map((insight, insightIndex) => (
                      <li key={insightIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${paper.color === 'coral' ? 'bg-coral' : 'bg-sage'} mt-2 flex-shrink-0`}></div>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Download Button */}
                <div className="mb-4">
                  <Button 
                    className={`w-full ${getButtonColorClasses(paper.color)} group-hover:translate-y-[-2px] transition-all duration-300 shadow-soft hover:shadow-card`}
                    onClick={() => handleDownload(paper.downloadUrl, paper.title)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <BookOpen className="h-3 w-3" />
                    <span>{paper.readingTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <FileText className="h-3 w-3" />
                    <span className="text-xs">Research Paper</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            variant="coral" 
            size="lg" 
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            📄 Commission Your Custom Whitepaper
            <Zap className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperShowcase;