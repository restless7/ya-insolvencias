"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FloatingWalletProps {
    /** Tailwind positioning classes, e.g. "top-20 -right-8" */
    position?: string;
    /** Size in px */
    size?: number;
    /** Base opacity (0-100 out of 100) */
    opacity?: number;
    /** Extra delay in seconds */
    delay?: number;
    /** Mirror horizontally */
    flip?: boolean;
}

export function FloatingWallet({
    position = "top-20 right-8",
    size = 120,
    opacity = 10,
    delay = 0,
    flip = false,
}: FloatingWalletProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className={`hidden lg:block absolute ${position} z-0 pointer-events-auto`}
        >
            <motion.div
                initial={{ opacity: opacity / 100 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 + delay, ease: "easeInOut" }}
                whileHover={{ scale: 1.4, rotate: 12, opacity: 1 }}
                className="cursor-pointer transition-all duration-300"
            >
                <Image
                    src="/images/wallet.png"
                    alt="Ya Insolvencias"
                    width={size}
                    height={size}
                    className={`drop-shadow-2xl ${flip ? "scale-x-[-1]" : ""}`}
                    quality={75}
                />
            </motion.div>
        </motion.div>
    );
}

interface FloatingHandsCoinsProps {
    position?: string;
    size?: number;
    opacity?: number;
    delay?: number;
    flip?: boolean;
}

export function FloatingHandsCoins({
    position = "bottom-20 left-8",
    size = 160,
    opacity = 12,
    delay = 0,
    flip = false,
}: FloatingHandsCoinsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: flip ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay }}
            className={`hidden lg:block absolute ${position} z-0 pointer-events-auto`}
        >
            <motion.div
                initial={{ opacity: opacity / 100 }}
                animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                whileHover={{ scale: 1.35, opacity: 1 }}
                className="cursor-pointer transition-all duration-300"
            >
                <Image
                    src="/images/hands-coins.png"
                    alt="Renegociación de deudas"
                    width={size}
                    height={size}
                    className={`drop-shadow-xl ${flip ? "scale-x-[-1]" : ""}`}
                    quality={75}
                />
            </motion.div>
        </motion.div>
    );
}
