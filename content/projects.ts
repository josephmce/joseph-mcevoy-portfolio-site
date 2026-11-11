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
  id: "webhub",
  scope: "Database design, full-stack development and editorial workflows",
  headlineOutcome: "Translations, URLs, vacancies and news managed in one tool; translation updates appear instantly.",
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
    "A custom ASP.NET Core MVC administration platform for managing CCL Design's multilingual website content, translations and page routes, with live editing workflows for translations, URLs, vacancies, news articles and people profiles.",
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
    "I developed WebHub as a central administration platform for CCL Design's website, giving content editors a dedicated interface for maintaining translations, language-specific page routes and structured website content.",
    "The application is built with ASP.NET Core MVC, C# and Razor, with Entity Framework Core handling access to a SQL Server database. I have since updated the CCL Design website to ASP.NET Core on .NET 10. The website now reads translations directly from the database, so updates made within WebHub are reflected instantly on the website.",
    "Translations, language-specific URLs, vacancies, news articles and people profiles are managed in WebHub and used by the live website.",
  ],
  challenge: [
    "Website content was spread across separate language-specific pages and resource files, making updates repetitive and difficult to track. Editors needed a clearer way to find content, compare translations and maintain consistency across English, German, Spanish and Chinese.",
    "The system also needed to connect readable content labels with the technical resource keys, page references and URL slugs used by the website. Changes had to work with the existing application while supporting a more maintainable architecture for future development.",
    "A further challenge was designing the platform so that additional languages and content types could be introduced without rebuilding the translation system or creating separate administration tools for each area of the website.",
  ],
  process: [
    "I designed a relational database structure covering languages, resource groups, translation keys, translated values, page routes and resource-generation history. Resource groups organise content by page or shared component, while translation keys identify individual headings, labels, messages and other editable values.",
    "I implemented the data layer using Entity Framework Core, defining relationships and unique constraints to prevent duplicate resource names, duplicate keys within a group and conflicting language identifiers. Language records distinguish URL codes such as en and de from culture codes such as en-GB and de-DE.",
    "I built Razor-based administration screens for creating, viewing and updating translation content, with search and filtering to help users locate the relevant page, resource group or key. This brings content editing into a browser-based workflow instead of requiring routine changes directly in source files.",
    "I initially developed resource export functionality to generate RESX files for the Web Forms website, with generation history recorded in the database. After updating the CCL Design website to ASP.NET Core on .NET 10, I connected its translations directly to the database. Translation updates made in WebHub are now reflected instantly on the website without exporting or deploying resource files.",
    "I added page-route management to associate resource groups with language-specific URL slugs and the underlying website page references. This supplies the route information used by the website for translated navigation and language switching, alongside its canonical, hreflang and redirect handling.",
    "I worked through configuration and integration issues across the application, including database-schema alignment, connection strings, Entity Framework queries, form submissions and resource-file handling. The aim was to make the administration workflow reliable within the existing SQL Server and IIS environment.",
    "I brought vacancy administration into WebHub, covering vacancy content, recruitment sites and publication status. It retains the SQL Server schema I originally developed in 2022 and the website's established listing, detail and application workflows.",
    "I developed news article management in WebHub with content stored in SQL Server, replacing the website's Umbraco integration. Editors can manage articles and publication status alongside vacancies, translations and URLs.",
  ],
  outcome: [
    "WebHub provides a central place to manage website translations and translated page routes, helping maintain consistency across the site's supported languages.",
    "The CCL Design website now runs on ASP.NET Core on .NET 10 and displays translations directly from the database. Updates made within WebHub are reflected instantly on the website, replacing the previous RESX export workflow for website translations.",
    "Editors now manage news articles and vacancies through the same application as translations and URLs, with the live website retrieving content from SQL Server.",
    "WebHub brings multilingual content, recruitment information and news into a consistent editing interface, supported by a shared database and maintainable .NET application.",
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
    "A production website migrated to ASP.NET Core on .NET 10, with four languages on shared templates and translations, URLs, news, vacancies and people profiles managed centrally in WebHub.",
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
    "I have converted the entire CCL Design global B2B website from ASP.NET Web Forms to an ASP.NET Core application running on .NET 10, making the site much faster and more responsive while modernising its underlying architecture.",
    "I replaced separate language-specific pages with shared templates backed by centrally managed translations. I also removed Umbraco for news articles, which now come directly from the SQL Server database. Vacancies already used the SQL Server schema I developed at CCL Design in 2022, which was still in use when I returned. WebHub now provides the central administration interface for news articles and vacancies, alongside translations and language-specific URLs.",
  ],
  challenge: [
    "The website had accumulated separate English, German, Spanish and Chinese pages, making content and layout changes repetitive and increasing the risk of inconsistencies between languages. The translation system needed to support shared pages, translated URLs and a manageable editing workflow.",
    "Modernising the platform also meant working around established SQL databases, stored procedures, enquiry forms and email processes. The move to ASP.NET Core and a SQL Server-backed content system needed to preserve these integrations while improving performance and maintainability.",
  ],
  process: [
    "I developed WebHub, an ASP.NET Core administration application for managing news articles, vacancies, translations and page URLs. Its SQL Server-backed structure brings content editing, multilingual publishing and route management into a single administration workflow.",
    "I implemented culture-aware routing and shared page templates for English, German, Spanish and Chinese. This included translated URL slugs, language switching, canonical and hreflang tags, and redirects from legacy addresses. The underlying language model also provides a foundation for adding further languages.",
    "I removed the Umbraco integration for news articles and designed and implemented their schema in the SQL Server database. The website now retrieves news content directly from SQL Server, with WebHub used to manage it.",
    "I originally developed the vacancy database schema at CCL Design in 2022, and it was still being used when I returned. Vacancies were already stored in SQL Server and were never managed through Umbraco. I brought vacancy management into WebHub while retaining the existing database structure and recruitment workflows.",
    "I connected the website's translations and language-specific URLs to the same centrally managed database. Translation updates made in WebHub are reflected instantly on the website, replacing the previous resource-file export workflow.",
    "I completed the migration of the whole website to ASP.NET Core on .NET 10, covering shared layouts, content pages, locations, news, people, forms and assets. This included adapting existing stored-procedure integrations, retaining Turnstile verification and moving media towards local-first delivery.",
    "Alongside the development work, I used Figma to create and refine responsive product, sector and campaign page designs. I also worked on redirect mappings, dynamic sitemaps, error handling, accessibility improvements and regression tools to support testing and the completed migration.",
  ],
  outcome: [
    "The entire website now runs on ASP.NET Core on .NET 10, delivering a much faster and more responsive experience with a more maintainable application architecture.",
    "News articles are now served directly from the SQL Server database instead of Umbraco. Vacancies continue to use the SQL Server schema I developed in 2022. WebHub provides one place to manage both types of content alongside website translations and URLs.",
    "Shared multilingual templates and database-driven translations reduce duplicated page maintenance. Translation changes made within WebHub appear instantly on the website, giving editors a consistent workflow for keeping the global site up to date.",
  ],
},
  {
    id: "ccl-design-website",
    order: 4,
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
    headlineOutcome: "Up to 30% fewer errors and 22% fewer support ticket requests.",
    order: 3,
    title: "Ekco Web Portal",
    slug: "web-portal",
    summary:
      "Web portal project created in Figma for a SaaS company, utilising components, variables etc, hooked up to a design system. Developed through conducting user research, user interviews and collating findings to produce a product users are keen to use.",
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
            "text": "This is a project for a SaaS company for users to manager their cloud & security systems. Created in Figma, utilising components, variables etc, hooked up to a design system. Developed through conducting user research, user interviews and collating findings to produce a product users are keen to use."
          }
        ]
      },
      {
        "title": "Context",
        "blocks": [
          {
            "type": "paragraph",
            "text": "When I started at Ekco I was tasked with redesigning their portal which at that point was using a free template from online. During my time there the Portal went through 3 redesigns to suit the evolving needs of the platform. Below outlines the UX process and the UI design of the 3rd iteration."
          }
        ]
      },
      {
        title: "From interview finding to design direction",
        blocks: [
          {
            type: "paragraph",
            text: "I documented seven dashboard interviews and grouped the observations in an affinity map. One recurring problem was relevance: users saw widgets that did not match their services or day-to-day tasks, while some bypassed the dashboard to reach reports through the sidebar.",
          },
          { type: "heading", text: "Finding: a dashboard users could not make their own" },
          {
            type: "paragraph",
            text: "Participants wanted to choose which widgets appeared and arrange them around their own work. The notes also exposed differences between user contexts: some valued news and team contacts, while others mainly needed backup or security reporting. A fixed set of widgets could not serve all of these needs equally well.",
          },
          {
            type: "image",
            item: {
              src: "/images/projects/web-portal/research-key-insights.png",
              alt: "Research findings covering dashboard customisation, widget relevance, feature discoverability and confusing tab filters",
              caption: "Excerpt from the interview summary: the findings that informed the dashboard recommendations.",
              width: 1157,
              height: 181,
            },
          },
          { type: "heading", text: "Design response: widget choice and clearer controls" },
          {
            type: "paragraph",
            text: "I translated these themes into a design brief for a customisable dashboard: a toolbar to add or remove widgets, drag-and-drop ordering, and widget visibility based on user roles and customer context. The summary also recommended replacing the ambiguous tabbed section with an explicit Filter button, using names aligned with the service catalogue.",
          },
          {
            type: "paragraph",
            text: "A related discoverability finding was that participants struggled to locate feedback under Settings. I recommended moving it to the sidebar or top header, where users expected to find it.",
          },
          { type: "heading", text: "Result: a prioritised brief for prototyping" },
          {
            type: "paragraph",
            text: "The research produced a concrete set of dashboard recommendations and next steps: prototype widget management, gather feedback on new widgets, and test clearer filtering and reporting interactions. These are the documented outputs of this study; the report presents them as recommendations for the next design iteration.",
          },
          {
            type: "link",
            text: "Read the interview summary",
            href: "https://www.figma.com/board/9EK3G9HdVIKBc1AzsGXD0P/Web-Portal-Interviews-Summary?node-id=0-1&p=f&t=yHosPWsTxVbCT63v-0",
          },
          {
            type: "link",
            text: "Explore the dashboard wireframes",
            href: "https://www.figma.com/proto/L1XwxZXt6qQKGiQ6X3gNL9/Wireframes?node-id=1-12292&viewport=-4251%2C210%2C0.19&t=nMVetvUN97YO20Hk-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A12292&show-proto-sidebar=1",
          },
        ],
      },
      {
        "title": "Impact",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Delivered three major redesigns between 2022–2025, each having measurable impact. Improved usability, reducing error rates by up to 30% & reduced support ticket requests by 22%."
          },
          {
            "type": "paragraph",
            "text": "Each release aligned closely with product evolution & user feedback, working to tight timelines & in close collaboration with engineering, product, cloud, and security stakeholders."
          },
          {
            "type": "list",
            "items": [
              "Up to 30% reduction in error rates",
              "22% reduction in support ticket requests"
            ]
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
            "text": "I conducted interviews with end users to gather qualitative feedback on their experiences with the Ekco portal, focusing on both the dashboard and overall usability"
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
            "text": "I then collated observations and direct quotes from interviews, then synthesized findings using an affinity map to identify recurring themes and pain points."
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
            "text": "Extracted key insights from grouped feedback, highlighting user needs, frustrations, and expectations. This allowed me to derive specific actions and recommendations based on insights to inform design decisions and improve the user experience."
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
            "text": "Finally I compiled a concise summary of research findings, supported by evidence from user quotes and mapped themes."
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
            "text": "I moved onto prototyping some wireframes for the dashboard after gathering all the useful user research"
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
            "text": "After gathering all the information needed from the user search, and prototyping with wireframes, I moved on to creating the designs in Figma for the web portal"
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
            "text": "I created a design system to help speed up design iterations and create a baseline for components etc"
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
            "text": "This is a design that was done as a proposal for how version 2 of the web portal could have looked based on user research and feedback"
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
    order: 5,
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
    order: 6,
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
    order: 7,
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
