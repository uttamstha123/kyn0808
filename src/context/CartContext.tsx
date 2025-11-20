import { createContext, useContext, useState, useCallback, ReactNode } from "react"
import type { Product } from "@/src/data/products"

export type CartItem = {
  product: Product
  quantity: number
  selectedSize: string
  selectedColor?: string
}

type CartContextType = {
  items: CartItem[]
  addToCart: (product: Product, quantity: number, size: string, color?: string) => void
  removeFromCart: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = useCallback((product: Product, quantity: number, size: string, color?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      )

      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      }

      return [...prev, { product, quantity, selectedSize: size, selectedColor: color }]
    })
  }, [])

  const removeFromCart = useCallback((productId: string, size: string) => {
    setItems((prev) => prev.filter((item) => !(item.product.id === productId && item.selectedSize === size)))
  }, [])

  const updateQuantity = useCallback((productId: string, size: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedSize === size ? { ...item, quantity } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }, [items])

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
