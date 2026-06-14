import { memo } from "react";
import { motion } from "framer-motion";
import { TrendingDown, BarChart3, Quote, Zap } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import liveDevVideo from "@/assets/CloudCO-live-dev.mp4";

function BenefitsBase() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="beneficios" className="py-24">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">Maximiza tu rentabilidad</h2>
          <p className="mt-4 text-muted-foreground">
            Entregamos resultados tangibles a través de ingeniería enfocada en el
            retorno de inversión.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Card — Reducción de costos */}
            <div className="rounded-2xl border border-border bg-surface/60 p-8 backdrop-blur">
              <TrendingDown className="text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Reduce Costos Operativos</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Elimina ineficiencias mediante automatización inteligente.
                Nuestros clientes reportan reducciones de entre el 35 % y el 60 %
                en tareas manuales repetitivas dentro de los primeros 90 días.
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="font-mono rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                  +25
                </span>
                <span className="text-xs text-muted-foreground">
                  Empresas colombianas y latinoamericanas confían en nuestras soluciones.
                </span>
              </div>
            </div>

            {/* Video card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-border bg-surface/50"
            >
              <motion.video
                src={liveDevVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-label="Live development view"
                className="h-full w-full object-cover"
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <motion.span
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="font-mono absolute bottom-4 left-4 rounded-md border border-primary/40 bg-background/70 px-3 py-1 text-xs uppercase tracking-wider text-primary backdrop-blur"
              >
                Live development view
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Métricas */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Métrica 1 — Tiempo hasta MVP */}
          <Metric
            icon={<Zap size={18} />}
            label="Tiempo hasta MVP"
            value="3 semanas"
            sub="Tiempo promedio desde kick-off hasta primer MVP funcional en clientes activos."
          />

          {/* Métrica 2 — Performance */}
          <div className="rounded-2xl border border-border bg-surface/60 p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">Performance</span>
              <span className="font-mono text-xs text-primary">+62 %</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Mejora media en tiempos de respuesta de aplicaciones tras optimización.
            </p>
            <div className="mt-4 flex h-16 items-end gap-1.5">
              {[22, 38, 35, 52, 60, 62].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-tertiary to-primary"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Métrica 3 — Testimonio */}
          <div className="rounded-2xl border border-border bg-surface/60 p-5">
            <Quote className="text-primary" size={18} />
            <p className="mt-3 text-sm text-muted-foreground">
              "En tres meses automatizamos el 40 % de nuestro back-office. El ROI fue inmediato."
            </p>
            <p className="mt-3 font-mono text-xs text-primary/70">— Gerente Ops, Medellín</p>
          </div>

          {/* Métrica 4 — Analytics */}
          <Metric
            icon={<BarChart3 size={18} />}
            label="Analytics en tiempo real"
            value="99.99 %"
            sub="Disponibilidad promedio de los sistemas que desplegamos en producción."
          />
        </div>
      </div>
    </section>
  );
}

function Metric({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-5">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <span className="font-mono text-xs text-muted-foreground">{label}</span>
      </div>
      {value && <div className="mt-3 text-3xl font-bold text-gradient">{value}</div>}
      <p className="mt-2 text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}

export const Benefits = memo(BenefitsBase);
