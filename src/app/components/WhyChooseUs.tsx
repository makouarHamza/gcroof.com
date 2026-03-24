import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2, Award, Users, Clock, ThumbsUp, HeartHandshake } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: '45 Years of Excellence',
      description: 'Nearly five decades of proven expertise in commercial roofing across California.',
    },
    {
      icon: Users,
      title: 'Family-Owned Values',
      description: 'Three generations of commitment to quality, integrity, and customer satisfaction.',
    },
    {
      icon: CheckCircle2,
      title: 'Licensed & Insured',
      description: 'Fully licensed California contractors with comprehensive insurance coverage.',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock availability for urgent repairs and emergency situations.',
    },
    {
      icon: ThumbsUp,
      title: 'Quality Guarantee',
      description: 'Industry-leading warranties and a 100% satisfaction guarantee on all work.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Service',
      description: 'Direct access to decision-makers and dedicated project management.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-4">
            <span className="text-accent text-sm font-medium">Why GC Roofing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            The GC Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What sets us apart as California's premier commercial roofing contractor
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29maW5nJTIwd29ya2VycyUyMHByb2Zlc3Npb25hbCUyMHNhZmV0eXxlbnwxfHx8fDE3NzQxMzUzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional roofing team at work"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Reasons Grid */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex flex-col">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-1 mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-accent fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-primary mb-6 leading-relaxed italic">
                "GC Roofing transformed our 50,000 sq ft warehouse roof with incredible professionalism. Their family-owned approach meant we worked directly with the owners throughout the project. The attention to detail and quality of work exceeded our expectations."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <div className="font-bold text-primary">Michael Thompson</div>
                  <div className="text-sm text-muted-foreground">Facilities Director, Pacific Logistics</div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">45+</div>
            <div className="text-muted-foreground">Years in Business</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">1000+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Customer Retention</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Emergency Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
