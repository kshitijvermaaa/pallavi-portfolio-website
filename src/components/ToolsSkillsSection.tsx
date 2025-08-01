import { Card, CardContent } from './ui/card';
import { Settings, Zap, BarChart } from 'lucide-react';

const ToolsSkillsSection = () => {

  const toolCategories = [
    {
      category: "Design & Content Creation",
      icon: Settings,
      color: "coral",
      tools: [
        { name: "Canva", logo: "🎨", description: "Visual content design & graphics" },
        { name: "ChatGPT", logo: "🤖", description: "AI-powered content assistance" },
        { name: "Grammarly", logo: "✅", description: "Grammar & style checking" },
        { name: "MS Office", logo: "📄", description: "Professional document creation" },
        { name: "Google Workspace", logo: "☁️", description: "Collaboration & productivity suite" }
      ]
    },
    {
      category: "SEO & Analytics",
      icon: BarChart,
      color: "sage",
      tools: [
        { name: "Google Analytics", logo: "📊", description: "Traffic & conversion tracking" },
        { name: "SEMrush", logo: "📈", description: "Keyword research & competitor analysis" },
        { name: "Surfer SEO", logo: "🏄", description: "Content optimization & SEO insights" },
        { name: "WordPress", logo: "📝", description: "Content management & publishing" }
      ]
    },
    {
      category: "Email Marketing",
      icon: Zap,
      color: "pink-soft",
      tools: [
        { name: "Mailchimp", logo: "🐵", description: "Email campaign management" },
        { name: "Brevo", logo: "📧", description: "Email marketing automation" }
      ]
    }
  ];

  const skills = [
    { name: "Content Strategy", level: 95 },
    { name: "SEO Copywriting", level: 90 },
    { name: "Email Marketing", level: 92 },
    { name: "B2B Content", level: 88 },
    { name: "Case Study Writing", level: 85 },
    { name: "Social Media Content", level: 87 },
    { name: "Technical Writing", level: 83 },
    { name: "Conversion Optimization", level: 89 }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      coral: "text-coral bg-coral/10 border-coral/20",
      sage: "text-sage bg-sage/10 border-sage/20",
      "pink-soft": "text-pink-soft bg-pink-soft/10 border-pink-soft/20",
      purple: "text-purple-600 bg-purple-50 border-purple-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 85) return "bg-coral";
    if (level >= 80) return "bg-sage";
    return "bg-pink-soft";
  };

  return (
    <section className="py-16 bg-red-100 border-4 border-red-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Settings className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Tools & <span className="text-purple-600">Skills</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The professional tools and expertise I use to deliver exceptional content marketing results for your business.
          </p>
        </div>

        {/* Tools Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Professional Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {toolCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex}
                className="bg-white/80 backdrop-blur-sm shadow-card border-none hover:shadow-xl transition-all duration-500"
              >
                <CardContent className="p-6">
                  <div className={`flex items-center gap-3 mb-6 p-3 rounded-lg border ${getColorClasses(category.color)}`}>
                    <category.icon className="h-6 w-6" />
                    <h4 className="text-xl font-semibold">{category.category}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div 
                        key={toolIndex} 
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="text-2xl flex-shrink-0">{tool.logo}</span>
                        <div className="flex-1">
                          <h5 className="font-semibold text-foreground">{tool.name}</h5>
                          <p className="text-sm text-muted-foreground">{tool.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Core Skills & Expertise
          </h3>
          
          <Card className="bg-white/80 backdrop-blur-sm shadow-card border-none max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-foreground mb-4">Certifications & Training</h4>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-coral/10 text-coral rounded-full text-sm border border-coral/30">
                🎯 Google Digital Marketing Certified
              </span>
              <span className="px-3 py-1 bg-sage/10 text-sage rounded-full text-sm border border-sage/30">
                📊 Google Analytics Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSkillsSection;