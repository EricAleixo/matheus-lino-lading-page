import { Section, Eyebrow } from "./primitives";

export function CaseSection() {
  return (
    <Section tone="paper">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16 lg:items-start">
        <div className="lg:col-span-6">
          <Eyebrow>Case Innova Empreendimentos</Eyebrow>
          <h2 className="headline mt-5 max-w-[20ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
            Estratégia também significa saber quando{" "}
            <span className="font-normal text-ink/50">não gastar.</span>
          </h2>
          <div className="mt-9 space-y-5 text-base leading-[1.8] text-ink/70 sm:text-[1.125rem]">
            <p className="max-w-[42ch]">Havia uma verba disponível.</p>
            <p className="max-w-[42ch]">O caminho mais óbvio seria simplesmente consumi-la.</p>
            <p className="max-w-[44ch]">
              Mas os resultados mostraram que isso não era necessário naquele momento.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="glass-surface-light soft-surface rounded-[2rem] px-6 py-9 sm:px-9 sm:py-11">
            <p className="headline text-[1.5rem] leading-[1.25] sm:text-[1.875rem]">
              Meta superada em <span className="text-ink">20%</span> utilizando aproximadamente{" "}
              <span className="text-ink">70%</span> da verba prevista.
            </p>
          </div>
          <div className="mt-10 space-y-6 text-base leading-[1.8] sm:text-[1.125rem]">
            <p className="max-w-[44ch] text-ink/70">
              Com os resultados em mãos, foi possível decidir melhor onde utilizar o restante
              do orçamento.
            </p>
            <p className="max-w-[44ch] font-semibold text-ink">
              O objetivo não é gastar a verba. É produzir o melhor resultado possível com ela.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
