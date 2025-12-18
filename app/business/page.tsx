import { 
  Building2, 
  Network, 
  Cloud, 
  Shield, 
  Headphones, 
  TrendingUp,
  Users,
  CheckCircle,
  Mail,
  Phone,
  MessageSquare,
  Zap,
  Lock,
  BarChart3
} from "lucide-react";

export default function Business() {
  const solutions = [
    {
      icon: Network,
      title: "Dedicated Fiber Lines",
      description: "Enterprise-grade fiber optic connections with guaranteed bandwidth and symmetrical upload/download speeds. Perfect for data-intensive operations.",
      features: [
        "Up to 10 Gbps speeds",
        "99.99% SLA uptime guarantee",
        "Redundant connections",
        "24/7 monitoring",
      ],
    },
    {
      icon: Zap,
      title: "IoT Connectivity",
      description: "Connect your Internet of Things devices with our specialized IoT network. Low-latency, high-reliability connections for your smart infrastructure.",
      features: [
        "NB-IoT and LTE-M support",
        "Scalable device management",
        "Real-time analytics dashboard",
        "Flexible data plans",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Voice & VoIP",
      description: "Modern cloud-based phone systems that scale with your business. Advanced features without the hardware complexity.",
      features: [
        "Unlimited calling in US/Canada",
        "Auto-attendant & call routing",
        "Mobile & desktop apps",
        "CRM integration",
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "DDoS protection, encrypted connections, and compliance-ready infrastructure",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Priority 24/7 support with a dedicated account manager",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow your connectivity as your business expands",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Centralized billing and user management dashboard",
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "HIPAA, PCI-DSS, and SOC 2 compliant infrastructure",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Detailed usage reports and performance metrics",
    },
  ];

  const industries = [
    "Healthcare & Medical",
    "Financial Services",
    "Retail & E-commerce",
    "Manufacturing",
    "Education",
    "Hospitality",
    "Real Estate",
    "Technology",
  ];

  return (
    <main className="min-h-screen pt-16 bg-white">
      {/* Hero Section - 2 Column Layout (Left Text, Right Visual) */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text (Left Aligned) */}
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-100 to-purple-100 px-4 py-2 rounded-full mb-6">
                <Building2 className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-slate-900">
                  Enterprise Solutions
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Enterprise-Grade Connectivity for Your{" "}
                <span className="gradient-text">Business</span>
              </h1>
              <p className="text-base text-gray-600 mb-8 leading-relaxed font-normal">
                Power your business with reliable, high-speed connectivity solutions. 
                From dedicated fiber lines to IoT and cloud voice services, we provide 
                the infrastructure your business needs to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="btn-primary btn-solid active:scale-95 transition-transform"
                >
                  Talk to an Expert
                </a>
                <a
                  href="#solutions"
                  className="btn-primary btn-outline active:scale-95 transition-transform"
                >
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Right Column - Visual Stats */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
                    <Network className="w-8 h-8 mb-3" />
                    <div className="text-2xl font-bold">10 Gbps</div>
                    <div className="text-sm text-cyan-100">Max Speed</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
                    <Shield className="w-8 h-8 mb-3" />
                    <div className="text-2xl font-bold">99.99%</div>
                    <div className="text-sm text-cyan-100">SLA Uptime</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
                    <Users className="w-8 h-8 mb-3" />
                    <div className="text-2xl font-bold">5000+</div>
                    <div className="text-sm text-cyan-100">Businesses</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-white">
                    <Headphones className="w-8 h-8 mb-3" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-cyan-100">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Business Solutions
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive connectivity solutions designed for modern businesses
            </p>
          </div>

          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-slate-200 rounded-2xl p-8 md:p-10 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-slate-900 mb-4 text-sm">Key Features:</h4>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Why Businesses Choose Nexus
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              We understand what businesses need to stay competitive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">
                Trusted by Leading Industries
              </h2>
              <p className="text-base text-gray-300 max-w-2xl mx-auto font-normal">
                We serve businesses across diverse sectors with specialized connectivity solutions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 active:scale-95"
                >
                  <span className="font-semibold text-sm">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - 2 Column Layout */}
      <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Talk to an Expert
              </h2>
              <p className="text-base text-gray-600">
                Let us help you find the perfect connectivity solution for your business
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Call Us</h3>
                      <p className="text-gray-600 text-sm">1-800-NEXUS-BIZ</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    Monday - Friday: 8am - 8pm EST<br />
                    Saturday: 9am - 5pm EST
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Email Us</h3>
                      <p className="text-gray-600 text-sm">business@nexustelecom.com</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    We'll respond within 2 business hours
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">Live Chat</h3>
                      <p className="text-gray-600 text-sm">Chat with an expert now</p>
                    </div>
                  </div>
                  <button className="btn-primary btn-solid w-full active:scale-95 transition-transform">
                    Start Chat
                  </button>
                </div>
              </div>

              {/* Form Placeholder */}
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Company Name</label>
                    <div className="bg-white/20 backdrop-blur-lg rounded-lg p-3 border border-white/30">
                      <span className="text-white/60 text-sm">Enter your company name</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <div className="bg-white/20 backdrop-blur-lg rounded-lg p-3 border border-white/30">
                      <span className="text-white/60 text-sm">your.email@company.com</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <div className="bg-white/20 backdrop-blur-lg rounded-lg p-3 border border-white/30">
                      <span className="text-white/60 text-sm">(555) 123-4567</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Solution Interest</label>
                    <div className="bg-white/20 backdrop-blur-lg rounded-lg p-3 border border-white/30">
                      <span className="text-white/60 text-sm">Select a solution</span>
                    </div>
                  </div>
                  <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all mt-6 active:scale-95">
                    Submit Request
                  </button>
                  <p className="text-xs text-white/80 text-center">
                    By submitting, you agree to our Terms & Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
