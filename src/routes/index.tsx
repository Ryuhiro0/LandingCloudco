import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { Testimonial } from "@/components/Testimonial";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CloudCO Software de alto rendimiento" },
      {
        name: "description",
        content:
          "CloudCO desarrolla soluciones digitales que escalan: ingeniería full-stack, automatización inteligente e IA para acelerar tu tiempo al mercado.",
      },
      { property: "og:title", content: "CloudCO Software de alto rendimiento" },
      {
        property: "og:description",
        content:
          "Soluciones a medida, automatización e IA. Engineered for Results.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}

