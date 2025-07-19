import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, TrendingUp, Calendar, Users, Target, CheckCircle, AlertCircle, Wrench, Zap, Award, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Using a placeholder image URL since the asset import might be causing issues
const projectImage = "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projects = {
    "skil-ai": {
      title: "Skil.AI Content Strategy",
      subtitle: "Transforming a B2B SaaS Brand through Strategic Content Excellence",
      heroImage: projectImage,
      duration: "1 Year 8 Months",
      industry: "AI-Powered SaaS | Customer Experience Automation (CX)",
      keyHighlights: [
        { metric: "Blog Traffic", result: "+35% Organic Growth", icon: "📊" },
        { metric: "Email Open Rate", result: "25%+ (Consistent Average)", icon: "💌" },
        { metric: "Click-Through Rate (CTR)", result: "7% Avg. CTR", icon: "🔗" },
        { metric: "Content Pieces Created", result: "100+ Multi-format Assets", icon: "✍️" },
        { metric: "Time-on-Site", result: "+40% Increase", icon: "⏱️" },
        { metric: "Bounce Rate", result: "Reduced by 15%", icon: "📉" }
      ],
      overview: "Skil.AI is a B2B SaaS company that builds cutting-edge AI products to automate and enhance customer service operations across voice and chat platforms. When I joined, their content presence was minimal, technical yet inconsistent, and lacked strategic direction. Their product was powerful—but their brand voice, content architecture, and lead-gen mechanisms didn't reflect it. The goal? Build a scalable, results-driven content system to boost organic reach, engage stakeholders, and convert traffic into qualified leads.",
      challenges: [
        "Low Search Visibility – Few rankings for industry keywords despite high market relevance",
        "Inconsistent Brand Voice – Technical content with no emotional or narrative pull",
        "Scattered Messaging – Disconnected communication across landing pages, blogs, and emails",
        "Underperforming Pages – High bounce rate and minimal conversion triggers",
        "Lack of Workflow Structure – No editorial calendar, no content reuse, and little performance tracking"
      ],
      tools: [
        { category: "SEO Strategy & Analytics", tools: ["SEMrush", "Google Analytics", "Surfer SEO"] },
        { category: "Email Campaigns", tools: ["Mailchimp", "Brevo (formerly Sendinblue)"] },
        { category: "CMS & Web", tools: ["WordPress"] },
        { category: "Writing & Editing", tools: ["Grammarly Premium", "ChatGPT"] },
        { category: "Project Management", tools: ["Notion", "Google Workspace"] },
        { category: "Design & Branding", tools: ["Canva"] }
      ],
      deliverables: [
        {
          title: "Strategic Foundation",
          items: [
            "Conducted a competitive content audit and gap analysis",
            "Built a 6-month editorial calendar linked to business objectives",
            "Created brand tone and messaging guidelines aligned with their vision and customer personas"
          ]
        },
        {
          title: "High-Impact Content Creation",
          items: [
            "Wrote and published 100+ content pieces including long-form SEO blogs",
            "UX-aligned landing pages and email sequences",
            "Product one-pagers and whitepapers",
            "Sales enablement decks and pitch presentations"
          ]
        },
        {
          title: "Performance Email Campaigns",
          items: [
            "Devised email workflows for product updates, customer education, and launch events",
            "Achieved consistent 25–30% open rates and 7%+ CTR through A/B testing",
            "Implemented segmentation and optimized subject lines"
          ]
        },
        {
          title: "Web Optimization & SEO",
          items: [
            "Optimized legacy blog content for target keywords and readability",
            "Implemented structured internal linking and metadata improvements",
            "Tracked KPIs monthly and adjusted content plan based on user behavior insights"
          ]
        }
      ],
      results: [
        { metric: "35%", description: "Growth in organic blog traffic within 6–8 months" },
        { metric: "25%+", description: "Email open rates consistently above baseline" },
        { metric: "40%", description: "Content production time reduced through repurposing framework" },
        { metric: "100+", description: "Multi-format content pieces created" }
      ],
      testimonial: "Pallavi's strategic approach completely transformed our organic reach. Her ability to translate complex AI concepts into clear, conversion-friendly storytelling is remarkable. She became an integral part of our marketing engine.",
      timeline: "1 Year 8 Months",
      category: "Content Strategy"
    },
    "alore-email": {
      title: "Alore Email Campaigns",
      subtitle: "Driving Leads and Conversions Through Targeted B2B Email Funnels",
      heroImage: projectImage,
      duration: "5 Months",
      industry: "B2B SaaS | CRM, Sales Automation",
      keyHighlights: [
        { metric: "Emails Created", result: "25+ Email Campaigns", icon: "💌" },
        { metric: "Open Rate Increase", result: "+28% Over Baseline", icon: "📬" },
        { metric: "Replies from Campaigns", result: "12–15% Avg. Response Rate", icon: "💬" },
        { metric: "Qualified Leads Generated", result: "50+ Leads via Email Funnels", icon: "🧲" },
        { metric: "A/B Testing Success Rate", result: "70% Lift in Subject Line Variants", icon: "🧪" },
        { metric: "Email CTR", result: "6–8% Avg. CTR", icon: "🔗" }
      ],
      overview: "Alore CRM, a B2B sales automation tool, was looking to revamp its email strategy to nurture leads, increase product adoption, and push trial-to-paid conversions. Their existing campaigns were sporadic and lacked personalization, clear CTAs, or performance benchmarks. I was hired to develop a scalable, data-driven email framework tailored to sales cycles and user intent.",
      challenges: [
        "Generic messaging with low engagement and few replies",
        "Inconsistent email cadence and poor follow-up sequences",
        "Cold outreach with no audience segmentation",
        "Lack of clarity on what messaging resonated with ICPs",
        "No analytics framework for testing subject lines or content"
      ],
      tools: [
        { category: "Email Platforms", tools: ["Mailchimp", "Brevo (Sendinblue)", "Lemlist"] },
        { category: "Analytics & Tracking", tools: ["Google Analytics", "CRM-integrated UTM tagging"] },
        { category: "Writing & Optimization", tools: ["Grammarly", "Hemingway Editor"] },
        { category: "A/B Testing", tools: ["Google Sheets", "Custom Dashboards"] },
        { category: "Planning", tools: ["Notion"] }
      ],
      deliverables: [
        {
          title: "Email Strategy + Funnel Design",
          items: [
            "Mapped out 3 core funnel stages: Awareness, Activation, and Conversion",
            "Designed cold email, nurture, and reactivation flows",
            "Defined audience segments based on behavior, demo data, and intent"
          ]
        },
        {
          title: "Conversion-First Copywriting",
          items: [
            "Wrote 25+ personalized emails with psychological triggers",
            "Crafted scroll-stopping subject lines with 70%+ A/B test success",
            "Added embedded CTAs, user case links, and conversational openers"
          ]
        },
        {
          title: "Automation + Drip Campaigns",
          items: [
            "Automated sequences using CRM triggers and time-based logic",
            "Ensured warm-up flows for trial users and onboarding sequences",
            "Aligned drip content to objection handling and buyer journey"
          ]
        },
        {
          title: "Testing & Performance Optimization",
          items: [
            "Conducted A/B tests for subject lines, CTAs, and formats",
            "Introduced emojis, personalization tokens, and split-tone testing",
            "Set benchmarks for reply rate, open rate, and CTR"
          ]
        }
      ],
      results: [
        { metric: "28%", description: "Boost in email open rates within 2 months" },
        { metric: "50+", description: "Sales-qualified leads attributed to campaign flows" },
        { metric: "12–15%", description: "Response rate on trial-to-paid nurture tracks" },
        { metric: "6–8%", description: "Email CTR consistently maintained" }
      ],
      testimonial: "Every email Pallavi wrote had a distinct voice that still felt aligned with our brand. We saw a lift in open rates and direct responses from qualified leads. She understands growth-driven communication.",
      timeline: "5 months",
      category: "Email Marketing"
    },
    "seo-portfolio": {
      title: "SEO Content Portfolio",
      subtitle: "Boosting Organic Visibility Through Strategic Content",
      heroImage: projectImage,
      duration: "8 Months",
      industry: "Multiple B2B SaaS Clients",
      keyHighlights: [
        { metric: "Articles Published", result: "80+ SEO-Optimized Pieces", icon: "📝" },
        { metric: "Organic Traffic Growth", result: "+20% Average Increase", icon: "📈" },
        { metric: "Pages Optimized", result: "10+ Landing Pages", icon: "🔧" },
        { metric: "Keywords Ranked", result: "50+ Target Keywords", icon: "🎯" },
        { metric: "Content Clusters", result: "Created Around Core Topics", icon: "🧩" },
        { metric: "Internal Linking", result: "Strategic Implementation", icon: "🔗" }
      ],
      overview: "Multiple B2B SaaS clients needed to improve their organic search visibility and establish thought leadership in competitive markets through high-quality, SEO-optimized content. I developed comprehensive content strategies that balanced search engine requirements with user value.",
      challenges: [
        "Poor search rankings for target keywords",
        "Low organic traffic and visibility",
        "Difficulty competing with established players",
        "Need for content that serves both search engines and readers",
        "Lack of strategic content planning and execution"
      ],
      tools: [
        { category: "SEO Research", tools: ["Ahrefs", "SEMrush", "Google Search Console"] },
        { category: "Content Optimization", tools: ["Surfer SEO", "Clearscope"] },
        { category: "CMS", tools: ["WordPress", "Webflow"] },
        { category: "Analytics", tools: ["Google Analytics", "Search Console"] },
        { category: "Writing", tools: ["Grammarly", "Hemingway Editor"] }
      ],
      deliverables: [
        {
          title: "SEO Strategy Development",
          items: [
            "Conducted comprehensive keyword research and analysis",
            "Created content clusters around core business topics",
            "Developed strategic content calendars aligned with search trends"
          ]
        },
        {
          title: "Content Creation & Optimization",
          items: [
            "Published 80+ SEO-optimized blog articles",
            "Optimized existing pages for target keywords",
            "Implemented strategic internal linking structures"
          ]
        },
        {
          title: "Performance Tracking",
          items: [
            "Set up comprehensive analytics and tracking systems",
            "Monthly reporting on keyword rankings and traffic",
            "Continuous optimization based on performance data"
          ]
        }
      ],
      results: [
        { metric: "20%", description: "Average organic traffic growth across clients" },
        { metric: "80+", description: "High-quality articles published" },
        { metric: "50+", description: "Keywords successfully ranked" },
        { metric: "10+", description: "Pages optimized for better performance" }
      ],
      testimonial: "Pallavi's SEO content strategy drove consistent organic growth. Her research-backed approach ensured every piece served both readers and search engines perfectly.",
      timeline: "8 months",
      category: "SEO Writing"
    },
    "dlf-magazine": {
      title: "DLF Magazine Editorial",
      subtitle: "Crafting Cultural Narratives Through Editorial Excellence",
      heroImage: projectImage,
      duration: "6 Months",
      industry: "Publishing | Cultural & Literary Magazine",
      keyHighlights: [
        { metric: "Articles Edited", result: "50+ Editorial Pieces", icon: "✏️" },
        { metric: "Magazine Issues", result: "3 Complete Editions", icon: "📖" },
        { metric: "Writer Collaborations", result: "15+ Content Contributors", icon: "👥" },
        { metric: "Design Alignment", result: "100% Layout Coordination", icon: "🎨" },
        { metric: "Brand Voice", result: "Consistent Tone Development", icon: "🎯" },
        { metric: "Publication Quality", result: "Premium Editorial Standards", icon: "⭐" }
      ],
      overview: "DLF Magazine required comprehensive editorial oversight to maintain high literary and cultural standards while ensuring consistent brand voice across all content. I managed the entire editorial process, from content curation to final publication, working closely with writers, designers, and stakeholders.",
      challenges: [
        "Maintaining consistent editorial voice across diverse contributors",
        "Balancing cultural sensitivity with engaging storytelling",
        "Coordinating content with design team for optimal layout",
        "Meeting tight publication deadlines while ensuring quality",
        "Establishing editorial guidelines for future consistency"
      ],
      tools: [
        { category: "Editorial Management", tools: ["Google Docs", "Notion", "Editorial Calendar"] },
        { category: "Writing & Editing", tools: ["Grammarly Premium", "Hemingway Editor"] },
        { category: "Collaboration", tools: ["Google Workspace", "Slack"] },
        { category: "Design Coordination", tools: ["InDesign", "Canva"] },
        { category: "Project Management", tools: ["Trello", "Asana"] }
      ],
      deliverables: [
        {
          title: "Editorial Strategy",
          items: [
            "Developed comprehensive editorial guidelines and style guide",
            "Created content themes aligned with cultural and literary values",
            "Established writer onboarding and feedback processes"
          ]
        },
        {
          title: "Content Creation & Editing",
          items: [
            "Edited and refined 50+ articles for publication quality",
            "Collaborated with 15+ writers to develop compelling narratives",
            "Ensured consistent brand voice across all editorial content"
          ]
        },
        {
          title: "Production Coordination",
          items: [
            "Worked closely with design team on layout and visual storytelling",
            "Managed editorial calendar and publication deadlines",
            "Oversaw final review and approval processes"
          ]
        }
      ],
      results: [
        { metric: "3", description: "Complete magazine editions published" },
        { metric: "50+", description: "High-quality articles edited and published" },
        { metric: "15+", description: "Writers successfully collaborated with" },
        { metric: "100%", description: "On-time delivery for all publication deadlines" }
      ],
      testimonial: "Pallavi's editorial expertise elevated our magazine's quality significantly. Her ability to maintain our cultural voice while ensuring accessibility made each issue compelling and cohesive.",
      timeline: "6 months",
      category: "Editorial"
    },
    "lets-off-leash": {
      title: "Let's Off Leash Video Scripts",
      subtitle: "Engaging Pet Parents Through Strategic Video Content",
      heroImage: projectImage,
      duration: "4 Months",
      industry: "Pet Care | YouTube Content Creation",
      keyHighlights: [
        { metric: "Video Scripts", result: "15+ Optimized Scripts", icon: "🎬" },
        { metric: "Audience Engagement", result: "Enhanced Viewer Retention", icon: "👀" },
        { metric: "Content Themes", result: "5+ Series Developed", icon: "📺" },
        { metric: "Educational Value", result: "Expert-Backed Information", icon: "🎓" },
        { metric: "Channel Growth", result: "Contributed to Subscriber Increase", icon: "📈" },
        { metric: "Script Quality", result: "Professional Production Ready", icon: "✨" }
      ],
      overview: "Let's Off Leash needed engaging, educational video scripts that would resonate with pet parents while providing valuable information about pet care and training. I developed scripts that balanced entertainment with education, contributing to audience engagement and channel growth.",
      challenges: [
        "Creating engaging content that educates without overwhelming viewers",
        "Balancing entertainment value with educational content",
        "Ensuring scripts were suitable for video format and pacing",
        "Maintaining consistent brand voice across different video themes",
        "Incorporating expert advice in accessible language"
      ],
      tools: [
        { category: "Content Planning", tools: ["Google Docs", "Content Calendar"] },
        { category: "Research", tools: ["Pet Care Resources", "Expert Interviews"] },
        { category: "Script Writing", tools: ["Final Draft", "Google Docs"] },
        { category: "Collaboration", tools: ["Slack", "Email"] },
        { category: "Quality Assurance", tools: ["Grammarly", "Readability Tools"] }
      ],
      deliverables: [
        {
          title: "Script Development",
          items: [
            "Created 15+ engaging video scripts for pet care topics",
            "Developed consistent format and structure for series content",
            "Ensured scripts were optimized for video production and timing"
          ]
        },
        {
          title: "Content Strategy",
          items: [
            "Researched trending pet care topics and audience interests",
            "Balanced educational content with entertainment value",
            "Created hooks and engagement points throughout scripts"
          ]
        },
        {
          title: "Production Support",
          items: [
            "Provided detailed scene descriptions and visual cues",
            "Collaborated with production team on script optimization",
            "Ensured brand voice consistency across all content"
          ]
        }
      ],
      results: [
        { metric: "15+", description: "Professional video scripts delivered" },
        { metric: "5+", description: "Distinct content series developed" },
        { metric: "100%", description: "Scripts ready for production" },
        { metric: "Enhanced", description: "Audience engagement and retention" }
      ],
      testimonial: "Pallavi's scripts perfectly captured our brand voice while making complex pet care topics accessible and engaging. The content resonated well with our audience and contributed to our growth.",
      timeline: "4 months",
      category: "Video Scripts"
    },
    "freelance-portfolio": {
      title: "Freelance Content Portfolio",
      subtitle: "Diverse Content Solutions Across Multiple Industries",
      heroImage: projectImage,
      duration: "2 Years",
      industry: "Multiple Industries | Freelance Services",
      keyHighlights: [
        { metric: "Projects Completed", result: "50+ Diverse Projects", icon: "📊" },
        { metric: "Client Rating", result: "4.8/5 Average Rating", icon: "⭐" },
        { metric: "On-Time Delivery", result: "100% Delivery Record", icon: "⏰" },
        { metric: "Content Types", result: "10+ Content Formats", icon: "📝" },
        { metric: "Client Retention", result: "80% Repeat Clients", icon: "🔄" },
        { metric: "Industries Served", result: "15+ Different Sectors", icon: "🏢" }
      ],
      overview: "Throughout my freelance career, I've delivered high-quality content across diverse industries and formats, maintaining exceptional client satisfaction and building long-term relationships. This portfolio showcases my versatility and commitment to excellence.",
      challenges: [
        "Adapting writing style to different industries and audiences",
        "Managing multiple projects with varying deadlines",
        "Maintaining quality standards across diverse content types",
        "Building trust and relationships with new clients",
        "Staying updated with industry trends across multiple sectors"
      ],
      tools: [
        { category: "Project Management", tools: ["Trello", "Asana", "Google Workspace"] },
        { category: "Writing & Editing", tools: ["Grammarly", "Hemingway Editor", "Google Docs"] },
        { category: "Research", tools: ["Google Scholar", "Industry Publications"] },
        { category: "Client Communication", tools: ["Slack", "Zoom", "Email"] },
        { category: "File Management", tools: ["Google Drive", "Dropbox"] }
      ],
      deliverables: [
        {
          title: "Content Creation",
          items: [
            "Delivered 50+ projects including blogs, whitepapers, and product descriptions",
            "Created content for 15+ different industries and sectors",
            "Maintained consistent quality across all content formats"
          ]
        },
        {
          title: "Client Relations",
          items: [
            "Achieved 4.8/5 average client rating across all projects",
            "Maintained 100% on-time delivery record",
            "Built long-term relationships with 80% client retention rate"
          ]
        },
        {
          title: "Professional Development",
          items: [
            "Continuously expanded expertise across multiple industries",
            "Developed efficient workflows for project management",
            "Built reputation for reliability and quality delivery"
          ]
        }
      ],
      results: [
        { metric: "50+", description: "Successfully completed projects" },
        { metric: "4.8/5", description: "Average client satisfaction rating" },
        { metric: "100%", description: "On-time delivery record maintained" },
        { metric: "80%", description: "Client retention rate achieved" }
      ],
      testimonial: "Working with Pallavi has been consistently excellent. Her ability to understand our needs quickly and deliver high-quality content on time makes her our go-to content professional.",
      timeline: "2 years",
      category: "Freelance"
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Target className="h-4 w-4" />
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-coral" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-sage" />
                  <span>{project.industry}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-96 object-cover rounded-3xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Key <span className="text-coral">Highlights</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.keyHighlights.map((highlight, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-2">{highlight.icon}</div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">{highlight.metric}</div>
                  <div className="text-lg font-bold text-coral">{highlight.result}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/70 backdrop-blur-sm border-none shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-coral" />
                Project Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.overview}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/70 backdrop-blur-sm border-none shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-coral" />
                The Challenge
              </h3>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-16 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/70 backdrop-blur-sm border-none shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Wrench className="h-6 w-6 text-sage" />
                Tools & Platforms Used
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.tools.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold text-foreground">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="px-3 py-1 bg-sage/10 text-sage rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What I Delivered */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What I <span className="text-coral">Delivered</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.deliverables.map((deliverable, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-none shadow-soft">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-coral" />
                    {deliverable.title}
                  </h4>
                  <div className="space-y-3">
                    {deliverable.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Results That <span className="text-coral">Mattered</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <Card key={index} className="text-center border-none shadow-soft hover:shadow-card transition-all duration-300 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-3">
                    <BarChart3 className="h-6 w-6 text-coral" />
                  </div>
                  <div className="text-3xl font-bold text-coral mb-2">{result.metric}</div>
                  <div className="text-sm text-muted-foreground">{result.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/70 backdrop-blur-sm border-none shadow-soft">
            <CardContent className="p-8 text-center">
              <Award className="h-8 w-8 text-coral mx-auto mb-6" />
              <blockquote className="text-xl text-foreground font-medium italic mb-6">
                "{project.testimonial}"
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Client Feedback
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Similar Results?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Let's discuss how I can help drive growth for your brand through strategic content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => navigate("/#contact")}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => navigate("/")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View More Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
