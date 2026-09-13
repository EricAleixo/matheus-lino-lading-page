import { Section, Eyebrow } from "./primitives";

export function RoleSection() {
  return (
    <Section tone="deep">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-7">
          <Eyebrow muted>É nesse espaço que eu entro</Eyebrow>
          <h2 className="headline mt-5 max-w-[18ch] text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem]">
            Você continua decidindo. Só não precisa decidir{" "}
            <span className="font-normal text-steel">no escuro.</span>
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:pt-24">
          <div className="space-y-6 text-base leading-[1.8] sm:text-[1.125rem]">
            <p className="max-w-[42ch] text-mist/90">Meu papel não é tomar o marketing da sua mão.</p>
            <p className="max-w-[44ch] text-steel">
              É ajudar você a enxergar o cenário, interpretar os dados, entender as
              alternativas e tomar decisões melhores.
            </p>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-1">
          <div className="glass-surface rounded-[2rem] px-6 py-8 sm:px-9 sm:py-10">
            <p className="max-w-[52ch] text-base leading-[1.8] text-mist/90 sm:text-[1.125rem]">
              Atuo como um braço estratégico ao seu lado, analisando negócio, mercado, dados
              e resultados para identificar gargalos e ajudar a definir onde vale concentrar
              investimento, tempo e capacidade de execução.
            </p>
            <p className="mt-6 max-w-[52ch] text-base leading-[1.8] text-steel sm:text-[1.125rem]">
              À medida que identificamos novos gargalos e oportunidades, adicionamos
              capacidade de execução onde ela realmente pode gerar impacto.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
