"use client";

const links = [
  { href: "#curriculum", label: "Curriculum" },
  { href: "#fees", label: "Batches & Fees" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mt-4 flex items-center justify-between rounded-full border hairline bg-parchment/85 backdrop-blur-md px-5 py-3 shadow-[0_1px_0_rgba(16,35,59,0.06)]">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-parchment font-mono text-[11px] tracking-tight">
              TU
            </span>
            <span className="font-display font-semibold text-[15px] tracking-tight text-ink">
              Trading Universe
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="rounded-full bg-ink text-parchment text-[12px] font-medium px-4 py-2 hover:bg-ink-deep transition-colors"
          >
            Reserve a seat
          </a>
        </div>
      </div>
    </header>
  );
}
