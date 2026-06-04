import { memo, useState } from "react";
import { ScrollText, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SECTIONS = [
  {
    id: "objeto",
    title: "1. Objeto del Contrato",
    content: `El presente documento regula los términos y condiciones bajo los cuales CloudCo (en adelante "CloudCo") presta sus servicios de desarrollo de software, automatización e inteligencia artificial a sus clientes (en adelante "el Cliente").

La aceptación de estos términos implica el conocimiento y conformidad del Cliente con las condiciones aquí establecidas, de conformidad con lo previsto en la Ley 527 de 1999 (Comercio Electrónico) y la Ley 1341 de 2009 (TIC) de la República de Colombia.`,
  },
  {
    id: "servicios",
    title: "2. Descripción de los Servicios",
    content: `CloudCo ofrece los siguientes servicios:

• Desarrollo de software a medida (Full-Stack, Mobile, Cloud Native).
• Automatización de procesos empresariales mediante RPA, workflows e integración de modelos LLM.
• Consultoría tecnológica y diseño de arquitecturas digitales escalables.
• Mantenimiento, soporte técnico y actualizaciones de los sistemas desarrollados.

Cada proyecto se formaliza mediante un acuerdo de servicios independiente, el cual detallará el alcance, plazos, entregables y condiciones económicas particulares.`,
  },
  {
    id: "propiedad",
    title: "3. Propiedad Intelectual",
    content: `Los derechos de autor sobre el software desarrollado por CloudCo se transferirán al Cliente únicamente cuando así se pacte expresamente en el acuerdo específico y previa cancelación total de los honorarios acordados.

Hasta tanto no se efectúe dicha transferencia, CloudCo conserva la titularidad plena del código fuente, diseños, algoritmos y demás elementos creativos. CloudCo se reserva el derecho de reutilizar metodologías, componentes genéricos y conocimientos técnicos acumulados durante la prestación de sus servicios.`,
  },
  {
    id: "confidencialidad",
    title: "4. Confidencialidad y Protección de Datos",
    content: `CloudCo se compromete a tratar con absoluta confidencialidad toda información técnica, comercial o estratégica del Cliente, de conformidad con la Ley 1266 de 2008 (Habeas Data) y la Ley 1581 de 2012 (Protección de Datos Personales) de Colombia.

Los datos personales recopilados a través de nuestra plataforma serán utilizados exclusivamente para la prestación de los servicios contratados. El Cliente podrá ejercer sus derechos de acceso, corrección, actualización y supresión de datos comunicándose a nuestro correo oficial. CloudCo no cederá información personal a terceros sin el consentimiento expreso del titular, salvo obligación legal.`,
  },
  {
    id: "responsabilidad",
    title: "5. Limitación de Responsabilidad",
    content: `CloudCo no será responsable por daños indirectos, lucro cesante o perjuicios derivados del uso o imposibilidad de uso del software entregado, siempre que CloudCo haya actuado con la diligencia debida.

La responsabilidad máxima de CloudCo ante el Cliente, en cualquier caso, estará limitada al valor total de los honorarios efectivamente pagados en el acuerdo específico que dio origen a la reclamación.`,
  },
  {
    id: "pagos",
    title: "6. Condiciones de Pago",
    content: `Los honorarios por los servicios de CloudCo serán establecidos en cada acuerdo particular. Salvo pacto en contrario, se aplicará el siguiente esquema:

• 35% de anticipo al inicio del proyecto para reservar disponibilidad del equipo y cubrir costos iniciales.
• 35% al completar y aprobar la fase de desarrollo principal.
• 30% restante contra entrega final y aceptación del Cliente.

El incumplimiento en los pagos podrá dar lugar a la suspensión de los servicios tras 15 días calendario de mora. Los porcentajes anteriores son una guía base y pueden ajustarse según las condiciones particulares de cada proyecto.`,
  },
  {
    id: "garantia",
    title: "7. Garantía de los Servicios",
    content: `CloudCo ofrece una garantía de 30 días calendario sobre los entregables de software, contados desde la fecha de aceptación formal por parte del Cliente. Durante este período, CloudCo corregirá sin costo adicional los defectos imputables al desarrollo original.

Esta garantía no aplica sobre modificaciones realizadas por el Cliente o terceros, ni sobre incompatibilidades originadas en cambios de infraestructura o plataformas externas no contempladas en el alcance inicial del proyecto.`,
  },
  {
    id: "vigencia",
    title: "8. Vigencia y Terminación",
    content: `Estos términos y condiciones tienen vigencia indefinida desde su aceptación. Cualquiera de las partes podrá dar por terminado el acuerdo de servicios con un preaviso de 30 días calendario, siempre que no existan obligaciones pendientes.

En caso de incumplimiento grave por cualquiera de las partes, la parte afectada podrá declarar la terminación del acuerdo de forma inmediata, conservando los derechos sobre los honorarios ya causados y los entregables completados hasta esa fecha.`,
  },
  {
    id: "ley",
    title: "9. Ley Aplicable y Resolución de Conflictos",
    content: `El presente acuerdo se rige por las leyes de la República de Colombia. Ante cualquier controversia derivada de su interpretación o ejecución, las partes se comprometen a agotar una etapa de negociación directa de hasta 30 días calendario.

De no lograrse acuerdo, las partes podrán acudir a los mecanismos alternativos de solución de conflictos previstos en la Ley 640 de 2001, o a la jurisdicción ordinaria competente según corresponda.`,
  },
  {
    id: "modificaciones",
    title: "10. Modificaciones",
    content: `CloudCo se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán notificados al Cliente con al menos 15 días de antelación a su entrada en vigencia, a través de los medios de contacto registrados.

El uso continuado de los servicios de CloudCo tras la notificación de cambios implica la aceptación de los nuevos términos por parte del Cliente.`,
  },
];

function TerminosBase() {
  const [openSection, setOpenSection] = useState<string | null>("objeto");

  const toggle = (id: string) =>
    setOpenSection((prev) => (prev === id ? null : id));

  return (
    <main className="min-h-screen">
      {/* Header sticky */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
              <ScrollText className="text-primary" size={14} />
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              CloudCo · Legal
            </span>
          </div>
        </div>
      </div>

      {/* Hero de la página */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="font-mono inline-block rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-widest text-primary">
            Documento Legal
          </span>
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
            Términos y{" "}
            <span className="text-gradient">Condiciones</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Lea detenidamente las condiciones bajo las cuales CloudCo
            presta sus servicios, de conformidad con la legislación colombiana vigente.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              Última actualización: enero de 2026
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span className="font-mono text-xs text-muted-foreground">
              Santa Marta, Colombia
            </span>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          {/* Aviso introductorio */}
          <div className="mb-8 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Al contratar los servicios de CloudCo, el Cliente declara haber
              leído, comprendido y aceptado en su totalidad los presentes
              términos y condiciones. Para consultas legales, escríbanos a{" "}
              <a
                href="mailto:legal@cloudco.io"
                className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                legal@cloudco.io
              </a>
            </p>
          </div>

          {/* Acordeón de secciones */}
          <div className="space-y-3">
            {SECTIONS.map((section) => {
              const isOpen = openSection === section.id;
              return (
                <div
                  key={section.id}
                  className="overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors hover:border-primary/30"
                >
                  <button
                    onClick={() => toggle(section.id)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold sm:text-base">
                      {section.title}
                    </span>
                    <span className="ml-4 shrink-0 text-primary">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-border px-6 pb-6 pt-5">
                      <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                        {section.content}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer legal */}
          <div className="mt-10 rounded-2xl border border-border bg-surface/40 px-6 py-5 text-center">
            <p className="font-mono text-xs text-muted-foreground">
              © 2026 CloudCo · Santa Marta, Magdalena, Colombia
            </p>
            <p className="font-mono mt-1 text-xs text-muted-foreground">
              Todos los derechos reservados bajo las leyes de la República de Colombia.
            </p>
          </div>

          {/* Botón volver */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export const Terminos = memo(TerminosBase);