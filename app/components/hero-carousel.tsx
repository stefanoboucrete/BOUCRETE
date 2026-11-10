'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    image: '/images/lavabo.jpg',
    alt: 'Lavabo de concreto en un espacio interior, imagen de referencia.',
    eyebrow: 'BOUCRETE / ARCHITECTURAL CONCRETE',
    title: <>Concrete,<br /><em>Beyond<br />Construction.</em></>,
    lede: 'DISEÑO, DESARROLLO Y MANUFACTURA DE CONCRETO ARQUITECTÓNICO PARA ESPACIOS CON IDENTIDAD.',
    action: 'EXPLORAR PRODUCTOS',
    href: '/coleccion',
    caption: 'BOUCRETE / CONCRETO ARQUITECTÓNICO',
    signature: 'DESIGN · DEVELOP · MANUFACTURE',
  },
  {
    image: '/images/exterior.jpg',
    alt: 'Pieza de concreto en un espacio exterior, imagen de referencia.',
    eyebrow: '01 / COLLECTION',
    title: <>Objetos para<br /><em>habitar<br />el espacio.</em></>,
    lede: 'PIEZAS DE CONCRETO ARQUITECTÓNICO PARA EL RITMO DE LA VIDA COTIDIANA.',
    action: 'CONOCER COLLECTION',
    href: '/coleccion',
    caption: 'OBJETOS / ESPACIO / MATERIA',
    signature: 'DISEÑADO Y HECHO EN MÉXICO',
  },
  {
    image: '/images/detalle.jpg',
    alt: 'Detalle de textura de concreto, imagen de referencia.',
    eyebrow: '02 / DESARROLLO A LA MEDIDA',
    title: <>Del concepto<br /><em>a una pieza<br />excepcional.</em></>,
    lede: 'COLABORAMOS CON ARQUITECTOS, DISEÑADORES Y MARCAS PARA DAR FORMA A NUEVAS IDEAS.',
    action: 'TRABAJAR CON BOUCRETE',
    href: '/profesionales',
    caption: 'TEXTURA / FORMA / OFICIO',
    signature: 'DESIGN · DEVELOP · MANUFACTURE',
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[active];

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduceMotion) return;

    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        setActive((current) => (current + 1) % slides.length);
      }
    }, 6500);

    return () => window.clearInterval(timer);
  }, [paused, active]);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);

  return (
    <section
      id="inicio"
      className="opening-v3"
      aria-label="Presentación de BOUCRETE"
      aria-roledescription="carrusel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <figure className="opening-v3-image" key={slide.image}>
        <img src={slide.image} alt={slide.alt} />
        <figcaption><span>VISUAL DE REFERENCIA</span><span>{slide.caption}</span></figcaption>
        <div className="opening-image-index">0{active + 1}<br /><span>0{slides.length}</span></div>
      </figure>
      <div className="opening-v3-copy" key={active}>
        <p className="eyebrow">{slide.eyebrow}</p>
        <h1>{slide.title}</h1>
        <p className="opening-v3-lede">{slide.lede}</p>
        <a className="opening-v3-link" href={slide.href}>{slide.action}<span>↗</span></a>
        <div className="opening-v3-signature"><span>{slide.signature}</span><span>HECHO EN MÉXICO</span></div>
        <div className="hero-carousel-controls" aria-label="Controles del carrusel">
          <button type="button" aria-label="Diapositiva anterior" onClick={() => goTo(active - 1)}>←</button>
          <div className="hero-carousel-dots">
            {slides.map((item, index) => (
              <button
                type="button"
                key={item.image}
                aria-label={`Ir a diapositiva ${index + 1}`}
                aria-current={active === index ? 'true' : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button type="button" aria-label="Siguiente diapositiva" onClick={() => goTo(active + 1)}>→</button>
          <span className="hero-carousel-count">0{active + 1} / 0{slides.length}</span>
        </div>
      </div>
    </section>
  );
}
