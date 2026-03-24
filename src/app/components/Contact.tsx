import { ImageWithFallback } from './figma/ImageWithFallback';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-4">
            <span className="text-accent text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today for a free consultation and quote on your commercial roofing needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Request a Free Quote</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input id="email" type="email" placeholder="john@company.com" required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company Name
                </label>
                <Input id="company" placeholder="Your Company" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="installation">New Installation</option>
                  <option value="repair">Repair & Maintenance</option>
                  <option value="restoration">Roof Restoration</option>
                  <option value="inspection">Inspection & Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your roofing project..."
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Your Free Quote
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We typically respond within 24 hours during business days
              </p>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-primary mb-1">Phone</div>
                  <a href="tel:+18005551234" className="text-muted-foreground hover:text-accent transition-colors">
                    (800) 555-1234
                  </a>
                  <div className="text-sm text-muted-foreground mt-1">24/7 Emergency Line</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-primary mb-1">Email</div>
                  <a href="mailto:info@gcroofing.com" className="text-muted-foreground hover:text-accent transition-colors">
                    info@gcroofing.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-primary mb-1">Headquarters</div>
                  <div className="text-muted-foreground">
                    1234 Industrial Parkway<br />
                    Los Angeles, CA 90001
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-primary mb-1">Business Hours</div>
                  <div className="text-muted-foreground">
                    Monday - Friday: 7:00 AM - 6:00 PM<br />
                    Saturday: 8:00 AM - 4:00 PM<br />
                    Sunday: Emergency Service Only
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676749467767-5b1c62118bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwc2t5bGluZSUyMGJ1aWxkaW5nc3xlbnwxfHx8fDE3NzQxMzUzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="California skyline"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
