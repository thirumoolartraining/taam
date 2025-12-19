import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Wheat, Gauge, Settings, Truck } from "lucide-react";
import { harvesterModels } from "@/data";


const Harvesters = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advanced Harvesters
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Efficient harvesting solutions to maximize your crop yield and minimize post-harvest losses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" variant="secondary" className="text-yellow-800">
                  Get Price Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-800">
                  Expert Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Harvesters Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Harvester Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From compact mini combines to specialized crop harvesters, find the perfect solution for your harvest needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {harvesterModels.map((harvester) => (
              <Card key={harvester.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
                {harvester.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      Popular Choice
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <Badge variant="secondary" className="bg-white/90">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {harvester.rating}
                  </Badge>
                  <Badge variant="outline">
                    {harvester.type}
                  </Badge>
                </div>

                <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={harvester.image}
                    alt={harvester.name}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {harvester.name}
                  </CardTitle>
                  <CardDescription className="text-yellow-600 font-semibold text-lg">
                    Type: {harvester.type}
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-yellow-600">{harvester.price}</span>
                    <span className="text-sm text-gray-500 line-through">{harvester.originalPrice}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {harvester.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Wheat className="w-3 h-3 mr-1 text-yellow-600" />
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
                          Width: {harvester.specifications["Cutting Width"]}
                        </div>
                        <div className="flex items-center">
                          <Wheat className="w-3 h-3 mr-1" />
                          Tank: {harvester.specifications["Grain Tank"]}
                        </div>
                        <div className="flex items-center">
                          <Settings className="w-3 h-3 mr-1" />
                          Engine: {harvester.specifications["Engine Power"]}
                        </div>
                        <div className="flex items-center">
                          <Truck className="w-3 h-3 mr-1" />
                          Output: {harvester.specifications["Productivity"]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link to={`/product/harvesters/${harvester.id}`} className="flex-1">
                        <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to="/request-quote">
                        <Button variant="outline" size="icon">
                          <Wheat className="h-4 w-4" />
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

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Revolutionize Your Harvest?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert recommendations and competitive pricing on all harvester models
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" variant="secondary" className="text-yellow-800">
                Get Detailed Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-800">
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

export default Harvesters;
