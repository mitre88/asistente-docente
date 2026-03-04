"use client";

import RevealOnScroll from "./RevealOnScroll";

const integrations = [
  { name: "WhatsApp", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, color: "bg-green-100 text-green-600", desc: "Canal principal de comunicación", highlight: true },
  { name: "Google Classroom", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>, color: "bg-blue-100 text-blue-600", desc: "Sincroniza tareas y calificaciones" },
  { name: "Microsoft Teams", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, color: "bg-indigo-100 text-indigo-600", desc: "Para instituciones con Office 365" },
  { name: "Moodle", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></svg>, color: "bg-orange-100 text-orange-600", desc: "Compatible con plataformas LMS" },
  { name: "Canvas LMS", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>, color: "bg-red-100 text-red-600", desc: "Integración bidireccional" },
  { name: "PDF / Word / Excel", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, color: "bg-purple-100 text-purple-600", desc: "Exporta en cualquier formato" },
  { name: "Google Drive", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>, color: "bg-cyan-100 text-cyan-600", desc: "Sincronización automática" },
  { name: "OneDrive", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>, color: "bg-sky-100 text-sky-600", desc: "Respaldo en la nube de Microsoft" },
];

export default function Integrations() {
  return (
    <section id="integraciones" className="scroll-mt-24 py-32 md:py-40 bg-[var(--color-surface-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-24">
          <span className="inline-block text-[var(--color-primary-light)] text-sm font-semibold tracking-widest uppercase mb-4">
            Ecosistema
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Integraciones y Compatibilidad
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Se conecta con las herramientas que ya usas en tu escuela.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="relative max-w-4xl mx-auto">
            {/* Center hub */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gradient-end)] items-center justify-center z-10 shadow-xl shadow-purple-500/30">
              <div className="text-center text-white">
                <svg className="w-8 h-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                <div className="text-xs font-bold mt-1">Asistente<br/>Docente</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {integrations.map((int) => (
                <div
                  key={int.name}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${
                    int.highlight ? "border-green-500/30 shadow-md shadow-green-500/10" : "border-white/10"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full ${int.color} flex items-center justify-center mx-auto mb-3`}>
                    {int.icon}
                  </div>
                  <h4 className="font-bold text-white text-sm">{int.name}</h4>
                  <p className="text-gray-400 text-xs mt-1">{int.desc}</p>
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
