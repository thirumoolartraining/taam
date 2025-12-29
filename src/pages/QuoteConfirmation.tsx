import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { 
  CheckCircle, 
  Clock, 
  Phone, 
  Mail, 
  FileText, 
  Calendar,
  User,
  MapPin,
  Package,
  ArrowRight,
  Home,
  MessageSquare
} from "lucide-react";
import { useEffect, useState } from "react";

interface QuoteData {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  category: string;
  product_details: string;
  quantity: string;
  urgency: string;
  budget_range: string;
  quoteId: string;
  submissionTime: string;
}

const QuoteConfirmation = () => {
  const location = useLocation();
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);

  useEffect(() => {
    // Get quote data from navigation state or generate mock data if not available
    if (location.state?.quoteData) {
      setQuoteData(location.state.quoteData);
    } else {
      // Fallback data if accessed directly
      setQuoteData({
        name: "Customer",
        email: "customer@example.com",
        phone: "+91 98765 43210",
        company: "",
        location: "India",
        category: "General Inquiry",
        product_details: "Agricultural Equipment",
        quantity: "1",
        urgency: "week",
        budget_range: "",
        quoteId: `QT${Date.now().toString().slice(-6)}`,
        submissionTime: new Date().toLocaleString()
      });
    }
  }, [location.state]);

  const getUrgencyLabel = (urgency: string) => {
    const urgencyMap: { [key: string]: string } = {
      immediate: "Immediate (Within 24 hours)",
      week: "Within a week",
      month: "Within a month",
      flexible: "Flexible timeline"
    };
    return urgencyMap[urgency] || urgency;
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      tractors: "Tractors",
      tillers: "Tillers",
      sprayers: "Sprayers",
      harvesters: "Harvesters",
      ploughs: "Ploughs",
      "spare-parts": "Spare Parts",
      services: "Services"
    };
    return categoryMap[category] || category;
  };

  if (!quoteData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Success Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quote Request Submitted Successfully!
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Thank you for your interest in our agricultural equipment. We've received your quote request and will get back to you soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <Clock className="mr-2 h-5 w-5" />
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <FileText className="mr-2 h-5 w-5" />
                <span>Quote ID: {quoteData.quoteId}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Details */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            
            {/* Quote Summary */}
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <FileText className="mr-3 h-6 w-6 text-green-600" />
                  Quote Request Summary
                </CardTitle>
                <CardDescription>
                  Here's a summary of your quote request. Save this information for your records.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <User className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{quoteData.name}</p>
                        <p className="text-sm text-gray-600">Customer Name</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{quoteData.email}</p>
                        <p className="text-sm text-gray-600">Email Address</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{quoteData.phone}</p>
                        <p className="text-sm text-gray-600">Phone Number</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Package className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{getCategoryLabel(quoteData.category)}</p>
                        <p className="text-sm text-gray-600">Product Category</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{quoteData.location}</p>
                        <p className="text-sm text-gray-600">Location</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{getUrgencyLabel(quoteData.urgency)}</p>
                        <p className="text-sm text-gray-600">Timeline</p>
                      </div>
                    </div>
                  </div>
                </div>

                {quoteData.product_details && (
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Product Details:</h4>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{quoteData.product_details}</p>
                  </div>
                )}

                <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg">
                  <div>
                    <p className="font-medium text-green-800">Quote ID: {quoteData.quoteId}</p>
                    <p className="text-sm text-green-600">Submitted on {quoteData.submissionTime}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                    Submitted Successfully
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  What Happens Next?
                </CardTitle>
                <CardDescription>
                  Here's what you can expect from our team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">1. Review & Analysis</h3>
                    <p className="text-gray-600 text-sm">Our experts will review your requirements and check product availability within 30 minutes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">2. Personal Contact</h3>
                    <p className="text-gray-600 text-sm">We'll contact you within 2 hours to discuss your needs and answer any questions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">3. Detailed Quote</h3>
                    <p className="text-gray-600 text-sm">Receive a comprehensive quote with pricing, specifications, and delivery details</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Home className="mr-2 h-5 w-5" />
                    Back to Home
                  </Button>
                </Link>
                <Link to="/machinery">
                  <Button size="lg" variant="outline">
                    Browse More Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact Support
                  </Button>
                </Link>
                <Link to="/request-quote">
                  <Button variant="outline">
                    Submit Another Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <Card className="shadow-lg mt-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Need Immediate Assistance?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-blue-600">+91 98943 77407</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-blue-600">thiruannamalaiyar014@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuoteConfirmation;
