'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Zap, TrendingUp, Shield } from 'lucide-react'

interface ServiceModalProps {
    service: any
    isOpen: boolean
    onClose: () => void
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
    if (!service) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal with GLASSMORPHISM */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                        onClick={onClose}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto backdrop-blur-3xl bg-gradient-to-br from-[#1a1a1a]/80 via-[#0a0a0a]/70 to-[#1a1a1a]/80 border-2 border-white/10 rounded-[32px] shadow-2xl"
                            style={{
                                boxShadow: '0 8px 32px 0 rgba(255, 51, 51, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
                            }}
                        >
                            {/* Glassmorphism overlay effect */}
                            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all group"
                            >
                                <X className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                            </button>

                            {/* Content Grid */}
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Left side - Image/Visual */}
                                <div className="relative h-full min-h-[400px] md:min-h-[600px] overflow-hidden rounded-l-[32px] bg-gradient-to-br from-[#FF3333]/20 via-[#FF6B35]/10 to-[#FFB800]/20">
                                    {/* Animated gradient */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-[#FF3333]/30 to-transparent"
                                        animate={{
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    />

                                    {/* Premium Image based on service */}
                                    <div className="relative h-full flex flex-col items-center justify-center p-12">
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.2, type: 'spring' }}
                                            className="relative w-full h-full max-w-md"
                                        >
                                            {service.id === 'ai' && (
                                                <img
                                                    src="C:/Users/HOME/.gemini/antigravity/brain/1c7ced24-80bc-4074-a726-e92bae219fa1/uploaded_media_0_1770029598521.jpg"
                                                    alt="AI Solutions"
                                                    className="w-full h-full object-contain drop-shadow-2xl"
                                                />
                                            )}
                                            {service.id === 'design' && (
                                                <img
                                                    src="C:/Users/HOME/.gemini/antigravity/brain/1c7ced24-80bc-4074-a726-e92bae219fa1/uploaded_media_1_1770029598521.jpg"
                                                    alt="Creative Studio"
                                                    className="w-full h-full object-contain drop-shadow-2xl"
                                                />
                                            )}
                                            {service.id === 'automation' && (
                                                <img
                                                    src="C:/Users/HOME/.gemini/antigravity/brain/1c7ced24-80bc-4074-a726-e92bae219fa1/uploaded_media_2_1770029598521.jpg"
                                                    alt="Network Connections"
                                                    className="w-full h-full object-contain drop-shadow-2xl"
                                                />
                                            )}
                                            {service.id === 'web' && (
                                                <img
                                                    src="C:/Users/HOME/.gemini/antigravity/brain/1c7ced24-80bc-4074-a726-e92bae219fa1/uploaded_media_3_1770029598521.jpg"
                                                    alt="UI Design Layers"
                                                    className="w-full h-full object-contain drop-shadow-2xl"
                                                />
                                            )}
                                            {service.id === 'erp-crm' && (
                                                <img
                                                    src="C:/Users/HOME/.gemini/antigravity/brain/1c7ced24-80bc-4074-a726-e92bae219fa1/uploaded_media_4_1770029598521.jpg"
                                                    alt="ERP Dashboard"
                                                    className="w-full h-full object-contain drop-shadow-2xl"
                                                />
                                            )}
                                            {service.id === 'mobile' && (
                                                <img
                                                    src="C:/Users/HOME/.gemini/antigravity/brain/1c7ced24-80bc-4074-a726-e92bae219fa1/uploaded_media_1770029601973.jpg"
                                                    alt="Mobile App"
                                                    className="w-full h-full object-contain drop-shadow-2xl"
                                                />
                                            )}
                                        </motion.div>

                                        <div className="text-center mt-8">
                                            <h2 className="text-4xl font-black text-white mb-4">
                                                {service.title}
                                            </h2>
                                            <p className="text-lg text-white/60 max-w-md">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side - Content */}
                                <div className="p-8 md:p-12 relative">
                                    {/* Description */}
                                    <div className="mb-8">
                                        <p className="text-white/80 leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            {service.details}
                                        </p>
                                    </div>

                                    {/* Technologies & Focus */}
                                    <div className="mb-8">
                                        <h3 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">
                                            Tecnologias & Foco
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {service.techs.map((tech: string, idx: number) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className="px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-white/80 text-sm"
                                                >
                                                    {tech}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${service.title}`)
                                            window.open(`https://wa.me/551100000000?text=${message}`, '_blank')
                                        }}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-[#FF3333] to-[#FF6B35] rounded-full text-white font-bold text-lg shadow-lg shadow-[#FF3333]/50 hover:shadow-xl hover:shadow-[#FF3333]/70 transition-all"
                                        style={{
                                            background: service.color,
                                        }}
                                    >
                                        Solicitar Orçamento →
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
