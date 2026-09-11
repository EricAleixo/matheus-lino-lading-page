import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/site/HeroSection";
import { DailySection } from "@/components/site/DailySection";

const TITLE = "Matheus Lino — Decisões de marketing com clareza";
const DESCRIPTION =
  "Você continua liderando a empresa e as decisões de marketing continuam suas. Você só não precisa mais tomá-las no escuro.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main lang="pt-BR">
      <HeroSection />
      <DailySection />
    </main>
  );
}
