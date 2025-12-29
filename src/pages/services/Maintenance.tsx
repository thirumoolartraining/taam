import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Settings, Clock, CheckCircle, Wrench, Calendar, Phone } from "lucide-react";

const maintenanceServices = [
  {
    id: 1,
    name: "Preventive Maintenance",
    duration: "2-3 hours",
    price: "₹2,500",
    description: "Regular scheduled maintenance to prevent breakdowns",
    includes: ["Oil Change", "Filter Replacement", "Belt Inspection", "Lubrication", "Basic Diagnostics"],
    frequency: "Every 100 hours"
  },
  {
    id: 2,
    name: "Seasonal Service",
    duration: "4-5 hours",
    price: "₹4,500",
    description: "Comprehensive service before farming seasons",
    includes: ["Complete Inspection", "Fluid Changes", "Component Testing", "Calibration", "Performance Check"],
    frequency: "Before each season"
  },
  {
    id: 3,
    name: "Annual Overhaul",
    duration: "1-2 days",
    price: "₹12,000",
    description: "Complete system overhaul and refurbishment",
    includes: ["Engine Service", "Transmission Check", "Hydraulic Service", "Electrical Testing", "Parts Replacement"],
    frequency: "Annually"
  }
];

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maintenance Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Keep your agricultural equipment running at peak performance with our professional maintenance services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" variant="secondary" className="text-green-800">
                  Schedule Service
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                  Emergency Service
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Maintenance Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive maintenance packages designed to keep your equipment in optimal condition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenanceServices.map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 text-center">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-green-600">{service.price}</span>
                    <div className="flex justify-center gap-4 mt-2">
                      <Badge variant="outline">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.duration}
                      </Badge>
                      <Badge variant="secondary">
                        {service.frequency}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Service Includes:</h4>
                      <ul className="space-y-2">
                        {service.includes.map((item, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Book Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Maintenance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Maintenance Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="mr-2 h-5 w-5 text-green-600" />
                    Expert Technicians
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Certified and trained professionals</li>
                    <li>• Years of experience with all brands</li>
                    <li>• Latest diagnostic equipment</li>
                    <li>• Continuous training updates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                    Genuine Parts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Only authentic manufacturer parts</li>
                    <li>• Quality guaranteed components</li>
                    <li>• Warranty on all parts used</li>
                    <li>• Extensive parts inventory</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-green-600" />
                    Timely Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Scheduled maintenance reminders</li>
                    <li>• Quick turnaround times</li>
                    <li>• Emergency service available</li>
                    <li>• Flexible scheduling options</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5 text-green-600" />
                    Comprehensive Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Complete system diagnostics</li>
                    <li>• Performance optimization</li>
                    <li>• Detailed service reports</li>
                    <li>• Maintenance recommendations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Recommended Maintenance Schedule
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left">Interval</th>
                      <th className="px-6 py-3 text-left">Service Type</th>
                      <th className="px-6 py-3 text-left">Key Activities</th>
                      <th className="px-6 py-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">Every 50 hours</td>
                      <td className="px-6 py-4">Basic Check</td>
                      <td className="px-6 py-4">Oil level, filters, belts</td>
                      <td className="px-6 py-4">1 hour</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Every 100 hours</td>
                      <td className="px-6 py-4">Preventive Service</td>
                      <td className="px-6 py-4">Oil change, filter replacement</td>
                      <td className="px-6 py-4">2-3 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Every 250 hours</td>
                      <td className="px-6 py-4">Comprehensive Service</td>
                      <td className="px-6 py-4">Full system inspection</td>
                      <td className="px-6 py-4">4-5 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Annually</td>
                      <td className="px-6 py-4">Major Overhaul</td>
                      <td className="px-6 py-4">Complete system service</td>
                      <td className="px-6 py-4">1-2 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your Maintenance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Keep your equipment running smoothly with our professional maintenance services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" variant="secondary" className="text-green-800">
                Schedule Service Now
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                Call for Emergency Service
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maintenance;
