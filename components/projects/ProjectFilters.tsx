import Link from "next/link";

const filters = [
  { label: "All", value: "" },
  { label: "Web development", value: "web-development" },
  { label: "Web design", value: "web-design" },
  { label: "UX/UI", value: "ux-ui" },
  { label: "Graphic design", value: "graphic-design" },
  { label: "Branding", value: "branding" },
];

export function ProjectFilters({ active }: { active?: string }) {
  return (
    <nav className="filter-list" aria-label="Filter projects">
      {filters.map((filter) => {
        const href = filter.value ? `/work?category=${filter.value}` : "/work";
        const selected = (active || "") === filter.value;

        return (
          <Link
            className={selected ? "filter active" : "filter"}
            href={href}
            key={filter.label}
          >
            {filter.label}
          </Link>
        );
      })}
    </nav>
  );
}
