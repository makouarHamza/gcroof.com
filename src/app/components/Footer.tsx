import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-accent text-xl font-bold">GC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold leading-none">GC Roofing</h3>
                <p className="text-xs text-white/60">Since 1980</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Three generations of roofing excellence serving California's commercial properties with unmatched quality and reliability.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">Commercial Roof Installation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">Roof Repair & Maintenance</a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">Roof Restoration</a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">Waterproofing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">Cool Roof Systems</a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">Inspections & Consulting</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#our-story" className="hover:text-accent transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-accent transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <div className="font-medium text-white mb-1">Phone</div>
                <a href="tel:+18005551234" className="hover:text-accent transition-colors">(800) 555-1234</a>
              </li>
              <li>
                <div className="font-medium text-white mb-1">Email</div>
                <a href="mailto:info@gcroofing.com" className="hover:text-accent transition-colors">info@gcroofing.com</a>
              </li>
              <li>
                <div className="font-medium text-white mb-1">Address</div>
                <div>1234 Industrial Parkway<br />Los Angeles, CA 90001</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">✓</div>
              Licensed Contractor
            </span>
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">✓</div>
              Fully Insured
            </span>
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">✓</div>
              EPA Certified
            </span>
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">✓</div>
              OSHA Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>
              © 2025 GC Roofing. All rights reserved. Serving California since 1980.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
