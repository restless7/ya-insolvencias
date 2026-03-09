"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const stats = [
    { value: "1.200+", label: "Familias libres de deudas" },
    { value: "98%", label: "Casos exitosos" },
    { value: "100%", label: "Consulta gratuita" },
];

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.08]);

    const scrollToForm = () => {
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProblema = () => {
        document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden section-alt"
        >
            {/* Background gradient */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 bg-white/40 z-0"
            />

            {/* Decorative orbs */}
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-esmeralda-500 rounded-full opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-naranja-500 rounded-full opacity-10 blur-3xl pointer-events-none" />

            <motion.div
                style={{ opacity }}
                className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
            >
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-esmeralda-100 border border-esmeralda-200 rounded-full px-4 py-1.5 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-esmeralda-500 animate-pulse-orange" />
                    <span className="text-esmeralda-700 text-sm font-heading font-semibold tracking-wide uppercase">
                        Ley 1564 de 2012 — Tu derecho legal
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-marino-900 leading-tight mb-6"
                >
                    ¿Las deudas no te{" "}
                    <span className="text-gradient-esmeralda">dejan dormir?</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="font-body text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    La Ley de Insolvencia te da una segunda oportunidad.{" "}
                    <strong className="text-marino-900">Miles de colombianos</strong> ya
                    reiniciaron su vida financiera. Tú también puedes.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <button
                        onClick={scrollToForm}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-esmeralda-500 hover:bg-esmeralda-400 text-white font-heading font-bold text-lg px-8 py-4 rounded-xl cta-glow transition-all duration-300"
                    >
                        Consulta gratis ya
                        <ArrowRightIcon className="w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollToProblema}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 text-marino-900 font-heading font-semibold text-lg px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300"
                    >
                        Conoce tus derechos ↓
                    </button>
                </motion.div>

                {/* Stats ribbon */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm rounded-xl px-5 py-4"
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
                style={{ opacity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-slate-400 text-xs font-body tracking-widest uppercase font-semibold">
                    Desliza
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-0.5 h-8 bg-gradient-to-b from-slate-400 to-transparent"
                />
            </motion.div>
        </section>
    );
}
