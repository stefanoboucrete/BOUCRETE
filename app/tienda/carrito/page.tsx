'use client';

import { useState, type FormEvent } from 'react';
import SiteHeader from '../../components/site-header';
import { useCart } from '../../components/store/cart';

export default function CartPage() {
  const { lines, remove, setQuantity, clear } = useCart();
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');

  async function copyRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const request = [
      'BOUCRETE / SOLICITUD DE INFORMACIÓN', `Nombre: ${name}`, `Email: ${email}`, `Proyecto: ${project || 'Por definir'}`, '',
      'Piezas de interés:', ...lines.map((line) => `• ${line.name} — ${line.family} — ${line.finish} — Cantidad: ${line.quantity}`), '',
      'Solicito información sobre disponibilidad, precio, fabricación y envío. Esta solicitud se creó desde una vista de tienda en preparación.',
    ].join('\n');
    try { await navigator.clipboard.writeText(request); setCopied(true); window.setTimeout(() => setCopied(false), 3500); }
    catch { window.prompt('Copia tu solicitud:', request); }
  }

  return <>
    <div className="review">BOUCRETE / TU PEDIDO <a href="/coleccion">SEGUIR EXPLORANDO ↗</a></div>
    <SiteHeader />
    <main className="cart-page-v1">
      <div className="cart-heading"><p className="eyebrow">TIENDA / SOLICITUD DE COTIZACIÓN</p><h1>Tu <em>pedido.</em></h1><p>Reúne las piezas que te interesan y prepara una solicitud para el equipo BOUCRETE.</p></div>
      {lines.length === 0 ? <div className="cart-empty"><span>0</span><h2>Todavía no hay piezas en tu pedido.</h2><p>Explora los modelos de muestra para comenzar una solicitud.</p><a className="product-v4-add" href="/coleccion">EXPLORAR LA COLECCIÓN ↗</a></div> : <div className="cart-content-v1">
        <section className="cart-lines-v1"><div className="cart-lines-head"><span>PIEZA / MUESTRA</span><span>CANTIDAD</span><span></span></div>{lines.map((line) => { const key = `${line.slug}:${line.finish}`; return <article className="cart-line-v1" key={key}><img src={line.image} alt="Imagen de referencia" /><div className="cart-line-copy"><p className="eyebrow">{line.family.toUpperCase()} · MUESTRA</p><h2>{line.name}</h2><span>Acabado de referencia: {line.finish}</span><button onClick={() => remove(key)}>ELIMINAR</button></div><div className="cart-quantity"><button onClick={() => setQuantity(key, line.quantity - 1)} aria-label="Reducir cantidad">−</button><span>{line.quantity}</span><button onClick={() => setQuantity(key, line.quantity + 1)} aria-label="Aumentar cantidad">+</button></div><span className="cart-quote-only">A COTIZAR</span></article>; })}<button className="cart-clear" onClick={clear}>VACIAR PEDIDO</button></section>
        <aside className="cart-form-v1"><p className="eyebrow">SIGUIENTE PASO</p><h2>Prepara tu<br /><em>solicitud.</em></h2><p>Completa tus datos y copia el resumen para enviarlo al equipo BOUCRETE.</p><form onSubmit={copyRequest}><label>Nombre<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Tu nombre" /></label><label>Correo electrónico<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="nombre@correo.com" /></label><label>Proyecto o comentario<textarea value={project} onChange={(event) => setProject(event.target.value)} placeholder="Ciudad, tipo de proyecto o dudas" /></label><button className="product-v4-add" type="submit">{copied ? 'SOLICITUD COPIADA ✓' : 'COPIAR SOLICITUD ↗'}</button></form><small>ESTA VERSIÓN NO PROCESA PAGOS NI CONFIRMA COMPRAS. PRECIOS, ENVÍO Y CONTACTO OFICIAL SE AGREGARÁN AL HABILITAR LA TIENDA.</small></aside>
      </div>}
    </main>
    <footer className="footer-v3"><a href="/"><img src="/images/boucrete-wordmark.png" alt="Boucrete" /></a><p>ARCHITECTURAL CONCRETE<br />MADE IN MEXICO.</p><a href="/coleccion">COLLECTION</a><a href="/profesionales">A LA MEDIDA</a><a href="/">INICIO ↑</a></footer>
  </>;
}
