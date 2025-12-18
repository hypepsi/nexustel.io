import Link from "next/link";
import { 
  Smartphone, 
  Wifi, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  Users,
  MapPin,
  Globe
} from "lucide-react";
import { HOMEPAGE_PLANS } from "@/lib/constants";

// Icon mapping
const iconMap = {
  Smartphone,
  Wifi,
  Zap,
  Globe,
};

export default function Home() {
  const trustFeatures = [
    {
      icon: Shield,
      stat: "99.9%",
      label: "Network Uptime"
    },
    {
      icon: Users,
      stat: "1M+",
      label: "Happy Customers"
    },
    {
      icon: CheckCircle,
      stat: "$0",
      label: "Hidden Fees"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Lifestyle/Connectivity Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[600px] flex items-center">
        {/* Couple Using Phone - Lifestyle Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            alt="People connecting with premium 5G"
            className="w-full h-full object-cover"
          />
          {/* CRITICAL: Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl text-balance">
              Premium 5G. Unbelievable Price.
            </h1>
            <p className="text-xl text-slate-200 font-normal mb-10 leading-relaxed drop-shadow-lg">
              Plans start at just <span className="text-cyan-400 font-semibold">$15/mo</span>. No contracts. No hidden fees. 5G included for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/mobile"
                className="bg-white text-slate-900 hover:bg-cyan-50 flex items-center space-x-2 group shadow-2xl text-lg px-8 py-4 rounded-lg font-semibold active:scale-95 transition-all hover:scale-105"
              >
                <span>View Plans</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/business"
                className="bg-white text-slate-900 hover:bg-cyan-50 shadow-xl text-lg px-8 py-4 rounded-lg font-semibold active:scale-95 transition-all hover:scale-105"
              >
                Business Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-gradient-to-r from-cyan-500 to-purple-600 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-4 text-white text-center">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <p className="text-base font-medium">Trusted by over <span className="text-lg font-bold">1 million</span> locals in Denver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Plans Section - FIXED LAYOUT */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Best Selling Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your lifestyle. Switch or cancel anytime.
            </p>
          </div>

          {/* Fixed: Added pt-8 for badge clearance and items-stretch for equal height */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto pt-8 items-stretch">
            {HOMEPAGE_PLANS.map((plan) => {
              const Icon = iconMap[plan.icon as keyof typeof iconMap];
              return (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-2xl overflow-visible transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full ${
                    plan.highlight 
                      ? 'border-2 border-transparent ring-2 ring-cyan-500 ring-offset-4 shadow-xl scale-105' 
                      : 'border border-slate-200 hover:border-cyan-400'
                  }`}
                >
                  {/* Premium Badge - FIXED: proper positioning with w-max */}
                  {plan.highlight && plan.badge && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 w-max">
                      <div className="bg-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  
                  {/* Content wrapper with flex-grow to push button down */}
                  <div className={`p-6 flex-1 flex flex-col ${plan.highlight ? 'pt-8' : ''}`}>
                    {/* Icon with circular background */}
                    <div className="flex justify-center mb-6">
                      <div className="bg-blue-100 p-4 rounded-full">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center mb-6">{plan.subtitle}</p>

                    {/* Price */}
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center">
                        <span className="text-xl font-bold text-gray-500">$</span>
                        <span className="text-5xl font-extrabold text-slate-900">{plan.priceString}</span>
                        <span className="text-lg text-gray-500 ml-1">/mo</span>
                      </div>
                      {plan.copy && (
                        <p className="text-xs text-gray-500 mt-2">{plan.copy}</p>
                      )}
                    </div>

                    {/* Features - flex-grow to take available space */}
                    <ul className="space-y-3 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button - mt-auto pushes to bottom */}
                    <Link
                      href={plan.ctaLink}
                      className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 active:scale-95 hover:scale-105 mt-8 ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg'
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legal Disclaimer */}
          <div className="text-center mt-6">
            <p className="text-xs text-slate-400 max-w-3xl mx-auto">
              Taxes and fees included. Prices shown reflect AutoPay discount. Without AutoPay, prices are $5/mo higher. 5G access included at no extra cost. See terms for details.
            </p>
          </div>

          {/* View All Plans Link */}
          <div className="text-center mt-6">
            <Link
              href="/mobile"
              className="inline-flex items-center space-x-2 text-purple-600 font-semibold text-base hover:text-cyan-500 transition-colors"
            >
              <span>See All Mobile Plans</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Map CTA Section */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="text-base font-semibold text-slate-900">Not sure about coverage?</p>
                  <p className="text-sm text-gray-600">See our 5G map and check your area</p>
                </div>
              </div>
              <Link
                href="/coverage"
                className="btn-primary btn-outline active:scale-95 transition-all hover:scale-105 whitespace-nowrap"
              >
                Check Coverage in Denver
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Why Choose Nexus?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Join millions of satisfied customers nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {trustFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-purple-600" />
                </div>
                <div className="text-4xl font-extrabold text-slate-900 mb-2">
                  {feature.stat}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {feature.label}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Trust Points */}
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "No annual contracts - cancel anytime",
                "Same-day eSIM activation available",
                "24/7 US-based customer support",
                "Money-back guarantee within 30 days"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
              Ready to Save on Your Phone Bill?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-normal">
              Switch to Nexus Telecom today and start saving. No hidden fees, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mobile"
                className="btn-primary btn-solid text-base px-8 py-3 active:scale-95 transition-all hover:scale-105"
              >
                Get Started Now
              </Link>
              <Link
                href="/contact"
                className="btn-primary bg-white text-slate-900 hover:bg-gray-100 text-base px-8 py-3 active:scale-95 transition-all hover:scale-105"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
