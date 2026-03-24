import { Building, Wrench, Shield, Sparkles, Droplet, Sun } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: Building,
      title: 'Commercial Roof Installation',
      description: 'Expert installation of TPO, EPDM, PVC, and metal roofing systems designed for longevity and performance.',
      features: ['Custom design solutions', 'Energy-efficient options', 'Warranty backed'],
    },
    {
      icon: Wrench,
      title: 'Roof Repair & Maintenance',
      description: 'Comprehensive repair services and preventive maintenance programs to extend the life of your roof.',
      features: ['24/7 emergency service', 'Regular inspections', 'Leak detection'],
    },
    {
      icon: Shield,
      title: 'Roof Restoration',
      description: 'Cost-effective restoration services that can extend your roof\'s life by 15+ years without full replacement.',
      features: ['Silicone coating systems', 'Sustainable solution', 'Minimal disruption'],
    },
    {
      icon: Droplet,
      title: 'Waterproofing',
      description: 'Advanced waterproofing solutions protecting your building from California\'s varied weather conditions.',
      features: ['Long-lasting protection', 'Multiple system options', 'Expert application'],
    },
    {
      icon: Sun,
      title: 'Cool Roof Systems',
      description: 'Energy-efficient cool roofing solutions that reduce cooling costs and meet California Title 24 standards.',
      features: ['Energy savings', 'Reflective technology', 'Tax incentives'],
    },
    {
      icon: Sparkles,
      title: 'Inspections & Consulting',
      description: 'Detailed roof assessments and expert consulting to help you make informed decisions.',
      features: ['Thermal imaging', 'Detailed reports', 'ROI analysis'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-4">
            <span className="text-accent text-sm font-medium">What We Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Comprehensive Roofing Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-service commercial roofing backed by 45 years of California expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-border rounded-xl p-8 hover:shadow-xl hover:border-accent/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Not Sure What You Need?</h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Our roofing experts will assess your property and recommend the best solution for your specific needs and budget.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-medium text-lg transition-colors">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
