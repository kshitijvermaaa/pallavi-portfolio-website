
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-coral mb-4">Pallavi Dey</h3>
            <p className="text-background/80 leading-relaxed mb-4">
              Content Strategist & Copywriter crafting compelling content that drives traffic, 
              engages audiences, and supports growth for SaaS, AI, and B2B brands.
            </p>
            <div className="text-sm text-background/60">
              Google Digital Marketing Certified
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-coral transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-coral transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-background/80 hover:text-coral transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-coral transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:pallavi.tanya.dey@gmail.com" className="hover:text-coral transition-colors">
                  pallavi.tanya.dey@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span>+91 72093xxxxx</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </div>
            </div>
            <p className="text-background/80 mt-4 text-sm">
              Available for freelance projects
            </p>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm">
            © {currentYear} Pallavi Dey. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-background/80 text-sm mt-4 md:mt-0">
            <span>Crafted with</span>
            <Heart className="h-4 w-4 text-coral fill-current" />
            <span>and strategic thinking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
