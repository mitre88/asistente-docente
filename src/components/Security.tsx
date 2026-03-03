"use client";

import RevealOnScroll from "./RevealOnScroll";

const items = [
  { icon: "🔒", title: "Encriptación end-to-end", desc: "Toda la comunicación está protegida con cifrado de extremo a extremo." },
  { icon: "⚖️", title: "Cumplimiento LFPDPPP", desc: "Cumplimos con la Ley Federal de Protección de Datos Personales de México." },
  { icon: "🇲🇽", title: "Servidores en México", desc: "Tu información se aloja en centros de datos ubicados en territorio nacional." },
  { icon: "🗑️", title: "Sin almacenamiento permanente", desc: "Los datos de estudiantes no se almacenan de forma permanente en nuestros sistemas." },
  { icon: "📜", title: "ISO 27001 (en proceso)", desc: "Trabajamos activamente para obtener la certificación internacional de seguridad." },
  { icon: "🔍", title: "Auditorías trimestrales", desc: "Realizamos auditorías de seguridad cada 3 meses con empresas externas." },
];

export default function Security() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <span className="inline-block text-[var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4">
            Confianza
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            Seguridad y Privacidad
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Tus datos y los de tus estudiantes están protegidos con los más altos estándares.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item, idx) => (
            <RevealOnScroll key={item.title} delay={Math.min((idx % 3) + 1, 3) as 1 | 2 | 3}>
              <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">{item.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
