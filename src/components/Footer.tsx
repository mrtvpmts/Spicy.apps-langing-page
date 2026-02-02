'use client'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Marquee } from '@/components/ui/marquee'
import Image from 'next/image'

const techStack = [
    { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
    { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'TypeScript', logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
    { name: 'Supabase', logo: 'https://cdn.worldvectorlogo.com/logos/supabase-logo-wordmark.svg' },
    { name: 'Vercel', logo: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
    { name: 'Tailwind', logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-wordmark.svg' },
    { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-1.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
    { name: 'Flutter', logo: 'https://cdn.worldvectorlogo.com/logos/flutter.svg' },
    { name: 'Bubble', logo: 'https://cdn.worldvectorlogo.com/logos/bubble.svg' },
    { name: 'n8n', logo: 'https://cdn.worldvectorlogo.com/logos/n8n.svg' },
    { name: 'Replit', logo: 'https://cdn.worldvectorlogo.com/logos/replit.svg' },
    { name: 'Lovable', logo: 'https://lovable.dev/favicon.ico' },
    { name: 'Asaas', logo: 'https://vagas.asaas.com/assets/images/logo-asaas.svg' },
    { name: 'Google AI Studio', logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
]

const techStack2 = [
    { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    { name: 'Firebase', logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
    { name: 'Hostinger', logo: 'https://cdn.worldvectorlogo.com/logos/hostinger.svg' },
    { name: 'Stripe', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
    { name: 'Figma', logo: 'https://cdn.worldvectorlogo.com/logos/figma-5.svg' },
    { name: 'GitHub', logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
    { name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
    { name: 'OpenAI', logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg' },
    { name: 'Claude', logo: 'https://cdn.worldvectorlogo.com/logos/anthropic.svg' },
    { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg' },
    { name: 'Gemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
    { name: 'Antigravity', logo: 'https://deepmind.google/static/images/favicons/android-chrome-192x192.png' },
    { name: 'Base', logo: 'https://avatars.githubusercontent.com/u/108554348?s=200&v=4' },
    { name: 'Pagar.me', logo: 'https://vagas.pagar.me/assets/images/logo-pagarme.svg' },
]

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
