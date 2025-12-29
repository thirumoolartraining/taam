import { Phone, MessageCircle, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import workshopImage from "@/assets/workshop-service.jpg";

const AfterSalesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Comprehensive <span className="text-primary">After-Sales Service</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment doesn't end with the sale. We provide complete support with genuine spare parts, 
            expert maintenance, and round-the-clock technical assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Service Image */}
          <div className="relative pb-8 lg:pb-0">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={workshopImage}
                alt="Service Workshop"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Service Stats */}
            <div className="absolute -bottom-4 right-4 sm:right-8 lg:-right-8 bg-card border border-border rounded-xl p-4 sm:p-6 shadow-[--shadow-product]">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Service Support</div>
              </div>
            </div>
          </div>

          {/* Service Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Statewide Service Network
                  </h3>
                  <p className="text-muted-foreground">
                    Service centers across Tamil Nadu with trained technicians and genuine spare parts inventory. 
                    Quick response within 24 hours for emergency repairs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Preventive Maintenance
                  </h3>
                  <p className="text-muted-foreground">
                    Regular maintenance schedules, seasonal check-ups, and performance optimization to 
                    ensure maximum uptime during critical farming seasons.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cta/10 rounded-full">
                  <Phone className="h-6 w-6 text-cta" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Expert Technical Support
                  </h3>
                  <p className="text-muted-foreground">
                    Direct access to technical experts, troubleshooting guidance, and remote diagnostics. 
                    Tamil and English support available for all customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Service Highlights</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>2-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Genuine Parts Only</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cta rounded-full"></div>
                  <span>Free Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Training Included</span>
                </div>
              </div>
            </div>

            {/* Service CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-cta flex-1">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Service
              </Button>
              <Button variant="outline" className="btn-quote flex-1">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Support
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/20">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-foreground">Emergency Service Hotline</div>
                  <div className="text-lg font-bold text-primary">+91 98943 77407</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterSalesSection;