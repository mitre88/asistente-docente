"use client";

import RevealOnScroll from "./RevealOnScroll";

const integrations = [
  { name: "WhatsApp", icon: "💬", desc: "Canal principal de comunicación", highlight: true },
  { name: "Google Classroom", icon: "📚", desc: "Sincroniza tareas y calificaciones" },
  { name: "Microsoft Teams", icon: "👥", desc: "Para instituciones con Office 365" },
  { name: "Moodle", icon: "🎓", desc: "Compatible con plataformas LMS" },
  { name: "Canvas LMS", icon: "🖥️", desc: "Integración bidireccional" },
  { name: "PDF / Word / Excel", icon: "📄", desc: "Exporta en cualquier formato" },
  { name: "Google Drive", icon: "☁️", desc: "Sincronización automática" },
  { name: "OneDrive", icon: "💾", desc: "Respaldo en la nube de Microsoft" },
];

export default function Integrations() {
  return (
    <section className="py-28 md:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-20">
          <span className="inline-block text-[var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4">
            Ecosistema
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            Integraciones y Compatibilidad
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Se conecta con las herramientas que ya usas en tu escuela.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="relative max-w-4xl mx-auto">
            {/* Center hub */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gradient-end)] items-center justify-center z-10 shadow-xl shadow-purple-500/30">
              <div className="text-center text-white">
                <div className="text-2xl">🤖</div>
                <div className="text-xs font-bold mt-1">Asistente<br/>Docente</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {integrations.map((int, idx) => (
                <div
                  key={int.name}
                  className={`relative bg-white rounded-xl p-6 border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${
                    int.highlight ? "border-green-300 shadow-md shadow-green-500/10" : "border-[var(--color-border)]"
                  }`}
                >
                  <div className="text-3xl mb-3">{int.icon}</div>
                  <h4 className="font-bold text-[var(--color-text)] text-sm">{int.name}</h4>
                  <p className="text-[var(--color-text-secondary)] text-xs mt-1">{int.desc}</p>
                  {int.highlight && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">PRINCIPAL</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
