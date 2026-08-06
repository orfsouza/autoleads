import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#17140F",       // asfalto/óleo escuro, quente
        surface: "#1F1B14",    // painel um pouco mais claro
        surface2: "#2A241A",   // cartão elevado
        accent: "#FF5E1A",     // laranja de segurança (sinalização de oficina)
        gold: "#E8C468",       // amber de farol / latão desgastado
        steel: "#A9AFB5",      // cromado / aço
        paper: "#F5F1E8",      // texto principal, off-white de manual
        muted: "#9C9488",      // texto secundário
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        stencil: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
