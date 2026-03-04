"use client";

import RevealOnScroll from "./RevealOnScroll";

const steps = [
  {
    step: "01",
    title: "Conecta tu WhatsApp",
    description: "Regístrate y vincula tu número de WhatsApp en menos de 2 minutos. Sin instalaciones, sin apps adicionales.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Configura tu Perfil",
    description: "Indica tu materia, nivel educativo, número de estudiantes y preferencias. La IA se adapta a tu contexto.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Envía tu Solicitud",
    description: 'Escribe lo que necesitas en lenguaje natural: "Crea un examen de matemáticas para 5to grado sobre fracciones".',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Recibe al Instante",
    description: "En segundos recibes el contenido listo para usar, editar o compartir con tus estudiantes directamente.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="20 6 9 17 4 12" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 md:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-20">
          <span className="inline-block text-[var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4">
            Proceso Simple
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            Cómo funciona
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            En 4 sencillos pasos estarás automatizando tu labor docente.
            Sin curva de aprendizaje, sin complicaciones.
          </p>
        </RevealOnScroll>

        <div className="relative">
          {/* Progress line connecting steps (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-gradient-mid)] to-[var(--color-gradient-end)] rounded-full opacity-30" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((s, idx) => (
              <RevealOnScroll key={s.step} delay={Math.min(idx + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="relative group text-center">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gradient-end)] flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-xl shadow-purple-500/20 relative z-10">
                    {s.icon}
                  </div>
                  <div className="text-[var(--color-primary)] font-bold text-sm mb-2">
                    PASO {s.step}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">
                    {s.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
