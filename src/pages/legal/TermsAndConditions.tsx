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
        <p className="text-gray-600">Last Updated: December 2025</p>
      </header>

      <div className="prose max-w-none">
        <p className="mb-6">
          This document is an electronic record generated under the provisions of the Information Technology Act, 2000 and the applicable rules, including any amendments. This document is published in line with Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011, which mandates the publication of the website's terms of use, privacy policy, and rules for user access and interaction on https://thiruannamalaiyar.com.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="mb-4">These terms and conditions shall govern your use of our website.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>By using our website, you accept these terms and conditions in full; accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.</li>
            <li>If you register with our website, submit any material to our website or use any of our website services, we will ask you to expressly agree to these terms and conditions.</li>
            <li>By using our website or agreeing to these terms and conditions, you warrant and represent to us that you are at least 18 years of age.</li>
            <li>Our website uses cookies; by using our website or agreeing to these terms and conditions, you consent to our use of cookies in accordance with the terms of our Privacy Policy.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Acceptable Use</h2>
          <p className="mb-4">You must not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use our website in any way or take any action that causes, or may cause, damage to the website or impairment of the performance, availability or accessibility of the website.</li>
            <li>Use our website in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.</li>
            <li>Use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.</li>
            <li>Conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent.</li>
            <li>Access or otherwise interact with our website using any robot, spider or other automated means except for the purpose of search engine indexing.</li>
            <li>Use data collected from our website for any direct marketing activity (including without limitation email marketing, SMS marketing, telemarketing and direct mailing).</li>
            <li>You must ensure that all the information you supply to us through our website, or in relation to our website, is true, accurate, current, complete and non-misleading.</li>
            <li>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Accounts</h2>
          <p className="mb-4">To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account details and are fully responsible for all activities that occur under your account. We may:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Suspend your account</li>
            <li>Cancel your account</li>
            <li>Edit your account details</li>
          </ul>
          <p className="mt-4">at any time in our sole discretion without notice or explanation. You may cancel your account on our website using your account control panel on the website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Product & Service Information</h2>
          <p>
            We aim to provide accurate descriptions and pricing of our products and services on the website. However, we do not guarantee that the information, including availability and pricing, is always accurate, complete, or current. We reserve the right to correct errors and update information without prior notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites that are not under our control. We are not responsible for the content, policies, or practices of these external sites. Accessing third-party links is at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property Rights</h2>
          <p>
            All content on this site — including text, images, graphics, logos, and software — is owned or licensed by Thiru Annamalaiyar Agricultural Machinery and protected by applicable intellectual property laws. You may not reproduce, distribute, or use our content without our prior written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
          <p>
            To the extent permitted by law, Thiru Annamalaiyar Agricultural Machinery shall not be liable for any indirect, incidental, or consequential damages arising out of or related to your use of the website, including but not limited to damages for loss of profits, data, or other intangible losses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Disclaimer of Warranties</h2>
          <p>
            This website is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the site will always be available, secure, or free from errors or viruses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Indemnity</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Thiru Annamalaiyar Agricultural Machinery and its affiliates, directors, officers, employees, and agents from and against all claims, liabilities, damages, losses, or expenses, including reasonable legal fees, arising out of your use of the website or your violation of these Terms & Conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Changes to Terms</h2>
          <p>
            We reserve the right to modify or update these Terms & Conditions at any time without prior notice. Changes will be effective once posted on this page. We recommend checking this page periodically for updates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Governing Law</h2>
          <p>
            These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising from or relating to these terms, your use of the website, or our services shall be subject to the exclusive jurisdiction of the courts located in Chengalpattu, Tamil Nadu, India.
          </p>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Us</h2>
          <p className="mb-4">If you have any questions or concerns about these Terms & Conditions, please contact us at:</p>
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
