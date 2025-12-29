import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { 
  CheckCircle, 
  Package, 
  Truck, 
  MapPin, 
  Calendar,
  Download,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";

interface OrderData {
  orderId: string;
  items: Array<{
    id: number;
    name: string;
    price: string;
    image: string;
    quantity: number;
  }>;
  address: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    landmark?: string;
  };
  total: number;
  orderDate: string;
  status: string;
}

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const lastOrder = localStorage.getItem('lastOrder');
    if (!lastOrder) {
      navigate('/');
      return;
    }
    
    const order = JSON.parse(lastOrder);
    setOrderData(order);
  }, [navigate]);

  if (!orderData) {
    return <div>Loading...</div>;
  }

  const getNumericPrice = (priceString: string) => {
    return parseFloat(priceString.replace(/[₹,]/g, ''));
  };

  const subtotal = orderData.items.reduce((sum, item) => {
    return sum + (getNumericPrice(item.price) * item.quantity);
  }, 0);

  const tax = subtotal * 0.18;
  const shipping = subtotal > 50000 ? 0 : 2000;


  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Success Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-xl opacity-90 mb-6">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <div className="bg-white/10 rounded-lg p-4 inline-block">
              <p className="text-lg font-medium">Order ID: <span className="font-bold">{orderData.orderId}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Details */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            
            {/* Order Status Timeline */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Order Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm font-medium">Order Placed</p>
                    <p className="text-xs text-gray-500">
                      {new Date(orderData.orderDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                      <Package className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-400">Processing</p>
                    <p className="text-xs text-gray-400">1-2 days</p>
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                      <Truck className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-400">Shipped</p>
                    <p className="text-xs text-gray-400">3-5 days</p>
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-400">Delivered</p>
                    <p className="text-xs text-gray-400">
                      {estimatedDelivery.toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Order Items */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Items ({orderData.items.length})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orderData.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                            <p className="text-lg font-bold text-green-600">{item.price}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">
                              ₹{(getNumericPrice(item.price) * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">
                        {orderData.address.firstName} {orderData.address.lastName}
                      </p>
                      <p>{orderData.address.address}</p>
                      {orderData.address.landmark && (
                        <p className="text-gray-600">Near: {orderData.address.landmark}</p>
                      )}
                      <p>
                        {orderData.address.city}, {orderData.address.state} - {orderData.address.pincode}
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="w-4 h-4 mr-1" />
                          {orderData.address.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="w-4 h-4 mr-1" />
                          {orderData.address.email}
                        </div>
                      </div>
                    </div>
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
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal ({orderData.items.length} items)</span>
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
                      <span>Total Amount</span>
                      <span>₹{orderData.total.toLocaleString()}</span>
                    </div>

                    {/* Payment Status */}
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-yellow-900">Payment Method</span>
                        <Badge className="bg-yellow-500">COD</Badge>
                      </div>
                      <p className="text-sm text-yellow-700 mt-1">
                        Cash on Delivery - Payment to be collected at delivery
                      </p>
                    </div>

                    {/* Estimated Delivery */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="font-medium text-blue-900">Estimated Delivery</span>
                      </div>
                      <p className="text-blue-800 font-bold">
                        {estimatedDelivery.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      <p className="text-sm text-blue-600 mt-1">
                        7-10 business days
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button className="w-full" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download Invoice
                      </Button>
                      
                      <Link to="/contact" className="block">
                        <Button className="w-full" variant="outline">
                          <Phone className="mr-2 h-4 w-4" />
                          Contact Support
                        </Button>
                      </Link>

                      <Link to="/shop-now" className="block">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Continue Shopping
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                      You will receive order updates via email and SMS
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

export default OrderConfirmation;
