import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Radio } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Mobile Plans", href: "/mobile" },
        { label: "Home Fiber", href: "/coverage" },
        { label: "Business Solutions", href: "/business" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/support" },
        { label: "Contact Us", href: "mailto:admin@nexustel.io" },
        { label: "Network Status", href: "/status" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Accessibility", href: "/accessibility" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/nexustelecom", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/nexustelecom", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/nexustelecom", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/nexustelecom", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Radio className="w-7 h-7 text-cyan-500" />
              <span className="text-xl font-bold">Nexus</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Premium 5G and fiber connectivity at half the cost. No contracts, no hidden fees.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <a href="tel:1-800-639-8701" className="text-gray-300 hover:text-white transition-colors">
                  1-800-NEXUS-01
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <a href="mailto:admin@nexustel.io" className="text-gray-300 hover:text-white transition-colors">
                  admin@nexustel.io
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-gray-300 leading-relaxed">
                  1312 17TH ST UNIT 2604<br />DENVER CO 80202
                </span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 Nexus Telecom LLC. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
