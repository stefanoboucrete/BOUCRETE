import SiteHeader from '../components/site-header';

export const metadata = {
  title: 'Bespoke — BOUCRETE',
  description: 'Elementos de concreto arquitectónico diseñados para cada proyecto, en colaboración con arquitectos y diseñadores.',
};

const disciplines = ['Arquitectos', 'Diseñadores', 'Interioristas', 'Paisajistas', 'Desarrolladores'];
const steps = [
  { n: '01', title: 'Idea', text: 'Partimos de una intención, una necesidad del espacio o un concepto de diseño.' },
  { n: '02', title: 'Desarrollo', text: 'Revisamos dimensiones, geometrías, color, textura y acabado alrededor del proyecto.' },
  { n: '03', title: 'Manufactura', text: 'Diseño y fabricación trabajan juntos para llevar la pieza hacia una forma manufacturable.' },
];

export default function Bespoke() {
  return <>
    <div className="review">BOUCRETE / BESPOKE <a href="/">INICIO ↗</a></div>
    <SiteHeader />
    <main className="bespoke-page">
      <section id="disenadores" className="bespoke-hero"><p className="eyebrow">ELEMENTOS DISEÑADOS PARA CADA PROYECTO</p><div><h1>No todos los espacios<br />necesitan una pieza<br /><em>existente.</em></h1><p>Colaboramos con profesionales de distintas disciplinas para crear elementos de concreto alrededor de una intención arquitectónica particular.</p></div><div className="bespoke-disciplines">{disciplines.map((name, i) => <span key={name}><b>0{i + 1}</b>{name}</span>)}</div></section>
      <section className="bespoke-detail"><div><p className="eyebrow">BESPOKE / CONCRETO ARQUITECTÓNICO</p><h2>La pieza comienza<br /><em>con el espacio.</em></h2></div><div className="bespoke-copy"><p>Dimensiones, geometrías, colores, texturas y acabados pueden desarrollarse en torno a una necesidad particular.</p><p>Cada proyecto abre una oportunidad para explorar nuevas posibilidades del material. La propuesta específica se define al revisar el concepto, el uso y los requerimientos de fabricación.</p><a className="text-link" href="/#proyecto">PREPARAR MI PROYECTO <span>↗</span></a></div></section>
      <section className="bespoke-steps"><p className="eyebrow">DEL CONCEPTO A LA PIEZA</p>{steps.map(step => <article key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</section>
      <section className="bespoke-cta"><p className="eyebrow">¿TIENES UN PROYECTO EN DESARROLLO?</p><h2>Compártenos<br /><em>la intención.</em></h2><a className="text-link" href="/#proyecto">QUÉ PREPARAR PARA COMENZAR <span>↗</span></a><p className="pro-status">CANAL DIRECTO DE CONTACTO Y ALCANCE EN PREPARACIÓN</p></section>
    </main>
    <footer><a href="/"><img src="/images/boucrete-wordmark.png" alt="Boucrete" /></a><p>ARCHITECTURAL CONCRETE<br />MADE IN MEXICO.</p><a href="/coleccion">COLLECTION</a><a href="/manufactura">MANUFACTURING</a><a href="/">INICIO ↑</a></footer>
  </>;
}
