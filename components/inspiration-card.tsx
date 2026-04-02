import Image from 'next/image';
import Link from 'next/link';

import { InspirationItem } from '@/lib/data';

type InspirationCardProps = {
  item: InspirationItem;
};

export function InspirationCard({ item }: InspirationCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-black/5 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-pumpkin">{item.meta}</p>
        <h3 className="font-heading text-2xl text-brand-anthracite">{item.title}</h3>
        <p className="text-base leading-relaxed text-brand-text">{item.description}</p>
        <Link href={item.href} className="inline-flex text-sm font-semibold text-brand-anthracite transition hover:text-brand-pumpkin">
          Mehr erfahren →
        </Link>
      </div>
    </article>
  );
}
