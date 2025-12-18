// Single Source of Truth for Plan Data - AGGRESSIVE DISRUPTOR PRICING
export const PLAN_DATA = [
  {
    id: "starter",
    icon: "Smartphone",
    title: "Mobile Starter",
    subtitle: "5GB 5G Data",
    price: 15,
    priceString: "15",
    dataAmount: "5GB High-Speed 5G",
    features: [
      "5GB of 5G/4G LTE Data",
      "Unlimited Talk & Text",
      "Mobile Hotspot Included",
      "Nationwide Coverage",
      "5G Included for Free",
    ],
    cta: "Get It",
    ctaLink: "/mobile",
    highlight: false,
    badge: undefined,
    copy: "Perfect for light users",
  },
  {
    id: "unlimited",
    icon: "Zap",
    title: "Unlimited Plus",
    subtitle: "Unlimited Data + Hotspot",
    price: 29,
    priceString: "29",
    dataAmount: "Unlimited 5G Data",
    features: [
      "Unlimited 5G/4G LTE Data",
      "Unlimited Talk & Text",
      "15GB Premium Hotspot",
      "HD Video Streaming",
      "International Texting",
      "Canada & Mexico Coverage",
    ],
    cta: "Go Unlimited",
    ctaLink: "/mobile",
    highlight: true,
    badge: "Best Value",
    copy: "Our most popular plan",
  },
  {
    id: "elite",
    icon: "Globe",
    title: "Global Elite",
    subtitle: "Unlimited + Int'l Roaming",
    price: 45,
    priceString: "45",
    dataAmount: "Unlimited Premium 5G",
    features: [
      "Unlimited Premium 5G Data",
      "Priority Network Access",
      "50GB Premium Hotspot",
      "4K UHD Video Streaming",
      "International Roaming (200+ Countries)",
      "In-Flight Wi-Fi Included",
      "Premium Customer Support",
    ],
    cta: "Get Elite",
    ctaLink: "/mobile",
    highlight: false,
    badge: undefined,
    copy: "For global travelers",
  },
] as const;

// Homepage featured plans (subset for hero/pricing section)
export const HOMEPAGE_PLANS = [
  PLAN_DATA[0], // Mobile Starter - $15
  PLAN_DATA[1], // Unlimited Plus - $29 (center, highlighted)
  {
    ...PLAN_DATA[0],
    id: "fiber",
    icon: "Wifi",
    title: "Home Fiber",
    subtitle: "1Gbps Speed",
    price: 39,
    priceString: "39",
    dataAmount: "1 Gbps Symmetrical",
    features: [
      "Symmetrical 1 Gbps",
      "Unlimited Data",
      "Free Installation",
      "No Equipment Fees",
      "Wi-Fi 6 Router Included",
    ],
    cta: "Check Availability",
    ctaLink: "/coverage",
    highlight: false,
    badge: undefined,
    copy: "Blazing fast fiber",
  }
] as const;

// Contact Information
export const CONTACT_INFO = {
  phone: "1-800-NEXUS-01",
  phoneNumber: "1-800-639-8701",
  email: "admin@nexustel.io",
  address: {
    street: "1312 17TH ST UNIT 2604",
    city: "Denver",
    state: "CO",
    zip: "80202",
  },
} as const;
