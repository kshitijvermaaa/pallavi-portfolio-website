import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, BookOpen, Calendar, User, ArrowRight, FileText, Zap } from "lucide-react";

const BlogShowcase = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Collaborative Learning Techniques: Engaging Classrooms",
      excerpt: "Explore innovative collaborative learning methods that transform traditional classrooms into dynamic, interactive learning environments where students actively participate and learn from each other.",
      url: "https://docubaat.com/blog/bc9998d0298411f0b23b6deb",
      author: "Pallavi",
      date: "2024",
      readTime: "5 min read",
      category: "Education",
      tags: ["Collaboration", "Learning", "Education", "Classroom Management"],
      color: "sage",
      icon: BookOpen,
      preview: "Discover how collaborative learning techniques can revolutionize classroom engagement and improve student outcomes through peer-to-peer interaction and shared knowledge building."
    },
    {
      id: 2,
      title: "Document Management Innovation",
      excerpt: "Deep dive into modern document management solutions and how digital transformation is reshaping how organizations handle, store, and interact with their critical documents.",
      url: "https://docubaat.com/blog/df2afbd0ecfa11ef8e7ea9eb",
      author: "Pallavi",
      date: "2024",
      readTime: "7 min read",
      category: "Technology",
      tags: ["Document Management", "Digital Transformation", "Productivity", "Innovation"],
      color: "coral",
      icon: FileText,
      preview: "Learn about cutting-edge document management practices that enhance organizational efficiency and enable seamless digital workflows."
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

  const handleBlogClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="blog-showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-coral">Blog Posts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing my thought leadership and expertise through in-depth articles on education, 
            technology, and digital innovation that engage readers and drive meaningful conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className={`group overflow-hidden border-2 ${getColorClasses(post.color)} shadow-soft hover:shadow-card transition-all duration-300 hover:scale-[1.02] bg-white/70 backdrop-blur-sm cursor-pointer`}
              onClick={() => handleBlogClick(post.url)}
            >
              {/* Header with Icon and Category */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${getIconColorClasses(post.color)}`}>
                    <post.icon className="h-6 w-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getIconColorClasses(post.color)} border ${getColorClasses(post.color)}`}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-coral transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Preview */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.preview}
                </p>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <Button 
                  className={`w-full ${getButtonColorClasses(post.color)} group-hover:translate-y-[-2px] transition-all duration-300 shadow-soft hover:shadow-card`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBlogClick(post.url);
                  }}
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Bottom Stats */}
              <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">Published on DocuBaat Blog</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <ExternalLink className="h-3 w-3" />
                    <span className="text-xs">External Link</span>
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
            ✍️ Let's Create Compelling Content Together
            <Zap className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;