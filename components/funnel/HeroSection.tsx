"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FloatingWallet } from "@/components/funnel/FloatingDecorations";

const stats = [
    { value: "1.200+", label: "Familias libres de deudas" },
    { value: "98%", label: "Casos exitosos" },
    { value: "100%", label: "Consulta gratuita" },
];

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    
    // Overlay fades out during the first quarter of the scroll container
    const imageOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

    // Small scale effect for the inner background
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    // Fade out the content slowly during the final quarter as you scroll past the whole section
    const contentOpacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

    const scrollToForm = () => {
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProblema = () => {
        document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div ref={ref} className="relative" style={{ height: "400vh" }}>
            {/* Image Overlay - sits ABOVE everything, fades out on scroll to reveal content */}
            <motion.div
                className="fixed inset-0 z-50 pointer-events-none bg-[#f0faf5]"
                style={{ opacity: imageOpacity }}
            >
                <Image
                    src="/images/hero-section.jpeg"
                    alt=""
                    fill
                    className="object-contain md:object-cover object-center"
                    sizes="100vw"
                    priority
                    quality={80}
                />
            </motion.div>

            {/* Sticky hero content stays pinned while user scrolls through the 200vh container */}
            <section
                className="sticky top-0 min-h-screen flex flex-col justify-center overflow-hidden section-alt"
            >
                {/* Subtle Background image for the pinned section itself */}
                <motion.div
                    style={{ scale }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/hero-section.jpeg"
                        alt=""
                        fill
                        className="object-cover opacity-[0.10]"
                        sizes="100vw"
                        priority
                        quality={80}
                    />
                </motion.div>

                {/* Decorative orbs */}
                <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-esmeralda-500 rounded-full opacity-10 blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-naranja-500 rounded-full opacity-10 blur-3xl pointer-events-none" />

                {/* Floating wallet decoration */}
                <FloatingWallet position="bottom-40 -right-4 xl:right-12" size={110} opacity={7} delay={1.2} />

                <motion.div
                    style={{ opacity: contentOpacity }}
                    className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
                >
                    {/* Main headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-marino-900 leading-tight mb-6"
                    >
                        ¿Las deudas no te{" "}
                        <span className="text-gradient-esmeralda">dejan dormir?</span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-body text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed text-justify"
                    >
                        La Ley 2245 de 2025 que modifica y regula los procesos de insolvencia de las personas comerciantes y no comerciantes, otorga múltiples beneficios a los colombianos y nos fortalece como negociadores con un número amplio de herramientas para lograr una negociación altamente favorable para nuestros representados.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <a
                            href="https://wa.me/573150952931?text=Hola%2C%20quiero%20reservar%20un%20espacio%20para%20una%20consulta.%20%C2%BFMe%20ayudan%20con%20la%20disponibilidad%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-esmeralda-500 hover:bg-esmeralda-400 text-white font-heading font-bold text-lg px-8 py-4 rounded-xl cta-glow transition-all duration-300 transform hover:scale-105"
                        >
                            Llame y asesórese con nuestros abogados negociadores sin ningún costo
                            <ArrowRightIcon className="w-5 h-5 flex-shrink-0" />
                        </a>
                    </motion.div>

                    {/* Stats ribbon */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="bg-white/70 backdrop-blur-sm border border-slate-200 shadow-sm rounded-xl px-5 py-4 transition-transform hover:scale-105"
                            >
                                <p className="font-heading text-3xl font-black text-esmeralda-500 mb-1">
                                    {stat.value}
                                </p>
                                <p className="font-body text-sm text-slate-600">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-slate-400 text-xs font-body tracking-widest uppercase font-semibold">
                        Desliza
                    </span>
                    <div className="w-0.5 h-10 bg-gradient-to-b from-slate-400/80 to-transparent" />
                </motion.div>
            </section>
        </div>
    );
}
