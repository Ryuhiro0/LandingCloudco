import { createFileRoute } from "@tanstack/react-router";
import { Politica } from "@/components/Politica";

export const Route = createFileRoute("/politica")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — CloudCO" },
      {
        name: "description",
        content:
          "Política de privacidad y tratamiento de datos personales de CloudCO S.A.S., de conformidad con la Ley 1581 de 2012 de la República de Colombia.",
      },
      { property: "og:title", content: "Política de Privacidad — CloudCO" },
      {
        property: "og:description",
        content:
          "Conozca cómo CloudCO protege y trata sus datos personales. Santa Marta, Colombia.",
      },
    ],
  }),
  component: () => <Politica />,
});
