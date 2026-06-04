import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

function HeroBase() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div ref={ref} className="reveal relative mx-auto max-w-5xl px-6 text-center">
        <span className="font-mono inline-block rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-widest text-primary">
          Engineered for results
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl">
          Acelera tu tiempo al mercado con{" "}
          <span className="text-gradient">software de alto rendimiento.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          CloudCo desarrolla soluciones digitales que escalan. Desde automatización
          inteligente hasta equipos dedicados para transformar tus procesos en
          ventajas competitivas.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px_var(--color-primary)]"
          >
            Contactar ahora <ArrowRight size={16} />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center rounded-md border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Ver servicios
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 overflow-hidden rounded-xl border border-border bg-surface/80 shadow-2xl glow">
          <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-2">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-primary/60" />
              <span className="h-3 w-3 rounded-full bg-tertiary/70" />
            </div>
            <span className="font-mono mx-auto text-xs text-muted-foreground">
              cloudco.io/dashboard
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              CloudCo Dev Terminal
            </span>
          </div>
          <div className="grid grid-cols-[200px_1fr] gap-4 p-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-primary/20" />
                <div className="h-3 w-16 rounded bg-muted" />
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-3 w-full rounded bg-muted/50" />
              ))}
            </div>
            <div className="space-y-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 rounded-md bg-muted/40"
                  style={{ width: `${60 + ((i * 7) % 35)}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Hero = memo(HeroBase);
