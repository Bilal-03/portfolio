export interface VerifiedMetric {
  label: string;
  value: string;
  source: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
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
}

export const PROFILE = {
  name: "Bilal Choudhary",
  eyebrow: "Product · Data · Applied AI",
  headline: "I turn problems and data into useful products.",
  subheadline:
    "Product thinking, analytics and AI-assisted development — from understanding the problem to designing and building the solution.",
  location: "Based in India",
  availability: "Open to Product & Analytics opportunities",
  email: "bilal3512@gmail.com",
  linkedin: "https://www.linkedin.com/in/bilal2012/",
  github: "https://github.com/Bilal-03",
  resume: "/Resume.pdf",
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "handovr",
    title: "Handovr",
    category: "Marketplace · Trust & Safety",
    tags: ["Marketplace", "Trust & Safety", "Operations"],
    summary: "Making second-hand phone transactions clearer and safer.",
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
    technicalNotes: ["Next.js", "React", "Supabase"],
    improvements: [
      "Validate which trust signals influence buyer decisions most.",
      "Instrument the transaction funnel and identify the largest handover drop-offs.",
      "Expand dispute and edge-case flows after observing real transactions.",
    ],
    poster: "/project-previews/handovr-home.png",
    liveUrl: "https://handovr.in",
    year: "2026",
  },
  {
    slug: "productlens",
    title: "ProductLens",
    category: "Product Analytics · Applied AI · Data Governance",
    tags: ["Product Analytics", "Applied AI", "Data Governance"],
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
      "Supabase / OIDC",
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
  },
  {
    slug: "ai-business-analytics-studio",
    title: "AI Business Analytics Studio",
    category: "Business Intelligence · Applied AI · Data Products",
    tags: ["Business Intelligence", "Data Workflows", "Applied AI"],
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
    slug: "crm-pro",
    title: "CRM Pro",
    category: "Sales Operations · Business Systems · Analytics",
    tags: ["Sales Operations", "Workflow Design", "Reporting"],
    summary: "Turning scattered sales work into a visible operating system.",
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
    slug: "bizguide-ai",
    title: "BizGuide AI",
    category: "AI Product · Knowledge Retrieval · Compliance UX",
    tags: ["Applied AI", "RAG", "Compliance UX"],
    summary: "Document-grounded compliance guidance for Indian businesses.",
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
    slug: "karobarkit",
    title: "KarobarKit",
    category: "Business Systems · Tool Discovery · Workflows",
    tags: ["Business Tools", "Workflow Design", "Utility UX"],
    summary: "Helping businesses find and complete practical operational tasks.",
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
    technicalNotes: ["React", "TypeScript", "Product information architecture"],
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
    slug: "finassist",
    title: "FinAssist",
    category: "FinTech · Financial Information · Tools",
    tags: ["FinTech", "Information Architecture", "Calculators"],
    summary: "Bringing financial information and everyday money tools into one place.",
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
    slug: "invoice-intelligence",
    title: "Invoice Intelligence",
    category: "AI Automation · AP Workflows · Document Intelligence",
    tags: ["Document AI", "AP Automation", "Human Review"],
    summary: "Turning unstructured invoices into reviewable business data.",
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
  "ai-business-analytics-studio",
  "finassist",
  "bizguide-ai",
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
    location: "Delhi, India · Hybrid",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Coordinating scanning and digitisation projects from planning through quality-controlled delivery.",
      "Managing timelines, resources and cross-functional communication across operational workflows.",
      "Identifying process improvements that make document-heavy work more predictable and measurable.",
    ],
  },
  {
    title: "Founder",
    company: "Handovr",
    location: "India · On-site",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Building a verified marketplace that addresses trust, verification and coordination in second-hand phone transactions.",
      "Shaping the product journey from listing discovery through pricing, payment and final handover.",
      "Using direct product iteration to test which workflows create confidence for buyers and sellers.",
    ],
  },
  {
    title: "AI & Automation Intern",
    company: "NimbleS2P by Techpanion",
    location: "Remote / Hybrid",
    period: "Jun 2024 – Jul 2024",
    current: false,
    bullets: [
      "Worked on an invoice intelligence and accounts-payable automation platform for turning unstructured documents into validated business data.",
      "Built OCR and document-processing workflows covering preprocessing, extraction, validation and structured output.",
      "Contributed to review and analytics workflows for low-confidence fields, duplicate detection and vendor operations.",
    ],
  },
  {
    title: "Product & Business Systems Intern",
    company: "iCtrlBiz Consulting Pvt Ltd",
    location: "Noida, India",
    period: "Aug 2023 – Dec 2023",
    current: false,
    bullets: [
      "Worked on a CRM and lead-management product focused on customer relationships, sales pipelines, meetings, quotes and invoices.",
      "Translated business workflows into product features such as Kanban pipelines, reminders, dashboards and activity management.",
      "Improved workflow visibility and organization across customer and sales processes with a React and PostgreSQL-based solution.",
    ],
  },
];

export const SKILLS = [
  {
    title: "Product",
    items: [
      "Problem Framing",
      "Requirements",
      "User Flows",
      "Prioritisation",
      "Product Metrics",
      "Business Analysis",
    ],
  },
  {
    title: "Analytics",
    items: [
      "SQL",
      "KPI Analysis",
      "Reporting",
      "Data Exploration",
      "Funnel Analysis",
      "Process Measurement",
    ],
  },
  {
    title: "Applied AI",
    items: [
      "LLM Applications",
      "RAG",
      "Document Intelligence",
      "Automation",
      "Prompt / AI Workflows",
      "AI-assisted Prototyping",
    ],
  },
  {
    title: "Technical",
    items: ["Python", "React", "APIs", "PostgreSQL", "Supabase", "Git / GitHub"],
  },
];

export const EDUCATION = [
  {
    institution: "Vellore Institute of Technology",
    qualification: "B.Tech in Computer Science and Engineering (AI and ML)",
    period: "Sep 2021 – Jul 2025",
    location: "Chennai, India",
  },
];

export const CERTIFICATIONS = [
  "Python Programming — IIT Bombay",
  "C Programming — IIT Bombay",
  "Cisco Packet Tracer / Network Simulation — Cisco Networking Academy",
  "AI for All: From Basics to GenAI Practice — NVIDIA",
];
