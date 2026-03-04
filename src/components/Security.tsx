"use client";

import RevealOnScroll from "./RevealOnScroll";

const items = [
  { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, color: "bg-purple-100 text-purple-600", title: "Encriptación end-to-end", desc: "Toda la comunicación está protegida con cifrado de extremo a extremo." },
  { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, color: "bg-blue-100 text-blue-600", title: "Cumplimiento LFPDPPP", desc: "Cumplimos con la Ley Federal de Protección de Datos Personales de México." },
  { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, color: "bg-green-100 text-green-600", title: "Servidores en México", desc: "Tu información se aloja en centros de datos ubicados en territorio nacional." },
  { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>, color: "bg-red-100 text-red-600", title: "Sin almacenamiento permanente", desc: "Los datos de estudiantes no se almacenan de forma permanente en nuestros sistemas." },
  { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, color: "bg-amber-100 text-amber-600", title: "ISO 27001 (en proceso)", desc: "Trabajamos activamente para obtener la certificación internacional de seguridad." },
  { icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, color: "bg-indigo-100 text-indigo-600", title: "Auditorías trimestrales", desc: "Realizamos auditorías de seguridad cada 3 meses con empresas externas." },
];

export default function Security() {
  return (
    <section id="seguridad" className="scroll-mt-24 py-32 md:py-40 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-24">
          <span className="inline-block text-[var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4">
            Confianza
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-6">
            Seguridad y Privacidad
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Tus datos y los de tus estudiantes están protegidos con los más altos estándares.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <RevealOnScroll key={item.title} delay={Math.min((idx % 3) + 1, 3) as 1 | 2 | 3}>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-border)] text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-[var(--color-text)] mb-3">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">{item.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
