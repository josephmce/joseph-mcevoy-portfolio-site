export function ArrowIcon({ direction = "up-right" }: { direction?: "up-right" | "right" | "left" }) {
  return (
    <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={direction === "up-right" ? "M6 18 18 6M6 6h12v12" : direction === "right" ? "M4 12h16m-6-6 6 6-6 6" : "M20 12H4m6-6-6 6 6 6"} />
    </svg>
  );
}
