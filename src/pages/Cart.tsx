import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight, ArrowLeft } from "lucide-react";

interface CartItem {
  id: number;
  uniqueId?: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  brand?: string;
  quantity: number;
  inStock?: boolean;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        // Filter out invalid items and ensure all required properties exist
        const validCart = cart.filter((item: any) => 
          item && 
          item.id && 
          item.name && 
          item.price && 
          typeof item.price === 'string' &&
          item.quantity && 
          typeof item.quantity === 'number'
        );
        setCartItems(validCart);
        
        // Update localStorage if we filtered out invalid items
        if (validCart.length !== cart.length) {
          localStorage.setItem('cart', JSON.stringify(validCart));
          window.dispatchEvent(new Event('cartUpdated'));
        }
      } catch (error) {
        console.error('Error loading cart:', error);
        setCartItems([]);
        localStorage.removeItem('cart');
        window.dispatchEvent(new Event('cartUpdated'));
      }
    };

    // Clear any potentially corrupted cart data on first load
    const clearCorruptedCart = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (cart.some((item: any) => !item || !item.price || typeof item.price !== 'string')) {
          localStorage.removeItem('cart');
          console.log('Cleared corrupted cart data');
        }
      } catch {
        localStorage.removeItem('cart');
      }
    };

    clearCorruptedCart();
    loadCart();
    window.addEventListener('cartUpdated', loadCart);
    
    return () => {
      window.removeEventListener('cartUpdated', loadCart);
    };
  }, []);

  const getItemKey = (item: CartItem) => item.uniqueId || `${item.category}-${item.id}`;

  const updateQuantity = (item: CartItem, newQuantity: number) => {
    if (newQuantity < 1) return;
    const itemKey = getItemKey(item);
    
    const updatedCart = cartItems.map(cartItem =>
      getItemKey(cartItem) === itemKey ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (item: CartItem) => {
    const itemKey = getItemKey(item);
    const updatedCart = cartItems.filter(cartItem => getItemKey(cartItem) !== itemKey);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const getNumericPrice = (priceString: string | undefined) => {
    if (!priceString || typeof priceString !== 'string') {
      return 0;
    }
    return parseFloat(priceString.replace(/[₹,]/g, '')) || 0;
  };

  const subtotal = cartItems.reduce((sum, item) => {
    if (!item || !item.price || !item.quantity) {
      return sum;
    }
    return sum + (getNumericPrice(item.price) * item.quantity);
  }, 0);

  const tax = subtotal * 0.18; // 18% GST
  const shipping = subtotal > 50000 ? 0 : 2000; // Free shipping above ₹50,000
  const total = subtotal + tax + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="py-16">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <ShoppingCart className="w-16 h-16 text-gray-400" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
              </p>
              <Link to="/shop-now">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shopping Cart</h1>
            <p className="text-xl opacity-90">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Cart Items ({cartItems.length})
                  </h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={clearCart}
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear Cart
                  </Button>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <Card key={getItemKey(item)} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          {/* Product Image */}
                          <div className="w-full md:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="secondary">{item.category}</Badge>
                                  <Badge variant="outline">{item.brand}</Badge>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                  {item.name}
                                </h3>
                                <div className="flex items-center gap-2 mb-4">
                                  <span className="text-xl font-bold text-emerald-600">
                                    {item.price}
                                  </span>
                                  {item.originalPrice && (
                                    <span className="text-sm text-gray-500 line-through">
                                      {item.originalPrice}
                                    </span>
                                  )}
                                </div>
                                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                                  item.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                }`}>
                                  {item.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                                </div>
                              </div>

                              {/* Quantity and Actions */}
                              <div className="flex flex-col items-end gap-3">
                                <div className="flex items-center border rounded-lg">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => updateQuantity(item, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                  >
                                    <Minus className="h-4 w-4" />
                                  </Button>
                                  <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => updateQuantity(item, item.quantity + 1)}
                                  >
                                    <Plus className="h-4 w-4" />
                                  </Button>
                                </div>
                                
                                <div className="text-right">
                                  <div className="text-lg font-bold text-gray-900">
                                    ₹{(getNumericPrice(item.price) * item.quantity).toLocaleString()}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    ₹{getNumericPrice(item.price).toLocaleString()} each
                                  </div>
                                </div>

                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeItem(item)}
                                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-8">
                  <Link to="/shop-now">
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>GST (18%)</span>
                      <span>₹{tax.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-green-600 font-medium">FREE</span>
                        ) : (
                          `₹${shipping.toLocaleString()}`
                        )}
                      </span>
                    </div>
                    
                    {shipping > 0 && (
                      <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                        💡 Add ₹{(50000 - subtotal).toLocaleString()} more for free shipping!
                      </div>
                    )}
                    
                    <hr />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                    
                    <Link to="/checkout" className="block">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                        Proceed to Checkout
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    
                    <div className="text-xs text-gray-500 text-center">
                      Secure checkout powered by SSL encryption
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
