import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, Sliders, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    step: "01",
    phase: "DIAGNÓSTICO & MAPEAMENTO",
    title: "Entendemos",
    text: "Negócio, contexto, mercado, objetivos, dados e gargalos.",
    deliverables: [
      "Auditoria profunda de indicadores e canais atuais",
      "Identificação dos verdadeiros pontos de atrito",
      "Clareza de posicionamento frente à concorrência",
    ],
    icon: Search,
  },
  {
    step: "02",
    phase: "PLANEJAMENTO E PRIORIZAÇÃO",
    title: "Decidimos",
    text: "Com as informações em mãos, avaliamos juntos o que deve ser priorizado, quanto faz sentido investir e quais recursos precisamos mobilizar.",
    deliverables: [
      "Plano tático com ordem estrita de prioridades",
      "Alocação eficiente de orçamento e ferramentas",
      "Direcionamento unificado para equipe ou parceiros",
    ],
    icon: Sliders,
  },
  {
    step: "03",
    phase: "MEDICÃO & ITERAÇÃO",
    title: "Aprendemos",
    text: "Medimos os resultados, entendemos o que mudou e usamos isso para tomar a próxima decisão.",
    deliverables: [
      "Acompanhamento mensal com interpretação contextual",
      "Ajustes de rota antes de queimar verba",
      "Construção de histórico analítico para o negócio",
    ],
    icon: RefreshCw,
  },
];

export function MethodSection() {
  const [activeStep, setActiveStep] = useState(0);

  const prev = () => setActiveStep((curr) => (curr === 0 ? STEPS.length - 1 : curr - 1));
  const next = () => setActiveStep((curr) => (curr === STEPS.length - 1 ? 0 : curr + 1));

  const CurrentIcon = STEPS[activeStep].icon;

  return (
    <section className="relative isolate overflow-hidden pt-12 pb-24 text-mist sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-36">
      {/* Luzes difusas de ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/3 h-96 w-96 rounded-full bg-steel/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-deep/50 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        {/* Linha guia superior */}
        <div
          aria-hidden="true"
          className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-steel/20 to-transparent sm:mb-20"
        />

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-[32ch]">
            <span className="tag-mono text-[0.6875rem] text-steel">METODOLOGIA APLICADA</span>
            <h2 className="headline mt-3 text-[2rem] leading-[1.12] text-mist sm:text-[2.625rem] lg:text-[3.125rem]">
              Como isso funciona na prática
            </h2>
          </div>

          {/* Controles do Carrossel de Passos */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Passo anterior"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-steel/25 bg-deep/40 text-mist transition-all hover:border-mist/50 hover:bg-deep/80 focus-visible:outline-2 focus-visible:outline-steel"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próximo passo"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-steel/25 bg-deep/40 text-mist transition-all hover:border-mist/50 hover:bg-deep/80 focus-visible:outline-2 focus-visible:outline-steel"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carrossel: Card Principal do Passo Ativo */}
        <div className="mt-10 sm:mt-14">
          <div className="glass-panel-accent relative overflow-hidden rounded-[2.5rem] p-7 shadow-2xl sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 h-60 w-60 rounded-full bg-steel/20 blur-3xl"
            />

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="tag-mono flex h-8 items-center rounded-lg border border-mist/30 bg-mist/10 px-3 text-[0.6875rem] font-bold text-mist">
                    PASSO {STEPS[activeStep].step}
                  </span>
                  <span className="tag-mono text-[0.6875rem] text-steel">
                    {STEPS[activeStep].phase}
                  </span>
                </div>

                <h3 className="headline mt-4 text-[1.875rem] text-mist sm:text-[2.25rem] lg:text-[2.5rem]">
                  {STEPS[activeStep].title}
                </h3>

                <p className="mt-4 text-base leading-[1.8] text-mist/90 sm:text-lg sm:leading-[1.8]">
                  {STEPS[activeStep].text}
                </p>

                <div className="mt-6 space-y-2.5 pt-4 border-t border-steel/20">
                  {STEPS[activeStep].deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-steel sm:text-[0.9375rem]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-mist/70" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center lg:col-span-5">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-steel/20 bg-deep/60 shadow-[0_0_50px_rgba(0,15,37,0.8)] backdrop-blur-md sm:h-56 sm:w-56">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border border-dashed border-steel/30 animate-[ring-pulse_6s_ease-in-out_infinite]"
                  />
                  <CurrentIcon className="h-16 w-16 text-mist transition-transform duration-300 sm:h-20 sm:w-20" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Abas / Indicadores Selecionáveis de Passo */}
          <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
            {STEPS.map((item, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`glass-panel-dark rounded-2xl p-4 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-steel sm:p-5 ${
                    isActive
                      ? "border-mist/60 bg-deep/75 shadow-[0_0_25px_rgba(227,228,232,0.15)]"
                      : "opacity-60 hover:opacity-100 hover:bg-deep/40"
                  }`}
                >
                  <span className="tag-mono block text-[0.625rem] font-bold text-steel sm:text-[0.6875rem]">
                    PASSO {item.step}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-mist sm:text-base">
                    {item.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Representação Visual Gráfica: O Ciclo de Decisão Estratégica */}
        <div className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-steel/20 bg-gradient-to-b from-deep/40 via-ink/60 to-deep/40 p-8 text-center backdrop-blur-md sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mist/30 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 left-1/2 h-44 w-96 -translate-x-1/2 rounded-full bg-steel/15 blur-3xl"
            />

            <span className="tag-mono text-[0.6875rem] text-steel">
              REPRESENTAÇÃO DO MODELO OPERACIONAL
            </span>

            {/* Diagrama Visual em 3 Nós Conectados */}
            <div className="relative mt-10 grid gap-6 sm:grid-cols-3 sm:gap-4 lg:gap-8">
              {/* Nó 1: Entender */}
              <div className="glass-panel-dark group flex flex-col items-center rounded-2xl p-6 transition-all duration-300 hover:border-steel/50 hover:bg-deep/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist/10 text-mist">
                  <Search className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <p className="tag-mono mt-4 text-[0.6875rem] text-steel">01 // FASE INICIAL</p>
                <h4 className="headline mt-1 text-[1.25rem] text-mist">Entender</h4>
                <p className="mt-2 text-xs leading-relaxed text-steel/80">
                  Gargalos, dados e contexto real do negócio
                </p>
              </div>

              {/* Nó 2: Decidir */}
              <div className="glass-panel-accent group flex flex-col items-center rounded-2xl p-6 transition-all duration-300 hover:border-mist/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist/20 text-mist">
                  <Sliders className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <p className="tag-mono mt-4 text-[0.6875rem] text-mist/80">02 // ALOCAÇÃO E PRIORIDADE</p>
                <h4 className="headline mt-1 text-[1.25rem] text-mist">Decidir</h4>
                <p className="mt-2 text-xs leading-relaxed text-mist/80">
                  O que vem primeiro, quanto investir e como agir
                </p>
              </div>

              {/* Nó 3: Aprender */}
              <div className="glass-panel-dark group flex flex-col items-center rounded-2xl p-6 transition-all duration-300 hover:border-steel/50 hover:bg-deep/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist/10 text-mist">
                  <RefreshCw className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <p className="tag-mono mt-4 text-[0.6875rem] text-steel">03 // EVOLUÇÃO CONTÍNUA</p>
                <h4 className="headline mt-1 text-[1.25rem] text-mist">Aprender</h4>
                <p className="mt-2 text-xs leading-relaxed text-steel/80">
                  Métricas convertidas em inteligência para o próximo passo
                </p>
              </div>
            </div>

            {/* Síntese Linear do Fluxo */}
            <div className="mt-10 pt-8 border-t border-steel/15">
              <p className="headline text-[1.25rem] tracking-wide text-mist sm:text-[1.625rem]">
                Entender <span className="font-normal text-steel/60">→</span> Decidir{" "}
                <span className="font-normal text-steel/60">→</span> Aprender.
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-steel/70">
                Ciclo iterativo e sustentável de crescimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
