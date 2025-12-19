"use client";

import { CheckCircle, AlertCircle, Wifi, Activity, TrendingUp, Clock } from "lucide-react";
import { useState } from "react";

export default function Status() {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const services = [
    {
      name: "5G Network",
      status: "operational",
      uptime: "99.9%",
      description: "All 5G services are operating normally",
    },
    {
      name: "4G LTE Network",
      status: "operational",
      uptime: "99.8%",
      description: "All 4G LTE services are operating normally",
    },
    {
      name: "Fiber Internet",
      status: "operational",
      uptime: "99.95%",
      description: "All fiber internet services are operating normally",
    },
    {
      name: "Customer Portal",
      status: "operational",
      uptime: "100%",
      description: "Account management portal is fully operational",
    },
    {
      name: "Payment Processing",
      status: "operational",
      uptime: "99.99%",
      description: "Payment systems are operating normally",
    },
    {
      name: "Customer Support",
      status: "operational",
      uptime: "100%",
      description: "Support channels are available 24/7",
    },
  ];

  const regions = [
    { name: "All Regions", status: "operational" },
    { name: "Denver, CO", status: "operational" },
    { name: "Los Angeles, CA", status: "operational" },
    { name: "New York, NY", status: "operational" },
    { name: "Chicago, IL", status: "operational" },
    { name: "Houston, TX", status: "operational" },
  ];

  const recentIncidents = [
    {
      date: "2025-01-15",
      title: "Scheduled Maintenance - Denver",
      status: "resolved",
      description: "Planned maintenance completed successfully. All services restored.",
    },
    {
      date: "2025-01-10",
      title: "Network Optimization",
      status: "resolved",
      description: "Network optimization completed. Improved speeds in select areas.",
    },
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 font-semibold">All Systems Operational</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Network Status
            </h1>
            <p className="text-lg text-slate-200 font-normal mb-8">
              Real-time status of all Nexus Telecom services and network infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <CheckCircle className="w-12 h-12" />
                <div>
                  <h2 className="text-2xl font-bold">All Systems Operational</h2>
                  <p className="text-green-100">All services are running normally</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center">
                  <Activity className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-green-100">Overall Uptime</div>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-green-100">Active Issues</div>
                </div>
                <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">&lt;1min</div>
                  <div className="text-sm text-green-100">Avg Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Service Status
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Current status of all Nexus Telecom services
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <Wifi className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {service.name}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">Operational</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {service.description}
                </p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Activity className="w-4 h-4" />
                  <span>Uptime: {service.uptime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Status */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Regional Status
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Network status by region
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className={`bg-white border rounded-xl p-4 cursor-pointer transition-all ${
                    selectedRegion === region.name
                      ? "border-cyan-500 shadow-lg"
                      : "border-slate-200 hover:border-cyan-400"
                  }`}
                  onClick={() => setSelectedRegion(region.name)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">{region.name}</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-xs text-gray-600 mt-2">All services operational</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Recent Incidents
            </h2>
            <div className="space-y-4">
              {recentIncidents.map((incident, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-semibold text-green-600 uppercase">
                          {incident.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {incident.title}
                      </h3>
                      <p className="text-sm text-gray-500">{incident.date}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {incident.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

