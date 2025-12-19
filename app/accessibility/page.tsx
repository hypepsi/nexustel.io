import { Accessibility as AccessibilityIcon, Eye, Ear, MousePointer, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Accessibility() {
  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast modes, resizable text, and screen reader compatibility.",
    },
    {
      icon: Ear,
      title: "Audio Accessibility",
      description: "Transcripts, captions, and audio descriptions for multimedia content.",
    },
    {
      icon: MousePointer,
      title: "Keyboard Navigation",
      description: "Full keyboard accessibility and focus indicators throughout the site.",
    },
    {
      icon: AccessibilityIcon,
      title: "WCAG Compliance",
      description: "We strive to meet WCAG 2.1 Level AA standards for web accessibility.",
    },
  ];

  const commitments = [
    "Regular accessibility audits and testing",
    "User feedback integration and improvements",
    "Training for our team on accessibility best practices",
    "Continuous monitoring and updates",
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AccessibilityIcon className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Accessibility Statement
            </h1>
            <p className="text-lg text-slate-200 font-normal mb-8">
              Nexus Telecom is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Commitment
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Nexus Telecom, we believe that the internet should be accessible to everyone. 
                We are committed to making our website and services accessible to people with disabilities, 
                and we strive to provide an inclusive experience for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Accessibility Features
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Features we've implemented to improve accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Standards & Compliance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                These guidelines explain how to make web content more accessible for people with disabilities 
                and user-friendly for everyone.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-slate-900">Our ongoing efforts include:</h3>
                <ul className="space-y-2">
                  {commitments.map((commitment, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Known Issues */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Known Issues & Improvements
            </h2>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                We are aware that some parts of our website may not be fully accessible. We are working 
                to address these issues and improve the overall accessibility of our site. If you encounter 
                any accessibility barriers, please let us know.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We regularly review our website and make improvements based on user feedback and 
                accessibility testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-12 text-white text-center shadow-2xl">
              <AccessibilityIcon className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                We Value Your Feedback
              </h2>
              <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
                If you encounter any accessibility barriers on our website or have suggestions for 
                improvement, please contact us. We are committed to making our services accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary bg-white text-purple-600 hover:bg-gray-100 active:scale-95 transition-transform"
                >
                  Report an Issue
                </Link>
                <Link
                  href="mailto:admin@nexustel.io"
                  className="btn-primary bg-transparent border-2 border-white text-white hover:bg-white/10 active:scale-95 transition-transform"
                >
                  Email Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Browser Accessibility</h3>
                <p className="text-sm text-gray-600">
                  Most modern browsers include accessibility features. Check your browser's help section 
                  for information on accessibility options.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Assistive Technologies</h3>
                <p className="text-sm text-gray-600">
                  Our website is compatible with screen readers and other assistive technologies. 
                  We recommend using the latest versions for the best experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

