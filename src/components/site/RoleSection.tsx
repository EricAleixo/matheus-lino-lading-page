export function RoleSection() {
  return (
    <section className="veil-atmosphere relative isolate overflow-hidden pt-20 pb-24 text-mist sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      {/* Luz ambiente azul profundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-steel/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-deep/60 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16 lg:items-start">
          {/* Coluna Esquerda: Headline */}
          <div className="lg:col-span-6">
            <h2 className="headline text-[2.125rem] leading-[1.08] text-mist sm:text-[2.875rem] lg:text-[3.5rem]">
              Você continua decidindo. Só não precisa decidir{" "}
              <span className="font-normal text-steel/90">no escuro.</span>
            </h2>

            <div className="mt-8 space-y-6 border-l-2 border-steel/25 pl-4 sm:mt-10 sm:pl-6">
              <p className="text-base leading-[1.8] text-mist sm:text-lg sm:leading-[1.85]">
                Meu papel não é tomar o marketing da sua mão.
              </p>
              <p className="text-base leading-[1.8] text-steel sm:text-lg sm:leading-[1.85]">
                É ajudar você a enxergar o cenário, interpretar os dados, entender as alternativas e
                tomar decisões melhores.
              </p>
            </div>
          </div>

          {/* Coluna Direita: Cartão Estratégico Translúcido */}
          <div className="lg:col-span-6 lg:pt-2">
            <div className="glass-panel-dark rounded-[2rem] p-7 sm:p-9">
              <p className="text-base leading-[1.8] text-mist/90 sm:text-[1.0625rem] sm:leading-[1.85]">
                Atuo como um braço estratégico ao seu lado, analisando negócio, mercado, dados e
                resultados para identificar gargalos e ajudar a definir onde vale concentrar
                investimento, tempo e capacidade de execução.
              </p>
              <div className="my-6 h-px w-full bg-steel/15" />
              <p className="text-base leading-[1.8] text-steel sm:text-[1.0625rem] sm:leading-[1.85]">
                À medida que identificamos novos gargalos e oportunidades, adicionamos capacidade de
                execução onde ela realmente pode gerar impacto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
