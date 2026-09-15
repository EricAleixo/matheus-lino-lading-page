import { motion } from "framer-motion";

const CHANGES = [
  "O mercado muda.",
  "Concorrentes reagem.",
  "Campanhas saturam.",
  "Produtos amadurecem.",
  "Novos gargalos aparecem.",
];

export function ContinuousSection() {
  return (
    <section className="paper-atmosphere relative isolate overflow-hidden pt-20 pb-24 text-ink sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      {/* Luz ambiente suave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top_left,var(--paper),transparent_72%)]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16 lg:items-start">
          {/* Coluna Esquerda: Headline e Dinâmica de Mercado */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <h2 className="headline text-[2.125rem] leading-[1.1] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
              Porque a decisão certa hoje pode não ser a decisão certa daqui a três meses.
            </h2>

            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10">
              {CHANGES.map((item, idx) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-surface-light rounded-full px-4 py-2 text-sm font-medium text-ink/75 transition-colors hover:text-ink sm:text-[0.9375rem]"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Coluna Direita: Análise Mensal e Aprendizado Contínuo */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 lg:pt-2"
          >
            <p className="text-base leading-[1.8] text-ink/80 sm:text-lg">
              Por isso, todos os meses analisamos o que aconteceu, comparamos resultados,
              identificamos avanços e problemas e usamos os dados para responder:
            </p>

            {/* Card Escuro de Destaque da Pergunta Mensal */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="soft-surface mt-8 rounded-[2rem] bg-ink p-7 text-mist shadow-xl transition-all duration-300 sm:p-9"
            >
              <span className="tag-mono text-[0.6875rem] text-steel">PERGUNTA MENSAL</span>
              <p className="headline mt-3 text-[1.375rem] leading-snug text-mist sm:text-[1.625rem]">
                O que aprendemos este mês e como isso altera nossas próximas decisões?
              </p>
            </motion.div>

            <div className="mt-9 space-y-3 border-l-2 border-steel/40 pl-4 sm:pl-6">
              <p className="text-base leading-[1.8] text-ink/70 sm:text-lg">
                Você não recebe apenas números.
              </p>
              <p className="text-base font-bold leading-[1.8] text-ink sm:text-lg">
                Recebe contexto para decidir o próximo movimento.
              </p>
            </div>

            <div className="mt-8 rounded-xl bg-ink/5 p-4 text-center sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink/70 sm:text-sm">
                Decisão → Execução → Resultado → Aprendizado → Nova decisão.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
