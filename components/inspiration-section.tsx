import { inspirationItems } from '@/lib/data';

import { InspirationCard } from './inspiration-card';

export function InspirationSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-2xl space-y-3">
          <p className="font-accent text-sm uppercase tracking-[0.25em] text-brand-pumpkin">Inspiration</p>
          <h2 className="font-heading text-3xl text-brand-anthracite sm:text-4xl">Magazin & Stories</h2>
          <p className="text-lg text-brand-text">
            Entdecken Sie Ideen, Materialien und Stilwelten, die moderne Außenbereiche in echte Lieblingsorte
            verwandeln.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {inspirationItems.map((item) => (
            <InspirationCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
