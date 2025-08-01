const SimpleFAQSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-sage/5 to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-sage">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about my content marketing services, process, and approach.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white/80 backdrop-blur-sm shadow-soft border-none hover:shadow-card transition-all duration-300 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">What types of content do you create?</h3>
            <p className="text-muted-foreground leading-relaxed">I specialize in a wide range of content including email campaigns, blog posts, website copy, case studies, social media content, video scripts, and SEO-optimized articles. My focus is on creating content that drives conversions and supports your business goals.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-soft border-none hover:shadow-card transition-all duration-300 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">How do you measure content success?</h3>
            <p className="text-muted-foreground leading-relaxed">I use data-driven metrics such as conversion rates, engagement rates, click-through rates, organic traffic growth, lead generation, and revenue attribution. Each project includes performance tracking and optimization recommendations based on real results.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-soft border-none hover:shadow-card transition-all duration-300 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">What's your typical project timeline?</h3>
            <p className="text-muted-foreground leading-relaxed">Timeline varies by project scope. Blog posts typically take 3-5 days, email campaigns 5-7 days, and comprehensive website copy 2-3 weeks. I always provide realistic timelines upfront and maintain clear communication throughout the process.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-soft border-none hover:shadow-card transition-all duration-300 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Do you work with specific industries?</h3>
            <p className="text-muted-foreground leading-relaxed">I have extensive experience with SaaS, AI, B2B tech, and digital marketing companies. However, I adapt my expertise to work with various industries, focusing on understanding your unique audience and business objectives.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-soft border-none hover:shadow-card transition-all duration-300 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">What's your revision process?</h3>
            <p className="text-muted-foreground leading-relaxed">Each project includes 2-3 rounds of revisions to ensure the content meets your expectations. I provide detailed feedback incorporation and maintain open communication throughout the revision process to deliver content that perfectly aligns with your vision.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm here to help! Let's discuss your specific content marketing needs and how I can support your business growth.
            </p>
            <button 
              className="bg-coral hover:bg-coral/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleFAQSection;