import { Section, Eyebrow } from "./primitives";

const CHANGES = [
  "O mercado muda.",
  "Concorrentes reagem.",
  "Campanhas saturam.",
  "Produtos amadurecem.",
  "Novos gargalos aparecem.",
];

export function ContinuousSection() {
  return (
    <Section tone="mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top_left,var(--paper),transparent_72%)]"
      />
      <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-6">
          <Eyebrow>Acompanhamento contínuo</Eyebrow>
          <h2 className="headline mt-5 max-w-[24ch] text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem]">
            Porque a decisão certa hoje pode não ser a decisão certa daqui a três meses.
          </h2>
          <div className="mt-10 space-y-3">
            {CHANGES.map((item) => (
              <p key={item} className="text-[1.0625rem] leading-snug text-ink/60 sm:text-[1.1875rem]">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <p className="max-w-[46ch] text-base leading-[1.8] text-ink/70 sm:text-[1.125rem]">
            Por isso, todos os meses analisamos o que aconteceu, comparamos resultados,
            identificamos avanços e problemas e usamos os dados para responder:
          </p>
          <div className="soft-surface mt-8 rounded-[2rem] bg-ink px-6 py-8 text-mist sm:px-9 sm:py-10">
            <p className="headline max-w-[26ch] text-[1.375rem] sm:text-[1.625rem]">
              O que aprendemos este mês e como isso altera nossas próximas decisões?
            </p>
          </div>
          <div className="mt-10 space-y-4 text-base leading-[1.8] sm:text-[1.125rem]">
            <p className="max-w-[42ch] text-ink/70">Você não recebe apenas números.</p>
            <p className="max-w-[42ch] font-semibold text-ink">
              Recebe contexto para decidir o próximo movimento.
            </p>
          </div>
          <p className="mt-10 text-sm font-medium leading-[1.9] text-ink/55 sm:text-base">
            Decisão → Execução → Resultado → Aprendizado → Nova decisão.
          </p>
        </div>
      </div>
    </Section>
  );
}
