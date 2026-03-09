"use client";

import { motion } from "framer-motion";

export function FunnelFooter() {
    return (
        <footer className="bg-marino-950 py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center gap-5"
                >
                    {/* Logo mark */}
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">💼</span>
                        <div>
                            <p className="font-heading font-black text-xl text-white">
                                Ya Insolvencias
                            </p>
                            <p className="font-body text-esmeralda-400 text-sm">
                                Reinicia tu vida financiera. Ya.
                            </p>
                        </div>
                    </div>

                    {/* Legal */}
                    <p className="font-body text-white/40 text-xs max-w-xl leading-relaxed">
                        Regulados por la{" "}
                        <strong className="text-white/60">Ley 1564 de 2012</strong> (Código
                        General del Proceso). Conciliadores autorizados por el{" "}
                        <strong className="text-white/60">
                            Ministerio de Justicia de Colombia.
                        </strong>{" "}
                        Ya Insolvencias no es un banco ni entidad financiera. Presta
                        servicios de asesoría jurídica en procesos de insolvencia de persona
                        natural.
                    </p>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/57XXXXXXXXXX?text=Hola,%20quiero%20información%20sobre%20insolvencia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-esmeralda-400 hover:text-esmeralda-300 font-heading text-sm font-semibold transition-colors duration-200"
                    >
                        <span className="text-lg">💬</span>
                        WhatsApp: +57 (XXX) XXX-XXXX
                    </a>

                    {/* Divider + copyright */}
                    <div className="w-full h-px bg-white/10" />
                    <p className="font-body text-white/25 text-xs">
                        © 2026 Ya Insolvencias. Todos los derechos reservados. · Bogotá,
                        Colombia
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
