const SimpleToolsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Tools & <span className="text-purple-600">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The professional tools and expertise I use to deliver exceptional content marketing results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm shadow-card border-none hover:shadow-xl transition-all duration-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6 p-3 rounded-lg border bg-coral/10 border-coral/20">
              <span className="text-2xl">🎨</span>
              <h3 className="text-xl font-semibold text-coral">Design & Content Creation</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-2xl">🎨</span>
                <div>
                  <h5 className="font-semibold text-foreground">Canva</h5>
                  <p className="text-sm text-muted-foreground">Visual content design & graphics</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-2xl">🤖</span>
                <div>
                  <h5 className="font-semibold text-foreground">ChatGPT</h5>
                  <p className="text-sm text-muted-foreground">AI-powered content assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-2xl">✅</span>
                <div>
                  <h5 className="font-semibold text-foreground">Grammarly</h5>
                  <p className="text-sm text-muted-foreground">Grammar & style checking</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-2xl">📄</span>
                <div>
                  <h5 className="font-semibold text-foreground">MS Office</h5>
                  <p className="text-sm text-muted-foreground">Professional document creation</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-2xl">☁️</span>
                <div>
                  <h5 className="font-semibold text-foreground">Google Workspace</h5>
                  <p className="text-sm text-muted-foreground">Collaboration & productivity suite</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-card border-none hover:shadow-xl transition-all duration-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6 p-3 rounded-lg border bg-sage/10 border-sage/20">
              <span className="text-2xl">📊</span>
              <h3 className="text-xl font-semibold text-sage">SEO & Analytics</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-2xl">📊</span>
                <div>
                  <h5 className="font-semibold text-foreground">Google Analytics</h5>
                  <p className="text-sm text-muted-foreground">Traffic & conversion tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-2xl">📈</span>
                <div>
                  <h5 className="font-semibold text-foreground">SEMrush</h5>
                  <p className="text-sm text-muted-foreground">Keyword research & competitor analysis</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-2xl">🏄</span>
                <div>
                  <h5 className="font-semibold text-foreground">Surfer SEO</h5>
                  <p className="text-sm text-muted-foreground">Content optimization & SEO insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-2xl">📝</span>
                <div>
                  <h5 className="font-semibold text-foreground">WordPress</h5>
                  <p className="text-sm text-muted-foreground">Content management & publishing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm shadow-card border-none hover:shadow-xl transition-all duration-300 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6 p-3 rounded-lg border bg-pink-soft/10 border-pink-soft/20">
              <span className="text-2xl">📧</span>
              <h3 className="text-xl font-semibold text-pink-soft">Email Marketing</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-2xl">🐵</span>
                <div>
                  <h5 className="font-semibold text-foreground">Mailchimp</h5>
                  <p className="text-sm text-muted-foreground">Email campaign management</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="text-2xl">📧</span>
                <div>
                  <h5 className="font-semibold text-foreground">Brevo</h5>
                  <p className="text-sm text-muted-foreground">Email marketing automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Progress */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Core Skills & Expertise</h3>
          <div className="bg-white/80 backdrop-blur-sm shadow-card border-none rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Content Strategy</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">SEO Copywriting</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Email Marketing</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Social Media Content</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-2 rounded-full bg-coral" style={{ width: '87%' }}></div>
                </div>
              </div>
            </div>
          </div>
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

export default SimpleToolsSection;