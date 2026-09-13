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
  const tacticalQuestions = QUESTIONS.slice(0, 6);
  const pivotalQuestion = QUESTIONS[6];

  return (
    <section className="relative isolate overflow-hidden pt-12 pb-24 text-mist sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-36">
      {/* Luzes difusas de ambiente para conectar fluidamente com o Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/4 h-[30rem] w-[30rem] rounded-full bg-steel/[0.06] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-deep/40 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        {/* Linha divisória de luz suave sem corte horizontal rígido */}
        <div
          aria-hidden="true"
          className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-steel/20 to-transparent sm:mb-20"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-16">
          {/* Coluna Esquerda: Headline e Textos Narrativos */}
          <div className="lg:col-span-5 lg:self-start">
            <h2 className="headline text-[2rem] leading-[1.12] text-mist sm:text-[2.625rem] lg:text-[3.125rem]">
              Administrar uma empresa já exige decisões demais.
            </h2>

            {/* Os 3 parágrafos narrativos */}
            <div className="mt-8 space-y-6 border-l border-steel/20 pl-4 sm:mt-12 sm:pl-6">
              <p className="text-base leading-[1.8] text-mist/90 sm:text-[1.0625rem]">
                Enquanto você tenta responder isso, ainda existem funcionários, fornecedores,
                clientes, impostos, caixa e operação esperando alguma decisão sua.
              </p>
              <p className="text-base leading-[1.8] text-steel sm:text-[1.0625rem]">
                E fica aquela sensação de que você deveria conseguir conduzir tudo isso melhor,
                mesmo sem ter tempo para dominar cada variável.
              </p>
              <p className="text-base leading-[1.8] text-steel sm:text-[1.0625rem]">
                O marketing acaba virando mais uma responsabilidade estratégica sendo decidida no
                meio de dezenas de outras urgências.
              </p>
            </div>
          </div>

          {/* Coluna Direita: A Pilha Rítmica de Perguntas */}
          <div className="lg:col-span-7">
            <div className="space-y-3 sm:space-y-3.5">
              {tacticalQuestions.map((question, index) => {
                const questionNumber = String(index + 1).padStart(2, "0");
                return (
                  <div
                    key={question}
                    className="glass-panel-dark group flex items-baseline gap-4 rounded-2xl p-4.5 transition-all duration-300 hover:border-steel/35 hover:bg-deep/50 sm:gap-5 sm:p-5"
                  >
                    <span className="tag-mono shrink-0 text-[0.6875rem] text-steel/50 transition-colors group-hover:text-steel/90">
                      {questionNumber}
                    </span>
                    <p className="text-[1.0625rem] font-medium leading-snug text-mist/90 sm:text-[1.1875rem]">
                      {question}
                    </p>
                  </div>
                );
              })}

              {/* 7ª Pergunta: O Clímax / Ponto de Decisão Central */}
              <div className="pt-2 sm:pt-3">
                <div className="glass-panel-accent relative overflow-hidden rounded-[1.5rem] p-6 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-steel/20 blur-2xl"
                  />
                  <div className="relative flex items-baseline gap-4 sm:gap-5">
                    <span className="tag-mono shrink-0 text-[0.6875rem] font-bold text-mist">
                      07
                    </span>
                    <p className="headline text-[1.25rem] text-mist sm:text-[1.5rem] lg:text-[1.625rem]">
                      {pivotalQuestion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
