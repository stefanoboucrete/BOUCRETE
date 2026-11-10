import SiteHeader from './components/site-header';
import HeroCarousel from './components/hero-carousel';

const contexts = [
  { id: 'aplicacion-residencial', number: '01', title: 'Residencial', image: 'lavabo', line: 'PIEZAS PARA EL RITMO DE CADA DÍA.' },
  { id: 'aplicacion-comercial', number: '02', title: 'Comercial', image: 'cubierta', line: 'HOSPITALIDAD, RETAIL Y ENCUENTRO.' },
  { id: 'aplicacion-urbano', number: '03', title: 'Urbano', image: 'exterior', line: 'OBJETOS EN DIÁLOGO CON EL ENTORNO.' },
];

const collection = [
  { number: '01', title: 'Mobiliario', image: 'exterior', description: 'MUEBLES Y OBJETOS PARA HABITAR EL ESPACIO.' },
  { number: '02', title: 'Lavabos', image: 'lavabo', description: 'VOLUMEN, SUPERFICIE Y AGUA EN UNA SOLA PIEZA.' },
  { number: '03', title: 'Superficies', image: 'cubierta', description: 'ELEMENTOS QUE DEFINEN EL ESPACIO DESDE EL DETALLE.' },
];

const families = [
  { title: 'Firepits', id: 'familia-firepits' },
  { title: 'Macetas', id: 'familia-macetas' },
  { title: 'Objetos arquitectónicos', id: 'familia-objetos-arquitectonicos' },
];

export default function Home() {
  return <>
    <SiteHeader />
    <main className="home-v3">
      <HeroCarousel />

      <section id="aplicaciones" className="context-v3">
        <div className="context-v3-heading"><div><p className="eyebrow">01 / ENCUENTRA POR ESPACIO</p><h2>Una pieza para<br /><em>cada contexto.</em></h2></div><p>TRES FORMAS DE EXPLORAR PRODUCTOS Y ELEMENTOS DE CONCRETO ARQUITECTÓNICO.</p></div>
        <div className="context-v3-grid">{contexts.map(item => <a id={item.id} className="context-v3-card" href="/coleccion#familias" key={item.id}>
          <figure><img src={'/images/' + item.image + '.jpg'} alt={`${item.title}: imagen de referencia visual.`} /><figcaption>IMAGEN DE REFERENCIA</figcaption></figure>
          <div className="context-v3-card-title"><span>{item.number} / 03</span><h3>{item.title}</h3><b>↗</b></div>
          <p>{item.line}</p>
        </a>)}</div>
        <p className="context-v3-footnote">LOS PRODUCTOS POR CONTEXTO SE ORGANIZARÁN CON EL CATÁLOGO APROBADO DE BOUCRETE.</p>
      </section>

      <section id="coleccion" className="collection-v3">
        <div className="collection-v3-heading"><div><p className="eyebrow">02 / COLLECTION</p><h2>Diseñada por<br /><em>BOUCRETE.</em></h2></div><p>OBJETOS Y ELEMENTOS ARQUITECTÓNICOS PENSADOS PARA PERMANECER MÁS ALLÁ DE LAS TENDENCIAS.</p></div>
        <div className="collection-v3-grid">{collection.map(item => <a className="collection-v3-card" href={`/coleccion#familia-${item.title.toLowerCase()}`} key={item.number}>
          <figure><img src={'/images/' + item.image + '.jpg'} alt={`${item.title}: visual de referencia, no producto confirmado.`} /><span>{item.number}</span><figcaption>VISUAL DE REFERENCIA</figcaption></figure>
          <div><h3>{item.title}</h3><span>↗</span></div><p>{item.description}</p>
        </a>)}</div>
        <div className="collection-v3-index"><span>OTRAS FAMILIAS</span>{families.map(item => <a href={`/coleccion#${item.id}`} key={item.id}>{item.title}<span>↗</span></a>)}<a className="collection-v3-all" href="/coleccion">VER COLLECTION COMPLETA <span>↗</span></a></div>
        <p className="home-v3-image-note">LAS IMÁGENES ACTUALES SON REFERENCIAS VISUALES. MODELOS Y FOTOGRAFÍAS PROPIAS POR INTEGRAR.</p>
      </section>

      <section id="estudio" className="material-v3">
        <div className="material-v3-copy"><p className="eyebrow">03 / EL MATERIAL</p><h2>El concreto<br />como punto<br /><em>de partida.</em></h2><p>Una materia que puede adquirir forma, textura e identidad. Diseñamos con concreto para que cada pieza encuentre su lugar dentro de la arquitectura.</p><a className="material-v3-link" href="/recursos">EXPLORAR RECURSOS <span>↗</span></a></div>
        <figure className="material-v3-detail"><img src="/images/detalle.jpg" alt="Detalle de textura de concreto, imagen de referencia." /><figcaption><span>TEXTURA / FORMA / OFICIO</span><span>FOTOGRAFÍA PROPIA DE TALLER POR INTEGRAR</span></figcaption></figure>
        <div className="material-v3-caption">CONCRETE, BEYOND CONSTRUCTION.</div>
      </section>

      <section className="pathways-v3">
        <p className="eyebrow">04 / DISEÑO · DESARROLLO · MANUFACTURA</p>
        <div className="pathways-v3-grid">
          <a href="/coleccion"><span>01</span><p>COLLECTION</p><h3>Diseño<br /><em>BOUCRETE.</em></h3><b>EXPLORAR PRODUCTOS ↗</b></a>
          <a href="/profesionales"><span>02</span><p>A LA MEDIDA / BESPOKE</p><h3>Una idea<br /><em>hecha para el espacio.</em></h3><b>DESARROLLAR UNA PIEZA ↗</b></a>
          <a href="/manufactura"><span>03</span><p>COLABORACIONES</p><h3>Fabricamos<br /><em>nuevas posibilidades.</em></h3><b>WORK WITH US ↗</b></a>
        </div>
      </section>

      <section className="resources-v3">
        <div><p className="eyebrow">05 / RECURSOS PARA PROFESIONALES</p><h2>Integra el diseño<br /><em>a tu proyecto.</em></h2></div>
        <div><p>Modelos 3D, dibujos CAD y documentación técnica estarán disponibles desde la ficha de cada producto, según los recursos confirmados.</p><a className="resources-v3-link" href="/recursos">IR A RECURSOS <span>↗</span></a></div>
        <div className="resources-v3-formats"><span>3D / CAD</span><span>SKETCHUP</span><span>REVIT / BIM</span><span>AUTOCAD</span></div>
      </section>

      <section id="proyecto" className="closing-v3"><p className="eyebrow">BOUCRETE / MADE IN MEXICO</p><h2>¿Qué podemos<br /><em>crear contigo?</em></h2><p>ARQUITECTOS, DISEÑADORES, MARCAS Y DISTRIBUIDORES: INICIEMOS UNA CONVERSACIÓN.</p><a href="/profesionales">INICIAR UN PROYECTO <span>↗</span></a><small>EL CANAL DE CONTACTO DIRECTO SE HABILITARÁ AL CONFIRMAR LOS DATOS DE ATENCIÓN.</small></section>
    </main>
    <footer className="footer-v3"><a href="#inicio" className="footer-v3-logo"><img src="/images/boucrete-wordmark.png" alt="Boucrete" /></a><p>ARCHITECTURAL CONCRETE<br />MADE IN MEXICO.</p><a href="/coleccion">TIENDA / COLLECTION</a><a href="/recursos">RECURSOS</a><a href="/profesionales">A LA MEDIDA</a><a href="/manufactura">COLABORACIONES</a><a href="/#proyecto">CONTACTO</a></footer>
  </>;
}
