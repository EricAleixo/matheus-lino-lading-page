import { motion } from "framer-motion";

import qmLogo from "@/assets/qm-logo.png.asset.json";
import qmSymbol from "@/assets/qm-symbol.png.asset.json";

const CAPABILITIES = ["Audiovisual", "Design", "Planilhas", "Sites", "Social media", "Automações"];

export function QualityMasterSection() {
  return (
    <section className="veil-atmosphere relative isolate overflow-hidden pt-20 pb-24 text-mist sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      {/* Marca-d'água do símbolo QM para dar peso e identidade à seção mais importante */}
      <img
        src={qmSymbol.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 opacity-[0.06] mix-blend-screen sm:-right-16"
        loading="lazy"
      />

      {/* Linha de acento no topo para marcar a virada de bloco */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-steel/60 to-transparent"
      />

      {/* Luz ambiente, mais intensa que as demais seções escuras */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-10 h-[28rem] w-[28rem] rounded-full bg-steel/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-10 h-96 w-96 rounded-full bg-deep/60 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16 lg:items-start">
          {/* Coluna Esquerda: Headline e Logo QM */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <span className="ambient-tag inline-flex items-center gap-2 rounded-full px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-steel animate-[ring-pulse_3s_ease-in-out_infinite]" />
              EXECUÇÃO COORDENADA
            </span>
            <h2 className="headline mt-4 text-[2.125rem] leading-[1.08] text-mist sm:text-[2.75rem] lg:text-[3.375rem]">
              Quando a estratégia pede execução, entra a{" "}
              <span className="font-normal text-steel/90">Quality Master.</span>
            </h2>

            <div className="logo-animated-wrapper glass-panel-accent mt-10 rounded-2xl p-7 sm:p-9">
              <div className="logo-sheen-sweep" />
              <img
                src={qmLogo.url}
                alt="Quality Master"
                className="relative h-11 w-auto opacity-95 sm:h-14"
                width={2238}
                height={507}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Coluna Direita: Equipe, Especialidades e Filosofia */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <h3 className="headline text-[1.5rem] text-mist sm:text-[1.875rem]">
              Tomar a decisão certa é só o começo.
            </h3>
            <p className="mt-4 text-base leading-[1.8] text-steel sm:text-lg">
              Quando é hora de executar, contamos com uma equipe de profissionais especializados em:
            </p>

            {/* Chips de Especialidades */}
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {CAPABILITIES.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
                  className="glass-panel-dark rounded-full px-4.5 py-2.5 text-sm font-medium text-mist transition-all duration-300 hover:border-steel/40 hover:bg-deep/50 sm:text-[0.9375rem]"
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 space-y-5 border-l-2 border-steel/25 pl-4 sm:mt-10 sm:pl-6">
              <p className="text-base leading-[1.8] text-mist/90 sm:text-[1.0625rem]">
                Tudo isso com direcionamento de marketing, padrão de qualidade e uma equipe
                trabalhando na mesma direção.
              </p>
              <p className="headline text-[1.25rem] text-mist sm:text-[1.375rem]">
                Não é serviço solto!!!
              </p>
              <p className="text-base leading-[1.8] text-steel sm:text-[1.0625rem]">
                À medida que identificamos novos gargalos e oportunidades, adicionamos a capacidade
                necessária para executar com excelência.
              </p>
            </div>

            {/* A Parceria */}
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-panel-accent mt-8 rounded-2xl p-6 sm:mt-10 sm:p-7"
            >
              <p className="text-[1.0625rem] font-semibold text-mist sm:text-lg">
                Matheus ajuda a definir o que precisa ser feito.
              </p>
              <p className="mt-1 text-[1.0625rem] text-steel sm:text-lg">
                A Quality Master ajuda a fazer bem feito.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
