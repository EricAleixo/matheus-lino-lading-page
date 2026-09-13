const GAINS = [
  "Trata-se de saber onde investir.",
  "Entender por que está investindo.",
  "Acompanhar se está funcionando.",
  "Corrigir antes de desperdiçar mais dinheiro.",
  "Identificar novas oportunidades.",
  "E construir resultados que não dependam apenas da campanha do mês.",
];

export function ChangesSection() {
  return (
    <section className="paper-atmosphere relative isolate overflow-hidden pt-20 pb-24 text-ink sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16 lg:items-start">
          {/* Coluna Esquerda: Headline */}
          <div className="lg:col-span-5">
            <h2 className="headline text-[2.125rem] leading-[1.08] text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
              No fim, não se trata de fazer{" "}
              <span className="font-normal text-ink/50">mais marketing.</span>
            </h2>
          </div>

          {/* Coluna Direita: Os 6 Pontos e a Conclusão */}
          <div className="lg:col-span-7">
            <div className="space-y-3.5 sm:space-y-4">
              {GAINS.map((item, index) => (
                <div
                  key={item}
                  className="glass-surface-light soft-surface flex items-start gap-4 rounded-2xl p-5 sm:p-6"
                >
                  <span className="tag-mono mt-0.5 shrink-0 text-[0.6875rem] font-bold text-deep">
                    0{index + 1}
                  </span>
                  <p className="text-[1.0625rem] font-medium leading-relaxed text-ink/85 sm:text-[1.1875rem]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-6 border-t border-ink/10 pt-10 sm:mt-16 sm:pt-12">
              <p className="max-w-[46ch] text-base leading-[1.8] text-ink/75 sm:text-lg">
                Você ganha mais controle sobre o marketing da própria empresa sem precisar fazer
                tudo sozinho.
              </p>
              <div className="space-y-2">
                <p className="headline text-[1.5rem] leading-tight text-ink sm:text-[1.875rem]">
                  Menos tiro no escuro.
                </p>
                <p className="headline text-[1.5rem] leading-tight text-ink/60 sm:text-[1.875rem]">
                  Mais clareza para decidir onde colocar dinheiro, tempo e energia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
