import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Cog, Gauge, Settings, Truck } from "lucide-react";
import { tractorModels } from "@/data";


const Tractors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Tractors
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover our range of high-performance tractors from leading manufacturers, designed for modern farming needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" variant="secondary" className="text-green-800">
                  Get Price Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                  Expert Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tractors Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Tractor Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully selected range of tractors suitable for various farming applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tractorModels.map((tractor) => (
              <Card key={tractor.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden cursor-pointer">
                {tractor.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      Popular Choice
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-white/90">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {tractor.rating}
                  </Badge>
                </div>

                <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={tractor.image}
                    alt={tractor.name}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: '4/3' }}
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {tractor.name}
                  </CardTitle>
                  <CardDescription className="text-green-600 font-semibold text-lg">
                    {tractor.specifications["Engine Power"]}
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-600">{tractor.price}</span>
                    <span className="text-sm text-gray-500 line-through">{tractor.originalPrice}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {tractor.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Settings className="w-3 h-3 mr-1 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Specifications */}
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Key Specifications:</h4>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex items-center">
                          <Cog className="w-3 h-3 mr-1" />
                          {tractor.specifications["Drive Type"]}
                        </div>
                        <div className="flex items-center">
                          <Gauge className="w-3 h-3 mr-1" />
                          {tractor.specifications["Gear Box"]}
                        </div>
                        <div className="flex items-center">
                          <Settings className="w-3 h-3 mr-1" />
                          PTO: {tractor.specifications["PTO Power"]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link to={`/product/tractors/${tractor.id}`} className="flex-1">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to="/request-quote">
                        <Button variant="outline" size="icon">
                          <Truck className="h-4 w-4" />
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

      {/* Buying Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Tractor Buying Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cog className="mr-2 h-5 w-5 text-green-600" />
                    Choose the Right HP
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>20-35 HP:</strong> Small farms, orchard work</li>
                    <li>• <strong>35-50 HP:</strong> Medium farms, general farming</li>
                    <li>• <strong>50-75 HP:</strong> Large farms, heavy implements</li>
                    <li>• <strong>75+ HP:</strong> Commercial farming, heavy duty</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5 text-green-600" />
                    Key Features to Consider
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>4WD vs 2WD:</strong> Terrain and traction needs</li>
                    <li>• <strong>Power Steering:</strong> Ease of operation</li>
                    <li>• <strong>Hydraulics:</strong> Implement compatibility</li>
                    <li>• <strong>PTO Options:</strong> 540/1000 RPM availability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gauge className="mr-2 h-5 w-5 text-green-600" />
                    Transmission Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Sliding Mesh:</strong> Basic, economical option</li>
                    <li>• <strong>Constant Mesh:</strong> Smooth gear changes</li>
                    <li>• <strong>Synchromesh:</strong> Advanced, easy shifting</li>
                    <li>• <strong>Hydrostatic:</strong> Infinite speed control</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-green-600" />
                    Brand Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Service Network:</strong> Local dealer support</li>
                    <li>• <strong>Spare Parts:</strong> Availability and cost</li>
                    <li>• <strong>Resale Value:</strong> Brand reputation</li>
                    <li>• <strong>Warranty:</strong> Coverage and terms</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Flexible Financing Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">8.5%</span>
                  </div>
                  <CardTitle>Low Interest Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Starting from 8.5% per annum with flexible repayment terms</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">90%</span>
                  </div>
                  <CardTitle>High Loan Amount</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Up to 90% financing available on tractor purchase</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">7</span>
                  </div>
                  <CardTitle>Flexible Tenure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Repayment tenure up to 7 years with seasonal payment options</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Choose Your Tractor?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance and competitive pricing on all tractor models
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" variant="secondary" className="text-green-800">
                Get Detailed Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
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

export default Tractors;
