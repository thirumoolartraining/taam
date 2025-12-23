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
        <title>Refund and Return Policy - Thiru Annamalaiyar Agricultural Machinery</title>
        <meta name="description" content="Refund and return policy for Thiru Annamalaiyar Agricultural Machinery. Learn about our return, refund, and exchange policies for agricultural machinery." />
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund and Return Policy</h1>
        <p className="text-xl text-green-700 font-medium">Transparent, Fair & Farmer-Focused</p>
      </header>

      <div className="prose max-w-none">
        <p className="mb-6">
          Thank you for shopping with Thiru Annamalaiyar Agricultural Machinery. We value your satisfaction and strive to provide quality products. Please review our refund and return policy below.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Returns</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>We accept returns of products within 7 days of purchase.</li>
            <li>Items must be unused, in their original packaging, and in the same condition as received.</li>
            <li>To complete your return, we require a receipt or proof of purchase.</li>
          </ul>
          <p className="font-semibold mb-2">Note: Certain items are non-returnable, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom orders with special attachments or modifications</li>
            <li>Machinery used in the field after delivery</li>
            <li>Perishable goods and personal care products</li>
            <li>Items with natural wear and tear or cosmetic differences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Refunds</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Once we receive and inspect your return, we will notify you of the approval or rejection of your refund.</li>
            <li>Approved refunds will be sent to you within 7-10 business days.</li>
            <li>A partial refund may be issued at our discretion for items that are not in their original condition, are damaged, or have missing parts for reasons not due to our error.</li>
            <li>Refunds will be issued through the original mode of payment (bank transfer, UPI, or dealer financing adjustment).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Exchanges</h2>
          <p className="mb-4">
            To initiate a return or exchange, please contact our customer support at <a href="mailto:thiruannamalaiyar014@gmail.com" className="text-blue-600 hover:underline">thiruannamalaiyar014@gmail.com</a> or call <a href="tel:+919894377407" className="text-blue-600 hover:underline">+91 98943 77407</a>. Our team will guide you through the process and provide necessary instructions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Shipping Returns</h2>
          <p>
            You are responsible for paying your own shipping costs for returning your item. Shipping costs are non-refundable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Force Majeure / Exceptional Circumstances</h2>
          <p>
            We are not liable for any delays in processing returns, exchanges, or refunds caused by circumstances beyond our reasonable control, including but not limited to natural disasters, strikes, government actions, or disruptions in transport or payment systems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Governing Law</h2>
          <p>
            This Refund and Cancellation Policy shall be governed by and construed in accordance with the laws of India, including the Consumer Protection Act, 2019, and other applicable laws. Any disputes arising under or in connection with this policy shall be subject to the exclusive jurisdiction of the courts located in Chengalpattu, Tamil Nadu.
          </p>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Us</h2>
          <p className="mb-4">For questions or concerns regarding this policy, please contact us at:</p>
          <address className="not-italic">
            <p className="font-semibold">Thiru Annamalaiyar Agricultural Machinery</p>
            <p className="font-medium text-gray-700">Owner: Nagamuthu Kuppan</p>
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
