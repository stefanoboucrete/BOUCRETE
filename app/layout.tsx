import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Boucrete — Concrete Expressions',description:'Diseño y fabricación de elementos de concreto en Monterrey. Colección y piezas sobre diseño.',robots:{index:false,follow:false}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body>{children}</body></html>}
