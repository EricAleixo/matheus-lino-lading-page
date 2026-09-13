const AREAS = [
  {
    title: "Posicionamento e marca",
    description: "Quando o mercado não entende claramente o valor da empresa.",
  },
  {
    title: "Mídia e aquisição",
    description: "Quando precisamos aumentar demanda ou alcançar novas pessoas.",
  },
  {
    title: "Conteúdo e comunicação",
    description: "Quando a empresa precisa construir percepção, autoridade ou relacionamento.",
  },
  {
    title: "Vendas e jornada comercial",
    description: "Quando existe interesse, mas ele não está virando negócio.",
  },
  {
    title: "CRM, automação e processos",
    description: "Quando oportunidades estão sendo desperdiçadas por falta de estrutura.",
  },
  {
    title: "Experiência",
    description: "Quando a promessa feita pelo marketing não é sustentada nos pontos de contato.",
  },
];

export function AreasSection() {
  return (
    <section className="paper-atmosphere relative isolate overflow-hidden pt-20 pb-24 text-ink sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-[32ch]">
          <h2 className="headline text-[2.125rem] leading-[1.08] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
            Dependendo do problema, a resposta pode estar em lugares diferentes.
          </h2>
        </div>

        {/* Grade de 6 Áreas de Diagnóstico */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-3">
          {AREAS.map((item, index) => (
            <div
              key={item.title}
              className="glass-surface-light soft-surface group rounded-2xl p-6 transition-all duration-300 hover:shadow-md sm:p-7"
            >
              <span className="tag-mono text-[0.6875rem] text-ink/40">0{index + 1} // ÁREA</span>
              <h3 className="headline mt-3 text-[1.1875rem] text-ink sm:text-[1.3125rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-[1.75] text-ink/70 sm:text-[1.0625rem]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div className="mt-14 border-t border-ink/10 pt-10 sm:mt-20 sm:pt-14">
          <p className="headline max-w-[28ch] text-[1.5rem] leading-snug text-ink sm:text-[2rem]">
            A solução vem depois do diagnóstico.{" "}
            <span className="font-normal text-ink/50">Não o contrário.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
