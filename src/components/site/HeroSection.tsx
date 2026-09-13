import { ArrowDownRight } from "lucide-react";
import { BrandBar } from "./BrandBar";

const WHATSAPP_URL = "https://wa.me/558391247521";

// Vetores operacionais ambientais extraídos dos elementos da copy para representar ruído de fundo
const AMBIENT_TAGS = [
  { label: "FLUXO DE CAIXA", className: "top-28 right-8 sm:top-24 sm:right-16 lg:right-32" },
  { label: "FORNECEDORES", className: "top-56 -left-3 sm:top-52 sm:left-6 lg:left-14" },
  { label: "EQUIPE", className: "bottom-44 right-6 sm:bottom-40 sm:right-24 lg:right-44" },
  { label: "IMPOSTOS", className: "top-80 right-4 sm:top-72 sm:right-10 lg:right-20" },
  { label: "CLIENTES", className: "bottom-20 left-4 sm:bottom-24 sm:left-16 lg:left-28" },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden text-mist">
      {/* Luzes difusas e orbes de profundidade atmosférica */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-steel/10 blur-[130px] sm:h-[32rem] sm:w-[32rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-deep/50 blur-[100px] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-steel/5 blur-[90px]"
      />

      {/* Grid sutil e marcadores de precisão inspirados em sistemas avançados */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(141,157,179,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(141,157,179,0.03)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_40%,#000_70%,transparent_100%)] opacity-70"
      />

      {/* Tags ambientais de sobrecarga operacional */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
        {AMBIENT_TAGS.map((item) => (
          <span
            key={item.label}
            className={`ambient-tag absolute select-none rounded-full px-3.5 py-1.5 ${item.className} opacity-40 transition-opacity duration-500 hover:opacity-75`}
          >
            {item.label}
          </span>
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-[1180px] flex-col px-5 pt-2 pb-20 sm:px-8 sm:pb-24 lg:min-h-[780px] lg:px-12 lg:pb-32">
        <BrandBar />

        <div className="my-auto grid gap-10 pt-10 sm:pt-14 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pt-16">
          <div className="lg:col-span-10 xl:col-span-9">
            {/* Headline com presença visual marcante e ritmo expressivo */}
            <h1 className="headline text-[2.125rem] leading-[1.08] text-mist sm:text-[2.875rem] md:text-[3.5rem] lg:text-[4.125rem]">
              Você já tem problemas demais na empresa para ainda precisar decidir o marketing{" "}
              <span className="font-normal text-steel/90">no escuro.</span>
            </h1>

            {/* Texto de apoio com guia editorial e contraste estável */}
            <div className="mt-7 border-l-2 border-steel/25 pl-4 sm:mt-8 sm:pl-6">
              <p className="max-w-[44ch] text-base leading-[1.75] text-mist/85 sm:text-lg sm:leading-[1.8] lg:max-w-[52ch]">
                Fornecedores, equipe, financeiro, clientes, operação, impostos... e ainda sobra para
                você decidir quanto investir, onde investir e descobrir sozinho se está fazendo a
                escolha certa.
              </p>
            </div>

            {/* CTA Principal: cantos generosamente arredondados, proporção confortável, alto contraste e acabamento luminoso */}
            <div className="mt-9 sm:mt-11">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group luminous-button inline-flex min-h-[58px] w-full items-center justify-between gap-5 rounded-full border border-mist/80 bg-mist px-6 py-4 text-left text-[0.9375rem] font-semibold text-ink transition-all duration-300 active:scale-[0.98] hover:bg-paper hover:shadow-[0_0_35px_rgba(227,228,232,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel sm:w-auto sm:min-w-[410px] sm:px-8 sm:text-base"
              >
                <span className="leading-snug">Quero tomar decisões melhores no marketing</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:bg-ink group-hover:text-mist">
                  <ArrowDownRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
