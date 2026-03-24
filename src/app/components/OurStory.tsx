import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Building2, Hammer, TrendingUp, Users2 } from 'lucide-react';

export function OurStory() {
  const timeline = [
    {
      year: '1980',
      title: 'The Beginning',
      description: 'Founded by George Chen in Southern California, starting with residential roofing projects and a commitment to quality craftsmanship.',
      icon: Hammer,
    },
    {
      year: '1995',
      title: 'Commercial Expansion',
      description: 'Transitioned to commercial roofing, bringing our family values and attention to detail to larger-scale projects across California.',
      icon: Building2,
    },
    {
      year: '2010',
      title: 'Second Generation',
      description: 'George\'s son Michael joined the business, introducing modern techniques while maintaining the traditional values of excellence.',
      icon: Users2,
    },
    {
      year: '2025',
      title: 'Industry Leaders',
      description: 'Now a multi-generational family business, recognized as one of California\'s premier commercial roofing contractors.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="our-story" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-4">
            <span className="text-accent text-sm font-medium">Our Legacy</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Four Decades of Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a small family operation to California's trusted commercial roofing partner
          </p>
        </div>

        {/* Story Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3NDAyNDc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="GC Roofing team"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              A Family Tradition of Quality
            </h3>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                What started in 1980 as a modest roofing operation has grown into one of California's most respected commercial roofing companies. Our founder, George Chen, built this business on simple principles: honest work, quality materials, and treating every client like family.
              </p>
              <p>
                Today, those same values guide our third generation of craftsmen. We've evolved with the industry, embracing new technologies and sustainable practices, but our commitment to excellence remains unchanged.
              </p>
              <p>
                Every project we undertake carries the weight of our 45-year reputation. When you choose GC Roofing, you're not just hiring a contractor—you're partnering with a family legacy built on trust and proven performance.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-accent/20 -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Left Content */}
                <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}>
                  <div className="inline-block lg:block">
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
                      <div className="flex lg:flex-col items-start gap-4 lg:items-start">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                          <div className="text-3xl font-bold text-accent mb-2">{item.year}</div>
                          <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-muted"></div>

                {/* Right Content (Empty for alignment) */}
                <div className={index % 2 === 0 ? 'lg:order-2' : ''}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
