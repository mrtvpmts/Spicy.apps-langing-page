'use client'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Marquee } from '@/components/ui/marquee'
import Image from 'next/image'

const techStack = [
    { name: 'Next.js', logo: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-ar21.svg' },
    { name: 'React', logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg' },
    { name: 'TypeScript', logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg' },
    { name: 'Supabase', logo: 'https://www.vectorlogo.zone/logos/supabase/supabase-ar21.svg' },
    { name: 'Vercel', logo: 'https://www.vectorlogo.zone/logos/vercel/vercel-ar21.svg' },
    { name: 'Tailwind', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg' },
    { name: 'Node.js', logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg' },
    { name: 'PostgreSQL', logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg' },
    { name: 'Flutter', logo: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg' },
    { name: 'Bubble', logo: 'https://www.vectorlogo.zone/logos/bubbleio/bubbleio-ar21.svg' },
    { name: 'n8n', logo: 'https://www.vectorlogo.zone/logos/n8nio/n8nio-ar21.svg' },
    { name: 'Replit', logo: 'https://www.vectorlogo.zone/logos/replit/replit-ar21.svg' },
    { name: 'Lovable', logo: 'https://cdn.worldvectorlogo.com/logos/lovable.svg' },
    { name: 'Asaas', logo: 'https://vagas.asaas.com/assets/images/logo-asaas.svg' },
    { name: 'Google AI Studio', logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
]

const techStack2 = [
    { name: 'Python', logo: 'https://www.vectorlogo.zone/logos/python/python-ar21.svg' },
    { name: 'Firebase', logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg' },
    { name: 'Hostinger', logo: 'https://www.vectorlogo.zone/logos/hostinger/hostinger-ar21.svg' },
    { name: 'Stripe', logo: 'https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg' },
    { name: 'Figma', logo: 'https://www.vectorlogo.zone/logos/figma/figma-ar21.svg' },
    { name: 'GitHub', logo: 'https://www.vectorlogo.zone/logos/github/github-ar21.svg' },
    { name: 'Docker', logo: 'https://www.vectorlogo.zone/logos/docker/docker-ar21.svg' },
    { name: 'OpenAI', logo: 'https://www.vectorlogo.zone/logos/openai/openai-ar21.svg' },
    { name: 'Claude', logo: 'https://www.vectorlogo.zone/logos/anthropic/anthropic-ar21.svg' },
    { name: 'Google', logo: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg' },
    { name: 'Gemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
    { name: 'Antigravity', logo: 'https://deepmind.google/static/images/favicons/android-chrome-192x192.png' },
    { name: 'Base', logo: 'https://www.vectorlogo.zone/logos/base/base-ar21.svg' },
    { name: 'Pagar.me', logo: 'https://vagas.pagar.me/assets/images/logo-pagarme.svg' },
]
Broadway

export default function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10 px-8 border-t border-white/10 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                    <div className="text-2xl font-black italic tracking-tighter mb-6">SPICY.APPS</div>
                    <p className="text-white/50 max-w-sm">Tecnologia que arde. Sistemas que performam.</p>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center gap-4"><Mail className="text-brand-red" /> <span className="text-white">contato@spicy.apps</span></div>
                    <div className="flex items-center gap-4"><Phone className="text-brand-red" /> <span className="text-white">(11) 0000-0000</span></div>
                    <div className="flex items-center gap-4"><MapPin className="text-brand-red" /> <span className="text-white">São Paulo, SP</span></div>
                </div>
            </div>

            {/* Tech Stack Carousel - Dual Direction */}
            <div className="mb-16 space-y-8">
                <h3 className="text-center text-white/40 text-sm font-bold uppercase tracking-widest mb-12">
                    Tecnologias que Usamos
                </h3>

                {/* First Row - Left to Right */}
                <Marquee pauseOnHover className="[--duration:40s]">
                    {techStack.map((tech, idx) => (
                        <div key={idx} className="mx-5 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <Image
                                src={tech.logo}
                                alt={tech.name}
                                width={100}
                                height={50}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </Marquee>

                {/* Second Row - Right to Left */}
                <Marquee reverse pauseOnHover className="[--duration:45s]">
                    {techStack2.map((tech, idx) => (
                        <div key={idx} className="mx-5 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <Image
                                src={tech.logo}
                                alt={tech.name}
                                width={100}
                                height={50}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>

            <div className="text-center text-white/20 text-xs font-bold uppercase tracking-widest pt-8 border-t border-white/5">
                © {new Date().getFullYear()} Spicy Apps. Todos os direitos reservados.
            </div>
        </footer>
    )
}
