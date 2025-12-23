import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Package, Truck, Shield, Clock, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

import sparePart1 from "@/assets/spare-part1.jpg";
import sparePart2 from "@/assets/spare-part2.jpg";
import sparePart3 from "@/assets/spare-part3.jpg";
import sparePart4 from "@/assets/spare-part4.jpg";
import sparePart5 from "@/assets/spare-part5.jpg";
import sparePart6 from "@/assets/spare-part6.jpg";
import featured1 from "@/assets/featured1.jpg";
import featured2 from "@/assets/featured2.jpg";
import featured3 from "@/assets/featured3.jpg";
import featured4 from "@/assets/featured4.jpg";

const sparePartsCategories = [
  {
    id: 1,
    name: "Engine Parts",
    description: "Pistons, rings, gaskets, filters and engine components",
    image: sparePart1,
    itemCount: "150+ Items",
    availability: "In Stock",
    category: "engine"
  },
  {
    id: 2,
    name: "Transmission Parts",
    description: "Gears, clutches, hydraulic components",
    image: sparePart2,
    itemCount: "85+ Items",
    availability: "In Stock",
    category: "transmission"
  },
  {
    id: 3,
    name: "Hydraulic Parts",
    description: "Pumps, cylinders, hoses, and fittings",
    image: sparePart3,
    itemCount: "120+ Items",
    availability: "In Stock",
    category: "hydraulic"
  },
  {
    id: 4,
    name: "Electrical Parts",
    description: "Alternators, starters, wiring harnesses",
    image: sparePart4,
    itemCount: "95+ Items",
    availability: "In Stock",
    category: "electrical"
  },
  {
    id: 5,
    name: "Filters & Fluids",
    description: "Oil filters, air filters, hydraulic fluids",
    image: sparePart5,
    itemCount: "200+ Items",
    availability: "In Stock",
    category: "filters"
  },
  {
    id: 6,
    name: "Implement Parts",
    description: "Blades, tines, belts, and attachments",
    image: sparePart6,
    itemCount: "180+ Items",
    availability: "In Stock",
    category: "implement"
  }
];

const featuredParts = [
  {
    id: 1,
    name: "Engine Oil Filter",
    partNumber: "OF-2847",
    price: "₹450",
    image: featured1,
    compatibility: "Multiple Models",
    inStock: true
  },
  {
    id: 2,
    name: "Hydraulic Pump",
    partNumber: "HP-5692",
    price: "₹12,500",
    image: featured2,
    compatibility: "Tractor Series 45-65HP",
    inStock: true
  },
  {
    id: 3,
    name: "Air Filter Element",
    partNumber: "AF-3841",
    price: "₹850",
    image: featured3,
    compatibility: "Harvester Models",
    inStock: true
  },
  {
    id: 4,
    name: "Clutch Assembly",
    partNumber: "CA-7293",
    price: "₹8,900",
    image: featured4,
    compatibility: "Tractor 75-90HP",
    inStock: true
  }
];

const SpareParts = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (part: typeof featuredParts[0]) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === part.id && item.partNumber === part.partNumber);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: part.id,
        name: part.name,
        price: part.price,
        image: part.image,
        partNumber: part.partNumber,
        compatibility: part.compatibility,
        quantity: 1,
        category: 'spare-parts'
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    toast({
      title: "Added to Cart",
      description: `${part.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Genuine Spare Parts
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Keep your equipment running at peak performance with our extensive inventory of genuine spare parts
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search by part number, model, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-white/20 bg-white/10 text-white placeholder:text-white/70"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-800 hover:bg-gray-100">
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" variant="secondary" className="text-blue-800">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                  Need Help Finding Parts?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Categories */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Parts by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the exact parts you need from our comprehensive inventory organized by equipment type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sparePartsCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: '4/3' }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {category.availability}
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
                  <div className="text-sm font-semibold text-blue-600">
                    {category.itemCount}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Link to={`/spare-parts/category/${category.category}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Browse Category
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Parts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Spare Parts
            </h2>
            <p className="text-lg text-gray-600">
              Popular and essential parts for your agricultural equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredParts.map((part) => (
              <Card key={part.id} className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg bg-gray-100 flex-shrink-0">
                  <img
                    src={part.image}
                    alt={part.name}
                    className="w-full h-40 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: '4/3' }}
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={part.inStock ? "default" : "destructive"} className="text-xs">
                      {part.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2 flex-shrink-0">
                  <CardTitle className="text-lg font-bold text-gray-900 line-clamp-1">
                    {part.name}
                  </CardTitle>
                  <div className="text-sm text-gray-500">
                    Part #: {part.partNumber}
                  </div>
                  <div className="text-sm text-gray-600 line-clamp-1">
                    {part.compatibility}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-blue-600">{part.price}</span>
                  </div>
                  <Button 
                    className="w-full" 
                    variant={part.inStock ? "default" : "secondary"}
                    disabled={!part.inStock}
                    onClick={() => part.inStock && addToCart(part)}
                  >
                    {part.inStock ? (
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </>
                    ) : (
                      "Notify When Available"
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Our Spare Parts?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Genuine Parts</h3>
                <p className="text-gray-600 text-sm">100% authentic parts with manufacturer warranty</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">Quick delivery across all major cities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Large Inventory</h3>
                <p className="text-gray-600 text-sm">Extensive stock of parts for all major brands</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">Technical assistance for part identification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find the Part You Need?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our parts specialists can help you find any component for your agricultural equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-blue-800">
                Contact Parts Expert
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpareParts;
