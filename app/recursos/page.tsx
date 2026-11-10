import SiteHeader from '../components/site-header';

export const metadata = {
  title: 'Recursos para profesionales — BOUCRETE',
  description: 'Modelos 3D y recursos técnicos BOUCRETE para arquitectos y diseñadores.',
};

const resources = [
  { title: 'Modelos 3D', formats: 'SketchUp · Revit / BIM', detail: 'Modelos de referencia para integrar piezas BOUCRETE en el desarrollo del proyecto.' },
  { title: 'Dibujos CAD', formats: 'AutoCAD 2D · AutoCAD 3D', detail: 'Vistas y geometrías de producto, disponibles según cada modelo.' },
  { title: 'Fichas técnicas', formats: 'Material · Dimensiones · Acabados', detail: 'Información técnica específica y validada para cada producto.' },
];

export default function Recursos() {
  return <>
    <div className="review">BOUCRETE / RECURSOS <a href="/">INICIO ↗</a></div>
    <SiteHeader />
    <main className="resources-page">
      <section className="resources-hero"><p className="eyebrow">RECURSOS PARA ARQUITECTURA Y DISEÑO</p><h1>Diseña con<br /><em>la pieza en contexto.</em></h1><p>Consulta los recursos disponibles para considerar productos BOUCRETE en tus planos, modelado y documentación de proyecto.</p></section>
      <section className="resources-list"><p className="eyebrow">ARCHIVOS Y DOCUMENTACIÓN</p>{resources.map((item, i) => <article key={item.title}><span>0{i + 1}</span><div><h2>{item.title}</h2><p>{item.detail}</p></div><div className="resources-formats"><span>{item.formats}</span><b>DISPONIBILIDAD POR PRODUCTO</b></div></article>)}</section>
      <section className="resources-download"><div><p className="eyebrow">MODELOS 3D / CAD</p><h2>Los archivos estarán<br /><em>en cada ficha.</em></h2></div><div><p>Entra a la ficha del producto para consultar sus formatos descargables, dimensiones y especificaciones. Cada archivo se publicará después de validar su escala, unidades y versión.</p><a className="text-link" href="/coleccion">EXPLORAR COLLECTION <span>↗</span></a></div></section>
      <section className="resources-material"><p className="eyebrow">EL MATERIAL</p><h2>Concreto arquitectónico.<br /><em>Posibilidades en cada pieza.</em></h2><p>El concreto puede tomar forma, textura e identidad en diálogo con el espacio. Las especificaciones de cada material y sistema se presentarán en su contexto de producto.</p><p className="resources-gfrc">GFRC se incluirá estratégicamente en fichas y argumentos técnicos cuando su uso esté confirmado para la pieza.</p></section>
    </main>
    <footer><a href="/"><img src="/images/boucrete-wordmark.png" alt="Boucrete" /></a><p>ARCHITECTURAL CONCRETE<br />MADE IN MEXICO.</p><a href="/coleccion">TIENDA / COLLECTION</a><a href="/manufactura">COLABORACIONES</a><a href="/#proyecto">CONTACTO ↑</a></footer>
  </>;
}
