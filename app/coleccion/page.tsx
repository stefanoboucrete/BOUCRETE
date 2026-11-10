import SiteHeader from '../components/site-header';

export const metadata = {
  title: 'Collection — BOUCRETE',
  description: 'Mobiliario, firepits, macetas, lavabos, superficies y objetos arquitectónicos de concreto.',
};

const featured = [
  { n: '01', slug: 'mobiliario', title: 'Mobiliario', image: 'exterior', text: 'Objetos y elementos para integrarse naturalmente a la arquitectura.' },
  { n: '02', slug: 'lavabos', title: 'Lavabos', image: 'lavabo', text: 'Piezas de concreto para espacios interiores.' },
  { n: '03', slug: 'superficies', title: 'Superficies', image: 'cubierta', text: 'Superficies que exploran forma, textura, color y detalle.' },
];
const otherFamilies = [{ name: 'Firepits', slug: 'firepits' }, { name: 'Macetas', slug: 'macetas' }, { name: 'Objetos arquitectónicos', slug: 'objetos-arquitectonicos' }];

export default function Coleccion() {
  return <>
    <div className="review">BOUCRETE / COLLECTION <a href="/">INICIO ↗</a></div>
    <SiteHeader />
    <main className="catalog-page">
      <div className="catalog-hero"><p className="eyebrow">01 / COLLECTION · CONCRETO ARQUITECTÓNICO</p><h1>Diseñada por<br /><em>BOUCRETE.</em></h1><div className="catalog-hero-copy"><p>Nuestra colección reúne objetos y elementos arquitectónicos concebidos para integrarse a los espacios y permanecer más allá de las tendencias.</p><span>DISEÑO · DESARROLLO · MANUFACTURA</span></div><nav className="catalog-categories" aria-label="Explorar familias de productos"><a href="#familia-mobiliario">MOBILIARIO <span>↘</span></a><a href="#familia-firepits">FIREPITS <span>↘</span></a><a href="#familia-macetas">MACETAS <span>↘</span></a><a href="#familia-lavabos">LAVABOS <span>↘</span></a><a href="#familia-superficies">SUPERFICIES <span>↘</span></a><a href="#familia-objetos-arquitectonicos">OBJETOS ARQUITECTÓNICOS <span>↘</span></a></nav></div>
      <section id="familias" className="catalog-grid" aria-label="Familias destacadas">{featured.map(card => <article id={'familia-' + card.slug} className="catalog-card" key={card.n}><figure><img src={'/images/' + card.image + '.jpg'} alt={card.title + ', imagen de referencia del perfil de Boucrete'} /><figcaption>IMAGEN DE REFERENCIA</figcaption></figure><div className="catalog-card-head"><span>{card.n} / 03</span><h2>{card.title}</h2></div><p>{card.text}</p><a href="/profesionales">DESARROLLAR A LA MEDIDA <span>↗</span></a></article>)}</section>
      <section className="catalog-other"><p className="eyebrow">MÁS FORMAS DE EXPLORAR</p><h2>Otras familias<br /><em>BOUCRETE.</em></h2><div className="family-list">{otherFamilies.map((item, i) => <article id={'familia-' + item.slug} key={item.name}><span>0{i + 4}</span><h3>{item.name}</h3><p>MODELOS, FOTOGRAFÍAS Y FICHAS EN PREPARACIÓN</p></article>)}</div><p className="catalog-note">LAS IMÁGENES DE ESTA PÁGINA SON REFERENCIAS VISUALES DEL PORTAFOLIO; LOS MODELOS Y DETALLES COMERCIALES SE VALIDARÁN CON BOUCRETE.</p><a className="product-preview-link" href="/coleccion/ficha-producto">VISTA PREVIA DE FICHA INDIVIDUAL · SOLO REVISIÓN ↗</a></section>
      <section className="catalog-bottom"><p className="eyebrow">PIEZA DE COLECCIÓN O DESARROLLO A MEDIDA</p><h2>Una idea<br /><em>puede tomar forma.</em></h2><a href="/profesionales" className="text-link">EXPLORAR BESPOKE <span>↗</span></a><a href="/manufactura" className="text-link">MANUFACTURA PARA MARCAS <span>↗</span></a></section>
    </main>
    <footer><a href="/"><img src="/images/boucrete-wordmark.png" alt="Boucrete" /></a><p>ARCHITECTURAL CONCRETE<br />MADE IN MEXICO.</p><a href="/profesionales">BESPOKE</a><a href="/manufactura">MANUFACTURING</a><a href="/">INICIO ↑</a></footer>
  </>;
}
