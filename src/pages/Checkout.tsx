import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { 
  MapPin, 
  User, 
  Mail, 
  Phone,
  ArrowLeft,
  ShoppingCart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

const Checkout = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Address Form State
  const [addressForm, setAddressForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: ""
  });


  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length === 0) {
      navigate('/cart');
      return;
    }
    setCartItems(cart);
  }, [navigate]);

  const getNumericPrice = (priceString: string) => {
    return parseFloat(priceString.replace(/[₹,]/g, ''));
  };

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (getNumericPrice(item.price) * item.quantity);
  }, 0);

  const tax = subtotal * 0.18;
  const shipping = subtotal > 50000 ? 0 : 2000;
  const total = subtotal + tax + shipping;

  const handleAddressChange = (field: string, value: string) => {
    setAddressForm(prev => ({ ...prev, [field]: value }));
  };


  const validateForm = () => {
    const requiredAddressFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
    return requiredAddressFields.every(field => addressForm[field as keyof typeof addressForm]);
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      const orderData = {
        orderId: 'ORD' + Date.now(),
        items: cartItems,
        address: addressForm,
        total: total,
        orderDate: new Date().toISOString(),
        status: 'confirmed'
      };

      localStorage.setItem('lastOrder', JSON.stringify(orderData));
      localStorage.removeItem('cart');
      window.dispatchEvent(new Event('cartUpdated'));
      
      navigate('/order-confirmation');
    }, 2000);
  };


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Checkout</h1>
            <p className="text-lg opacity-90">
              Complete your order by providing shipping details
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={addressForm.firstName}
                          onChange={(e) => handleAddressChange('firstName', e.target.value)}
                          placeholder="Enter first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={addressForm.lastName}
                          onChange={(e) => handleAddressChange('lastName', e.target.value)}
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={addressForm.email}
                          onChange={(e) => handleAddressChange('email', e.target.value)}
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={addressForm.phone}
                          onChange={(e) => handleAddressChange('phone', e.target.value)}
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Textarea
                        id="address"
                        value={addressForm.address}
                        onChange={(e) => handleAddressChange('address', e.target.value)}
                        placeholder="Enter complete address"
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={addressForm.city}
                          onChange={(e) => handleAddressChange('city', e.target.value)}
                          placeholder="Enter city"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          value={addressForm.state}
                          onChange={(e) => handleAddressChange('state', e.target.value)}
                          placeholder="Enter state"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">PIN Code *</Label>
                        <Input
                          id="pincode"
                          value={addressForm.pincode}
                          onChange={(e) => handleAddressChange('pincode', e.target.value)}
                          placeholder="Enter PIN code"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="landmark">Landmark (Optional)</Label>
                      <Input
                        id="landmark"
                        value={addressForm.landmark}
                        onChange={(e) => handleAddressChange('landmark', e.target.value)}
                        placeholder="Enter nearby landmark"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-4 border-2 border-green-500 rounded-lg bg-green-50">
                      <input
                        type="radio"
                        id="cod"
                        name="paymentMethod"
                        checked={true}
                        readOnly
                        className="w-4 h-4 text-green-600"
                      />
                      <label htmlFor="cod" className="flex-1 cursor-pointer">
                        <span className="font-medium text-gray-900">Cash on Delivery (COD)</span>
                        <p className="text-sm text-gray-600">Pay when your order is delivered</p>
                      </label>
                      <Badge className="bg-green-600">Active</Badge>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 border rounded-lg bg-gray-100 opacity-60 cursor-not-allowed">
                      <input
                        type="radio"
                        id="online"
                        name="paymentMethod"
                        disabled
                        className="w-4 h-4"
                      />
                      <label htmlFor="online" className="flex-1">
                        <span className="font-medium text-gray-500">Online Payment</span>
                        <p className="text-sm text-gray-400">UPI, Cards, Net Banking</p>
                      </label>
                      <Badge variant="secondary" className="bg-gray-300 text-gray-600">Unavailable</Badge>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-2">
                      * Online payment is currently unavailable. Please select Cash on Delivery.
                    </p>
                  </CardContent>
                </Card>

              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                          </div>
                          <p className="text-sm font-medium">
                            ₹{(getNumericPrice(item.price) * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>

                    <hr />

                    {/* Price Breakdown */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
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
                    </div>

                    <hr />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>

                    {/* Place Order Button */}
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700" 
                      size="lg"
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Place Order
                        </>
                      )}
                    </Button>

                    <div className="text-xs text-gray-500 text-center">
                      Your order will be confirmed. Payment to be collected on delivery (COD).
                    </div>

                    {/* Back to Cart */}
                    <Link to="/cart">
                      <Button variant="outline" className="w-full">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Cart
                      </Button>
                    </Link>
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

export default Checkout;
