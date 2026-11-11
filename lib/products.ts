export type BoucreteProduct = {
  slug: string;
  name: string;
  family: string;
  number: string;
  context: string;
  description: string;
  story: string;
  images: { src: string; alt: string; label: string }[];
};

// Editorial sample content only. Replace with the approved catalog before launch.
export const products: BoucreteProduct[] = [
  {
    slug: 'banca-arista', name: 'Banca Arista', family: 'Mobiliario', number: '01', context: 'Residencial · Comercial · Urbano',
    description: 'Una pieza de asiento de presencia serena, pensada para dialogar con el paisaje y la arquitectura.',
    story: 'La banca explora el encuentro entre una geometría clara y la expresión natural del concreto. Esta ficha es una muestra de contenido; el modelo y sus especificaciones deben confirmarse con BOUCRETE.',
    images: [
      { src: '/images/exterior.jpg', alt: 'Mobiliario de concreto en un jardín, visual de referencia.', label: '01 / EN CONTEXTO' },
      { src: '/images/detalle.jpg', alt: 'Acercamiento a una textura de concreto, visual de referencia.', label: '02 / MATERIAL' },
      { src: '/images/cubierta.jpg', alt: 'Plano de superficie de concreto, visual de referencia.', label: '03 / DETALLE' },
    ],
  },
  {
    slug: 'firepit-circulo', name: 'Firepit Círculo', family: 'Firepits', number: '02', context: 'Residencial · Comercial · Urbano',
    description: 'Un punto de reunión que organiza el espacio exterior alrededor de una forma esencial.',
    story: 'Esta propuesta editorial presenta el firepit como centro de encuentro. Combustible, instalación, medidas y desempeño deben definirse para cada producto antes de ofrecerlo.',
    images: [
      { src: '/images/exterior.jpg', alt: 'Espacio exterior con elemento de concreto, visual de referencia.', label: '01 / EN CONTEXTO' },
      { src: '/images/cubierta.jpg', alt: 'Detalle de una superficie de concreto, visual de referencia.', label: '02 / SUPERFICIE' },
      { src: '/images/detalle.jpg', alt: 'Textura de concreto, visual de referencia.', label: '03 / MATERIAL' },
    ],
  },
  {
    slug: 'maceta-nucleo', name: 'Maceta Núcleo', family: 'Macetas', number: '03', context: 'Residencial · Comercial · Urbano',
    description: 'Un volumen para dar presencia a la vegetación y establecer una pausa dentro del espacio.',
    story: 'La forma y el tamaño de una maceta influyen en su relación con la vegetación y el sitio. Esta presentación es conceptual; dimensiones, drenaje y acabados requieren validación.',
    images: [
      { src: '/images/exterior.jpg', alt: 'Vegetación en un jardín arquitectónico, visual de referencia.', label: '01 / EN CONTEXTO' },
      { src: '/images/lavabo.jpg', alt: 'Interior con materiales minerales, visual de referencia.', label: '02 / ATMÓSFERA' },
      { src: '/images/detalle.jpg', alt: 'Detalle de textura mineral, visual de referencia.', label: '03 / MATERIAL' },
    ],
  },
  {
    slug: 'lavabo-laja', name: 'Lavabo Laja', family: 'Lavabos', number: '04', context: 'Residencial · Comercial',
    description: 'Volumen, superficie y agua reunidos en una pieza que acompaña el ritual cotidiano.',
    story: 'El lavabo propone una lectura monolítica de la superficie y el volumen. Instalación, dimensiones, desagüe, sellado y mantenimiento dependen de la especificación final.',
    images: [
      { src: '/images/lavabo.jpg', alt: 'Lavabo de concreto en un interior, visual de referencia.', label: '01 / EN CONTEXTO' },
      { src: '/images/cubierta.jpg', alt: 'Superficie clara de concreto, visual de referencia.', label: '02 / SUPERFICIE' },
      { src: '/images/detalle.jpg', alt: 'Acercamiento a la textura de concreto, visual de referencia.', label: '03 / MATERIAL' },
    ],
  },
  {
    slug: 'superficie-trazo', name: 'Superficie Trazo', family: 'Superficies', number: '05', context: 'Residencial · Comercial',
    description: 'Una superficie arquitectónica que convierte la continuidad material en parte del lenguaje del espacio.',
    story: 'Cada superficie se relaciona con su soporte, formato, encuentro y uso. Este ejemplo no define espesores, juntas, resistencia o sistema de instalación.',
    images: [
      { src: '/images/cubierta.jpg', alt: 'Superficie de concreto en primer plano, visual de referencia.', label: '01 / SUPERFICIE' },
      { src: '/images/lavabo.jpg', alt: 'Interior con cubierta mineral, visual de referencia.', label: '02 / EN CONTEXTO' },
      { src: '/images/detalle.jpg', alt: 'Textura de concreto en detalle, visual de referencia.', label: '03 / MATERIAL' },
    ],
  },
  {
    slug: 'umbral-elemento', name: 'Umbral', family: 'Objetos arquitectónicos', number: '06', context: 'Comercial · Urbano',
    description: 'Un elemento arquitectónico concebido para construir transiciones y acentos en el espacio.',
    story: 'BOUCRETE desarrolla elementos arquitectónicos en colaboración con cada proyecto. Esta ficha muestra cómo podría presentarse un modelo de colección una vez aprobado.',
    images: [
      { src: '/images/exterior.jpg', alt: 'Elemento de concreto en un paisaje arquitectónico, visual de referencia.', label: '01 / EN CONTEXTO' },
      { src: '/images/cubierta.jpg', alt: 'Geometría de concreto en primer plano, visual de referencia.', label: '02 / FORMA' },
      { src: '/images/detalle.jpg', alt: 'Acabado de concreto, visual de referencia.', label: '03 / MATERIAL' },
    ],
  },
];

export const findProduct = (slug: string) => products.find((product) => product.slug === slug);
