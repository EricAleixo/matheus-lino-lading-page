import { motion } from "framer-motion";

import gestorSituacaoReal from "@/assets/gestor-situacao-real.webp";

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
    <section className="relative isolate overflow-hidden bg-mist pt-20 pb-24 text-ink sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      {/* Foto de fundo: gestor em situação real, à direita, dissolvendo em gradiente */}
      <img
        src={gestorSituacaoReal}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-[center_35%] lg:w-[60%]"
      />
      {/* Gradiente: da cor da seção (esquerda) para a foto (direita) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-mist/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-mist lg:from-40% lg:via-mist/80 lg:via-55% lg:to-mist/10"
      />
      {/* Suaviza as bordas superior e inferior da foto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-mist via-transparent to-mist"
      />

      {/* Luz ambiente suave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,var(--paper),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16">
          {/* Coluna Esquerda: Headline e Posicionamento */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <h2 className="headline text-[2.125rem] leading-[1.1] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
              Você continua liderando a empresa. E passa a liderar o marketing com{" "}
              <span className="font-normal text-ink/50">mais clareza.</span>
            </h2>

            <div className="mt-8 space-y-5 border-l-2 border-steel/30 pl-4 sm:mt-10 sm:pl-6">
              <p className="text-base leading-[1.8] text-ink/85 sm:text-lg">
                Você não precisa dominar cada ferramenta para liderar bem o marketing da sua
                empresa.
              </p>
              <p className="text-base leading-[1.8] text-ink/75 sm:text-lg">
                Precisa entender o que está acontecendo, saber quais perguntas fazer e ter
                informações melhores antes de decidir.
              </p>
            </div>
          </motion.div>

          {/* Coluna Direita: As 8 Perguntas Estratégicas e a Síntese */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="glass-surface-light soft-surface rounded-[2rem] p-6 sm:p-9">
              <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {QUESTIONS.map((question, index) => (
                  <motion.li
                    key={question}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
                    className="flex items-start gap-2.5 text-[0.9375rem] font-medium leading-snug text-ink/80 sm:text-base"
                  >
                    <span className="tag-mono mt-0.5 text-[0.6875rem] text-ink/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{question}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* A Pergunta Central */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-10 border-t border-ink/10 pt-8 sm:mt-12 sm:pt-10"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-ink/55">
                No fim, todas levam a uma pergunta:
              </p>
              <p className="headline mt-3 text-[1.625rem] leading-tight text-ink sm:text-[2.125rem]">
                Qual é a melhor decisão agora?
              </p>
              <p className="mt-4 text-base font-semibold text-ink sm:text-lg">
                É nisso que eu ajudo.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
