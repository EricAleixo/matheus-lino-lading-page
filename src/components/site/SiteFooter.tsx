import qmLogo from "@/assets/qm-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-steel">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div>
          <p className="tag-brand text-[0.75rem] text-mist">Matheus Lino</p>
          <p className="mt-2 text-[0.6875rem] font-medium text-steel">Estratégia de marketing</p>
        </div>
        <img
          src={qmLogo.url}
          alt="Quality Master"
          className="h-5 w-auto opacity-70 sm:h-6"
          width={2238}
          height={507}
          loading="lazy"
        />
      </div>
    </footer>
  );
}
