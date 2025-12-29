import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Target, Award, Heart, Tractor, Wrench, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutUs() {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <Helmet>
          <title>About Us - Thiru Annamalaiyar Agricultural Machinery</title>
          <meta name="description" content="Learn about Thiru Annamalaiyar Agricultural Machinery, owned by Nagamuthu Kuppan. Tamil Nadu's trusted partner for agricultural machinery since 2021." />
          <link rel="canonical" href={window.location.href} />
        </Helmet>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-6 text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Empowering Tamil Nadu's farmers with quality agricultural machinery since 2021
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4">
          {/* Owner Introduction */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Nagamuthu Kuppan</h2>
                  <p className="text-lg text-primary font-medium mb-4">Founder & Owner</p>
                  <p className="text-gray-600 leading-relaxed">
                    With a deep-rooted passion for agriculture and a vision to modernize farming in Tamil Nadu, 
                    Nagamuthu Kuppan founded Thiru Annamalaiyar Agricultural Machinery in 2021. His commitment 
                    to providing farmers with reliable, high-quality machinery has made us a trusted name in 
                    the agricultural community of Chengalpattu and beyond.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                Thiru Annamalaiyar Agricultural Machinery was established in 2021 in Madurantakam, Chengalpattu 
                district, with a simple yet powerful mission: to support the farming community of Tamil Nadu 
                with quality agricultural equipment and exceptional service.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Named after the revered deity Lord Annamalaiyar, our business is built on the principles of 
                trust, integrity, and dedication to our customers. We understand the challenges faced by 
                farmers and strive to provide solutions that enhance productivity and reduce manual labor.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From tractors and tillers to sprayers and harvesters, we offer a comprehensive range of 
                agricultural machinery along with spare parts and after-sales services. Our team of experts 
                is always ready to guide farmers in choosing the right equipment for their specific needs.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower farmers across Tamil Nadu with reliable, efficient, and affordable agricultural 
                machinery that enhances productivity, reduces labor, and contributes to sustainable farming 
                practices.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted agricultural machinery partner in South India, known for quality 
                products, exceptional service, and unwavering commitment to the farming community's success.
              </p>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Customer First</h4>
                <p className="text-sm text-gray-600">Your satisfaction is our top priority</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tractor className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality Products</h4>
                <p className="text-sm text-gray-600">Only the best machinery for our farmers</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-7 h-7 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Service</h4>
                <p className="text-sm text-gray-600">Professional support when you need it</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Timely Delivery</h4>
                <p className="text-sm text-gray-600">We value your time and schedules</p>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Agricultural Machinery</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tractors from leading brands</li>
                    <li>• Power Tillers & Rotavators</li>
                    <li>• Sprayers & Dusters</li>
                    <li>• Harvesters & Threshers</li>
                    <li>• Ploughs & Cultivators</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Genuine Spare Parts</li>
                    <li>• Maintenance & Repairs</li>
                    <li>• Installation Support</li>
                    <li>• Operator Training</li>
                    <li>• Financing Assistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Visit Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm">
                    OPP TO NEW TALUK OFFICE<br />
                    14/88, A.C.K Road, Madurantakam<br />
                    Chengalpattu, Tamil Nadu – 603306
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+919894377407" className="text-primary hover:underline">
                    +91 98943 77407
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:thiruannamalaiyar014@gmail.com" className="text-primary hover:underline text-sm">
                    thiruannamalaiyar014@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
