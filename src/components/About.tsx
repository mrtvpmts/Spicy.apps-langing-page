'use client'
import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { gsap } from 'gsap'
import { Target, Code, Rocket, TrendingUp, Palette } from 'lucide-react'

const processSteps = [
    {
        Icon: Target,
        title: 'Strategy',
        description: 'Define goals, research market.',
    },
    {
        Icon: Palette,
        title: 'Design',
        description: 'User-centric UI/UX, prototyping.',
    },
    {
        Icon: Code,
        title: 'Development',
        description: 'High-performance, scalable code.',
    },
    {
        Icon: Rocket,
        title: 'Deployment',
        description: 'Launch and integrate seamlessly.',
    },
    {
        Icon: TrendingUp,
        title: 'Growth',
        description: 'Optimize and scale.',
    },
]

// Premium Geometric Avatar Component
function GeometricAvatar({ type, gradient, iconColor }: { type: string; gradient: string; iconColor: string }) {
    const avatars = {
        performance: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Lightning bolt geometric shape */}
                <div className="absolute w-16 h-16 rotate-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800] to-[#FF6B35] transform skew-y-12 rounded-lg" />
                    <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-[#FFD700] to-[#FFB800] transform -skew-y-6 rounded" />
                </div>
                {/* Speed lines */}
                <div className="absolute right-2 top-1/3 w-12 h-0.5 bg-gradient-to-r from-[#FFB800] to-transparent" />
                <div className="absolute right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-[#FF6B35] to-transparent" />
            </div>
        ),
        scalability: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Network nodes */}
                <div className="absolute w-3 h-3 rounded-full bg-[#00D4FF] top-2 left-4 shadow-lg shadow-[#00D4FF]/50" />
                <div className="absolute w-4 h-4 rounded-full bg-[#00D4FF] top-6 right-4 shadow-lg shadow-[#00D4FF]/50" />
                <div className="absolute w-5 h-5 rounded-full bg-[#00D4FF] bottom-4 left-6 shadow-lg shadow-[#00D4FF]/50" />
                <div className="absolute w-3 h-3 rounded-full bg-[#0099CC] bottom-6 right-6 shadow-lg shadow-[#0099CC]/50" />
                {/* Connecting lines */}
                <svg className="absolute inset-0" viewBox="0 0 80 80">
                    <line x1="16" y1="8" x2="64" y2="24" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
                    <line x1="64" y1="24" x2="24" y2="60" stroke="#00D4FF" strokeWidth="1" opacity="0.5" />
                    <line x1="16" y1="8" x2="24" y2="60" stroke="#0099CC" strokeWidth="1" opacity="0.3" />
                </svg>
                {/* Growth arrow */}
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-tr from-[#00D4FF] to-[#00FFFF] transform rotate-45 rounded-sm" />
            </div>
        ),
        design: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Abstract palette shape */}
                <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-[#FF3333] to-[#FF6B35] transform -rotate-12" />
                <div className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFB800] top-4 right-4 transform rotate-12" />
                <div className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF3333] bottom-6 left-6" />
                {/* Brush stroke */}
                <div className="absolute bottom-2 right-8 w-16 h-1 bg-gradient-to-r from-[#FF3333] via-[#FF6B35] to-transparent transform -rotate-45 rounded-full" />
                <div className="absolute bottom-3 right-6 w-12 h-1 bg-gradient-to-r from-[#FF6B35] to-transparent transform -rotate-45 rounded-full" />
            </div>
        ),
        ai: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Neural network structure */}
                <div className="absolute w-2 h-2 rounded-full bg-[#A855F7] top-4 left-6" />
                <div className="absolute w-2 h-2 rounded-full bg-[#A855F7] top-4 right-6" />
                <div className="absolute w-3 h-3 rounded-full bg-[#C084FC] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-[#A855F7]/50" />
                <div className="absolute w-2 h-2 rounded-full bg-[#A855F7] bottom-4 left-6" />
                <div className="absolute w-2 h-2 rounded-full bg-[#A855F7] bottom-4 right-6" />
                {/* Neural connections */}
                <svg className="absolute inset-0" viewBox="0 0 80 80">
                    <line x1="24" y1="16" x2="40" y2="40" stroke="#A855F7" strokeWidth="1.5" opacity="0.6" />
                    <line x1="56" y1="16" x2="40" y2="40" stroke="#A855F7" strokeWidth="1.5" opacity="0.6" />
                    <line x1="40" y1="40" x2="24" y2="64" stroke="#C084FC" strokeWidth="1.5" opacity="0.6" />
                    <line x1="40" y1="40" x2="56" y2="64" stroke="#C084FC" strokeWidth="1.5" opacity="0.6" />
                </svg>
                {/* Brain symbol */}
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-[#A855F7] opacity-50" />
            </div>
        ),
        security: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Shield shape */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-14 bg-gradient-to-b from-[#10B981] to-[#059669] rounded-t-full" style={{ clipPath: 'polygon(50% 0%, 0% 0%, 0% 70%, 50% 100%, 100% 70%, 100% 0%)' }} />
                </div>
                {/* Lock symbol */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
                    <div className="w-3 h-3 rounded-full border-2 border-white" />
                    <div className="w-4 h-3 bg-white rounded-b mt-0.5 mx-auto" style={{ width: '14px' }} />
                </div>
                {/* Security rays */}
                <div className="absolute top-3 left-3 w-8 h-0.5 bg-gradient-to-r from-[#10B981] to-transparent transform -rotate-45" />
                <div className="absolute top-3 right-3 w-8 h-0.5 bg-gradient-to-l from-[#10B981] to-transparent transform rotate-45" />
            </div>
        ),
        devops: (
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Infinity symbol (DevOps loop) */}
                <svg className="absolute inset-0 p-4" viewBox="0 0 100 50">
                    <path
                        d="M 20,25 Q 30,5 50,25 Q 70,45 80,25 Q 70,5 50,25 Q 30,45 20,25"
                        fill="none"
                        stroke="url(#devopsGradient)"
                        strokeWidth="3"
                    />
                    <defs>
                        <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#FFB800', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
                {/* Gears */}
                <div className="absolute top-6 left-6 w-4 h-4 rounded-sm bg-[#F59E0B] transform rotate-45" />
                <div className="absolute bottom-6 right-6 w-5 h-5 rounded-sm bg-[#FFB800] transform rotate-12" />
            </div>
        ),
    }

    return avatars[type as keyof typeof avatars] || null
}

// Premium Expertise Card Component with GSAP
function PremiumExpertiseCard({ title, description, gradient, iconColor, avatarType, index }: any) {
    const cardRef = useRef<HTMLDivElement>(null)
    const particlesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!cardRef.current) return

        // GSAP: Breathing glow effect
        gsap.to(cardRef.current, {
            boxShadow: `0 0 60px ${iconColor}40`,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        })

        // GSAP: Floating particles
        if (particlesRef.current) {
            const particles = particlesRef.current.querySelectorAll('.particle')
            particles.forEach((particle, i) => {
                gsap.to(particle, {
                    y: -100,
                    x: gsap.utils.random(-30, 30),
                    opacity: 0,
                    duration: gsap.utils.random(2, 4),
                    repeat: -1,
                    delay: i * 0.3,
                    ease: 'none',
                })
            })
        }
    }, [iconColor])

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, type: 'spring' }}
            whileHover={{ y: -15, scale: 1.05 }}
            className="group relative"
        >
            {/* Animated border with GSAP glow */}
            <div
                ref={cardRef}
                className={`absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-br ${gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
            />

            {/* Glass card */}
            <div className="relative h-full backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-10 overflow-hidden border border-white/20 group-hover:border-white/40 transition-all duration-500">
                {/* Animated gradient orb */}
                <div className={`absolute w-40 h-40 bg-gradient-to-br ${gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -top-10 -right-10`} />

                {/* Floating particles container */}
                <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="particle absolute bottom-0 w-1 h-1 rounded-full"
                            style={{
                                left: `${20 + i * 20}%`,
                                backgroundColor: iconColor,
                            }}
                        />
                    ))}
                </div>

                {/* Shimmer effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* 3D Avatar container */}
                    <motion.div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden`}
                        whileHover={{ rotateY: 15, rotateX: 15, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <GeometricAvatar type={avatarType} gradient={gradient} iconColor={iconColor} />
                    </motion.div>

                    <h4
                        className="text-3xl font-black mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300"
                    >
                        {title}
                    </h4>
                    <p className="text-white/60 leading-relaxed text-lg group-hover:text-white/80 transition-colors duration-300">
                        {description}
                    </p>

                    {/* Animated line */}
                    <motion.div
                        className={`h-1 bg-gradient-to-r ${gradient} mt-6 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default function About() {
    const expertise = [
        {
            avatarType: 'performance',
            title: 'Performance',
            description: 'Sistemas otimizados para velocidade e eficiência máxima com arquitetura de ponta',
            gradient: 'from-[#FFB800]/40 to-[#FF6B35]/20',
            iconColor: '#FFB800',
        },
        {
            avatarType: 'scalability',
            title: 'Escalabilidade',
            description: 'Arquiteturas cloud-native que crescem exponencialmente com seu negócio',
            gradient: 'from-[#00D4FF]/40 to-[#0099CC]/20',
            iconColor: '#00D4FF',
        },
        {
            avatarType: 'design',
            title: 'Design Premium',
            description: 'Interfaces que encantam usuários e maximizam conversão com UX cirúrgico',
            gradient: 'from-[#FF3333]/40 to-[#FF6B35]/20',
            iconColor: '#FF3333',
        },
        {
            avatarType: 'ai',
            title: 'IA & Machine Learning',
            description: 'Automação inteligente e insights preditivos com deep learning de última geração',
            gradient: 'from-[#A855F7]/40 to-[#C084FC]/20',
            iconColor: '#A855F7',
        },
        {
            avatarType: 'security',
            title: 'Segurança',
            description: 'Proteção enterprise-grade com compliance e monitoramento 24/7',
            gradient: 'from-[#10B981]/40 to-[#059669]/20',
            iconColor: '#10B981',
        },
        {
            avatarType: 'devops',
            title: 'DevOps & CI/CD',
            description: 'Pipeline automatizado com deploy contínuo e zero-downtime',
            gradient: 'from-[#F59E0B]/40 to-[#FFB800]/20',
            iconColor: '#F59E0B',
        },
    ]


    return (
        <section id="about" className="relative bg-[#060807] py-32 px-6 overflow-hidden">
            {/* Animated background gradients */}
            <motion.div
                className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FFB800]/10 rounded-full blur-[120px]"
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
                className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#FF3333]/10 rounded-full blur-[120px]"
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
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                        Nossa Metodologia{' '}
                        <span className="bg-gradient-to-r from-[#FFB800] via-[#FF6B35] to-[#FF3333] bg-clip-text text-transparent">
                            Premium
                        </span>
                    </h2>
                    <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
                        Não somos apenas programadores. Somos arquitetos de produto, obcecados por criar sistemas robustos, escaláveis e que realmente fazem diferença.
                    </p>
                </motion.div>

                {/* Process Timeline - REFERENCE STYLE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
                        Our Proven Process for Premium Software.
                    </h3>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Connection lines with glow */}
                        <div className="absolute top-20 left-[10%] right-[10%] h-[3px] hidden md:block">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFB800] to-transparent opacity-30" />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#FFB800] via-[#FF6B35] to-[#FFB800]"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1.5, delay: 0.3 }}
                                style={{ transformOrigin: 'left' }}
                            />
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800]/50 via-[#FF6B35]/50 to-[#FFB800]/50 blur-md" />
                        </div>

                        {/* Steps */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 relative">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="flex flex-col items-center group"
                                >
                                    {/* Large Circle with intense glow */}
                                    <div className="relative mb-6">
                                        {/* Multiple glow layers */}
                                        <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF6B35] opacity-40 blur-2xl animate-pulse" />
                                        <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#FFB800] opacity-20 blur-xl" />

                                        {/* Main circle */}
                                        <motion.div
                                            className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#3a3a3a] via-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center border-2 border-[#FFB800]/30 shadow-2xl overflow-hidden"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            {/* Inner glow */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800]/10 to-transparent" />

                                            {/* Icon */}
                                            <step.Icon className="w-10 h-10 md:w-12 md:h-12 text-[#FFB800] relative z-10 drop-shadow-[0_0_10px_rgba(255,184,0,0.8)]" />

                                            {/* Shine effect on hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                initial={{ x: '-100%' }}
                                                whileHover={{ x: '100%' }}
                                                transition={{ duration: 0.6 }}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Text */}
                                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 text-center">
                                        {step.title}
                                    </h4>
                                    <p className="text-white/60 text-xs md:text-sm text-center leading-relaxed max-w-[180px]">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Featured Portfolio - REFERENCE STYLE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
                        Featured Portfolio: Crafting Digital Excellence.
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Card 1 - IzzyCar */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Animated golden border */}
                            <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-[#FFB800]/60 via-[#FF6B35]/40 to-[#FFB800]/60 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Glass card */}
                            <div className="relative h-full backdrop-blur-xl bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 rounded-3xl overflow-hidden border border-[#FFB800]/20 group-hover:border-[#FFB800]/40 transition-all duration-500">
                                {/* Glow orb */}
                                <div className="absolute w-64 h-64 bg-gradient-to-br from-[#FFB800]/20 to-transparent rounded-full blur-3xl -top-20 -right-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Content */}
                                <div className="relative z-10 p-8 flex flex-col items-center justify-center min-h-[400px]">
                                    {/* Mockup placeholder */}
                                    <div className="w-full max-w-xs mb-8 relative">
                                        <div className="aspect-[9/16] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-3xl border-4 border-[#FFB800]/30 shadow-2xl shadow-[#FFB800]/20 flex items-center justify-center overflow-hidden">
                                            {/* Phone screen mockup */}
                                            <div className="w-full h-full bg-gradient-to-br from-[#FF6B35]/10 to-[#FFB800]/10 flex items-center justify-center">
                                                <div className="text-6xl">📱</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-3 bg-gradient-to-r from-[#FFB800] to-[#FF6B35] rounded-full text-black font-bold mb-6 shadow-lg shadow-[#FFB800]/50 hover:shadow-xl hover:shadow-[#FFB800]/70 transition-all"
                                    >
                                        View Details
                                    </motion.button>

                                    {/* Text */}
                                    <h4 className="text-2xl font-bold text-white mb-2">IzzyCar</h4>
                                    <p className="text-white/60 text-sm text-center max-w-md">
                                        Ride-sharing platform with real-time tracking and seamless payments.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 - Dashboard */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Animated golden border */}
                            <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-[#FFB800]/60 via-[#FF6B35]/40 to-[#FFB800]/60 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Glass card */}
                            <div className="relative h-full backdrop-blur-xl bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 rounded-3xl overflow-hidden border border-[#FFB800]/20 group-hover:border-[#FFB800]/40 transition-all duration-500">
                                {/* Glow orb */}
                                <div className="absolute w-64 h-64 bg-gradient-to-br from-[#00D4FF]/20 to-transparent rounded-full blur-3xl -top-20 -left-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Content */}
                                <div className="relative z-10 p-8 flex flex-col items-center justify-center min-h-[400px]">
                                    {/* Mockup placeholder */}
                                    <div className="w-full max-w-sm mb-8 relative">
                                        <div className="aspect-video bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-2xl border-2 border-[#FFB800]/30 shadow-2xl shadow-[#FFB800]/20 flex items-center justify-center overflow-hidden">
                                            {/* Desktop mockup */}
                                            <div className="w-full h-full bg-gradient-to-br from-[#00D4FF]/10 to-[#FFB800]/10 flex items-center justify-center">
                                                <div className="text-6xl">💻</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <h4 className="text-2xl font-bold text-white mb-2">Midas Technology</h4>
                                    <p className="text-white/60 text-sm text-center max-w-md">
                                        Advanced financial analytics system for enterprise-level clients.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* PREMIUM Expertise Cards with GSAP */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="text-4xl md:text-5xl font-black text-center mb-16">
                        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Nossa{' '}
                        </span>
                        <span className="bg-gradient-to-r from-[#FFB800] via-[#FF6B35] to-[#FF3333] bg-clip-text text-transparent">
                            Expertise
                        </span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {expertise.map((item, idx) => (
                            <PremiumExpertiseCard key={idx} {...item} index={idx} />
                        ))}
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                >
                    {[
                        { value: '50+', label: 'Projetos', color: '#FFB800' },
                        { value: '98%', label: 'Satisfação', color: '#FF6B35' },
                        { value: '24/7', label: 'Suporte', color: '#00D4FF' },
                        { value: '5 anos', label: 'Experiência', color: '#FF3333' },
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.1, y: -10 }}
                            className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl group hover:border-white/30 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Glow effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                style={{ backgroundColor: `${stat.color}20` }}
                            />

                            <div
                                className="text-4xl md:text-5xl font-black mb-2 relative z-10"
                                style={{ color: stat.color }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-white/60 text-sm uppercase tracking-wider group-hover:text-white/80 transition-colors relative z-10">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
