'use client';

import { useState, type CSSProperties } from 'react';
import type { BoucreteProduct } from '../../../lib/products';
import { useCart } from '../../components/store/cart';

const formats = [
  { name: 'SketchUp', ext: 'SKP', note: 'MODELO PARA ESTUDIO ESPACIAL' },
  { name: 'AutoCAD 2D', ext: 'DWG', note: 'VISTAS Y DIMENSIONES' },
  { name: 'AutoCAD 3D', ext: 'DWG', note: 'MODELO TRIDIMENSIONAL' },
  { name: 'Revit / BIM', ext: 'RVT', note: 'MODELO DE INFORMACIÓN' },
];
const finishSamples = [
  { name: 'Claro', color: '#dedbd3' },
  { name: 'Piedra', color: '#aaa9a1' },
  { name: 'Carbón', color: '#424344' },
];

export default function ProductExperience({ product }: { product: BoucreteProduct }) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(finishSamples[0].name);
  const [added, setAdded] = useState(false);
  const { add } = useCart();
  const current = product.images[activeImage];

  function addToOrder() {
    add({ slug: product.slug, name: product.name, family: product.family, image: current.src, finish: selectedFinish });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2400);
  }

  return <main className="product-page-v4">
    <div className="product-v4-crumb"><a href="/coleccion">COLLECTION</a><span>/</span><span>{product.family.toUpperCase()}</span><span className="product-status">FICHA DE MUESTRA</span></div>
    <section className="product-v4-main">
      <div className="product-v4-gallery">
        <div className="product-v4-image"><img src={current.src} alt={current.alt} /><span className="product-v4-image-label">{current.label}</span><span className="product-v4-image-note">IMAGEN DE REFERENCIA · NO ES FOTOGRAFÍA DE PRODUCTO BOUCRETE</span><button className="product-view-3d" type="button" onClick={() => document.getElementById('modelos-3d')?.scrollIntoView({ behavior: 'smooth' })}>EXPLORAR MODELO 3D <span>↓</span></button></div>
        <div className="product-v4-thumbs" aria-label="Imágenes del producto">{product.images.map((image, index) => <button className={activeImage === index ? 'is-active' : ''} key={image.src + index} onClick={() => setActiveImage(index)} aria-label={`Ver imagen ${index + 1}`} aria-pressed={activeImage === index}><img src={image.src} alt="" /></button>)}</div>
      </div>
      <aside className="product-v4-info">
        <p className="eyebrow">{product.number} / {product.family.toUpperCase()} · COLLECTION</p>
        <h1>{product.name.split(' ').slice(0, -1).join(' ')} <em>{product.name.split(' ').slice(-1)}</em></h1>
        <p className="product-v4-context">{product.context}</p>
        <p className="product-v4-description">{product.description}</p>
        <p className="product-v4-demo">PIEZA CONCEPTUAL DE MUESTRA. NOMBRE, DISPONIBILIDAD, ESPECIFICACIONES Y PRECIO POR VALIDAR CON BOUCRETE.</p>
        <div className="product-v4-variant"><div><h2>Acabado visual</h2><span>MUESTRA REFERENCIAL · NO ES UNA VARIANTE COMERCIAL CONFIRMADA</span></div><strong>{selectedFinish}</strong></div>
        <div className="product-v4-swatches">{finishSamples.map((finish) => <button key={finish.name} style={{ '--swatch': finish.color } as CSSProperties} className={selectedFinish === finish.name ? 'is-selected' : ''} onClick={() => setSelectedFinish(finish.name)} aria-label={`Muestra de color ${finish.name}`} aria-pressed={selectedFinish === finish.name}><i /></button>)}</div>
        <button className="product-v4-add" onClick={addToOrder}><span>{added ? 'AGREGADO AL PEDIDO' : 'AÑADIR AL PEDIDO DE COTIZACIÓN'}</span><b>{added ? '✓' : '＋'}</b></button>
        <p className="product-v4-trade">La tienda está en preparación. El pedido de muestra sirve para reunir piezas en una solicitud de cotización.</p>
        <div className="product-v4-accordion">
          <details open><summary>Dimensiones y peso <span>+</span></summary><p>Medidas, peso, tolerancias y embalaje por confirmar con la ficha técnica aprobada.</p></details>
          <details><summary>Material y acabados <span>+</span></summary><p>Composición, tecnología, acabados, colores y sellado se confirmarán por modelo. Las muestras de color mostradas son solo visuales.</p></details>
          <details><summary>Uso y cuidados <span>+</span></summary><p>Uso recomendado, instalación, limpieza y mantenimiento: pendiente de especificación técnica.</p></details>
          <details><summary>Fabricación y entrega <span>+</span></summary><p>Disponibilidad, plazo de producción, envío, instalación y garantía deben confirmarse con el equipo BOUCRETE.</p></details>
        </div>
        <a className="product-v4-pro-link" href="/profesionales">¿ERES ARQUITECTO O DISEÑADOR? <span>↗</span><small>Explora recursos y desarrolla esta idea para tu proyecto.</small></a>
      </aside>
    </section>

    <section id="modelos-3d" className="product-v4-models">
      <div className="product-v4-model-copy"><p className="eyebrow">RECURSOS PARA PROFESIONALES</p><h2>La pieza en<br /><em>tu proyecto.</em></h2><p>Integra los modelos de producto en planos, presentaciones y documentación arquitectónica. Cada descarga se habilitará al validar el archivo y su escala.</p><span className="product-v4-3d-mark">3D</span></div>
      <div className="product-v4-format-list">{formats.map((format) => <article key={format.name}><span className="product-v4-file-icon">↓</span><div><h3>{format.name}<small>.{format.ext}</small></h3><p>{format.note}</p></div><button type="button" disabled>POR INTEGRAR</button></article>)}<p>Archivos de muestra no incluidos. Al recibir modelos autorizados y revisados, se activarán aquí las descargas correspondientes a esta pieza.</p></div>
      <div className="product-v4-viewer"><div className="viewer-shape" aria-hidden="true"><span /><i /><b /></div><span>VISTA 3D DEL MODELO</span><p>ESPACIO PREPARADO PARA EL ARCHIVO DEL PRODUCTO</p></div>
    </section>

    <section className="product-v4-story"><figure><img src={product.images[1].src} alt={product.images[1].alt} /><figcaption>IMAGEN DE REFERENCIA · SE REEMPLAZARÁ CON FOTOGRAFÍA PROPIA</figcaption></figure><div><p className="eyebrow">DISEÑO · DESARROLLO · MANUFACTURA</p><h2>El concreto toma<br /><em>una nueva forma.</em></h2><p>{product.story}</p><a href="/manufactura">CONOCE NUESTRO PROCESO ↗</a></div></section>

    <section className="product-v4-related"><div><p className="eyebrow">EXPLORA LA COLECCIÓN</p><h2>Una idea puede<br /><em>tomar forma.</em></h2></div><a href="/coleccion">VOLVER A TODOS LOS MODELOS DE MUESTRA ↗</a><p>REFERENCIAS VISUALES Y CONTENIDO EDITORIAL DE MUESTRA. SUSTITUIR CON CATÁLOGO, IMÁGENES Y RECURSOS AUTORIZADOS DE BOUCRETE.</p></section>
  </main>;
}
