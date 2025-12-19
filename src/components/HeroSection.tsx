import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroTractor from "@/assets/hero-tractor.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center py-8 md:py-0">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTractor})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-background/95 via-background/80 to-background/60 md:to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-full lg:max-w-none lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Reliable Machines for 
                <span className="text-primary block">Every Farmer</span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-muted-foreground">
                Premium tractors, tillers, sprayers, and harvesters with expert service across Tamil Nadu. 
                Built for Indian farms, backed by local support.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>4+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>24/7 Service Support</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/request-quote" className="w-full sm:w-auto">
                <Button className="btn-cta text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 w-full">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="btn-quote text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Book Demo
                </Button>
              </Link>
            </div>

            {/* Quick Contact */}
            <div className="pt-4 md:pt-6 border-t border-border/50">
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">Quick Contact:</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm">
                <a href="tel:+919894377407" className="flex items-center gap-2 text-primary hover:underline">
                  📞 +91 98943 77407
                </a>
                <a href="https://wa.me/919894377407" className="flex items-center gap-2 text-primary hover:underline">
                  💬 WhatsApp Now
                </a>
              </div>
            </div>

            {/* Hero Stats/Features - Mobile visible */}
            <div className="lg:hidden">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-card/90 backdrop-blur rounded-lg p-3 text-center shadow-sm">
                  <div className="text-lg sm:text-xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Machines Sold</div>
                </div>
                <div className="bg-card/90 backdrop-blur rounded-lg p-3 text-center shadow-sm">
                  <div className="text-lg sm:text-xl font-bold text-accent">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;