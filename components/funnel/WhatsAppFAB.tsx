"use client";

import { motion } from "framer-motion";

export function WhatsAppFAB() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5, type: "spring" }}
            className="fixed bottom-6 right-6 z-50"
        >
            <motion.a
                href="https://wa.me/573150952931?text=Hola%2C%20quiero%20reservar%20un%20espacio%20para%20una%20consulta.%20%C2%BFMe%20ayudan%20con%20la%20disponibilidad%3F"
                target="_blank"
                rel="noopener noreferrer"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="flex items-center gap-3 bg-naranja-500 hover:bg-naranja-400 text-white font-heading font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                aria-label="Chatea con nosotros por WhatsApp"
            >
                <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current flex-shrink-0"
                    aria-hidden="true"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.874L0 24l6.336-1.506A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.022-1.38l-.36-.214-3.76.894.91-3.64-.233-.374A9.778 9.778 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                </svg>
                <span className="hidden sm:inline">Consulta gratis</span>
            </motion.a>
        </motion.div>
    );
}
