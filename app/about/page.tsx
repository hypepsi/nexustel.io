import { Building2, Users, Target, Award, Heart, Globe, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our customers.",
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "No hidden fees, no surprises. What you see is what you pay.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible with connectivity.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service and support.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description: "Nexus Telecom was founded with a mission to make premium connectivity affordable for everyone.",
    },
    {
      year: "2021",
      title: "First 100K Customers",
      description: "Reached our first milestone of 100,000 satisfied customers across the United States.",
    },
    {
      year: "2023",
      title: "5G Network Expansion",
      description: "Launched nationwide 5G coverage, reaching 99% of the US population.",
    },
    {
      year: "2024",
      title: "1 Million Customers",
      description: "Celebrated serving over 1 million customers with reliable, affordable connectivity.",
    },
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              About <span className="gradient-text">Nexus Telecom</span>
            </h1>
            <p className="text-lg text-slate-200 font-normal mb-8">
              We're on a mission to make premium 5G and fiber connectivity accessible to everyone, 
              without the premium price tag.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Building2 className="w-16 h-16 text-cyan-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Nexus Telecom, we believe that high-speed, reliable connectivity should be a right, 
                not a luxury. We're disrupting the telecom industry by offering premium 5G and fiber 
                services at half the cost of traditional providers, with no contracts, no hidden fees, 
                and no compromises on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Our Values
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Our Journey
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl px-6 py-3 text-center min-w-[120px]">
                    <div className="text-2xl font-bold">{milestone.year}</div>
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                By The Numbers
              </h2>
              <p className="text-cyan-100 max-w-2xl mx-auto">
                Our impact in numbers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-center">
                <Users className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">1M+</div>
                <div className="text-sm text-cyan-100">Happy Customers</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-center">
                <Globe className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">99%</div>
                <div className="text-sm text-cyan-100">US Coverage</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-center">
                <Award className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm text-cyan-100">Uptime</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 text-center">
                <Heart className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">4.8/5</div>
                <div className="text-sm text-cyan-100">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Join the Nexus Family
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience the difference that customer-first service makes. 
              Join over 1 million satisfied customers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mobile"
                className="btn-primary btn-solid active:scale-95 transition-transform"
              >
                View Plans
              </Link>
              <Link
                href="/contact"
                className="btn-primary btn-outline active:scale-95 transition-transform"
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

