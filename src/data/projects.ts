export interface VerifiedMetric {
  label: string;
  value: string;
  source: string;
}

export type PrimaryCategory = "analytics" | "product" | "ai";

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
  eyebrow: "Product · Data Analytics · Applied AI",
  headline: "I turn messy problems and complex data into useful products.",
  subheadline:
    "Product manager & analytics practitioner with a computer science background in AI/ML. Experienced in 0-to-1 product discovery, SQL decision engines, marketplace growth economics, and applied AI systems.",
  location: "Based in India",
  availability: "Open to Product Management, Analytics & Strategy roles",
  email: "bilal3512@gmail.com",
  linkedin: "https://www.linkedin.com/in/bilal2012/",
  github: "https://github.com/Bilal-03",
  resume: "/Resume.pdf",
};

export const IMPACT_METRICS = [
  {
    value: "30,336+",
    label: "Listings Modeled",
    detail: "Zomato dining & delivery dataset analyzed across Bangalore micro-markets",
    badge: "Marketplace Intelligence",
  },
  {
    value: "10",
    label: "Production Systems",
    detail: "Full-stack apps, analytics studios, and AI workflows engineered & deployed",
    badge: "Applied AI & Engineering",
  },
  {
    value: "0-to-1",
    label: "Marketplace Built",
    detail: "Handovr: 16-point verified transaction flow, pricing context & escrow UX",
    badge: "Product Management",
  },
  {
    value: "5.8x",
    label: "Engagement Uplift",
    detail: "Quantified feature adoption flywheel (dual-feature vs offline venues)",
    badge: "Strategy & ROI",
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
    recommendedSlugs: ["handovr", "crm-pro", "karobarkit", "finassist"],
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
      "Document OCR & AP invoice extraction pipelines (Invoice Intelligence)",
    ],
    recommendedSlugs: ["productlens", "bizguide-ai", "invoice-intelligence"],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "handovr",
    title: "Handovr",
    category: "Marketplace · Trust & Safety · Operations",
    primaryCategory: "product",
    categoryLabel: "0-to-1 Product",
    tags: ["0-to-1 Product", "Marketplace", "Trust & Safety"],
    summary: "Making second-hand phone transactions clearer, verified, and safer from listing to doorstep.",
    problem:
      "Buying a used phone means navigating uncertainty around device condition, pricing, payment and the final handover.",
    users: "People buying or selling second-hand phones across Delhi NCR.",
    goal:
      "Reduce trust friction by making verification, pricing and transaction steps visible in one guided marketplace flow.",
    assumptions: [
      "Buyers need confidence before they commit to a seller or meeting.",
      "Sellers benefit when verification and transaction expectations are explicit.",
      "A guided handover process can reduce avoidable coordination problems.",
    ],
    decisions: [
      "16-point device verification workflow",
      "Seller-buyer matching and listing discovery",
      "Escrow-style payment flow",
      "Doorstep handover coordination",
    ],
    flow: [
      "List or discover a device",
      "Review condition and verification details",
      "Agree on price and transaction terms",
      "Coordinate payment and final handover",
    ],
    measurementPlan: [
      "Listing-to-verification completion",
      "Verification rejection reasons",
      "Listing-to-order conversion",
      "Time from listing to handover",
      "Buyer and seller funnel drop-off",
    ],
    solution:
      "A full-stack verified marketplace that connects discovery, device checks, pricing context and transaction handling in one product journey.",
    technicalNotes: ["Next.js", "React", "Supabase", "TypeScript"],
    improvements: [
      "Validate which trust signals influence buyer decisions most.",
      "Instrument the transaction funnel and identify the largest handover drop-offs.",
      "Expand dispute and edge-case flows after observing real transactions.",
    ],
    poster: "/project-previews/handovr-home.png",
    liveUrl: "https://handovr.in",
    year: "2026",
    featured: true,
  },
  {
    slug: "productlens",
    title: "ProductLens",
    category: "Product Analytics · Applied AI · Data Governance",
    primaryCategory: "ai",
    categoryLabel: "Applied AI",
    tags: ["Product Analytics", "Semantic SQL", "Applied AI"],
    summary: "Turning business questions into inspectable, evidence-backed product decisions.",
    problem:
      "Product teams often wait for an analyst to translate a question into SQL, verify the metric definition, investigate the relevant segments and turn the result into an action. Generic text-to-SQL tools can make that path faster while hiding the semantics and evidence behind the answer.",
    users:
      "Product managers, analysts, growth practitioners, founders and revenue teams investigating product performance.",
    goal:
      "Create a governed analytics workspace that moves from a plain-language question to a validated metric, read-only analysis, evidence-backed insight and next action without making the reasoning opaque.",
    assumptions: [
      "Users need one shared definition for metrics, dimensions and time semantics rather than dashboard-specific calculations.",
      "AI assistance is easier to trust when planning and explanation are bounded by governed analytics and returned evidence.",
      "Comparison periods, sample sizes, evidence IDs and caveats should stay visible when an insight informs a decision.",
    ],
    decisions: [
      "Central semantic catalog for metrics, dimensions, time semantics and PII metadata",
      "Structured Quick Answer and Deep Dive investigations backed by deterministic analytics",
      "SQLGlot AST validation with least-privilege, read-only PostgreSQL execution",
      "Product Pulse, Weekly Report, analytics modules and Analysis Notebook for proactive and reusable workflows",
    ],
    flow: [
      "Ask a business question or open a governed analytics surface",
      "Resolve the metric, period, filters and supported dimensions",
      "Validate and execute a bounded read-only analysis",
      "Inspect evidence, drivers, confidence and the recommended next action",
    ],
    measurementPlan: [
      "Question-to-answer completion rate",
      "Time from question to evidence-backed action",
      "Evidence coverage for findings and recommendations",
      "Deep Dive follow-up and investigation completion",
      "Saved insight reuse and report completion",
    ],
    solution:
      "A full-stack product analytics workspace that combines semantic governance, deterministic analytics, safe SQL compilation, controlled visualizations, an evidence-first Copilot, proactive anomaly detection, reports and saved analyses.",
    technicalNotes: [
      "Next.js",
      "React Query",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLGlot",
      "Plotly",
      "Supabase",
      "Docker",
    ],
    improvements: [
      "Connect production sources through configured tenant workspaces and expand the bounded read-only connector path.",
      "Add scheduled refresh, alert delivery and recurring report workflows once on-demand analytics are proven in use.",
      "Evaluate insight quality on labeled real-world questions and add team collaboration around saved notebook analyses.",
    ],
    poster: "/project-previews/productlens-home.png",
    liveUrl: "https://productlens-web-six.vercel.app",
    repoUrl: "https://github.com/Bilal-03/productlens",
    year: "2026",
    featured: true,
  },
  {
    slug: "zomato-restaurant-intelligence",
    title: "Zomato Restaurant Intelligence",
    category: "Marketplace Intelligence · Product Strategy · Growth Analytics",
    primaryCategory: "analytics",
    categoryLabel: "Marketplace Analytics",
    tags: ["Marketplace Analytics", "Unit Economics", "ML Simulator"],
    summary:
      "Quantifying feature flywheel ROI, locality white spaces, and launch dynamics across 30,336 restaurants.",
    problem:
      "Food delivery and dining platforms operate in dense, hyper-competitive urban micro-markets where merchant partners and category managers struggle to make evidence-based decisions about feature adoption (delivery vs. reservations), locality expansion, pricing positioning, and menu specialization.",
    users:
      "Marketplace operations managers, restaurant founders, product strategists, and category leads evaluating merchant unit economics, feature ROI, and micro-market white spaces.",
    goal:
      "Build an end-to-end marketplace intelligence system with interactive macro KPIs, empirical feature flywheel economics, locality opportunity indexing, and a predictive launch simulator to turn 30,336 listings into actionable expansion strategies.",
    assumptions: [
      "Merchants and category managers need clear empirical ROI evidence before committing to dual-feature adoption or new locality launches.",
      "Demand density (votes per venue) and spend capacity reveal actionable micro-market white spaces better than raw listing counts alone.",
      "A predictive simulation model allows operators to test pricing, cuisine, and feature scenarios before risking capital on launches.",
    ],
    decisions: [
      "Four-cohort feature adoption flywheel quantifying uplift for delivery, table reservations, and dual-adoption",
      "Composite Market Opportunity Index (MOI) weighting demand intensity (50%), spend power (25%), and quality headroom (25%)",
      "Predictive ML launch simulator providing real-time expected rating, competitive density, and price positioning benchmarks",
      "Production SQL analytics suite featuring 8 interview-grade queries with multi-tier CTEs and window functions",
      "Executive strategy memo articulating North Star metric (Weekly Successful Dining Interactions) and Google HEART framework",
    ],
    flow: [
      "Filter marketplace by micro-market, price tier, and feature enablement",
      "Analyze unit economics, rating uplift, and engagement across feature cohorts",
      "Identify underserved locality gaps and cuisine white spaces using MOI",
      "Simulate restaurant launch scenarios and inspect evidence-backed SQL queries",
    ],
    measurementPlan: [
      "Dual-feature adoption rate and table reservation expansion velocity",
      "Market Opportunity Index ranking validation vs. real-world merchant launch success",
      "Weekly Successful Dining Interactions (WSDI) across micro-markets",
      "Merchant onboarding simulation accuracy (predicted vs. realized ratings)",
      "Category manager engagement across SQL query runner and strategic modules",
    ],
    solution:
      "An interactive Streamlit marketplace intelligence platform combining empirical unit economics across 30,336 listings, a composite Market Opportunity Index, a Scikit-Learn predictive launch engine, and an 8-query SQL analytics suite with an executive C-level strategy memo.",
    technicalNotes: [
      "Python 3.10+",
      "Streamlit",
      "Pandas",
      "Plotly",
      "Scikit-Learn",
      "SQLite / SQL (CTEs, Window Functions)",
    ],
    improvements: [
      "Integrate real-time merchant POS and kitchen order feed data to model intraday peak-hour demand and kitchen wait bottlenecks.",
      "Expand the predictive simulator with causal uplift modeling to isolate organic merchant quality from feature-driven gains.",
      "Build automated merchant diagnostic reports with downloadable PDF action plans for restaurant owners.",
    ],
    poster: "/project-previews/zomato-restaurant-intelligence-home.png",
    liveUrl: "https://zomato-restaurant-intelligence.streamlit.app",
    repoUrl: "https://github.com/Bilal-03/zomato-restaurant-intelligence",
    year: "2026",
    featured: true,
  },
  {
    slug: "dinescope-marketplace-intelligence",
    title: "DineScope",
    category: "Marketplace Intelligence · Product Analytics · Data Quality",
    primaryCategory: "analytics",
    categoryLabel: "Marketplace Analytics",
    tags: ["Marketplace Analytics", "Decision Lab", "Data Quality"],
    summary: "Making marketplace growth opportunities visible without hiding the limits of the evidence.",
    problem:
      "Food-marketplace teams need to decide where to investigate next, but customer growth, market demand, cuisine opportunity and source quality are often measured in separate views. Rankings can look decisive even when they rely on small samples, inconsistent market labels or incomplete supply evidence.",
    users:
      "Product and Growth teams evaluating customer and marketplace opportunities, with Marketplace, Category and City Operations as adjacent decision partners.",
    goal:
      "Create one decision-ready workspace that connects customer behaviour, market demand, cuisine opportunity and data reliability while separating observed facts, assumptions and investigation hypotheses.",
    assumptions: [
      "Teams need evidence thresholds and confidence context before an opportunity enters a prioritised queue.",
      "Repeat behaviour and cohort retention must remain separate to avoid overstating customer habit.",
      "A marketplace recommendation is more trustworthy when missing coverage, mapping choices and source limitations are visible at the point of interpretation.",
    ],
    decisions: [
      "Six connected workspaces spanning overview, customer growth, market demand, cuisine gaps, reliability and prioritisation",
      "Equal-length comparison windows and minimum samples before markets or cuisine opportunities can lead a ranking",
      "Additive 1/n allocation for multi-cuisine transactions with explicit reconciliation",
      "Configurable Decision Lab with confidence discounting, evidence guardrails and aggregate-only exports",
    ],
    flow: [
      "Establish the audited marketplace baseline",
      "Investigate customer, market or cuisine signals",
      "Review sample size, coverage, mappings and confidence",
      "Compare priorities and export an evidence-backed decision brief",
    ],
    measurementPlan: [
      "Time from opening the workspace to a prioritised investigation",
      "Share of ranked opportunities that pass evidence thresholds",
      "Follow-through from overview signals into deeper analysis",
      "Decision Lab scenario comparison and brief export rate",
      "Metric reconciliation, mapping coverage and data-quality test pass rate",
    ],
    solution:
      "A public, aggregate-only marketplace intelligence platform that turns 150,281 source rows into audited customer, demand and cuisine workflows, then keeps validity rules, confidence and evidence boundaries beside every decision signal.",
    technicalNotes: [
      "Python 3.11",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Altair",
      "Aggregate JSON",
      "Python unittest",
    ],
    improvements: [
      "Validate the prioritisation workflow with Product, Growth and Marketplace practitioners using real investigation tasks.",
      "Add durable, permissioned team sharing for Decision Lab scenarios when collaboration becomes a proven need.",
      "Connect a stronger operational source before adding delivery, cancellation, profitability or causal-lift metrics.",
    ],
    poster: "/project-previews/dinescope-home.png",
    liveUrl: "https://dinescope-marketplace-intelligence.streamlit.app",
    repoUrl: "https://github.com/Bilal-03/dinescope-marketplace-intelligence",
    year: "2026",
    featured: true,
  },
  {
    slug: "ai-business-analytics-studio",
    title: "AI Business Analytics Studio",
    category: "Business Intelligence · Applied AI · Data Products",
    primaryCategory: "analytics",
    categoryLabel: "Marketplace Analytics",
    tags: ["Business Intelligence", "DuckDB / SQL", "Applied AI"],
    summary: "Turning raw business data into decisions that can be inspected and reproduced.",
    problem:
      "Business data often arrives as inconsistent exports, while preparation, analysis, forecasting and reporting happen across disconnected tools with little visibility into how a result was produced.",
    users:
      "Business operators and analysts who need to turn operational datasets into trustworthy analysis without rebuilding the workflow for every source.",
    goal:
      "Create one evidence-backed workspace for preparing data, exploring performance, asking grounded AI questions and publishing reproducible reports.",
    assumptions: [
      "Users need analytics to adapt to business meaning rather than fixed column names.",
      "Transformations and insights are easier to trust when their source version and lineage remain visible.",
      "AI assistance should work from bounded analytical evidence and clearly state its limitations.",
    ],
    decisions: [
      "Semantic role mapping for dataset-independent analytics",
      "Non-destructive preparation with immutable dataset versions",
      "Evidence-linked metrics, charts, forecasts and AI insights",
      "One workflow spanning analysis, SQL and multi-format reporting",
    ],
    flow: [
      "Upload and profile a business dataset",
      "Clean the data and confirm its semantic roles",
      "Analyze performance, customers and products",
      "Generate intelligence, forecasts and reproducible reports",
    ],
    measurementPlan: [
      "Time from upload to analysis-ready data",
      "Semantic mapping confirmation and readiness rate",
      "Transformation preview-to-commit completion",
      "Evidence coverage across generated insights",
      "Analysis-to-report completion rate",
    ],
    solution:
      "A Python-based analytics studio that connects data ingestion, preparation, business intelligence, safe AI assistance, forecasting, anomaly detection, SQL and publishing in one version-aware workflow.",
    technicalNotes: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "DuckDB",
      "Scikit-learn",
      "SQLAlchemy",
      "Gemini API",
      "Docker",
    ],
    improvements: [
      "Add scheduled refresh and background processing for recurring analytical workflows.",
      "Introduce organization workspaces and real-time collaboration for teams.",
      "Move production deployments to managed identity, metadata storage and object storage.",
    ],
    poster: "/project-previews/ai-business-analytics-studio-home.png",
    liveUrl: "https://aibizanalyticsstudio.streamlit.app",
    repoUrl: "https://github.com/Bilal-03/ai-business-analytics-studio",
    year: "2026",
  },
  {
    slug: "bizguide-ai",
    title: "BizGuide AI",
    category: "AI Product · Knowledge Retrieval · Compliance UX",
    primaryCategory: "ai",
    categoryLabel: "Applied AI",
    tags: ["RAG Architecture", "LLM Systems", "Compliance UX"],
    summary: "Document-grounded compliance guidance and multi-agent retrieval for Indian businesses.",
    problem:
      "Business owners face complex legal, tax and compliance questions, but generic answers can be difficult to trust or apply to a specific business.",
    users: "Indian businesses looking for practical, source-backed guidance across legal, tax and general compliance questions.",
    goal:
      "Make a complex knowledge workflow easier to navigate while keeping answers grounded in supporting documents.",
    assumptions: [
      "Users need context-aware guidance rather than a generic chatbot response.",
      "Specialist routing can keep the answer focused on the question type.",
      "Citations and controlled document workflows improve confidence and reviewability.",
    ],
    decisions: [
      "Specialist Legal, Tax and General assistance flows",
      "Business profile context and conversation history",
      "Document-grounded retrieval with visible sources",
      "Controlled PDF upload and workspace settings",
    ],
    flow: [
      "Describe a business question",
      "Route the request to a specialist flow",
      "Retrieve supporting knowledge",
      "Review the answer and cited sources",
    ],
    measurementPlan: [
      "Citation coverage and source relevance",
      "Retrieval success and safe abstention rate",
      "Task completion for common compliance questions",
      "Time to a useful, reviewable answer",
      "Escalation and follow-up question rate",
    ],
    solution:
      "A responsive multi-agent RAG product that combines specialist routing, business context, document retrieval and a workspace for repeat questions.",
    technicalNotes: [
      "React 19",
      "Vite",
      "FastAPI",
      "LangChain",
      "Llama 3.3",
      "Pinecone",
      "Gemini embeddings",
    ],
    improvements: [
      "Test answer quality with a labeled set of representative business questions.",
      "Make uncertainty and escalation behavior more explicit in the interface.",
      "Add document lifecycle controls for versioning and stale guidance.",
    ],
    poster: "/project-previews/bizguide-ai-home.png",
    liveUrl: "https://businessrag.vercel.app",
    repoUrl: "https://github.com/Bilal-03/businessrag",
    year: "2026",
  },
  {
    slug: "finassist",
    title: "FinAssist",
    category: "FinTech · Financial Information · Tools",
    primaryCategory: "product",
    categoryLabel: "0-to-1 Product",
    tags: ["FinTech", "Calculators", "Information UX"],
    summary: "Bringing market telemetry, financial calculations, and planning utilities into one calm workspace.",
    problem:
      "Financial tasks often require switching between market information, calculators, currency data and different sources of context.",
    users: "People exploring financial information, calculations and market context in one workspace.",
    goal:
      "Make common financial tasks easier to discover, complete and understand without turning the experience into a dense dashboard.",
    assumptions: [
      "Users benefit from task-oriented entry points rather than a long list of features.",
      "A calculation is more useful when its inputs and assumptions are visible.",
      "Market information needs clear freshness and source context.",
    ],
    decisions: [
      "One workspace for market information and financial utilities",
      "SIP, EMI, FD and Zakat calculator flows",
      "Mutual fund and live market information search",
      "News, currency and commodity context alongside tools",
    ],
    flow: [
      "Choose a financial task",
      "Enter the relevant personal or market context",
      "Review the calculation or information result",
      "Use the result to decide on a next step",
    ],
    measurementPlan: [
      "Task completion by tool",
      "Drop-off at each input step",
      "Result freshness and source coverage",
      "Input validation and error rate",
      "Repeat usage of saved or common tools",
    ],
    solution:
      "A Flask-based finance dashboard that combines market information, calculators, news and financial utilities around common user tasks.",
    technicalNotes: ["Python", "Flask", "JavaScript", "REST APIs"],
    improvements: [
      "Add explicit source and timestamp context to every live-data view.",
      "Test calculator explanations with people who are not financially technical.",
      "Separate educational information from personalized financial advice more clearly.",
    ],
    poster: "/project-previews/finassist-home.png",
    liveUrl: "https://vfa-9tbs.onrender.com",
    repoUrl: "https://github.com/Bilal-03/vfa",
    year: "2025",
  },
  {
    slug: "karobarkit",
    title: "KarobarKit",
    category: "Business Systems · Tool Discovery · Workflows",
    primaryCategory: "product",
    categoryLabel: "0-to-1 Product",
    tags: ["Business Utilities", "Workflow Design", "Tool Discovery"],
    summary: "Helping small businesses discover and complete practical operational tasks and calculations.",
    problem:
      "Small businesses often need a specific calculator, invoice tool or operational utility but have to search across disconnected resources to find one.",
    users: "Business owners and operators looking for practical tools for everyday work.",
    goal:
      "Turn a broad business task into a focused path to the right tool, result or next action.",
    assumptions: [
      "People search by the task they need to complete, not by the name of a product.",
      "Clear categories and filters can reduce discovery friction.",
      "A useful result should make the next operational action obvious.",
    ],
    decisions: [
      "Task-first search and category filters",
      "Tool cards with scope and verification context",
      "Focused calculator and generator flows",
      "Result and receipt views that support the next action",
    ],
    flow: [
      "Describe or search for a business task",
      "Filter and select the right tool",
      "Enter the required business context",
      "Review, export or act on the result",
    ],
    measurementPlan: [
      "Search-to-tool selection rate",
      "Tool completion rate by category",
      "Drop-off by input step",
      "Result export or follow-up action rate",
      "Repeat usage for recurring tasks",
    ],
    solution:
      "A task-oriented business toolkit that brings discovery, calculators and operational utilities into a calmer, more searchable experience.",
    technicalNotes: ["React", "TypeScript", "Information Architecture"],
    improvements: [
      "Test the category model with operators who use different business vocabulary.",
      "Add saved tools and recent-task shortcuts for repeat workflows.",
      "Verify each tool's result format and data freshness before production use.",
    ],
    poster: "/project-previews/karobarkit-home.png",
    liveUrl: "https://karobarkit.vercel.app",
    repoUrl: "https://github.com/Bilal-03/karobarkit",
    year: "2026",
  },
  {
    slug: "crm-pro",
    title: "CRM Pro",
    category: "Sales Operations · Business Systems · Analytics",
    primaryCategory: "product",
    categoryLabel: "0-to-1 Product",
    tags: ["Sales Operations", "Kanban Pipeline", "Business Systems"],
    summary: "Turning scattered sales work into a visible, structured operating system.",
    problem:
      "Sales teams lose context when leads, activities, follow-ups, conversations and pipeline decisions live in separate places.",
    users: "Small sales teams that need a clearer way to manage contacts, opportunities and daily work.",
    goal:
      "Create one workspace for pipeline movement, daily activities, automation and reporting without hiding the underlying workflow.",
    assumptions: [
      "A shared pipeline makes ownership and next actions easier to understand.",
      "Daily work views are more useful than a dashboard that only reports history.",
      "Automation should make follow-through easier without obscuring control.",
    ],
    decisions: [
      "Kanban pipeline for stage movement",
      "My Day activities and notes for follow-through",
      "Automation rules for repeatable actions",
      "Reports, goals and forecast views for decision-making",
    ],
    flow: [
      "Capture and qualify a lead",
      "Move the opportunity through pipeline stages",
      "Schedule activities and record context",
      "Review conversion, pipeline and forecast signals",
    ],
    measurementPlan: [
      "Stage-to-stage conversion rate",
      "Pipeline value by owner and source",
      "Sales cycle and time in stage",
      "Win rate and forecast versus target",
      "Activity completion and follow-up drop-off",
    ],
    solution:
      "A business system that combines contacts, pipeline, activities, automation and reporting around the way a sales team actually works.",
    technicalNotes: ["React", "Vite", "PostgreSQL", "Clerk", "Tailwind CSS"],
    improvements: [
      "Validate the default pipeline and reporting views with sales teams.",
      "Add stronger permissions and audit history for business-critical changes.",
      "Connect reporting definitions directly to a documented metric glossary.",
    ],
    poster: "/project-previews/crm-pro-home.png",
    liveUrl: "https://crm-sepia-chi-24.vercel.app",
    repoUrl: "https://github.com/Bilal-03/crm",
    year: "2023",
  },
  {
    slug: "invoice-intelligence",
    title: "Invoice Intelligence",
    category: "AI Automation · AP Workflows · Document Intelligence",
    primaryCategory: "ai",
    categoryLabel: "Applied AI",
    tags: ["Document OCR", "AP Automation", "Human-in-the-Loop"],
    summary: "Turning unstructured invoices into validated, reviewable accounts-payable data.",
    problem:
      "Accounts-payable teams need to extract, verify and act on invoice data, but documents arrive in inconsistent formats and low-confidence fields need human attention.",
    users: "Procurement and accounts-payable teams reviewing invoices and payment readiness.",
    goal:
      "Create a workflow that makes extraction, validation and review visible from upload through payment operations.",
    assumptions: [
      "Human review should focus attention on uncertain fields rather than repeat the entire process.",
      "Structured fields are more useful when their confidence and source are visible.",
      "Operational workflows need more than OCR: duplicate, vendor and payment context matter.",
    ],
    decisions: [
      "Document preprocessing and OCR pipeline",
      "Field extraction followed by validation",
      "Low-confidence human review queue",
      "Duplicate, vendor and payment workflow context",
    ],
    flow: [
      "Upload an invoice",
      "Extract and validate structured fields",
      "Review low-confidence or flagged values",
      "Approve, hold or queue the invoice for payment",
    ],
    measurementPlan: [
      "Field-level accuracy on a labeled document set",
      "Review rate by confidence threshold",
      "Processing time by document type",
      "Duplicate detection precision",
      "Approval-to-payment cycle time",
    ],
    solution:
      "An invoice intelligence workflow that combines document processing, structured extraction, human review and accounts-payable operations.",
    technicalNotes: [
      "Python",
      "FastAPI",
      "OpenCV",
      "PaddleOCR / Tesseract",
      "React",
      "Supabase",
      "Docker",
    ],
    improvements: [
      "Benchmark field-level quality by vendor and document layout.",
      "Make correction feedback reusable for future extraction improvements.",
      "Add clearer exception ownership and audit history for payment decisions.",
    ],
    poster: "/project-previews/invoice-intelligence-home.png",
    liveUrl: "https://invoice-extraction-lac.vercel.app",
    repoUrl: "https://github.com/Bilal-03/invoice-extraction",
    year: "2024",
  },
];

const PROJECT_DISPLAY_ORDER = [
  "handovr",
  "productlens",
  "zomato-restaurant-intelligence",
  "dinescope-marketplace-intelligence",
  "ai-business-analytics-studio",
  "bizguide-ai",
  "finassist",
  "karobarkit",
  "crm-pro",
  "invoice-intelligence",
] as const;

export const PROJECTS = PROJECT_DISPLAY_ORDER.map((slug) =>
  CASE_STUDIES.find((project) => project.slug === slug)
).filter((project): project is CaseStudy => Boolean(project));

export const EXPERIENCE = [
  {
    title: "Project Manager",
    company: "Digital Data Solution Pvt Ltd",
    badge: "Product & Operations Management",
    location: "Delhi, India · Hybrid",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Coordinating document digitization & scanning workflows from scoping through quality-controlled delivery across cross-functional teams.",
      "Structuring project roadmaps, resource allocation, and milestone governance to keep complex operations on schedule.",
      "Engineering data-driven process audits and standard operating procedures (SOPs) that increased scanning throughput predictability.",
    ],
  },
  {
    title: "Founder",
    company: "Handovr",
    badge: "0-to-1 Product & Marketplace",
    location: "India · On-site",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Designed and launched an end-to-end verified C2C marketplace solving trust, pricing uncertainty, and handover coordination for used electronics.",
      "Engineered a proprietary 16-point hardware verification workflow, escrow payment flow, and doorstep coordination model.",
      "Conducting direct user testing and qualitative feedback sessions across Delhi NCR to validate buyer confidence triggers and drop-off bottlenecks.",
    ],
  },
  {
    title: "AI & Automation Intern",
    company: "NimbleS2P by Techpanion",
    badge: "Applied AI & Document Systems",
    location: "Remote / Hybrid",
    period: "Jun 2024 – Jul 2024",
    current: false,
    bullets: [
      "Contributed to an enterprise AP invoice automation platform extracting and validating structured tabular data from multi-format vendor invoices.",
      "Built document processing pipelines integrating OpenCV preprocessing, OCR bounding-box extraction, and validation rules.",
      "Developed human-in-the-loop review queues and duplicate detection heuristics that reduced manual document inspection overhead.",
    ],
  },
  {
    title: "Product & Business Systems Intern",
    company: "iCtrlBiz Consulting Pvt Ltd",
    badge: "Product & Sales Systems",
    location: "Noida, India",
    period: "Aug 2023 – Dec 2023",
    current: false,
    bullets: [
      "Mapped complex B2B sales cycles into modular CRM software features including Kanban stage management, quotes, and activity trackers.",
      "Collaborated with business stakeholders to design user journey wireframes, metric dashboards, and automated lead notifications.",
      "Implemented full-stack features using React and PostgreSQL, significantly improving sales visibility and follow-up adherence.",
    ],
  },
];

export const SKILLS = [
  {
    title: "Product Strategy & Discovery",
    tagline: "Framing problems, PRDs, and user journeys",
    items: [
      "Problem Framing & Opportunity Sizing",
      "Product Requirements (PRDs & Specs)",
      "User Journey Mapping & Personas",
      "Prioritization (RICE / Kano Framework)",
      "Marketplace Mechanics & Unit Economics",
      "Go-to-Market (GTM) Strategy",
    ],
  },
  {
    title: "Product Analytics & SQL",
    tagline: "KPI design, cohort retention, and data exploration",
    items: [
      "Advanced SQL (CTEs, Window Functions, Partitions)",
      "KPI & Metric Hierarchy Design",
      "Cohort & Retention Modeling",
      "Funnel Diagnostic & Drop-off Analysis",
      "A/B Testing & Experimentation Logic",
      "Business Intelligence (DuckDB, Pandas, Plotly)",
    ],
  },
  {
    title: "Applied AI & Knowledge Systems",
    tagline: "RAG architectures, OCR, and predictive models",
    items: [
      "LLM Orchestration & Multi-Agent RAG",
      "Vector Databases & Semantic Embeddings",
      "Document OCR & Extraction Pipelines",
      "Predictive ML Simulators (Scikit-Learn)",
      "Prompt Engineering & Guardrails",
      "AI-assisted Rapid Prototyping",
    ],
  },
  {
    title: "Technical & Execution Stack",
    tagline: "Full-stack building, data APIs, and deployment",
    items: [
      "Python (FastAPI, Streamlit, Pandas, NumPy)",
      "TypeScript / React / Next.js",
      "PostgreSQL / SQLite / Supabase",
      "REST APIs & Data Ingestion",
      "Tailwind CSS & Modern UI Systems",
      "Git / GitHub / Cloud Deployment",
    ],
  },
];

export const EDUCATION = [
  {
    institution: "Vellore Institute of Technology",
    qualification: "B.Tech in Computer Science and Engineering (AI and ML)",
    period: "Sep 2021 – Jul 2025",
    location: "Chennai, India",
    details: "Focused on Artificial Intelligence, Machine Learning, Data Structures, and Software Engineering.",
  },
];

export const CERTIFICATIONS = [
  "Python Programming — IIT Bombay",
  "C Programming — IIT Bombay",
  "Cisco Packet Tracer / Network Simulation — Cisco Networking Academy",
  "AI for All: From Basics to GenAI Practice — NVIDIA",
];
