const PAIRS = [
  { lead: "Mais anúncios", rest: "não resolvem uma oferta que ninguém entende." },
  { lead: "Mais leads", rest: "não resolvem um comercial que não acompanha." },
  { lead: "Mais conteúdo", rest: "não resolve uma marca que não sabe o que quer dizer." },
  { lead: "Mais alcance", rest: "não resolve uma experiência ruim depois do primeiro contato." },
];

export function ReframeSection() {
  return (
    <section className="paper-atmosphere relative isolate overflow-hidden pt-20 pb-24 text-ink sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      {/* Luz ambiente difusa no topo para suavizar a transição */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-paper blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-[28ch]">
          <h2 className="headline text-[2.125rem] leading-[1.08] text-ink sm:text-[2.75rem] lg:text-[3.375rem]">
            Antes de escolher a solução, precisamos encontrar o problema certo.
          </h2>
        </div>

        {/* Grade de 4 contraposições em cards elegantes de superfície clara */}
        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20">
          {PAIRS.map((item) => (
            <div
              key={item.lead}
              className="glass-surface-light soft-surface rounded-2xl p-6 transition-all duration-300 hover:shadow-md sm:p-7"
            >
              <p className="text-[1.0625rem] leading-relaxed text-ink/80 sm:text-[1.1875rem]">
                <span className="font-bold text-ink">{item.lead}</span> {item.rest}
              </p>
            </div>
          ))}
        </div>

        {/* Fechamento do Reframe: Visão Estratégica */}
        <div className="mt-14 grid gap-8 border-t border-ink/10 pt-10 sm:mt-20 sm:gap-10 sm:pt-14 lg:grid-cols-12 lg:items-end">
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
        </div>
      </div>
    </section>
  );
}
