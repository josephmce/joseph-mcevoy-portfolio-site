import Link from "next/link";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={compact ? "brand brand-compact" : "brand"} href="/" aria-label="Joseph McEvoy home">
      <img src="images/mcevoy-logo.svg" className="brand-mark" aria-hidden="true" />
      <span className="brand-name">Joseph McEvoy</span>
    </Link>
  );
}
