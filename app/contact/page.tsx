import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-200 font-normal mb-8">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Form */}
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Subject *
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
                      <option>General Inquiry</option>
                      <option>Sales Question</option>
                      <option>Technical Support</option>
                      <option>Billing Question</option>
                      <option>Coverage Question</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary btn-solid flex items-center justify-center space-x-2 active:scale-95 transition-transform"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    We typically respond within 24 hours during business days
                  </p>
                </form>
              </div>

              {/* Right Column - Office Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                  <p className="text-base text-gray-600 mb-8">
                    Reach out to us through any of these channels. Our team is ready to assist you.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-base mb-1">Phone</h3>
                        <a href="tel:1-800-639-8701" className="text-cyan-600 hover:text-cyan-700 font-semibold">
                          1-800-NEXUS-01
                        </a>
                        <p className="text-xs text-gray-600 mt-2">
                          Mon-Fri: 8am - 8pm EST<br />
                          Sat-Sun: 9am - 5pm EST
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-base mb-1">Email</h3>
                        <a href="mailto:admin@nexustel.io" className="text-cyan-600 hover:text-cyan-700 font-semibold">
                          admin@nexustel.io
                        </a>
                        <p className="text-xs text-gray-600 mt-2">
                          We'll respond within 2 business hours
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-base mb-1">Office Address</h3>
                        <p className="text-gray-700 leading-relaxed">
                          1312 17TH ST UNIT 2604<br />
                          Denver, CO 80202
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                          By appointment only
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Live Chat */}
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-6 text-white">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base mb-1">Live Chat</h3>
                        <p className="text-cyan-100 text-sm mb-4">
                          Chat with a support agent in real-time
                        </p>
                        <a
                          href="/contact"
                          className="btn-primary bg-white text-purple-600 hover:bg-gray-100 active:scale-95 transition-transform text-sm px-4 py-2 inline-block"
                        >
                          Start Chat Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-slate-100 border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 text-slate-700" />
                    <h3 className="font-bold text-slate-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="text-slate-900 font-semibold">8:00 AM - 8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Saturday</span>
                      <span className="text-slate-900 font-semibold">9:00 AM - 5:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sunday</span>
                      <span className="text-slate-900 font-semibold">9:00 AM - 5:00 PM EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Need Quick Answers?
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Check out our frequently asked questions or explore our help center
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="btn-primary btn-solid active:scale-95 transition-transform"
              >
                Visit Help Center
              </a>
              <a
                href="/mobile"
                className="btn-primary btn-outline active:scale-95 transition-transform"
              >
                View Plans
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}







