import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsAndConditions() {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container mx-auto py-12 max-w-4xl px-4">
      <Helmet>
        <title>Terms & Conditions - Thiru Annamalaiyar Agricultural Machinery</title>
        <meta name="description" content="Terms and Conditions for Thiru Annamalaiyar Agricultural Machinery. Please read these terms carefully before using our services." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-6 hover:bg-gray-100"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
        <p className="text-gray-600">Last Updated: August 2025</p>
      </header>

      <div className="prose max-w-none">
        <p className="mb-6">
          Welcome to Thiru Annamalaiyar Agricultural Machinery. By purchasing our products, accessing our services, or using our website, you agree to the following Terms & Conditions. These terms govern all transactions, service requests, and interactions with our business.
        </p>
        <p className="mb-8 text-red-600 font-medium">
          If you do not agree to these terms, please discontinue use of our services.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. General Use of Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You confirm that you are legally authorized to purchase agricultural machinery and related services.</li>
            <li>Products and services must only be used for lawful farming and agricultural purposes.</li>
            <li>We reserve the right to decline, suspend, or cancel orders in cases of misuse, fraud, or regulatory violations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Products & Specifications</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We provide tractors, tillers, sprayers, harvesters, and agricultural machinery.</li>
            <li>Product images and brochures are for reference; actual products may vary slightly in design or features.</li>
            <li>Specifications are subject to updates or improvements without prior notice.</li>
            <li>Customers are encouraged to confirm compatibility with their farming requirements before purchase.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Pricing & Payments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All prices are listed in Indian Rupees (INR ₹) unless stated otherwise.</li>
            <li>Prices may vary based on model, customization, or government taxes.</li>
            <li>Payments must be made in full at the time of purchase unless alternate financing or dealer arrangements are agreed.</li>
            <li>We accept payments via bank transfer, UPI, cards, or authorized financing partners.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Shipping & Delivery</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Delivery timelines vary depending on location, order size, and logistics availability.</li>
            <li>Customers must provide accurate delivery details and ensure accessibility for heavy vehicles.</li>
            <li>Unloading and installation support may be arranged with prior notice.</li>
            <li>Risk of goods transfers to the customer upon delivery.</li>
            <li>Please refer to our Shipping Policy for detailed terms.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Warranty & Service</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All machinery comes with manufacturer warranty coverage, subject to conditions mentioned in the warranty card.</li>
            <li>Warranty covers manufacturing defects but not damage caused by misuse, poor maintenance, or unauthorized repairs.</li>
            <li>Regular servicing and maintenance are the responsibility of the customer, except as provided under warranty.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Returns & Refunds</h2>
          <p className="mb-4">Due to the nature of heavy machinery, returns are not accepted once the equipment is delivered and installed.</p>
          <p className="mb-4">Refunds or replacements are available only in cases of:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Wrong model delivered</li>
            <li>Verified manufacturing defects</li>
            <li>Transport damage reported at the time of delivery</li>
          </ul>
          <p>For details, please see our Cancellation & Refund Policy.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Customer Responsibilities</h2>
          <p className="mb-4">By engaging with us, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate purchase and delivery information</li>
            <li>Maintain machinery in accordance with manufacturer guidelines</li>
            <li>Ensure safe operation by trained personnel</li>
            <li>Not resell or misuse products under false representation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Intellectual Property</h2>
          <p>All logos, brochures, product images, manuals, and branding are the intellectual property of Thiru Annamalaiyar Agricultural Machinery. Unauthorized reproduction is prohibited.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Limitation of Liability</h2>
          <p className="mb-4">We shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Delays caused by logistics or external factors beyond our control</li>
            <li>Natural wear and tear of machinery components</li>
            <li>Losses due to improper usage or non-compliance with safety instructions</li>
            <li>Indirect, incidental, or consequential damages</li>
          </ul>
          <p className="mt-4">Our liability is limited to the invoice value of the machinery supplied.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law & Jurisdiction</h2>
          <p>These Terms & Conditions are governed by the laws of India, and any disputes will be subject to the jurisdiction of the courts in Chengalpattu, Tamil Nadu.</p>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
          <p className="mb-4">For any questions or support regarding these Terms & Conditions, please contact:</p>
          <address className="not-italic">
            <p className="font-semibold">Thiru Annamalaiyar Agricultural Machinery</p>
            <p>📍 OPP TO NEW TALUK OFFICE, 14/88, A.C.K Road, Madurantakam, Chengalpattu, Tamil Nadu – 603306</p>
            <p>📞 Phone: <a href="tel:+919894377407" className="text-blue-600 hover:underline">+91 98943 77407</a></p>
            <p>📧 Email: <a href="mailto:thiruannamalaiyar014@gmail.com" className="text-blue-600 hover:underline">thiruannamalaiyar014@gmail.com</a></p>
          </address>
          
          <p className="mt-8 text-sm text-gray-500">
            <strong>Last Updated:</strong> December 2025<br />
            © 2021-2025 Thiru Annamalaiyar Agricultural Machinery. All Rights Reserved.
          </p>
        </section>
      </div>
    </div>
  );
}
