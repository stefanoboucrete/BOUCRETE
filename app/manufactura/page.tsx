import SiteHeader from '../components/site-header';

export const metadata = {
  title: 'Manufactura — BOUCRETE',
  description: 'Desarrollo y manufactura de productos de concreto arquitectónico para firmas de diseño, marcas y nuevos emprendimientos.',
};

const stages = [
  { n: '01', title: 'Desarrollo de diseño', text: 'Damos forma a la idea desde un concepto, dibujo, modelo 3D o prototipo.' },
  { n: '02', title: 'Ingeniería', text: 'Preparamos el producto para su desarrollo y fabricación.' },
  { n: '03', title: 'Prototipos', text: 'Exploramos la forma y el comportamiento de la pieza antes de producir.' },
  { n: '04', title: 'Moldes', text: 'Desarrollamos moldes para llevar el diseño a manufactura.' },
  { n: '05', title: 'Producción', text: 'Fabricamos piezas especiales, series limitadas o producción recurrente.' },
  { n: '06', title: 'Acabado', text: 'Completamos las piezas con atención a la expresión del concreto.' },
];

export default function Manufactura() {
  return <>
    <div className="review">BOUCRETE / MANUFACTURA <a href="/">INICIO ↗</a></div>
    <SiteHeader />
    <main className="manufacturing-page">
      <section id="colaboraciones" className="manufacturing-hero"><p className="eyebrow">DESIGN · DEVELOP · MANUFACTURE</p><h1>También fabricamos<br /><em>las ideas de otros.</em></h1><div><p>Socio de desarrollo y manufactura para firmas de diseño, marcas y nuevos emprendimientos que buscan crear productos de concreto arquitectónico.</p><p>Partimos de una idea y la acompañamos hacia un producto manufacturable, sin que nuestros socios necesiten desarrollar su propia infraestructura de producción.</p></div><a className="text-link" href="/#proyecto">CONVERSAR SOBRE MANUFACTURA <span>↗</span></a></section>
      <section className="manufacturing-process"><div className="manufacturing-process-head"><p className="eyebrow">EL PROCESO</p><h2>De la idea<br /><em>a la producción.</em></h2><p>Un recorrido que reúne desarrollo de diseño y manufactura especializada.</p></div><div className="manufacturing-steps">{stages.map(stage => <article key={stage.n}><span>{stage.n}</span><div><h3>{stage.title}</h3><p>{stage.text}</p></div></article>)}</div></section>
      <section className="manufacturing-capacity"><p className="eyebrow">ESCALA Y COLABORACIÓN</p><h2>De una pieza especial<br />a una producción<br /><em>recurrente.</em></h2><p>Desde piezas especiales y series limitadas hasta producción recurrente. Cada colaboración se define según el producto y sus requerimientos.</p><div className="capacity-tags"><span>FIRMAS DE DISEÑO</span><span>MARCAS</span><span>NUEVOS EMPRENDIMIENTOS</span></div></section>
      <section id="distribuidores" className="distribution-note"><p className="eyebrow">PARA DISTRIBUIDORES</p><h2>Crezcamos en<br /><em>colaboración.</em></h2><p>Esta ruta permitirá conocer el catálogo, la cobertura y las condiciones comerciales para distribuidores. La información se publicará cuando BOUCRETE defina su programa y atención.</p><a className="text-link" href="/#proyecto">EXPRESAR INTERÉS <span>↗</span></a></section>
      <section className="bespoke-cta"><p className="eyebrow">¿BUSCAS UN SOCIO DE MANUFACTURA?</p><h2>Hablemos de<br /><em>lo que quieres crear.</em></h2><a className="text-link" href="/#proyecto">PREPARAR LA INFORMACIÓN <span>↗</span></a><p className="pro-status">ALCANCE, CAPACIDADES POR VOLUMEN Y CANAL DE CONTACTO EN PREPARACIÓN</p></section>
    </main>
    <footer><a href="/"><img src="/images/boucrete-wordmark.png" alt="Boucrete" /></a><p>ARCHITECTURAL CONCRETE<br />MADE IN MEXICO.</p><a href="/coleccion">COLLECTION</a><a href="/profesionales">BESPOKE</a><a href="/">INICIO ↑</a></footer>
  </>;
}
