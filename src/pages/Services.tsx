import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Settings, GraduationCap, Shield, CreditCard, Phone } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Maintenance",
    description: "Regular maintenance services to keep your equipment running smoothly",
    icon: Settings,
    features: ["Preventive Maintenance", "Scheduled Service", "Performance Optimization", "Parts Replacement"],
    price: "Starting from ₹2,500",
    duration: "2-4 hours",
    link: "/services/maintenance"
  },
  {
    id: 2,
    name: "Repairs",
    description: "Expert repair services for all types of agricultural machinery",
    icon: Wrench,
    features: ["Emergency Repairs", "Engine Overhaul", "Hydraulic Repairs", "Electrical Troubleshooting"],
    price: "Starting from ₹1,500",
    duration: "1-8 hours",
    link: "/services/repairs"
  },
  {
    id: 3,
    name: "Installation",
    description: "Professional installation and setup of new equipment",
    icon: Settings,
    features: ["Equipment Setup", "System Integration", "Performance Testing", "Initial Training"],
    price: "Starting from ₹3,000",
    duration: "4-8 hours",
    link: "/services/installation"
  },
  {
    id: 4,
    name: "Training",
    description: "Comprehensive training programs for equipment operation",
    icon: GraduationCap,
    features: ["Operator Training", "Safety Protocols", "Maintenance Training", "Efficiency Tips"],
    price: "Starting from ₹5,000",
    duration: "1-3 days",
    link: "/services/training"
  },
  {
    id: 5,
    name: "Warranty",
    description: "Extended warranty and protection plans for your equipment",
    icon: Shield,
    features: ["Extended Coverage", "Parts Protection", "Labor Coverage", "Priority Service"],
    price: "Starting from ₹8,000/year",
    duration: "1-5 years",
    link: "/services/warranty"
  },
  {
    id: 6,
    name: "Financing",
    description: "Flexible financing options for equipment purchase",
    icon: CreditCard,
    features: ["Easy EMI Options", "Low Interest Rates", "Quick Approval", "Flexible Terms"],
    price: "Interest from 8.5%",
    duration: "12-84 months",
    link: "/services/financing"
  }
];

const serviceProcess = [
  {
    step: 1,
    title: "Contact Us",
    description: "Call our service hotline or book online",
    icon: Phone
  },
  {
    step: 2,
    title: "Assessment",
    description: "Our expert technician evaluates your equipment",
    icon: Settings
  },
  {
    step: 3,
    title: "Service Delivery",
    description: "Professional service execution with quality parts",
    icon: Wrench
  },
  {
    step: 4,
    title: "Quality Check",
    description: "Thorough testing and performance verification",
    icon: Shield
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Complete service solutions to maximize your equipment performance and minimize downtime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" variant="secondary" className="text-purple-800">
                  Book Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-800">
                  Emergency Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to emergency repairs, we provide comprehensive service solutions for all your agricultural equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex-1"></div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-purple-600 font-semibold">{service.price}</span>
                        <Badge variant="outline">{service.duration}</Badge>
                      </div>
                      
                      <div className="flex gap-2">
                        <Link to={service.link} className="flex-1">
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Link to="/request-quote">
                          <Button variant="outline" size="icon">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple, efficient, and professional service delivery every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceProcess.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={process.step} className="text-center relative">
                  {index < serviceProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-purple-200 -translate-x-1/2"></div>
                  )}
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              24/7 Emergency Service
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Equipment breakdown during critical farming seasons? Our emergency service team is available round the clock to get you back up and running.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Call Emergency Hotline
                <Phone className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Service Coverage Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala", "Telangana", "Puducherry", "Goa", "Maharashtra"].map((area) => (
                <div key={area} className="bg-white p-4 rounded-lg shadow-sm border">
                  <span className="font-medium text-gray-800">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              Don't see your area? Contact us to check service availability in your region.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get professional service from certified technicians with genuine parts and warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" variant="secondary" className="text-purple-800">
                Book Service Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-800">
                Get Service Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
