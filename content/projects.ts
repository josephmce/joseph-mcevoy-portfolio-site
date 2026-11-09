import type { Project } from "@/types/content";

// Portfolio projects migrated from the previous Framer portfolio.
// Image files are downloaded into /public/images/projects by the companion
// scripts/download-framer-project-assets.ps1 script.
export const projects: Project[] = [
{
  id: "webhub",
  order: 2,
  title: "WebHub - Website Content Management",
  slug: "webhub",
  summary:
    "A custom ASP.NET Core MVC administration platform for managing CCL Design's multilingual website content, translations and page routes, with vacancy management and a planned expansion into news articles and people profiles.",
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
  coverImage: "/images/projects/webhub/cover.png",
  overview: [
    "I developed WebHub as a central administration platform for CCL Design's website, giving content editors a dedicated interface for maintaining translations, language-specific page routes and structured website content.",
    "The application is built with ASP.NET Core MVC, C# and Razor, with Entity Framework Core handling access to a SQL Server database. It supports the existing ASP.NET Web Forms website while providing a foundation for the site's migration to ASP.NET Core.",
    "Translation management forms the core of the platform. The wider development scope also includes bringing vacancy administration into WebHub, followed by SQL-backed news articles and people profiles managed through the same application.",
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
    "I developed resource export functionality to generate RESX files for the existing Web Forms website, with generation history recorded in the database. The same centrally managed content also supports the Core website's database-driven translation approach.",
    "I added page-route management to associate resource groups with language-specific URL slugs and the underlying website page references. This supplies the route information used by the website for translated navigation and language switching, alongside its canonical, hreflang and redirect handling.",
    "I worked through configuration and integration issues across the application, including database-schema alignment, connection strings, Entity Framework queries, form submissions and resource-file handling. The aim was to make the administration workflow reliable within the existing SQL Server and IIS environment.",
    "For vacancy management, the work includes adapting the existing recruitment administration functionality for WebHub, covering vacancy content, recruitment sites and publication status. This needs to remain compatible with the website's listing, detail and application workflows.",
    "I also scoped the next stage of content management: multilingual news articles stored in SQL Server and edited within WebHub. The proposed editor supports categories, main images and vertically reorderable content blocks, including image-and-text sections and linked content cards.",
    "The planned news and people modules will reuse the existing language records while storing translations against each individual article or profile. Content will be able to exist in a single language, with additional translations added independently and further languages supported through the shared language model.",
  ],
  outcome: [
    "WebHub provides a central place to manage website translations and translated page routes, reducing the need to edit individual resource files manually and helping maintain consistency across the site's supported languages.",
    "The resource export workflow connects the new administration platform with the existing Web Forms website, allowing content management to improve while the public site's technical migration progresses separately.",
    "The application establishes a reusable foundation for broader website administration. Vacancy management is part of the platform's ongoing expansion, with news articles and people profiles planned as further SQL-backed modules.",
    "The longer-term goal is to give editors a consistent interface for managing multilingual website content, recruitment information, news and people profiles, supported by a shared database structure and maintainable .NET application.",
  ],
},
{
  id: "ccl-design-website-2026",
  order: 1,
  title: "CCL Design Website 2026",
  slug: "ccl-design-website-2026",
  summary:
    "Ongoing development of CCL Design's global website, bringing together a centralised multilingual content system, Umbraco CMS integrations, refreshed page designs and a phased migration to ASP.NET Core.",
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
    "CMS integration",
    "Multilingual content management",
    "Database design and development",
    "Technical SEO",
    "Legacy application modernisation",
    "Testing and deployment",
  ],
  technologies: [
    "ASP.NET Web Forms",
    "ASP.NET Core MVC",
    ".NET 10",
    "C#",
    "Razor",
    "SQL Server",
    "Entity Framework Core",
    "Umbraco Heartcore",
    "REST APIs",
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
  coverImage: "/images/projects/ccl-design-website-2026/cover.png",
  overview: [
    "I am developing and modernising CCL Design's global B2B website, combining new page designs with improvements to content management, multilingual publishing and the underlying application architecture.",
    "A major part of the work is replacing separate language-specific pages with shared templates backed by centrally managed translations. Alongside this, I have integrated Umbraco Heartcore for news, people profiles and recruitment content, while progressing a phased migration from ASP.NET Web Forms to ASP.NET Core MVC.",
  ],
  challenge: [
    "The website had accumulated separate English, German, Spanish and Chinese pages, making content and layout changes repetitive and increasing the risk of inconsistencies between languages. The translation system needed to support shared pages, translated URLs and a manageable editing workflow.",
    "Modernising the platform also meant working around established SQL databases, stored procedures, enquiry forms and email processes. New CMS features and the Core migration needed to preserve these integrations while improving maintainability.",
  ],
  process: [
    "I developed WebHub, an ASP.NET Core administration application for managing translation resources and page routes. Its SQL-backed structure organises languages, resource groups, translation keys and translated values, with editing, search and export functionality.",
    "I implemented culture-aware routing and shared page templates for English, German, Spanish and Chinese. This included translated URL slugs, language switching, canonical and hreflang tags, and redirects from legacy addresses. The underlying language model also provides a foundation for adding further languages.",
    "I integrated Umbraco Heartcore through its APIs to deliver news articles, people profiles and vacancy content. The work covered listings, filtering, pagination, article layouts and language variants, including links to the real English profile or article when a translation is unavailable.",
    "For recruitment content, I developed import and synchronisation tooling to move existing SQL vacancies into Heartcore, map recruitment sites and handle publication status while retaining the website's established application and database workflows.",
    "I organised the ASP.NET Core migration into manageable batches covering shared layouts, content pages, locations, news, people, forms and assets. This included adapting existing stored-procedure integrations, retaining Turnstile verification and moving media towards local-first delivery.",
    "Alongside the development work, I used Figma to create and refine responsive product, sector and campaign page designs. I also worked on redirect mappings, dynamic sitemaps, error handling, accessibility improvements and regression tools to support testing and eventual cutover.",
  ],
  outcome: [
    "The work has established a centralised translation workflow and reduced the need to maintain separate page implementations for each language. Content and routing can be managed more consistently across the global website.",
    "Umbraco integrations provide structured management of news, people and recruitment content. The vacancy import tooling created all 219 source vacancies as drafts, with publication handled according to their configured status.",
    "The ASP.NET Core migration is progressing through implementation and validation, with reusable views, local asset handling and testing tools in place. Final browser comparisons, integration testing and deployment checks remain part of the release process.",
  ],
},
  {
    id: "ccl-design-website",
    order: 4,
    title: "CCL Design Website 2022",
    slug: "ccl-design-website",
    summary:
      "A complete redesign and development of CCL Design's global B2B website, focused on clearer navigation, stronger UX, improved performance and a more consistent brand experience.",
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
    overview: [
      "I led the redesign and development of CCL Design's public B2B website, taking the project from research and stakeholder requirements through interface design and implementation.",
      "The aim was to modernise the experience, simplify navigation and align the site more closely with the company's global brand while giving the underlying site a maintainable technical foundation.",
    ],
    challenge: [
      "The existing site needed clearer user journeys and a more modern visual system. I reviewed analytics to identify friction and drop-off points, then gathered business requirements directly from stakeholders across the organisation.",
    ],
    process: [
      "I used Google Analytics to identify problem areas, held stakeholder interviews and content meetings, and translated the findings into page designs and prototypes.",
      "Designs were iterated in Photoshop and Adobe XD before development began. The finished site was built using ASP.NET and C#, with LESS used to speed up and organise styling work.",
    ],
    outcome: [
      "The redesigned site recorded a 24% reduction in bounce rate, around a 34% increase in average session duration and a 130% increase in page views. The project also delivered clearer user flows and a more consistent responsive experience.",
    ],
  },
  {
    id: "web-portal",
    order: 3,
    title: "Web Portal",
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
            "href": "https://www.figma.com/board/uhTAADJGcu68MtL5qJ75Ko/Affinity-Map---Insights?node-id=0-1&t=9K18ck435CSpS4b1-1"
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
    gallery: [
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
