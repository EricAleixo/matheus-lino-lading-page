import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { BrandBar } from "./BrandBar";

const AMBIENT_TAGS = [
  { label: "FLUXO DE CAIXA", className: "top-28 right-8 sm:top-24 sm:right-16 lg:right-32", delay: 0 },
  { label: "FORNECEDORES", className: "top-56 -left-3 sm:top-52 sm:left-6 lg:left-14", delay: 0.8 },
  { label: "EQUIPE", className: "bottom-44 right-6 sm:bottom-40 sm:right-24 lg:right-44", delay: 1.6 },
  { label: "IMPOSTOS", className: "top-80 right-4 sm:top-72 sm:right-10 lg:right-20", delay: 2.4 },
  { label: "CLIENTES", className: "bottom-20 left-4 sm:bottom-24 sm:left-16 lg:left-28", delay: 1.2 },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden text-mist">
      {/* Luzes difusas e orbes de profundidade atmosférica */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-steel/10 blur-[130px] sm:h-[32rem] sm:w-[32rem]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-deep/50 blur-[100px] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-steel/5 blur-[90px]"
      />

      {/* Grid sutil e marcadores de precisão inspirados em sistemas avançados */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(141,157,179,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(141,157,179,0.03)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_40%,#000_70%,transparent_100%)] opacity-70"
      />

      {/* Tags ambientais de sobrecarga operacional com flutuação contínua */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
        {AMBIENT_TAGS.map((item) => (
          <motion.span
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: [0.35, 0.65, 0.35],
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            }}
            className={`ambient-tag absolute select-none rounded-full px-3.5 py-1.5 ${item.className}`}
          >
            {item.label}
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-[1180px] flex-col px-5 pt-2 pb-20 sm:px-8 sm:pb-24 lg:min-h-[780px] lg:px-12 lg:pb-32">
        <BrandBar />

        <div className="my-auto grid gap-10 pt-10 sm:pt-14 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pt-16">
          <div className="lg:col-span-10 xl:col-span-9">
            {/* Headline com presença visual marcante e animação escalonada */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="headline text-[2.125rem] leading-[1.08] text-mist sm:text-[2.875rem] md:text-[3.5rem] lg:text-[4.125rem]"
            >
              Antes de investir mais em marketing, descubra o que realmente{" "}
              <span className="font-normal text-steel/90">precisa ser prioridade.</span>
            </motion.h1>

            {/* Texto de apoio com guia editorial e animação suave */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 space-y-3 border-l-2 border-steel/25 pl-4 sm:mt-8 sm:pl-6"
            >
              <p className="max-w-[46ch] text-base leading-[1.75] text-mist/90 sm:text-lg sm:leading-[1.8] lg:max-w-[54ch]">
                Anúncios, conteúdo, comercial, site, automação, influenciadores... quase tudo pode funcionar.
              </p>
              <p className="max-w-[46ch] text-base leading-[1.75] text-steel sm:text-lg sm:leading-[1.8] lg:max-w-[54ch]">
                O problema é descobrir o que faz mais sentido para a sua empresa agora.
              </p>
            </motion.div>

            {/* CTA Principal com animação de entrada e hover rico */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 sm:mt-11"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#diagnostico"
                className="group luminous-button inline-flex min-h-[58px] w-full items-center justify-between gap-5 rounded-2xl border border-mist/80 bg-mist px-6 py-4 text-left text-[0.9375rem] font-semibold text-ink transition-all duration-300 hover:bg-paper hover:shadow-[0_0_35px_rgba(227,228,232,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel sm:w-auto sm:min-w-[410px] sm:px-8 sm:text-base"
              >
                <span className="leading-snug">Quero tomar decisões melhores no marketing</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ink/10 text-ink transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:bg-ink group-hover:text-mist">
                  <ArrowDownRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
