import { Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+18005551234" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>(800) 555-1234</span>
              </a>
              <a href="mailto:info@gcroofing.com" className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@gcroofing.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs">
                🏆 Family Owned
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs">
                📍 Serving California for 4+ Decades
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-accent text-xl font-bold">GC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary leading-none">GC Roofing</h1>
              <p className="text-xs text-muted-foreground">Since 1980</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">Home</a>
            <a href="#our-story" className="text-foreground hover:text-accent transition-colors">Our Story</a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="#why-choose-us" className="text-foreground hover:text-accent transition-colors">Why Choose Us</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
          </div>

          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get Free Quote
          </Button>
        </div>
      </nav>
    </header>
  );
}
