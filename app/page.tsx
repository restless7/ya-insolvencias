import type { Metadata } from "next";
import { HeroSection } from "@/components/funnel/HeroSection";
import { ProblemSection } from "@/components/funnel/ProblemSection";
import { SolutionSection } from "@/components/funnel/SolutionSection";
import { TestimonialsSection } from "@/components/funnel/TestimonialsSection";
import { FAQSection } from "@/components/funnel/FAQSection";
import { UrgencyCTASection } from "@/components/funnel/UrgencyCTASection";
import { FunnelFooter } from "@/components/funnel/FunnelFooter";
import { WhatsAppFAB } from "@/components/funnel/WhatsAppFAB";
import { ImageBannerStrip } from "@/components/funnel/ImageBannerStrip";
import { FunnelNavbar } from "@/components/funnel/FunnelNavbar";

export const metadata: Metadata = {
    title: "Ya Insolvencias — Consulta Gratuita | Reinicia tu Vida Financiera",
    description:
        "¿Deudas que no puedes pagar? La Ley de Insolvencia es tu derecho. Consulta gratis, sin compromiso. Pensionados, comerciantes y trabajadores colombianos.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function FunnelYaInsolvencias() {
    return (
        <>
            {/* Single scrollable funnel page — conversion-focused */}
            <main className="overflow-clip">
                <FunnelNavbar />
                {/* S1 — Hero: Curiosity hook + pain validation */}
                <HeroSection />

                {/* Visual break — Palacio-3 */}
                <ImageBannerStrip
                    src="/images/palacio-3.jpeg"
                    alt="Respaldo legal y profesional"
                    height="h-64 sm:h-80 md:h-[28rem]"
                />

                {/* S2 — Problem: Empathy + pain amplification */}
                <ProblemSection />

                {/* Visual break — Taller Gratuito (wider for visibility) */}
                <ImageBannerStrip
                    src="/images/banner1.jpeg"
                    alt="Taller gratuito: Empodérate ahora contra la deuda"
                    height="h-64 sm:h-80 md:h-[28rem]"
                />

                {/* S3 — Solution: Hope + legal framework + process */}
                <SolutionSection />

                {/* Visual break — Salario Libre */}
                <ImageBannerStrip
                    src="/images/banner3.jpeg"
                    alt="Salario libre ya: Libérate de deudas opresivas"
                />

                {/* S4 — StoryBrand Transformation: Testimonials + stats */}
                <TestimonialsSection />

                {/* Visual break — Jubilación Pacífica (wider for visibility) */}
                <ImageBannerStrip
                    src="/images/banner2.jpeg"
                    alt="Jubilación pacífica ahora: Renegocie deudas sin estrés"
                    height="h-72 sm:h-96 md:h-[32rem]"
                />

                {/* S5 — FAQ: Objection handling */}
                <FAQSection />

                {/* S7 — Urgency CTA: Lead capture form */}
                <UrgencyCTASection />

                {/* Visual break — Palacio-2 */}
                <ImageBannerStrip
                    src="/images/palacio-2.jpeg"
                    alt="Servicios jurídicos de alta calidad"
                    height="h-64 sm:h-80 md:h-[28rem]"
                />

                {/* S8 — Footer: Trust seal */}
                <FunnelFooter />
            </main>

            {/* Floating WhatsApp button — visible throughout */}
            <WhatsAppFAB />
        </>
    );
}
