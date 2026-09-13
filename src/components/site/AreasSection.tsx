import { Section, Eyebrow } from "./primitives";

const AREAS = [
  ["Posicionamento e marca", "Quando o mercado não entende claramente o valor da empresa."],
  ["Mídia e aquisição", "Quando precisamos aumentar demanda ou alcançar novas pessoas."],
  [
    "Conteúdo e comunicação",
    "Quando a empresa precisa construir percepção, autoridade ou relacionamento.",
  ],
  ["Vendas e jornada comercial", "Quando existe interesse, mas ele não está virando negócio."],
  [
    "CRM, automação e processos",
    "Quando oportunidades estão sendo desperdiçadas por falta de estrutura.",
  ],
  [
    "Experiência",
    "Quando a promessa feita pelo marketing não é sustentada nos pontos de contato.",
  ],
];

export function AreasSection() {
  return (
    <Section tone="mist">
      <div className="max-w-[26ch]">
        <Eyebrow>Onde pode estar o gargalo</Eyebrow>
        <h2 className="headline mt-5 text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem]">
          Dependendo do problema, a resposta pode estar em lugares diferentes.
        </h2>
      </div>

      <div className="mt-14 grid gap-x-16 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {AREAS.map(([title, text]) => (
          <div key={title} className="max-w-[34ch]">
            <h3 className="text-[1.125rem] font-semibold leading-snug text-ink sm:text-[1.25rem]">
              {title}
            </h3>
            <p className="mt-3 text-base leading-[1.75] text-ink/65 sm:text-[1.0625rem]">{text}</p>
          </div>
        ))}
      </div>

      <p className="headline mt-16 max-w-[24ch] text-[1.5rem] sm:text-[1.875rem] lg:mt-20">
        A solução vem depois do diagnóstico.{" "}
        <span className="font-normal text-ink/50">Não o contrário.</span>
      </p>
    </Section>
  );
}
