import { Section, Eyebrow } from "./primitives";

const ATTEMPTS = [
  { action: "Você pode investir em mídia.", echo: "Pode funcionar." },
  { action: "Pode contratar produção.", echo: "Também pode funcionar." },
  { action: "Pode fazer um site novo.", echo: "E pode funcionar também." },
];

export function DarkShotsSection() {
  return (
    <Section tone="ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-mist/[0.04] blur-3xl"
      />
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-6">
          <Eyebrow muted>A consequência</Eyebrow>
          <h2 className="headline mt-5 max-w-[20ch] text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]">
            E quando ninguém está olhando o todo, é fácil começar a dar{" "}
            <span className="font-normal text-steel">tiros no escuro.</span>
          </h2>
        </div>
        <div className="lg:col-span-6 lg:pt-16">
          <div className="space-y-7">
            {ATTEMPTS.map((item) => (
              <div key={item.action} className="max-w-[34ch]">
                <p className="text-[1.0625rem] font-medium leading-snug text-mist sm:text-xl">
                  {item.action}
                </p>
                <p className="mt-1 text-[1.0625rem] leading-snug text-steel/70 sm:text-xl">
                  {item.echo}
                </p>
              </div>
            ))}
          </div>
          <p className="headline mt-12 max-w-[26ch] text-[1.375rem] text-mist sm:text-[1.625rem]">
            Só existe um pequeno problema: qual deveria vir primeiro?
          </p>
          <div className="mt-12 space-y-5 text-base leading-[1.8] text-steel sm:text-[1.125rem]">
            <p className="max-w-[44ch] text-mist/90">
              Marketing, quando quer, é uma ótima desculpa para torrar dinheiro.
            </p>
            <p className="max-w-[44ch]">Não porque marketing não funciona.</p>
            <p className="max-w-[46ch]">
              Mas porque é muito fácil gastar dinheiro em algo que gera resultado e deixar
              de lado aquilo que poderia trazer mais retorno naquele momento.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
