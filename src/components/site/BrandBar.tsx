import qmLogo from "@/assets/qm-logo.png.asset.json";

/**
 * Assinatura do topo. O logotipo da Quality Master é aplicado com altura fixa,
 * largura automática (proporções originais preservadas) e área de proteção
 * garantida por padding equivalente a 2x a altura do símbolo.
 */
export function BrandBar() {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 sm:py-8">
      <div className="min-w-0">
        <p className="tag-brand text-[0.75rem] text-mist">Matheus Lino</p>
        <p className="mt-2 text-[0.6875rem] font-medium text-steel">Estratégia de marketing</p>
      </div>
      <div className="shrink-0 pl-3">
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
