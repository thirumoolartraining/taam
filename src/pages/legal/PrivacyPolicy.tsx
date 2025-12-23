import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container mx-auto py-12 max-w-4xl px-4">
      <Helmet>
        <title>Privacy Policy - Thiru Annamalaiyar Agricultural Machinery</title>
        <meta name="description" content="Privacy Policy for Thiru Annamalaiyar Agricultural Machinery. Learn how we protect your data and privacy." />
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-xl text-green-700 font-medium">Your Data, Our Responsibility</p>
      </header>

      <div className="prose max-w-none">
        <p className="mb-6">
          Thiru Annamalaiyar Agricultural Machinery is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website https://thiruannamalaiyar.com or use our services.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We may collect the following information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide during checkout, or service requests.</li>
            <li><strong>Payment Information:</strong> We use secure third-party payment processors (Razorpay, UPI, Bank Transfer) to handle payment details. We do not store your complete payment information on our servers.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfil orders and deliver services.</li>
            <li>Communicate with you about your orders, inquiries, or other requests.</li>
            <li>Improve our website and services.</li>
            <li>Send promotional emails or newsletters, if you have opted in.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Sharing Your Information</h2>
          <p className="mb-4">We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website, conducting our business, or servicing you (logistics, payment processors).</li>
            <li><strong>Legal Requirements:</strong> If required by law, we may disclose your information to comply with legal obligations or protect our rights.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure payment gateways, and restricted access to sensitive data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to fulfil the purposes described in this policy or to comply with legal requirements. Afterward, data is securely deleted or anonymized.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Rights</h2>
          <p className="mb-4">
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at thiruannamalaiyar014@gmail.com. We will respond within 30 business days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Your Privacy Matters to Us</h2>
          <p className="mb-4">
            In accordance with the Information Technology Act, 2000 and applicable rules, we are committed to addressing any concerns or feedback you may have regarding this Privacy Policy or the handling of your personal information.
          </p>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="mb-4">For any privacy-related questions, concerns, or feedback, please contact us at:</p>
          <address className="not-italic">
            <p className="font-semibold">Thiru Annamalaiyar Agricultural Machinery</p>
            <p className="font-medium text-gray-700">Owner: Nagamuthu Kuppan</p>
            <p>📍 OPP TO NEW TALUK OFFICE, 14/88, A.C.K Road, Madurantakam, Chengalpattu, Tamil Nadu – 603306</p>
            <p>📞 Phone: <a href="tel:+919894377407" className="text-blue-600 hover:underline">+91 98943 77407</a></p>
            <p>📧 Email: <a href="mailto:thiruannamalaiyar014@gmail.com" className="text-blue-600 hover:underline">thiruannamalaiyar014@gmail.com</a></p>
          </address>
          
          <p className="mt-6 text-sm text-gray-500">
            <strong>Last Updated:</strong> December 2025<br />
            © 2021-2025 Thiru Annamalaiyar Agricultural Machinery. All Rights Reserved.
          </p>
        </section>
      </div>
    </div>
  );
}
