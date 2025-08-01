import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Instagram, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Verified, TrendingUp, Users, BarChart3, Shield, FileText, Zap } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

const InstagramShowcase = () => {
  const [activeAccount, setActiveAccount] = useState<'nextcx' | 'docubaat'>('nextcx');

  const instagramAccounts = {
    nextcx: {
      username: 'nextcx.ai',
      displayName: 'NextCX.AI',
      profileImage: '/placeholder.svg',
      followers: '2.1K',
      following: '450',
      postCount: '87',
      verified: true,
      bio: 'AI-powered customer experience solutions 🤖\nTransforming business interactions\n#AI #CustomerExperience #Innovation',
      color: 'coral' as const,
      posts: [
        {
          id: 1,
          type: 'stat' as const,
          title: '3X Faster',
          subtitle: 'Customer Response Time',
          description: 'AI-Powered Support',
          icon: Zap,
          caption: 'Revolutionizing customer service with AI! 🚀 Our latest feature helps businesses respond 3x faster to customer inquiries. #AI #CustomerService #Innovation',
          likes: '1,245',
          comments: '89',
          timeAgo: '2h'
        },
        {
          id: 2,
          type: 'quote' as const,
          title: 'The Future of CX',
          subtitle: 'is Here',
          description: 'Building intelligent conversation engines that understand context and deliver personalized experiences.',
          icon: Users,
          caption: 'Behind the scenes: How we built our AI conversation engine. The future of customer experience is here! 💡 #TechTalk #AI #Development',
          likes: '892',
          comments: '67',
          timeAgo: '1d'
        },
        {
          id: 3,
          type: 'metric' as const,
          title: '+40%',
          subtitle: 'Satisfaction Score',
          description: 'NextCX.AI Results',
          icon: TrendingUp,
          caption: 'Customer success story: 40% increase in satisfaction scores using NextCX.AI 📈 #Success #CustomerExperience #Results',
          likes: '1,567',
          comments: '124',
          timeAgo: '2d'
        }
      ]
    },
    docubaat: {
      username: 'docubaat',
      displayName: 'DocuBaat',
      profileImage: '/placeholder.svg',
      followers: '1.8K',
      following: '320',
      postCount: '64',
      verified: false,
      bio: 'Document management simplified 📄\nYour digital document companion\n#DocumentManagement #Digital #Productivity',
      color: 'sage' as const,
      posts: [
        {
          id: 1,
          type: 'feature' as const,
          title: 'Say Goodbye to',
          subtitle: 'Paper Clutter',
          description: 'Digital Organization',
          icon: FileText,
          caption: 'Say goodbye to paper clutter! 📄➡️💻 DocuBaat helps you organize all your documents in one secure place. #DigitalTransformation #Productivity',
          likes: '734',
          comments: '52',
          timeAgo: '3h'
        },
        {
          id: 2,
          type: 'tech' as const,
          title: 'Smart AI',
          subtitle: 'Categorization',
          description: 'Let technology organize for you',
          icon: BarChart3,
          caption: 'Feature highlight: Smart document categorization using AI. Let technology do the organizing for you! 🤖 #AI #DocumentManagement',
          likes: '923',
          comments: '78',
          timeAgo: '1d'
        },
        {
          id: 3,
          type: 'security' as const,
          title: 'End-to-End',
          subtitle: 'Encryption',
          description: 'Your documents stay private',
          icon: Shield,
          caption: 'Security first! End-to-end encryption ensures your documents stay private and secure 🔒 #Security #Privacy #Documents',
          likes: '1,102',
          comments: '95',
          timeAgo: '2d'
        }
      ]
    }
  };

  const currentAccount = instagramAccounts[activeAccount];

  const getColorClasses = (color: string) => {
    const colorMap = {
      coral: "border-coral text-coral bg-coral/5",
      sage: "border-sage text-sage bg-sage/5",
      "pink-soft": "border-pink-soft text-pink-soft bg-pink-soft/5"
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


  const getPostDesign = (post: any, accountColor: string) => {
    const baseClasses = "w-full h-64 rounded-lg flex flex-col items-center justify-center text-center p-6 relative overflow-hidden";
    
    const designs = {
      coral: {
        stat: `${baseClasses} bg-gradient-to-br from-coral/90 to-coral text-white`,
        quote: `${baseClasses} bg-gradient-to-br from-coral/10 to-pink-soft/20 text-foreground border-2 border-coral/20`,
        metric: `${baseClasses} bg-gradient-to-br from-pink-soft/30 to-coral/20 text-foreground`,
        feature: `${baseClasses} bg-gradient-to-br from-coral/80 to-pink-soft/60 text-white`,
        tech: `${baseClasses} bg-gradient-to-br from-coral/15 to-pink-soft/25 text-foreground border border-coral/30`,
        security: `${baseClasses} bg-gradient-to-br from-coral/70 to-pink-soft/70 text-white`
      },
      sage: {
        stat: `${baseClasses} bg-gradient-to-br from-sage/90 to-sage text-white`,
        quote: `${baseClasses} bg-gradient-to-br from-sage/10 to-green-100 text-foreground border-2 border-sage/20`,
        metric: `${baseClasses} bg-gradient-to-br from-green-100 to-sage/20 text-foreground`,
        feature: `${baseClasses} bg-gradient-to-br from-sage/80 to-green-200 text-white`,
        tech: `${baseClasses} bg-gradient-to-br from-sage/15 to-green-100 text-foreground border border-sage/30`,
        security: `${baseClasses} bg-gradient-to-br from-sage/70 to-green-200 text-white`
      }
    };

    return designs[accountColor as keyof typeof designs]?.[post.type] || designs.coral.stat;
  };

  const renderPostContent = (post: any) => {
    const IconComponent = post.icon;
    
    return (
      <div className="flex flex-col items-center justify-center h-full relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,_white_0%,_transparent_50%)]"></div>
          <div className="absolute top-4 right-4">
            <IconComponent className="h-16 w-16 opacity-20" />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center">
          <IconComponent className="h-12 w-12 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
          <h4 className="text-xl font-semibold mb-3">{post.subtitle}</h4>
          <p className="text-sm opacity-90">{post.description}</p>
        </div>

        {/* Bottom Brand */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-xs opacity-75 font-medium">
            @{currentAccount.username}
          </div>
        </div>
      </div>
    );
  };

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { containerRef: postsRef, visibleItems: postsVisible } = useStaggeredAnimation(currentAccount.posts.length, 200);

  return (
    <section id="instagram-showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-slide-in-down opacity-100' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Instagram <span className="text-coral">Content Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Managing social media content for innovative tech companies, creating engaging posts that drive 
            audience engagement and build brand presence across platforms.
          </p>
        </div>

        {/* Account Toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg p-1 shadow-soft border">
            {Object.entries(instagramAccounts).map(([key, account]) => (
              <button
                key={key}
                onClick={() => setActiveAccount(key as 'nextcx' | 'docubaat')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeAccount === key 
                    ? getActiveColorClasses(account.color)
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Instagram className="h-4 w-4" />
                @{account.username}
              </button>
            ))}
          </div>
        </div>

        {/* Instagram Feed Mockup */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-card border-none bg-white/70 backdrop-blur-sm">
            {/* Profile Header */}
            <div className="p-6 border-b border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-white p-0.5 flex items-center justify-center">
                      <div className={`w-full h-full rounded-full ${getActiveColorClasses(currentAccount.color)} flex items-center justify-center`}>
                        <Instagram className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{currentAccount.username}</h3>
                    {currentAccount.verified && <Verified className="h-5 w-5 text-blue-500 fill-current" />}
                  </div>
                  <div className="flex gap-6 text-sm text-muted-foreground mb-3">
                    <span><strong className="text-foreground">{currentAccount.postCount}</strong> posts</span>
                    <span><strong className="text-foreground">{currentAccount.followers}</strong> followers</span>
                    <span><strong className="text-foreground">{currentAccount.following}</strong> following</span>
                  </div>
                  <div className={`px-4 py-2 rounded-md text-sm font-medium ${getActiveColorClasses(currentAccount.color)}`}>
                    Content Manager
                  </div>
                </div>
              </div>
              <div className="text-sm text-foreground">
                <strong className="block mb-1">{currentAccount.displayName}</strong>
                <div className="whitespace-pre-line">{currentAccount.bio}</div>
              </div>
            </div>

            {/* Overall Engagement Summary */}
            <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-border/50">
              <h4 className="font-semibold text-foreground mb-3">Content Performance Overview</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-coral">
                    {currentAccount.posts.reduce((sum, post) => sum + parseInt(post.likes.replace(',', '')), 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Likes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sage">
                    {currentAccount.posts.reduce((sum, post) => sum + parseInt(post.comments), 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Comments</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {Math.round(currentAccount.posts.reduce((sum, post) => sum + parseInt(post.likes.replace(',', '')) + parseInt(post.comments), 0) / currentAccount.posts.length).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Avg Engagement</div>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="max-h-[600px] overflow-y-auto">
              <div className="p-6">
                <div className="space-y-6">
                  {currentAccount.posts.map((post) => (
                    <div key={post.id} className="border-b border-border/30 pb-6 last:border-b-0">
                      {/* Post Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-0.5">
                            <div className="w-full h-full rounded-full bg-white p-0.5 flex items-center justify-center">
                              <div className={`w-full h-full rounded-full ${getActiveColorClasses(currentAccount.color)} flex items-center justify-center`}>
                                <Instagram className="h-3 w-3" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              <span className="text-sm font-semibold text-foreground">{currentAccount.username}</span>
                              {currentAccount.verified && <Verified className="h-3 w-3 text-blue-500 fill-current" />}
                            </div>
                            <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                          </div>
                        </div>
                        <MoreHorizontal className="h-5 w-5 text-muted-foreground cursor-pointer" />
                      </div>

                      {/* Engagement Metrics - Main Focus */}
                      <div className="mb-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-6">
                            {/* Likes */}
                            <div className="flex items-center gap-2">
                              <div className="p-3 bg-red-100 rounded-full">
                                <Heart className="h-6 w-6 text-red-500 fill-current" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-foreground">{post.likes}</div>
                                <div className="text-sm text-muted-foreground">likes</div>
                              </div>
                            </div>
                            
                            {/* Comments */}
                            <div className="flex items-center gap-2">
                              <div className="p-3 bg-blue-100 rounded-full">
                                <MessageCircle className="h-6 w-6 text-blue-500" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-foreground">{post.comments}</div>
                                <div className="text-sm text-muted-foreground">comments</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Small Post Preview */}
                          <div className="w-16 h-16 rounded-lg overflow-hidden">
                            <div className={getPostDesign(post, currentAccount.color).replace('h-64', 'h-16').replace('p-6', 'p-2')}>
                              <div className="flex items-center justify-center h-full">
                                <post.icon className="h-4 w-4" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Engagement Rate */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                              High engagement
                            </span>
                            <span className="text-muted-foreground">
                              {Math.round((parseInt(post.likes.replace(',', '')) + parseInt(post.comments)) / 100)} engagement rate
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Send className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                            <Bookmark className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                          </div>
                        </div>
                      </div>

                      {/* Post Caption */}
                      <div className="text-sm text-foreground">
                        <span className="font-semibold mr-2">{currentAccount.username}</span>
                        {post.caption}
                      </div>

                    </div>
                  ))}
                  
                  {/* Load more posts indicator */}
                  <div className="text-center py-4">
                    <span className="text-sm text-muted-foreground">
                      Scroll to view more posts...
                    </span>
                  </div>
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
            📱 Let's Grow Your Social Media Presence
            <Instagram className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramShowcase;