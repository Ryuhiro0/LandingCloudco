import { createFileRoute } from "@tanstack/react-router";
import { Terminos } from "@/components/Terminos";

function TerminosRoute() {
  return <Terminos />;
}

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — CloudCO" },
      {
        name: "description",
        content:
          "Términos y condiciones de CloudCO S.A.S., empresa de desarrollo de software bajo las leyes de la República de Colombia.",
      },
      { property: "og:title", content: "Términos y Condiciones — CloudCO" },
      {
        property: "og:description",
        content:
          "Condiciones legales de los servicios de CloudCO S.A.S. Santa Marta, Colombia.",
      },
    ],
  }),
  component: TerminosRoute,
});
