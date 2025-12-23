import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Truck, 
  Shield, 
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import all product data from data files
import { 
  tractorModels, 
  tillerModels, 
  sprayerModels, 
  harvesterModels, 
  ploughModels, 
  sparePartsData 
} from "@/data";

// Combine all products
const allProducts = [
  ...tractorModels.map(p => ({ ...p, category: 'tractors' })),
  ...tillerModels.map(p => ({ ...p, category: 'tillers' })),
  ...sprayerModels.map(p => ({ ...p, category: 'sprayers' })),
  ...harvesterModels.map(p => ({ ...p, category: 'harvesters' })),
  ...ploughModels.map(p => ({ ...p, category: 'ploughs' })),
  ...sparePartsData.map(p => ({ ...p, category: 'spare-parts' }))
];

interface ProductDetailProps {}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const { toast } = useToast();
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (category && id) {
      // Find the product
      const foundProduct = allProducts.find(
        p => p.category === category && p.id.toString() === id
      );
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Get related products from the same category
        const related = allProducts
          .filter(p => p.category === category && p.id.toString() !== id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [category, id]);

  const getUniqueId = () => `${category}-${product.id}`;

  const addToCart = () => {
    // Add to cart functionality
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const uniqueId = getUniqueId();
    const existingItem = cart.find((item: any) => item.uniqueId === uniqueId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, uniqueId, quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    // Update cart count in header
    window.dispatchEvent(new Event('cartUpdated'));
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const addToWishlist = () => {
    // Add to wishlist functionality
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const uniqueId = getUniqueId();
    const exists = wishlist.find((item: any) => item.uniqueId === uniqueId);
    
    if (!exists) {
      wishlist.push({ ...product, uniqueId });
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      // Update wishlist count in header
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

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Button onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-primary">
              Home
            </button>
            <span>/</span>
            <button onClick={() => navigate(`/machinery/${category}`)} className="hover:text-primary capitalize">
              {category}
            </button>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                {product.popular && <Badge variant="default">Popular</Badge>}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-lg font-semibold">{product.rating}</span>
                  <span className="ml-1 text-gray-600">({product.reviews || 0} reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                )}
                {product.discount && (
                  <Badge variant="destructive">{product.discount} OFF</Badge>
                )}
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-1">
                        <span className="text-gray-600">{key}:</span>
                        <span className="font-medium">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-4">
              {/* Show quantity selector only for spare parts */}
              {category === 'spare-parts' && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex-1 flex gap-2">
                    <Button 
                      onClick={addToCart} 
                      className="flex-1"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                    <Button variant="outline" onClick={addToWishlist}>
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Show Enquiry button for machinery */}
              {category !== 'spare-parts' && (
                <div className="flex items-center gap-2">
                  <Button 
                    onClick={() => navigate('/request-quote')} 
                    className="flex-1"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Enquiry Now
                  </Button>
                  <Button variant="outline" onClick={addToWishlist}>
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" className="flex-1" onClick={() => navigate('/request-quote')}>
                  Request Quote
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => navigate('/contact')}>
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-blue-50 rounded-lg p-4 space-y-2">
              <div className="flex items-center text-sm text-blue-800">
                <Truck className="mr-2 h-4 w-4" />
                Free delivery within 50km radius
              </div>
              <div className="flex items-center text-sm text-blue-800">
                <Shield className="mr-2 h-4 w-4" />
                2-year manufacturer warranty
              </div>
              <div className="flex items-center text-sm text-blue-800">
                <MapPin className="mr-2 h-4 w-4" />
                Available for demo at our showroom
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/product/${relatedProduct.category}/${relatedProduct.id}`)}
                >
                  <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      style={{ aspectRatio: '4/3' }}
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-white/90">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {relatedProduct.rating}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
                      {relatedProduct.name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">{relatedProduct.price}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{relatedProduct.originalPrice}</span>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button className="w-full" size="sm">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
