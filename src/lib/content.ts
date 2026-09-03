/**
 * ---------------------------------------------------------------------------
 * PORTFOLIO CONTENT — the only file you need to edit for normal updates.
 * ---------------------------------------------------------------------------
 */

export const site = {
  name: "Rohit Jain",
  role: "Engineering Manager",
  subrole: "Principal Frontend Engineer",
  // The thesis line. This is the first thing anyone reads.
  thesis:
    "I lead frontend teams and still hold the architecture. Fifteen years of it.",
  location: "Pune, India",
  email: "rohitjainlnct@gmail.com",
  github: "https://github.com/jrohit",
  linkedin: "https://linkedin.com/in/connectwithrohit",
  lab: "https://mylocalcloud.in",
  photo: "/headshot.jpg",
  // TODO: update once the domain is live (e.g. https://rohit.is-a.dev)
  url: "https://rohit.is-a.dev",
};

/** The headline result. Sits above the fold, on its own. */
export const headline = {
  metric: "63%",
  claim: "faster page loads",
  context:
    "The end-to-end re-architecture I led at HivePro cut page load time by roughly 63% across a live threat-exposure platform — and took Core Web Vitals, accessibility and developer velocity up with it.",
};

/**
 * Two bios, one toggle. Short is for recruiters skimming in 20 seconds;
 * long is for the hiring panel who want to know how you think.
 */
export const bio = {
  short: [
    "Engineering Manager and principal-level frontend engineer, 15+ years building large customer-facing platforms across SaaS, cybersecurity and enterprise.",
    "I lead a cross-geography team of seven at HivePro — hiring, performance, roadmap — while staying hands-on with the architecture. Previously Viasat and seven years at Cisco.",
    "AI-first in practice, not in pitch: LLMs in the product and in the engineering workflow, plus a production media pipeline I designed and operate myself.",
  ],
  long: [
    "I'm an Engineering Manager and principal-level frontend engineer. Fifteen years, six teams, three countries — and the same preoccupation throughout: building things at a scale where the architecture decisions actually start to bite.",
    "Today I lead frontend at HivePro, a threat-exposure management company, where I own a cross-geography team of seven engineers end to end: hiring, performance reviews, career growth, and the technical roadmap. I've deliberately never taken the trade where you stop writing code. I define the architecture for the React and TypeScript platform we ship, and I led the re-architecture that cut page load time by roughly 63% while lifting Core Web Vitals, accessibility and developer velocity. I'm the escalation point for high-risk changes and production incidents, and I run the post-mortems afterwards.",
    "Before HivePro I was at Viasat, designing customer-facing systems in React, Node.js and GraphQL, and putting in the monorepo and micro-frontend architecture that let teams deploy without waiting on each other. Before that, seven years at Cisco through Zensar — migrating legacy Backbone and Marionette applications onto React, and pushing TypeScript and shared component libraries across teams that hadn't asked for either yet. That period taught me most of what I know about landing technical change in an organisation, which turns out to be a different skill from designing it.",
    "The through-line now is an AI-first mindset, and I mean it operationally rather than as positioning. Inside the team, that's coding assistants and automation across development, testing and documentation, with real numbers on onboarding speed. Outside it, I designed and run a fully automated content pipeline — Gemini for scripting and quality scoring, ElevenLabs for voice, Remotion for programmatic rendering, orchestrated in n8n — that has been shipping to production on a schedule across several languages. Building it taught me more about AI reliability, cost governance and failure modes than any amount of reading would have.",
    "All of it runs on a Proxmox home lab I designed and operate, exposed through Cloudflare Tunnels. It's where I get to make the infrastructure mistakes that I'd rather not make at work.",
  ],
};

/**
 * The two-track section. Left column proves you lead; right proves you build.
 * Most EM portfolios pick one and read as either non-technical or non-managerial.
 */
export const tracks = {
  led: {
    label: "Led",
    blurb: "What I'm accountable for when the work is other people's.",
    items: [
      {
        title: "A team of seven, three time zones",
        detail:
          "Hiring, performance reviews, career conversations and roadmap planning for a cross-geography frontend team — plus the culture work that makes any of it stick.",
      },
      {
        title: "AI adoption across the engineering workflow",
        detail:
          "Introduced coding assistants and automation into development, testing and documentation. Measurable gains in developer productivity and onboarding speed, not a pilot that quietly died.",
      },
      {
        title: "Release quality as a system, not a rule",
        detail:
          "Code-review standards, CI/CD pipelines and frontend testing practice (Jest, React Testing Library) that cut regression rates rather than just adding process.",
      },
      {
        title: "The escalation point",
        detail:
          "High-risk changes and production incidents come to me, and the post-incident review is mine to run. Partnering across backend, product and security to balance performance, security and delivery.",
      },
    ],
  },
  built: {
    label: "Built",
    blurb: "What I'm still personally responsible for in the codebase.",
    items: [
      {
        title: "A 63% cut in page load time",
        detail:
          "End-to-end re-architecture of a React platform at scale. State management, code-splitting and bundle optimisation strategies that also made the thing maintainable.",
      },
      {
        title: "Monorepo and micro-frontend architecture",
        detail:
          "At Viasat — independent team ownership, faster onboarding, and deployments that could go out decoupled and roll back safely.",
      },
      {
        title: "Legacy migration at Cisco scale",
        detail:
          "Seven years moving Backbone and Marionette applications onto React, and driving TypeScript and shared component libraries across teams for type safety and consistency.",
      },
      {
        title: "A production AI media pipeline",
        detail:
          "Gemini, ElevenLabs and Remotion orchestrated in n8n on Docker with Cloudflare R2 — scheduled, multi-language, and hardened against the failure modes that only show up in production.",
      },
    ],
  },
};

/** Selected work — case studies, not a link dump. */
export const work = [
  {
    name: "Automated AI media pipeline",
    kind: "Personal · production system",
    href: "https://thepulsenews.in",
    summary:
      "An end-to-end content pipeline that embeds LLMs directly in the product: Gemini for scripting and quality scoring, ElevenLabs for voice synthesis, Remotion for programmatic rendering, orchestrated in n8n on Docker with Cloudflare R2 storage.",
    lesson:
      "The interesting part isn't the generation — it's the cost governance, the fail-closed content gates, and the batch resilience that stops one bad item aborting a run. Taking AI from prototype to a dependable scheduled system is mostly engineering, not prompting.",
    stack: ["Gemini", "ElevenLabs", "Remotion", "n8n", "Node.js", "Cloudflare R2"],
  },
  {
    name: "Proxmox home lab",
    kind: "Infrastructure",
    href: "https://mylocalcloud.in",
    summary:
      "A multi-VM Proxmox lab running my own services — photo library, finance tooling, APIs, an AI agent gateway — exposed to the internet through Cloudflare Tunnels with no ports open.",
    lesson:
      "Running your own infrastructure is the cheapest way to keep operational instincts sharp. I've had an OOM cascade take the whole box down and had to read the journal to find it. That experience transfers directly to the day job.",
    stack: ["Proxmox", "Docker", "Cloudflare Tunnels", "Linux", "pm2"],
  },
  {
    name: "EquiSplit",
    kind: "Product · web + Android",
    href: "https://equisplit.mylocalcloud.in",
    summary:
      "A Splitwise-style expense-sharing platform with web and Android clients on Node.js and MongoDB — push notifications, async event handling, and conflict-resolution logic.",
    lesson:
      "Built to stay consistent when the network isn't. Most of the real work was in reconciling state after a client had been offline, which is where naive sync designs fall apart.",
    stack: ["Node.js", "MongoDB", "React", "Android"],
  },
];

export const experience = [
  {
    role: "Engineering Manager — Frontend",
    company: "HivePro Inc.",
    context: "Cybersecurity · Threat Exposure Management",
    period: "2023 — Present",
    place: "Remote / Pune",
  },
  {
    role: "Senior Software Engineer",
    company: "Viasat Inc.",
    context: "Global satellite communications",
    period: "2021 — 2023",
    place: "Carlsbad, CA",
  },
  {
    role: "UI Engineer / Senior Frontend Developer",
    company: "Zensar Technologies",
    context: "Deployed at Cisco Systems",
    period: "2015 — 2021",
    place: "San Jose, CA",
  },
  {
    role: "Senior Software Engineer",
    company: "Mastek Services Ltd",
    context: "UK Government projects",
    period: "2014",
    place: "Pune",
  },
  {
    role: "Senior Software Engineer",
    company: "InfoBeans Systems",
    context: "Full-stack delivery",
    period: "2012 — 2014",
    place: "Indore",
  },
  {
    role: "Senior Web Developer",
    company: "Indore Labs",
    context: "Client applications",
    period: "2010 — 2012",
    place: "Indore",
  },
];

export const education = {
  degree: "Bachelor of Engineering",
  school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
  period: "2006 — 2010",
};

export const skills = [
  { group: "Leadership", items: "Team management · Hiring · Performance reviews · Technical strategy · Roadmapping · Agile / Scrum · Stakeholder alignment" },
  { group: "AI", items: "LLM integration (Gemini, Claude, OpenAI) · Coding assistants · Prompt engineering · Workflow automation (n8n) · AI reliability & cost governance" },
  { group: "Frontend", items: "React · TypeScript · Next.js · Redux Toolkit / Saga · Angular · Micro-frontends · Design systems · Jest / RTL · Core Web Vitals · WCAG" },
  { group: "Backend", items: "Node.js · Express · REST · GraphQL · Java REST services · WebSockets · MongoDB · PostgreSQL · MySQL · Redis" },
  { group: "Platform", items: "AWS (EC2, S3, Lambda, CloudFront) · Docker · CI/CD · GitHub Actions · Jenkins · Proxmox · Linux · Observability" },
  { group: "Architecture", items: "Micro-frontends · Monorepo (Nx, Turborepo) · Microservices · Event-driven · Distributed systems · System design" },
];
