import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ya Insolvencias — Reinicia tu vida financiera",
    description:
        "Asesoría en procesos de insolvencia para colombianos. Consulta gratuita. Regulados por la Ley 2445 de 2025.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" style={{ colorScheme: "light" }}>
            <head>
                <meta name="robots" content="noindex, nofollow" />
                <link rel="icon" href="/images/wallet.ico" />
            </head>
            <body className="antialiased bg-white text-slate-900">{children}</body>
        </html>
    );
}
