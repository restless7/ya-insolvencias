import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                // Ya Insolvencias brand palette
                esmeralda: {
                    50: "#f0fdf8",
                    100: "#ccfbec",
                    200: "#9af5d8",
                    300: "#5eeabe",
                    400: "#25d49e",
                    500: "#00A676", // Primary — hope & growth
                    600: "#008861",
                    700: "#006c4e",
                    800: "#00553f",
                    900: "#004633",
                    950: "#00281d",
                },
                marino: {
                    50: "#f0f4ff",
                    100: "#dce6ff",
                    200: "#bacefd",
                    300: "#87abfb",
                    400: "#4d7ef7",
                    500: "#2a59ef",
                    600: "#1940e4",
                    700: "#152fd1",
                    800: "#1629aa",
                    900: "#003366", // Primary — trust & authority
                    950: "#001a33",
                },
                naranja: {
                    50: "#fff7ed",
                    100: "#ffeed4",
                    200: "#ffd9a8",
                    300: "#ffbe71",
                    400: "#ff9738",
                    500: "#FF6B00", // Accent — urgency & vitality
                    600: "#e55a00",
                    700: "#be4500",
                    800: "#973807",
                    900: "#7a300a",
                },
                // Semantic aliases
                brand: {
                    primary: "#00A676",
                    secondary: "#003366",
                    accent: "#FF6B00",
                    light: "#F0FAF5",
                },
            },
            fontFamily: {
                heading: ["Montserrat", "system-ui", "sans-serif"],
                body: ["Roboto Slab", "Georgia", "serif"],
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(16px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "glow-esmeralda": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(0, 166, 118, 0.4)" },
                    "50%": { boxShadow: "0 0 40px rgba(0, 166, 118, 0.7)" },
                },
                "pulse-orange": {
                    "0%, 100%": { opacity: "1", transform: "scale(1)" },
                    "50%": { opacity: "0.9", transform: "scale(1.05)" },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-8px)" },
                },
                "slide-up": {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.7s ease-out",
                "glow-esmeralda": "glow-esmeralda 2.5s ease-in-out infinite",
                "pulse-orange": "pulse-orange 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 5s ease-in-out infinite",
                "slide-up": "slide-up 0.6s ease-out",
            },
            backgroundImage: {
                "hero-gradient":
                    "linear-gradient(135deg, #001a33 0%, #003366 50%, #004d30 100%)",
                "esmeralda-gradient":
                    "linear-gradient(135deg, #00A676 0%, #006c4e 100%)",
                "marino-gradient": "linear-gradient(135deg, #003366 0%, #001a33 100%)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
