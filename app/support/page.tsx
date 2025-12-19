import { CreditCard, Wrench, User, Phone, Mail, MessageSquare, Search, ChevronRight } from "lucide-react";

export default function Support() {
  const categories = [
    {
      icon: CreditCard,
      title: "Billing",
      description: "Questions about payments, invoices, and account charges",
      topics: [
        "View my bill",
        "Update payment method",
        "Understand charges",
        "Request refund",
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Help with connectivity, devices, and network issues",
      topics: [
        "Network troubleshooting",
        "Device setup",
        "eSIM activation",
        "Speed issues",
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: User,
      title: "Account Management",
      description: "Manage your account settings and preferences",
      topics: [
        "Update account info",
        "Change plan",
        "Add/remove lines",
        "Port phone number",
      ],
      color: "from-orange-500 to-red-500"
    },
  ];

  const popularArticles = [
    "How to activate your eSIM",
    "Understanding your bill",
    "How to check data usage",
    "Troubleshoot slow speeds",
    "Port your number to Nexus",
    "Set up Wi-Fi calling",
    "International roaming guide",
    "Device compatibility check",
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Help Center
            </h1>
            <p className="text-lg text-slate-200 font-normal mb-8">
              Find answers, get support, and learn how to make the most of your Nexus service
            </p>
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 pr-12 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-lg text-white placeholder-white/60 focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 transition-all"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              How Can We Help?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Choose a category to get started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {category.description}
                </p>

                {/* Topics */}
                <ul className="space-y-2">
                  {category.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-700 hover:text-cyan-600 transition-colors">
                      <ChevronRight className="w-4 h-4 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Popular Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <a
                  key={index}
                  href="/support"
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all duration-300 group"
                >
                  <span className="text-sm text-slate-700 group-hover:text-cyan-600">
                    {article}
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Still Need Help?
              </h2>
              <p className="text-base text-gray-600">
                Our support team is here for you 24/7
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phone Support */}
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Call Us</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Speak with a support agent
                </p>
                <a
                  href="tel:1-800-639-8701"
                  className="text-cyan-600 hover:text-cyan-700 font-semibold text-base"
                >
                  1-800-NEXUS-01
                </a>
              </div>

              {/* Email Support */}
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Email Us</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get help via email
                </p>
                <a
                  href="mailto:admin@nexustel.io"
                  className="text-cyan-600 hover:text-cyan-700 font-semibold text-base"
                >
                  admin@nexustel.io
                </a>
              </div>

              {/* Live Chat */}
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-6 text-center text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Live Chat</h3>
                <p className="text-sm text-cyan-100 mb-4">
                  Chat with us instantly
                </p>
                <a
                  href="/contact"
                  className="btn-primary bg-white text-purple-600 hover:bg-gray-100 active:scale-95 transition-transform text-sm px-6 py-2 inline-block"
                >
                  Start Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How to activate eSIM?",
                a: "To activate your eSIM, open your device settings, go to Cellular/Mobile Data, tap 'Add Cellular Plan', and scan the QR code we sent you. The activation typically completes within minutes.",
              },
              {
                q: "Billing Inquiry - When is my payment due?",
                a: "Your payment is due on the same date each month based on your activation date. You can view your exact due date and payment history in your account dashboard or mobile app.",
              },
              {
                q: "What are the roaming rates?",
                a: "Roaming rates vary by country. Our Unlimited Pro plan includes free roaming in 200+ countries. For other plans, international roaming starts at $5/day for data and $0.25/minute for calls. Check our coverage page for specific country rates.",
              },
              {
                q: "Can I keep my current phone number?",
                a: "Yes! You can port your existing number to Nexus Telecom at no additional charge. The process typically takes 24-48 hours and can be initiated during signup or anytime after activation.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-cyan-400 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
