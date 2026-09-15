import { useState } from "react";
import { ChevronLeft, ChevronRight, Target, Sparkles, Globe } from "lucide-react";

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
];

export function DarkShotsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((curr) => (curr === 0 ? ATTEMPTS.length - 1 : curr - 1));
  const next = () => setActiveIndex((curr) => (curr === ATTEMPTS.length - 1 ? 0 : curr + 1));

  return (
    <section className="relative isolate overflow-hidden pt-12 pb-24 text-mist sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-36">
      {/* Luzes difusas de ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-deep/50 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-steel/5 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16 lg:items-start">
          {/* Coluna Esquerda: Headline e Nova Narrativa Editorial */}
          <div className="lg:col-span-6">
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
          </div>

          {/* Coluna Direita: Carrossel Interativo das 3 Ações */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between pb-3">
              <span className="tag-mono text-[0.6875rem] text-steel">
                AÇÕES ISOLADAS VS. VISÃO DO TODO
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Ação anterior"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-steel/20 bg-deep/40 text-mist transition-colors hover:border-mist/50 hover:bg-deep/80 focus-visible:outline-2 focus-visible:outline-steel"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próxima ação"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-steel/20 bg-deep/40 text-mist transition-colors hover:border-mist/50 hover:bg-deep/80 focus-visible:outline-2 focus-visible:outline-steel"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card Principal em Destaque do Carrossel */}
            <div className="glass-panel-accent relative mt-2 overflow-hidden rounded-[2rem] p-7 transition-all duration-300 sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-steel/15 blur-2xl"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="tag-mono text-[0.6875rem] font-bold text-mist">
                    {ATTEMPTS[activeIndex].tag}
                  </span>
                  <span className="text-xs font-semibold text-steel/60">
                    0{activeIndex + 1} / 0{ATTEMPTS.length}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="headline text-[1.5rem] leading-snug text-mist sm:text-[1.875rem]">
                    {ATTEMPTS[activeIndex].action}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-steel sm:text-lg">
                    {ATTEMPTS[activeIndex].echo}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-mist/75 sm:text-base">
                    {ATTEMPTS[activeIndex].detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Indicadores do Carrossel e Mini Cards Alternáveis */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {ATTEMPTS.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.tag}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`glass-panel-dark rounded-2xl p-3.5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-steel ${
                      isActive
                        ? "border-mist/60 bg-deep/70 shadow-[0_0_20px_rgba(227,228,232,0.15)]"
                        : "opacity-60 hover:opacity-100 hover:bg-deep/40"
                    }`}
                  >
                    <span className="tag-mono block text-[0.625rem] text-steel">0{idx + 1}</span>
                    <p className="mt-1 line-clamp-1 text-xs font-semibold text-mist sm:text-[0.8125rem]">
                      {item.action}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
