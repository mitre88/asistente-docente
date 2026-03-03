import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asistente Docente | IA para Educadores",
  description:
    "Asistentes de inteligencia artificial automatizados para docentes. Potencia tu enseñanza con IA directamente desde WhatsApp.",
  keywords: [
    "IA docente",
    "inteligencia artificial educacion",
    "asistente profesor",
    "whatsapp educativo",
    "automatizacion docente",
  ],
  openGraph: {
    title: "Asistente Docente | IA para Educadores",
    description:
      "Potencia tu enseñanza con asistentes de IA automatizados desde WhatsApp",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
