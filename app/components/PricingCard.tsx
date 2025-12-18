import Link from "next/link";
import { CheckCircle, Zap } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: number;
  dataAmount: string;
  features: readonly string[];
  highlight?: boolean;
  badge?: string;
  copy?: string;
}

export default function PricingCard({
  title,
  price,
  dataAmount,
  features,
  highlight = false,
  badge,
  copy,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl overflow-visible transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full ${
        highlight
          ? "border-2 border-transparent ring-2 ring-cyan-500 ring-offset-4 shadow-xl scale-105"
          : "border border-slate-200 hover:border-cyan-400"
      }`}
    >
      {/* Premium Badge - FIXED: w-max prevents text clipping */}
      {highlight && badge && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 w-max">
          <div className="bg-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
            {badge}
          </div>
        </div>
      )}

      {/* Content wrapper - flex-1 to allow flex-grow for button alignment */}
      <div className={`p-6 flex-1 flex flex-col ${highlight ? "pt-8" : ""}`}>
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-cyan-100 to-purple-100 p-4 rounded-full">
            <Zap className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 text-center mb-6">{dataAmount}</p>

        {/* Price */}
        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center">
            <span className="text-xl font-bold text-gray-500">$</span>
            <span className="text-5xl font-extrabold text-slate-900">{price}</span>
            <span className="text-lg text-gray-500 ml-1">/mo</span>
          </div>
          {copy && (
            <p className="text-xs text-gray-500 mt-2">{copy}</p>
          )}
        </div>

        {/* Features - flex-grow pushes button to bottom */}
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button - stays at bottom due to flex-grow above */}
        <Link
          href="/mobile"
          className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 active:scale-95 hover:scale-105 ${
            highlight
              ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {highlight ? "Choose Plan" : "Get Started"}
        </Link>
      </div>
    </div>
  );
}
