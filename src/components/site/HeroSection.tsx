import { ArrowDownRight } from "lucide-react";

import { BrandBar } from "./BrandBar";

const WHATSAPP_URL = "https://wa.me/558391247521";

export function HeroSection() {
  return (
    <section className="hero-atmosphere dark relative isolate overflow-hidden text-mist">
      <div aria-hidden="true" className="pointer-events-none absolute -top-28 right-[-9rem] h-80 w-80 rounded-full border border-steel/10 bg-mist/[0.03] blur-sm sm:h-96 sm:w-96" />
      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-[1180px] flex-col px-5 pb-24 sm:px-8 lg:min-h-[760px] lg:px-12 lg:pb-36">
        <BrandBar />
        <div className="my-auto grid gap-12 pt-14 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pt-20">
          <div className="lg:col-span-8">
            <p className="text-xs font-medium text-steel">Clareza para decidir</p>
            <h1 className="headline mt-5 max-w-[18ch] text-[2.375rem] text-mist sm:text-[3rem] lg:text-[4.25rem]">
              Você já tem problemas demais na empresa para ainda precisar decidir o
              marketing{" "}
              <span className="font-normal text-steel">no escuro.</span>
            </h1>
            <p className="mt-7 max-w-[38ch] text-base leading-[1.75] text-steel sm:text-lg lg:max-w-[48ch]">
              Fornecedores, equipe, financeiro, clientes, operação, impostos... e ainda
              sobra para você decidir quanto investir, onde investir e descobrir sozinho
              se está fazendo a escolha certa.
            </p>
            <div className="mt-9">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="luminous-button inline-flex min-h-16 w-full items-center justify-between gap-4 rounded-full border border-mist/70 bg-mist px-6 text-left text-[0.9375rem] font-semibold text-ink transition-[transform,background-color,box-shadow] duration-200 active:scale-[0.98] hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel sm:w-auto sm:min-w-[390px] sm:text-base"
              >
                Quero tomar decisões melhores no marketing
                <ArrowDownRight aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={1.7} />
              </a>
            </div>
          </div>
          <div className="hidden lg:col-span-3 lg:col-start-10 lg:block lg:pb-2">
            <p className="max-w-[22ch] text-sm leading-7 text-steel/75">
              Decisões chegando ao mesmo tempo, todas esperando alguém decidir.
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute -bottom-px left-0 h-14 w-full rounded-t-[2.5rem] bg-mist sm:h-20 sm:rounded-t-[3.5rem]" />
    </section>
  );
}
