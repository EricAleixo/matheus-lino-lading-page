import { motion } from "framer-motion";

export function CaseSection() {
  return (
    <section className="bg-mist relative isolate overflow-hidden pt-20 pb-24 text-ink sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      {/* Luz ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-paper blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        {/* Identificador de Case */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/60 px-3.5 py-1.5 text-xs font-semibold text-ink/75"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-deep" />
          <span>CASE INNOVA EMPREENDIMENTOS</span>
        </motion.div>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-x-16 lg:items-start">
          {/* Coluna Esquerda: Headline e Contexto */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <h2 className="headline text-[2.125rem] leading-[1.1] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
              Estratégia também significa saber quando{" "}
              <span className="font-normal text-ink/50">não gastar.</span>
            </h2>

            <div className="mt-8 space-y-4 border-l-2 border-steel/30 pl-4 sm:mt-10 sm:pl-6">
              <p className="text-base leading-[1.8] text-ink/80 sm:text-lg">
                Havia uma verba disponível.
              </p>
              <p className="text-base leading-[1.8] text-ink/80 sm:text-lg">
                O caminho mais óbvio seria simplesmente consumi-la.
              </p>
              <p className="text-base leading-[1.8] text-ink/80 sm:text-lg">
                Mas os resultados mostraram que isso não era necessário naquele momento.
              </p>
            </div>
          </motion.div>

          {/* Coluna Direita: Card de Métrica e Conclusão */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 lg:pt-2"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass-surface-light soft-surface rounded-[2rem] border border-ink/10 p-7 transition-all duration-300 hover:shadow-xl sm:p-10"
            >
              <span className="tag-mono text-[0.6875rem] text-ink/50">RESULTADO / EFICIÊNCIA</span>
              <p className="headline mt-3 text-[1.5rem] leading-snug text-ink sm:text-[1.875rem] lg:text-[2rem]">
                Meta superada em <span className="underline decoration-deep/40 font-bold">20%</span>{" "}
                utilizando aproximadamente <span className="underline decoration-deep/40 font-bold">70%</span>{" "}
                da verba prevista.
              </p>
            </motion.div>

            <div className="mt-8 space-y-5 pl-1 sm:mt-10">
              <p className="text-base leading-[1.8] text-ink/75 sm:text-lg">
                Com os resultados em mãos, foi possível decidir melhor onde utilizar o restante do
                orçamento.
              </p>
              <p className="text-base font-bold leading-[1.8] text-ink sm:text-lg">
                O objetivo não é gastar a verba. É produzir o melhor resultado possível com ela.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
