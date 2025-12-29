import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Cog, Star } from "lucide-react";

import machinery1 from "@/assets/machinery1.jpeg";
import machinery2 from "@/assets/machinery2.jpeg";
import machinery3 from "@/assets/machinery3.jpg";
import machinery4 from "@/assets/machinery4.jpeg";
import machinery5 from "@/assets/machinery5.jpg";

const machineryCategories = [
  {
    id: 1,
    name: "Tractors",
    description: "High-performance tractors for all farming needs",
    image: machinery1,
    price: "₹8,50,000 - ₹25,00,000",
    features: ["45-120 HP", "4WD Available", "Power Steering", "Hydraulic Lift"],
    rating: 4.8,
    link: "/machinery/tractors"
  },
  {
    id: 2,
    name: "Tillers",
    description: "Efficient soil preparation equipment",
    image: machinery2,
    price: "₹45,000 - ₹1,20,000",
    features: ["Rotary Tilling", "Adjustable Depth", "Multiple Sizes", "Easy Operation"],
    rating: 4.6,
    link: "/machinery/tillers"
  },
  {
    id: 3,
    name: "Sprayers",
    description: "Precision spraying systems for crop protection",
    image: machinery3,
    price: "₹25,000 - ₹3,50,000",
    features: ["Boom Sprayers", "Knapsack Types", "Battery Operated", "GPS Guided"],
    rating: 4.7,
    link: "/machinery/sprayers"
  },
  {
    id: 4,
    name: "Harvesters",
    description: "Advanced harvesting solutions",
    image: machinery4,
    price: "₹12,00,000 - ₹45,00,000",
    features: ["Combine Harvesters", "Threshing Units", "Grain Tanks", "Auto Steering"],
    rating: 4.9,
    link: "/machinery/harvesters"
  },
  {
    id: 5,
    name: "Ploughs",
    description: "Traditional and modern ploughing equipment",
    image: machinery5,
    price: "₹15,000 - ₹85,000",
    features: ["Disc Ploughs", "Mould Board", "Reversible", "Heavy Duty"],
    rating: 4.5,
    link: "/machinery/ploughs"
  }
];

const Machinery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Agricultural Machinery
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover our comprehensive range of high-quality farming equipment designed to boost your productivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" variant="secondary" className="text-green-800">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                  Contact Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Categories */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Machinery Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From tractors to harvesters, we offer a complete range of agricultural machinery to meet all your farming needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machineryCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: '4/3' }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {category.rating}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-green-600">
                    {category.price}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Cog className="w-3 h-3 mr-1 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Link to={category.link} className="flex-1">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Our Machinery?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">All machinery undergoes rigorous quality checks and comes with manufacturer warranty</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600">Our technical experts provide installation, training, and ongoing support</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Performance</h3>
                <p className="text-gray-600">Trusted by thousands of farmers across the region for reliable performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Farm?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get personalized recommendations and competitive pricing on all machinery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" variant="secondary" className="text-green-800">
                Get Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/shop-now">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Machinery;
