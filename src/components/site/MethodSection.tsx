const STEPS = [
  {
    step: "01",
    title: "Entendemos",
    text: "Negócio, contexto, mercado, objetivos, dados e gargalos.",
  },
  {
    step: "02",
    title: "Decidimos",
    text: "Com as informações em mãos, avaliamos juntos o que deve ser priorizado, quanto faz sentido investir e quais recursos precisamos mobilizar.",
  },
  {
    step: "03",
    title: "Aprendemos",
    text: "Medimos os resultados, entendemos o que mudou e usamos isso para tomar a próxima decisão.",
  },
];

export function MethodSection() {
  return (
    <section className="relative isolate overflow-hidden pt-12 pb-24 text-mist sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-36">
      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        {/* Linha guia superior */}
        <div
          aria-hidden="true"
          className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-steel/20 to-transparent sm:mb-20"
        />

        <div className="max-w-[28ch]">
          <h2 className="headline text-[2rem] leading-[1.12] text-mist sm:text-[2.625rem] lg:text-[3.125rem]">
            Como isso funciona na prática
          </h2>
        </div>

        {/* Grade de 3 Passos */}
        <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 lg:mt-20 lg:grid-cols-3">
          {STEPS.map((item) => (
            <div
              key={item.title}
              className="glass-panel-dark group rounded-[2rem] p-7 transition-all duration-300 hover:border-steel/40 hover:bg-deep/50 sm:p-8"
            >
              <span className="tag-mono text-[0.75rem] font-bold text-steel/60 transition-colors group-hover:text-mist">
                PASSO {item.step}
              </span>
              <h3 className="headline mt-4 text-[1.5rem] text-mist sm:text-[1.75rem]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-[1.8] text-steel sm:text-[1.0625rem]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Síntese do Fluxo */}
        <div className="mt-14 rounded-2xl border border-steel/20 bg-deep/30 p-6 text-center backdrop-blur-sm sm:mt-20 sm:p-8">
          <p className="headline text-[1.25rem] tracking-wide text-mist sm:text-[1.625rem]">
            Entender <span className="font-normal text-steel/60">→</span> Decidir{" "}
            <span className="font-normal text-steel/60">→</span> Aprender.
          </p>
        </div>
      </div>
    </section>
  );
}
