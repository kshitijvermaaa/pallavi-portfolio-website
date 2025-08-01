
import { useState } from "react";
import { MessageCircle, X, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const StickyContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: Mail,
      label: "Email Me",
      action: () => window.open("mailto:pallavi.tanya.dey@gmail.com"),
      color: "bg-coral hover:bg-coral/90"
    },
    {
      icon: Phone,
      label: "Call Now",
      action: () => window.open("tel:+917209323716"),
      color: "bg-sage hover:bg-sage/90"
    },
    {
      icon: Calendar,
      label: "Schedule Call",
      action: () => window.open("#contact"),
      color: "bg-pink-soft hover:bg-pink-soft/90"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {isOpen && (
        <Card className="mb-4 p-4 bg-white/95 backdrop-blur-sm shadow-card border-none animate-scale-in">
          <div className="space-y-3 w-48">
            {contactOptions.map((option, index) => (
              <Button
                key={index}
                onClick={option.action}
                className={`w-full justify-start gap-3 text-white ${option.color}`}
                size="sm"
              >
                <option.icon className="h-4 w-4" />
                {option.label}
              </Button>
            ))}
            <div className="pt-2 border-t text-xs text-muted-foreground text-center">
              Quick response guaranteed ⚡
            </div>
          </div>
        </Card>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-card transition-all duration-300 ${
          isOpen 
            ? "bg-gray-500 hover:bg-gray-600 rotate-180" 
            : "bg-coral hover:bg-coral/90"
        }`}
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </Button>

    </div>
  );
};

export default StickyContact;
