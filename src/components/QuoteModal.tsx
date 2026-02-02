'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuote } from './QuoteContext'
import { X, CheckCircle, Send, Loader2, Phone } from 'lucide-react'

export default function QuoteModal() {
    const { open, setOpen, success, setSuccess, cart, removeFromCart } = useQuote()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({ name: '', company: '', email: '', whatsapp: '', segment: '', message: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulação de envio
        setTimeout(() => {
            const waMessage = encodeURIComponent(`*NOVO ORÇAMENTO*\n\nNome: ${formData.name}\nEmpresa: ${formData.company}`)
            window.open(`https://wa.me/551100000000?text=${waMessage}`, '_blank')
            setSuccess(true)
            setIsSubmitting(false)
        }, 1500)
    }

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center p-4">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-[#0b0f0d] border border-white/10 rounded-[32px] p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
                        <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white/30 hover:text-white"><X size={20} /></button>

                        {!success ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-3xl font-black italic uppercase text-white">Solicitar <span className="text-neon">Cotação</span></h3>
                                {/* Lista de Itens */}
                                {cart.length > 0 && (
                                    <div className="bg-white/5 rounded-xl p-4 space-y-2">
                                        <h4 className="text-[10px] uppercase font-bold text-white/50">Itens ({cart.length})</h4>
                                        {cart.map((item, i) => (
                                            <div key={i} className="flex justify-between text-sm text-white border-b border-white/5 pb-2">
                                                <span>{item.product.title}</span>
                                                <div className="flex gap-2"><span>x{item.quantity}</span><button type="button" onClick={() => removeFromCart(item.product.title)}><X size={14} /></button></div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="space-y-4">
                                    <input required placeholder="Nome" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full p-4 bg-white/5 rounded-xl border border-white/10 text-white" />
                                    <input required placeholder="Empresa" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className="w-full p-4 bg-white/5 rounded-xl border border-white/10 text-white" />
                                    <input required placeholder="Email" type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full p-4 bg-white/5 rounded-xl border border-white/10 text-white" />
                                </div>
                                <button disabled={isSubmitting} className="btn-stitch btn-stitch-primary w-full py-4 text-sm font-black uppercase">
                                    {isSubmitting ? 'Enviando...' : 'Finalizar Solicitação'}
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-10 space-y-6">
                                <CheckCircle size={80} className="text-brand-red mx-auto" />
                                <h3 className="text-3xl font-black text-white uppercase italic">Sucesso!</h3>
                                <button onClick={() => setOpen(false)} className="btn-stitch w-full py-3">Fechar</button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
