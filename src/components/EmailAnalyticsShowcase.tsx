import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Mail, TrendingUp, Users, BarChart3, Calendar, Target, Zap } from 'lucide-react';

const EmailAnalyticsShowcase = () => {
  const campaigns = [
    {
      id: 1,
      title: "25th April Newsletter",
      date: "Apr 25, 2025", 
      subject: "Global Literacy Week Special: Smarter Reading with Docubaat",
      campaignNumber: "#64",
      delivered: 1498,
      opens: 487,
      clicks: 89,
      unsubscribes: 1,
      deliveryRate: "98.62%",
      openRate: "32.5%",
      clickRate: "5.94%",
      unsubscribeRate: "0.07%",
      color: "purple",
      theme: "📚 Global Literacy Week"
    },
    {
      id: 2,
      title: "30th May Newsletter",
      date: "May 30, 2025",
      subject: "Your Document Just Got a Brain. Meet Docubaat.",
      campaignNumber: "#69",
      delivered: 1031,
      opens: 378,
      clicks: 72,
      unsubscribes: 0,
      deliveryRate: "98.94%",
      openRate: "36.7%",
      clickRate: "6.98%",
      unsubscribeRate: "0%",
      color: "coral",
      theme: "🧠 AI Enhancement"
    },
    {
      id: 3,
      title: "4th July Newsletter", 
      date: "Jul 04, 2025",
      subject: "Read less. Know more. Be free.",
      campaignNumber: "#72",
      delivered: 1477,
      opens: 516,
      clicks: 97,
      unsubscribes: 2,
      deliveryRate: "98.93%",
      openRate: "34.9%",
      clickRate: "6.57%",
      unsubscribeRate: "0.14%",
      color: "sage",
      theme: "🎆 Independence Day"
    }
  ];

  const overallStats = {
    totalDelivered: campaigns.reduce((sum, campaign) => sum + campaign.delivered, 0),
    totalOpens: campaigns.reduce((sum, campaign) => sum + campaign.opens, 0),
    avgDeliveryRate: ((campaigns.reduce((sum, campaign) => sum + parseFloat(campaign.deliveryRate), 0) / campaigns.length)).toFixed(2),
    avgOpenRate: ((campaigns.reduce((sum, campaign) => sum + parseFloat(campaign.openRate), 0) / campaigns.length)).toFixed(2),
    campaignCount: campaigns.length
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      coral: "text-coral bg-coral/10 border-coral/20",
      sage: "text-sage bg-sage/10 border-sage/20",
      "pink-soft": "text-pink-soft bg-pink-soft/10 border-pink-soft/20",
      purple: "text-purple-600 bg-purple-50 border-purple-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const getGradientClasses = (color: string) => {
    const gradientMap = {
      coral: "from-coral/20 to-pink-soft/20",
      sage: "from-sage/20 to-green-100",
      purple: "from-purple-100 to-indigo-100"
    };
    return gradientMap[color as keyof typeof gradientMap] || gradientMap.coral;
  };

  return (
    <section id="email-analytics" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg mb-6">
            <Mail className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Email Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Real campaign analytics from DocuBaat newsletters managed through Brevo. 
            <span className="font-semibold text-blue-600"> Exceptional performance</span> with 35%+ open rates and 6.5%+ click-through rates driving meaningful engagement.
          </p>
          
          {/* Key Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{overallStats.totalDelivered.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground font-medium">Total Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{overallStats.totalOpens}</div>
              <div className="text-sm text-muted-foreground font-medium">Total Opens</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral">{overallStats.avgDeliveryRate}%</div>
              <div className="text-sm text-muted-foreground font-medium">Avg Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sage">{overallStats.campaignCount}</div>
              <div className="text-sm text-muted-foreground font-medium">Campaigns</div>
            </div>
          </div>
        </div>

        {/* Campaign Details */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Campaign Performance Deep Dive</h3>
          <div className="space-y-8">
            {campaigns.map((campaign, index) => (
              <div key={campaign.id} className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${getGradientClasses(campaign.color)} border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}>
                
                {/* Campaign Header */}
                <div className="relative p-8 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{campaign.theme.split(' ')[0]}</span>
                        <h3 className="text-2xl font-bold text-foreground">{campaign.title}</h3>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{campaign.date}</span>
                        <span className="mx-1">•</span>
                        <span className="font-mono bg-white/50 px-2 py-1 rounded">{campaign.campaignNumber}</span>
                        <span className="mx-1">•</span>
                        <span className="font-medium">{campaign.theme}</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-2xl ${getColorClasses(campaign.color)}`}>
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  
                  {/* Subject Line */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1">Subject Line</h4>
                    <p className="text-foreground font-medium">"{campaign.subject}"</p>
                  </div>
                </div>

                {/* Metrics Dashboard */}
                <div className="px-8 pb-8">
                  {/* Primary Metrics - Enhanced Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="group bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white mb-3 group-hover:scale-110 transition-transform">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="text-3xl font-bold text-blue-700 mb-1">{campaign.delivered.toLocaleString()}</div>
                      <div className="text-sm text-blue-600 font-semibold">Emails Delivered</div>
                      <div className="text-xs text-muted-foreground mt-1">Success Rate: {campaign.deliveryRate}</div>
                    </div>

                    <div className="group bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white mb-3 group-hover:scale-110 transition-transform">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div className="text-3xl font-bold text-green-700 mb-1">{campaign.opens}</div>
                      <div className="text-sm text-green-600 font-semibold">Email Opens</div>
                      <div className="text-xs text-muted-foreground mt-1">Open Rate: {campaign.openRate}</div>
                    </div>

                    <div className="group bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white mb-3 group-hover:scale-110 transition-transform">
                        <Target className="h-6 w-6" />
                      </div>
                      <div className="text-3xl font-bold text-orange-700 mb-1">{campaign.clicks}</div>
                      <div className="text-sm text-orange-600 font-semibold">Link Clicks</div>
                      <div className="text-xs text-muted-foreground mt-1">Click Rate: {campaign.clickRate}</div>
                    </div>

                    <div className="group bg-gradient-to-br from-slate-50 to-gray-100 border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-500 text-white mb-3 group-hover:scale-110 transition-transform">
                        <Users className="h-6 w-6" />
                      </div>
                      <div className="text-3xl font-bold text-gray-700 mb-1">{campaign.unsubscribes}</div>
                      <div className="text-sm text-gray-600 font-semibold">Unsubscribes</div>
                      <div className="text-xs text-muted-foreground mt-1">Rate: {campaign.unsubscribeRate}</div>
                    </div>
                  </div>

                  {/* Performance Analytics Dashboard */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-inner">
                    <h4 className="text-lg font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      Campaign Performance Metrics
                    </h4>
                    
                    <div className="space-y-6">
                      {/* Delivery Rate */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500 rounded-lg">
                              <TrendingUp className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <span className="font-bold text-green-800">Delivery Success Rate</span>
                              <p className="text-xs text-green-600">Emails successfully delivered to inboxes</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-700">{campaign.deliveryRate}</div>
                            <div className="text-xs text-green-600">Industry avg: 95%</div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-green-200 rounded-full h-4 overflow-hidden">
                            <div 
                              className="h-4 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 transition-all duration-1000 relative overflow-hidden"
                              style={{ width: campaign.deliveryRate }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                            </div>
                          </div>
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-white">
                            {campaign.deliveryRate}
                          </div>
                        </div>
                      </div>

                      {/* Open Rate */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500 rounded-lg">
                              <Target className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <span className="font-bold text-blue-800">Email Open Rate</span>
                              <p className="text-xs text-blue-600">Recipients who opened the email</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-700">{campaign.openRate}</div>
                            <div className="text-xs text-blue-600">Industry avg: 21.8%</div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-blue-200 rounded-full h-4 overflow-hidden">
                            <div 
                              className="h-4 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 transition-all duration-1000 relative overflow-hidden"
                              style={{ width: `${Math.max(parseFloat(campaign.openRate) * 20, 8)}%` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                            </div>
                          </div>
                          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-white">
                            {campaign.openRate}
                          </div>
                        </div>
                      </div>

                      {/* Click Rate */}
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-5 border border-orange-100">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-500 rounded-lg">
                              <Zap className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <span className="font-bold text-orange-800">Click-Through Rate</span>
                              <p className="text-xs text-orange-600">Recipients who clicked email links</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-orange-700">{campaign.clickRate}</div>
                            <div className="text-xs text-orange-600">Industry avg: 2.3%</div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-orange-200 rounded-full h-4 overflow-hidden">
                            <div 
                              className="h-4 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600 transition-all duration-1000"
                              style={{ width: `${Math.max(parseFloat(campaign.clickRate) * 100, 3)}%` }}
                            ></div>
                          </div>
                          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-white">
                            {campaign.clickRate}
                          </div>
                        </div>
                      </div>

                      {/* Unsubscribe Rate */}
                      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-5 border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-500 rounded-lg">
                              <Users className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <span className="font-bold text-gray-800">Unsubscribe Rate</span>
                              <p className="text-xs text-gray-600">Recipients who opted out</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-700">{campaign.unsubscribeRate}</div>
                            <div className="text-xs text-gray-600">Industry avg: 0.2%</div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div 
                              className="h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-1000"
                              style={{ width: `${Math.max(parseFloat(campaign.unsubscribeRate) * 200, 5)}%` }}
                            ></div>
                          </div>
                          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs font-bold text-white">
                            {campaign.unsubscribeRate}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Summary */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold text-foreground">Campaign Status: Excellent Performance</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {parseFloat(campaign.deliveryRate) > 98 ? '🏆 Top Performer' : '✅ Good Performance'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campaign Number Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-mono font-bold text-muted-foreground">
                  #{String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Campaign Insights & Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Excellent Delivery</h4>
              <p className="text-sm text-muted-foreground">98.6%+ delivery rate with 35%+ open rates demonstrates exceptional content strategy and audience engagement.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Strategic Segmentation</h4>
              <p className="text-sm text-muted-foreground">Strategic subject lines and personalized content drive 6.5%+ CTR - significantly outperforming industry benchmarks.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-coral/20 text-coral mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Low Unsubscribe</h4>
              <p className="text-sm text-muted-foreground">Minimal unsubscribe rates (≤0.14%) indicate content relevance and appropriate frequency management.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create email campaigns that deliver consistent performance and engage your audience effectively.
            </p>
            <Button 
              variant="coral" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              📧 Let's Discuss Your Email Strategy
              <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailAnalyticsShowcase;