import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ShippingPolicy() {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container mx-auto py-12 max-w-4xl px-4">
      <Helmet>
        <title>Shipping & Delivery Policy - Thiru Annamalaiyar Agricultural Machinery</title>
        <meta name="description" content="Shipping and delivery policy for Thiru Annamalaiyar Agricultural Machinery. Learn about our delivery process, timelines, and coverage." />
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shipping & Delivery Policy</h1>
        <p className="text-xl text-green-700 font-medium">Reliable Delivery of Premium Agricultural Machinery</p>
      </header>

      <div className="prose max-w-none">
        <p className="mb-6">
          At Thiru Annamalaiyar Agricultural Machinery, we know that timely and safe delivery of farm equipment is critical for your operations. Our shipping policy ensures transparency, accountability, and efficiency in how we deliver tractors, tillers, sprayers, harvesters, and other machinery across Tamil Nadu and beyond.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Processing & Dispatch</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Orders are processed once payment confirmation or approved dealer arrangements are complete.</li>
            <li>Processing time may vary depending on product type, availability, and customization (e.g., attachments or special requests).</li>
            <li>Customers will be notified of dispatch details before shipment.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Coverage</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Domestic Coverage:</strong> Deliveries are available across Tamil Nadu and select regions of India via our logistics and dealer network.</li>
            <li><strong>Rural & Remote Deliveries:</strong> Additional coordination may be required for accessibility to rural farms or estates.</li>
            <li><strong>Dealer-Based Pick-Up:</strong> Customers may also choose to collect machinery directly from authorized dealers.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Timelines</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Within Tamil Nadu:</strong> 5–7 business days after dispatch</li>
            <li><strong>Other States:</strong> 7–14 business days depending on logistics availability</li>
          </ul>
          <p className="mt-4 text-gray-600">
            <strong>Note:</strong> Timelines are estimates and may be affected by road conditions, weather, or external delays.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Charges</h2>
          <p className="mb-4">Charges are calculated based on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Machinery type (tractor, tiller, harvester, etc.)</li>
            <li>Delivery distance and accessibility</li>
            <li>Special unloading requirements (crane, forklift, manpower)</li>
          </ul>
          <p className="mt-4">Shipping charges will be communicated before final order confirmation.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Packaging & Handling</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All machinery is delivered in securely packaged and protected condition.</li>
            <li>Heavy equipment is transported using specialized vehicles to ensure safety.</li>
            <li>Additional protective covers are used during monsoon or long-distance transit.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure delivery site accessibility for trucks and heavy vehicles.</li>
            <li>Arrange for unloading equipment (cranes/forklifts) if required, unless agreed otherwise.</li>
            <li>Inspect the machinery upon delivery and immediately report any damages.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delays & Exceptions</h2>
          <p className="mb-4">Deliveries may be delayed due to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Weather or natural calamities</li>
            <li>Transport strikes or roadblocks</li>
            <li>Remote site accessibility issues</li>
            <li>Unforeseen logistics disruptions</li>
          </ul>
          <p>We will provide prompt updates and revised delivery schedules in such cases.</p>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help With Your Delivery?</h2>
          <p className="mb-6">For assistance with delivery coordination, please contact:</p>
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
