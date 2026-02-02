'use client'
import { motion } from 'framer-motion'
import { Marquee } from '@/components/ui/marquee'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
    const firstRow = testimonials.slice(0, testimonials.length / 2)
    const secondRow = testimonials.slice(testimonials.length / 2)

    return (
        <section className="relative bg-[#060807] py-32 overflow-hidden">
            {/* Animated background gradients - VISUAL CONTINUITY */}
            <motion.div
                className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[120px]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-[#FF6B35]/10 rounded-full blur-[120px]"
                animate={{
                    scale: [1.3, 1, 1.3],
                    opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 5,
                }}
            />

            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-impact !text-5xl md:!text-7xl text-center mb-4"
                >
                    O que dizem <span className="text-neon">nossos clientes</span>
                </motion.h2>
            </div>

            <div className="relative flex flex-col gap-6">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {firstRow.map((testimonial, idx) => (
                        <TestimonialCard key={idx} {...testimonial} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {secondRow.map((testimonial, idx) => (
                        <TestimonialCard key={idx} {...testimonial} />
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

function TestimonialCard({ name, role, company, testimonial, avatar }: any) {
    return (
        <div className="relative w-[400px] bg-white/5 border border-white/10 rounded-3xl p-8 mx-4">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-white font-black text-xl">
                    {avatar}
                </div>
                <div>
                    <h4 className="font-bold text-white">{name}</h4>
                    <p className="text-sm text-white/50">{role}, {company}</p>
                </div>
            </div>
            <p className="text-white/70 leading-relaxed">{testimonial}</p>
            <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FF3333]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        </div>
    )
}
