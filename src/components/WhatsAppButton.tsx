'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X } from 'lucide-react'

export default function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed bottom-32 right-6 z-[998] bg-[#0a0d0b] border border-white/10 rounded-2xl p-4 shadow-2xl min-w-[220px]">
                        <button onClick={() => window.open('https://wa.me/551100000000', '_blank')} className="w-full text-left p-2 text-white hover:text-brand-red font-bold text-sm">Falar com Vendas</button>
                        <button onClick={() => window.open('https://wa.me/551100000000', '_blank')} className="w-full text-left p-2 text-white hover:text-brand-red font-bold text-sm">Suporte Técnico</button>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button onClick={() => setIsOpen(!isOpen)} whileHover={{ scale: 1.1 }} className="fixed bottom-6 right-6 z-[999] w-16 h-16 bg-brand-red text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(57,255,20,0.5)]">
                {isOpen ? <X size={28} /> : <MessageSquare size={28} fill="currentColor" />}
            </motion.button>
        </>
    )
}
