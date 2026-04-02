import Image from 'next/image';

export function SplitHighlightSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-10">
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
            alt="Mediterrane Terrasse mit MOSAROMA Outdoor-Lounge"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center rounded-3xl bg-brand-cream px-7 py-10 sm:px-10">
          <div className="max-w-lg space-y-6">
            <p className="font-accent text-sm uppercase tracking-[0.24em] text-brand-burnt">Marken-Highlight</p>
            <h2 className="font-heading text-3xl leading-tight text-brand-anthracite sm:text-4xl">
              Mediterranean Outdoor Living
            </h2>
            <p className="text-lg leading-relaxed text-brand-text">
              MOSAROMA verbindet langlebige Materialien mit subtiler Eleganz. So entstehen stilvolle Outdoor-Lösungen,
              die Wetterbeständigkeit, Komfort und zeitloses Design harmonisch vereinen.
            </p>
            <button className="inline-flex items-center rounded-full border border-brand-pumpkin px-6 py-3 text-sm font-semibold text-brand-anthracite transition hover:bg-brand-pumpkin hover:text-white">
              Kollektion entdecken
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
