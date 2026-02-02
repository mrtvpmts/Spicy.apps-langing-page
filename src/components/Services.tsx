'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ServiceModal from './ServiceModal'
import { services } from '@/data/services'

export default function Services() {
    const [selectedService, setSelectedService] = useState<any>(null)

    return (
        <section className="relative bg-[#060807] py-24 px-6 overflow-hidden">
            {/* Animated background gradients */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF3333]/10 rounded-full blur-[100px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#FFB800]/10 rounded-full blur-[100px]"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 4,
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
                        Nossos Serviços <span className="text-[#FF3333]">Exclusivos</span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            onClick={() => setSelectedService(service)}
                            className="group relative h-full cursor-pointer"
                        >
                            {/* Animated gradient border wrapper */}
                            <div className="glass-card-wrapper absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-[#FF3333]/40 via-[#FF6B35]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                            {/* Glass card */}
                            <div className="glass-card relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden transition-all duration-500 group-hover:border-[#FF3333]/40 group-hover:bg-white/10">
                                {/* Animated glow orb */}
                                <div className="glass-orb absolute w-32 h-32 bg-gradient-to-br from-[#FF3333]/30 to-[#FF6B35]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -top-10 -right-10 animate-pulse" />

                                {/* Shimmer effect */}
                                <div className="shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                {/* Content */}
                                <div className="relative z-10 flex items-start gap-6">
                                    {/* Avatar Image with glow */}
                                    <motion.div
                                        className="flex-shrink-0 w-40 h-40 relative"
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF3333]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <Image
                                            src={`/${(idx % 4) + 1}.png`}
                                            alt={service.title}
                                            fill
                                            className="object-contain relative z-10 drop-shadow-2xl"
                                        />
                                    </motion.div>

                                    {/* Text */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#FF3333] transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Animated window dots */}
                                <div className="absolute top-4 right-4 flex gap-1.5">
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#FF3333]"
                                        whileHover={{ scale: 1.5 }}
                                    />
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#FF6B35]"
                                        whileHover={{ scale: 1.5 }}
                                    />
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white"
                                        whileHover={{ scale: 1.5 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Service Modal */}
            <ServiceModal
                service={selectedService}
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
            />
        </section>
    )
}
