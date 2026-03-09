"use client";

import { motion } from "framer-motion";

const painPoints = [
    {
        emoji: "🛑",
        title: "Tu tranquilidad",
        description:
            "Llamadas de cobranza a toda hora, amenazas legales y noches en vela pensando en cómo salir adelante.",
        color: "bg-red-50",
        border: "border-red-200",
        titleColor: "text-red-900",
    },
    {
        emoji: "💔",
        title: "Tu familia",
        description:
            "El estrés financiero destruye relaciones. Tu familia lo sufre contigo aunque no digan nada.",
        color: "bg-rose-50",
        border: "border-rose-200",
        titleColor: "text-rose-900",
    },
    {
        emoji: "🏪",
        title: "Tu negocio",
        description:
            "Embargos, cierres forzados, pérdida de inventario. Tu fuente de ingresos en riesgo constante.",
        color: "bg-orange-50",
        border: "border-orange-200",
        titleColor: "text-orange-900",
    },
    {
        emoji: "⛓️",
        title: "Tu libertad",
        description:
            "Reportes en centrales de riesgo que te persiguen por años. Sin crédito, sin oportunidades, sin futuro.",
        color: "bg-slate-100",
        border: "border-slate-300",
        titleColor: "text-slate-800",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ProblemSection() {
    return (
        <section
            id="problema"
            className="py-24 section-alt"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-naranja-50 border border-naranja-200 text-naranja-600 font-heading text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                        Sabemos lo que estás viviendo
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-marino-900 mb-4">
                        Lo que las deudas{" "}
                        <span className="text-naranja-500">te están quitando</span>
                    </h2>
                    <p className="font-body text-slate-600 text-lg max-w-2xl mx-auto">
                        No eres el único. Cada día, miles de colombianos cargamos el mismo peso.
                        Pero hay una salida legal que pocos conocen.
                    </p>
                </motion.div>

                {/* Pain point cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {painPoints.map((point, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className={`${point.color} border ${point.border} rounded-2xl p-6 flex flex-col gap-4 shadow-sm`}
                        >
                            <span className="text-4xl">{point.emoji}</span>
                            <h3 className={`font-heading text-xl font-bold ${point.titleColor}`}>
                                {point.title}
                            </h3>
                            <p className="font-body text-slate-700 text-sm leading-relaxed flex-1">
                                {point.description}
                            </p>
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
                    <button
                        onClick={() => document.getElementById("solucion")?.scrollIntoView({ behavior: "smooth" })}
                        className="font-heading font-bold text-naranja-600 hover:text-naranja-700 text-lg transition-colors duration-200 inline-flex items-center gap-2"
                    >
                        Pero hay una salida legal →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
