"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "¿Cuánto cuesta el proceso?",
        answer:
            "La consulta inicial es 100% gratuita y sin compromiso. Los honorarios del proceso se ajustan a tu capacidad de pago real. No cobramos si no hay resultado.",
    },
    {
        question: "¿Esto afecta mi historial crediticio?",
        answer:
            "Al contrario: el proceso de insolvencia te permite salir de CIFIN y DataCrédito al finalizar. Es la forma legal de limpiar tu nombre y acceder de nuevo al sistema financiero.",
    },
    {
        question: "¿Quién puede acogerse a la Ley de Insolvencia?",
        answer:
            "Cualquier persona natural con deudas que superen su capacidad de pago actual: comerciantes, empleados, pensionados, trabajadores independientes y contratistas.",
    },
    {
        question: "¿Cuánto tiempo toma el proceso?",
        answer:
            "El proceso promedio dura entre 3 y 6 meses. Desde el primer día que se formaliza el proceso, se suspenden los cobros, embargos y presiones de cobranza.",
    },
    {
        question: "¿Es seguro y completamente legal?",
        answer:
            "100% legal y regulado. Está contemplado en la Ley 1564 de 2012 (Código General del Proceso). Trabajamos con conciliadores autorizados por el Ministerio de Justicia de Colombia.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="preguntas" className="py-24 section-alt">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block bg-esmeralda-100 border border-esmeralda-300 text-esmeralda-700 font-heading text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                        Preguntas frecuentes
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-marino-900 mb-4">
                        Resolvemos tus dudas
                    </h2>
                    <p className="font-body text-slate-500 text-lg">
                        Todo lo que necesitas saber para dar el primer paso con confianza.
                    </p>
                </motion.div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-3 mb-12"
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "bg-white border rounded-xl overflow-hidden transition-all duration-300",
                                openIndex === index
                                    ? "border-esmeralda-400 shadow-md"
                                    : "border-slate-200 hover:border-esmeralda-200"
                            )}
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span
                                    className={cn(
                                        "font-heading font-semibold text-base sm:text-lg leading-snug pr-8",
                                        openIndex === index
                                            ? "text-marino-900"
                                            : "text-slate-700"
                                    )}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    className={cn(
                                        "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300",
                                        openIndex === index
                                            ? "bg-esmeralda-500 text-white"
                                            : "bg-slate-100 text-slate-500"
                                    )}
                                >
                                    {openIndex === index ? (
                                        <MinusIcon className="w-4 h-4" />
                                    ) : (
                                        <PlusIcon className="w-4 h-4" />
                                    )}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <p className="px-6 pb-6 font-body text-slate-600 leading-relaxed text-sm sm:text-base">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="font-body text-slate-500 mb-2">
                        ¿Tienes otra pregunta? Te respondemos en minutos.
                    </p>
                    <a
                        href="https://wa.me/57XXXXXXXXXX?text=Hola,%20quiero%20información%20sobre%20el%20proceso%20de%20insolvencia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading font-bold text-naranja-500 hover:text-naranja-400 transition-colors duration-200 inline-flex items-center gap-1.5"
                    >
                        Escríbenos en WhatsApp →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
