export function CtaBanner() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-brand-medium/40 bg-white px-6 py-10 text-center shadow-soft sm:px-10">
          <h2 className="font-heading text-3xl text-brand-anthracite sm:text-4xl">
            Finde deinen MOSAROMA-Händler in deiner Umgebung
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-brand-text">
            Erleben Sie Materialien, Sitzkomfort und Farbharmonien vor Ort. Unser Händlernetzwerk berät Sie persönlich
            und individuell.
          </p>
          <button className="mt-8 inline-flex rounded-full bg-brand-pumpkin px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-burnt">
            Händlersuche
          </button>
        </div>
      </div>
    </section>
  );
}
