export const agencyInfo = {
  name: "NEXOVA",
  legalName: "NEXOVA Digital Dynamics Ltd.",
  tagline: "We Engineer High-Impact Digital Experiences That Scale Enterprise Growth.",
  heroSub: "A high-caliber team of product strategists, UI/UX architects, and senior engineers crafting breakthrough software, AI tools, and digital platforms for tomorrow's market leaders.",
  email: "hello@nexovadigital.io",
  phone: "+1 (800) 420-9821 / +62 21 5088 9200",
  location: "Jakarta • Singapore • San Francisco",
  stats: [
    { label: "Client Revenue Generated", value: "$180M+", sub: "across 90+ releases" },
    { label: "Average Performance Boost", value: "3.4x", sub: "speed & conversion" },
    { label: "Global Design & Tech Awards", value: "48+", sub: "Awwwards, FWA, RedDot" },
    { label: "On-Time Delivery Rate", value: "99.4%", sub: "guaranteed sprints" }
  ],
  trustedBrands: [
    "ACME CAPITAL", "HYPERION TECH", "VERTEX CLOUD", "LUMINAIRE", 
    "CYBERNECTA", "STRATA CORP", "AETHER AI", "NOVUS HEALTH"
  ]
};

export const servicesData = [
  {
    id: "product-design",
    icon: "LayoutGrid",
    title: "Product Architecture & UI/UX",
    summary: "Human-centered interfaces engineered for conversion, delight, and effortless enterprise adoption.",
    deliverables: [
      "User Journey & Information Architecture",
      "Interactive High-Fidelity Figma Prototypes",
      "Multi-Brand Design Systems & Tokens",
      "Usability Testing & Conversion Audits"
    ],
    metric: "4.8/5 Avg. User Adoption Score"
  },
  {
    id: "engineering",
    icon: "Code2",
    title: "Full-Stack Web & Mobile Systems",
    summary: "Production-ready architectures built with modern React, Next.js, TypeScript, and resilient microservices.",
    deliverables: [
      "Reactive Enterprise Web Platforms",
      "Cross-Platform Native Mobile Apps",
      "Headless CMS & High-Volume E-Commerce",
      "REST & GraphQL Microservices Architecture"
    ],
    metric: "99.99% Reliability Guarantee"
  },
  {
    id: "ai-systems",
    icon: "Cpu",
    title: "Enterprise AI & Autonomous Agents",
    summary: "Custom LLM integrations, retrieval systems (RAG), and workflow automation that give your business unfair leverage.",
    deliverables: [
      "Custom RAG & Enterprise Knowledge Engines",
      "Autonomous Multi-Agent Copilots",
      "Model Fine-Tuning & Prompt Pipelines",
      "Security & AI Observability Telemetry"
    ],
    metric: "12x Process Efficiency Boost"
  },
  {
    id: "cloud-devops",
    icon: "Server",
    title: "Cloud Infrastructure & DevOps",
    summary: "Zero-downtime CI/CD pipelines, Kubernetes orchestration, and autoscaling cloud infrastructure on AWS/GCP.",
    deliverables: [
      "Automated GitOps & CI/CD Pipelines",
      "Multi-Region Autoscaling Clusters",
      "SOC2 & GDPR Compliance Hardening",
      "24/7 Threat Monitoring & Uptime"
    ],
    metric: "<25ms Global Edge Latency"
  },
  {
    id: "brand-motion",
    icon: "Sparkles",
    title: "Brand Identity & Motion Systems",
    summary: "Visual storytelling, custom 3D web graphics, and micro-interactions that leave competitors in the dust.",
    deliverables: [
      "Comprehensive Visual Identity & Guidelines",
      "Interactive 3D / WebGL Visual Assets",
      "Motion Design & Component Micro-Animations",
      "Marketing Collateral & Pitch Decks"
    ],
    metric: "Top 1% Visual Distinction"
  },
  {
    id: "growth-optimization",
    icon: "TrendingUp",
    title: "Speed & Performance Optimization",
    summary: "Auditing, refactoring, and optimizing critical user flows to maximize Core Web Vitals and organic SEO rank.",
    deliverables: [
      "Core Web Vitals 95+ Audit & Fixes",
      "Technical SEO Architecture & Schema",
      "Conversion Rate Optimization (CRO)",
      "Real-time Telemetry & Performance Tracking"
    ],
    metric: "+140% Organic Lead Lift"
  }
];

export const portfolioProjects = [
  {
    id: "vancepay",
    category: "fintech",
    title: "VancePay Next-Gen Wealth & Debit",
    client: "VancePay Inc. (London)",
    year: "2026",
    image: "/images/project-fintech.jpg",
    metric: "+320% User Signups & $45M Processed",
    summary: "A sleek, biometric-enabled fintech mobile ecosystem featuring real-time yield analytics, contactless virtual cards, and instant cross-border liquidity.",
    tags: ["Fintech", "Mobile App", "React Native", "FinOps", "Biometrics"],
    challenge: "VancePay needed to break through a crowded neobank market with an interface that felt both futuristic and trustworthy.",
    solution: "We designed a dark glassmorphic UI with micro-haptic feedback, real-time charts, and sub-second transaction routing.",
    impact: "Secured $14M Series A funding and reached #3 in the UK App Store finance category in under 6 weeks."
  },
  {
    id: "nexus-ai",
    category: "ai",
    title: "Nexus Cognition Neural Observability",
    client: "Nexus AI Labs (San Francisco)",
    year: "2026",
    image: "/images/project-ai.jpg",
    metric: "14.2x Faster Inference & 99.98% Uptime",
    summary: "An enterprise telemetry workstation designed for machine learning teams to track token efficiency, node health, and model latency in real-time.",
    tags: ["Enterprise AI", "Data Viz", "React 19", "High-Volume Telemetry"],
    challenge: "Complex multi-cluster neural networks lacked a cohesive visual cockpit for ops engineers.",
    solution: "Engineered a high-performance WebGL graph visualizer capable of rendering 100,000+ real-time node connections at 60 FPS.",
    impact: "Adopted by 3 Fortune 500 tech teams within the first quarter of deployment."
  },
  {
    id: "luminaire",
    category: "ecommerce",
    title: "Luminaire Noire Flagship Experience",
    client: "Luminaire Luxury Group (Paris)",
    year: "2025",
    image: "/images/project-ecommerce.jpg",
    metric: "+185% Conversion & 4.2 Min Avg. Session",
    summary: "An ultra-minimalist digital atelier celebrating haute horlogerie with editorial layouts, dynamic product reveals, and VIP concierge integration.",
    tags: ["Luxury Commerce", "Headless Shopify", "WebGL 3D", "Editorial"],
    challenge: "Traditional luxury e-commerce felt cold and clunky on mobile devices.",
    solution: "Created an immersive cinematic shopping experience with smooth scroll transitions and personalized curated showrooms.",
    impact: "Generated €8.4M in direct-to-consumer sales during the opening season."
  },
  {
    id: "cybernecta",
    category: "saas",
    title: "CyberNecta Global Analytics Portal",
    client: "CyberNecta Group (Singapore)",
    year: "2026",
    image: "/images/hero-preview.jpg",
    metric: "$2.87M Portfolio Managed Daily",
    summary: "A unified financial risk engine and portfolio allocation portal built for institutional traders and family offices.",
    tags: ["SaaS Platform", "Financial Dashboard", "Design System", "Cloud Ops"],
    challenge: "Disparate legacy trading data created cognitive overload and delayed crucial risk decisions.",
    solution: "Built a modular dashboard with customizable widgets, real-time volatility index alerts, and automated rebalancing recommendations.",
    impact: "Reduced risk computation turnaround from 4 hours to instantaneous live updates."
  }
];

export const processSteps = [
  {
    step: "01",
    name: "Discovery & Strategic Blueprint",
    timeframe: "Week 1",
    desc: "We analyze your target market, benchmark competitive threats, define product KPIs, and map every user persona."
  },
  {
    step: "02",
    name: "Interactive Prototyping & UX",
    timeframe: "Week 2 - 3",
    desc: "Rapid clickable prototypes in Figma. We stress-test interactions and lock down the design tokens before writing a single line of code."
  },
  {
    step: "03",
    name: "Agile Engineering & Sprints",
    timeframe: "Week 4 - 8",
    desc: "Bi-weekly sprint reviews with working staging links. Clean modular code, comprehensive automated tests, and continuous integration."
  },
  {
    step: "04",
    name: "Hardening, Launch & Scaled Growth",
    timeframe: "Week 9+",
    desc: "Rigorous load tests, security penetration checks, SEO audits, and production launch followed by post-release telemetry."
  }
];

export const estimatorConfig = {
  projectTypes: [
    { id: "webapp", name: "Modern Web App / SaaS Platform", baseUSD: 7500, baseIDR: 115000000, weeks: 5 },
    { id: "mobile", name: "Cross-Platform Mobile App (iOS & Android)", baseUSD: 9500, baseIDR: 145000000, weeks: 6 },
    { id: "ai", name: "AI Agent & Automated Workflow System", baseUSD: 8500, baseIDR: 130000000, weeks: 4 },
    { id: "corporate", name: "Enterprise Flagship Portal & Rebrand", baseUSD: 6000, baseIDR: 90000000, weeks: 4 }
  ],
  features: [
    { id: "design-system", name: "Custom Design System & Figma UI Kit", costUSD: 1800, costIDR: 28000000, addWeeks: 1 },
    { id: "api-backend", name: "Custom API & Third-Party System Integration", costUSD: 2400, costIDR: 37000000, addWeeks: 1.5 },
    { id: "security-compliance", name: "SOC2/GDPR Security Hardening & Pentest", costUSD: 2000, costIDR: 30000000, addWeeks: 1 },
    { id: "seo-cro", name: "Core Web Vitals 95+ & Conversion Optimization", costUSD: 1200, costIDR: 18000000, addWeeks: 0.5 },
    { id: "cms-admin", name: "Headless CMS & Custom Admin Dashboard", costUSD: 1600, costIDR: 25000000, addWeeks: 1 }
  ],
  speeds: [
    { id: "standard", name: "Standard Agile Delivery", multiplier: 1.0, weekMod: 0, tag: "Optimal Balance" },
    { id: "express", name: "Sprint Express Priority (Dedicated Squad)", multiplier: 1.25, weekMod: -0.3, tag: "Fastest Time-To-Market" }
  ]
};

export const testimonials = [
  {
    name: "Elena Rostova",
    role: "VP of Product",
    company: "FinEdge Global (Zurich)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
    quote: "NEXOVA delivered our flagship banking app 2 weeks ahead of our board deadline. The visual polish and micro-interactions blew our investors away.",
    stars: 5,
    highlight: "2 Weeks Ahead of Schedule"
  },
  {
    name: "Marcus Thorne",
    role: "Chief Innovation Officer",
    company: "Aetheria Systems (Austin, TX)",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80",
    quote: "Finding an agency that masters both bleeding-edge AI workflows and jaw-dropping UI is nearly impossible. NEXOVA is in a tier of their own.",
    stars: 5,
    highlight: "Unmatched Technical Excellence"
  },
  {
    name: "Sarah Chen",
    role: "Founder & Creative Director",
    company: "Luminaire Noire (Paris)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
    quote: "The bounce rate on our flagship store dropped by 42% on the first day of launch. Our customers constantly praise the fluidity of the interface.",
    stars: 5,
    highlight: "-42% Bounce Rate in 24 Hours"
  }
];

export const faqItems = [
  {
    q: "How fast can NEXOVA onboard and kick off our project?",
    a: "We typically initiate discovery workshops within 3 to 5 business days after proposal approval. For urgent sprint requirements, our Express Squad can mobilize within 48 hours."
  },
  {
    q: "Do we retain 100% intellectual property of all designs and code?",
    a: "Yes, absolutely. Once final deliverables are approved and milestones concluded, all Figma files, GitHub repositories, assets, and documentation belong exclusively to your company."
  },
  {
    q: "How do you handle project management and communication?",
    a: "We provide your team with a dedicated Slack channel, weekly live sprint demos, and real-time Notion/Linear project boards so you always have full visibility."
  },
  {
    q: "Can you provide post-launch support and continuous iterations?",
    a: "Yes, we offer ongoing Retainer SLAs covering 24/7 infrastructure monitoring, feature roadmaps, A/B testing, and continuous Core Web Vitals optimization."
  }
];
