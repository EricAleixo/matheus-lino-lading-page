import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Target, Sparkles, Globe } from "lucide-react";

import reuniaoGeral2 from "@/assets/reuniao-geral-2.webp";
import inova from "@/assets/inova.webp";
import inova2 from "@/assets/inova-2.webp";
import inova3 from "@/assets/inova-3.webp";

const IMAGES = [
  { src: reuniaoGeral2, alt: "Reunião de planejamento discutindo as ações de marketing da empresa" },
  { src: inova, alt: "Equipe reunida discutindo estratégias de marketing" },
  { src: inova2, alt: "Equipe reunida discutindo estratégias de marketing" },
  { src: inova3, alt: "Equipe reunida discutindo estratégias de marketing" },
] as const;

const ATTEMPTS = [
  {
    icon: Target,
    tag: "TENTATIVA 01",
    action: "Você pode investir em mídia.",
    echo: "Pode funcionar.",
    detail: "Aumenta o tráfego e visualizações imediatas, mas pode não converter se a oferta e o comercial não estiverem alinhados.",
  },
  {
    icon: Sparkles,
    tag: "TENTATIVA 02",
    action: "Pode contratar produção.",
    echo: "Também pode funcionar.",
    detail: "Melhora a estética visual e o volume de posts, mas sem posicionamento claro vira apenas custo sem retorno.",
  },
  {
    icon: Globe,
    tag: "TENTATIVA 03",
    action: "Pode fazer um site novo.",
    echo: "E pode funcionar também.",
    detail: "Atualiza a vitrine digital da empresa, mas não resolve se o gargalo estiver no produto ou no modelo de vendas.",
  },
] as const;

export function DarkShotsSection() {
  // Passo global: card e imagem avançam juntos, cada um ciclando no seu próprio tamanho
  const [step, setStep] = useState(0);
  const mod = (n: number, m: number) => ((n % m) + m) % m;
  const activeIndex = mod(step, ATTEMPTS.length);
  const imageIndex = mod(step, IMAGES.length);

  const prev = () => setStep((curr) => curr - 1);
  const next = () => setStep((curr) => curr + 1);
  const goTo = (idx: number) => setStep((curr) => curr + (idx - mod(curr, ATTEMPTS.length)));

  // Fallback para ATTEMPTS[0] garante que o TypeScript nunca veja `undefined`
  const activeAttempt = ATTEMPTS[activeIndex] ?? ATTEMPTS[0];
  const activeImage = IMAGES[imageIndex] ?? IMAGES[0];

  return (
    <section className="relative isolate overflow-hidden pt-12 pb-24 text-mist sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-36">
      {/* Luzes difusas de ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-deep/50 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-48 left-10 h-80 w-80 rounded-full bg-steel/5 blur-[100px]"
      />
      {/* Assenta o fundo em ink puro para emendar com o fade da ReframeSection */}
      <div
        aria-hidden="true"
        className="ink-fade-up pointer-events-none absolute inset-x-0 bottom-0 h-48 sm:h-64"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16 lg:items-start">
          {/* Coluna Esquerda: Headline e Nova Narrativa Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <h2 className="headline text-[2rem] leading-[1.1] text-mist sm:text-[2.625rem] lg:text-[3.125rem]">
              E quando ninguém está olhando o todo, é fácil começar a dar{" "}
              <span className="font-normal text-steel/90">tiros no escuro.</span>
            </h2>

            {/* Nova Narrativa Estratégica Completa */}
            <div className="mt-8 space-y-5 border-l-2 border-steel/25 pl-4 sm:mt-10 sm:pl-6">
              <p className="text-base font-semibold leading-[1.8] text-mist sm:text-[1.0625rem]">
                Mas marketing não deveria ser uma sequência de ações isoladas.
              </p>
              <p className="text-base leading-[1.8] text-steel sm:text-[1.0625rem]">
                Ele precisa acompanhar o estágio em que a empresa está e aquilo que ela precisa
                desenvolver para chegar ao próximo.
              </p>
              <p className="text-base leading-[1.8] text-steel sm:text-[1.0625rem]">
                Às vezes, o próximo passo está na aquisição.
              </p>
              <p className="text-base leading-[1.8] text-steel sm:text-[1.0625rem]">
                Em outros momentos, está no comercial, na marca, no atendimento, nos processos ou na
                tecnologia.
              </p>
              <p className="text-base font-medium leading-[1.8] text-mist/90 sm:text-[1.0625rem]">
                Cada decisão deveria aumentar não apenas o resultado de hoje, mas também a capacidade
                da empresa de entender, decidir e executar melhor amanhã.
              </p>
            </div>
          </motion.div>

          {/* Coluna Direita: Carrossel Interativo das 3 Ações */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="flex items-center justify-between pb-3">
              <span className="tag-mono text-[0.6875rem] text-steel">
                AÇÕES ISOLADAS VS. VISÃO DO TODO
              </span>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  type="button"
                  onClick={prev}
                  aria-label="Ação anterior"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-steel/20 bg-deep/40 text-mist transition-colors hover:border-mist/50 hover:bg-deep/80 focus-visible:outline-2 focus-visible:outline-steel cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  type="button"
                  onClick={next}
                  aria-label="Próxima ação"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-steel/20 bg-deep/40 text-mist transition-colors hover:border-mist/50 hover:bg-deep/80 focus-visible:outline-2 focus-visible:outline-steel cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>

            {/* Carrossel de fotos sincronizado com o card */}
            <div className="relative mt-2 aspect-[16/10] overflow-hidden rounded-[2rem] border border-steel/15">
              <AnimatePresence initial={false}>
                <motion.img
                  key={imageIndex}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
              />
            </div>

            {/* Card Principal em Destaque do Carrossel com AnimatePresence */}
            <div className="glass-panel-accent relative mt-4 min-h-[260px] overflow-hidden rounded-[2rem] p-7 sm:min-h-[280px] sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-steel/15 blur-2xl"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="tag-mono text-[0.6875rem] font-bold text-mist">
                      {activeAttempt.tag}
                    </span>
                    <span className="text-xs font-semibold text-steel/60">
                      0{activeIndex + 1} / 0{ATTEMPTS.length}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h3 className="headline text-[1.5rem] leading-snug text-mist sm:text-[1.875rem]">
                      {activeAttempt.action}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-steel sm:text-lg">
                      {activeAttempt.echo}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-mist/75 sm:text-base">
                      {activeAttempt.detail}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicadores do Carrossel e Mini Cards Alternáveis */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {ATTEMPTS.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    key={item.tag}
                    type="button"
                    onClick={() => goTo(idx)}
                    className={`glass-panel-dark cursor-pointer rounded-2xl p-3.5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-steel ${isActive
                      ? "border-mist/60 bg-deep/70 shadow-[0_0_20px_rgba(227,228,232,0.15)]"
                      : "opacity-60 hover:opacity-100 hover:bg-deep/40"
                      }`}
                  >
                    <span className="tag-mono block text-[0.625rem] text-steel">0{idx + 1}</span>
                    <p className="mt-1 line-clamp-1 text-xs font-semibold text-mist sm:text-[0.8125rem]">
                      {item.action}
                    </p>
                  </motion.button>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}