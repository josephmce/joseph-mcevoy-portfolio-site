import type { Project } from "@/types/content";

// Portfolio projects migrated from the previous Framer portfolio.
// Image files are downloaded into /public/images/projects by the companion
// scripts/download-framer-project-assets.ps1 script.
export const projects: Project[] = [
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
    order: 2,
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
    order: 1,
    title: "Web Portal",
    slug: "web-portal",
    summary:
      "A UX and UI redesign of a SaaS cloud and security portal, shaped through user interviews, affinity mapping, wireframing and a reusable Figma design system.",
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
    overview: [
      "This project covered the third major iteration of a SaaS portal used to manage cloud and security services. The interface was designed in Figma using reusable components, variables and a supporting design system.",
    ],
    challenge: [
      "The portal had originally been based on a generic template and needed to evolve alongside a growing product. The redesign had to reflect real user needs while remaining practical for product, engineering, cloud and security teams to deliver.",
    ],
    process: [
      "I interviewed end users about the dashboard and wider portal experience, captured observations and quotes, and organised the findings through affinity mapping.",
      "From those themes I produced actionable insights and a concise research summary, then moved into wireframes, UI design and a reusable design system to support faster future iterations.",
    ],
    outcome: [
      "Across three major redesigns delivered between 2022 and 2025, the portal work improved usability and contributed to stronger engagement. The case study records up to a 30% reduction in bounce rate and a 20% increase in average session duration.",
    ],
    prototypeUrl:
      "https://www.figma.com/proto/zLZ9hVxADh2BiSCYaud9Tf/Designs?content-scaling=fixed&node-id=110-3607&scaling=scale-down&show-proto-sidebar=1&starting-point-node-id=110%3A2767&t=Vmj5cLli89k2suvD-0&viewport=1744%2C844%2C0.24",
  },
  {
    id: "t-shirt-designs-andother-products",
    order: 3,
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
    order: 5,
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
    order: 4,
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
