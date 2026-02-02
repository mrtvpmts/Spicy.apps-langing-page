'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Building2, User, Mail } from 'lucide-react'
import { useQuote } from './QuoteContext'

export default function ContactForm() {
    const { cart } = useQuote()
    const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Mesma lógica de envio do QuoteModal ou diferente se for apenas contato
        const waMessage = encodeURIComponent(`*CONTATO SITE*\nNome: ${formData.name}\nMensagem: ${formData.message}`)
        window.open(`https://wa.me/551100000000?text=${waMessage}`, '_blank')
    }

    return (
        <section id="contact" className="relative py-20 bg-[#060807] px-6 overflow-hidden">
            {/* Animated background gradients - VISUAL CONTINUITY */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#A855F7]/10 rounded-full blur-[100px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#10B981]/10 rounded-full blur-[100px]"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.3, 0.4],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 4.5,
                }}
            />

            <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[48px] p-12 relative z-10">
                <h2 className="text-impact !text-5xl text-center mb-12">Fale <span className="text-neon">Conosco</span></h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input required placeholder="Nome" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="p-4 bg-black/20 rounded-xl border border-white/10 text-white" />
                    <input required placeholder="Empresa" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className="p-4 bg-black/20 rounded-xl border border-white/10 text-white" />
                    <input required placeholder="Email" type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="col-span-2 p-4 bg-black/20 rounded-xl border border-white/10 text-white" />
                    <textarea rows={4} placeholder="Mensagem" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="col-span-2 p-4 bg-black/20 rounded-xl border border-white/10 text-white resize-none" />
                    <button type="submit" className="col-span-2 btn-stitch btn-stitch-primary py-5 text-xl">Enviar Mensagem <Send size={20} /></button>
                </form>
            </div>
        </section>
    )
}
