import { motion } from "framer-motion";
import { ArrowDownRight, FileText, Megaphone, Radio, Users } from "lucide-react";

const PAIRS = [
  {
    icon: Megaphone,
    lead: "Mais anúncios",
    rest: "não resolvem uma oferta que ninguém entende.",
  },
  {
    icon: Users,
    lead: "Mais leads",
    rest: "não resolvem um comercial que não acompanha.",
  },
  {
    icon: FileText,
    lead: "Mais conteúdo",
    rest: "não resolve uma marca que não sabe o que quer dizer.",
  },
  {
    icon: Radio,
    lead: "Mais alcance",
    rest: "não resolve uma experiência ruim depois do primeiro contato.",
  },
];

export function ReframeSection() {
  return (
    <section className="paper-atmosphere relative isolate overflow-hidden pt-20 pb-24 text-ink sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      {/* Transição do ambiente escuro anterior para o claro desta seção */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-ink via-ink/40 to-transparent sm:h-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-paper blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[28ch]"
        >
          <h2 className="headline text-[2.125rem] leading-[1.08] text-ink sm:text-[2.75rem] lg:text-[3.375rem] mt-10 md:mt-50">
            Antes da solução, encontre o problema certo.
          </h2>
        </motion.div>

        {/* Grade de 4 contraposições em cards elegantes com hover lift e stagger */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20">
          {PAIRS.map((item, idx) => (
            <motion.div
              key={item.lead}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-surface-light soft-surface rounded-2xl p-6 transition-all duration-300 hover:shadow-lg sm:p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink/5 text-ink/70 ring-1 ring-ink/10">
                <item.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink/80 sm:text-[1.1875rem]">
                <span className="font-bold text-ink">{item.lead}</span> {item.rest}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fechamento do Reframe: Visão Estratégica */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-14 grid gap-8 border-t border-ink/10 pt-10 sm:mt-20 sm:gap-10 sm:pt-14 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-6">
            <p className="max-w-[44ch] text-base leading-[1.8] text-ink/75 sm:text-lg">
              E vender mais este mês não significa necessariamente estar construindo uma empresa
              mais forte para o próximo ano.
            </p>
          </div>
          <div className="lg:col-span-6">
            <p className="headline text-[1.375rem] leading-snug text-ink sm:text-[1.75rem] lg:text-[2rem]">
              A melhor decisão não é necessariamente investir no que funciona. É investir no que{" "}
              <span className="font-normal text-ink/55">mais precisa funcionar agora.</span>
            </p>
          </div>
        </motion.div>

        {/* Botão de CTA adicionado abaixo do último texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-10 sm:mt-14"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#diagnostico"
            className="group luminous-button inline-flex min-h-[58px] w-full items-center justify-between gap-5 rounded-2xl border border-ink/15 bg-ink px-6 py-4 text-left text-[0.9375rem] font-semibold text-mist transition-all duration-300 hover:bg-deep hover:shadow-[0_10px_35px_rgba(0,15,37,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep sm:w-auto sm:min-w-[410px] sm:px-8 sm:text-base"
          >
            <span className="leading-snug">Quero tomar decisões melhores no marketing</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-mist/10 text-mist transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:bg-mist group-hover:text-ink">
              <ArrowDownRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
