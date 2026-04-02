import Image from 'next/image';
import Link from 'next/link';

const footerColumns = [
  {
    title: 'Produktbereiche',
    links: ['Sitzkissen', 'Dekokissen', 'Bankauflagen', 'Loungesets']
  },
  {
    title: 'Service',
    links: ['Beratung', 'Pflegehinweise', 'Materialkunde', 'Händlersuche']
  },
  {
    title: 'Unternehmen',
    links: ['Über MOSAROMA', 'Karriere', 'Presse', 'Kontakt']
  },
  {
    title: 'Rechtliches',
    links: ['Impressum', 'Datenschutz', 'AGB', 'Cookies']
  }
];

export function Footer() {
  return (
    <footer className="bg-white pb-10 pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 border-b border-black/10 pb-12 lg:grid-cols-[1.2fr_3fr]">
          <div className="space-y-5">
            <Image src="/logo/mosaroma-logo.svg" alt="MOSAROMA Logo" width={180} height={38} className="h-9 w-auto" />
            <p className="max-w-sm text-base leading-relaxed text-brand-text">
              Premium Outdoor Living mit Fokus auf langlebige Textilien, feine Haptik und ruhige Eleganz.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-heading text-lg text-brand-anthracite">{column.title}</h3>
                <ul className="mt-4 space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-brand-text transition-colors hover:text-brand-pumpkin">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 text-sm text-brand-text sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MOSAROMA. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="#" className="transition-colors hover:text-brand-pumpkin">
              Instagram
            </Link>
            <Link href="#" className="transition-colors hover:text-brand-pumpkin">
              Pinterest
            </Link>
            <Link href="#" className="transition-colors hover:text-brand-pumpkin">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
