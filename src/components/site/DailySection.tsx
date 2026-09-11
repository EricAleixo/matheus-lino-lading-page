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
    <section className="bg-mist text-ink">
      <div className="mx-auto w-full max-w-[1180px] px-5 pt-16 pb-20 sm:px-8 sm:pt-20 lg:px-12 lg:pt-28 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="tag-mono text-ink/50">02</span>
              <span aria-hidden="true" className="h-px w-8 bg-ink/25" />
              <span className="tag-brand text-ink/50">Priority</span>
            </div>

            <h2 className="headline mt-7 text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem]">
              Administrar uma empresa já exige decisões demais.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <ol className="border-t border-ink/15">
              {QUESTIONS.map((question, index) => {
                const isLast = index === QUESTIONS.length - 1;
                return (
                  <li
                    key={question}
                    className={
                      isLast
                        ? "grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 border-b border-ink/25 bg-ink/[0.04] py-6 pl-3 sm:grid-cols-[3rem_minmax(0,1fr)]"
                        : "grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 border-b border-ink/10 py-5 sm:grid-cols-[3rem_minmax(0,1fr)]"
                    }
                  >
                    <span className="tag-mono pt-1.5 text-ink/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p
                        className={
                          isLast
                            ? "headline text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem]"
                            : "headline text-[1.0625rem] font-medium text-ink/85 sm:text-[1.25rem]"
                        }
                      >
                        {question}
                      </p>
                      {isLast && (
                        <p className="tag-brand mt-4 text-ink/50">Decision</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 text-[1.0625rem] leading-[1.7] sm:text-[1.125rem]">
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
