export const site = {
  name: "Mark Anthony Nene",
  title: "Data Analyst Portfolio",
  role: "Freelance Data Analyst",
  tagline: "I turn messy records into decision-ready systems.",
  description:
    "Portfolio of Mark Anthony Nene, a data analyst focused on cleaning, auditing, automation, dashboards, and business reporting.",
  url: "https://rhyxeee.github.io",
  email: "markanthonynene@gmail.com",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1ACO5c7FdHgKfljXX8RD0ES_2o2T1r2Wi",
  profileImage: "/images/profile.png",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Rhyxeee" },
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Email", href: "mailto:markanthonynene@gmail.com" },
  ],
};

export const stats = [
  { value: "4,400+", label: "records cleaned and structured" },
  { value: "₱2M+", label: "budget auditing responsibility" },
  { value: "$5M+", label: "sales data analyzed" },
  { value: "100%", label: "accuracy-first reconciliation focus" },
];

export const achievements = [
  "Uncovered a 230,000x output disparity between urban and island economies, revealing a hidden V-shaped recovery trend.",
  "Built a dashboard for a $5M+ sales dataset that surfaced discount inefficiencies and helped guide resource allocation.",
  "Engineered a Python pipeline to clean 4,400+ records while preserving auditability and financial accuracy.",
  "Served as audit delegate for a ₱2M+ budget with strict reconciliation and compliance checks.",
];

export const skills = [
  "Advanced Excel and Google Sheets",
  "Python for ETL, cleaning, and JSON parsing",
  "SQL with joins, CTEs, and window functions",
  "Data validation and financial reconciliation",
  "Dashboards and business reporting",
  "Workflow documentation and QA",
];

export const experiences = [
  {
    role: "Data Manager · Real Estate Data Specialist",
    company: "GSH Investments",
    meta: "Remote · Feb 2026 to Present",
    summary:
      "Lead daily extraction, structuring, skip tracing, and QA workflows for public-record real estate data used in prospecting and marketing.",
    bullets: [
      "Pull county foreclosure, probate, and tax data from public portals and prepare it for downstream use.",
      "Clean, deduplicate, standardize, and audit records in Google Sheets-based workflows.",
      "Use AI-assisted research and manual verification to enrich owner data and improve lead quality.",
      "Track KPI quality, spot-check outputs, and improve repeatable operating processes.",
    ],
    stack: ["Google Sheets", "Data QA", "Skip Tracing", "Process Design"],
    link: { label: "Work sample PDF", href: "/docs/GSH_Work_Sample.pdf" },
  },
  {
    role: "Administrative Support and Data Associate",
    company: "Lifewood Data Technology",
    meta: "Sep 2023 to Jan 2026",
    summary:
      "Supported data operations, validation, reporting, and process accuracy in a structured business environment.",
    bullets: [
      "Maintained operational records and assisted in cross-checking documents for completeness and consistency.",
      "Prepared organized data outputs that were easier to review, monitor, and report.",
      "Improved speed and clarity of routine data handling tasks through structured templates and review steps.",
    ],
    stack: ["Documentation", "Quality Checks", "Reporting", "Operations"],
    link: { label: "Experience showcase", href: "/docs/Work_Experience_Showcase_LifeWood.pdf" },
  },
];

export const projects = [
  {
    title: "TMDb Data Engineering Master Documentation",
    category: "Data engineering",
    description:
      "Designed a full documentation-driven movie analytics workflow with cleaned entities, structured relationships, and dashboard-ready outputs.",
    image: "/images/tmdb-architecture.png",
    tags: ["Excel", "ETL", "JSON Parsing", "Documentation"],
    links: [
      { label: "View documentation", href: "/docs/TMDb Data Engineering Master Documentation.pdf" },
      { label: "Executive summary", href: "/docs/EXECUTIVE SUMMARY TMDb.pdf" },
    ],
  },
  {
    title: "360° Sales Performance Hub",
    category: "Dashboard analytics",
    description:
      "Built a high-level sales performance dashboard for a multi-million-dollar dataset to surface inefficiencies and trends.",
    image: "/images/360_dashboard.png",
    tags: ["Dashboard", "Sales", "Insights", "Excel"],
    links: [{ label: "View PDF", href: "/docs/360° Sales Performance Hub.pdf" }],
  },
  {
    title: "MySQL Retail Analytics Project",
    category: "SQL analytics",
    description:
      "Used SQL to answer business questions around customers, revenue, and performance patterns using a structured retail dataset.",
    image: "/images/mysql_project.png",
    tags: ["SQL", "CTEs", "Window Functions", "Analytics"],
    links: [{ label: "View PDF", href: "/docs/mysql_project.pdf" }],
  },
  {
    title: "Pima Diabetes Data Audit and Repair",
    category: "Statistical cleaning",
    description:
      "Recovered a highly incomplete healthcare dataset by using a documented audit and repair workflow that preserved analytical usability.",
    image: "/images/PIMA_INDIANS.png",
    tags: ["Data Cleaning", "Outliers", "Imputation", "JASP"],
    links: [{ label: "Methodology PDF", href: "/docs/Pima Diabetes Data Optimization.pdf" }],
  },
];
