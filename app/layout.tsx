import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ya Insolvencias — Reinicia tu vida financiera",
    description:
        "Asesoría en procesos de insolvencia para colombianos. Consulta gratuita. Regulados por la Ley 1564 de 2012.",
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
        <html lang="es">
            <head>
                <meta name="robots" content="noindex, nofollow" />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
