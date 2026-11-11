const spaces = [
  { label: 'Residencial', id: 'aplicacion-residencial' },
  { label: 'Comercial', id: 'aplicacion-comercial' },
  { label: 'Urbano', id: 'aplicacion-urbano' },
];

const families = [
  { label: 'Mobiliario', id: 'familia-mobiliario' },
  { label: 'Firepits', id: 'familia-firepits' },
  { label: 'Macetas', id: 'familia-macetas' },
  { label: 'Lavabos', id: 'familia-lavabos' },
  { label: 'Superficies', id: 'familia-superficies' },
  { label: 'Objetos arquitectónicos', id: 'familia-objetos-arquitectonicos' },
];

export default function SiteHeader() {
  return <header className="site-header">
    <a className="brand" href="/" aria-label="Boucrete, inicio"><img src="/images/boucrete-wordmark.png" alt="Boucrete" /></a>
    <nav className="desktop-nav" aria-label="Navegación principal">
      <details className="nav-catalog">
        <summary>PRODUCTOS <span aria-hidden="true">⌄</span></summary>
        <div className="mega-menu">
          <div className="mega-menu-intro"><span>BOUCRETE / COLLECTION</span><p>Explora por espacio o por tipo de pieza.</p></div>
          <div className="mega-menu-columns">
            <section><h2>POR ESPACIO</h2>{spaces.map((item) => <a key={item.id} href={`/#${item.id}`}>{item.label}<span>↗</span></a>)}</section>
            <section><h2>POR TIPO DE PIEZA</h2>{families.map((item) => <a key={item.id} href={`/coleccion#${item.id}`}>{item.label}<span>↗</span></a>)}</section>
            <section className="mega-menu-professional"><h2>PARA PROFESIONALES</h2><a href="/profesionales#disenadores">Diseñadores<span>↗</span></a><a href="/manufactura#distribuidores">Distribuidores<span>↗</span></a><a href="/manufactura#colaboraciones">Work with us<span>↗</span></a><p>Una pieza de colección o un desarrollo creado para tu proyecto.</p></section>
          </div>
          <a className="mega-menu-all" href="/coleccion">VER TODA LA COLECCIÓN <span>↗</span></a>
        </div>
      </details>
      <a href="/recursos">RECURSOS</a><a href="/profesionales">A LA MEDIDA</a><a href="/manufactura#colaboraciones">COLABORACIONES</a><a href="/#estudio">NOSOTROS</a><a href="/coleccion">TIENDA</a><CartIndicator />
    </nav>
    <a className="header-link desktop-contact" href="/#proyecto">CONTACTO ↗</a>
    <details className="mobile-nav">
      <summary aria-label="Abrir o cerrar menú">
        <span className="mobile-nav-icon" aria-hidden="true"><i /><i /><i /></span>
        <span className="mobile-nav-label">MENÚ</span>
      </summary>
      <div className="mobile-nav-panel">
        <div><p className="eyebrow">PRODUCTOS / POR ESPACIO</p>{spaces.map(item => <a key={item.id} href={`/#${item.id}`}>{item.label}<span>↗</span></a>)}</div>
        <div><p className="eyebrow">PRODUCTOS / POR TIPO</p>{families.map(item => <a key={item.id} href={`/coleccion#${item.id}`}>{item.label}<span>↗</span></a>)}</div>
        <div className="mobile-nav-links"><a href="/recursos">RECURSOS</a><a href="/profesionales">A LA MEDIDA</a><a href="/manufactura#colaboraciones">COLABORACIONES / WORK WITH US</a><a href="/#estudio">NOSOTROS</a><a href="/coleccion">TIENDA</a><CartIndicator /><a href="/#proyecto">CONTACTO ↗</a></div>
      </div>
    </details>
  </header>;
}
import { CartIndicator } from './store/cart';
