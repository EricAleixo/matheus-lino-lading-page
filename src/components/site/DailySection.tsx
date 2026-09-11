const QUESTIONS = [
  "“Aumento a verba dos anúncios?”",
  "“Contrato mais alguém?”",
  "“Precisamos produzir mais conteúdo?”",
  "“O problema é o comercial?”",
  "“Será que deveríamos mexer na marca?”",
  "“Esse investimento está realmente voltando?”",
  "“Qual dessas coisas precisa ser resolvida primeiro?”",
];

export function DailySection() {
  return (
    <section className="relative bg-mist text-ink">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-96 w-3/4 bg-[radial-gradient(circle_at_top_right,var(--paper),transparent_66%)] opacity-80" />
      <div className="relative mx-auto w-full max-w-[1180px] px-5 pt-8 pb-24 sm:px-8 sm:pt-12 lg:px-12 lg:pt-16 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-20">
          <div className="lg:col-span-5 lg:row-start-1">
            <p className="text-xs font-semibold text-ink/50">O que precisa vir primeiro?</p>
            <h2 className="headline mt-5 max-w-[15ch] text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]">
              Administrar uma empresa já exige decisões demais.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
            <ol className="space-y-1 sm:space-y-2">
              {QUESTIONS.map((question, index) => {
                const isLast = index === QUESTIONS.length - 1;
                return (
                  <li
                    key={question}
                    className={
                      isLast
                        ? "soft-surface mt-5 rounded-[1.75rem] bg-ink px-6 py-7 text-mist sm:px-8 sm:py-9"
                        : "px-1 py-3 sm:py-4"
                    }
                  >
                    <p className={isLast ? "headline text-[1.375rem] sm:text-[1.625rem]" : "text-[1.0625rem] font-medium leading-snug text-ink/75 sm:text-xl"}>
                      {question}
                    </p>
                    {isLast && <p className="mt-4 text-xs font-medium text-steel">A decisão por trás das outras decisões</p>}
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-start">
            <div className="space-y-6 text-base leading-[1.8] sm:text-[1.125rem]">
              <p className="max-w-[46ch] text-ink">
                Enquanto você tenta responder isso, ainda existem funcionários,
                fornecedores, clientes, impostos, caixa e operação esperando alguma
                decisão sua.
              </p>
              <p className="max-w-[46ch] text-ink/70">
                E fica aquela sensação de que você deveria conseguir conduzir tudo isso
                melhor, mesmo sem ter tempo para dominar cada variável.
              </p>
              <p className="max-w-[46ch] text-ink/70">
                O marketing acaba virando mais uma responsabilidade estratégica sendo
                decidida no meio de dezenas de outras urgências.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
