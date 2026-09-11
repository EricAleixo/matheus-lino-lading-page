import { BrandBar } from "./BrandBar";

const WHATSAPP_URL = "https://wa.me/558391247521";

/**
 * Carga acumulada: linguagem ambiental. Não repete a lista de
 * responsabilidades, apenas sugere acúmulo antes da decisão.
 */
function LoadMarks() {
  const marks = [34, 52, 41, 68, 47, 76, 58, 88, 62, 100];
  return (
    <div aria-hidden="true" className="flex items-end gap-2">
      {marks.map((h, i) => (
        <span
          key={i}
          className="w-px bg-steel"
          style={{ height: `${h * 0.32}px`, opacity: 0.25 + i * 0.055 }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="dark relative isolate overflow-hidden bg-ink text-mist">
      {/* Profundidade: transição ink -> deep, sem gradiente chamativo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--ink)_0%,var(--deep)_100%)] opacity-90"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <BrandBar />

        <div className="grid gap-12 pt-12 pb-16 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-24">

          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="tag-mono text-steel">01</span>
              <span aria-hidden="true" className="h-px w-8 bg-steel/40" />
              <span className="tag-brand text-steel">Signal</span>
            </div>

            <h1 className="headline mt-7 text-[2rem] text-mist sm:text-[2.75rem] lg:text-[3.5rem]">
              Você já tem problemas demais na empresa para ainda precisar decidir o
              marketing{" "}
              <span className="border-b border-steel/50 pb-1">no escuro.</span>
            </h1>

            <p className="mt-8 max-w-[36ch] text-[1.0625rem] leading-[1.65] text-steel sm:text-[1.125rem] lg:max-w-[52ch]">
              Fornecedores, equipe, financeiro, clientes, operação, impostos... e ainda
              sobra para você decidir quanto investir, onde investir e descobrir sozinho
              se está fazendo a escolha certa.
            </p>

            <div className="mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] w-full items-center justify-between gap-4 bg-mist px-6 text-left text-[0.9375rem] font-medium text-ink transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel sm:w-auto sm:text-base"
              >
                Quero tomar decisões melhores no marketing
                <span aria-hidden="true" className="text-lg leading-none">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end lg:pb-1">
            <div className="flex items-center justify-between gap-6 border-t border-steel/20 pt-6 lg:w-full lg:flex-col lg:items-start lg:gap-6">
              <div className="min-w-0">
                <p className="tag-mono text-steel/70">Carga acumulada</p>
                <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-steel/80">
                  Decisões chegando ao mesmo tempo, todas esperando alguém decidir.
                </p>
              </div>
              <LoadMarks />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
