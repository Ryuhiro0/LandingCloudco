import { memo } from "react";
import { Check } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import galaxy from "@/assets/service-automation.png";
import monitor from "@/assets/service-custom.png";

function ServicesBase() {
  const a = useReveal<HTMLDivElement>();
  const b = useReveal<HTMLDivElement>();
  return (
    <>
      <section id="servicios" className="py-24">
        <div ref={a} className="reveal mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              01. Ingeniería de Software
            </span>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Soluciones a medida para desafíos globales
            </h2>
            <p className="mt-4 text-muted-foreground">
              No solo escribimos código; diseñamos la columna vertebral de tu
              negocio digital. Aplicaciones robustas, seguras y preparadas para
              crecer.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <Tag title="Full-Stack Development" sub="Next.js, Node, Cloud Native" />
              <Tag title="Mobile First" sub="iOS & Android Native/Hybrid" />
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={monitor}
              alt="Soluciones de ingeniería a medida"
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="automatizacion" className="py-24">
        <div ref={b} className="reveal mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-2xl lg:order-1">
            <img src={galaxy} alt="Automation AI" loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              02. Automatización & IA
            </span>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Libera el potencial de tu equipo
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sustituye tareas repetitivas por workflows inteligentes.
              Implementamos IA real que genera ahorro de tiempo y consistencia
              operativa inmediata.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <Tag title="RPA & Workflows" sub="Automatización de extremo a extremo" />
              <Tag title="Integración LLM" sub="IA Generativa aplicada a procesos" />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Tag({ title, sub }: { title: string; sub: string }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-border bg-surface/40 p-4">
      <Check className="mt-0.5 shrink-0 text-primary" size={18} />
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="font-mono text-xs text-muted-foreground">{sub}</div>
      </div>
    </li>
  );
}

export const Services = memo(ServicesBase);
