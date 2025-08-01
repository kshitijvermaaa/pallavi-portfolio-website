import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calculator, TrendingUp, DollarSign, Users, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const ContentROICalculator = () => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const [inputs, setInputs] = useState({
    monthlyTraffic: '',
    conversionRate: '',
    averageOrderValue: '',
    contentBudget: '',
    trafficIncrease: ''
  });

  const [results, setResults] = useState({
    currentRevenue: 0,
    projectedRevenue: 0,
    additionalRevenue: 0,
    roi: 0,
    calculated: false
  });

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateROI = () => {
    const traffic = parseFloat(inputs.monthlyTraffic) || 0;
    const convRate = parseFloat(inputs.conversionRate) || 0;
    const aov = parseFloat(inputs.averageOrderValue) || 0;
    const budget = parseFloat(inputs.contentBudget) || 0;
    const increase = parseFloat(inputs.trafficIncrease) || 0;

    const currentRevenue = traffic * (convRate / 100) * aov * 12;
    const newTraffic = traffic * (1 + increase / 100);
    const projectedRevenue = newTraffic * (convRate / 100) * aov * 12;
    const additionalRevenue = projectedRevenue - currentRevenue;
    const roi = budget > 0 ? ((additionalRevenue - budget) / budget) * 100 : 0;

    setResults({
      currentRevenue,
      projectedRevenue,
      additionalRevenue,
      roi,
      calculated: true
    });
  };

  const resetCalculator = () => {
    setInputs({
      monthlyTraffic: '',
      conversionRate: '',
      averageOrderValue: '',
      contentBudget: '',
      trafficIncrease: ''
    });
    setResults({
      currentRevenue: 0,
      projectedRevenue: 0,
      additionalRevenue: 0,
      roi: 0,
      calculated: false
    });
  };

  return (
    <section 
      ref={elementRef}
      className="py-16 bg-blue-100 border-4 border-blue-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="h-8 w-8 text-coral" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Content <span className="text-coral">ROI Calculator</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Calculate the potential return on investment for your content marketing strategy. 
            See how strategic content can impact your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className={`bg-white/80 backdrop-blur-sm shadow-card border-none transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-coral" />
                Your Business Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="monthlyTraffic">Monthly Website Traffic</Label>
                <Input
                  id="monthlyTraffic"
                  type="number"
                  placeholder="e.g., 10000"
                  value={inputs.monthlyTraffic}
                  onChange={(e) => handleInputChange('monthlyTraffic', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="conversionRate">Conversion Rate (%)</Label>
                <Input
                  id="conversionRate"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 2.5"
                  value={inputs.conversionRate}
                  onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="averageOrderValue">Average Order Value ($)</Label>
                <Input
                  id="averageOrderValue"
                  type="number"
                  placeholder="e.g., 150"
                  value={inputs.averageOrderValue}
                  onChange={(e) => handleInputChange('averageOrderValue', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contentBudget">Annual Content Budget ($)</Label>
                <Input
                  id="contentBudget"
                  type="number"
                  placeholder="e.g., 15000"
                  value={inputs.contentBudget}
                  onChange={(e) => handleInputChange('contentBudget', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="trafficIncrease">Expected Traffic Increase (%)</Label>
                <Input
                  id="trafficIncrease"
                  type="number"
                  placeholder="e.g., 35"
                  value={inputs.trafficIncrease}
                  onChange={(e) => handleInputChange('trafficIncrease', e.target.value)}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={calculateROI} className="flex-1 bg-coral hover:bg-coral/90">
                  Calculate ROI
                </Button>
                <Button onClick={resetCalculator} variant="outline" className="flex-1">
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className={`bg-white/80 backdrop-blur-sm shadow-card border-none transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <DollarSign className="h-6 w-6 text-sage" />
                Projected Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!results.calculated ? (
                <div className="text-center py-12">
                  <Calculator className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Enter your business metrics to see potential ROI from content marketing
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-coral/10 to-pink-soft/10 rounded-lg p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <DollarSign className="h-5 w-5 text-coral" />
                        <span className="text-sm font-medium text-coral">Current Revenue</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">
                        ${results.currentRevenue.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">per year</p>
                    </div>

                    <div className="bg-gradient-to-r from-sage/10 to-green-50 rounded-lg p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-sage" />
                        <span className="text-sm font-medium text-sage">Projected Revenue</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">
                        ${results.projectedRevenue.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">per year</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-soft/10 to-coral/10 rounded-lg p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Users className="h-6 w-6 text-pink-soft" />
                      <span className="text-lg font-semibold text-pink-soft">Additional Revenue</span>
                    </div>
                    <p className="text-3xl font-bold text-foreground mb-2">
                      ${results.additionalRevenue.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">Generated by improved content strategy</p>
                  </div>

                  <div className={`rounded-lg p-6 text-center ${
                    results.roi > 0 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-50 border border-green-200' 
                      : 'bg-gradient-to-r from-red-50 to-pink-50 border border-red-200'
                  }`}>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className={`h-6 w-6 ${results.roi > 0 ? 'text-green-600' : 'text-red-500'}`} />
                      <span className={`text-lg font-semibold ${results.roi > 0 ? 'text-green-600' : 'text-red-500'}`}>
                        Return on Investment
                      </span>
                    </div>
                    <p className={`text-4xl font-bold mb-2 ${results.roi > 0 ? 'text-green-700' : 'text-red-600'}`}>
                      {results.roi > 0 ? '+' : ''}{results.roi.toFixed(1)}%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {results.roi > 0 
                        ? 'Positive ROI - Content marketing is profitable!' 
                        : 'Consider optimizing your content strategy for better results'
                      }
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Achieve These Results?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how strategic content marketing can drive measurable growth for your business.
            </p>
            <Button 
              variant="coral" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Content Strategy
              <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentROICalculator;