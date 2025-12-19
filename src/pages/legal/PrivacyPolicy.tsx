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
          At Thiru Annamalaiyar Agricultural Machinery, we are committed to protecting the privacy of farmers, distributors, and customers who trust us with their agricultural machinery needs. Whether you're purchasing a tractor, tiller, sprayer, or harvester, or requesting service support, we ensure that your personal and business information is safeguarded with the highest standards of confidentiality, security, and compliance.
        </p>
        <p className="mb-8">
          This Privacy Policy explains what information we collect, how we use it, how we protect it, and your rights when interacting with our website, products, and services.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <p className="mb-4">
            When you engage with us—through purchases, service bookings, or business inquiries—we may collect:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Full Name / Business Name</li>
            <li>Email Address & Phone Number</li>
            <li>Billing & Shipping Address</li>
            <li>Machinery Purchase/Service History</li>
            <li>Payment Details (via secure third-party gateways)</li>
            <li>GST or Business Identification (for B2B clients)</li>
            <li>Device & Browser Information (if using our website)</li>
            <li>Cookies & Analytics Data (for performance tracking)</li>
          </ul>
          <p>We collect only the data necessary to deliver efficient and reliable agricultural machinery sales and service.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why We Collect Your Information</h2>
          <p className="mb-4">Your data is used solely for business and service purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processing machinery sales and service requests</li>
            <li>Providing delivery, warranty, and after-sales support</li>
            <li>Sending service reminders, updates, or safety notifications</li>
            <li>Offering promotional content (only if you opt in)</li>
            <li>Coordinating with logistics for large machinery transport</li>
            <li>Meeting legal, tax, and compliance requirements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Protect Your Information</h2>
          <p className="mb-4">We implement strong security measures to protect your data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>SSL Encryption:</strong> Secures all online communication</li>
            <li><strong>Secure Payments:</strong> Transactions processed via trusted PCI-compliant gateways—we do not store banking details</li>
            <li><strong>Authorized Access Only:</strong> Sensitive data is accessed strictly by trained staff under confidentiality protocols</li>
            <li><strong>Regular System Reviews:</strong> Firewalls and audits safeguard against misuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights & Choices</h2>
          <p className="mb-4">As a customer, you may:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Request access to the data we hold about you</li>
            <li>Ask for corrections or updates to your details</li>
            <li>Request deletion of your data (subject to legal requirements)</li>
            <li>Withdraw consent from promotional communications</li>
            <li>Report concerns about privacy or data misuse</li>
          </ul>
          <p>We respond to valid requests within 30 business days.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Sharing</h2>
          <p>
            We do not sell or rent your data. Information is shared only with:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Logistics and transport providers (for delivery of machinery)</li>
            <li>Payment processors (for secure financial transactions)</li>
            <li>Regulatory authorities (if required under law)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Policy Updates</h2>
          <p>
            This Privacy Policy may be updated periodically to reflect changes in business practices, legal requirements, or technology. Any updates will be posted here with a revised "Last Updated" date.
          </p>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="mb-4">For privacy-related queries, requests, or complaints, please reach us at:</p>
          <address className="not-italic">
            <p className="font-semibold">Thiru Annamalaiyar Agricultural Machinery</p>
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
