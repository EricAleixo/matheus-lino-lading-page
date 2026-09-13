const ATTEMPTS = [
  { action: "Você pode investir em mídia.", echo: "Pode funcionar." },
  { action: "Pode contratar produção.", echo: "Também pode funcionar." },
  { action: "Pode fazer um site novo.", echo: "E pode funcionar também." },
];

export function DarkShotsSection() {
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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-16">
          {/* Coluna Esquerda: Headline com destaque */}
          <div className="lg:col-span-5">
            <h2 className="headline text-[2rem] leading-[1.1] text-mist sm:text-[2.625rem] lg:text-[3.125rem]">
              E quando ninguém está olhando o todo, é fácil começar a dar{" "}
              <span className="font-normal text-steel/90">tiros no escuro.</span>
            </h2>
          </div>

          {/* Coluna Direita: As 3 Tentativas e a Reflexão Central */}
          <div className="lg:col-span-7">
            {/* Bloco das 3 ações e seus ecos */}
            <div className="space-y-3.5 sm:space-y-4">
              {ATTEMPTS.map((item) => (
                <div
                  key={item.action}
                  className="glass-panel-dark group rounded-2xl p-5 transition-all duration-300 hover:border-steel/35 hover:bg-deep/50 sm:p-6"
                >
                  <p className="text-[1.0625rem] font-semibold text-mist sm:text-[1.1875rem]">
                    {item.action}
                  </p>
                  <p className="mt-1 text-base text-steel/80 transition-colors group-hover:text-steel sm:text-[1.0625rem]">
                    {item.echo}
                  </p>
                </div>
              ))}
            </div>

            {/* Pergunta Pivô */}
            <div className="mt-8 rounded-2xl border border-steel/25 bg-deep/35 p-6 backdrop-blur-md sm:mt-10 sm:p-8">
              <p className="headline text-[1.25rem] text-mist sm:text-[1.5rem] lg:text-[1.625rem]">
                Só existe um pequeno problema: qual deveria vir primeiro?
              </p>
            </div>

            {/* Parágrafos de Consequência */}
            <div className="mt-10 space-y-5 border-l border-steel/20 pl-4 sm:mt-12 sm:pl-6">
              <p className="text-base leading-[1.8] text-mist/90 sm:text-[1.0625rem]">
                Marketing, quando quer, é uma ótima desculpa para torrar dinheiro.
              </p>
              <p className="text-base leading-[1.8] text-steel sm:text-[1.0625rem]">
                Não porque marketing não funciona.
              </p>
              <p className="text-base leading-[1.8] text-steel sm:text-[1.0625rem]">
                Mas porque é muito fácil gastar dinheiro em algo que gera resultado e deixar de lado
                aquilo que poderia trazer mais retorno naquele momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
