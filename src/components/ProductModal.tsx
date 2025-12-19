import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, ShoppingCart, Minus, Plus, X, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  discount?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  relatedProducts: Product[];
}

const ProductModal = ({ product, isOpen, onClose, relatedProducts }: ProductModalProps) => {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const addToWishlist = () => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-6xl max-h-[90vh] overflow-y-auto m-4 w-full">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Product Details</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
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
                <Badge variant="outline">{product.brand}</Badge>
                {product.discount && <Badge className="bg-red-500">{product.discount} OFF</Badge>}
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                )}
              </div>
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
                product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Specifications</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              {/* Show quantity selector only for spare parts */}
              {product.category === 'spare-parts' && (
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                {product.category === 'spare-parts' ? (
                  <Button
                    onClick={addToCart}
                    disabled={!product.inStock}
                    className="flex-1"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                ) : (
                  <Link to="/request-quote" className="flex-1" onClick={onClose}>
                    <Button className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Enquiry Now
                    </Button>
                  </Link>
                )}
                <Button
                  variant="outline"
                  onClick={addToWishlist}
                  className="flex-1"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Related Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.slice(0, 4).map((relatedProduct) => (
                <Card key={relatedProduct.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-square rounded-t-lg overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="p-3">
                    <CardTitle className="text-sm font-medium line-clamp-2">
                      {relatedProduct.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">{relatedProduct.price}</span>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs ml-1">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
