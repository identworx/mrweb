import Image from 'next/image';
import Link from 'next/link';

import { Category } from '@/lib/data';

type CategoryCardProps = {
  item: Category;
};

export function CategoryCard({ item }: CategoryCardProps) {
  return (
    <Link
      href={item.href}
      className="group overflow-hidden rounded-2xl bg-white shadow-card transition-transform duration-500 ease-smooth hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition duration-700 ease-smooth group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 px-5 py-4">
        <h3 className="font-heading text-xl text-brand-anthracite">{item.title}</h3>
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-pumpkin">
          <span>{item.label}</span>
          <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
}
