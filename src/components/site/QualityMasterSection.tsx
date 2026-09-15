import qmLogo from "@/assets/qm-logo.png.asset.json";

const CAPABILITIES = ["Audiovisual", "Design", "Planilhas", "Sites", "Social media", "Automações"];

export function QualityMasterSection() {
  return (
    <section className="veil-atmosphere relative isolate overflow-hidden pt-20 pb-24 text-mist sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      {/* Luz ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-10 h-96 w-96 rounded-full bg-steel/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-10 h-80 w-80 rounded-full bg-deep/50 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16 lg:items-start">
          {/* Coluna Esquerda: Headline e Logo QM */}
          <div className="lg:col-span-6">
            <span className="tag-mono text-[0.6875rem] text-steel">EXECUÇÃO COORDENADA</span>
            <h2 className="headline mt-4 text-[2.125rem] leading-[1.08] text-mist sm:text-[2.75rem] lg:text-[3.25rem]">
              Quando a estratégia pede execução, entra a{" "}
              <span className="font-normal text-steel/90">Quality Master.</span>
            </h2>

            <div className="mt-10 rounded-2xl border border-steel/15 bg-deep/20 p-7 backdrop-blur-sm sm:p-9">
              <img
                src={qmLogo.url}
                alt="Quality Master"
                className="h-11 w-auto opacity-90 sm:h-14"
                width={2238}
                height={507}
                loading="lazy"
              />
            </div>
          </div>

          {/* Coluna Direita: Equipe, Especialidades e Filosofia */}
          <div className="lg:col-span-6">
            <h3 className="headline text-[1.5rem] text-mist sm:text-[1.875rem]">
              Tomar a decisão certa é só o começo.
            </h3>
            <p className="mt-4 text-base leading-[1.8] text-steel sm:text-lg">
              Quando é hora de executar, contamos com uma equipe de profissionais especializados em:
            </p>

            {/* Chips de Especialidades */}
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {CAPABILITIES.map((item) => (
                <li
                  key={item}
                  className="glass-panel-dark rounded-full px-4.5 py-2.5 text-sm font-medium text-mist transition-all duration-300 hover:border-steel/40 hover:bg-deep/50 sm:text-[0.9375rem]"
                >
                  {item}
                </li>
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
            <div className="glass-panel-accent mt-8 rounded-2xl p-6 sm:mt-10 sm:p-7">
              <p className="text-[1.0625rem] font-semibold text-mist sm:text-lg">
                Matheus ajuda a definir o que precisa ser feito.
              </p>
              <p className="mt-1 text-[1.0625rem] text-steel sm:text-lg">
                A Quality Master ajuda a fazer bem feito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}