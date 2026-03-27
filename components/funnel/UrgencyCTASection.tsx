"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const badges = [
    "✓ Consulta 100% gratuita",
    "✓ Sin compromiso",
    "✓ Respuesta en menos de 24h",
    "✓ Proceso 100% legal",
];

const debtRanges = [
    "Menos de $5 millones",
    "$5 millones a $20 millones",
    "$20 millones a $50 millones",
    "Más de $50 millones",
];

export function UrgencyCTASection() {
    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        deuda: "",
        mensaje: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate async submission
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <section
            id="contacto"
            className="py-24 relative overflow-hidden"
        >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/banner4.jpeg"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="100vw"
                    quality={85}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-marino-950/85 via-marino-900/80 to-esmeralda-950/75" />
            </div>

            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-esmeralda-500 rounded-full opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-naranja-500 rounded-full opacity-10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                        Tu reinicio empieza{" "}
                        <span className="text-esmeralda-500">hoy. Ya.</span>
                    </h2>
                    <p className="font-body text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                        Cada día que pasa, los intereses crecen y los cobros no paran. Da
                        el primer paso ahora — consulta{" "}
                        <strong className="text-white text-xl">GRATIS</strong> al:{" "}
                        <a 
                            href="https://wa.me/573150952931?text=Hola%2C%20quiero%20reservar%20un%20espacio%20para%20una%20consulta.%20%C2%BFMe%20ayudan%20con%20la%20disponibilidad%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-esmeralda-500 hover:bg-esmeralda-400 text-white px-3 py-1 rounded-lg transition-colors duration-200"
                        >
                            315 095 2931
                        </a>{" "}
                        o escríbenos a:{" "}
                        <a 
                            href="mailto:yainsolvencias@gmail.com"
                            className="text-white hover:text-esmeralda-400 font-bold transition-colors duration-200"
                        >
                            yainsolvencias@gmail.com
                        </a>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Benefit badges */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-5"
                    >
                        <h3 className="font-heading text-xl font-bold text-white mb-6">
                            Lo que recibes cuando escribes:
                        </h3>
                        {badges.map((badge, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-esmeralda-100 border border-esmeralda-200 flex items-center justify-center flex-shrink-0">
                                    <CheckCircleIcon className="w-4 h-4 text-esmeralda-600" />
                                </div>
                                <span className="font-body text-white/80 text-base">{badge}</span>
                            </div>
                        ))}

                        <div className="mt-8 p-5 bg-white/10 border border-white/20 shadow-sm rounded-2xl backdrop-blur-sm">
                            <p className="font-body text-white/70 text-sm italic leading-relaxed">
                                &ldquo;No tenía idea de que tenía este derecho. Gracias a Ya
                                Insolvencias, pude salvar mi negocio y mi familia volvió a
                                tener paz.&rdquo;
                            </p>
                            <p className="font-heading text-white/90 text-sm font-bold mt-3">
                                — Carlos B., comerciante, Medellín
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        {submitted ? (
                            <div className="bg-esmeralda-500/15 border border-esmeralda-400/40 rounded-2xl p-10 text-center">
                                <span className="text-5xl block mb-4">🎉</span>
                                <h3 className="font-heading text-2xl font-bold text-marino-900 mb-3">
                                    ¡Recibimos tu solicitud!
                                </h3>
                                <p className="font-body text-slate-600 text-base leading-relaxed">
                                    Un asesor de Ya Insolvencias te contactará en{" "}
                                    <strong className="text-marino-900">menos de 24 horas</strong> para
                                    evaluar tu caso de forma gratuita.
                                </p>
                                <p className="font-body text-esmeralda-600 font-bold text-sm mt-4">
                                    Reinicia tu vida financiera. Ya.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white border border-slate-200 shadow-md rounded-2xl p-8 space-y-5"
                            >
                                <div>
                                    <label className="block font-heading text-sm font-semibold text-slate-700 mb-1.5">
                                        Tu nombre *
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        required
                                        value={form.nombre}
                                        onChange={handleChange}
                                        placeholder="¿Cómo te llamas?"
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 font-body rounded-xl px-4 py-3 focus:outline-none focus:border-esmeralda-400 focus:ring-1 focus:ring-esmeralda-400 transition-colors duration-200"
                                    />
                                </div>

                                <div>
                                    <label className="block font-heading text-sm font-semibold text-slate-700 mb-1.5">
                                        Teléfono / WhatsApp *
                                    </label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        required
                                        value={form.telefono}
                                        onChange={handleChange}
                                        placeholder="300 000 0000"
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 font-body rounded-xl px-4 py-3 focus:outline-none focus:border-esmeralda-400 focus:ring-1 focus:ring-esmeralda-400 transition-colors duration-200"
                                    />
                                </div>

                                <div>
                                    <label className="block font-heading text-sm font-semibold text-slate-700 mb-1.5">
                                        ¿Cuánto debes aproximadamente?
                                    </label>
                                    <select
                                        name="deuda"
                                        value={form.deuda}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 font-body rounded-xl px-4 py-3 focus:outline-none focus:border-esmeralda-400 focus:ring-1 focus:ring-esmeralda-400 transition-colors duration-200 appearance-none"
                                    >
                                        <option value="">Selecciona un rango</option>
                                        {debtRanges.map((range) => (
                                            <option key={range} value={range}>
                                                {range}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-heading text-sm font-semibold text-slate-700 mb-1.5">
                                        Cuéntanos tu situación (opcional)
                                    </label>
                                    <textarea
                                        name="mensaje"
                                        rows={3}
                                        value={form.mensaje}
                                        onChange={handleChange}
                                        placeholder="¿Con quiénes tienes deudas? ¿Te han embargado?"
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 font-body rounded-xl px-4 py-3 focus:outline-none focus:border-esmeralda-400 focus:ring-1 focus:ring-esmeralda-400 transition-colors duration-200 resize-none"
                                    />
                                </div>

                                <a
                                    href="https://wa.me/573150952931?text=Hola%2C%20quiero%20reservar%20un%20espacio%20para%20una%20consulta.%20%C2%BFMe%20ayudan%20con%20la%20disponibilidad%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-esmeralda-500 hover:bg-esmeralda-400 text-white font-heading font-bold text-lg py-4 px-6 rounded-xl cta-glow transition-all duration-300"
                                >
                                    Quiero mi consulta gratis por WhatsApp
                                    <ArrowRightIcon className="w-5 h-5" />
                                </a>

                                <p className="text-center font-body text-slate-500 text-xs">
                                    Al enviar, aceptas que un asesor te contacte. No spam.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
