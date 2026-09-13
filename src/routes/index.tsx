import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/site/HeroSection";
import { DailySection } from "@/components/site/DailySection";
import { DarkShotsSection } from "@/components/site/DarkShotsSection";
import { ReframeSection } from "@/components/site/ReframeSection";
import { PromiseSection } from "@/components/site/PromiseSection";
import { RoleSection } from "@/components/site/RoleSection";
import { MethodSection } from "@/components/site/MethodSection";
import { ContinuousSection } from "@/components/site/ContinuousSection";
import { CaseSection } from "@/components/site/CaseSection";
import { AreasSection } from "@/components/site/AreasSection";
import { QualityMasterSection } from "@/components/site/QualityMasterSection";
import { ChangesSection } from "@/components/site/ChangesSection";
import { AboutSection } from "@/components/site/AboutSection";
import { DiagnosisSection } from "@/components/site/DiagnosisSection";
import { SiteFooter } from "@/components/site/SiteFooter";

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
    <main
      lang="pt-BR"
      className="min-h-screen bg-ink text-mist selection:bg-steel/30 selection:text-mist"
    >
      {/* Bloco 1 a 3: Sobrecarga & Tensão (Ambiente Escuro Contínuo) */}
      <div className="overload-canvas">
        <HeroSection />
        <DailySection />
        <DarkShotsSection />
      </div>

      {/* Bloco 4 e 5: O Reframe & A Promessa (Ruptura para Ambiente Claro) */}
      <ReframeSection />
      <PromiseSection />

      {/* Bloco 6 e 7: Papel de Matheus & Método (Ambiente Estratégico Sapphire) */}
      <RoleSection />
      <MethodSection />

      {/* Bloco 8, 9 e 10: Acompanhamento, Case & Diagnóstico de Áreas (Ambiente Claro) */}
      <ContinuousSection />
      <CaseSection />
      <AreasSection />

      {/* Bloco 11: Execução Quality Master (Ambiente Escuro Executivo) */}
      <QualityMasterSection />

      {/* Bloco 12 e 13: O Que Muda & Quem é Matheus Lino (Ambiente Claro & Humanidade) */}
      <ChangesSection />
      <AboutSection />

      {/* Bloco 14: Diagnóstico Final & Rodapé (Ambiente Escuro de Fechamento) */}
      <DiagnosisSection />
      <SiteFooter />
    </main>
  );
}
