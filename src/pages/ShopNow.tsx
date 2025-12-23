import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductModal from "@/components/ProductModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Filter, Star, ShoppingCart, Heart, Eye, Truck, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

import shopNow1 from "@/assets/shop-now1.jpg";
import shopNow2 from "@/assets/shop-now2.jpg";
import shopNow3 from "@/assets/shop-now3.jpg";
import shopNow4 from "@/assets/shop-now4.jpeg";
import shopNow5 from "@/assets/shop-now5.jpeg";
import shopNow6 from "@/assets/shop-now6.jpeg";
import shopNow7 from "@/assets/shop-now7.jpeg";
import shopNow8 from "@/assets/shop-now8.jpg";
import shopNow9 from "@/assets/shop-now9.jpg";
import shopNow10 from "@/assets/shop-now10.jpg";
import shopNow11 from "@/assets/shop-now11.jpeg";
import shopNow12 from "@/assets/shop-now12.jpeg";

const products = [
  {
    id: 1,
    name: "Mahindra 575 DI Tractor",
    category: "tractors",
    brand: "Mahindra",
    price: "₹8,75,000",
    originalPrice: "₹9,25,000",
    image: shopNow1,
    rating: 4.8,
    reviews: 156,
    features: ["75 HP", "4WD", "Power Steering", "Hydraulic Lift"],
    description: "The Mahindra 575 DI is a powerful and reliable tractor designed for modern farming needs. With its robust engine and advanced features, it delivers exceptional performance in all farming operations.",
    specifications: {
      "Engine Power": "75 HP",
      "Drive Type": "4WD",
      "Fuel Tank": "65 Liters",
      "Lifting Capacity": "2000 kg",
      "PTO Power": "63 HP",
      "Gear Box": "12 Forward + 3 Reverse"
    },
    inStock: true,
    discount: "5%",
    isPopular: true
  },
  {
    id: 2,
    name: "Rotary Tiller 7 Feet",
    category: "tillers",
    brand: "Fieldking",
    price: "₹85,000",
    originalPrice: "₹95,000",
    image: shopNow8,
    rating: 4.6,
    reviews: 89,
    features: ["7 Feet Width", "Heavy Duty", "Adjustable Depth", "Easy Maintenance"],
    description: "Professional grade rotary tiller designed for efficient soil preparation. Features heavy-duty blades and adjustable depth control for optimal performance.",
    specifications: {
      "Working Width": "7 Feet (2.1m)",
      "Number of Blades": "42 Blades",
      "Depth Range": "6-8 inches",
      "Power Requirement": "45-65 HP",
      "Weight": "580 kg",
      "Blade Material": "Hardened Steel"
    },
    inStock: true,
    discount: "10%",
    isPopular: false
  },
  {
    id: 3,
    name: "Battery Sprayer 16L",
    category: "sprayers",
    brand: "Neptune",
    price: "₹12,500",
    originalPrice: "₹15,000",
    image: shopNow2,
    rating: 4.7,
    reviews: 234,
    features: ["16L Capacity", "12V Battery", "Adjustable Nozzle", "Lightweight"],
    description: "High-performance battery sprayer with 16L capacity, perfect for efficient crop protection and pest control applications.",
    specifications: {
      "Tank Capacity": "16 Liters",
      "Battery Type": "12V Rechargeable",
      "Pressure Range": "0.15-0.4 MPa",
      "Spray Width": "1-3 meters",
      "Runtime": "4-6 hours",
      "Weight": "3.5 kg"
    },
    inStock: true,
    discount: "17%",
    isPopular: true
  },
  {
    id: 4,
    name: "Mini Combine Harvester",
    category: "harvesters",
    brand: "Kartar",
    price: "₹15,50,000",
    originalPrice: "₹16,00,000",
    image: shopNow3,
    rating: 4.9,
    reviews: 67,
    features: ["Compact Design", "High Efficiency", "Easy Operation", "Low Maintenance"],
    description: "Compact and efficient mini combine harvester designed for small to medium farms with excellent grain quality output.",
    specifications: {
      "Cutting Width": "1.2 meters",
      "Grain Tank": "350 kg",
      "Engine Power": "35 HP Diesel",
      "Productivity": "0.8-1.2 acres/hour",
      "Fuel Tank": "45 Liters",
      "Weight": "2800 kg"
    },
    inStock: true,
    discount: "3%",
    isPopular: true
  },
  {
    id: 5,
    name: "Disc Plough 3 Furrow",
    category: "ploughs",
    brand: "Lemken",
    price: "₹45,000",
    originalPrice: "₹50,000",
    image: shopNow9,
    rating: 4.5,
    reviews: 123,
    features: ["3 Furrow", "Heavy Duty Discs", "Adjustable", "Durable Frame"],
    description: "Heavy-duty disc plough with 3 furrows, perfect for primary tillage in hard and dry soil conditions.",
    specifications: {
      "Number of Furrows": "3",
      "Disc Size": "24 inches",
      "Working Width": "90 cm",
      "Power Requirement": "35-45 HP",
      "Weight": "420 kg",
      "Frame Material": "High Tensile Steel"
    },
    inStock: true,
    discount: "10%",
    isPopular: false
  },
  {
    id: 6,
    name: "Engine Oil Filter Set",
    category: "spare-parts",
    brand: "Fleetguard",
    price: "₹850",
    originalPrice: "₹1,000",
    image: shopNow10,
    rating: 4.4,
    reviews: 345,
    features: ["Universal Fit", "High Quality", "Long Lasting", "Easy Installation"],
    description: "Premium quality engine oil filter set compatible with most tractor models, ensuring optimal engine performance.",
    specifications: {
      "Compatibility": "Universal Fit",
      "Filter Type": "Spin-on",
      "Material": "High-grade Paper",
      "Thread Size": "3/4-16 UNF",
      "Height": "95mm",
      "Diameter": "76mm"
    },
    inStock: true,
    discount: "15%",
    isPopular: false
  },
  {
    id: 7,
    name: "KAIRA Harvester",
    category: "harvesters",
    brand: "KAIRA",
    price: "₹25,50,000",
    originalPrice: "₹26,00,000",
    image: shopNow4,
    rating: 4.9,
    reviews: 45,
    features: ["Import Product", "High Efficiency", "Advanced Technology", "Premium Quality"],
    description: "Premium imported harvester from KAIRA with advanced technology and superior performance for large-scale farming operations.",
    specifications: {
      "Type": "Import Product",
      "Cutting Width": "2.5 meters",
      "Grain Tank": "800 kg",
      "Engine Power": "120 HP Diesel",
      "Productivity": "2.0-3.0 acres/hour",
      "Fuel Tank": "200 Liters"
    },
    inStock: true,
    discount: "2%",
    isPopular: true
  },
  {
    id: 8,
    name: "KAIRA Paddy Transplanter",
    category: "transplanters",
    brand: "KAIRA",
    price: "₹3,50,000",
    originalPrice: "₹3,75,000",
    image: shopNow5,
    rating: 4.7,
    reviews: 67,
    features: ["Import Product", "Precision Planting", "High Speed", "Easy Operation"],
    description: "Advanced paddy transplanter from KAIRA for precise and efficient rice planting with imported technology.",
    specifications: {
      "Type": "Import Product",
      "Planting Rows": "8 Rows",
      "Row Spacing": "30cm adjustable",
      "Engine Power": "25 HP Diesel",
      "Planting Speed": "0.8-1.2 km/h",
      "Fuel Tank": "25 Liters"
    },
    inStock: true,
    discount: "7%",
    isPopular: true
  },
  {
    id: 9,
    name: "KAIRA Ridger Plastering Machine",
    category: "ridgers",
    brand: "KAIRA",
    price: "₹3,40,000",
    originalPrice: "₹3,60,000",
    image: shopNow11,
    rating: 4.6,
    reviews: 34,
    features: ["Import Product", "Ridge Formation", "Soil Plastering", "Durable Build"],
    description: "Specialized ridger plastering machine from KAIRA for creating perfect ridges and furrows with imported precision.",
    specifications: {
      "Type": "Import Product",
      "Working Width": "2.0 meters",
      "Ridge Height": "15-25 cm adjustable",
      "Engine Power": "35 HP",
      "Speed": "3-5 km/h",
      "Weight": "850 kg"
    },
    inStock: true,
    discount: "6%",
    isPopular: false
  },
  {
    id: 10,
    name: "DEUTZ FAHR AGROLUX 50 - 4WD",
    category: "tractors",
    brand: "DEUTZ FAHR",
    price: "₹11,70,000",
    originalPrice: "₹12,20,000",
    image: shopNow6,
    rating: 4.8,
    reviews: 89,
    features: ["50 HP", "4WD", "German Engineering", "Advanced Hydraulics"],
    description: "Premium German-engineered tractor with 4WD capability, perfect for demanding agricultural operations.",
    specifications: {
      "Engine Power": "50 HP",
      "Drive Type": "4WD",
      "Fuel Tank": "75 Liters",
      "Lifting Capacity": "2500 kg",
      "PTO Power": "42 HP",
      "Gear Box": "12 Forward + 12 Reverse"
    },
    inStock: true,
    discount: "4%",
    isPopular: true
  },
  {
    id: 11,
    name: "DHARANEE Rotavator",
    category: "tillers",
    brand: "DHARANEE",
    price: "₹1,20,000",
    originalPrice: "₹1,35,000",
    image: shopNow12,
    rating: 4.5,
    reviews: 156,
    features: ["Heavy Duty", "Efficient Tilling", "Low Maintenance", "Robust Design"],
    description: "High-quality rotavator from DHARANEE designed for efficient soil preparation and cultivation.",
    specifications: {
      "Working Width": "6 Feet (1.8m)",
      "Number of Blades": "36 Blades",
      "Depth Range": "6-10 inches",
      "Power Requirement": "40-60 HP",
      "Weight": "650 kg",
      "Blade Material": "High Carbon Steel"
    },
    inStock: true,
    discount: "11%",
    isPopular: false
  },
  {
    id: 12,
    name: "DHARANEE Straw Baler",
    category: "balers",
    brand: "DHARANEE",
    price: "₹3,60,000",
    originalPrice: "₹3,85,000",
    image: shopNow7,
    rating: 4.7,
    reviews: 78,
    features: ["Automatic Baling", "High Density", "Easy Operation", "Durable Construction"],
    description: "Efficient straw baler from DHARANEE for automatic collection and baling of crop residue.",
    specifications: {
      "Bale Size": "80cm x 90cm",
      "Bale Weight": "25-35 kg",
      "Engine Power": "45 HP",
      "Productivity": "2-3 tons/hour",
      "Fuel Tank": "50 Liters",
      "Weight": "1200 kg"
    },
    inStock: true,
    discount: "6%",
    isPopular: true
  }
];

const categories = [
  { value: "all", label: "All Products" },
  { value: "tractors", label: "Tractors" },
  { value: "tillers", label: "Tillers" },
  { value: "sprayers", label: "Sprayers" },
  { value: "harvesters", label: "Harvesters" },
  { value: "ploughs", label: "Ploughs" },
  { value: "transplanters", label: "Transplanters" },
  { value: "ridgers", label: "Ridgers" },
  { value: "balers", label: "Balers" },
  { value: "spare-parts", label: "Spare Parts" }
];

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" }
];

const ShopNow = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Additional filter states
  const [priceRange, setPriceRange] = useState({ min: 0, max: 3000000 });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);

  // Helper function to get numeric price
  const getProductPrice = (priceString: string) => {
    return parseFloat(priceString.replace(/[₹,]/g, '')) || 0;
  };

  // Get unique brands for filter
  const availableBrands = [...new Set(products.map(p => p.brand))].sort();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    // Price filter
    const productPrice = getProductPrice(product.price);
    const matchesPrice = productPrice >= priceRange.min && productPrice <= priceRange.max;
    
    // Brand filter
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    
    // Rating filter
    const matchesRating = product.rating >= minRating;
    
    // Stock filter
    const matchesStock = !inStockOnly || product.inStock;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesBrand && matchesRating && matchesStock;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return getProductPrice(a.price) - getProductPrice(b.price);
      case 'price-high':
        return getProductPrice(b.price) - getProductPrice(a.price);
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      case 'newest':
        return b.id - a.id; // Assuming higher ID means newer
      default:
        return 0;
    }
  });

  const addToCart = (product: any) => {
    try {
      if (!product || !product.id || !product.name || !product.price) {
        toast({
          title: "Error",
          description: "Invalid product data",
          variant: "destructive",
        });
        return;
      }

      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = cart.find((item: any) => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // Ensure we have all required properties for cart item
        const cartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          category: product.category,
          brand: product.brand,
          quantity: 1,
          inStock: product.inStock !== false // default to true if not specified
        };
        cart.push(cartItem);
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cartUpdated'));
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart`,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive",
      });
    }
  };

  const addToWishlist = (product: any) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const exists = wishlist.find((item: any) => item.id === product.id);
    
    if (!exists) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      window.dispatchEvent(new Event('wishlistUpdated'));
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist`,
      });
    } else {
      toast({
        title: "Already in Wishlist",
        description: `${product.name} is already in your wishlist`,
      });
    }
  };

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const getRelatedProducts = (currentProduct: any) => {
    return products.filter(p => 
      p.category === currentProduct.category && 
      p.id !== currentProduct.id
    ).slice(0, 4);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <h2 className="text-lg md:text-xl font-semibold opacity-90 mb-2">
                THIRU ANNAMALAIYAR AGRICULTURAL MACHINERY
              </h2>
              <div className="w-24 h-1 bg-white/50 mx-auto"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shop Agricultural Equipment
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Browse our extensive collection of high-quality farming equipment with competitive prices and fast delivery
            </p>
            
            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48 bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  variant="secondary" 
                  className="text-emerald-800"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                Showing {sortedProducts.length} of {products.length} products
              </span>
              {selectedCategory !== "all" && (
                <Badge variant="secondary">
                  {categories.find(c => c.value === selectedCategory)?.label}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Filters */}
      {showFilters && (
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Price Range Filter */}
              <div>
                <h4 className="font-semibold mb-3">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                      className="text-sm"
                    />
                    <span>-</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                      className="text-sm"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPriceRange({ min: 0, max: 100000 })}
                    >
                      Under ₹1L
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPriceRange({ min: 100000, max: 500000 })}
                    >
                      ₹1L - ₹5L
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPriceRange({ min: 500000, max: 1500000 })}
                    >
                      ₹5L - ₹15L
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPriceRange({ min: 1500000, max: 3000000 })}
                    >
                      Above ₹15L
                    </Button>
                  </div>
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h4 className="font-semibold mb-3">Brands</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {availableBrands.map(brand => (
                    <label key={brand} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, brand]);
                          } else {
                            setSelectedBrands(selectedBrands.filter(b => b !== brand));
                          }
                        }}
                        className="rounded"
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h4 className="font-semibold mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1, 0].map(rating => (
                    <label key={rating} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="rounded"
                      />
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm ml-1">
                          {rating === 0 ? 'All Ratings' : `${rating}+ Stars`}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Other Filters */}
              <div>
                <h4 className="font-semibold mb-3">Other Filters</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">In Stock Only</span>
                  </label>
                </div>
                
                {/* Clear Filters */}
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setPriceRange({ min: 0, max: 3000000 });
                      setSelectedBrands([]);
                      setMinRating(0);
                      setInStockOnly(false);
                    }}
                    className="w-full"
                  >
                    Clear All Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
                {/* Product Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                  {product.isPopular && (
                    <Badge className="bg-orange-500 hover:bg-orange-600">
                      Popular
                    </Badge>
                  )}
                  {product.discount && (
                    <Badge variant="destructive">
                      {product.discount} OFF
                    </Badge>
                  )}
                </div>

                {/* Wishlist Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white"
                  onClick={() => addToWishlist(product)}
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Product Image */}
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: '4/3' }}
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="destructive" className="text-lg px-4 py-2">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  
                  {/* Quick View Button */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => openProductModal(product)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Quick View
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-1">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-emerald-600 rounded-full mr-1"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-emerald-600">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {product.category === 'spare-parts' ? (
                        <Button 
                          className="flex-1 bg-emerald-600 hover:bg-emerald-700" 
                          size="sm"
                          disabled={!product.inStock}
                          onClick={() => addToCart(product)}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                      ) : (
                        <Link to="/request-quote" className="flex-1">
                          <Button 
                            className="w-full bg-emerald-600 hover:bg-emerald-700" 
                            size="sm"
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            Enquiry
                          </Button>
                        </Link>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => openProductModal(product)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
              <Button onClick={() => {
                setSearchTerm(""); 
                setSelectedCategory("all");
                setPriceRange({ min: 0, max: 3000000 });
                setSelectedBrands([]);
                setMinRating(0);
                setInStockOnly(false);
              }}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Shop With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
                <p className="text-gray-600">Free delivery on orders above ₹50,000 across major cities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Warranty Protection</h3>
                <p className="text-gray-600">Comprehensive warranty coverage on all products</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600">24/7 technical support and consultation services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Offers
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to get exclusive deals, new product launches, and farming tips
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="text-emerald-800 whitespace-nowrap">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        relatedProducts={selectedProduct ? getRelatedProducts(selectedProduct) : []}
      />
    </div>
  );
};

export default ShopNow;
