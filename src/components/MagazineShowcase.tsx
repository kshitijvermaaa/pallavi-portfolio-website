import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, BookOpen, Calendar, Users, Award, Feather, Globe, Star, MapPin, Music } from "lucide-react";
import { useState } from "react";

const MagazineShowcase = () => {
  const [activeEdition, setActiveEdition] = useState<'edition3' | 'edition4'>('edition3');

  const magazines = {
    edition3: {
      title: "Deccan Literature Festival",
      edition: "Edition 3",
      year: "2022",
      date: "26th & 27th November 2022",
      location: "Balgandharva Rang Mandir, Pune",
      url: "https://deccanlitfest.com/pages/edition-3-2022",
      theme: "Discover our Culture through Arts, Literature & Poetry",
      color: "coral",
      description: "Editorial coverage and content creation for the third edition of Deccan Literature Festival, celebrating cultural heritage through immersive arts and literature experiences.",
      highlights: {
        events: "12 Events",
        duration: "2 Days",
        focus: "Cultural Heritage",
        reach: "Regional Impact"
      },
      featuredContributors: [
        { name: "Shobha De", role: "Author & Columnist" },
        { name: "Kavita Kane", role: "Mythological Fiction Writer" },
        { name: "Kishor Kadam", role: "Actor & Theatre Artist" },
        { name: "Sudha Menon", role: "Author & Journalist" },
        { name: "Sonali Kulkarni", role: "Actress & Performer" },
        { name: "Mukta Barve", role: "Theatre & Film Artist" }
      ],
      editorialWork: {
        contentTypes: [
          "Event Coverage & Reporting",
          "Artist Profile Features",
          "Cultural Heritage Documentation",
          "Interview Coordination",
          "Festival Program Content"
        ],
        impact: {
          coverage: "Comprehensive 2-day event documentation",
          reach: "Regional cultural preservation",
          engagement: "Multi-format storytelling approach"
        }
      }
    },
    edition4: {
      title: "Deccan Literature Festival",
      edition: "Edition 4",
      year: "2023",
      date: "25th & 26th November 2023",
      location: "Balgandharva Rang Mandir, Pune",
      url: "https://deccanlitfest.com/pages/edition-4-2023",
      theme: "Discover our Culture through Arts, Literature & Poetry",
      color: "sage",
      description: "Fourth edition editorial work showcasing expanded cultural programming with renowned artists, documenting the evolution of Deccan's literary and artistic landscape.",
      highlights: {
        events: "12 Events",
        duration: "2 Days",
        artists: "National Artists",
        heritage: "Cultural Legacy"
      },
      featuredContributors: [
        { name: "Saurabh Shukla", role: "Actor & Director" },
        { name: "Ustad Shujaat H. Khan", role: "Classical Musician" },
        { name: "Pandit Ramdayal Sharma", role: "Music Maestro" },
        { name: "Nooran Sisters", role: "Sufi Singers" },
        { name: "Malini Awasthi", role: "Folk Singer" },
        { name: "Makrand Deshpande", role: "Theatre Director" }
      ],
      editorialWork: {
        contentTypes: [
          "Artist Feature Stories",
          "Cultural Commentary & Analysis",
          "Heritage Documentation",
          "Performance Reviews",
          "Festival Evolution Coverage"
        ],
        impact: {
          storytelling: "Enhanced narrative depth",
          documentation: "Cultural preservation focus",
          audience: "Expanded readership engagement"
        }
      }
    }
  };

  const currentMagazine = magazines[activeEdition];

  const getColorClasses = (color: string) => {
    const colorMap = {
      coral: "border-coral/20 bg-coral/5 text-coral",
      sage: "border-sage/20 bg-sage/5 text-sage",
      "pink-soft": "border-pink-soft/20 bg-pink-soft/5 text-pink-soft"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const getActiveColorClasses = (color: string) => {
    const colorMap = {
      coral: "bg-coral text-white border-coral",
      sage: "bg-sage text-white border-sage",
      "pink-soft": "bg-pink-soft text-white border-pink-soft"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const getAccentColorClasses = (color: string) => {
    const colorMap = {
      coral: "text-coral",
      sage: "text-sage",
      "pink-soft": "text-pink-soft"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.coral;
  };

  const handleMagazineClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="magazine-showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Editorial <span className="text-coral">Magazine Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contributing to prestigious literary festivals through editorial excellence, cultural documentation, 
            and storytelling that preserves and celebrates our rich artistic heritage.
          </p>
        </div>

        {/* Edition Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-lg p-1 shadow-soft border">
            {Object.entries(magazines).map(([key, magazine]) => (
              <button
                key={key}
                onClick={() => setActiveEdition(key as 'edition3' | 'edition4')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeEdition === key 
                    ? getActiveColorClasses(magazine.color)
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <BookOpen className="h-4 w-4" />
                {magazine.edition} ({magazine.year})
              </button>
            ))}
          </div>
        </div>

        {/* Magazine Showcase */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-card border-none bg-white/70 backdrop-blur-sm">
            {/* Magazine Header */}
            <div className={`p-8 border-b border-border/50 bg-gradient-to-r ${currentMagazine.color === 'coral' ? 'from-coral/10 to-pink-soft/10' : 'from-sage/10 to-green-50'}`}>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-full ${getActiveColorClasses(currentMagazine.color)}`}>
                      <Feather className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {currentMagazine.title}
                      </h3>
                      <p className={`text-lg font-semibold ${getAccentColorClasses(currentMagazine.color)}`}>
                        {currentMagazine.edition} - {currentMagazine.year}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{currentMagazine.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{currentMagazine.location}</span>
                    </div>
                  </div>

                  <p className="text-foreground leading-relaxed mb-4">
                    {currentMagazine.description}
                  </p>

                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 ${getColorClasses(currentMagazine.color)} font-medium`}>
                    <Star className="h-4 w-4" />
                    {currentMagazine.theme}
                  </div>
                </div>
                
                <Button
                  onClick={() => handleMagazineClick(currentMagazine.url)}
                  className={`${getActiveColorClasses(currentMagazine.color)} hover:opacity-90 flex-shrink-0`}
                  size="lg"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  View Festival Page
                </Button>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Editorial Work */}
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Feather className={`h-5 w-5 ${getAccentColorClasses(currentMagazine.color)}`} />
                    Editorial Contributions
                  </h4>
                  
                  <div className="space-y-4 mb-8">
                    {currentMagazine.editorialWork.contentTypes.map((type, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-2 h-2 rounded-full ${currentMagazine.color === 'coral' ? 'bg-coral' : 'bg-sage'}`}></div>
                        <span className="text-foreground font-medium">{type}</span>
                      </div>
                    ))}
                  </div>

                  {/* Festival Highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(currentMagazine.highlights).map(([key, value]) => (
                      <div key={key} className={`p-4 rounded-lg border-2 ${getColorClasses(currentMagazine.color)} text-center`}>
                        <div className={`text-xl font-bold ${getAccentColorClasses(currentMagazine.color)}`}>
                          {value}
                        </div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Contributors */}
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Users className={`h-5 w-5 ${getAccentColorClasses(currentMagazine.color)}`} />
                    Featured Contributors
                  </h4>
                  
                  <div className="space-y-3 mb-8">
                    {currentMagazine.featuredContributors.map((contributor, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-soft transition-shadow">
                        <div className={`w-10 h-10 rounded-full ${getActiveColorClasses(currentMagazine.color)} flex items-center justify-center`}>
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{contributor.name}</div>
                          <div className="text-sm text-muted-foreground">{contributor.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Impact Section */}
              <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Music className={`h-5 w-5 ${getAccentColorClasses(currentMagazine.color)}`} />
                  Editorial Impact
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(currentMagazine.editorialWork.impact).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className={`text-lg font-bold ${getAccentColorClasses(currentMagazine.color)}`}>
                        {value}
                      </div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="coral" 
            size="lg" 
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            📖 Let's Create Editorial Excellence Together
            <BookOpen className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Cultural Heritage Note */}
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
          <h5 className="font-semibold text-amber-800 mb-2">Cultural Heritage Documentation</h5>
          <p className="text-sm text-amber-700 max-w-3xl mx-auto">
            Contributing to the preservation and celebration of Deccan's rich literary and artistic traditions 
            through thoughtful editorial work that bridges traditional culture with contemporary audiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MagazineShowcase;