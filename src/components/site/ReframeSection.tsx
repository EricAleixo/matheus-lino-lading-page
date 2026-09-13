import { Section, Eyebrow } from "./primitives";

const PAIRS = [
  ["Mais anúncios", "não resolvem uma oferta que ninguém entende."],
  ["Mais leads", "não resolvem um comercial que não acompanha."],
  ["Mais conteúdo", "não resolve uma marca que não sabe o que quer dizer."],
  ["Mais alcance", "não resolve uma experiência ruim depois do primeiro contato."],
];

export function ReframeSection() {
  return (
    <Section tone="paper">
      <div className="max-w-[24ch]">
        <Eyebrow>O reframe</Eyebrow>
        <h2 className="headline mt-5 text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]">
          Antes de escolher a solução, precisamos encontrar o problema certo.
        </h2>
      </div>

      <div className="mt-14 grid gap-x-16 gap-y-9 sm:grid-cols-2 lg:mt-20">
        {PAIRS.map(([lead, rest]) => (
          <p key={lead} className="max-w-[38ch] text-[1.0625rem] leading-[1.7] text-ink/70 sm:text-[1.125rem]">
            <span className="font-semibold text-ink">{lead}</span> {rest}
          </p>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:items-end">
        <p className="max-w-[46ch] text-base leading-[1.8] text-ink/70 sm:text-[1.125rem] lg:col-span-6">
          E vender mais este mês não significa necessariamente estar construindo uma
          empresa mais forte para o próximo ano.
        </p>
        <p className="headline max-w-[26ch] text-[1.5rem] sm:text-[1.75rem] lg:col-span-6 lg:text-[2rem]">
          A melhor decisão não é necessariamente investir no que funciona. É investir no
          que <span className="font-normal text-ink/55">mais precisa funcionar agora.</span>
        </p>
      </div>
    </Section>
  );
}
