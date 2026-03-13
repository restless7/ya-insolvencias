"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FloatingWallet, FloatingHandsCoins } from "@/components/funnel/FloatingDecorations";

const plans = [
    {
        name: "Consulta Gratis",
        emoji: "🟢",
        price: "$0",
        priceNote: "Sin costo",
        highlight: false,
        features: [
            "Evaluación de tu caso",
            "Diagnóstico de deudas",
            "Orientación legal inicial",
            "Sin compromiso",
        ],
        cta: "Agendar consulta gratis",
        ctaStyle:
            "w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold py-3 px-6 rounded-xl transition-all duration-300",
    },
    {
        name: "Plan Reinicio",
        emoji: "⭐",
        price: "Desde $200K",
        priceNote: "/ mes · ajustado a tu pago",
        highlight: true,
        badge: "Más solicitado",
        features: [
            "Todo lo del plan gratis",
            "Representación legal completa",
            "Proceso ante conciliador autorizado",
            "Suspensión de cobros y embargos",
            "Reestructuración de deudas",
        ],
        cta: "Empezar mi reinicio",
        ctaStyle:
            "w-full bg-esmeralda-500 hover:bg-esmeralda-400 text-white font-heading font-bold py-3 px-6 rounded-xl cta-glow transition-all duration-300",
    },
    {
        name: "Plan Libertad Total",
        emoji: "🏆",
        price: "Personalizado",
        priceNote: "Según tu situación",
        highlight: false,
        features: [
            "Todo lo del Plan Reinicio",
            "Gestión integral de deudas",
            "Limpieza de centrales de riesgo",
            "Seguimiento post-reinicio",
            "Asesoría financiera de reconstrucción",
        ],
        cta: "Hablar con un asesor",
        ctaStyle:
            "w-full bg-marino-900 hover:bg-marino-800 text-white font-heading font-bold py-3 px-6 rounded-xl transition-all duration-300",
    },
];

export function PricingSection() {
    const scrollToForm = () =>
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });

    return (
        <section id="planes" className="py-24 section-alt relative overflow-hidden">
            {/* Floating decorations */}
            <FloatingHandsCoins position="top-20 -right-8 xl:right-2" size={140} opacity={7} delay={0.5} />
            <FloatingWallet position="bottom-20 -left-6 xl:left-4" size={90} opacity={5} delay={0.8} flip />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-esmeralda-50 border border-esmeralda-200 text-esmeralda-700 font-heading text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                        Sin sorpresas
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-marino-900 mb-4">
                        Planes para tu{" "}
                        <span className="text-esmeralda-500">reinicio financiero</span>
                    </h2>
                    <p className="font-body text-slate-500 text-lg max-w-2xl mx-auto">
                        Empieza siempre gratis. Continúa solo si ves valor. Sin letra pequeña.
                    </p>
                </motion.div>

                {/* Plan cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className={`relative rounded-2xl p-8 flex flex-col gap-6 ${plan.highlight
                                ? "bg-marino-900 border-2 border-esmeralda-400 shadow-2xl scale-[1.03]"
                                : "bg-white border border-slate-200 shadow-md"
                                }`}
                        >
                            {plan.badge && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-block bg-esmeralda-500 text-white font-heading text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                                    {plan.badge}
                                </span>
                            )}

                            {/* Plan header */}
                            <div>
                                <p className="font-heading font-bold text-lg mb-1 flex items-center gap-2">
                                    <span>{plan.emoji}</span>
                                    <span className={plan.highlight ? "text-white" : "text-marino-900"}>
                                        {plan.name}
                                    </span>
                                </p>
                                <p
                                    className={`font-heading text-3xl font-black ${plan.highlight ? "text-esmeralda-400" : "text-marino-900"
                                        }`}
                                >
                                    {plan.price}
                                </p>
                                <p
                                    className={`font-body text-sm mt-1 ${plan.highlight ? "text-white/50" : "text-slate-400"
                                        }`}
                                >
                                    {plan.priceNote}
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 flex-1">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-2.5">
                                        <CheckCircleIcon
                                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-esmeralda-400" : "text-esmeralda-500"
                                                }`}
                                        />
                                        <span
                                            className={`font-body text-sm leading-relaxed ${plan.highlight ? "text-white/80" : "text-slate-600"
                                                }`}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button onClick={scrollToForm} className={plan.ctaStyle}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Trust note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center font-body text-slate-400 text-sm mt-10"
                >
                    ✓ Sin costos ocultos · ✓ Sin letra pequeña · ✓ Proceso 100% legal Ley 1564 de 2012
                </motion.p>
            </div>
        </section>
    );
}
