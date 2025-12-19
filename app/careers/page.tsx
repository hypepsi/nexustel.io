import { Briefcase, MapPin, Clock, ArrowRight, Users, Zap, Shield, Heart } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  const benefits = [
    {
      icon: Zap,
      title: "Competitive Salary",
      description: "We offer competitive compensation packages that reflect your skills and experience.",
    },
    {
      icon: Shield,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and generous PTO to help you maintain balance.",
    },
    {
      icon: Users,
      title: "Growth Opportunities",
      description: "Continuous learning and development programs to advance your career.",
    },
  ];

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Denver, CO / Remote",
      type: "Full-time",
      description: "Build and scale our next-generation telecom platform using modern technologies.",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Denver, CO",
      type: "Full-time",
      description: "Help our customers succeed and ensure they have the best experience possible.",
    },
    {
      title: "Network Engineer",
      department: "Infrastructure",
      location: "Denver, CO",
      type: "Full-time",
      description: "Design and maintain our nationwide 5G and fiber network infrastructure.",
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Drive growth through creative marketing campaigns and brand development.",
    },
    {
      title: "Sales Representative",
      department: "Sales",
      location: "Denver, CO / Remote",
      type: "Full-time",
      description: "Connect customers with the perfect connectivity solutions for their needs.",
    },
    {
      title: "Technical Support Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      description: "Provide exceptional technical support to our customers via phone, chat, and email.",
    },
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Join the <span className="gradient-text">Nexus Team</span>
            </h1>
            <p className="text-lg text-slate-200 font-normal mb-8">
              Help us revolutionize the telecom industry. We're looking for passionate, 
              innovative people to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Why Work at Nexus?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              We're building something special, and we want you to be part of it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Open Positions
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities to join our team
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Briefcase className="w-5 h-5 text-cyan-600" />
                      <h3 className="text-xl font-bold text-slate-900">
                        {position.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <span className="text-cyan-600 font-semibold">{position.department}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {position.description}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-primary btn-outline flex items-center space-x-2 whitespace-nowrap active:scale-95 transition-transform"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See a Role Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Don't See a Role That Fits?
            </h2>
            <p className="text-base text-gray-600 mb-8">
              We're always looking for talented individuals. Send us your resume and 
              we'll keep you in mind for future opportunities.
            </p>
            <Link
              href="/contact"
              className="btn-primary btn-solid inline-flex items-center space-x-2 active:scale-95 transition-transform"
            >
              <span>Send Us Your Resume</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

