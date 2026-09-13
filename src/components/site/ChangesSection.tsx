import { Section, Eyebrow } from "./primitives";

const GAINS = [
  "Trata-se de saber onde investir.",
  "Entender por que está investindo.",
  "Acompanhar se está funcionando.",
  "Corrigir antes de desperdiçar mais dinheiro.",
  "Identificar novas oportunidades.",
  "E construir resultados que não dependam apenas da campanha do mês.",
];

export function ChangesSection() {
  return (
    <Section tone="paper">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <Eyebrow>O que muda para você</Eyebrow>
          <h2 className="headline mt-5 max-w-[18ch] text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
            No fim, não se trata de fazer{" "}
            <span className="font-normal text-ink/50">mais marketing.</span>
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-5">
            {GAINS.map((item, index) => (
              <p
                key={item}
                className={
                  index === 0
                    ? "max-w-[40ch] text-[1.125rem] font-semibold leading-snug text-ink sm:text-[1.25rem]"
                    : "max-w-[42ch] text-[1.0625rem] leading-[1.7] text-ink/65 sm:text-[1.1875rem]"
                }
              >
                {item}
              </p>
            ))}
          </div>

          <div className="mt-12 space-y-5 text-base leading-[1.8] sm:text-[1.125rem]">
            <p className="max-w-[46ch] text-ink/70">
              Você ganha mais controle sobre o marketing da própria empresa sem precisar fazer
              tudo sozinho.
            </p>
            <p className="headline text-[1.375rem] sm:text-[1.625rem]">Menos tiro no escuro.</p>
            <p className="headline max-w-[26ch] text-[1.375rem] text-ink/55 sm:text-[1.625rem]">
              Mais clareza para decidir onde colocar dinheiro, tempo e energia.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
