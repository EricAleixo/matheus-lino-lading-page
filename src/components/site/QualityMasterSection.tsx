import qmLogo from "@/assets/qm-logo.png.asset.json";

import { Section, Eyebrow } from "./primitives";

const CAPABILITIES = [
  "Audiovisual",
  "Design",
  "Planilhas",
  "Sites",
  "Social media",
  "Automações",
];

export function QualityMasterSection() {
  return (
    <Section tone="ink">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-6">
          <Eyebrow muted>Execução</Eyebrow>
          <h2 className="headline mt-5 max-w-[20ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
            Quando a estratégia pede execução, entra a{" "}
            <span className="font-normal text-steel">Quality Master.</span>
          </h2>
          <img
            src={qmLogo.url}
            alt="Quality Master"
            className="mt-10 h-7 w-auto opacity-80 sm:h-8"
            width={2238}
            height={507}
            loading="lazy"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-6 text-base leading-[1.8] sm:text-[1.125rem]">
            <p className="max-w-[42ch] text-mist/90">Tomar a decisão certa é só o começo.</p>
            <p className="max-w-[44ch] text-steel">
              Quando é hora de executar, contamos com uma equipe de profissionais
              especializados em:
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {CAPABILITIES.map((item) => (
              <li
                key={item}
                className="glass-surface rounded-full px-4 py-2.5 text-sm font-medium text-mist/90 sm:text-[0.9375rem]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-6 text-base leading-[1.8] sm:text-[1.125rem]">
            <p className="max-w-[46ch] text-mist/90">
              Tudo isso com direcionamento de marketing, padrão de qualidade e uma equipe
              trabalhando na mesma direção.
            </p>
            <p className="headline text-[1.375rem] text-mist sm:text-[1.5rem]">
              Não é serviço solto!!!
            </p>
            <p className="max-w-[46ch] text-steel">
              À medida que identificamos novos gargalos e oportunidades, adicionamos a
              capacidade necessária para executar com excelência.
            </p>
          </div>

          <div className="mt-10 space-y-2 text-[1.0625rem] leading-relaxed sm:text-[1.1875rem]">
            <p className="font-semibold text-mist">Matheus ajuda a definir o que precisa ser feito.</p>
            <p className="text-steel">A Quality Master ajuda a fazer bem feito.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
