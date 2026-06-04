import { createFileRoute } from "@tanstack/react-router";
import { Politica } from "@/components/Politica";

export const Route = createFileRoute("/politica")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — CloudCo" },
      {
        name: "description",
        content:
          "Política de privacidad y tratamiento de datos personales de CloudCo S.A.S., de conformidad con la Ley 1581 de 2012 de la República de Colombia.",
      },
      { property: "og:title", content: "Política de Privacidad — CloudCo" },
      {
        property: "og:description",
        content:
          "Conozca cómo CloudCo protege y trata sus datos personales. Santa Marta, Colombia.",
      },
    ],
  }),
  component: () => <Politica />,
});