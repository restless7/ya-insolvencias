"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const benefits = [
    {
        icon: "⏸️",
        title: "Suspensión inmediata",
        description:
            "Se detienen los cobros, embargos y procesos judiciales desde el día 1 del proceso.",
        badge: "Desde el día 1",
    },
    {
        icon: "⚖️",
        title: "Renegociación justa",
        description:
            "Tus deudas se reestructuran según lo que realmente puedes pagar. Sin acuerdos leoninos.",
        badge: "A tu medida",
    },
    {
        icon: "🕊️",
        title: "Reinicio limpio",
        description:
            "Al completar el proceso, das de baja reportes negativos en centrales de riesgo. Borrón y cuenta nueva.",
        badge: "Sin historial negativo",
    },
];

const steps = [
    {
        number: "01",
        title: "Consulta gratuita",
        description: "Evaluamos tu caso sin costo ni compromiso.",
        icon: "📞",
    },
    {
        number: "02",
        title: "Diagnóstico de deudas",
        description: "Identificamos tus obligaciones y capacidad real de pago.",
        icon: "📋",
    },
    {
        number: "03",
        title: "Proceso ante conciliador",
        description: "Gestionamos el proceso legal autorizado por el Ministerio de Justicia.",
        icon: "⚖️",
    },
    {
        number: "04",
        title: "Libertad financiera",
        description: "Sales de las deudas, te limpian en centrales y reinicias.",
        icon: "🕊️",
    },
];

export function SolutionSection() {
    return (
        <section id="solucion" className="py-24 section-alt">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-esmeralda-100 border border-esmeralda-300 text-esmeralda-700 font-heading text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                        Tu derecho legal
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-marino-900 mb-4">
                        La Ley de Insolvencia{" "}
                        <span className="text-esmeralda-500">es tu derecho</span>
                    </h2>
                    <p className="font-body text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        No es una vergüenza. Es una herramienta legal diseñada para
                        protegerte. Regulada por la{" "}
                        <strong className="text-marino-900">Ley 1564 de 2012</strong>, está
                        al alcance de cualquier colombiano.
                    </p>
                </motion.div>

                {/* Benefit cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="bg-white rounded-2xl p-8 shadow-md border border-esmeralda-100 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
                        >
                            <span className="text-4xl">{benefit.icon}</span>
                            <span className="inline-block self-start bg-esmeralda-50 text-esmeralda-600 font-heading text-xs font-semibold px-3 py-1 rounded-full">
                                {benefit.badge}
                            </span>
                            <h3 className="font-heading text-xl font-bold text-marino-900">
                                {benefit.title}
                            </h3>
                            <p className="font-body text-slate-600 text-sm leading-relaxed flex-1">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Process steps */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="mb-12"
                >
                    <h3 className="font-heading text-2xl font-bold text-center text-marino-900 mb-10">
                        ¿Cómo funciona el proceso?
                    </h3>
                    <div className="relative">
                        {/* Connecting line */}
                        <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-esmeralda-200 z-0" />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {steps.map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-white border-2 border-esmeralda-400 flex flex-col items-center justify-center mb-6 shadow-sm">
                                        <span className="text-2xl">{step.icon}</span>
                                    </div>
                                    <span className="font-heading text-xs font-black text-esmeralda-500 tracking-widest mb-1">
                                        PASO {step.number}
                                    </span>
                                    <h4 className="font-heading text-base font-bold text-marino-900 mb-2">
                                        {step.title}
                                    </h4>
                                    <p className="font-body text-slate-500 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <button
                        onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                        className="inline-flex items-center gap-2 bg-esmeralda-500 hover:bg-esmeralda-400 text-white font-heading font-bold text-lg px-8 py-4 rounded-xl cta-glow transition-all duration-300"
                    >
                        Descubre si calificas — es gratis
                        <ArrowRightIcon className="w-5 h-5" />
                    </button>
                    <p className="font-body text-slate-400 text-sm mt-3">
                        Sin compromiso. Respuesta en menos de 24 horas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
