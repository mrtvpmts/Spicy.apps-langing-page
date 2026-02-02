'use client'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Marquee } from '@/components/ui/marquee'
import Image from 'next/image'

const techStack = [
    { name: 'Next.js', logo: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-ar21.svg' },
    { name: 'React', logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg' },
    { name: 'TypeScript', logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg' },
    { name: 'Supabase', logo: 'https://www.vectorlogo.zone/logos/supabase/supabase-ar21.svg' },
    { name: 'Vercel', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_2025.svg' },
    { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_classic.svg' },
    { name: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.svg' },
    { name: 'Bubble', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Bubble_Logo_no_code.svg' },
    { name: 'n8n', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/N8n-logo-new.svg' },
    { name: 'Replit', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/New_Replit_Logo.svg' },
    { name: 'Lovable', logo: 'https://cdn.worldvectorlogo.com/logos/lovable.svg' },
    { name: 'Asaas', logo: 'https://vagas.asaas.com/assets/images/logo-asaas.svg' },
    { name: 'Google AI Studio', logo: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg' },
]

const techStack2 = [
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg' },
    { name: 'Firebase', logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg' },
    { name: 'Hostinger', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Hostinger_logo_black.svg' },
    { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Stripe_Logo%2C_revised_2016.svg' },
    { name: 'Figma', logo: 'https://www.vectorlogo.zone/logos/figma/figma-ar21.svg' },
    { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/GitHub_logo.svg' },
    { name: 'Docker', logo: 'https://www.vectorlogo.zone/logos/docker/docker-ar21.svg' },
    { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/OpenAI_logo_2025_%28wordmark%29.svg' },
    { name: 'Claude', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Claude_AI_logo.svg' },
    { name: 'Google', logo: 'https://www.vectorlogo.zone/logos/google/google-ar21.svg' },
    { name: 'Gemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
    { name: 'DeepMind', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Google_DeepMind_logo.svg' },
    { name: 'Base', logo: 'https://altcoinsbox.com/wp-content/uploads/2023/03/base-logo.svg' },
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
