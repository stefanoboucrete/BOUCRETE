import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/site-header';
import ProductExperience from './product-experience';
import { findProduct, products } from '../../../lib/products';

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  return product ? { title: `${product.name} — BOUCRETE`, description: product.description } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();
  return <>
    <div className="review">BOUCRETE / COLLECTION <a href="/coleccion">VER COLECCIÓN ↗</a></div>
    <SiteHeader />
    <ProductExperience product={product} />
    <footer className="footer-v3"><a href="/"><img src="/images/boucrete-wordmark.png" alt="Boucrete" /></a><p>ARCHITECTURAL CONCRETE<br />MADE IN MEXICO.</p><a href="/coleccion">COLLECTION</a><a href="/recursos">RECURSOS 3D / CAD</a><a href="/">INICIO ↑</a></footer>
  </>;
}
