'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface CartItem {
    product: any
    quantity: number
    volume: string
}

interface QuoteContextType {
    open: boolean
    setOpen: (open: boolean) => void
    success: boolean
    setSuccess: (success: boolean) => void
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (productTitle: string) => void
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined)

export function QuoteProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(false)
    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (item: CartItem) => {
        setCart(prev => [...prev, item])
    }

    const removeFromCart = (productTitle: string) => {
        setCart(prev => prev.filter(item => item.product.title !== productTitle))
    }

    return (
        <QuoteContext.Provider value={{ open, setOpen, success, setSuccess, cart, addToCart, removeFromCart }}>
            {children}
        </QuoteContext.Provider>
    )
}

export function useQuote() {
    const context = useContext(QuoteContext)
    if (!context) throw new Error('useQuote must be used within QuoteProvider')
    return context
}
