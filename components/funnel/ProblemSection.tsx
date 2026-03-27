"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingWallet, FloatingHandsCoins } from "@/components/funnel/FloatingDecorations";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const cards = [
    {
        title: "Atendemos todo tipo de deudores",
        image: "/images/ICONS-1.jpeg",
        alt: "Tipos de deudores que atendemos",
        accent: "from-esmeralda-400 to-esmeralda-600",
    },
    {
        title: "Te libramos de:",
        image: "/images/ICONS-2.jpeg",
        alt: "Deudas de las que te libramos",
        accent: "from-marino-500 to-marino-700",
    },
];

export function ProblemSection() {
    return (
        <section
            id="problema"
            className="py-24 section-alt relative overflow-hidden"
        >
            {/* Floating decorations */}
            <FloatingWallet position="top-16 -right-6 xl:right-4" size={100} opacity={6} delay={0.3} />
            <FloatingHandsCoins position="bottom-24 -left-8 xl:left-2" size={130} opacity={8} delay={0.6} flip />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-marino-900 mb-4">
                        Lo que las deudas{" "}
                        <span className="text-esmeralda-500">te están quitando</span>
                    </h2>
                    <p className="font-body text-slate-600 text-lg max-w-2xl mx-auto">
                        No eres el único. Cada día, miles de colombianos cargamos el mismo peso.
                        Pero hay una salida legal que pocos conocen.
                    </p>
                </motion.div>

                {/* Image cards — 2 columns with hover expand */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                >
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.03,
                                y: -6,
                                transition: { duration: 0.35, ease: "easeOut" },
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative bg-white border border-slate-200 rounded-3xl p-3 flex flex-col items-center gap-3 shadow-sm hover:shadow-xl hover:border-esmeralda-300 transition-shadow duration-500 cursor-pointer overflow-hidden"
                        >
                            {/* Top accent bar — reveals on hover */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl`}
                            />

                            {/* Title */}
                            <h3 className="font-heading text-xl sm:text-2xl font-bold text-marino-900 text-center pt-2 group-hover:text-esmeralda-700 transition-colors duration-300">
                                {card.title}
                            </h3>

                            {/* Image with subtle zoom on hover */}
                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.alt}
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Transition CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="font-body text-slate-500 text-sm uppercase tracking-widest mb-3 font-semibold">
                        ¿Y si todo esto pudiera terminar?
                    </p>
                    <a
                        href="https://wa.me/573150952931?text=Hola%2C%20quiero%20reservar%20un%20espacio%20para%20una%20consulta.%20%C2%BFMe%20ayudan%20con%20la%20disponibilidad%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading font-bold text-esmeralda-600 hover:text-esmeralda-700 text-lg transition-colors duration-200 inline-flex items-center gap-2"
                    >
                        Pero hay una salida legal →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
