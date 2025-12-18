"use client";

import dynamic from "next/dynamic";
import { MapPin, Search, CheckCircle, Wifi } from "lucide-react";

// Dynamic import for Leaflet (needs window object)
const CoverageMap = dynamic(() => import("@/app/components/CoverageMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-900 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
        <p className="text-sm">Loading Interactive Map...</p>
      </div>
    </div>
  ),
});

export default function Coverage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              5G Coverage Map
            </h1>
            <p className="text-lg text-slate-200 font-normal mb-4">
              Explore our nationwide 5G network coverage. Zoom and pan to check availability in your area.
            </p>
            {/* Live Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500 rounded-full px-4 py-2 text-green-400 text-sm font-semibold">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Live Network Status: Optimal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: "80vh" }}>
            {/* The Interactive Map */}
            <CoverageMap />

            {/* Floating Search Bar - On Top of Map */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-[1000]">
              <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter your address to check coverage..."
                    className="flex-1 outline-none text-slate-900 placeholder-slate-400 text-base bg-transparent"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg active:scale-95 transition-all">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Legend - Bottom Left - On Top of Map */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 z-[1000]">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Coverage Legend</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
                  <span className="text-xs text-slate-700">5G Ultra Wideband</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                  <span className="text-xs text-slate-700">5G Nationwide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-slate-400"></div>
                  <span className="text-xs text-slate-700">4G LTE</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200">
                <p className="text-xs text-slate-600">
                  <span className="font-semibold">Tip:</span> Click on circles for details
                </p>
              </div>
            </div>

            {/* Current Location Badge - Top Right */}
            <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-xl flex items-center space-x-2 border border-white/20 z-[1000]">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Denver, CO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Status Banner */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white mb-10 shadow-xl">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <CheckCircle className="w-12 h-12" />
                <div>
                  <h2 className="text-2xl font-bold">Great News!</h2>
                  <p className="text-green-100">5G Ultra Wideband is Available</p>
                </div>
              </div>
              <p className="text-center text-lg">
                Current Status: <span className="font-bold">5G Ultra Wideband is available in Denver, CO</span>
              </p>
            </div>

            {/* Coverage Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">5G Ultra Wideband</h3>
                <p className="text-sm text-gray-600">Fastest speeds available</p>
                <p className="text-xs text-green-600 font-semibold mt-2">✓ Available</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">5G Nationwide</h3>
                <p className="text-sm text-gray-600">Broad coverage area</p>
                <p className="text-xs text-green-600 font-semibold mt-2">✓ Available</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">4G LTE</h3>
                <p className="text-sm text-gray-600">Reliable backup network</p>
                <p className="text-xs text-green-600 font-semibold mt-2">✓ Available</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-10 bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What This Means for You</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Download speeds up to 4 Gbps in 5G Ultra Wideband areas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Stream 4K video without buffering</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Ultra-low latency for gaming and video calls</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Seamless handoff to 5G Nationwide when you travel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience 5G?
            </h2>
            <p className="text-base text-cyan-100 mb-8 max-w-2xl mx-auto font-normal">
              Choose a plan starting at just $15/mo and start enjoying ultra-fast speeds today. No contracts, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/mobile"
                className="btn-primary bg-white text-purple-600 hover:bg-gray-100 active:scale-95 transition-all hover:scale-105"
              >
                View Mobile Plans
              </a>
              <a
                href="/contact"
                className="btn-primary bg-transparent border-2 border-white text-white hover:bg-white/10 active:scale-95 transition-all hover:scale-105"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
