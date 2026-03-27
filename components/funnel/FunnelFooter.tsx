"use client";

import { motion } from "framer-motion";

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 10.16 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

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
                    <p className="font-body text-white/40 text-xs max-w-2xl leading-relaxed">
                        Regulados por la <strong className="text-white/60">Ley 2445 de 2025</strong> y por el Código General del Proceso. Ya Insolvencias no es un banco ni entidad financiera. Presta servicios de asesoría jurídica y representacion judicial en procesos de insolvencia de persona natural.
                    </p>

                    {/* Contact Links */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <a
                            href="https://wa.me/573150952931?text=Hola%2C%20quiero%20reservar%20un%20espacio%20para%20una%20consulta.%20%C2%BFMe%20ayudan%20con%20la%20disponibilidad%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-esmeralda-400 hover:text-esmeralda-300 font-heading text-sm font-semibold transition-colors duration-200"
                        >
                            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                            WhatsApp: +57 315 095 2931
                        </a>

                        <a
                            href="https://www.instagram.com/yainsolvencias/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-heading text-sm font-semibold transition-colors duration-200"
                        >
                            <InstagramIcon className="w-5 h-5 text-white/80" />
                            Instagram: @yainsolvencias
                        </a>
                    </div>

                    {/* Divider + copyright */}
                    <div className="w-full h-px bg-white/10" />
                    <div className="flex flex-col items-center gap-4">
                        <p className="font-body text-white/25 text-xs">
                            © 2026 Ya Insolvencias. Todos los derechos reservados. · Bogotá,
                            Colombia
                        </p>
                        <a
                            href="https://www.apexaisolutions.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs text-white/25 hover:text-white transition-colors duration-300 font-sans"
                        >
                            <img src="/images/apex-logo.png" alt="Apex AI Solutions" className="w-4 h-4 object-contain brightness-0 invert opacity-50" />
                            Powered by Apex AI Solutions
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
