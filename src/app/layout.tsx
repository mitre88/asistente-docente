import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Alma Cobertura | Conectividad residencial y empresarial",
  description:
    "Landing corporativa para conectividad, coberturas, FODA, QR social, bot de WhatsApp y portal de pago demo.",
  keywords: [
    "internet residencial",
    "cobertura empresarial",
    "instalacion de internet",
    "whatsapp bot",
    "cobertura de servicio",
  ],
  openGraph: {
    title: "Alma Cobertura | Conectividad residencial y empresarial",
    description:
      "Servicio profesional con coberturas, servicios tecnicos, QR social, portal de pago demo y atencion por WhatsApp.",
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
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
