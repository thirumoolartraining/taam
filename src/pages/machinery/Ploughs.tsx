import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Wrench, Gauge, Settings, Truck } from "lucide-react";
import { ploughModels } from "@/data";

const Ploughs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Ploughs
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Heavy-duty ploughing equipment for primary tillage and effective soil preparation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" variant="secondary" className="text-red-800">
                  Get Price Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-800">
                  Expert Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ploughs Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Plough Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of ploughs designed for different soil conditions and farming requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ploughModels.map((plough) => (
              <Card key={plough.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
                {plough.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      Popular Choice
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  <Badge variant="secondary" className="bg-white/90">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {plough.rating}
                  </Badge>
                  <Badge variant="outline">
                    {plough.type}
                  </Badge>
                </div>

                <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={plough.image}
                    alt={plough.name}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {plough.name}
                  </CardTitle>
                  <CardDescription className="text-red-600 font-semibold text-lg">
                    Type: {plough.type}
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-red-600">{plough.price}</span>
                    <span className="text-sm text-gray-500 line-through">{plough.originalPrice}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {plough.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Settings className="w-3 h-3 mr-1 text-red-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Specifications */}
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Specifications:</h4>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex items-center">
                          <Settings className="w-3 h-3 mr-1" />
                          {plough.specifications["Number of Furrows"] || plough.specifications["Number of Tines"] || plough.specifications["Number of Shanks"]}
                        </div>
                        {plough.specifications["Disc Size"] && plough.specifications["Disc Size"] !== "N/A" && (
                          <div className="flex items-center">
                            <Gauge className="w-3 h-3 mr-1" />
                            Disc: {plough.specifications["Disc Size"]}
                          </div>
                        )}
                        <div className="flex items-center">
                          <Wrench className="w-3 h-3 mr-1" />
                          Width: {plough.specifications["Working Width"]}
                        </div>
                        <div className="flex items-center">
                          <Truck className="w-3 h-3 mr-1" />
                          Power: {plough.specifications["Power Requirement"]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link to={`/product/ploughs/${plough.id}`} className="flex-1">
                        <Button className="w-full bg-red-600 hover:bg-red-700">
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

      {/* Types of Ploughs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Types of Ploughs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5 text-red-600" />
                    Disc Ploughs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Ideal for hard and dry soils, trash-covered fields</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Cuts through crop residue</li>
                    <li>• Works in hard soil conditions</li>
                    <li>• Minimal maintenance required</li>
                    <li>• Suitable for rocky soils</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="mr-2 h-5 w-5 text-red-600" />
                    Mould Board Ploughs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Perfect for complete soil inversion and weed burial</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Complete soil inversion</li>
                    <li>• Excellent weed control</li>
                    <li>• Good for organic matter mixing</li>
                    <li>• Ideal for clean cultivation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="mr-2 h-5 w-5 text-red-600" />
                    Reversible Ploughs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Efficient ploughing without creating headlands</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• No headland formation</li>
                    <li>• Uniform soil preparation</li>
                    <li>• Higher field efficiency</li>
                    <li>• Reduced turning time</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gauge className="mr-2 h-5 w-5 text-red-600" />
                    Chisel Ploughs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Deep tillage with minimal soil inversion</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Deep soil penetration</li>
                    <li>• Preserves soil structure</li>
                    <li>• Breaks hardpan layers</li>
                    <li>• Conserves soil moisture</li>
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
              Choose the Right Plough
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gauge className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle>Soil Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    <strong>Hard/Dry:</strong> Disc ploughs<br/>
                    <strong>Soft/Moist:</strong> Mould board<br/>
                    <strong>Rocky:</strong> Disc ploughs<br/>
                    <strong>Clay:</strong> Chisel ploughs
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle>Field Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    <strong>Trash-covered:</strong> Disc ploughs<br/>
                    <strong>Clean fields:</strong> Mould board<br/>
                    <strong>Irregular shape:</strong> Reversible<br/>
                    <strong>Large fields:</strong> Heavy duty
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gauge className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle>Tractor Power</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    <strong>25-35 HP:</strong> 2 furrow<br/>
                    <strong>35-50 HP:</strong> 3 furrow<br/>
                    <strong>50-70 HP:</strong> 4-5 furrow<br/>
                    <strong>70+ HP:</strong> Heavy duty
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Improve Your Primary Tillage?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert recommendations and competitive pricing on all plough models
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" variant="secondary" className="text-red-800">
                Get Detailed Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-800">
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

export default Ploughs;
