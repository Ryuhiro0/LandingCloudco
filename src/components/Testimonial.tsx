import { memo } from "react";
import { User } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

function TestimonialBase() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="testimonios" className="py-24">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-6 text-center">
        <div className="font-display text-7xl leading-none text-primary/60">"</div>
        <p className="font-display -mt-4 text-2xl font-medium leading-snug sm:text-3xl">
          La ingeniería de CloudCo no solo resolvió nuestros problemas técnicos,
          transformó nuestra manera de operar. En 3 meses logramos lo que
          planeábamos para el año.
        </p>
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
            <User className="text-primary" size={20} />
          </div>
          <div className="font-semibold">David Stem</div>
          <div className="font-mono text-xs text-muted-foreground">
            CTO en Nexus Systems
          </div>
        </div>
      </div>
    </section>
  );
}

export const Testimonial = memo(TestimonialBase);
