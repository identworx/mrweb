import { categoryItems } from '@/lib/data';

import { CategoryCard } from './category-card';

export function CategoriesSection() {
  return (
    <section className="bg-brand-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="font-accent text-sm uppercase tracking-[0.22em] text-brand-pumpkin">Produktwelten</p>
            <h2 className="mt-3 font-heading text-3xl text-brand-anthracite sm:text-4xl">Kollektionen entdecken</h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryItems.map((item) => (
            <CategoryCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
