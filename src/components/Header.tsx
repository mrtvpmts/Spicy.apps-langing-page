'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useQuote } from './QuoteContext'

export default function Header() {
    const { setOpen, cart } = useQuote()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Serviços', href: '#catalog' },
        { label: 'Sobre', href: '#about' },
        { label: 'Contato', href: '#contact' },
    ]

    return (
        <header className="fixed top-0 left-0 w-full z-[100] bg-[#060807]/92 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-2xl font-black italic tracking-tighter">SPICY.APPS</div>

                <nav className="hidden lg:flex gap-8">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-brand-red transition-colors">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button onClick={() => setOpen(true)} className="relative p-2 text-white/50 hover:text-brand-red transition-colors">
                        <ShoppingBag size={24} />
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-brand-red text-black text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full animate-pulse">
                                {cart.length}
                            </span>
                        )}
                    </button>

                    <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-white hover:text-brand-red">
                        <Menu size={24} />
                    </button>

                    <button onClick={() => setOpen(true)} className="hidden sm:block btn-stitch px-6 py-2 text-[10px] bg-brand-red text-black border-none hover:bg-white">
                        Orçamento
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[999] bg-black p-8 flex flex-col justify-center">
                        <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
                        {navItems.map(item => (
                            <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-4xl font-black uppercase italic my-4 hover:text-brand-red">
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
