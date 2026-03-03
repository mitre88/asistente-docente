import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
