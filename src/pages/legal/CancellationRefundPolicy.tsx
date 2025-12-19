import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CancellationRefundPolicy() {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container mx-auto py-12 max-w-4xl px-4">
      <Helmet>
        <title>Cancellation & Refund Policy - Thiru Annamalaiyar Agricultural Machinery</title>
        <meta name="description" content="Cancellation and refund policy for Thiru Annamalaiyar Agricultural Machinery. Learn about our return, refund, and warranty policies for agricultural machinery." />
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cancellation & Refund Policy</h1>
        <p className="text-xl text-green-700 font-medium">Transparent, Fair & Farmer-Focused</p>
      </header>

      <div className="prose max-w-none">
        <p className="mb-6">
          At Thiru Annamalaiyar Agricultural Machinery, we aim to provide farmers with reliable tractors, tillers, sprayers, and harvesters that enhance productivity and efficiency. Due to the nature of agricultural machinery, cancellations and refunds are subject to specific conditions outlined below.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Cancellations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cancellation Window:</strong> Orders may be cancelled within 2 hours of confirmation, provided the machinery has not been processed, dispatched, or registered for delivery.</li>
            <li>Once dispatch or installation preparations begin, cancellations are no longer possible.</li>
            <li>For dealer-financed or special bulk orders, cancellation terms will be governed by the purchase agreement.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns & Replacements</h2>
          <p className="mb-4">We accept returns or replacements only in the following cases:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Wrong model or equipment delivered.</li>
            <li>Verified manufacturing defects.</li>
            <li>Transit damage, reported immediately upon delivery with supporting proof (photos/videos).</li>
          </ul>
          <p className="font-semibold mb-2">Conditions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Machinery must remain in unused condition with original packaging or dealer documentation.</li>
            <li>Any claims must be raised within 48 hours of delivery.</li>
            <li>Returns are not accepted once machinery has been used, altered, or registered.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Non-Returnable Items</h2>
          <p className="mb-4">The following are not eligible for return or refund:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom orders with special attachments or modifications.</li>
            <li>Machinery used in the field after delivery.</li>
            <li>Natural wear and tear, minor paint variations, or cosmetic differences.</li>
            <li>Delays due to factors outside our control (transport strikes, weather, etc.).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refunds</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Approved refunds will be initiated within 5–7 business days of confirmation.</li>
            <li>Refunds are processed via the original mode of payment (bank transfer, UPI, dealer financing adjustment).</li>
            <li>Depending on your bank/payment provider, it may take 7–10 business days for funds to reflect.</li>
            <li>In certain cases, customers may opt for replacement machinery or dealer credit notes instead of a refund.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Warranty & Service Remedies</h2>
          <p>
            If defects arise after delivery but within the warranty period, they will be addressed under the manufacturer's warranty and service terms, not through refunds.
            Our service team ensures timely support and maintenance for warranty claims.
          </p>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help?</h2>
          <p className="mb-6">For assistance regarding cancellations, returns, or refunds, please contact:</p>
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
