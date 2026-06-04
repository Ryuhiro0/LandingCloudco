import { memo, useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import emailjs from "@emailjs/browser";

// ─── Configura estos 3 valores con los de tu cuenta EmailJS ───────────────────
const EMAILJS_SERVICE_ID  = "service_9ih78ss";
const EMAILJS_TEMPLATE_ID = "template_pndnmej";
const EMAILJS_PUBLIC_KEY  = "AdJrmg6dpFMqiQ6ra";
// ─────────────────────────────────────────────────────────────────────────────

type FormState = "idle" | "submitting" | "success" | "error";

function CTABase() {
  const ref = useReveal<HTMLDivElement>();
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    nombre: "",
    numero: "",
    correo: "",
    descripcion: "",
    aceptaTerminos: false,
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!values.correo.trim()) {
      newErrors.correo = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.correo)) {
      newErrors.correo = "Ingresa un correo válido.";
    }
    if (!values.aceptaTerminos) {
      newErrors.aceptaTerminos = "Debes aceptar los términos y condiciones.";
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setValues((prev) => ({ ...prev, [name]: newValue }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormState("submitting");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nombre:      values.nombre      || "No especificado",
          numero:      values.numero      || "No especificado",
          correo:      values.correo,
          descripcion: values.descripcion || "No especificada",
        },
        EMAILJS_PUBLIC_KEY
      );
      setFormState("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setFormState("error");
    }
  };

  return (
    <section id="contacto" className="px-6 py-20">
      <div
        ref={ref}
        className="reveal mx-auto max-w-5xl rounded-3xl border border-primary/30 bg-surface/60 p-12 backdrop-blur glow"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">
            ¿Tu negocio está listo para escalar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Agenda una sesión técnica gratuita. Diagnosticamos tus procesos y
            diseñamos tu hoja de ruta hacia la eficiencia digital.
          </p>
        </div>

        {/* Form / Success / Error */}
        <div className="mt-10">
          {formState === "success" ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle className="text-primary" size={48} />
              <h3 className="text-xl font-semibold">¡Mensaje enviado!</h3>
              <p className="text-muted-foreground">
                Recibimos tu información. Nos pondremos en contacto contigo muy pronto.
              </p>
              <button
                onClick={() => {
                  setFormState("idle");
                  setValues({ nombre: "", numero: "", correo: "", descripcion: "", aceptaTerminos: false });
                }}
                className="mt-2 text-sm text-primary underline underline-offset-4 hover:opacity-80"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto grid max-w-2xl gap-5"
            >
              {/* Nombre */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={values.nombre}
                  onChange={handleChange}
                  className="rounded-xl border border-primary/20 bg-surface/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Número */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="numero" className="text-sm font-medium text-foreground">
                  Número de teléfono
                </label>
                <input
                  id="numero"
                  name="numero"
                  type="tel"
                  placeholder="+57 300 000 0000"
                  value={values.numero}
                  onChange={handleChange}
                  className="rounded-xl border border-primary/20 bg-surface/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Correo (obligatorio) */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="correo" className="text-sm font-medium text-foreground">
                  Correo electrónico{" "}
                  <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={values.correo}
                  onChange={handleChange}
                  aria-describedby={errors.correo ? "correo-error" : undefined}
                  className={`rounded-xl border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition bg-surface/40 focus:ring-2 focus:ring-primary/20 ${
                    errors.correo
                      ? "border-red-500/70 focus:border-red-500"
                      : "border-primary/20 focus:border-primary/60"
                  }`}
                />
                {errors.correo && (
                  <p id="correo-error" className="text-xs text-red-400">
                    {errors.correo}
                  </p>
                )}
              </div>

              {/* Descripción */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="descripcion" className="text-sm font-medium text-foreground">
                  Descripción
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={4}
                  placeholder="Cuéntanos brevemente sobre tu negocio y qué necesitas..."
                  value={values.descripcion}
                  onChange={handleChange}
                  className="resize-none rounded-xl border border-primary/20 bg-surface/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Aceptar Términos */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-start gap-3">
                  {/* Checkbox custom */}
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      id="aceptaTerminos"
                      name="aceptaTerminos"
                      type="checkbox"
                      checked={values.aceptaTerminos}
                      onChange={handleChange}
                      className="peer sr-only"
                      aria-describedby={errors.aceptaTerminos ? "terminos-error" : undefined}
                    />
                    <label
                      htmlFor="aceptaTerminos"
                      className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border transition-all
                        peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40
                        ${values.aceptaTerminos
                          ? "border-primary bg-primary"
                          : errors.aceptaTerminos
                            ? "border-red-500/70 bg-surface/40"
                            : "border-primary/30 bg-surface/40 hover:border-primary/60"
                        }`}
                    >
                      {values.aceptaTerminos && (
                        <svg
                          width="11"
                          height="9"
                          viewBox="0 0 11 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M1 4L4 7L10 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary-foreground"
                          />
                        </svg>
                      )}
                    </label>
                  </div>

                  {/* Label con links a /terminos y /politica */}
                  <label htmlFor="aceptaTerminos" className="cursor-pointer text-sm text-muted-foreground leading-snug">
                    He leído y aceptado los{" "}
                    <Link
                      to="/terminos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
                    >
                      Términos y Condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link
                      to="/politica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
                    >
                      Política de Privacidad
                    </Link>{" "}
                    de CloudCo.{" "}
                    <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                </div>

                {errors.aceptaTerminos && (
                  <p id="terminos-error" className="text-xs text-red-400 pl-8">
                    {errors.aceptaTerminos}
                  </p>
                )}
              </div>

              {/* Error global */}
              {formState === "error" && (
                <p className="text-center text-sm text-red-400">
                  Ocurrió un error al enviar. Por favor intenta de nuevo.
                </p>
              )}

              {/* Submit */}
              <div className="flex flex-col items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_-4px_var(--color-primary)] disabled:opacity-60"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar mensaje <ArrowRight size={16} />
                    </>
                  )}
                </button>
                <p className="font-mono text-xs text-muted-foreground">
                  Sin compromisos · Auditoría 100% técnica
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export const CTA = memo(CTABase);