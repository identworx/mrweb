import Image from 'next/image';

import { galleryItems } from '@/lib/data';

export function GallerySection() {
  return (
    <section className="bg-brand-anthracite py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 space-y-3 text-white">
          <p className="font-accent text-base uppercase tracking-[0.28em] text-brand-pumpkin">Signature Gallery</p>
          <h2 className="font-heading text-3xl sm:text-4xl">Bilder einer ruhigen Luxus-Atmosphäre</h2>
          <p className="max-w-3xl text-white/80">
            Inspirative Perspektiven aus Terrassen, Gärten und Lounge-Bereichen – kuratiert für eine klare, zeitlose
            MOSAROMA Handschrift.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl ${item.className}`}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 ease-smooth hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
