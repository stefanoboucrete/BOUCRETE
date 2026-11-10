import SiteHeader from '../../components/site-header';

export const metadata = {
  title: 'Ficha de producto — BOUCRETE',
  description: 'Vista de revisión para la futura ficha individual de los productos BOUCRETE.',
};

const gallery = [
  { src: '/images/lavabo.jpg', alt: 'Imagen de referencia visual; no corresponde a un modelo confirmado de BOUCRETE.' },
  { src: '/images/detalle.jpg', alt: 'Imagen de referencia visual de textura y detalle.' },
  { src: '/images/cubierta.jpg', alt: 'Imagen de referencia visual de una superficie de concreto.' },
  { src: '/images/exterior.jpg', alt: 'Imagen de referencia visual en un espacio exterior.' },
];

const modelFormats = [
  { name: 'SketchUp', ext: '.SKP', note: 'MODELO PARA ESTUDIO ESPACIAL', file: null as string | null, size: null as string | null },
  { name: 'AutoCAD 2D', ext: '.DWG', note: 'VISTAS Y DIMENSIONES', file: null as string | null, size: null as string | null },
  { name: 'AutoCAD 3D', ext: '.DWG', note: 'MODELO TRIDIMENSIONAL', file: null as string | null, size: null as string | null },
  { name: 'BIM / Revit', ext: '.RVT', note: 'MODELO PARA DOCUMENTACIÓN BIM', file: null as string | null, size: null as string | null },
];

export default function FichaProducto() {
  return <>
    <div className="review">BOUCRETE / PLANTILLA DE PRODUCTO <a href="/coleccion">VOLVER A COLLECTION ↗</a></div>
    <SiteHeader />
    <main className="product-detail-page">
      <div className="product-breadcrumb"><a href="/coleccion">COLLECTION</a><span>/</span><span>FICHA INDIVIDUAL</span><span className="product-status">PLANTILLA DE REVISIÓN</span></div>
      <section className="product-detail-grid">
        <div className="product-gallery" aria-label="Galería visual de referencia">
          {gallery.map((image, i) => <figure className={'product-gallery-image gallery-' + (i + 1)} key={image.src}><img src={image.src} alt={image.alt} /><figcaption>IMAGEN DE REFERENCIA · NO ES UN PRODUCTO CONFIRMADO</figcaption></figure>)}
        </div>
        <aside className="product-information">
          <p className="eyebrow">BOUCRETE / COLLECTION</p>
          <h1>Nombre del<br /><em>producto.</em></h1>
          <p className="product-intro">Un espacio para presentar en pocas líneas la intención de diseño, la forma y la relación de esta pieza con la arquitectura.</p>
          <div className="product-data-pending">MODELO, DESCRIPCIÓN Y DISPONIBILIDAD POR CONFIRMAR</div>
          <a className="product-cta" href="/profesionales">CONSULTAR SOBRE ESTA PIEZA <span>↗</span></a>
          <section className="product-models" aria-labelledby="product-models-title">
            <div className="product-models-heading"><div><p className="eyebrow">RECURSOS PARA PROFESIONALES</p><h2 id="product-models-title">Modelos 3D<br /><em>para tu proyecto.</em></h2></div><span className="model-cube" aria-hidden="true">3D</span></div>
            <p className="product-models-intro">Descarga archivos de referencia para integrar la pieza en tus planos, modelado y presentaciones arquitectónicas.</p>
            <div className="model-download-list">{modelFormats.map((format) => <article className="model-download-item" key={format.name}>
              <div className="model-file-icon" aria-hidden="true">↓</div>
              <div className="model-file-copy"><h3>{format.name} <span>{format.ext}{format.size ? ` · ${format.size}` : ''}</span></h3><p>{format.note}</p></div>
              {format.file ? <a className="model-file-action" href={format.file} download>DESCARGAR</a> : <button type="button" disabled aria-label={`${format.name}: archivo 3D por agregar`}>POR AGREGAR</button>}
            </article>)}</div>
            <p className="product-models-note">Los archivos se habilitarán por producto una vez que BOUCRETE valide el modelo, las dimensiones, las unidades y el formato de entrega.</p>
          </section>
          <div className="product-accordion">
            <details open><summary>Acabados y color <span>+</span></summary><p>Acabados, tonos y variaciones disponibles: pendientes de confirmar para cada modelo.</p></details>
            <details><summary>Dimensiones y peso <span>+</span></summary><p>Medidas, peso y tolerancias: pendientes de confirmar con la ficha técnica del producto.</p></details>
            <details><summary>Material y cuidados <span>+</span></summary><p>Especificación del material, instalación, limpieza y mantenimiento: por definir.</p></details>
            <details><summary>Entrega y especificaciones <span>+</span></summary><p>Plazo, envío, instalación y recursos descargables se agregarán cuando BOUCRETE los confirme.</p></details>
          </div>
          <p className="product-note">El concreto es un material natural. La descripción de sus variaciones debe ajustarse al acabado real de cada producto.</p>
        </aside>
      </section>
      <section className="product-story"><p className="eyebrow">DISEÑO · DESARROLLO · MANUFACTURA</p><h2>El carácter de una pieza<br /><em>está en cada detalle.</em></h2><p>Este espacio podrá ampliar la historia del producto, su proceso de desarrollo y cómo se integra a un proyecto arquitectónico, con contenido e imágenes propios autorizados.</p><div className="product-story-label">FOTOGRAFÍA DE PRODUCTO · PROCESO · DETALLE</div></section>
      <section className="product-related"><div><p className="eyebrow">SIGUIENTE PASO</p><h2>¿Una pieza para<br /><em>tu proyecto?</em></h2></div><div><p>Comparte el contexto, las dimensiones aproximadas y el calendario de tu proyecto. El equipo de BOUCRETE podrá orientar la conversación.</p><a className="product-cta" href="/profesionales">INICIAR UNA CONVERSACIÓN <span>↗</span></a></div></section>
      <p className="product-disclaimer">VISTA CONCEPTUAL DE LA FICHA. LAS IMÁGENES Y LOS DATOS MOSTRADOS SON REFERENCIAS DE DISEÑO; NO REPRESENTAN UN PRODUCTO, PRECIO, ACABADO O ESPECIFICACIÓN CONFIRMADOS.</p>
    </main>
    <footer><a href="/"><img src="/images/boucrete-wordmark.png" alt="Boucrete" /></a><p>ARCHITECTURAL CONCRETE<br />MADE IN MEXICO.</p><a href="/coleccion">COLLECTION</a><a href="/manufactura">MANUFACTURING</a><a href="/">INICIO ↑</a></footer>
  </>;
}
