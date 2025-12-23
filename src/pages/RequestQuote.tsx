import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator, FileText, Clock, CheckCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const productCategories = [
  { value: "tractors", label: "Tractors" },
  { value: "tillers", label: "Tillers" },
  { value: "sprayers", label: "Sprayers" },
  { value: "harvesters", label: "Harvesters" },
  { value: "ploughs", label: "Ploughs" },
  { value: "spare-parts", label: "Spare Parts" },
  { value: "services", label: "Services" }
];

const urgencyLevels = [
  { value: "immediate", label: "Immediate (Within 24 hours)", description: "Urgent requirement" },
  { value: "week", label: "Within a week", description: "Standard timeline" },
  { value: "month", label: "Within a month", description: "Planning ahead" },
  { value: "flexible", label: "Flexible timeline", description: "No rush" }
];

const RequestQuote = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    
    // Quote Details
    category: "",
    product_details: "",
    quantity: "",
    urgency: "",
    budget_range: "",
    
    // Additional Requirements
    financing_needed: false,
    installation_required: false,
    training_required: false,
    warranty_extended: false,
    
    // Additional Information
    current_equipment: "",
    farm_size: "",
    additional_notes: "",
    
    // Contact Preferences
    preferred_contact: "phone",
    best_time_to_call: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a unique quote ID
    const quoteId = `QT${Date.now().toString().slice(-6)}`;
    const submissionTime = new Date().toLocaleString();
    
    // Prepare quote data for confirmation page
    const quoteData = {
      ...formData,
      quoteId,
      submissionTime
    };
    
    // Log the submission (in a real app, this would be sent to a server)
    console.log("Quote request submitted:", quoteData);
    
    // Navigate to confirmation page with the quote data
    navigate('/quote-confirmation', { 
      state: { quoteData },
      replace: true 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Request a Quote
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Get personalized pricing for agricultural equipment, spare parts, and services tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <Clock className="mr-2 h-5 w-5" />
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <CheckCircle className="mr-2 h-5 w-5" />
                <span>No obligation quote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <FileText className="mr-3 h-6 w-6 text-indigo-600" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>
                    Please provide your contact details so we can send you the quote
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98943 77407"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company/Farm Name</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, State"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Quote Details */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Calculator className="mr-3 h-6 w-6 text-indigo-600" />
                    Quote Details
                  </CardTitle>
                  <CardDescription>
                    Tell us what you're looking for so we can provide accurate pricing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="category">Product Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleSelectChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {productCategories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        type="number"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g., 1, 2, 5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="product_details">Product Details *</Label>
                    <Textarea
                      id="product_details"
                      name="product_details"
                      required
                      value={formData.product_details}
                      onChange={handleInputChange}
                      placeholder="Please specify the exact model, specifications, or part numbers you need..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget_range">Budget Range (Optional)</Label>
                    <Select value={formData.budget_range} onValueChange={(value) => handleSelectChange('budget_range', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                        <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="1l-5l">₹1,00,000 - ₹5,00,000</SelectItem>
                        <SelectItem value="5l-10l">₹5,00,000 - ₹10,00,000</SelectItem>
                        <SelectItem value="10l-25l">₹10,00,000 - ₹25,00,000</SelectItem>
                        <SelectItem value="above-25l">Above ₹25,00,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium">Timeline/Urgency *</Label>
                    <RadioGroup 
                      value={formData.urgency} 
                      onValueChange={(value) => handleSelectChange('urgency', value)}
                      className="mt-3"
                    >
                      {urgencyLevels.map((level) => (
                        <div key={level.value} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                          <RadioGroupItem value={level.value} id={level.value} />
                          <div className="flex-1">
                            <Label htmlFor={level.value} className="font-medium cursor-pointer">
                              {level.label}
                            </Label>
                            <p className="text-sm text-gray-600">{level.description}</p>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Requirements */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Additional Services
                  </CardTitle>
                  <CardDescription>
                    Select any additional services you might need
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="financing_needed" 
                          name="financing_needed"
                          checked={formData.financing_needed}
                          onCheckedChange={(checked) => handleSelectChange('financing_needed', checked.toString())}
                        />
                        <Label htmlFor="financing_needed" className="cursor-pointer">
                          Financing Options Required
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="installation_required" 
                          name="installation_required"
                          checked={formData.installation_required}
                          onCheckedChange={(checked) => handleSelectChange('installation_required', checked.toString())}
                        />
                        <Label htmlFor="installation_required" className="cursor-pointer">
                          Professional Installation
                        </Label>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="training_required" 
                          name="training_required"
                          checked={formData.training_required}
                          onCheckedChange={(checked) => handleSelectChange('training_required', checked.toString())}
                        />
                        <Label htmlFor="training_required" className="cursor-pointer">
                          Operator Training
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="warranty_extended" 
                          name="warranty_extended"
                          checked={formData.warranty_extended}
                          onCheckedChange={(checked) => handleSelectChange('warranty_extended', checked.toString())}
                        />
                        <Label htmlFor="warranty_extended" className="cursor-pointer">
                          Extended Warranty
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Additional Information
                  </CardTitle>
                  <CardDescription>
                    Help us provide better recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="farm_size">Farm Size (in acres)</Label>
                      <Input
                        id="farm_size"
                        name="farm_size"
                        type="text"
                        value={formData.farm_size}
                        onChange={handleInputChange}
                        placeholder="e.g., 10 acres"
                      />
                    </div>
                    <div>
                      <Label htmlFor="current_equipment">Current Equipment</Label>
                      <Input
                        id="current_equipment"
                        name="current_equipment"
                        type="text"
                        value={formData.current_equipment}
                        onChange={handleInputChange}
                        placeholder="What equipment do you currently use?"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additional_notes">Additional Notes</Label>
                    <Textarea
                      id="additional_notes"
                      name="additional_notes"
                      value={formData.additional_notes}
                      onChange={handleInputChange}
                      placeholder="Any specific requirements, questions, or additional information..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="preferred_contact">Preferred Contact Method</Label>
                      <Select value={formData.preferred_contact} onValueChange={(value) => handleSelectChange('preferred_contact', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select contact method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="visit">In-person Visit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="best_time_to_call">Best Time to Call</Label>
                      <Select value={formData.best_time_to_call} onValueChange={(value) => handleSelectChange('best_time_to_call', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                          <SelectItem value="anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button type="submit" size="lg" className="bg-indigo-600 hover:bg-indigo-700 px-12">
                  Submit Quote Request
                  <Calculator className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  We'll review your request and get back to you within 2 hours during business hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Review</h3>
                <p className="text-gray-600">Our experts review your requirements and check product availability</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Contact</h3>
                <p className="text-gray-600">We'll contact you within 2 hours to discuss your needs in detail</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Quote</h3>
                <p className="text-gray-600">Receive a detailed quote with pricing, terms, and delivery timeline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestQuote;
