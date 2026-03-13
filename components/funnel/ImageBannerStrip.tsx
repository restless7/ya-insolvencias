"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageBannerStripProps {
    src: string;
    alt: string;
    height?: string;
}

export function ImageBannerStrip({ src, alt, height = "h-48 sm:h-56 md:h-72" }: ImageBannerStripProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className={`relative w-full ${height} overflow-hidden`}
        >
            {/* Image */}
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="100vw"
                quality={85}
            />

            {/* Top gradient fade — blends into section above */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f0faf5] to-transparent z-10 pointer-events-none" />

            {/* Bottom gradient fade — blends into section below */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f0faf5] to-transparent z-10 pointer-events-none" />

            {/* Subtle dark overlay for cohesion */}
            <div className="absolute inset-0 bg-marino-900/10 z-[5] pointer-events-none" />
        </motion.div>
    );
}
