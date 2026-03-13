"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/solid";

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
                    <div className="flex-shrink-0 flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Ya Insolvencias Logo"
                            width={480}
                            height={144}
                            className="h-28 sm:h-32 w-auto object-contain drop-shadow-sm"
                            priority
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={scrollToForm}
                            className={`inline-flex items-center justify-center gap-2 font-heading font-bold text-sm sm:text-base px-6 py-2.5 rounded-full transition-all duration-300 ${
                                scrolled
                                    ? "bg-esmeralda-500 hover:bg-esmeralda-600 text-white shadow-md shadow-esmeralda-500/20"
                                    : "bg-white text-marino-900 shadow-md hover:bg-slate-50"
                            }`}
                        >
                            <PhoneIcon className="w-4 h-4" />
                            <span className="hidden sm:inline">Consulta Gratis</span>
                            <span className="sm:hidden">Consultar</span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
