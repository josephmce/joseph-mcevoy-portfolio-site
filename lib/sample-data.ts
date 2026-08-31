import type { Post, Project, Testimonial } from "@/types/content";

export const sampleProjects: Project[] = [
  {
    _id: "sample-project-1",
    title: "Manufacturing Product Data Platform",
    slug: "manufacturing-product-data-platform",
    summary:
      "A product-data workspace that helps manufacturing teams clean, organise, approve, and publish technical product information.",
    featured: true,
    projectDate: "2026-05-01",
    client: "Concept project",
    role: "Product designer and full-stack developer",
    duration: "8 weeks",
    categories: [
      { title: "Web Development", slug: "web-development" },
      { title: "UX/UI", slug: "ux-ui" }
    ],
    services: ["Product strategy", "UX/UI design", "Frontend development"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    designTools: ["Figma"],
    coverImageUrl: "/images/project-product-data.svg",
    overview: [
      {
        _key: "overview-1",
        _type: "block",
        children: [
          {
            _key: "overview-span",
            _type: "span",
            marks: [],
            text: "A concept for replacing disconnected spreadsheets with a controlled product-data workflow. The interface focuses on onboarding existing data, surfacing quality issues, and making review responsibilities clear."
          }
        ],
        markDefs: [],
        style: "normal"
      }
    ],
    challenge: [
      {
        _key: "challenge-1",
        _type: "block",
        children: [
          {
            _key: "challenge-span",
            _type: "span",
            marks: [],
            text: "Manufacturers commonly hold product specifications, certificates, descriptions, and imagery across multiple files and teams. The design needed to make migration manageable without pretending that poor-quality source data can be fixed automatically."
          }
        ],
        markDefs: [],
        style: "normal"
      }
    ],
    solution: [
      {
        _key: "solution-1",
        _type: "block",
        children: [
          {
            _key: "solution-span",
            _type: "span",
            marks: [],
            text: "The proposed flow combines guided spreadsheet import, field mapping, validation rules, duplicate detection, an exception queue, and human approval. This turns onboarding into a repeatable product workflow rather than an open-ended consultancy project."
          }
        ],
        markDefs: [],
        style: "normal"
      }
    ],
    outcome: [
      {
        _key: "outcome-1",
        _type: "block",
        children: [
          {
            _key: "outcome-span",
            _type: "span",
            marks: [],
            text: "The case study demonstrates product thinking, information architecture, dashboard design, and a realistic approach to building a B2B SaaS platform."
          }
        ],
        markDefs: [],
        style: "normal"
      }
    ]
  },
  {
    _id: "sample-project-2",
    title: "Global Manufacturing Website",
    slug: "global-manufacturing-website",
    summary:
      "A responsive corporate website design system and component library for a global manufacturing organisation.",
    featured: true,
    projectDate: "2025-11-01",
    employer: "Portfolio example",
    role: "Web designer and developer",
    categories: [
      { title: "Web Design", slug: "web-design" },
      { title: "Web Development", slug: "web-development" }
    ],
    services: ["Website design", "Design system", "Frontend development"],
    technologies: ["ASP.NET", "C#", "JavaScript", "CSS"],
    designTools: ["Figma", "Illustrator"],
    coverImageUrl: "/images/project-manufacturing.svg"
  },
  {
    _id: "sample-project-3",
    title: "Technical Materials Campaign",
    slug: "technical-materials-campaign",
    summary:
      "A flexible visual campaign spanning brochures, exhibition graphics, social assets, and technical sales materials.",
    featured: true,
    projectDate: "2025-06-01",
    role: "Graphic designer",
    categories: [
      { title: "Graphic Design", slug: "graphic-design" },
      { title: "Branding", slug: "branding" }
    ],
    services: ["Art direction", "Campaign design", "Print design"],
    designTools: ["Illustrator", "InDesign", "Photoshop"],
    coverImageUrl: "/images/project-campaign.svg"
  }
];

export const samplePosts: Post[] = [
  {
    _id: "sample-post-1",
    title: "Designing portfolio case studies that explain your contribution",
    slug: "designing-portfolio-case-studies",
    excerpt:
      "A practical structure for showing the problem, your responsibilities, the process, and the outcome instead of presenting an unexplained image gallery.",
    publishedAt: "2026-06-20",
    categories: ["Portfolio", "UX/UI"],
    coverImageUrl: "/images/post-case-study.svg",
    body: [
      {
        _key: "post-block-1",
        _type: "block",
        children: [
          {
            _key: "post-span-1",
            _type: "span",
            marks: [],
            text: "A useful portfolio case study should make your personal contribution unmistakable. Start with a short project summary, then state the context, constraints, role, process, and measurable or observable outcome."
          }
        ],
        markDefs: [],
        style: "normal"
      },
      {
        _key: "post-block-2",
        _type: "block",
        children: [
          {
            _key: "post-span-2",
            _type: "span",
            marks: [],
            text: "For development work, explain architecture and difficult implementation decisions. For UX work, show how evidence influenced the design. For graphic design, connect the visual direction to the brief and production requirements."
          }
        ],
        markDefs: [],
        style: "normal"
      }
    ]
  }
];


export const sampleTestimonials: Testimonial[] = [
  {
    _id: "sample-testimonial-1",
    quote:
      "Joseph brings design thinking and technical understanding together. He can take an unclear requirement, shape it into a practical interface, and work through the implementation details with developers.",
    name: "Example colleague",
    role: "Product and engineering",
    company: "Portfolio placeholder",
  },
  {
    _id: "sample-testimonial-2",
    quote:
      "The finished work was clear, consistent, and easy to use. Just as importantly, the design system made future additions much easier for the wider team.",
    name: "Example stakeholder",
    role: "Marketing lead",
    company: "Portfolio placeholder",
  },
];
