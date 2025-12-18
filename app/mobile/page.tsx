import PricingCard from "../components/PricingCard";
import { Smartphone, Wifi, Globe, Cpu, CheckCircle, Video } from "lucide-react";
import { PLAN_DATA } from "@/lib/constants";

export default function MobilePlans() {
  const highlights = [
    {
      icon: Cpu,
      title: "eSIM Compatible",
      description: "Activate instantly without waiting for a physical SIM card. Compatible with iPhone, Google Pixel, and Samsung Galaxy devices.",
    },
    {
      icon: Smartphone,
      title: "Bring Your Own Phone",
      description: "Keep your current device and save. Our network supports all unlocked phones from major manufacturers.",
    },
    {
      icon: Globe,
      title: "International Roaming",
      description: "Stay connected in over 200 countries with affordable roaming rates or included international data.",
    },
    {
      icon: Video,
      title: "HD/4K Streaming",
      description: "Stream your favorite content in stunning quality without buffering on our high-speed 5G network.",
    },
  ];

  const additionalFeatures = [
    "No annual contracts - cancel anytime",
    "Family plan discounts available",
    "Free 5G device with qualifying plans",
    "Automatic payment discount ($5/month)",
    "Wi-Fi calling and texting",
    "Visual voicemail included",
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Plans built for the way <span className="gradient-text">you live</span>
            </h1>
            <p className="text-lg text-slate-200 font-normal mb-8">
              Starting at just <span className="text-cyan-400 font-bold">$15/mo</span>. 
              Choose from flexible mobile plans with unlimited options, 5G speeds, 
              and no hidden fees. Switch plans or cancel anytime.
            </p>
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">No annual contracts required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid - FIXED: pt-8 for badge and items-stretch for alignment */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pt-8 items-stretch">
            {PLAN_DATA.map((plan) => (
              <PricingCard 
                key={plan.id} 
                title={plan.title}
                price={plan.price}
                dataAmount={plan.dataAmount}
                features={plan.features}
                highlight={plan.highlight}
                badge={plan.badge}
                copy={plan.copy}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-4xl mx-auto shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-slate-50 to-white rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-100 to-purple-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Why Choose Nexus Mobile?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Experience the freedom of modern mobile connectivity at unbelievable prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <highlight.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Coverage Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <Wifi className="w-14 h-14 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Nationwide 5G Coverage
            </h2>
            <p className="text-base text-cyan-100 mb-8 max-w-2xl mx-auto font-normal">
              Our network covers 99% of Americans with ultra-fast 5G and reliable 4G LTE. 
              Check your address for exact coverage details.
            </p>
            <a
              href="/coverage"
              className="btn-primary bg-white text-purple-600 hover:bg-gray-100 active:scale-95 transition-all hover:scale-105 inline-block"
            >
              Check Coverage Map
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I keep my current phone number?",
                a: "Yes! You can transfer your existing number to Nexus Telecom at no additional charge. The process typically takes less than 24 hours.",
              },
              {
                q: "What happens if I exceed my data limit?",
                a: "On limited data plans, your speeds will be reduced to 2G after you use your high-speed data. Unlimited plans have no data caps.",
              },
              {
                q: "Do you offer family or multi-line discounts?",
                a: "Yes! Save up to $20 per line when you add 2 or more lines to your account. Contact us for custom family plans.",
              },
              {
                q: "Is there a contract or cancellation fee?",
                a: "No contracts required! You can cancel your service anytime without any penalties or cancellation fees.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 hover:border-cyan-400 hover:shadow-md transition-all duration-300"
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
