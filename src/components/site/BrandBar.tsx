import qmLogo from "@/assets/qm-logo.png.asset.json";

/**
 * Assinatura do topo. O logotipo da Quality Master é aplicado com altura fixa,
 * largura automática (proporções originais preservadas) e área de proteção
 * garantida por padding equivalente a 2x a altura do símbolo.
 */
export function BrandBar() {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-steel/20 py-5">
      <div className="min-w-0">
        <p className="tag-brand text-[0.8125rem] text-mist">Matheus Lino</p>
        <p className="tag-mono mt-2 text-[0.625rem] text-steel">Estratégia de marketing</p>
      </div>
      <div className="flex shrink-0 items-center gap-4 pl-4">
        <span aria-hidden="true" className="h-8 w-px bg-steel/25" />
        <img
          src={qmLogo.url}
          alt="Quality Master"
          className="h-6 w-auto opacity-90 sm:h-7"
          width={2238}
          height={507}
        />
      </div>

    </header>
  );
}
