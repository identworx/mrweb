export type Category = {
  title: string;
  href: string;
  image: string;
  alt: string;
  label: string;
};

export type InspirationItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  meta: string;
};

export const navItems = [
  'Produkte',
  'Kollektion',
  'Inspiration',
  'Händler',
  'Über uns'
];

export const categoryItems: Category[] = [
  {
    title: 'Sitzkissen',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    alt: 'Hochwertige Sitzkissen in einer Outdoor-Lounge',
    label: 'Komfort im Detail'
  },
  {
    title: 'Dekokissen',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=960&q=80',
    alt: 'Dekokissen auf moderner Terrasse',
    label: 'Textile Akzente'
  },
  {
    title: 'Bankauflagen',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=900&q=80',
    alt: 'Bankauflagen in heller Outdoor-Umgebung',
    label: 'Langlebig & formstabil'
  },
  {
    title: 'Gartenmöbel',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80',
    alt: 'Designer-Gartenmöbel auf großzügiger Terrasse',
    label: 'Design für draußen'
  },
  {
    title: 'Loungesets',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1617104551722-3b2d51366411?auto=format&fit=crop&w=900&q=80',
    alt: 'Loungeset in mediterranem Garten',
    label: 'Entspannen mit Stil'
  },
  {
    title: 'Outdoor-Textilien',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80',
    alt: 'Outdoor-Textilien in natürlichen Farben',
    label: 'Wetterfest veredelt'
  }
];

export const inspirationItems: InspirationItem[] = [
  {
    title: 'Katalog 2026',
    description: 'Neue Materialien, ruhige Farbwelten und kuratierte Outdoor-Sets für moderne Lebensräume im Freien.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1000&q=80',
    alt: 'Katalog-Inszenierung mit Outdoor-Möbeln und Textilien',
    meta: 'Lookbook'
  },
  {
    title: 'Outdoor Trends 2026',
    description: 'Sanfte Terrakotta-Töne, klare Linien und Materialien, die Design und Widerstandsfähigkeit verbinden.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80',
    alt: 'Trendiges Outdoor-Setting auf einer Designterrasse',
    meta: 'Trendbericht'
  },
  {
    title: 'Pflege & Materialien',
    description: 'So bleiben hochwertige Stoffe, Schäume und Bezüge über Jahre formschön und angenehm im Griff.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    alt: 'Materialstudien und Stoffmuster für Außenbereiche',
    meta: 'Ratgeber'
  },
  {
    title: 'Ideen für Balkon & Terrasse',
    description: 'Vom Stadtbalkon bis zur weitläufigen Lounge: inspirierende Kompositionen für jeden Außenbereich.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1615875605825-5eb9bb5d52cb?auto=format&fit=crop&w=1000&q=80',
    alt: 'Stilvoll gestalteter Balkon mit Outdoor-Kissen',
    meta: 'Inspiration'
  }
];

export const galleryItems = [
  {
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
    alt: 'Sonnige Outdoor-Lounge mit hellen Textilien',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    image:
      'https://images.unsplash.com/photo-1616594039964-5bcb5563f886?auto=format&fit=crop&w=1000&q=80',
    alt: 'Edles Tischarrangement im Außenbereich',
    className: ''
  },
  {
    image:
      'https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&w=1000&q=80',
    alt: 'Lounge-Ecke mit strukturierten Stoffen',
    className: ''
  },
  {
    image:
      'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1000&q=80',
    alt: 'Terrasse mit harmonischer Farbpalette',
    className: 'md:row-span-2'
  },
  {
    image:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1000&q=80',
    alt: 'Detailaufnahme hochwertiger Outdoor-Stoffe',
    className: ''
  }
];
