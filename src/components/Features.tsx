"use client";

import RevealOnScroll from "./RevealOnScroll";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Generación de Contenido",
    description: "Crea planes de clase, guías didácticas, presentaciones y material educativo personalizado en segundos con IA avanzada.",
    color: "from-purple-500 to-purple-700",
    bgGlow: "bg-purple-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Evaluaciones Automáticas",
    description: "Genera exámenes, quizzes y rúbricas adaptadas al nivel de tus estudiantes. Corrección automática con retroalimentación detallada.",
    color: "from-blue-500 to-blue-700",
    bgGlow: "bg-blue-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Comunicación Inteligente",
    description: "Responde consultas de estudiantes y padres de forma automática, personalizada y empática. Disponible las 24 horas del día.",
    color: "from-green-500 to-green-700",
    bgGlow: "bg-green-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Planificación Curricular",
    description: "Organiza todo el año escolar con planificaciones alineadas a estándares educativos. Ajuste automático según avance del grupo.",
    color: "from-cyan-500 to-cyan-700",
    bgGlow: "bg-cyan-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Atención Personalizada",
    description: "La IA analiza el rendimiento individual de cada estudiante y sugiere estrategias de enseñanza diferenciadas para cada uno.",
    color: "from-orange-500 to-orange-700",
    bgGlow: "bg-orange-500/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Análisis y Reportes",
    description: "Obtén informes detallados del progreso académico, asistencia y participación. Visualizaciones claras para toma de decisiones.",
    color: "from-pink-500 to-pink-700",
    bgGlow: "bg-pink-500/10",
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-28 md:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-20">
          <span className="inline-block text-[var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4">
            Funcionalidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6 text-balance">
            Todo lo que necesitas para{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gradient-end)] bg-clip-text text-transparent">
              enseñar mejor
            </span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Herramientas de IA diseñadas específicamente para el contexto
            educativo. Ahorra tiempo y mejora la calidad de tu enseñanza.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <RevealOnScroll key={feature.title} delay={Math.min(idx + 1, 4) as 1 | 2 | 3 | 4}>
              <div className="group relative bg-white rounded-2xl p-10 border border-[var(--color-border)] hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:-translate-y-1 card-shine h-full">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg`}
                  style={{ animation: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget.style.animation as string) ; e.currentTarget.style.animation = "icon-bounce 0.4s ease"; }}
                  onAnimationEnd={(e) => { e.currentTarget.style.animation = "none"; }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-loose">
                  {feature.description}
                </p>
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${feature.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
