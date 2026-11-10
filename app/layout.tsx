import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'BOUCRETE — Architectural Concrete',description:'Concrete, Beyond Construction. Design · Develop · Manufacture. Elementos de concreto arquitectónico diseñados y fabricados en México.',icons:{icon:'/images/boucrete-wordmark.png',shortcut:'/images/boucrete-wordmark.png'},robots:{index:false,follow:false}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body>{children}</body></html>}
