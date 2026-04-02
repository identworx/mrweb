'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { navItems } from '@/lib/data';

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/5 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 shadow-soft backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="#" className="flex items-center">
          <Image
            src="/logo/mosaroma-logo.svg"
            alt="MOSAROMA Logo"
            width={190}
            height={40}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm font-medium tracking-wide text-brand-anthracite transition-colors hover:text-brand-pumpkin"
            >
              {item}
            </Link>
          ))}
          <button className="rounded-full p-2 text-brand-anthracite transition hover:bg-brand-light hover:text-brand-pumpkin" aria-label="Suche öffnen">
            <Search size={18} />
          </button>
          <button className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text transition-colors hover:text-brand-pumpkin">
            DE
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-brand-medium/60 p-2 text-brand-anthracite md:hidden"
          aria-label="Menü öffnen"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-black/5 bg-white transition-all duration-500 md:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="block rounded-md px-3 py-3 text-base text-brand-anthracite transition hover:bg-brand-light hover:text-brand-pumpkin"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
