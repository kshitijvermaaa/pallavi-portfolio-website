import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const FAQSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What types of content do you create?",
      answer: "I specialize in a wide range of content including email campaigns, blog posts, website copy, case studies, social media content, video scripts, and SEO-optimized articles. My focus is on creating content that drives conversions and supports your business goals."
    },
    {
      question: "How do you measure content success?",
      answer: "I use data-driven metrics such as conversion rates, engagement rates, click-through rates, organic traffic growth, lead generation, and revenue attribution. Each project includes performance tracking and optimization recommendations based on real results."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Timeline varies by project scope. Blog posts typically take 3-5 days, email campaigns 5-7 days, and comprehensive website copy 2-3 weeks. I always provide realistic timelines upfront and maintain clear communication throughout the process."
    },
    {
      question: "Do you work with specific industries?",
      answer: "I have extensive experience with SaaS, AI, B2B tech, and digital marketing companies. However, I adapt my expertise to work with various industries, focusing on understanding your unique audience and business objectives."
    },
    {
      question: "What's included in your content strategy service?",
      answer: "Content strategy includes audience research, competitor analysis, content audit, editorial calendar creation, brand voice development, SEO keyword strategy, and performance measurement framework. It's a comprehensive approach to align content with business goals."
    },
    {
      question: "How do you ensure content aligns with our brand voice?",
      answer: "I start every project with a thorough brand discovery session, analyzing your existing content, target audience, and business objectives. I create detailed brand voice guidelines and ensure all content maintains consistency with your established tone and messaging."
    },
    {
      question: "Can you optimize existing content?",
      answer: "Absolutely! I offer content audits and optimization services to improve existing content performance. This includes SEO optimization, conversion rate improvement, updating outdated information, and restructuring content for better engagement."
    },
    {
      question: "What's your revision process?",
      answer: "Each project includes 2-3 rounds of revisions to ensure the content meets your expectations. I provide detailed feedback incorporation and maintain open communication throughout the revision process to deliver content that perfectly aligns with your vision."
    },
    {
      question: "Do you provide content performance reports?",
      answer: "Yes, I provide detailed performance reports for ongoing projects, including key metrics like traffic growth, engagement rates, conversion improvements, and ROI analysis. These reports help demonstrate content value and guide future strategy decisions."
    },
    {
      question: "How do you stay updated with content marketing trends?",
      answer: "I continuously educate myself through industry publications, attend marketing conferences, maintain certifications (Google Digital Marketing), and actively test new strategies with my own content. This ensures I bring cutting-edge techniques to your projects."
    }
  ];

  return (
    <section 
      ref={elementRef}
      className="py-16 bg-green-100 border-4 border-green-500"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-sage" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Frequently Asked <span className="text-sage">Questions</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about my content marketing services, process, and approach.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className={`bg-white/80 backdrop-blur-sm shadow-soft border-none hover:shadow-card transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                transitionDelay: `${300 + index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full p-6 text-left justify-between h-auto hover:bg-sage/5"
                  onClick={() => toggleItem(index)}
                >
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-sage transition-transform duration-300 flex-shrink-0 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="border-t border-sage/20 pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageCircle className="h-6 w-6 text-coral" />
              <h3 className="text-2xl font-bold text-foreground">
                Still Have Questions?
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              I'm here to help! Let's discuss your specific content marketing needs and how I can support your business growth.
            </p>
            <Button 
              variant="coral" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
              <MessageCircle className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;