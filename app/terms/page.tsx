import { FileText, Shield, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Terms() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-200 font-normal mb-8">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Please read these Terms of Service carefully before using Nexus Telecom services. 
                  By using our services, you agree to be bound by these terms.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using Nexus Telecom LLC ("Nexus", "we", "us", or "our") services, 
                  you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                  If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Service Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nexus Telecom provides mobile telecommunications services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Mobile voice, data, and messaging services</li>
                  <li>5G and 4G LTE network access</li>
                  <li>Fiber internet services (where available)</li>
                  <li>Related telecommunications equipment and accessories</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Account Registration</h2>
                <p className="text-gray-700 leading-relaxed">
                  To use our services, you must create an account and provide accurate, complete information. 
                  You are responsible for maintaining the confidentiality of your account credentials and for 
                  all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Service Plans and Pricing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Service plans, pricing, and features are subject to change. We reserve the right to modify 
                  plans and pricing with 30 days' notice. Current pricing is available on our website and 
                  may vary by location.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>All prices are in USD and exclude applicable taxes and fees</li>
                  <li>AutoPay discounts require enrollment in automatic payments</li>
                  <li>Unlimited plans are subject to fair use policies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payment is due monthly in advance. By providing payment information, you authorize us to 
                  charge your payment method for all fees associated with your account.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Late payments may result in service suspension</li>
                  <li>Returned payments are subject to fees</li>
                  <li>Refunds are processed according to our refund policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Service Availability</h2>
                <p className="text-gray-700 leading-relaxed">
                  While we strive for 99.9% network uptime, service availability is not guaranteed. 
                  Network coverage, speeds, and quality may vary by location. We are not liable for 
                  service interruptions beyond our reasonable control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Acceptable Use</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to use our services for any unlawful purpose or in any way that could 
                  damage, disable, or impair our services. Prohibited activities include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Illegal activities or violations of any laws</li>
                  <li>Spam, phishing, or fraudulent communications</li>
                  <li>Unauthorized access to networks or systems</li>
                  <li>Resale of services without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Cancellation and Refunds</h2>
                <p className="text-gray-700 leading-relaxed">
                  You may cancel your service at any time. No contracts means no cancellation fees. 
                  Refunds for unused service are prorated and processed within 5-10 business days. 
                  Equipment returns must be completed within 30 days of cancellation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, Nexus Telecom shall not be liable for any 
                  indirect, incidental, special, or consequential damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Material changes 
                  will be communicated via email or through our website. Continued use of our services 
                  after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                  <p className="text-gray-700">
                    <strong>Nexus Telecom LLC</strong><br />
                    1312 17TH ST UNIT 2604<br />
                    Denver, CO 80202<br />
                    Email: <a href="mailto:admin@nexustel.io" className="text-cyan-600 hover:underline">admin@nexustel.io</a><br />
                    Phone: <a href="tel:1-800-639-8701" className="text-cyan-600 hover:underline">1-800-NEXUS-01</a>
                  </p>
                </div>
              </section>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
              <p className="text-cyan-100 mb-6">
                Our team is here to help clarify any questions you may have.
              </p>
              <Link
                href="/contact"
                className="btn-primary bg-white text-purple-600 hover:bg-gray-100 inline-block active:scale-95 transition-transform"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

