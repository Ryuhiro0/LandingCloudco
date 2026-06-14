import { memo, useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollY } from "@/hooks/useScrollY";
import logo from "@/assets/logo.png";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#automatizacion", label: "Automatización" },
];

function NavbarBase() {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  const scrolled = y > 20;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CloudCO"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <span className="font-display text-lg font-bold tracking-tight">CloudCO</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-[0_0_24px_-4px_var(--color-primary)] md:inline-flex"
        >
          Contactar ahora
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 md:hidden">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Contactar ahora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export const Navbar = memo(NavbarBase);

