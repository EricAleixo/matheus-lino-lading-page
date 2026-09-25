import matheusFundo from "@/assets/matheus-fundo.webp";

export function AboutSection() {
  return (
    <section className="paper-atmosphere relative isolate overflow-hidden pt-20 pb-24 text-ink sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      {/* Foto editorial de Matheus ocupando ~45% da composição (lado direito) */}
      <img
        src={matheusFundo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[45%] object-cover object-[85%_center] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[33%] hidden w-[12%] bg-gradient-to-r from-paper to-transparent lg:block"
      />

      {/* Luz ambiente difusa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(ellipse_at_bottom,var(--paper),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        {/* Identificador de Seção */}
        <span className="tag-mono text-[0.6875rem] text-ink/50">QUEM É MATHEUS LINO?</span>

        {/* Foto no mobile/tablet (no desktop ela vira o fundo da seção) */}
        <div className="mt-8 overflow-hidden rounded-[2rem] lg:hidden">
          <img
            src={matheusFundo}
            alt="Matheus Lino, estrategista de marketing e fundador da Quality Master"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover object-[80%_center] sm:aspect-[16/9]"
          />
        </div>

        <div className="mt-8 grid gap-10 lg:max-w-[52%]">
          {/* Headline */}
          <div>
            <h2 className="headline text-[2.125rem] leading-[1.1] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
              Sou estrategista de marketing e fundador da{" "}
              <span className="font-normal text-ink/50">Quality Master.</span>
            </h2>
          </div>

          {/* Narrativa Pessoal e A Pergunta */}
          <div>
            <div className="space-y-6 border-l-2 border-steel/30 pl-4 sm:pl-6">
              <p className="text-base leading-[1.85] text-ink/85 sm:text-lg">
                Entrei no marketing porque sempre gostei de entender gente: comportamento, política,
                poder, negócios e as decisões que movem tudo isso.
              </p>
              <p className="text-base leading-[1.85] text-ink/75 sm:text-lg">
                Encontrei no marketing uma forma de transformar essa curiosidade em algo mensurável,
                usando dados, tecnologia e comportamento real.
              </p>
              <p className="text-base leading-[1.85] text-ink/75 sm:text-lg">
                No fim, quase tudo que estudo parte da mesma pergunta:
              </p>
            </div>

            {/* Destaque Tipográfico da Pergunta */}
            <div className="my-10 rounded-2xl border border-ink/10 bg-paper/80 p-6 sm:my-12 sm:p-8">
              <p className="headline text-[1.5rem] leading-snug text-ink sm:text-[1.875rem]">
                Por que as pessoas fazem o que fazem?
              </p>
            </div>

            <p className="text-base font-bold leading-[1.85] text-ink sm:text-lg">
              Hoje, transformo essa obsessão em decisões mais inteligentes para empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
