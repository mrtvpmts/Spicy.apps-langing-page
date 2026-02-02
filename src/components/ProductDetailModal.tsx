'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Shield, Info, Minus, Plus, ShoppingCart, Download, Hand, Glasses, Shirt, Footprints, HardHat } from 'lucide-react'
import { useQuote } from './QuoteContext'

interface ProductDetailModalProps {
    product: any
    isOpen: boolean
    onClose: () => void
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
    const { setOpen: setQuoteOpen, addToCart } = useQuote()
    const [quantity, setQuantity] = useState(1)
    const [volume, setVolume] = useState('20L')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    if (!mounted) return null

    const handleAddToCart = () => {
        addToCart({ product, quantity, volume })
        onClose()
        setQuoteOpen(true)
    }

    const modalContent = (
        <AnimatePresence>
            {isOpen && product && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 isolate">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/90 backdrop-blur-xl" style={{ zIndex: -1 }} />
                    <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-6xl bg-[#0b0f0d] border border-white/10 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(57,255,20,0.1)] flex flex-col md:flex-row max-h-[90vh] md:h-[85vh]">
                        <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white/50 hover:text-white transition-all group">
                            <X size={20} className="group-hover:rotate-90 transition-transform duration-300 md:w-6 md:h-6" />
                        </button>
                        {/* Imagem */}
                        <div className="md:w-1/2 relative bg-[#080a09] flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden border-b md:border-b-0 md:border-r border-white/5 min-h-[250px] md:min-h-full shrink-0">
                            <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />
                            <div className="relative z-10 space-y-6 md:space-y-12 flex flex-col items-center">
                                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="relative">
                                    <div className="w-64 h-64 bg-white/5 rounded-full flex items-center justify-center text-white/10 text-4xl font-black">IMG</div>
                                </motion.div>
                                <div className="text-center space-y-2 hidden md:block">
                                    <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase">{product.title}</h2>
                                </div>
                            </div>
                        </div>
                        {/* Detalhes */}
                        <div className="md:w-1/2 flex flex-col bg-[#0b0f0d] relative h-full overflow-hidden">
                            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 space-y-6">
                                <div className="space-y-4 pt-2 md:pt-4">
                                    <p className="text-white/70 text-xs md:text-sm leading-relaxed font-medium">{product.description}</p>
                                    <div className="space-y-0 border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">
                                        <div className="flex justify-between p-3 border-b border-white/5"><span className="text-white/40 text-[10px]">DILUIÇÃO</span><span className="text-white text-xs font-bold">{product.specs.dilution}</span></div>
                                        <div className="flex justify-between p-3 border-b border-white/5"><span className="text-white/40 text-[10px]">PH</span><span className="text-white text-xs font-bold">{product.specs.ph}</span></div>
                                    </div>
                                </div>
                            </div>
                            {/* Ações */}
                            <div className="p-4 md:p-10 border-t border-white/10 bg-[#0b0f0d] z-20 space-y-4 md:space-y-6 shadow-[0_-20px_40px_rgba(0,0,0,0.5)] shrink-0">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="flex items-center gap-2 md:gap-3 bg-white/5 rounded-xl p-1.5 md:p-2 border border-white/10">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center text-white"><Minus size={14} /></button>
                                        <span className="font-mono text-base font-bold text-brand-red min-w-[2ch] text-center">{quantity}</span>
                                        <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center text-white"><Plus size={14} /></button>
                                    </div>
                                    <button onClick={handleAddToCart} className="btn-stitch btn-stitch-primary flex-1 py-3 text-xs uppercase tracking-widest flex items-center justify-center gap-2">Adicionar <ShoppingCart size={16} /></button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )

    return createPortal(modalContent, document.body)
}
