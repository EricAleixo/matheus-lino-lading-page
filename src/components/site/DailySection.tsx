import { User } from "lucide-react";

const QUESTIONS = [
  "Aumento a verba dos anúncios?",
  "Contrato mais alguém?",
  "Precisamos produzir mais conteúdo?",
  "O problema é o comercial?",
  "Será que deveríamos mexer na marca?",
  "Esse investimento está realmente voltando?",
];

const PIVOTAL_QUESTION = "Qual dessas perguntas deveria vir primeiro?";

export function DailySection() {
  const leftQuestions = QUESTIONS.slice(0, 3);
  const rightQuestions = QUESTIONS.slice(3, 6);

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
        {/* Linha divisória de luz suave */}
        <div
          aria-hidden="true"
          className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-steel/20 to-transparent sm:mb-16"
        />

        {/* Headline Centralizada */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="headline text-[2rem] leading-[1.12] text-mist sm:text-[2.625rem] lg:text-[3.125rem]">
            Administrar uma empresa já exige decisões demais.
          </h2>
        </div>

        {/* Layout com Ícone de Pessoa no Centro e Perguntas em Volta */}
        <div className="mt-14 sm:mt-18 lg:mt-20">
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Coluna Esquerda: 3 Perguntas */}
            <div className="space-y-4 lg:col-span-4">
              {leftQuestions.map((question, idx) => {
                const questionNumber = String(idx + 1).padStart(2, "0");
                return (
                  <div
                    key={question}
                    className="glass-panel-dark group flex items-baseline gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-steel/40 hover:bg-deep/50 hover:shadow-[0_8px_30px_rgba(0,15,37,0.4)]"
                  >
                    <span className="tag-mono shrink-0 text-[0.6875rem] font-semibold text-steel/60 transition-colors group-hover:text-mist">
                      {questionNumber}
                    </span>
                    <p className="text-[1.0625rem] font-medium leading-snug text-mist/90 sm:text-[1.125rem]">
                      {question}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Coluna Central: Ícone de Pessoa / Decisor com anéis orbitais */}
            <div className="flex flex-col items-center justify-center py-6 lg:col-span-4 lg:py-0">
              <div className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
                {/* Anéis orbitais concêntricos */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-steel/15 animate-[ring-pulse_4s_ease-in-out_infinite]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-4 rounded-full border border-dashed border-steel/25"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-8 rounded-full bg-steel/10 blur-xl"
                />

                {/* Nó Central com Ícone */}
                <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-mist/40 bg-gradient-to-b from-deep/90 to-ink/95 shadow-[0_0_30px_rgba(141,157,179,0.25)] backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:h-28 sm:w-28">
                  <User className="h-9 w-9 text-mist sm:h-11 sm:w-11" strokeWidth={1.75} />
                  <span className="tag-mono mt-1 text-[0.5625rem] font-semibold tracking-widest text-steel">
                    VOCÊ
                  </span>
                </div>
              </div>
              <p className="tag-mono mt-3 text-[0.6875rem] tracking-wider text-steel/70">
                CENTRO DAS DECISÕES
              </p>
            </div>

            {/* Coluna Direita: 3 Perguntas */}
            <div className="space-y-4 lg:col-span-4">
              {rightQuestions.map((question, idx) => {
                const questionNumber = String(idx + 4).padStart(2, "0");
                return (
                  <div
                    key={question}
                    className="glass-panel-dark group flex items-baseline gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-steel/40 hover:bg-deep/50 hover:shadow-[0_8px_30px_rgba(0,15,37,0.4)]"
                  >
                    <span className="tag-mono shrink-0 text-[0.6875rem] font-semibold text-steel/60 transition-colors group-hover:text-mist">
                      {questionNumber}
                    </span>
                    <p className="text-[1.0625rem] font-medium leading-snug text-mist/90 sm:text-[1.125rem]">
                      {question}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Destaque Principal: A 7ª Pergunta (sem aspas) */}
          <div className="mt-10 sm:mt-14">
            <div className="glass-panel-accent relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-steel/20 blur-3xl"
              />
              <div className="relative flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/15 text-[0.8125rem] font-bold text-mist">
                    07
                  </span>
                  <p className="headline text-[1.25rem] text-mist sm:text-[1.5rem] lg:text-[1.75rem]">
                    {PIVOTAL_QUESTION}
                  </p>
                </div>
                <span className="tag-mono shrink-0 rounded-full border border-mist/30 bg-mist/10 px-4 py-1.5 text-[0.6875rem] text-mist">
                  PONTO DE PARTIDA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
