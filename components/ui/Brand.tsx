import Link from "next/link";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={compact ? "brand brand-compact" : "brand"} href="/" aria-label="Joseph McEvoy home">
      <span className="brand-mark" aria-hidden="true">M</span>
      <span className="brand-name">Joseph McEvoy</span>
    </Link>
  );
}
