import { memo, useState } from "react";
import { ShieldCheck, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

const SECTIONS = [
  {
    id: "responsable",
    title: "1. Responsable del Tratamiento",
    content: `CloudCo S.A.S. (en adelante "CloudCo"), identificada con NIT en trámite, con domicilio principal en la ciudad de Santa Marta, Magdalena, Colombia, es la empresa responsable del tratamiento de los datos personales recopilados a través de su sitio web y en el marco de la prestación de sus servicios.

Para cualquier consulta relacionada con el tratamiento de sus datos personales, puede comunicarse con nosotros a través del correo electrónico: cloudcosolutionss@gmail.com
`,
  },
  {
    id: "datos",
    title: "2. Datos Personales que Recopilamos",
    content: `CloudCo podrá recopilar las siguientes categorías de datos personales:

• Datos de identificación: nombre completo, número de identificación, cargo y empresa.
• Datos de contacto: correo electrónico, número de teléfono y dirección.
• Datos de navegación: dirección IP, tipo de navegador, páginas visitadas, tiempo de sesión y datos de cookies.
• Datos contractuales: información proporcionada durante la contratación y ejecución de los servicios, como requerimientos técnicos, documentos de proyecto y comunicaciones.
• Datos financieros: información necesaria para la facturación y procesamiento de pagos, en cumplimiento de las obligaciones tributarias aplicables.

CloudCo no recopila datos sensibles (salud, ideología política, religión, origen racial, etc.) salvo que el Cliente los aporte voluntariamente y de forma excepcional en el marco de un proyecto específico.`,
  },
  {
    id: "finalidades",
    title: "3. Finalidades del Tratamiento",
    content: `Los datos personales recopilados por CloudCo serán utilizados para las siguientes finalidades:

• Gestionar la relación contractual y prestar los servicios contratados.
• Enviar cotizaciones, propuestas comerciales y comunicaciones relacionadas con los servicios.
• Gestionar el proceso de facturación y cobro de honorarios.
• Cumplir con obligaciones legales, tributarias y regulatorias vigentes en Colombia.
• Mejorar la calidad de nuestros servicios a través del análisis de uso y retroalimentación del Cliente.
• Enviar comunicaciones comerciales, boletines o novedades tecnológicas, únicamente con el consentimiento previo del titular.
• Garantizar la seguridad de los sistemas y prevenir fraudes o accesos no autorizados.`,
  },
  {
    id: "base-legal",
    title: "4. Base Legal del Tratamiento",
    content: `El tratamiento de datos personales por parte de CloudCo se fundamenta en las siguientes bases legales, de conformidad con la Ley 1581 de 2012 y el Decreto 1377 de 2013:

• Ejecución de un contrato: cuando el tratamiento es necesario para la prestación de los servicios contratados.
• Consentimiento del titular: para el envío de comunicaciones comerciales o el uso de cookies no esenciales.
• Obligación legal: cuando el tratamiento es requerido por la normativa colombiana vigente (obligaciones tributarias, reportes a autoridades, etc.).
• Interés legítimo: para la mejora de nuestros servicios y la seguridad de nuestros sistemas.`,
  },
  {
    id: "conservacion",
    title: "5. Tiempo de Conservación",
    content: `CloudCo conservará los datos personales durante el tiempo estrictamente necesario para cumplir con las finalidades descritas en esta política y las obligaciones legales aplicables.

• Datos contractuales: se conservarán durante la vigencia de la relación contractual y por un período adicional de 5 años para efectos legales y tributarios.
• Datos de navegación y cookies: se conservarán por un máximo de 12 meses, salvo que el titular solicite su eliminación con anterioridad.
• Comunicaciones comerciales: se conservarán hasta que el titular revoque su consentimiento.

Una vez vencidos estos plazos, CloudCo procederá a la eliminación segura o anonimización de los datos.`,
  },
  {
    id: "derechos",
    title: "6. Derechos del Titular",
    content: `De conformidad con la Ley 1581 de 2012, el titular de los datos personales tiene los siguientes derechos:

• Acceso: conocer qué datos personales suyos están siendo tratados por CloudCo.
• Actualización y corrección: solicitar la corrección de datos inexactos o incompletos.
• Supresión: solicitar la eliminación de sus datos cuando no sean necesarios para las finalidades del tratamiento, sujeto a las obligaciones legales vigentes.
• Revocación del consentimiento: retirar el consentimiento otorgado para el tratamiento, sin efecto retroactivo.
• Oposición: oponerse al tratamiento de sus datos para finalidades específicas, como el envío de comunicaciones comerciales.
• Portabilidad: solicitar una copia de sus datos en formato estructurado y de uso común.

Para ejercer cualquiera de estos derechos, el titular podrá enviar una solicitud escrita a cloudcosolutionss@gmail.com, indicando su nombre completo, número de identificación y la solicitud concreta. CloudCo dará respuesta en un plazo máximo de 15 días hábiles.`,
  },
  {
    id: "cookies",
    title: "7. Uso de Cookies y Tecnologías de Rastreo",
    content: `El sitio web de CloudCo puede utilizar cookies y tecnologías similares con las siguientes finalidades:

• Cookies esenciales: necesarias para el funcionamiento básico del sitio. No requieren consentimiento.
• Cookies analíticas: permiten medir el tráfico y comportamiento de los visitantes para mejorar la experiencia del sitio (ej. Google Analytics). Requieren consentimiento.
• Cookies de preferencias: almacenan configuraciones personalizadas del usuario dentro del sitio.

El usuario podrá gestionar o desactivar las cookies desde la configuración de su navegador en cualquier momento. La desactivación de cookies esenciales podrá afectar la funcionalidad del sitio.`,
  },
  {
    id: "terceros",
    title: "8. Transferencia de Datos a Terceros",
    content: `CloudCo no venderá ni cederá los datos personales de sus clientes a terceros con fines comerciales. Sin embargo, podrá compartir datos con:

• Proveedores de servicios tecnológicos que colaboran en la prestación del servicio (ej. servicios de nube, herramientas de gestión de proyectos), bajo estrictos acuerdos de confidencialidad y tratamiento de datos.
• Autoridades competentes cuando sea requerido por ley o por orden judicial.
• Socios comerciales o subcontratistas, únicamente con el consentimiento previo del titular y en el marco de un proyecto específico.

Cuando los datos sean transferidos a proveedores ubicados fuera de Colombia, CloudCo garantizará que dichos destinatarios ofrezcan niveles adecuados de protección de datos, conforme a la normativa colombiana aplicable.`,
  },
  {
    id: "seguridad",
    title: "9. Medidas de Seguridad",
    content: `CloudCo implementa medidas técnicas, administrativas y organizativas para proteger los datos personales frente a accesos no autorizados, pérdida, alteración o divulgación indebida, entre ellas:

• Cifrado de datos en tránsito mediante protocolos TLS/HTTPS.
• Control de acceso basado en roles, con autenticación de múltiples factores para sistemas internos.
• Revisiones periódicas de seguridad y pruebas de vulnerabilidad.
• Políticas internas de manejo de información confidencial para todo el equipo.
• Procedimientos de respuesta ante incidentes de seguridad.

En caso de una brecha de seguridad que afecte los datos personales, CloudCo notificará a los titulares afectados y a la Superintendencia de Industria y Comercio (SIC) en los plazos previstos por la normativa vigente.`,
  },
  {
    id: "menores",
    title: "10. Menores de Edad",
    content: `Los servicios de CloudCo están dirigidos exclusivamente a personas mayores de 18 años en calidad de representantes de empresas o como profesionales independientes. CloudCo no recopila ni trata conscientemente datos personales de menores de edad.

Si CloudCo detecta que ha recopilado datos de un menor sin el consentimiento parental correspondiente, procederá a eliminarlos de forma inmediata. Si usted considera que podría haberse dado esta situación, le rogamos nos lo comunique a cloudcosolutionss@gmail.com.`,
  },
  {
    id: "actualizaciones",
    title: "11. Actualizaciones de esta Política",
    content: `CloudCo podrá actualizar la presente Política de Privacidad en cualquier momento para reflejar cambios normativos, operativos o en los servicios prestados. Las modificaciones serán notificadas a los titulares con al menos 10 días hábiles de antelación a su entrada en vigencia, a través de los medios de contacto registrados o mediante aviso visible en el sitio web.

La versión vigente de esta política estará siempre disponible en nuestro sitio web. Le recomendamos revisarla periódicamente.`,
  },
  {
    id: "autoridad",
    title: "12. Autoridad de Control",
    content: `Si el titular considera que CloudCo ha vulnerado sus derechos en materia de protección de datos personales, podrá presentar una queja o reclamación ante la Superintendencia de Industria y Comercio (SIC), entidad encargada de vigilar el cumplimiento de la Ley 1581 de 2012 en Colombia.

Sitio web de la SIC: www.sic.gov.co
Línea de atención al ciudadano: 601 592 0400`,
  },
];

function PoliticaBase() {
  const [openSection, setOpenSection] = useState<string | null>("responsable");

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
              <ShieldCheck className="text-primary" size={14} />
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              CloudCo · Legal
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="font-mono inline-block rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-widest text-primary">
            Documento Legal
          </span>
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
            Política de{" "}
            <span className="text-gradient">Privacidad</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Conozca cómo CloudCo recopila, usa y protege sus datos personales,
            de conformidad con la Ley 1581 de 2012 y la legislación colombiana vigente.
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
              Al utilizar los servicios de CloudCo, el Cliente acepta las prácticas
              descritas en esta Política de Privacidad. Para ejercer sus derechos
              o realizar consultas, escríbanos a{" "}
              <a
                href="mailto:cloudcosolutionss@gmail.com"
                className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                cloudcosolutionss@gmail.com
              </a>
            </p>
          </div>

          {/* Acordeón */}
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

export const Politica = memo(PoliticaBase);