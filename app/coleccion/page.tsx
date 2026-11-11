import SiteHeader from '../components/site-header';
import { products } from '../../lib/products';

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
      <section id="familias" className="catalog-grid" aria-label="Familias destacadas">{featured.map(card => <article id={'familia-' + card.slug} className="catalog-card" key={card.n}><figure><img src={'/images/' + card.image + '.jpg'} alt={card.title + ', imagen de referencia del perfil de Boucrete'} /><figcaption>IMAGEN DE REFERENCIA</figcaption></figure><div className="catalog-card-head"><span>{card.n} / 03</span><h2>{card.title}</h2></div><p>{card.text}</p><a href={`/coleccion/${products.find((product) => product.family === card.title)?.slug ?? products[0].slug}`}>EXPLORAR MODELO DE MUESTRA <span>↗</span></a></article>)}</section>
      <section className="catalog-other"><p className="eyebrow">MÁS FORMAS DE EXPLORAR</p><h2>Otras familias<br /><em>BOUCRETE.</em></h2><div className="family-list">{otherFamilies.map((item, i) => { const product = products.find((entry) => entry.family.toLowerCase() === item.name.toLowerCase()) ?? products[5]; return <article id={'familia-' + item.slug} key={item.name}><span>0{i + 4}</span><h3>{item.name}</h3><p>MODELO EDITORIAL DE MUESTRA · DETALLES POR VALIDAR</p><a className="family-sample-link" href={`/coleccion/${product.slug}`}>VER FICHA DE MUESTRA ↗</a></article>; })}</div><p className="catalog-note">MODELOS, IMÁGENES Y DATOS COMERCIALES DE MUESTRA. SE SUSTITUIRÁN POR EL CATÁLOGO Y LAS FOTOGRAFÍAS AUTORIZADAS DE BOUCRETE.</p><a className="product-preview-link" href="/tienda/carrito">VER MI PEDIDO ↗</a></section>
      <section className="catalog-bottom"><p className="eyebrow">PIEZA DE COLECCIÓN O DESARROLLO A MEDIDA</p><h2>Una idea<br /><em>puede tomar forma.</em></h2><a href="/profesionales" className="text-link">EXPLORAR BESPOKE <span>↗</span></a><a href="/manufactura" className="text-link">MANUFACTURA PARA MARCAS <span>↗</span></a></section>
    </main>
    <footer><a href="/"><img src="/images/boucrete-wordmark.png" alt="Boucrete" /></a><p>ARCHITECTURAL CONCRETE<br />MADE IN MEXICO.</p><a href="/profesionales">BESPOKE</a><a href="/manufactura">MANUFACTURING</a><a href="/">INICIO ↑</a></footer>
  </>;
}
