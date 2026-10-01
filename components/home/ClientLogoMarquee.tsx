import Image from "next/image";

const companies = [
  {
    name: "EKCO",
    logo: "/images/companies/ekco.png",
    href: "https://www.linkedin.com/company/ekco-it/",
    width: 469,
    height: 138,
  },
  {
    name: "CCL Design",
    logo: "/images/companies/ccl-design.png",
    href: "https://www.linkedin.com/company/ccldesign/",
    width: 1022,
    height: 575,
  },
  {
    name: "Contact Advantage",
    logo: "/images/companies/contact-advantage.png",
    href: "https://www.linkedin.com/search/results/all/?keywords=Contact%20Advantage%20Limited",
    width: 640,
    height: 220,
  },
  {
    name: "CCL Components",
    logo: "/images/companies/ccl-components.png",
    href: "https://www.linkedin.com/company/ccl-components-ltd",
    width: 244,
    height: 113,
  },
];

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="logo-marquee-group"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {companies.map((company) => (
        <li className="logo-marquee-item" key={company.name}>
          <a
            className="logo-marquee-link"
            href={company.href}
            target="_blank"
            rel="noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            aria-label={duplicate ? undefined : `${company.name} on LinkedIn`}
          >
            <Image
              className="logo-marquee-image"
              src={company.logo}
              alt={duplicate ? "" : `${company.name} logo`}
              width={company.width}
              height={company.height}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ClientLogoMarquee() {
  return (
    <div
      className="logo-marquee"
      aria-label="Companies I've worked for"
    >
      <div className="logo-marquee-track">
        <LogoGroup />
        <LogoGroup duplicate />
      </div>
    </div>
  );
}
