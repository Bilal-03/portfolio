export interface VerifiedMetric {
  label: string;
  value: string;
  source: string;
}

export type PrimaryCategory = "product" | "ai" | "analytics";

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  primaryCategory: PrimaryCategory;
  categoryLabel: string;
  tags: string[];
  summary: string;
  problem: string;
  users: string;
  goal: string;
  assumptions: string[];
  decisions: string[];
  flow: string[];
  measurementPlan: string[];
  solution: string;
  technicalNotes: string[];
  improvements: string[];
  poster: string;
  liveUrl?: string;
  repoUrl?: string;
  verifiedMetrics?: VerifiedMetric[];
  year: string;
  featured?: boolean;
  // Executive 3-Pillar summary fields
  executiveProblem?: string;
  executiveSolution?: string;
  keyMetricHighlight?: {
    value: string;
    label: string;
  };
  impactBullets?: string[];
}

export interface RolePerspective {
  id: "pm" | "analytics" | "ai";
  label: string;
  badge: string;
  headline: string;
  description: string;
  highlights: string[];
  recommendedSlugs: string[];
}

export const PROFILE = {
  name: "Bilal Choudhary",
  eyebrow: "Technical Product Manager · AI & Data Systems",
  headline: "Turning complex data and ambiguous problems into high-impact products.",
  subheadline:
    "Product builder with computer science depth in AI & Machine Learning. Experienced in 0-to-1 product discovery, SQL telemetry, and production AI execution to ship products that matter.",
  location: "Based in India",
  availability: "Available for Technical PM, AI Product & Analytics Roles",
  email: "bilal3512@gmail.com",
  linkedin: "https://www.linkedin.com/in/bilal2012/",
  github: "https://github.com/Bilal-03",
  resume: "/Resume.pdf",
};

export const IMPACT_METRICS = [
  {
    value: "0-to-1",
    label: "Marketplace Built",
    detail: "Handovr: 16-point verified transaction flow, escrow payments & 40+ discovery interviews",
    badge: "Product Discovery & 0-to-1",
  },
  {
    value: "+38%",
    label: "Conversion Readiness",
    detail: "Buyer readiness uplift & 28% drop-off reduction via guided verification",
    badge: "Conversion Optimization",
  },
  {
    value: "30,336",
    label: "Listings Modeled",
    detail: "Zomato dining & delivery dataset analyzed with composite Market Opportunity Index",
    badge: "Marketplace Analytics",
  },
  {
    value: "94%+",
    label: "Field Extraction Accuracy",
    detail: "AP invoice OCR extraction pipeline with human-in-the-loop review queue",
    badge: "Applied AI Automation",
  },
];

export const ROLE_PERSPECTIVES: RolePerspective[] = [
  {
    id: "pm",
    label: "Product Manager",
    badge: "0-to-1 Product & Growth",
    headline: "Framing user problems, driving product discovery, and shipping high-leverage solutions.",
    description:
      "I bridge customer pain points, marketplace dynamics, and technical execution — from initial user journey mapping and PRDs to trust mechanisms, verification flows, and metric-driven iteration.",
    highlights: [
      "0-to-1 verified marketplace product architect (Handovr)",
      "Outcome-oriented PRDs, user journey mapping & wireframing",
      "Feature prioritization (RICE/Kano) & unit economics modeling",
    ],
    recommendedSlugs: ["handovr", "bizguide-ai", "netflix-strategy", "karobarkit"],
  },
  {
    id: "analytics",
    label: "Data & Strategy Analyst",
    badge: "Marketplace & Decision Analytics",
    headline: "Uncovering growth white spaces and translating empirical data into executive strategy.",
    description:
      "I turn multi-thousand row datasets into actionable SQL suites, composite opportunity indices, cohort retention models, and executive strategy memos that de-risk business bets.",
    highlights: [
      "30,336 venue dataset modeled with composite Market Opportunity Index",
      "Production SQL suites (CTEs, Window Functions, Partitions, NTILEs)",
      "Cohort economics & feature flywheel ROI quantification",
    ],
    recommendedSlugs: ["zomato-restaurant-intelligence", "dinescope-marketplace-intelligence", "ai-business-analytics-studio"],
  },
  {
    id: "ai",
    label: "Applied AI Builder",
    badge: "Applied AI & Technical Prototyping",
    headline: "Architecting document intelligence, RAG workflows, and predictive ML engines.",
    description:
      "With a B.Tech in CS (AI & Machine Learning), I build and deploy production-grade LLM applications, document extraction pipelines, and interactive predictive simulators.",
    highlights: [
      "Governed product analytics copilot & SQLGlot AST validation (ProductLens)",
      "Multi-agent RAG & compliance guidance workspace (BizGuide AI)",
      "Document OCR & AP invoice extraction pipelines (Techpanion)",
    ],
    recommendedSlugs: ["productlens", "bizguide-ai", "invoice-intelligence"],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "handovr",
    title: "Handovr",
    category: "0-to-1 Marketplace · Trust & Safety · Product Lead",
    primaryCategory: "product",
    categoryLabel: "0-to-1 Marketplace",
    tags: ["0-to-1 Product", "Marketplace", "Trust & Safety", "Escrow UX"],
    summary:
      "Full-stack verified second-hand electronics marketplace in Delhi NCR solving fraud, condition opacity, and unsafe doorstep handovers.",
    executiveProblem:
      "Buying a used phone in Delhi NCR involves severe condition opacity, high fraud risk, and predatory offline haggling, causing over 60% of interested buyers to drop off before transaction completion.",
    executiveSolution:
      "Engineered an end-to-end verified C2C marketplace featuring an objective 16-point hardware inspection workflow, transparent condition logs, and an escrow-oriented payment journey.",
    keyMetricHighlight: {
      value: "+38%",
      label: "Buyer Conversion Readiness",
    },
    impactBullets: [
      "Led 0-to-1 discovery through 40+ user interviews across Delhi NCR to define product roadmaps and PRDs.",
      "Engineered a 16-point hardware check and escrow payment workflow, raising conversion readiness by 38% and reducing negotiation drop-offs by 28%.",
      "Instrumented end-to-end funnel telemetry to diagnose handover bottlenecks, cutting transaction cycle turnaround time by 40%.",
    ],
    problem:
      "Buying and selling used phones involves high transactional friction: severe condition opacity, predatory bargaining, fraudulent payment scams, and unsafe in-person doorstep meetings that leave both parties unprotected.",
    users:
      "P2P buyers and sellers of pre-owned smartphones across Delhi NCR seeking verified hardware condition, fair market pricing, and fraud-free transactions.",
    goal:
      "Eliminate transaction friction by engineering an end-to-end trust layer with a 16-point hardware check and escrow payment protection.",
    assumptions: [
      "Buyers will accept a slight platform fee if hardware condition is objectively certified and warrantied.",
      "Sellers prefer verified escrow handovers over haggling with unpredictable offline strangers.",
      "A standardized doorstep inspection checklist drastically cuts return and dispute rates.",
    ],
    decisions: [
      "Structured a 16-point hardware inspection workflow covering IMEI, battery health, display, and biometric sensors.",
      "Designed an escrow-oriented payment journey holding funds securely until buyer verification.",
      "Developed a doorstep handover coordination flow minimizing coordination drop-offs.",
      "Prioritized MVP launch across high-density Delhi NCR corridors based on 40+ user interviews.",
    ],
    flow: [
      "Listing creation with automated IMEI check and suggested market pricing",
      "Buyer discovery with verified condition badges and transparent wear-and-tear logs",
      "Order commitment with funds held securely in escrow",
      "Doorstep 16-point physical check and instant digital sign-off",
      "Instant seller escrow release upon buyer validation",
    ],
    measurementPlan: [
      "Listing-to-verification completion rate",
      "Buyer conversion readiness uplift (+38% achieved)",
      "Negotiation drop-off rate (-28% achieved)",
      "Doorstep handover turnaround cycle (-40% achieved)",
      "Dispute and return incidence rate (<2% target)",
    ],
    solution:
      "A full-stack verified marketplace built with Next.js, React, and Supabase that connects device checks, transparent market valuation, and escrow payment protection into a single seamless journey.",
    technicalNotes: ["Next.js 15", "React 19", "Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    improvements: [
      "Automate optical hardware diagnostics using computer vision inspection models.",
      "Introduce dynamic pricing suggestions based on real-time second-hand market liquidity.",
      "Expand doorstep verification coverage across Tier-1 metro clusters.",
    ],
    poster: "/project-previews/handovr-home.png",
    liveUrl: "https://handovr.in",
    year: "2026",
    featured: true,
  },
  {
    slug: "bizguide-ai",
    title: "BizGuide AI",
    category: "Applied AI · Multi-Agent RAG · Regulatory Compliance",
    primaryCategory: "ai",
    categoryLabel: "Applied AI Platform",
    tags: ["Multi-Agent RAG", "Pinecone", "Llama 3.3 70B", "FastAPI"],
    summary:
      "Multi-agent RAG compliance workspace delivering document-grounded legal, tax, and business compliance guidance for Indian businesses with 92% citation precision.",
    executiveProblem:
      "Indian SMB founders navigate fragmented, constantly amending statutory regulations across GST, MCA, and labor laws, facing expensive legal retainers and severe hallucination risks from generic LLMs.",
    executiveSolution:
      "Architected a governed multi-agent RAG system on FastAPI and LangChain that routes queries to specialized domain sub-agents, grounding all guidance with exact statutory clause citations.",
    keyMetricHighlight: {
      value: "92%",
      label: "Citation Groundedness",
    },
    impactBullets: [
      "Built a multi-agent RAG platform delivering legal, tax, and compliance guidance using FastAPI, LangChain, and Llama 3.3 70B.",
      "Integrated Pinecone vector database and Gemini embeddings, achieving 92% citation precision against official regulatory PDFs.",
      "Implemented dynamic query routing across specialist sub-agents, handling complex workflows for 100+ simulated businesses without context bleed.",
    ],
    problem:
      "Indian SMBs and founders face complex, fragmented statutory compliance requirements across GST, corporate filings, and labor regulations, with prohibitive legal advisory costs and severe hallucination risks from generic LLMs.",
    users:
      "Indian SMB founders, legal ops teams, and tax consultants requiring verified statutory guidance mapped directly to official government gazettes.",
    goal:
      "Build an auditable compliance assistant that delivers grounded legal answers with exact clause citations and zero cross-domain context bleed.",
    assumptions: [
      "Regulatory accuracy requires strict citation grounding against authoritative government gazettes rather than raw model recall.",
      "Tax, corporate law, and labor statutes require specialized routing sub-agents rather than a monolithic prompt.",
      "Users need structured PDF upload flows with highlighted page-level source previews to verify answers.",
    ],
    decisions: [
      "Engineered dynamic query routing across domain-specific LangChain sub-agents (Tax, MCA, Labor).",
      "Implemented hybrid vector search using Pinecone and Gemini semantic embeddings.",
      "Enforced deterministic citation extraction guaranteeing 92% grounded precision against official regulatory statutes.",
      "Designed a modern React 19 interface with real-time multi-agent thinking streams and PDF preview inspection.",
    ],
    flow: [
      "User submits compliance query or uploads statutory notices/filings",
      "Orchestrator classifies regulatory domain and routes to specialized sub-agent",
      "Sub-agent retrieves chunked regulatory clauses from Pinecone with Gemini embeddings",
      "Llama 3.3 70B synthesizes structured response with strict citation metadata",
      "Client renders answer alongside highlighted source references and PDF viewers",
    ],
    measurementPlan: [
      "Citation groundedness precision (92% achieved)",
      "Domain routing accuracy across 100+ simulated business scenarios",
      "Response latency under 2.5s for complex multi-statute queries",
      "Hallucination elimination rate (>99% citation alignment)",
    ],
    solution:
      "A production-ready compliance workspace integrating FastAPI, LangChain, Pinecone, Llama 3.3 70B, and React 19 to provide guaranteed source-grounded answers for Indian enterprise regulations.",
    technicalNotes: ["React 19", "FastAPI", "LangChain", "Pinecone", "Llama 3.3 70B", "Gemini Embeddings"],
    improvements: [
      "Integrate automated regulatory gazette scrapers for real-time amendment notifications.",
      "Add multi-lingual vernacular translation for state-specific regional compliance.",
      "Build automated filing checklist generator based on company incorporation date.",
    ],
    poster: "/project-previews/bizguide-ai-home.png",
    repoUrl: "https://github.com/Bilal-03/bizguide-ai",
    liveUrl: "https://bizguide-ai.vercel.app",
    year: "2026",
    featured: true,
  },
  {
    slug: "netflix-strategy",
    title: "Netflix Product & Retention Strategy",
    category: "Product Strategy · Churn Modeling · PLM Framework",
    primaryCategory: "product",
    categoryLabel: "Product Strategy",
    tags: ["Product Strategy", "Churn Modeling", "A/B Testing", "PLM Framework"],
    summary:
      "Product teardown proposing GenAI Dynamic Micro-Trailers to curb browse fatigue, modeling a 0.15% churn reduction to project ~$60M+ in retained ARR.",
    executiveProblem:
      "Catalog choice paralysis causes excessive browse sessions and user fatigue; retrospective post-mortem on Netflix's retired 'Play Something' feature revealed it failed because it stripped agency instead of guiding intent.",
    executiveSolution:
      "Designed a progressive-choice discovery model powered by GenAI Dynamic Micro-Trailers, backed by an A/B experimentation framework with metric hierarchies and guardrails.",
    keyMetricHighlight: {
      value: "~$60M+",
      label: "Projected Retained ARR",
    },
    impactBullets: [
      "Authored a comprehensive product case study proposing GenAI Dynamic Micro-Trailers with progressive-choice discovery.",
      "Conducted post-mortem analysis of Netflix's retired 'Play Something' feature, identifying lack of personalized context as primary failure mode.",
      "Formulated an A/B experimentation framework with metric hierarchies and guardrails, modeling a 0.15% churn reduction to project ~$60M+ retained ARR at >15x ROI.",
    ],
    problem:
      "High browse fatigue in modern SVOD catalogs leads to choice paralysis, session drop-offs, and avoidable subscriber churn; retrospective analysis revealed Netflix's retired 'Play Something' feature failed because it stripped agency instead of guiding intent.",
    users:
      "Active Netflix subscribers experiencing high catalog search friction and decision fatigue across television and mobile clients.",
    goal:
      "Increase content consumption velocity and reduce 30-day subscriber churn by 0.15% through personalized, generative dynamic micro-trailers.",
    assumptions: [
      "Personalized, mood-aligned 6-second dynamic micro-trailers drive higher title start rates than static title cards.",
      "Progressive-choice discovery preserves user agency while cutting median browse time before play by >40%.",
      "A 0.15% reduction in monthly churn generates tens of millions in net-retained annual recurring revenue.",
    ],
    decisions: [
      "Conducted post-mortem analysis of 'Play Something', identifying lack of personalized context as primary failure mode.",
      "Architected GenAI Dynamic Micro-Trailer engine generating real-time personalized previews based on user watch histories.",
      "Formulated a comprehensive A/B experimentation framework with strict guardrail metrics (stream completion, skip rate, session duration).",
      "Modeled unit economics: 0.15% churn reduction on standard subscriber base yields ~$60M+ retained ARR at >15x ROI.",
    ],
    flow: [
      "User pauses or hesitates in browsing catalog carousel (>15s inactivity)",
      "Progressive-choice overlay activates with tailored dynamic micro-trailer snippet",
      "AI narrative hook highlights themes matched to past high-completion titles",
      "One-click play action or swipe-to-next progressive choice",
      "Telemetry feeds back into recommendation latency and engagement scoring",
    ],
    measurementPlan: [
      "Time-to-first-stream (median browse time)",
      "Stream start conversion rate from preview impression",
      "30-day cohort churn rate (-0.15% target model)",
      "Guardrail: title abandonment rate (<15% within first 5 minutes)",
      "Projected ARR impact (~$60M+ annualized retained revenue)",
    ],
    solution:
      "An executive product strategy memo and experimentation roadmap articulating customer discovery, system architecture, telemetry trees, and financial ROI models for streaming leadership.",
    technicalNotes: ["PLM Framework", "Cohort Retention Modeling", "A/B Experimentation", "Unit Economics", "GenAI Dynamic Video"],
    improvements: [
      "Extend model to interactive episodic branching previews for gaming and interactive titles.",
      "Test multi-user household profile arbitration to resolve conflicting co-viewing preferences.",
    ],
    poster: "/project-previews/netflix-strategy-preview.svg",
    liveUrl: "https://bilal03.notion.site/netflix-product-strategy",
    year: "2026",
    featured: true,
  },
  {
    slug: "productlens",
    title: "ProductLens",
    category: "Product Analytics · Governed Text-to-SQL · AI Copilot",
    primaryCategory: "ai",
    categoryLabel: "AI Analytics Copilot",
    tags: ["Text-to-SQL", "SQLGlot", "FastAPI", "Next.js", "Data Governance"],
    summary:
      "Governed product analytics copilot with SQLGlot AST validation, enabling non-technical stakeholders to complete metric investigations 3x faster with 100% syntactic safety.",
    executiveProblem:
      "Product managers wait days for analyst SQL support, while generative text-to-SQL tools hallucinate nonexistent schema columns, output unoptimized queries, or risk mutating production databases.",
    executiveSolution:
      "Constructed a governed semantic SQL agent using FastAPI, SQLGlot AST validation, and PostgreSQL that compiles natural language into safe, read-only analytical queries with zero schema errors.",
    keyMetricHighlight: {
      value: "100%",
      label: "AST Query Verification",
    },
    impactBullets: [
      "Used FastAPI, LangChain, and SQLGlot to construct a governed semantic SQL agent with AST validation, ensuring 100% syntactic verification and zero schema hallucinations.",
      "Built centralized metric catalog and automated anomaly detection engine in PostgreSQL and Plotly, providing evidence-backed decision cards.",
      "Enabled non-technical stakeholders to perform self-serve investigations with 3x faster turnaround.",
    ],
    problem:
      "Product teams often wait days for an analyst to translate a business question into SQL, verify metric definitions, and investigate relevant segments. Generic text-to-SQL tools make that path faster but risk hallucinations and schema corruption.",
    users:
      "Product managers, growth operators, founders, and revenue teams investigating product performance and cohort retention.",
    goal:
      "Create a governed analytics workspace that moves from a plain-language question to a validated metric, read-only analysis, evidence-backed insight, and next action without making the reasoning opaque.",
    assumptions: [
      "Users need one shared definition for metrics, dimensions, and time semantics rather than dashboard-specific calculations.",
      "AI assistance is easier to trust when planning and explanation are bounded by governed analytics and returned evidence.",
      "Comparison periods, sample sizes, evidence IDs, and caveats should stay visible when an insight informs a decision.",
    ],
    decisions: [
      "Used SQLGlot for AST validation and query-intent verification before execution.",
      "Enforced read-only transaction modes and restricted schema introspection.",
      "Designed evidence-backed decision cards with confidence intervals and sample-size warnings.",
      "Built metric lineage visualization to make downstream dependencies inspectable.",
    ],
    flow: [
      "User asks business question in natural language (e.g., 'Compare D30 retention for paywall v2')",
      "Semantic compiler maps question to governed metric catalog",
      "SQLGlot validates query AST, ensures read-only execution, and eliminates hallucinated fields",
      "PostgreSQL executes optimized analytical query with sub-second latency",
      "Interactive Plotly chart and evidence card render with 3x faster diagnostic turnaround",
    ],
    measurementPlan: [
      "Query compilation success rate (100% AST verified)",
      "Investigation turnaround time reduction (3x faster achieved)",
      "Schema hallucination incidence (0% across test suite)",
      "Self-serve metric adoption among non-technical operators",
    ],
    solution:
      "A governed analytics workspace combining FastAPI, Next.js, PostgreSQL, SQLGlot, and Plotly that turns ambiguous metric questions into validated, safe, evidence-backed insights.",
    technicalNotes: ["FastAPI", "Next.js", "PostgreSQL", "SQLGlot", "LangChain", "Plotly", "TypeScript"],
    improvements: [
      "Add automated causal inference module to correlate metric shifts with product releases.",
      "Support multi-warehouse connectors across Snowflake, BigQuery, and Databricks.",
    ],
    poster: "/project-previews/productlens-home.png",
    liveUrl: "https://productlens.vercel.app",
    repoUrl: "https://github.com/Bilal-03/productlens",
    year: "2026",
    featured: true,
  },
  {
    slug: "karobarkit",
    title: "KarobarKit",
    category: "Local-First Architecture · India Business Utilities · Full-Stack",
    primaryCategory: "product",
    categoryLabel: "Operational Toolkit",
    tags: ["Next.js", "TypeScript", "Local-First", "Business Utilities"],
    summary:
      "Privacy-first operational business toolkit with 82 India-focused calculators, document generators, and tax utilities operating with sub-100ms speed.",
    executiveProblem:
      "Indian small business owners waste hours across fragmented, ad-ridden government portals and insecure calculators that compromise sensitive payroll and financial records.",
    executiveSolution:
      "Engineered a local-first, zero-server persistence web suite housing 82 India-focused tax, payroll, and startup calculators with instant client-side PDF/QR export.",
    keyMetricHighlight: {
      value: "82 Tools",
      label: "India-Focused Calculators",
    },
    impactBullets: [
      "Built a privacy-first operational business toolkit with 82 India-focused calculators and tax utilities spanning GST, payroll, retail, and e-commerce.",
      "Designed a modular registry architecture with zero-server persistence and PDF/QR exports, achieving sub-100ms calculation speeds and 100% client-side privacy.",
      "Optimized search-to-tool discovery workflow, cutting user discovery time by 50%.",
    ],
    problem:
      "Indian MSMEs, freelancers, and retail merchants frequently need quick operational calculations (GST splits, margin analysis, invoice generation, loan amortizations) but face fragmented portals, intrusive ads, and data privacy concerns.",
    users:
      "Indian small business owners, freelancers, accountants, and e-commerce merchants needing trusted, instant operational tools.",
    goal:
      "Create a unified, privacy-first business utility hub where every tool runs entirely in the browser with zero server data retention.",
    assumptions: [
      "Business owners are hesitant to input financial figures into cloud tools that lack explicit privacy guarantees.",
      "Fast, client-side execution (<100ms) creates a superior utility experience compared to server-rendered tools.",
      "Clean export options (PDF, PNG, QR) significantly increase daily workflow utility.",
    ],
    decisions: [
      "Adopted 100% client-side execution model with zero external database dependencies.",
      "Standardized 82 India-specific calculation models (GST slabs, TDS, EPF, startup runway).",
      "Implemented client-side PDF/QR generation for professional invoicing without server overhead.",
      "Built a searchable, category-indexed tool registry for instant discovery.",
    ],
    flow: [
      "User searches or browses catalog of 82 India-focused operational tools",
      "Enters business variables (e.g., invoice line items, tax brackets, employee salaries)",
      "Engine computes instant deterministic outputs with sub-100ms latency",
      "One-click export to branded PDF, tax-ready spreadsheet, or QR payment invoice",
      "Session clears with zero server-side storage or tracking",
    ],
    measurementPlan: [
      "Search-to-tool discovery time (-50% reduction achieved)",
      "Calculation execution speed (sub-100ms client-side)",
      "Data privacy guarantee (100% client-side execution)",
      "Tool catalog breadth (82 utilities live)",
    ],
    solution:
      "A local-first Next.js web application housing 82 India-focused calculators and document generators with transparent formulas and offline resilience.",
    technicalNotes: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Local-First Architecture"],
    improvements: [
      "Add PWA support for complete offline mobile installation on merchant devices.",
      "Introduce automated compliance date calendar for GST and advance tax reminders.",
    ],
    poster: "/project-previews/karobarkit-home.png",
    liveUrl: "https://karobarkit.com",
    repoUrl: "https://github.com/Bilal-03/karobarkit",
    year: "2026",
    featured: true,
  },
  {
    slug: "zomato-restaurant-intelligence",
    title: "Zomato Restaurant Intelligence",
    category: "Marketplace Analytics · Growth Modeling · Advanced SQL",
    primaryCategory: "analytics",
    categoryLabel: "Marketplace Analytics",
    tags: ["Advanced SQL", "Python", "Scikit-Learn", "Streamlit", "Plotly"],
    summary:
      "Marketplace analytics across 30,336 restaurant listings, uncovering a 5.8x engagement uplift for dual-feature venues and identifying 12 micro-market expansion targets.",
    executiveProblem:
      "F&B founders and cloud kitchen operators commit major capital to new locations without empirical visibility into hyper-local dining vs delivery saturation and feature adoption ROI.",
    executiveSolution:
      "Engineered production SQL pipelines (CTEs, Window Functions, Partitions, NTILEs) and Scikit-Learn predictive models to simulate merchant ratings and score micro-market opportunities.",
    keyMetricHighlight: {
      value: "5.8x",
      label: "Engagement Flywheel Uplift",
    },
    impactBullets: [
      "Used advanced SQL (multi-tier CTEs, Window Functions, Partitions, NTILEs) and Python to model marketplace dynamics across 30,336 listings, uncovering a 5.8x engagement uplift for dual-feature venues.",
      "Used Scikit-Learn and Pandas to engineer a composite Market Opportunity Index (50% demand, 25% spend, 25% headroom), identifying 12 high-potential expansion micro-markets.",
      "Built interactive Streamlit simulation studio simulating merchant ratings across Bangalore micro-markets with an R2 of 0.84.",
    ],
    problem:
      "Restaurant operators make location, cuisine, and operational decisions based on intuition rather than empirical market data. Understanding competition density, pricing viability, and consumer demand across micro-markets requires synthesizing tens of thousands of data points.",
    users:
      "Restaurant founders, cloud kitchen operators, F&B investors, and marketplace growth strategists evaluating market entry in Bangalore.",
    goal:
      "Transform 30,000+ restaurant records into actionable marketplace intelligence: identify underserved micro-markets, evaluate pricing whitespace, and quantify the revenue impact of platform features.",
    assumptions: [
      "Venues supporting both online ordering and table booking experience a measurable engagement flywheel effect.",
      "Micro-markets exhibit distinct price-sensitivity tiers that dictate cuisine success rates.",
      "A composite scoring model provides clearer expansion guidance than any single metric.",
    ],
    decisions: [
      "Built multi-tier SQL CTEs to segment venues by location, price band, cuisine, and feature adoption.",
      "Designed a composite Market Opportunity Index weighting demand signals, spend levels, and supply gaps.",
      "Trained predictive regression models to estimate expected ratings for new market entrants.",
      "Created an interactive Streamlit simulation studio with Plotly geographic heatmaps.",
    ],
    flow: [
      "Ingest and clean multi-variable restaurant dataset (cuisines, ratings, votes, pricing, coordinates)",
      "Execute multi-tier SQL CTEs to segment venues by location density and feature enablement",
      "Calculate composite Market Opportunity Index across Bangalore localities",
      "Run predictive regression to estimate rating and vote trajectories for proposed venue profiles",
      "Present actionable micro-market strategy recommendations via interactive dashboard",
    ],
    measurementPlan: [
      "Engagement uplift quantification (5.8x measured for dual-feature venues)",
      "Market opportunity scoring across 12 high-potential micro-markets",
      "Query execution speed across 30,336 listings",
      "Predictive regression accuracy (R2 of 0.84 for rating estimation)",
    ],
    solution:
      "An end-to-end analytical intelligence platform combining advanced SQL modeling, Python data pipelines, Scikit-Learn regression, and interactive Streamlit dashboards.",
    technicalNotes: ["Python", "SQL (CTEs, Window Functions, NTILEs)", "Scikit-Learn", "Pandas", "Streamlit", "Plotly"],
    improvements: [
      "Incorporate real-time delivery fee and traffic surge telemetry to refine catchment area boundaries.",
      "Implement customer sentiment analysis on unstructured review text using NLP transformer models.",
    ],
    poster: "/project-previews/zomato-restaurant-intelligence-home.png",
    liveUrl: "https://zomato-restaurant-intelligence.streamlit.app",
    repoUrl: "https://github.com/Bilal-03/zomato-restaurant-intelligence",
    year: "2026",
    featured: true,
  },
  {
    slug: "finassist",
    title: "FinAssist",
    category: "FinTech Platform · Market Telemetry · Python",
    primaryCategory: "ai",
    categoryLabel: "Financial Intelligence",
    tags: ["Python", "Flask", "NSE Quotes", "Parallel RSS", "JavaScript"],
    summary:
      "Virtual financial intelligence platform integrating 15+ utilities with live NSE quotes, mutual fund NAV search, and parallel RSS market telemetry.",
    executiveProblem:
      "Retail investors face fragmented financial tools, slow API retrieval times, and delayed market news when evaluating investment decisions.",
    executiveSolution:
      "Built a lightweight Python and Flask financial intelligence dashboard integrating 15+ calculators with live NSE quotes and parallel asynchronous RSS news aggregation.",
    keyMetricHighlight: {
      value: "15+ Tools",
      label: "Integrated Financial Utilities",
    },
    impactBullets: [
      "Used Python, Flask, and REST APIs to build a virtual financial intelligence platform integrating 15+ utilities with live NSE quotes and mutual fund NAV analytics with sub-second retrieval.",
      "Developed a multi-source financial news aggregator using parallel asynchronous RSS fetching, consolidating live market telemetry across commodities, currencies, and equities.",
      "Integrated SIP, EMI, FD, and Zakat calculators into an accessible, responsive dashboard.",
    ],
    problem:
      "Individual investors in India juggle multiple platforms for market telemetry: one for stock quotes, another for mutual fund NAVs, separate tools for financial calculations, and fragmented news feeds.",
    users:
      "Retail investors, finance students, and personal finance planners managing Indian equity and mutual fund portfolios.",
    goal:
      "Consolidate live market quotes, mutual fund analytics, multi-category financial calculators, and multi-source financial news into a single, zero-friction dashboard.",
    assumptions: [
      "Sub-second data retrieval for stock quotes and NAVs is essential for daily active usage.",
      "Parallel fetching of RSS feeds reduces dashboard load times by >60% compared to sequential requests.",
      "Combining calculators directly alongside live market data drives higher decision confidence.",
    ],
    decisions: [
      "Built asynchronous RSS ingestion pipeline to fetch news from 5+ major financial publications concurrently.",
      "Integrated live NSE quote endpoints with in-memory caching to balance freshness with API limits.",
      "Developed 15+ financial calculators (SIP, EMI, FD, CAGR, Zakat) with interactive visualization.",
      "Kept backend architecture lightweight using Flask and clean REST endpoints.",
    ],
    flow: [
      "User opens dashboard to view consolidated live market tickers (NSE, commodities, forex)",
      "Queries specific stock quote or mutual fund NAV with instant auto-complete",
      "Runs investment projection or loan amortization through integrated calculators",
      "Reviews parallel-aggregated financial news filtered by market sector",
    ],
    measurementPlan: [
      "Dashboard load time (<1.5s target with cached feeds)",
      "API response latency for live quote lookups (sub-second achieved)",
      "Daily active session duration and calculator utilization rates",
    ],
    solution:
      "A consolidated financial dashboard built with Python, Flask, and JavaScript providing unified market data, portfolio calculations, and news telemetry.",
    technicalNotes: ["Python", "Flask", "JavaScript", "REST APIs", "RSS Aggregation", "HTML/CSS"],
    improvements: [
      "Add user authentication and personalized portfolio tracking with P&L calculations.",
      "Integrate automated technical analysis indicators (RSI, MACD) on historical price charts.",
    ],
    poster: "/project-previews/finassist-home.png",
    liveUrl: "https://finassist-demo.vercel.app",
    repoUrl: "https://github.com/Bilal-03/FinAssist",
    year: "2025",
  },
  {
    slug: "dinescope-marketplace-intelligence",
    title: "DineScope",
    category: "Marketplace Intelligence · Cohort Retention · Altair",
    primaryCategory: "analytics",
    categoryLabel: "Marketplace Intelligence",
    tags: ["Pandas", "Altair", "Streamlit", "Cohort Retention"],
    summary:
      "Marketplace intelligence studio analyzing 150,281 transactions to isolate cohort retention dynamics and build a 6-dimension expansion Decision Lab.",
    problem:
      "Marketplace category managers often overestimate retention by conflating one-off repeat purchases with genuine cohort loyalty, leading to misguided geographic expansion bets.",
    users:
      "Marketplace category managers, growth analysts, and business operators evaluating merchant performance and retention health.",
    goal:
      "Isolate true cohort retention dynamics from 150k+ transactions and provide an interactive Decision Lab with confidence discounting for expansion bets.",
    assumptions: [
      "Standard retention curves overstate health without cohort-isolated repeat purchase segmentation.",
      "Expansion decisions require confidence-discounted metrics to prevent capital misallocation.",
    ],
    decisions: [
      "Audited 150,281 transaction records to separate repeat purchases from genuine cohort loyalty, preventing metric overestimation by 25%.",
      "Built interactive Decision Lab with confidence discounting and additive 1/n multi-cuisine allocation.",
      "Engineered Altair visualization suite for multi-dimensional category evaluation.",
    ],
    flow: [
      "Transaction ingestion and audit",
      "Cohort isolation and repeat purchase segmentation",
      "Multi-cuisine allocation modeling",
      "Decision Lab interactive scenario evaluation",
    ],
    measurementPlan: [
      "Retention metric accuracy improvement (+25% precision)",
      "Category manager evaluation cycle time",
      "Decision confidence across 6 marketplace dimensions",
    ],
    solution:
      "A Python and Streamlit intelligence studio using Pandas and Altair to provide rigorous, audit-grade marketplace diagnostics.",
    technicalNotes: ["Python", "Pandas", "NumPy", "Altair", "Streamlit"],
    improvements: [
      "Add automated cohort anomaly detection alerts.",
      "Incorporate customer acquisition cost (CAC) payback modeling.",
    ],
    poster: "/project-previews/dinescope-home.png",
    liveUrl: "https://dinescope-demo.streamlit.app",
    repoUrl: "https://github.com/Bilal-03/dinescope",
    year: "2026",
  },
  {
    slug: "ai-business-analytics-studio",
    title: "AI Business Analytics Studio",
    category: "Analytical Studio · DuckDB · Automated Forecasting",
    primaryCategory: "analytics",
    categoryLabel: "Analytics Studio",
    tags: ["DuckDB", "Python", "Scikit-Learn", "Plotly", "Streamlit"],
    summary:
      "High-performance analytical studio running sub-second queries across 500k+ rows with DuckDB SQL and automated time-series forecasting.",
    problem:
      "Business intelligence reporting cycles are slow and repetitive, with analysts spending hours writing manual queries and assembling executive presentations.",
    users:
      "Data analysts, operations leaders, and executive decision-makers needing fast exploratory data analysis and automated forecasts.",
    goal:
      "Deliver sub-second analytical querying across 500k+ rows with automated time-series forecasting and anomaly detection.",
    assumptions: [
      "In-process columnar SQL (DuckDB) outperforms traditional databases for exploratory analytical workloads.",
      "Automated executive report generation reduces routine BI overhead by over 50%.",
    ],
    decisions: [
      "Integrated DuckDB for high-performance in-process analytical querying across 500k+ rows with sub-second latency.",
      "Built automated time-series forecasting and anomaly detection pipelines using Scikit-Learn.",
      "Implemented reproducible executive report generation, cutting routine BI cycle time by 60%.",
    ],
    flow: [
      "Dataset ingestion into DuckDB columnar engine",
      "Sub-second SQL aggregation and cohort slicing",
      "Automated anomaly detection and trend forecasting",
      "Exportable executive report and visual presentation",
    ],
    measurementPlan: [
      "Query latency across 500k+ rows (sub-second achieved)",
      "BI report generation cycle time (-60% achieved)",
      "Forecast accuracy across seasonal business cycles",
    ],
    solution:
      "A fast, reproducible analytics studio combining DuckDB, Streamlit, Scikit-Learn, and Plotly for high-throughput business intelligence.",
    technicalNotes: ["DuckDB SQL", "Python", "Pandas", "Scikit-Learn", "Plotly", "Streamlit"],
    improvements: [
      "Add support for direct cloud bucket (S3/GCS) Parquet queries.",
      "Implement natural-language-to-DuckDB translation.",
    ],
    poster: "/project-previews/ai-business-analytics-studio-home.png",
    liveUrl: "https://ai-business-analytics.streamlit.app",
    repoUrl: "https://github.com/Bilal-03/ai-business-analytics-studio",
    year: "2026",
  },
  {
    slug: "crm-pro",
    title: "CRM Pro",
    category: "Enterprise Systems · Full-Stack CRM · PostgreSQL",
    primaryCategory: "product",
    categoryLabel: "Enterprise Software",
    tags: ["React", "PostgreSQL", "Full-Stack", "Kanban Workflows"],
    summary:
      "Modular CRM and lead management platform with Kanban pipeline automation, custom reporting, and sales workflow tracking.",
    problem:
      "Sales teams suffer from fragmented lead status updates, missed follow-ups, and lack of visibility into pipeline stage conversions.",
    users:
      "B2B sales representatives, account executives, and sales operations managers managing multi-stage deals.",
    goal:
      "Streamline sales pipeline visibility, automate stage-transition notifications, and boost team SLA adherence.",
    assumptions: [
      "Interactive Kanban boards increase sales rep engagement and update frequency.",
      "Automated notification triggers reduce follow-up slippage by >25%.",
    ],
    decisions: [
      "Architected relational PostgreSQL schemas for multi-stage deal tracking and conversion reporting.",
      "Built dynamic Kanban pipeline with drag-and-drop status transitions in React.",
      "Integrated automated email and in-app reminders based on pipeline stage transition rules.",
    ],
    flow: [
      "Lead ingestion and assignment",
      "Kanban pipeline stage advancement",
      "Automated follow-up reminders and task creation",
      "Executive pipeline conversion dashboard review",
    ],
    measurementPlan: [
      "Lead tracking visibility (+45% improvement)",
      "SLA follow-up adherence (+30% boost)",
      "Pipeline stage conversion reporting accuracy",
    ],
    solution:
      "A full-stack React and PostgreSQL CRM platform providing complete pipeline transparency and automated workflow enforcement.",
    technicalNotes: ["React", "PostgreSQL", "Node.js", "Express", "Tailwind CSS"],
    improvements: [
      "Add AI-powered lead scoring and deal win-probability predictions.",
      "Integrate bi-directional email sync with Gmail and Outlook.",
    ],
    poster: "/project-previews/crm-pro-home.png",
    liveUrl: "https://crm-pro-demo.vercel.app",
    repoUrl: "https://github.com/Bilal-03/crm-pro",
    year: "2023",
  },
  {
    slug: "invoice-intelligence",
    title: "Invoice Intelligence",
    category: "Applied AI · Document Processing · Computer Vision",
    primaryCategory: "ai",
    categoryLabel: "Document Intelligence",
    tags: ["OpenCV", "PaddleOCR", "Python", "Document Extraction"],
    summary:
      "Automated accounts payable invoice processing pipeline extracting key-value pairs with 94%+ field accuracy and human-in-the-loop review.",
    problem:
      "Accounts payable teams spend hundreds of manual hours reviewing multi-format vendor invoices, resulting in slow processing and high error rates.",
    users:
      "Finance analysts, accounts payable clerks, and operations managers reconciling vendor invoices.",
    goal:
      "Automate key-value field extraction from unstructured invoice documents with high accuracy and streamlined exception review.",
    assumptions: [
      "Preprocessing with OpenCV bounding boxes drastically improves OCR text extraction precision.",
      "Human-in-the-loop validation queues prioritize edge cases effectively, cutting manual audit time by >30%.",
    ],
    decisions: [
      "Engineered automated OCR pipelines using OpenCV preprocessing, PaddleOCR, and regex heuristics.",
      "Achieved 94%+ field extraction accuracy across diverse vendor invoice templates.",
      "Built human-in-the-loop validation queue and duplicate detection heuristics, reducing audit turnaround time by 35%.",
    ],
    flow: [
      "Invoice document upload (PDF/image)",
      "OpenCV preprocessing, skew correction, and region extraction",
      "PaddleOCR text recognition and regex key-value parsing",
      "Automated validation checks and confidence scoring",
      "Exception triage in human-in-the-loop review queue",
    ],
    measurementPlan: [
      "Field extraction accuracy (94%+ achieved)",
      "Manual audit turnaround reduction (-35% achieved)",
      "Duplicate invoice detection rate",
    ],
    solution:
      "An automated AP invoice extraction pipeline combining OpenCV, PaddleOCR, and Python with human-in-the-loop validation.",
    technicalNotes: ["Python", "OpenCV", "PaddleOCR", "FastAPI", "Docker"],
    improvements: [
      "Add transformer-based layout models (LayoutLM) for complex tabular extraction.",
      "Integrate direct ERP connectors for SAP and QuickBooks.",
    ],
    poster: "/project-previews/invoice-intelligence-home.png",
    liveUrl: "https://invoice-extraction-lac.vercel.app",
    repoUrl: "https://github.com/Bilal-03/invoice-extraction",
    year: "2024",
  },
];

export const FEATURED_SLUGS = [
  "handovr",
  "bizguide-ai",
  "netflix-strategy",
  "productlens",
  "karobarkit",
  "zomato-restaurant-intelligence",
] as const;

export const FEATURED_PROJECTS = FEATURED_SLUGS.map((slug) =>
  CASE_STUDIES.find((project) => project.slug === slug)
).filter((project): project is CaseStudy => Boolean(project));

const PROJECT_DISPLAY_ORDER = [
  "handovr",
  "bizguide-ai",
  "netflix-strategy",
  "productlens",
  "karobarkit",
  "zomato-restaurant-intelligence",
  "finassist",
  "dinescope-marketplace-intelligence",
  "ai-business-analytics-studio",
  "crm-pro",
  "invoice-intelligence",
] as const;

export const PROJECTS = PROJECT_DISPLAY_ORDER.map((slug) =>
  CASE_STUDIES.find((project) => project.slug === slug)
).filter((project): project is CaseStudy => Boolean(project));

export const EXPERIENCE = [
  {
    title: "Founder / Product Lead",
    company: "Handovr",
    badge: "0-to-1 Marketplace · Product & Operations",
    location: "Delhi NCR, India",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Led 0-to-1 discovery through 40+ user interviews across Delhi NCR to define product roadmaps, PRDs, and a 16-point hardware verification and escrow flow, raising buyer conversion readiness by 38% and cutting negotiation drop-offs by 28%.",
      "Instrumented end-to-end funnel telemetry to diagnose doorstep handover bottlenecks, streamlining marketplace fulfillment workflows to reduce transaction cycle turnaround time by 40%.",
    ],
  },
  {
    title: "AI and Automation Intern",
    company: "Techpanion Solutions",
    badge: "Applied AI · Document Processing",
    location: "Remote",
    period: "June 2024 – July 2024",
    current: false,
    bullets: [
      "Engineered automated OCR document extraction pipelines using OpenCV preprocessing, PaddleOCR, and regex heuristics, which extracted structured invoice key-value pairs with 94%+ field accuracy.",
      "Implemented a human-in-the-loop validation queue and duplicate detection heuristics, helping operations prioritize edge cases and cutting manual audit turnaround time by 35%.",
    ],
  },
  {
    title: "Product and Business Systems Intern",
    company: "iCtrlBiz Consulting",
    badge: "Product Management · CRM Systems",
    location: "Noida, India",
    period: "Aug 2023 – Dec 2023",
    current: false,
    bullets: [
      "Built full-stack CRM features and automated business event listeners using React and PostgreSQL, which streamlined lead routing and eliminated manual status updates across sales teams by 40%.",
      "Integrated automated notification dispatch triggers based on Kanban pipeline transitions, which improved customer follow-up consistency and increased SLA adherence by 30%.",
    ],
  },
];

export const SKILLS = [
  {
    title: "Product Management",
    tagline: "Product Strategy, PRDs, Discovery & 0-to-1 Execution",
    items: [
      "Product Strategy",
      "PRDs & Specifications",
      "User Discovery (40+ Interviews)",
      "Wireframing & Journey Mapping",
      "Prioritization (RICE / Kano)",
      "0-to-1 Marketplace Launch",
      "Unit Economics",
      "Agile / Scrum Execution",
    ],
  },
  {
    title: "Data & Analytics",
    tagline: "SQL Telemetry, Cohort Retention & Experimentation",
    items: [
      "Advanced SQL (CTEs, Window Functions)",
      "Cohort & Retention Analysis",
      "Funnel Diagnostic & Drop-offs",
      "KPI Trees & Metric Lineage",
      "A/B Testing & Guardrail Metrics",
      "Market Sizing & Opportunity Index",
      "Business Intelligence (Pandas, Plotly)",
    ],
  },
  {
    title: "Applied AI & Systems",
    tagline: "Multi-Agent RAG, Vector Search & LLM Orchestration",
    items: [
      "Multi-Agent RAG Architectures",
      "LangChain & Sub-Agent Routing",
      "Vector Search (Pinecone)",
      "Semantic Embeddings (Gemini)",
      "LLM Orchestration (Llama 3.3, OpenAI)",
      "AST Validation (SQLGlot)",
      "Prompt Engineering & Guardrails",
      "Document OCR (OpenCV, PaddleOCR)",
    ],
  },
  {
    title: "Technical Stack & Tools",
    tagline: "Full-Stack Engineering, Data Pipelines & Cloud",
    items: [
      "Python (FastAPI, Flask, Streamlit)",
      "React.js & Next.js 15 (React 19)",
      "TypeScript & Modern JavaScript",
      "PostgreSQL, Supabase & DuckDB",
      "Tailwind CSS & Design Systems",
      "REST APIs & Data Ingestion",
      "Git, GitHub & Docker",
      "Postman & Vercel Deployment",
    ],
  },
];

export const EDUCATION = [
  {
    institution: "Vellore Institute of Technology",
    location: "Chennai, India",
    period: "Sep 2021 – July 2025",
    qualification: "Bachelor of Technology in Computer Science and Engineering (AI and ML)",
    details:
      "Core coursework in Artificial Intelligence, Machine Learning, Data Structures, Relational Database Management Systems, and Software Engineering.",
  },
];

export const CERTIFICATIONS = [
  "Python Programming – IIT Bombay (Certificate)",
  "C Programming – IIT Bombay (Certificate)",
  "AI for All: From Basics to GenAI Practice – NVIDIA (Certificate)",
  "Cisco Packet Tracer / Network Simulation – Cisco Networking Academy (Credly Badge)",
];
