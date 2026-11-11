'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type CartLine = { slug: string; name: string; family: string; image: string; quantity: number; finish: string };
type CartContextValue = { lines: CartLine[]; add: (line: Omit<CartLine, 'quantity'>) => void; remove: (slug: string) => void; setQuantity: (slug: string, quantity: number) => void; clear: () => void };
const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'boucrete-order-v1';

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  useEffect(() => {
    try { const saved = localStorage.getItem(STORAGE_KEY); if (saved) setLines(JSON.parse(saved)); } catch { localStorage.removeItem(STORAGE_KEY); }
  }, []);
  useEffect(() => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(lines)); } catch { /* private browsing can block storage */ } }, [lines]);
  const add = useCallback((line: Omit<CartLine, 'quantity'>) => setLines((current) => {
    const match = current.find((item) => item.slug === line.slug && item.finish === line.finish);
    return match ? current.map((item) => item === match ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...line, quantity: 1 }];
  }), []);
  const remove = useCallback((key: string) => setLines((current) => current.filter((item) => `${item.slug}:${item.finish}` !== key)), []);
  const setQuantity = useCallback((key: string, quantity: number) => setLines((current) => quantity < 1 ? current.filter((item) => `${item.slug}:${item.finish}` !== key) : current.map((item) => `${item.slug}:${item.finish}` === key ? { ...item, quantity } : item)), []);
  const clear = useCallback(() => setLines([]), []);
  const value = useMemo(() => ({ lines, add, remove, setQuantity, clear }), [lines, add, remove, setQuantity, clear]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() { const value = useContext(CartContext); if (!value) throw new Error('useCart debe utilizarse dentro de CartProvider'); return value; }

export function CartIndicator() {
  const { lines } = useCart();
  const count = lines.reduce((total, line) => total + line.quantity, 0);
  return <a className="store-cart-link" href="/tienda/carrito" aria-label={`Abrir pedido, ${count} piezas`}>PEDIDO <span>{count.toString().padStart(2, '0')}</span> ↗</a>;
}
