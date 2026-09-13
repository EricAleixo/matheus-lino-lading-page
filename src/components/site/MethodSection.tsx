import { Section, Eyebrow } from "./primitives";

const STEPS = [
  {
    title: "Entendemos",
    text: "Negócio, contexto, mercado, objetivos, dados e gargalos.",
  },
  {
    title: "Decidimos",
    text: "Com as informações em mãos, avaliamos juntos o que deve ser priorizado, quanto faz sentido investir e quais recursos precisamos mobilizar.",
  },
  {
    title: "Aprendemos",
    text: "Medimos os resultados, entendemos o que mudou e usamos isso para tomar a próxima decisão.",
  },
];

export function MethodSection() {
  return (
    <Section tone="deep" className="pt-0 sm:pt-0 lg:pt-0">
      <div className="max-w-[22ch]">
        <Eyebrow muted>Como isso funciona na prática</Eyebrow>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-x-14">
        {STEPS.map((step) => (
          <div key={step.title} className="max-w-[38ch]">
            <h3 className="headline text-[1.5rem] text-mist sm:text-[1.75rem]">{step.title}</h3>
            <p className="mt-4 text-base leading-[1.8] text-steel sm:text-[1.0625rem]">{step.text}</p>
          </div>
        ))}
      </div>
      <p className="headline mt-14 text-[1.375rem] text-mist sm:text-[1.625rem]">
        Entender <span className="font-normal text-steel">→</span> Decidir{" "}
        <span className="font-normal text-steel">→</span> Aprender.
      </p>
    </Section>
  );
}
