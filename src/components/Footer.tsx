import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Thiru Annamalaiyar</h3>
              <p className="text-primary-foreground/80">Agricultural Machinery</p>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Tamil Nadu's trusted partner for agricultural machinery since 2021, 
              serving farmers across the state.
            </p>


          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><Link to="/machinery/tractors" className="hover:text-primary-foreground transition-colors">Tractors</Link></li>
              <li><Link to="/machinery/tillers" className="hover:text-primary-foreground transition-colors">Tillers</Link></li>
              <li><Link to="/machinery/sprayers" className="hover:text-primary-foreground transition-colors">Sprayers</Link></li>
              <li><Link to="/machinery/harvesters" className="hover:text-primary-foreground transition-colors">Harvesters</Link></li>
              <li><Link to="/machinery/ploughs" className="hover:text-primary-foreground transition-colors">Ploughs</Link></li>
              <li><Link to="/spare-parts" className="hover:text-primary-foreground transition-colors">Spare Parts</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><Link to="/services/maintenance" className="hover:text-primary-foreground transition-colors">Maintenance</Link></li>
              <li><Link to="/services/repairs" className="hover:text-primary-foreground transition-colors">Repairs</Link></li>
              <li><Link to="/services/installation" className="hover:text-primary-foreground transition-colors">Installation</Link></li>
              <li><Link to="/services/training" className="hover:text-primary-foreground transition-colors">Training</Link></li>
              <li><Link to="/services/warranty" className="hover:text-primary-foreground transition-colors">Warranty</Link></li>
              <li><Link to="/about-us" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>OPP TO NEW TALUK OFFICE</p>
                  <p>14/88, A.C.K ROAD, Madurantakam</p>
                  <p>Maduranthakam, Chengalpattu</p>
                  <p>Tamil Nadu, 603306</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+919894377407" className="hover:text-primary-foreground transition-colors">
                  +91 98943 77407
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:thiruannamalaiyar014@gmail.com" className="hover:text-primary-foreground transition-colors">
                  thiruannamalaiyar014@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Sat: 8:00 AM - 7:00 PM</p>
                  <p>Sun: 9:00 AM - 5:00 PM</p>
                  <p className="text-accent font-medium">24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-8">
          <div className="bg-gradient-to-r from-accent/10 to-cta/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Boost Your Farm's Productivity?</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Get personalized machinery recommendations and quotes from our agricultural experts. 
              Transform your farming with the right equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  Request Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p className="text-center md:text-left">© 2021-2025 Thiru Annamalaiyar Agricultural Machinery. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-primary-foreground transition-colors">Terms & Conditions</Link>
              <Link to="/shipping-policy" className="hover:text-primary-foreground transition-colors">Shipping Policy</Link>
              <Link to="/cancellation-refund-policy" className="hover:text-primary-foreground transition-colors">Cancellation & Refund</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;