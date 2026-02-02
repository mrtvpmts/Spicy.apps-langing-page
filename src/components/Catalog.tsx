'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import ProductDetailModal from './ProductDetailModal'

export default function Catalog() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null)

    return (
        <section id="catalog" className="py-20 bg-[#080a09]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-impact !text-4xl md:!text-6xl text-center mb-16">
                    Nossos <span className="text-neon">Serviços</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-brand-red/50 transition-all cursor-pointer"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="aspect-[4/5] relative mb-6 bg-black/20 rounded-2xl flex items-center justify-center p-4">
                                <div className="w-full h-full bg-brand-red/10 rounded-xl flex items-center justify-center text-white/20 font-bold text-6xl">
                                    {product.title.charAt(0)}
                                </div>
                            </div>
                            <h3 className="text-xl font-black uppercase italic mb-2">{product.title}</h3>
                            <p className="text-xs text-brand-red font-bold tracking-widest uppercase mb-4">{product.subtitle}</p>
                            <button className="w-full py-3 border border-white/20 rounded-xl text-xs font-bold uppercase hover:bg-white hover:text-black transition-all">
                                Ver Detalhes
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProductDetailModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    )
}
