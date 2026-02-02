'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
    return (
        <section id="home" className="relative w-full bg-black">
            {/* HERO BANNER - TELA COMPLETA */}
            <div className="relative w-full h-screen">
                {/* Background Image COMPLETA - SEM CORTAR */}
                <Image
                    src="/hero-full.png"
                    alt="Spicy Technology"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

                {/* Content - Texto CENTRALIZADO */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full pl-8 md:pl-16 lg:pl-24 pr-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-lg"
                        >
                            {/* Headline com EFEITO PREMIUM - 4 LINHAS */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-4">
                                <span className="text-white">TECNOLOGIA</span>
                                <br />
                                <span
                                    className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent"
                                    style={{
                                        filter: 'drop-shadow(0 0 20px rgba(255,51,51,0.8)) drop-shadow(0 0 40px rgba(255,107,53,0.6))',
                                    }}
                                >
                                    SPICY
                                </span>
                                <br />
                                <span className="text-white">SISTEMAS QUE</span>
                                <br />
                                <span className="text-[#FF3333]">PERFORMAM.</span>
                            </h1>

                            <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
                                Sua visão, nossa potência.<br />
                                Criamos softwares premium de alto desempenho.
                            </p>

                            <Link
                                href="#contact"
                                className="inline-block px-10 py-3 bg-[#FF3333] hover:bg-[#FF4444] text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,51,51,0.4)]"
                            >
                                Inicie seu Projeto
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
