import type { Project } from "@/types/content";

// Portfolio projects migrated from the previous Framer portfolio.
// Image files are downloaded into /public/images/projects by the companion
// scripts/download-framer-project-assets.ps1 script.
const cclContentStatus = [
  { label: "Translations & URLs", status: "Live: managed in WebHub and read directly from SQL Server." },
  { label: "Vacancies", status: "Live: managed in WebHub using the vacancy schema developed in 2022." },
  { label: "News articles", status: "Live: managed in WebHub; SQL Server replaces Umbraco for news." },
  { label: "People profiles", status: "Live: managed alongside the website's other content in WebHub." },
];

export const projects: Project[] = [
{
  "id": "global-it-database",
  "order": 3,
  "title": "Global IT Database",
  "slug": "global-it-database",
  "summary": "An enterprise IT management application in development to replace CCL's PowerApps system, bringing global site records, verification, reporting and external asset inventories into one interface.",
  "featured": false,
  "client": "CCL Design / CCL Industries",
  "role": "Full Stack Web Developer & UX/UI Designer",
  "status": "In development",
  "scope": "UX/UI design, full-stack .NET development, relational data modelling and JSON processing",
  "headlineOutcome": "Working foundation for global site management, mapping, verification, reporting and external asset inventories. Development is ongoing.",
  "categories": [
    {
      "title": "Web Development",
      "slug": "web-development"
    },
    {
      "title": "UX/UI",
      "slug": "ux-ui"
    },
    {
      "title": "Web Applications",
      "slug": "web-applications"
    }
  ],
  "services": [
    "UX/UI design",
    "Full-stack development",
    "Database design",
    "Verification workflows",
    "Interactive mapping",
    "JSON integration",
    "Reporting and exports",
    "Automated testing"
  ],
  "technologies": [
    "ASP.NET Core MVC",
    ".NET 10",
    "C#",
    "Razor",
    "Entity Framework Core",
    "SQL Server",
    "HTML",
    "CSS",
    "JavaScript",
    "d3-geo",
    "Git/GitHub"
  ],
  "standards": [
    "CycloneDX (JSON)"
  ],
  "designTools": [
    "Figma"
  ],
  "coverImage": "/images/projects/global-it-database/workspace-dashboard-cover.png",
  "sections": [
    {
      "title": "Overview",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The Global IT Database is an enterprise web application designed to simplify how IT information is managed across CCL's international operations."
        },
        {
          "type": "paragraph",
          "text": "I'm responsible for the UX/UI design and full-stack development of the platform, replacing the existing PowerApps solution with a custom ASP.NET Core MVC application backed by a relational SQL Server database."
        },
        {
          "type": "paragraph",
          "text": "I'm working with a colleague, collaborating on developing the schema, setting up the SQL Server database and integrating Microsoft Entra authentication."
        },
        {
          "type": "paragraph",
          "text": "The system centralises site profiles, infrastructure, security configurations, service accounts, external applications and technical documentation, providing a consistent approach to maintaining and reviewing information across global locations."
        }
      ]
    },
    {
      "title": "The Challenge",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Managing detailed IT information across multiple international sites presents significant usability and data-management challenges."
        },
        {
          "type": "paragraph",
          "text": "The application needs to accommodate complex technical records without overwhelming users, while making it straightforward to locate information, identify incomplete records, manage updates and track recurring verification requirements."
        },
        {
          "type": "paragraph",
          "text": "One important design consideration is distinguishing data completeness from verification status. A record may contain all required information but still be overdue for review. Presenting these independently gives users a clearer understanding of both record quality and compliance with internal verification schedules."
        },
        {
          "type": "paragraph",
          "text": "External application inventories add further complexity, requiring support for traditional structured forms alongside flexible JSON-based data imports, without unintentionally overwriting or removing existing information."
        }
      ]
    },
    {
      "title": "Design & Development",
      "blocks": [
        {
          "type": "heading",
          "text": "Interface Design & User Experience"
        },
        {
          "type": "paragraph",
          "text": "I translated the Figma designs into responsive Razor views, establishing a consistent visual system across dashboards, navigation, data tables, forms and individual record pages."
        },
        {
          "type": "paragraph",
          "text": "The interface supports light, dark and hybrid themes, with an emphasis on clear information hierarchy and reducing unnecessary interactions."
        },
        {
          "type": "paragraph",
          "text": "I introduced tabbed record sections, sticky navigation, completion indicators and contextual editing. Users can update individual fields or enter a broader editing mode, allowing detailed technical records to remain readable without sacrificing editability."
        },
        {
          "type": "heading",
          "text": "Global Site Directory & Mapping"
        },
        {
          "type": "paragraph",
          "text": "I developed a searchable site directory with filtering, sortable columns and synchronised list and map views."
        },
        {
          "type": "paragraph",
          "text": "The interactive global map uses d3-geo for geographic projections, enabling users to explore locations visually, zoom into regions and select individual sites."
        },
        {
          "type": "paragraph",
          "text": "Directory filters and navigation context are preserved when returning from a site record, reducing repetitive navigation and helping users maintain their workflow."
        },
        {
          "type": "heading",
          "text": "Data Management & Verification"
        },
        {
          "type": "paragraph",
          "text": "The application uses Entity Framework Core and SQL Server to manage structured site information, relationships and supporting records."
        },
        {
          "type": "paragraph",
          "text": "I implemented quarterly verification workflows, including shared review deadlines, verification windows and automatically calculated status indicators."
        },
        {
          "type": "paragraph",
          "text": "The central dashboard provides visibility into site totals, record completeness, upcoming and overdue reviews, and geographic distribution."
        },
        {
          "type": "paragraph",
          "text": "Change history also captures updates to site information, supporting accountability and ongoing data maintenance."
        },
        {
          "type": "heading",
          "text": "External Asset Inventories & JSON Integration"
        },
        {
          "type": "paragraph",
          "text": "One of the more technically involved areas is the management of external application inventories."
        },
        {
          "type": "paragraph",
          "text": "I designed a hybrid data architecture combining relational SQL Server records with independently stored CycloneDX-compatible JSON documents, supporting both structured manual entry and flexible imported inventories."
        },
        {
          "type": "paragraph",
          "text": "The functionality includes interactive JSON editing, document validation and import previews, alongside configurable conflict-resolution options."
        },
        {
          "type": "paragraph",
          "text": "Users can merge new information, update existing values while preserving omitted fields, or explicitly replace an existing document. These workflows are designed to minimise accidental data loss while accommodating different data sources."
        },
        {
          "type": "heading",
          "text": "Reporting, Documents & Testing"
        },
        {
          "type": "paragraph",
          "text": "I developed searchable reporting interfaces with Excel and CSV exports, alongside repeatable notes, private document attachments and file previews."
        },
        {
          "type": "paragraph",
          "text": "Automated testing covers validation, authorisation, concurrent edits, database integrity and key browser workflows, helping maintain reliability as the application evolves."
        },
        {
          "type": "paragraph",
          "text": "Git and GitHub are used for version control, tracking code changes throughout the project's ongoing development."
        }
      ]
    },
    {
      "title": "Outcome So Far",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The Global IT Database now provides a working foundation for managing and maintaining IT information across CCL's global sites."
        },
        {
          "type": "paragraph",
          "text": "Core functionality includes site management, interactive mapping, structured data editing, verification tracking, reporting, document management and external asset inventories."
        },
        {
          "type": "paragraph",
          "text": "The project demonstrates the integration of UX/UI design, full-stack .NET development, relational data modelling and structured JSON processing within a single enterprise application."
        },
        {
          "type": "paragraph",
          "text": "Development is ongoing, with continued refinement focused on usability, data quality, reliability and additional functionality."
        }
      ]
    }
  ],
  "imageSlider": [
    {
      "src": "/images/projects/global-it-database/dashboard-overview.png",
      "alt": "Global IT dashboard showing site totals, review status and geographic coverage",
      "caption": "Dashboard overview"
    },
    {
      "src": "/images/projects/global-it-database/global-site-directory.png",
      "alt": "Searchable global site directory with survey status, completion indicators and review dates",
      "caption": "Global site directory"
    },
    {
      "src": "/images/projects/global-it-database/global-site-map.png",
      "alt": "Global site map alongside a synchronised list of locations",
      "caption": "Global site map"
    },
    {
      "src": "/images/projects/global-it-database/site-map-location-detail.png",
      "alt": "Zoomed site map with a selected location and its completion and verification details",
      "caption": "Site map location detail"
    },
    {
      "src": "/images/projects/global-it-database/site-record-overview.png",
      "alt": "Site record overview with profile completeness, quarterly verification and tabbed navigation",
      "caption": "Site record overview"
    },
    {
      "src": "/images/projects/global-it-database/site-systems-management.png",
      "alt": "Site systems view with completion indicators and contextual editing for business and security systems",
      "caption": "Site systems management"
    },
    {
      "src": "/images/projects/global-it-database/external-application-inventory.png",
      "alt": "External application inventory with application details, authentication sections and JSON upload, validation and download controls",
      "caption": "External application inventory"
    }
  ]
},
{
  id: "webhub",
  scope: "Database design, full-stack development and editorial workflows",
  headlineOutcome: "One editing workflow for translations, URLs, news, vacancies and people profiles.",
  relatedProjectSlugs: ["ccl-design-website-2026"],
  contentStatus: cclContentStatus,
  workflow: {
    title: "From translation comparison to a live update",
    steps: [
      { title: "Compare four languages", description: "Editors find the translation key and compare English, German, Spanish and Chinese in one table, rather than editing separate resource files.", image: { src: "/images/projects/webhub/webhub-4.png", alt: "WebHub translation table comparing English, German, Spanish and Chinese", caption: "Search and language filters keep related translations together." } },
      { title: "Edit the language values", description: "The editor keeps the translation key and language values together, so editors can update the relevant copy in context.", image: { src: "/images/projects/webhub/webhub-6.png", alt: "Language values for the same translation in four languages", caption: "A single translation key groups the four language values." } },
      { title: "Save once, update the website", description: "Saved changes go to SQL Server. The .NET 10 website reads translations directly from the database, so updates are reflected instantly without exporting RESX files." },
    ],
  },
  order: 2,
  title: "WebHub - Website Content Management",
  slug: "webhub",
  summary:
    "An editorial application designed to make CCL Design's multilingual content easier to maintain.",
  featured: true,
  projectDate: "2026-10-14",
  client: "CCL Design",
  role: "Full Stack Web Developer and UX/UI Designer",
  categories: [
    { title: "Web Development", slug: "web-development" },
    { title: "UX/UI", slug: "ux-ui" },
    { title: "Web Applications", slug: "web-applications" },
  ],
  services: [
    "Requirements gathering",
    "Application architecture",
    "UX/UI design",
    "Frontend development",
    "Backend development",
    "Relational database design",
    "Translation management",
    "Content management workflows",
    "Legacy system integration",
    "Testing and deployment",
  ],
  technologies: [
    "ASP.NET Core MVC",
    ".NET 10",
    "C#",
    "Razor",
    "Entity Framework Core",
    "LINQ",
    "SQL Server",
    "SQL Server Management Studio",
    "HTML",
    "CSS",
    "JavaScript",
    "RESX resource files",
    "Git/GitHub",
    "IIS",
  ],
  designTools: ["Figma"],
  coverImage: "/images/projects/webhub/cover-desktop.png",
  imageSlider: [
    { src: "/images/projects/webhub/webhub-1.png", alt: "WebHub dashboard with translation statistics and quick actions", caption: "Dashboard" },
    { src: "/images/projects/webhub/webhub-2.png", alt: "WebHub vacancy management with filters and job listings", caption: "Vacancy management" },
    { src: "/images/projects/webhub/webhub-3.png", alt: "WebHub news article listing with search and publication status", caption: "News articles" },
    { src: "/images/projects/webhub/webhub-4.png", alt: "WebHub content translations table comparing supported languages", caption: "Content translations" },
    { src: "/images/projects/webhub/webhub-5.png", alt: "WebHub translation editor showing the resource group and translation key", caption: "Editing a translation" },
    { src: "/images/projects/webhub/webhub-6.png", alt: "WebHub language value editor for English, German, Spanish and Chinese", caption: "Language values" },
    { src: "/images/projects/webhub/webhub-7.png", alt: "WebHub URL translations table for multilingual website routes", caption: "URL translations" },
    { src: "/images/projects/webhub/webhub-8.png", alt: "WebHub URL translation editor with language-specific routes", caption: "Editing URL translations" },
    { src: "/images/projects/webhub/webhub-9.png", alt: "WebHub help guide explaining vacancy management workflows", caption: "Help guide" },
  ],
  overview: [
    "I designed and built WebHub to give content editors a dedicated workspace for maintaining CCL Design's website. The case study focuses on the editing experience and the data model behind it; the connected website case study covers public-site integration."
  ],
  challenge: [
    "Content was spread across separate language pages and resource files. Editors needed to find the right copy, compare English, German, Spanish and Chinese, and understand what could be changed without working directly in source files.",
    "The application needed to connect readable content labels with technical resource keys and page references. Its structure also had to accommodate new languages and content types without introducing separate administration tools."
  ],
  process: [
    "I designed a relational structure for languages, resource groups, translation keys, translated values and page routes. Grouping keys by page or shared component makes technical resources easier for editors to locate.",
    "I used Entity Framework Core to define relationships and uniqueness constraints, preventing duplicate keys within a group and conflicting language identifiers. URL language codes such as en and de are kept distinct from culture codes such as en-GB and de-DE.",
    "The Razor administration screens provide search, filtering and contextual editing. The translation walkthrough above shows how comparing and updating language values fits into a single task.",
    "I initially supported RESX export for the legacy Web Forms site, recording generation history. Keeping this compatibility layer allowed the editorial application to develop alongside the public site's migration.",
    "I brought vacancy editing into WebHub while retaining the schema I developed in 2022 and the existing recruitment workflows. News article management replaced the previous Umbraco integration, with people profiles available in the same application.",
    "I worked through form submissions, resource handling and database configuration to make the editing workflow reliable within the SQL Server and IIS environment."
  ],
  outcome: [
    "Editors can maintain the website's supported content types through one application rather than separate tools and resource files. The language and resource model provides a foundation for adding further content and translations."
  ],
},
{
  id: "ccl-design-website-2026",
  scope: "Whole-site .NET 10 migration, multilingual routing and SQL Server publishing",
  headlineOutcome: "Four languages on shared templates, with translations and URLs managed centrally in WebHub.",
  relatedProjectSlugs: ["webhub"],
  contentStatus: cclContentStatus,
  order: 1,
  title: "CCL Design Website 2026",
  slug: "ccl-design-website-2026",
  summary:
    "Modernising CCL Design's global B2B website while preserving its established business workflows.",
  featured: true,
  projectDate: "2026-10-14",
  client: "CCL Design",
  role: "Full Stack Web Developer and UX/UI Designer",
  categories: [
    { title: "Web Development", slug: "web-development" },
    { title: "Web Design", slug: "web-design" },
    { title: "UX/UI", slug: "ux-ui" },
  ],
  services: [
    "UX/UI design",
    "Responsive page design",
    "Prototyping",
    "Frontend development",
    "Backend development",
    "Content management development",
    "Multilingual content management",
    "Database design and development",
    "Technical SEO",
    "Legacy application modernisation",
    "Testing and deployment",
  ],
  technologies: [
    "ASP.NET Core MVC",
    ".NET 10",
    "C#",
    "Razor",
    "SQL Server",
    "Entity Framework Core",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "HTML",
    "LESS/CSS",
    "Cloudflare Turnstile",
    "Git/GitHub",
    "IIS",
  ],
  designTools: ["Figma", "Photoshop"],
  coverImage: "/images/projects/ccl-design-website-2026/cover-laptop.png",
  imageSlider: [
    {
      src: "/images/projects/ccl-design-website-2026/ccl-design-website-1.gif",
      alt: "Animated walkthrough of the CCL Design Color, Material, Finish page",
      caption: "Color, Material, Finish",
    },
    {
      src: "/images/projects/ccl-design-website-2026/ccl-design-website-2.gif",
      alt: "Animated walkthrough of the CCL Design Decorative Solutions page",
      caption: "Decorative Solutions",
    },
  ],
  overview: [
    "I migrated the entire public website from ASP.NET Web Forms to ASP.NET Core on .NET 10. The work combined application modernisation with shared multilingual templates, responsive page design and integration with the site's existing business systems."
  ],
  challenge: [
    "Separate English, German, Spanish and Chinese page implementations made layout changes repetitive and risked inconsistencies. The replacement needed shared views without losing translated URLs or established navigation paths.",
    "The website depended on SQL databases, stored procedures, enquiry forms and email processes. These integrations had to remain compatible throughout the migration, alongside search indexing and links to legacy addresses."
  ],
  process: [
    "I organised the conversion around shared layouts, content pages, locations, news, people, forms and assets. Reusable Razor views replaced separate page implementations, while existing stored-procedure integrations and Turnstile verification were retained.",
    "I implemented culture-aware routing, translated URL slugs and language switching for all four languages. Canonical and hreflang tags, redirect mappings and dynamic sitemaps preserve the relationship between language variants and older addresses.",
    "The public site consumes content managed in WebHub. For translations, reading directly from the database means saved editorial changes appear instantly without exporting or deploying resource files. The connected WebHub case study explains how editors make those changes.",
    "I removed the Umbraco news integration and implemented its replacement schema. Vacancies retained the SQL Server schema I originally developed in 2022, which was still in use when I returned; vacancies were never managed through Umbraco.",
    "I refined responsive product, sector and campaign pages in Figma and moved media towards local-first delivery. Error handling, accessibility improvements, regression tools and integration checks supported the migration and cutover."
  ],
  outcome: [
    "The completed migration gives the website a shared application structure across four languages while retaining its established forms and recruitment workflows. It also provides a more maintainable foundation for future page and content changes."
  ],
},
  {
    id: "ccl-design-website",
    order: 5,
    title: "CCL Design Website 2022",
    slug: "ccl-design-website",
    summary:
      "This project involved the complete redesign and development of CCL Design’s B2B public facing website.",
    featured: true,
    projectDate: "2025-01-25",
    client: "CCL Design",
    role: "Web designer and developer",
    categories: [
      { title: "Web Development", slug: "web-development" },
      { title: "Web Design", slug: "web-design" },
      { title: "UX/UI", slug: "ux-ui" },
    ],
    services: [
      "UX research",
      "Stakeholder interviews",
      "UI design",
      "Prototyping",
      "Frontend development",
      "Backend development",
    ],
    technologies: ["ASP.NET", "C#", "LESS/CSS"],
    designTools: ["Adobe XD", "Photoshop"],
    coverImage: "/images/projects/ccl-design-website/cover.png",
    sections: [
      {
        "title": "CCL Design Website",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This project involved the complete redesign and development of CCL Design’s B2B public facing website. Below is a video of the site as it was in 2022."
          },
          {
            "type": "link",
            "text": "View video of full site >",
            "href": "https://www.youtube.com/watch?v=LBkwpZdF2Os&list=PL3pdFcvOYHyWaLZZEKd_cSrf542AlXGTl&index=5"
          }
        ]
      },
      {
        "title": "Context",
        "blocks": [
          {
            "type": "paragraph",
            "text": "I led the complete redesign and development of ccldesign.com, creating the website from scratch using ASP.NET, C#, and LESS.css. The goal was to modernise the site’s user experience, improve navigation, and align the design with CCL Design’s global branding to ultimately drive more traffic to the site, reduce bounce rates and increase conversions. I translated business and user requirements into responsive layouts, built a scalable backend, and implemented clean, maintainable front-end code. The result was a faster, more accessible, and user-friendly website that delivered improved performance, SEO, and content management flexibility."
          }
        ]
      },
      {
        "title": "Impact",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The impact of the work I carried out on the site resulted in a 24% reduction in bounce rate & around 34% increase in average session duration, and improved conversion rates through clearer user flows. Also a 130% increase in page views."
          }
        ]
      },
      {
        "title": "UX Research",
        "blocks": [
          {
            "type": "paragraph",
            "text": "I began the process of the redesigning and developing the site first by gathering requirements from stakeholders and reviewing site metrics on Google Analytics."
          },
          {
            "type": "heading",
            "text": "Google Analytics"
          },
          {
            "type": "paragraph",
            "text": "I began by reviewing the performance of the site overall to pin point any pain points users were having with the site, areas they were dropping off or becoming frustrated"
          },
          {
            "type": "heading",
            "text": "Stakeholder Interviews & Meetings"
          },
          {
            "type": "paragraph",
            "text": "I held numerous meetings with stakeholders within the company to gather content based on the insights gained from reviewing the google analytics data."
          },
          {
            "type": "paragraph",
            "text": "Once these were complete. I moved on to creating designs and prototypes for review by stakeholders."
          }
        ]
      },
      {
        "title": "User Interface",
        "blocks": [
          {
            "type": "heading",
            "text": "Designing the Website"
          },
          {
            "type": "paragraph",
            "text": "For each page of the site I produced designs and prototypes using Photoshop and Adobe XD to envision how it could look and relayed with stakeholders to get feedback, iterating upon them until everyone was happy and the UX requirements were satisfied too."
          }
        ]
      },
      {
        "title": "Development",
        "blocks": [
          {
            "type": "heading",
            "text": "Building the Website"
          },
          {
            "type": "paragraph",
            "text": "I began building the website once I had all the content and prototypes designed. Using ASP.Net & C# as the basis for the site, and less.js css pre-processor to speed up styling."
          },
          {
            "type": "link",
            "text": "View video of full site >",
            "href": "https://www.youtube.com/watch?v=LBkwpZdF2Os&list=PL3pdFcvOYHyWaLZZEKd_cSrf542AlXGTl&index=5"
          }
        ]
      }
    ],
  },
  {
    id: "web-portal",
    scope: "User research, three redesigns (2022–2025) and a Figma design system",
    headlineOutcome: "Three portal redesigns delivered; seven dashboard interviews shaped the final redesign.",
    order: 4,
    title: "Ekco Web Portal",
    slug: "web-portal",
    summary:
      "A cloud and security services portal redesigned around the tasks customers need to complete.",
    featured: true,
    projectDate: "2025-08-03",
    employer: "Ekco",
    role: "UX/UI Designer",
    categories: [
      { title: "UX/UI", slug: "ux-ui" },
      { title: "Web Design", slug: "web-design" },
    ],
    services: [
      "User research",
      "User interviews",
      "Affinity mapping",
      "Wireframing",
      "UI design",
      "Design systems",
    ],
    designTools: ["Figma"],
    coverImage: "/images/projects/web-portal/cover.png",
    sections: [
      {
        "title": "Introduction",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The Ekco portal helps customers manage their cloud and security systems and access service reports. I led UX/UI design across three redesigns between 2022 and 2025, working with product, engineering, cloud and security teams as the platform evolved."
          }
        ]
      },
      {
        "title": "Context",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The original portal used a generic template. As its services expanded, customers needed clearer routes to reports, more relevant dashboard content and controls they could recognise. The sections below outline the research and interface work behind the final redesign."
          }
        ]
      },
      {
        "title": "How seven interviews shaped the final redesign",
        "blocks": [
          {
            "type": "paragraph",
            "text": "I documented seven dashboard interviews and grouped the observations in an affinity map. These interviews informed the final redesign. One recurring problem was relevance: users saw widgets that did not match their services or day-to-day tasks, while some bypassed the dashboard to reach reports through the sidebar."
          },
          {
            "type": "heading",
            "text": "Finding: a dashboard users could not make their own"
          },
          {
            "type": "paragraph",
            "text": "Participants wanted to choose which widgets appeared and arrange them around their own work. The notes also exposed differences between user contexts: some valued news and team contacts, while others mainly needed backup or security reporting. A fixed set of widgets could not serve all of these needs equally well."
          },
          {
            "type": "image",
            "item": {
              "src": "/images/projects/web-portal/research-key-insights.png",
              "alt": "Research findings covering dashboard customisation, widget relevance, feature discoverability and confusing tab filters",
              "caption": "Excerpt from the interview summary: the findings that informed the dashboard recommendations.",
              "width": 1157,
              "height": 181
            }
          },
          {
            "type": "heading",
            "text": "Design response: widget choice and clearer controls"
          },
          {
            "type": "paragraph",
            "text": "I translated these themes into a design brief for a customisable dashboard: a toolbar to add or remove widgets, drag-and-drop ordering, and widget visibility based on user roles and customer context. The summary also recommended replacing the ambiguous tabbed section with an explicit Filter button, using names aligned with the service catalogue."
          },
          {
            "type": "paragraph",
            "text": "A related discoverability finding was that participants struggled to locate feedback under Settings. I recommended moving it to the sidebar or top header, where users expected to find it."
          },
          {
            "type": "heading",
            "text": "Result: research priorities carried into the final redesign"
          },
          {
            "type": "paragraph",
            "text": "I used the interview findings to guide wireframing and the final UI design, prioritising dashboard relevance, customisation and discoverability. The linked report records the research recommendations; the wireframes and prototype show the subsequent design work."
          },
          {
            "type": "link",
            "text": "Read the interview summary",
            "href": "https://www.figma.com/board/9EK3G9HdVIKBc1AzsGXD0P/Web-Portal-Interviews-Summary?node-id=0-1&p=f&t=yHosPWsTxVbCT63v-0"
          },
          {
            "type": "link",
            "text": "Explore the dashboard wireframes",
            "href": "https://www.figma.com/proto/L1XwxZXt6qQKGiQ6X3gNL9/Wireframes?node-id=1-12292&viewport=-4251%2C210%2C0.19&t=nMVetvUN97YO20Hk-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A12292&show-proto-sidebar=1"
          }
        ]
      },
      {
        "title": "Delivery and collaboration",
        "blocks": [
          {
            "type": "paragraph",
            "text": "I delivered three major portal redesigns between 2022 and 2025, adapting the interface to changing product requirements and user feedback. The seven-interview study specifically informed the final redesign."
          },
          {
            "type": "paragraph",
            "text": "Each release involved close collaboration with product, engineering, cloud and security stakeholders, balancing customer needs with delivery timelines."
          }
        ]
      },
      {
        "title": "User Experience",
        "blocks": [
          {
            "type": "heading",
            "text": "User Interviews"
          },
          {
            "type": "paragraph",
            "text": "I conducted seven dashboard interviews to understand how participants used the portal, which information mattered to them and where they struggled to find features."
          },
          {
            "type": "link",
            "text": "User Interviews >",
            "href": "https://onedrive.live.com/:x:/g/personal/DD49806AD365FCF4/EaXn4Wf0hTVJhxYdwylR9F8BO7CQX4egZ_MKniafVXQiig?resid=DD49806AD365FCF4!s67e1e7a585f4493587161dc32951f45f&ithint=file%2Cxlsx&e=yPCqRs&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy9kZDQ5ODA2YWQzNjVmY2Y0L0VhWG40V2YwaFRWSmh4WWR3eWxSOUY4Qk83Q1FYNGVnWl9NS25pYWZWWFFpaWc_ZT15UENxUnM"
          },
          {
            "type": "heading",
            "text": "Note-Taking & Affinity Mapping"
          },
          {
            "type": "paragraph",
            "text": "I grouped interview observations and quotes in an affinity map to identify recurring themes and pain points."
          },
          {
            "type": "link",
            "text": "Affinity Map >",
            "href": "https://www.figma.com/board/uhTAADJGcu68MtL5qJ75Ko/Affinity-Map---Insights?node-id=0-1&t=9K18ck435CSpS4b1-1"
          },
          {
            "type": "heading",
            "text": "Insights Generation"
          },
          {
            "type": "paragraph",
            "text": "I turned the themes into design priorities for widget relevance, dashboard customisation, clearer filtering and feature discoverability."
          },
          {
            "type": "link",
            "text": "Insights >",
            "href": "https://www.figma.com/board/uhTAADJGcu68MtL5qJ75Ko/Affinity-Map---Insights?node-id=0-1&t=9K18ck435CSpS4b1-1"
          },
          {
            "type": "heading",
            "text": "Summary Report"
          },
          {
            "type": "paragraph",
            "text": "I compiled the findings and recommendations into a summary report, supported by interview observations and mapped themes."
          },
          {
            "type": "link",
            "text": "Summary Report >",
            "href": "https://www.figma.com/board/9EK3G9HdVIKBc1AzsGXD0P/Web-Portal-Interviews-Summary?node-id=0-1&p=f&t=yHosPWsTxVbCT63v-0"
          }
        ]
      },
      {
        "title": "User Interface",
        "blocks": [
          {
            "type": "heading",
            "text": "Wireframes"
          },
          {
            "type": "paragraph",
            "text": "I explored dashboard layouts and controls through wireframes, using the research priorities to guide the structure."
          },
          {
            "type": "link",
            "text": "Wireframes >",
            "href": "https://www.figma.com/proto/L1XwxZXt6qQKGiQ6X3gNL9/Wireframes?node-id=1-12292&viewport=-4251%2C210%2C0.19&t=nMVetvUN97YO20Hk-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A12292&show-proto-sidebar=1"
          },
          {
            "type": "heading",
            "text": "UI Design"
          },
          {
            "type": "paragraph",
            "text": "I developed the final interface in Figma, translating the user research and wireframes into layouts, reusable components and consistent interaction patterns."
          },
          {
            "type": "link",
            "text": "UI Design >",
            "href": "https://www.figma.com/proto/zLZ9hVxADh2BiSCYaud9Tf/Designs?node-id=110-3607&viewport=1744%2C844%2C0.24&t=Vmj5cLli89k2suvD-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=110%3A2767&show-proto-sidebar=1"
          }
        ]
      },
      {
        "title": "Design System",
        "blocks": [
          {
            "type": "paragraph",
            "text": "I established reusable navigation, dashboard widgets and interface controls, supported by shared styles and interaction patterns. Components and variables in Figma kept the designs consistent and made later iterations easier to maintain."
          },
          {
            "type": "link",
            "text": "Design System >",
            "href": "https://www.figma.com/design/C99I3KxpZBLbv8THDHJNJ1/Design-System?node-id=0-1&t=3NDR2hTtjIeLL7JC-1"
          }
        ]
      },
      {
        "title": "Previous Versions",
        "blocks": [
          {
            "type": "heading",
            "text": "Web Portal V2 Prototype"
          },
          {
            "type": "paragraph",
            "text": "An earlier proposal for the second version of the portal, developed from the research and feedback available at that stage."
          },
          {
            "type": "link",
            "text": "V2 Prototype >",
            "href": "https://www.figma.com/proto/zLZ9hVxADh2BiSCYaud9Tf/Designs?node-id=273-572&viewport=332%2C399%2C0.2&t=m64UYPnMxwpTMOkR-0&scaling=contain&content-scaling=fixed&starting-point-node-id=273%3A572"
          }
        ]
      }
    ],
    prototypeUrl:
      "https://www.figma.com/proto/zLZ9hVxADh2BiSCYaud9Tf/Designs?content-scaling=fixed&node-id=110-3607&scaling=scale-down&show-proto-sidebar=1&starting-point-node-id=110%3A2767&t=Vmj5cLli89k2suvD-0&viewport=1744%2C844%2C0.24",
  },
  {
    id: "t-shirt-designs-andother-products",
    order: 7,
    title: "T-Shirt Designs (& Other Products)",
    slug: "t-shirt-designs-andother-products",
    summary:
      "A long-running personal graphic-design project creating and selling artwork across clothing, accessories and other products through Spreadshirt and Redbubble.",
    featured: false,
    projectDate: "2025-08-15",
    client: "Personal project",
    role: "Graphic designer and shop owner",
    categories: [{ title: "Graphic Design", slug: "graphic-design" }],
    services: ["Graphic design", "Product design", "eCommerce", "SEO"],
    coverImage: "/images/projects/t-shirt-designs/cover.jpg",
    overview: [
      "I created a large collection of designs and sold them across products including T-shirts, hoodies, bags and stickers using Spreadshirt and Redbubble.",
      "I also created a WordPress site to promote and sell the designs, combining the design work with SEO and online marketing.",
    ],
    process: [
      "The work involved producing artwork for a broad range of product formats, publishing it across multiple marketplaces and learning which designs performed best through sales and traffic data.",
    ],
    outcome: [
      "The Spreadshirt account reached more than 8,000 lifetime sales, with several designs ranking highly in marketplace categories. The Redbubble shop also generated steady traffic and additional product sales.",
    ],
    liveUrl: "https://megalawlz.myspreadshop.co.uk/",
    imageSlider: [
      {
        src: "/images/projects/t-shirt-designs/spreadshirt-sales.jpg",
        alt: "Spreadshirt lifetime sales and earnings statistics",
        caption: "Spreadshirt lifetime sales and earnings.",
      },
      {
        src: "/images/projects/t-shirt-designs/spreadshirt-best-sellers.jpg",
        alt: "Spreadshirt best-selling design statistics",
        caption: "Examples of best-selling Spreadshirt designs.",
      },
      {
        src: "/images/projects/t-shirt-designs/redbubble-traffic.jpg",
        alt: "Redbubble audience traffic chart",
        caption: "Redbubble traffic sources and visitor activity.",
      },
      {
        src: "/images/projects/t-shirt-designs/redbubble-sales.jpg",
        alt: "Redbubble artwork and product earnings",
        caption: "Example Redbubble product earnings.",
      },
    ],
  },
  {
    id: "b2b-landing-page-design",
    order: 8,
    title: "B2B Landing Page Design",
    slug: "b2b-landing-page-design",
    summary:
      "A focused B2B landing-page concept created in Figma, covering desktop and mobile layouts with reusable components and a compact visual system.",
    featured: false,
    projectDate: "2026-03-17",
    client: "Concept project",
    role: "Web and UI designer",
    categories: [
      { title: "Web Design", slug: "web-design" },
      { title: "UX/UI", slug: "ux-ui" },
    ],
    services: ["Landing-page design", "Responsive UI design", "Component design"],
    designTools: ["Figma"],
    coverImage: "/images/projects/b2b-landing-page/cover.png",
    overview: [
      "A compact B2B web-design exercise focused on creating a polished landing page with desktop and mobile layouts, reusable interface components and a consistent visual language.",
    ],
    prototypeUrl:
      "https://www.figma.com/design/UwLBkXzjucQFg1erpnXRFq/B2B-Landing-Page-Design?node-id=0-1&t=bXr7st56JhEuTdBb-1",
  },
  {
    id: "ecommerce-site-reactjs",
    order: 6,
    title: "React eCommerce Practice Project",
    slug: "ecommerce-site-reactjs",
    summary:
      "A React eCommerce application built as a practical exercise in reusable components, Redux state management, routing, API fetching, checkout logic and derived state.",
    featured: true,
    projectDate: "2026-03-17",
    client: "Personal learning project",
    role: "Frontend developer and UI designer",
    categories: [
      { title: "Web Development", slug: "web-development" },
      { title: "Web Design", slug: "web-design" },
    ],
    services: ["Frontend development", "UI design", "State management", "Form UX"],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
    ],
    designTools: ["Figma"],
    coverImage: "/images/projects/ecommerce-reactjs/cover.png",
    overview: [
      "I built this application to strengthen React skills through one realistic end-to-end project rather than a set of isolated exercises. A commerce flow naturally introduced reusable components, shared state, routing, forms and asynchronous data.",
    ],
    process: [
      "The app was organised into feature-based folders and built from reusable primitives such as buttons, cards, toggles, accordions, quantity controls and modals. Product grids then introduced component composition and local state.",
      "Cart state was moved into Redux Toolkit, routes were added for products, cart and checkout, and checkout form logic was extracted into a reusable custom hook.",
      "Live product data was fetched asynchronously with loading, error and sanitisation handling. Filtering and price sorting were implemented as derived state rather than duplicating product data in state.",
    ],
    outcome: [
      "The finished practice app covers many patterns used in production React applications: component reuse, local and global state, routing, async data, validation, custom hooks, loading skeletons, error presentation and deliberate separation of responsibilities.",
    ],
    repositoryUrl: "https://github.com/josephmce/eCommerce-reactjs-project",
    prototypeUrl:
      "https://www.figma.com/proto/qQiIEgKsBvGIzOGOO6TzxA/ecommerce-site?content-scaling=fixed&node-id=1-6&page-id=0%3A1&scaling=min-zoom&starting-point-node-id=1%3A6&t=4dnEanGyEvPLjNT7-1&viewport=243%2C139%2C0.32",
  },
];
