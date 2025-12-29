import { Shield, Wrench, IndianRupee, Clock, Award, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Reliable Quality",
    description: "Premium machinery with 2-year warranty and genuine parts guarantee",
    color: "text-primary"
  },
  {
    icon: Wrench,
    title: "Expert Service",
    description: "24/7 technical support with trained technicians across Tamil Nadu",
    color: "text-accent"
  },
  {
    icon: IndianRupee,
    title: "Best Pricing",
    description: "Competitive rates with flexible EMI options and bulk discounts",
    color: "text-cta"
  },
  {
    icon: Clock,
    title: "Quick Delivery",
    description: "Fast delivery and installation within 48 hours across all districts",
    color: "text-primary"
  },
  {
    icon: Award,
    title: "4+ Years Experience",
    description: "Trusted by farmers with proven track record in agriculture since 2021",
    color: "text-accent"
  },
  {
    icon: MapPin,
    title: "Local Presence",
    description: "Service centers across Tamil Nadu with dedicated spare parts inventory",
    color: "text-cta"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Why Choose <span className="text-primary">Thiru Annamalaiyar</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge agricultural technology with deep understanding of Indian farming needs. 
            Our commitment to quality and service has made us Tamil Nadu's trusted machinery partner.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-[--shadow-product]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-cta/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1,000+</div>
              <div className="text-sm text-muted-foreground">Happy Farmers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cta mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Service Centers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;