import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Settings, Wrench, Gauge } from "lucide-react";
import { tillerModels } from "@/data";


const Tillers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Tillers
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Efficient soil preparation equipment for perfect seedbed preparation and cultivation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" variant="secondary" className="text-amber-800">
                  Get Price Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-800">
                  Expert Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tillers Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Tiller Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of tillers designed for various soil types and farming requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tillerModels.map((tiller) => (
              <Card key={tiller.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
                {tiller.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      Popular Choice
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-white/90">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {tiller.rating}
                  </Badge>
                </div>

                <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={tiller.image}
                    alt={tiller.name}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {tiller.name}
                  </CardTitle>
                  <CardDescription className="text-amber-600 font-semibold text-lg">
                    Type: {tiller.type}
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-amber-600">{tiller.price}</span>
                    <span className="text-sm text-gray-500 line-through">{tiller.originalPrice}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {tiller.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Settings className="w-3 h-3 mr-1 text-amber-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Specifications */}
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Specifications:</h4>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex items-center">
                          <Gauge className="w-3 h-3 mr-1" />
                          Width: {tiller.specifications["Working Width"]}
                        </div>
                        <div className="flex items-center">
                          <Wrench className="w-3 h-3 mr-1" />
                          {tiller.specifications["Number of Blades"] || tiller.specifications["Number of Tines"]}
                        </div>
                        <div className="flex items-center">
                          <Settings className="w-3 h-3 mr-1" />
                          Depth: {tiller.specifications["Depth Range"]}
                        </div>
                        <div className="flex items-center">
                          <Gauge className="w-3 h-3 mr-1" />
                          Power: {tiller.specifications["Power Requirement"]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link to={`/product/tillers/${tiller.id}`} className="flex-1">
                        <Button className="w-full bg-amber-600 hover:bg-amber-700">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to="/request-quote">
                        <Button variant="outline" size="icon">
                          <Wrench className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Tillers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Types of Tillers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5 text-amber-600" />
                    Rotary Tillers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Best for breaking hard soil and mixing crop residue</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Vertical rotating blades</li>
                    <li>• Excellent soil mixing</li>
                    <li>• Suitable for all soil types</li>
                    <li>• High working efficiency</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="mr-2 h-5 w-5 text-amber-600" />
                    Cultivator Tillers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Ideal for secondary tillage and weed control</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Spring-loaded tines</li>
                    <li>• Gentle soil cultivation</li>
                    <li>• Preserves soil structure</li>
                    <li>• Lower power requirement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gauge className="mr-2 h-5 w-5 text-amber-600" />
                    Power Harrows
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Professional grade for fine seedbed preparation</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Vertical tine action</li>
                    <li>• Uniform soil preparation</li>
                    <li>• Rear roller for leveling</li>
                    <li>• High-quality finish</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5 text-amber-600" />
                    Disc Harrows
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Heavy-duty soil breaking and residue management</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Sharp disc blades</li>
                    <li>• Cuts through residue</li>
                    <li>• Deep soil penetration</li>
                    <li>• Durable construction</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Guide */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              How to Choose the Right Tiller
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gauge className="w-8 h-8 text-amber-600" />
                  </div>
                  <CardTitle>Farm Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Match working width to your field size for optimal efficiency</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-amber-600" />
                  </div>
                  <CardTitle>Soil Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Consider soil hardness and texture for blade selection</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-amber-600" />
                  </div>
                  <CardTitle>Tractor Power</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Ensure your tractor has adequate HP for the tiller</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Improve Your Soil Preparation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert recommendations and competitive pricing on all tiller models
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" variant="secondary" className="text-amber-800">
                Get Detailed Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-800">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tillers;
