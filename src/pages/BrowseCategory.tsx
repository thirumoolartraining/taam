import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  ShoppingCart,
  Star,
  Package,
  Truck,
  Shield
} from "lucide-react";

import sparePart1 from "@/assets/spare-part1.jpg";
import sparePart2 from "@/assets/spare-part2.jpg";
import sparePart3 from "@/assets/spare-part3.jpg";
import sparePart4 from "@/assets/spare-part4.jpg";
import sparePart5 from "@/assets/spare-part5.jpg";
import sparePart6 from "@/assets/spare-part6.jpg";
import electrical1 from "@/assets/electrical1.jpg";
import electrical2 from "@/assets/electrical2.jpg";
import electrical3 from "@/assets/electrical3.jpg";
import engine1 from "@/assets/engine1.jpg";
import engine2 from "@/assets/engine2.jpg";
import engine3 from "@/assets/engine3.jpg";
import engine4 from "@/assets/engine4.jpg";
import engine5 from "@/assets/engine5.jpg";
import engine6 from "@/assets/engine6.jpg";
import transmission1 from "@/assets/transmission1.jpg";
import transmission2 from "@/assets/transmission2.jpg";
import transmission3 from "@/assets/transmission3.jpg";
import hydraulic1 from "@/assets/hydraulic1.jpg";
import hydraulic2 from "@/assets/hydraulic2.jpg";
import hydraulic3 from "@/assets/hydraulic3.jpg";
import filters1 from "@/assets/filters1.jpg";
import filters2 from "@/assets/filters2.jpg";
import filters3 from "@/assets/filters3.jpg";

import implement1 from "@/assets/implement1.jpg";
import implement2 from "@/assets/implement2.jpg";
import implement3 from "@/assets/implement3.jpg";

// Category definitions
const categoryData = {
  engine: {
    name: "Engine Parts",
    description: "Essential engine components for optimal performance",
    image: sparePart1,
    parts: [
      {
        id: 1,
        name: "Engine Oil Filter",
        partNumber: "OF-2847",
        price: "₹450",
        originalPrice: "₹550",
        image: engine1,
        compatibility: "Multiple Tractor Models",
        inStock: true,
        rating: 4.8,
        reviews: 124,
        brand: "Mahindra",
        description: "High-quality oil filter for engine protection"
      },
      {
        id: 2,
        name: "Air Filter Element",
        partNumber: "AF-3841",
        price: "₹850",
        originalPrice: "₹950",
        image: engine2,
        compatibility: "Harvester Models",
        inStock: true,
        rating: 4.6,
        reviews: 89,
        brand: "John Deere",
        description: "Premium air filter for clean engine intake"
      },
      {
        id: 3,
        name: "Fuel Injection Pump",
        partNumber: "FIP-5629",
        price: "₹15,500",
        originalPrice: "₹18,000",
        image: engine3,
        compatibility: "Tractor 50-75HP",
        inStock: true,
        rating: 4.9,
        reviews: 56,
        brand: "Tafe",
        description: "Precision fuel injection pump for optimal fuel delivery"
      },
      {
        id: 4,
        name: "Engine Gasket Set",
        partNumber: "EGS-7841",
        price: "₹2,850",
        originalPrice: "₹3,200",
        image: engine4,
        compatibility: "Multiple Engine Types",
        inStock: true,
        rating: 4.7,
        reviews: 78,
        brand: "Swaraj",
        description: "Complete gasket set for engine overhaul"
      },
      {
        id: 5,
        name: "Piston Ring Set",
        partNumber: "PRS-9632",
        price: "₹3,450",
        originalPrice: "₹3,800",
        image: engine5,
        compatibility: "Diesel Engines 40-60HP",
        inStock: true,
        rating: 4.5,
        reviews: 92,
        brand: "Mahindra",
        description: "High-grade piston rings for engine compression"
      },
      {
        id: 6,
        name: "Cylinder Head",
        partNumber: "CH-4785",
        price: "₹8,900",
        originalPrice: "₹10,200",
        image: engine6,
        compatibility: "Tractor 35-50HP",
        inStock: true,
        rating: 4.8,
        reviews: 34,
        brand: "Escort",
        description: "Precision-machined cylinder head assembly"
      }
    ]
  },
  transmission: {
    name: "Transmission Parts",
    description: "Gears, clutches, and transmission components",
    image: sparePart2,
    parts: [
      {
        id: 7,
        name: "Clutch Assembly",
        partNumber: "CA-7293",
        price: "₹8,900",
        originalPrice: "₹10,500",
        image: transmission1,
        compatibility: "Tractor 75-90HP",
        inStock: true,
        rating: 4.7,
        reviews: 67,
        brand: "Mahindra",
        description: "Complete clutch assembly for smooth power transmission"
      },
      {
        id: 8,
        name: "Gear Box Oil",
        partNumber: "GBO-5847",
        price: "₹1,250",
        originalPrice: "₹1,450",
        image: transmission2,
        compatibility: "All Transmission Types",
        inStock: true,
        rating: 4.6,
        reviews: 156,
        brand: "Castrol",
        description: "High-performance transmission oil"
      },
      {
        id: 9,
        name: "Synchronizer Ring",
        partNumber: "SR-3694",
        price: "₹2,150",
        originalPrice: "₹2,500",
        image: transmission3,
        compatibility: "Manual Transmission",
        inStock: true,
        rating: 4.4,
        reviews: 43,
        brand: "Tafe",
        description: "Precision synchronizer for smooth gear shifting"
      }
    ]
  },
  hydraulic: {
    name: "Hydraulic Parts",
    description: "Pumps, cylinders, hoses, and hydraulic fittings",
    image: sparePart3,
    parts: [
      {
        id: 10,
        name: "Hydraulic Pump",
        partNumber: "HP-5692",
        price: "₹12,500",
        originalPrice: "₹14,800",
        image: hydraulic1,
        compatibility: "Tractor Series 45-65HP",
        inStock: true,
        rating: 4.9,
        reviews: 89,
        brand: "John Deere",
        description: "High-pressure hydraulic pump for implement operation"
      },
      {
        id: 11,
        name: "Hydraulic Cylinder",
        partNumber: "HC-8547",
        price: "₹6,750",
        originalPrice: "₹7,900",
        image: hydraulic2,
        compatibility: "Loader Applications",
        inStock: true,
        rating: 4.7,
        reviews: 72,
        brand: "Mahindra",
        description: "Heavy-duty hydraulic cylinder for lifting operations"
      },
      {
        id: 12,
        name: "Hydraulic Hose Kit",
        partNumber: "HHK-9632",
        price: "₹3,850",
        originalPrice: "₹4,200",
        image: hydraulic3,
        compatibility: "Universal Fit",
        inStock: true,
        rating: 4.5,
        reviews: 134,
        brand: "Parker",
        description: "Complete hydraulic hose kit with fittings"
      }
    ]
  },
  electrical: {
    name: "Electrical Parts",
    description: "Alternators, starters, wiring, and electrical components",
    image: sparePart4,
    parts: [
      {
        id: 13,
        name: "Alternator",
        partNumber: "ALT-7485",
        price: "₹4,850",
        originalPrice: "₹5,600",
        image: electrical1,
        compatibility: "Tractor 40-60HP",
        inStock: true,
        rating: 4.8,
        reviews: 98,
        brand: "Bosch",
        description: "High-output alternator for reliable charging"
      },
      {
        id: 14,
        name: "Starter Motor",
        partNumber: "SM-6394",
        price: "₹3,450",
        originalPrice: "₹4,100",
        image: electrical2,
        compatibility: "Diesel Engines",
        inStock: true,
        rating: 4.6,
        reviews: 76,
        brand: "Denso",
        description: "Powerful starter motor for reliable engine starting"
      },
      {
        id: 15,
        name: "Wiring Harness",
        partNumber: "WH-5847",
        price: "₹2,250",
        originalPrice: "₹2,650",
        image: electrical3,
        compatibility: "Multiple Models",
        inStock: true,
        rating: 4.4,
        reviews: 52,
        brand: "Mahindra",
        description: "Complete wiring harness for electrical systems"
      }
    ]
  },
  filters: {
    name: "Filters & Fluids",
    description: "Oil filters, air filters, hydraulic fluids, and lubricants",
    image: sparePart5,
    parts: [
      {
        id: 16,
        name: "Engine Oil 15W-40",
        partNumber: "EO-4785",
        price: "₹850",
        originalPrice: "₹950",
        image: filters1,
        compatibility: "All Diesel Engines",
        inStock: true,
        rating: 4.9,
        reviews: 234,
        brand: "Shell",
        description: "Premium engine oil for maximum protection"
      },
      {
        id: 17,
        name: "Hydraulic Filter",
        partNumber: "HF-6392",
        price: "₹650",
        originalPrice: "₹750",
        image: filters2,
        compatibility: "Hydraulic Systems",
        inStock: true,
        rating: 4.7,
        reviews: 145,
        brand: "Mann",
        description: "High-efficiency hydraulic system filter"
      },
      {
        id: 18,
        name: "Coolant Fluid",
        partNumber: "CF-8547",
        price: "₹450",
        originalPrice: "₹520",
        image: filters3,
        compatibility: "All Cooling Systems",
        inStock: true,
        rating: 4.6,
        reviews: 89,
        brand: "Prestone",
        description: "Long-life coolant for engine temperature control"
      }
    ]
  },
  implement: {
    name: "Implement Parts",
    description: "Blades, tines, belts, and implement attachments",
    image: sparePart6,
    parts: [
      {
        id: 19,
        name: "Plough Share",
        partNumber: "PS-9632",
        price: "₹1,850",
        originalPrice: "₹2,100",
        image: implement2,
        compatibility: "Disc Ploughs",
        inStock: true,
        rating: 4.8,
        reviews: 167,
        brand: "Lemken",
        description: "High-carbon steel plough share for durability"
      },
      {
        id: 20,
        name: "Cultivator Tine",
        partNumber: "CT-7485",
        price: "₹650",
        originalPrice: "₹750",
        image: implement1,
        compatibility: "Spring Cultivators",
        inStock: true,
        rating: 4.6,
        reviews: 123,
        brand: "Mahindra",
        description: "Spring-loaded cultivator tine for soil preparation"
      },
      {
        id: 21,
        name: "V-Belt Set",
        partNumber: "VB-5847",
        price: "₹950",
        originalPrice: "₹1,150",
        image: implement3,
        compatibility: "Harvester Drives",
        inStock: false,
        rating: 4.5,
        reviews: 78,
        brand: "Gates",
        description: "Heavy-duty V-belt set for power transmission"
      }
    ]
  }
};

const BrowseCategory = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterBrand, setFilterBrand] = useState("all");
  const [filterStock, setFilterStock] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Get category data
  const currentCategory = category ? categoryData[category as keyof typeof categoryData] : null;

  // Add to cart function
  const addToCart = (part: any) => {
    try {
      // Get existing cart from localStorage
      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
      
      // Create cart item
      const cartItem = {
        id: part.id,
        name: part.name,
        price: part.price,
        image: part.image,
        quantity: 1,
        partNumber: part.partNumber,
        brand: part.brand,
        category: currentCategory?.name || 'Spare Parts'
      };

      // Check if item already exists in cart
      const existingItemIndex = existingCart.findIndex((item: any) => item.id === part.id);
      
      if (existingItemIndex > -1) {
        // Update quantity if item exists
        existingCart[existingItemIndex].quantity += 1;
        toast({
          title: "Cart Updated",
          description: `${part.name} quantity updated in cart`,
        });
      } else {
        // Add new item to cart
        existingCart.push(cartItem);
        toast({
          title: "Added to Cart",
          description: `${part.name} has been added to your cart`,
        });
      }

      // Save updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(existingCart));
      
      // Dispatch cart updated event for other components
      window.dispatchEvent(new Event('cartUpdated'));
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (!currentCategory) {
      navigate('/spare-parts');
    }
  }, [category, currentCategory, navigate]);

  if (!currentCategory) {
    return <div>Loading...</div>;
  }

  // Filter and sort parts
  const filteredParts = currentCategory.parts
    .filter(part => {
      const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           part.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           part.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = filterBrand === "all" || part.brand === filterBrand;
      const matchesStock = filterStock === "all" || 
                          (filterStock === "instock" && part.inStock) ||
                          (filterStock === "outofstock" && !part.inStock);
      return matchesSearch && matchesBrand && matchesStock;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseFloat(a.price.replace(/[₹,]/g, '')) - parseFloat(b.price.replace(/[₹,]/g, ''));
        case "price-high":
          return parseFloat(b.price.replace(/[₹,]/g, '')) - parseFloat(a.price.replace(/[₹,]/g, ''));
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  // Get unique brands for filter
  const brands = Array.from(new Set(currentCategory.parts.map(part => part.brand)));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb & Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm mb-6 opacity-90">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/spare-parts" className="hover:underline">Spare Parts</Link>
              <span className="mx-2">/</span>
              <span>{currentCategory.name}</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-6 lg:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{currentCategory.name}</h1>
                <p className="text-lg opacity-90 mb-4">{currentCategory.description}</p>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {filteredParts.length} Parts Available
                  </Badge>
                  <Link to="/spare-parts">
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-800">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Categories
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="w-full lg:w-80">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search parts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-6 border-b">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>
                
                <Select value={filterBrand} onValueChange={setFilterBrand}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Brands</SelectItem>
                    {brands.map(brand => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filterStock} onValueChange={setFilterStock}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Items</SelectItem>
                    <SelectItem value="instock">In Stock</SelectItem>
                    <SelectItem value="outofstock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Grid/List */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {filteredParts.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No parts found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setFilterBrand("all");
                  setFilterStock("all");
                }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
              }>
                {filteredParts.map((part) => (
                  <Card key={part.id} className={`group hover:shadow-lg transition-all duration-300 h-full flex ${
                    viewMode === "list" ? "flex-row" : "flex-col"
                  }`}>
                    <div className={`relative overflow-hidden bg-gray-100 flex-shrink-0 ${
                      viewMode === "list" 
                        ? "w-32 h-32 rounded-l-lg" 
                        : "rounded-t-lg h-48"
                    }`}>
                      <img
                        src={part.image}
                        alt={part.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant={part.inStock ? "default" : "destructive"} className="text-xs">
                          {part.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className={`flex flex-col flex-1 ${viewMode === "list" ? "p-4" : ""}`}>
                      <CardHeader className={`flex-shrink-0 ${viewMode === "list" ? "p-0 pb-2" : ""}`}>
                        <CardTitle className="text-lg font-bold text-gray-900 line-clamp-1">
                          {part.name}
                        </CardTitle>
                        <div className="space-y-1">
                          <div className="text-sm text-gray-500">Part #: {part.partNumber}</div>
                          <div className="text-sm text-gray-600 line-clamp-1">{part.compatibility}</div>
                          <div className="text-sm text-blue-600 font-medium">{part.brand}</div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{part.rating}</span>
                            <span className="text-sm text-gray-500">({part.reviews})</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className={`flex-1 flex flex-col justify-end ${viewMode === "list" ? "p-0" : ""}`}>
                        <div className="space-y-3">
                          <p className="text-sm text-gray-600 line-clamp-2">{part.description}</p>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-blue-600">{part.price}</span>
                            {part.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">{part.originalPrice}</span>
                            )}
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
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Our {currentCategory.name}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Genuine Quality</h3>
                <p className="text-gray-600 text-sm">100% authentic parts with manufacturer warranty and quality assurance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">Quick delivery across India with tracking and secure packaging</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">Technical assistance for part identification and compatibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrowseCategory;
