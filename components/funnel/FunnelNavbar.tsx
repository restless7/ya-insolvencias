"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
);

export function FunnelNavbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 10);
    });

    const scrollToForm = () => {
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 ${
                scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 sm:py-6">
                    <div className="flex-shrink-0 flex items-center gap-6">
                        <Image
                            src="/images/logo.png"
                            alt="Ya Insolvencias Logo"
                            width={480}
                            height={144}
                            className="h-24 sm:h-28 w-auto object-contain drop-shadow-sm"
                            priority
                        />
                        
                        <div className="hidden lg:flex items-center transition-transform hover:scale-105 duration-300">
                            <Image 
                                src="/images/Flag_of_Santander_Department.png" 
                                alt="Bandera de Santander" 
                                width={360} 
                                height={120} 
                                className="h-20 xl:h-24 w-auto object-contain drop-shadow-sm rounded"
                                priority
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button
                            onClick={scrollToForm}
                            className={`group relative overflow-hidden inline-flex items-center justify-center gap-3 font-heading font-bold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full transition-all duration-300 ${
                                scrolled
                                    ? "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/30"
                                    : "bg-white text-marino-900 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                            }`}
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${scrolled ? 'from-[#25D366] via-[#20bd5a] to-[#25D366]' : 'from-slate-50 via-white to-slate-50'}`} />
                            
                            <span className="relative z-10 flex items-center gap-2">
                                <WhatsAppIcon className={`w-5 h-5 flex-shrink-0 ${scrolled ? 'text-white' : 'text-[#25D366]'}`} />
                                <span className="hidden xl:inline">Contáctanos desde cualquier parte</span>
                                <span className="hidden sm:inline xl:hidden">Contáctanos</span>
                                <span className="sm:hidden">Contáctanos</span>
                            </span>
                            
                            <span className={`relative z-10 flex items-center gap-1.5 pl-3 border-l transition-colors duration-300 ${scrolled ? 'border-white/30' : 'border-slate-200'}`}>
                                <GlobeAltIcon className="w-5 h-5 opacity-90" />
                                <span className="text-base tracking-widest hidden sm:inline-flex">🇨🇴 🇺🇸 🇪🇸 🇲🇽</span>
                                <span className="text-base sm:hidden">🌎</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
