import type { Metadata } from "next";
import { HeroSection } from "@/components/funnel/HeroSection";
import { ProblemSection } from "@/components/funnel/ProblemSection";
import { SolutionSection } from "@/components/funnel/SolutionSection";
import { TestimonialsSection } from "@/components/funnel/TestimonialsSection";
import { FAQSection } from "@/components/funnel/FAQSection";
import { PricingSection } from "@/components/funnel/PricingSection";
import { UrgencyCTASection } from "@/components/funnel/UrgencyCTASection";
import { FunnelFooter } from "@/components/funnel/FunnelFooter";
import { WhatsAppFAB } from "@/components/funnel/WhatsAppFAB";

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
            {/* Single scrollable funnel page — no navigation, conversion-focused */}
            <main className="overflow-x-hidden">
                {/* S1 — Hero: Curiosity hook + pain validation */}
                <HeroSection />

                {/* S2 — Problem: Empathy + pain amplification */}
                <ProblemSection />

                {/* S3 — Solution: Hope + legal framework + process */}
                <SolutionSection />

                {/* S4 — StoryBrand Transformation: Testimonials + stats */}
                <TestimonialsSection />

                {/* S5 — FAQ: Objection handling */}
                <FAQSection />

                {/* S6 — Pricing: Commitment ladder */}
                <PricingSection />

                {/* S7 — Urgency CTA: Lead capture form */}
                <UrgencyCTASection />

                {/* S8 — Footer: Trust seal */}
                <FunnelFooter />
            </main>

            {/* Floating WhatsApp button — visible throughout */}
            <WhatsAppFAB />
        </>
    );
}
