import { Shield, Lock, Eye, FileText } from "lucide-react";
import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-200 font-normal mb-8">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <div className="bg-gradient-to-r from-cyan-50 to-purple-50 border border-cyan-200 rounded-xl p-6 mb-8">
              <div className="flex items-start space-x-3">
                <Lock className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  At Nexus Telecom, we are committed to protecting your privacy. This policy explains 
                  how we collect, use, and safeguard your personal information.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Account credentials and preferences</li>
                  <li>Service usage data and network performance metrics</li>
                  <li>Customer service communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process payments and manage your account</li>
                  <li>Communicate with you about your account and our services</li>
                  <li>Send you important updates and promotional offers (with your consent)</li>
                  <li>Detect and prevent fraud or abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>With service providers who assist us in operating our business (under strict confidentiality agreements)</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer (merger, acquisition, etc.)</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement industry-standard security measures to protect your personal information, 
                  including encryption, secure servers, and access controls. However, no method of 
                  transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve our website functionality</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  You can control cookies through your browser settings, though this may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:admin@nexustel.io" className="text-cyan-600 hover:underline">admin@nexustel.io</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children. If you believe we have collected information 
                  from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. California Privacy Rights</h2>
                <p className="text-gray-700 leading-relaxed">
                  California residents have additional rights under the California Consumer Privacy Act (CCPA), 
                  including the right to know what personal information is collected, the right to delete 
                  personal information, and the right to opt-out of the sale of personal information. 
                  We do not sell personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Material changes will be communicated 
                  via email or through our website. Your continued use of our services after changes 
                  constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Nexus Telecom LLC</strong><br />
                    Privacy Officer<br />
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
              <Eye className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Have Privacy Concerns?</h3>
              <p className="text-cyan-100 mb-6">
                We're committed to transparency. Contact us with any questions about your privacy.
              </p>
              <Link
                href="/contact"
                className="btn-primary bg-white text-purple-600 hover:bg-gray-100 inline-block active:scale-95 transition-transform"
              >
                Contact Privacy Officer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

