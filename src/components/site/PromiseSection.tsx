import { Section, Eyebrow } from "./primitives";

const QUESTIONS = [
  "O que devemos fazer?",
  "Por que devemos fazer?",
  "Quanto devemos investir?",
  "O que vem primeiro?",
  "Está funcionando?",
  "O que aprendemos com os resultados?",
  "O que isso muda na próxima decisão?",
  "Qual é o próximo gargalo?",
];

export function PromiseSection() {
  return (
    <Section tone="mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,var(--paper),transparent_70%)]"
      />
      <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-6">
          <Eyebrow>A promessa</Eyebrow>
          <h2 className="headline mt-5 max-w-[20ch] text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]">
            Você continua liderando a empresa. E passa a liderar o marketing com{" "}
            <span className="font-normal text-ink/50">mais clareza.</span>
          </h2>
          <div className="mt-9 space-y-5 text-base leading-[1.8] text-ink/70 sm:text-[1.125rem]">
            <p className="max-w-[44ch]">
              Você não precisa dominar cada ferramenta para liderar bem o marketing da sua
              empresa.
            </p>
            <p className="max-w-[44ch]">
              Precisa entender o que está acontecendo, saber quais perguntas fazer e ter
              informações melhores antes de decidir.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="glass-surface-light soft-surface rounded-[2rem] px-6 py-8 sm:px-9 sm:py-10">
            <ul className="space-y-4">
              {QUESTIONS.map((question) => (
                <li
                  key={question}
                  className="text-[1.0625rem] font-medium leading-snug text-ink/75 sm:text-[1.1875rem]"
                >
                  {question}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 max-w-[30ch]">
            <p className="text-sm font-medium text-ink/55">No fim, todas levam a uma pergunta:</p>
            <p className="headline mt-4 text-[1.625rem] sm:text-[2rem]">
              Qual é a melhor decisão agora?
            </p>
            <p className="mt-5 text-[1.0625rem] font-semibold text-ink">É nisso que eu ajudo.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
