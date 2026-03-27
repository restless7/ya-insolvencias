"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { FloatingWallet } from "@/components/funnel/FloatingDecorations";

const testimonials = [
    {
        name: "Doña Martha Ruiz",
        role: "Pensionada · Bogotá",
        tag: "Caso resuelto en 4 meses",
        quote:
            "Tenía 3 créditos que me quitaban el 60% de mi mesada. Ya Insolvencias me devolvió la paz. Ojalá lo hubiera hecho antes.",
        story:
            "Martha llevaba 3 años pagando mínimos sin salir de las deudas. Gracias al proceso de insolvencia, renegoció sus obligaciones y hoy vive sin angustia.",
        avatar: "M",
        color: "from-esmeralda-600 to-esmeralda-800",
        rating: 5,
    },
    {
        name: "Carlos Bernal",
        role: "Comerciante · Medellín",
        tag: "Negocio salvado",
        quote:
            "Me iban a embargar la tienda. Hoy estoy libre de deudas y con mi negocio abierto. Mi familia comió gracias a esto.",
        story:
            "Carlos tenía deudas con 5 acreedores y riesgo inminente de embargo. El proceso legal suspendió los cobros en 2 semanas y reestructuró todo.",
        avatar: "C",
        color: "from-marino-700 to-marino-900",
        rating: 5,
    },
    {
        name: "Sandra Morales",
        role: "Trabajadora estrato 2 · Cali",
        tag: "Nuevo comienzo",
        quote:
            "No sabía que existía esta ley. Ya nadie me llama a cobrar. Me abrieron otra vez un cupo en el banco.",
        story:
            "Sandra cargaba deudas desde 2019. En 5 meses completó el proceso, salió de CIFIN y DataCrédito, y pudo acceder a nuevo crédito.",
        avatar: "S",
        color: "from-naranja-600 to-naranja-800",
        rating: 5,
    },
];

const stats = [
    { value: "1.200+", label: "Familias libres de deudas" },
    { value: "98%", label: "Tasa de éxito" },
    { value: "4 meses", label: "Promedio del proceso" },
    { value: "Ley 1564", label: "Proceso 100% legal" },
];

export function TestimonialsSection() {
    return (
        <section id="testimonios" className="py-24 section-alt relative overflow-hidden">
            {/* Floating decoration */}
            <FloatingWallet position="top-24 -left-6 xl:left-4" size={90} opacity={5} delay={0.4} flip />
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
                        Historias reales
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-marino-900 mb-4">
                        Ellos ya reiniciaron.{" "}
                        <span className="text-esmeralda-500">Tú también puedes.</span>
                    </h2>
                    <p className="font-body text-slate-500 text-lg max-w-xl mx-auto">
                        Personas como tú, con deudas reales, que encontraron una salida legal.
                    </p>
                </motion.div>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="bg-white border border-slate-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                        >
                            {/* Avatar band */}
                            <div className={`bg-gradient-to-br ${t.color} p-6 flex items-center gap-4`}>
                                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-heading text-2xl font-black">
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-white">{t.name}</p>
                                    <p className="font-body text-white/75 text-sm">{t.role}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-4 flex-1">
                                {/* Stars */}
                                <div className="flex gap-1">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <StarIcon key={j} className="w-4 h-4 text-naranja-400" />
                                    ))}
                                </div>

                                <blockquote className="font-body text-slate-800 italic leading-relaxed text-base flex-1">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>

                                <p className="font-body text-slate-400 text-sm leading-relaxed">
                                    {t.story}
                                </p>

                                <span className="self-start inline-block bg-esmeralda-50 text-esmeralda-600 font-heading text-xs font-semibold px-3 py-1 rounded-full">
                                    ✓ {t.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
