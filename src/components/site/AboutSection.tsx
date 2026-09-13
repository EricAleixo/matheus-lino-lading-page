import { Section, Eyebrow } from "./primitives";

export function AboutSection() {
  return (
    <Section tone="mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,var(--paper),transparent_70%)]"
      />
      <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <Eyebrow>Quem é Matheus Lino?</Eyebrow>
          <h2 className="headline mt-5 max-w-[16ch] text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem]">
            Sou estrategista de marketing e fundador da Quality Master.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-6 text-base leading-[1.85] text-ink/70 sm:text-[1.125rem]">
            <p className="max-w-[48ch]">
              Entrei no marketing porque sempre gostei de entender gente: comportamento,
              política, poder, negócios e as decisões que movem tudo isso.
            </p>
            <p className="max-w-[48ch]">
              Encontrei no marketing uma forma de transformar essa curiosidade em algo
              mensurável, usando dados, tecnologia e comportamento real.
            </p>
            <p className="max-w-[48ch]">No fim, quase tudo que estudo parte da mesma pergunta:</p>
          </div>
          <p className="headline mt-8 text-[1.5rem] sm:text-[1.875rem]">
            Por que as pessoas fazem o que fazem?
          </p>
          <p className="mt-8 max-w-[44ch] text-base leading-[1.85] text-ink sm:text-[1.125rem]">
            Hoje, transformo essa obsessão em decisões mais inteligentes para empresas.
          </p>
        </div>
      </div>
    </Section>
  );
}
