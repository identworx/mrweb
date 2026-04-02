import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1920&q=80"
          alt="Premium Outdoor-Lounge mit Designmöbeln im Abendlicht"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/10" />
      </div>

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-4 pb-16 sm:px-6 md:pb-24 lg:px-10 lg:pb-28">
        <div className="max-w-2xl space-y-5 text-white">
          <p className="font-accent text-sm uppercase tracking-[0.3em] text-white/85">Premium Outdoor Living</p>
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Design trifft Performance.
          </h1>
          <p className="max-w-xl text-base text-white/90 sm:text-lg">
            Stilvolle Outdoor-Textilien und kuratierte Wohnwelten für anspruchsvolle Außenbereiche mit Charakter.
          </p>
          <button className="inline-flex items-center rounded-full bg-brand-pumpkin px-7 py-3 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-brand-burnt">
            Kollektion entdecken
          </button>
        </div>
      </div>
    </section>
  );
}
