"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const capabilities = [
  {
    category: "Creación de Contenido",
    icon: "📝",
    items: [
      "Planes de clase adaptados a cualquier materia y nivel",
      "Guías de estudio y resúmenes automáticos",
      "Presentaciones educativas con estructura pedagógica",
      "Material didáctico diferenciado por nivel",
      "Actividades interactivas y dinámicas grupales",
      "Bibliografías y recursos complementarios",
    ],
  },
  {
    category: "Evaluación y Seguimiento",
    icon: "📊",
    items: [
      "Exámenes con diversos tipos de preguntas",
      "Rúbricas de evaluación personalizadas",
      "Corrección automática con retroalimentación",
      "Seguimiento individual del progreso estudiantil",
      "Reportes de rendimiento por competencias",
      "Detección temprana de estudiantes en riesgo",
    ],
  },
  {
    category: "Comunicación y Gestión",
    icon: "💬",
    items: [
      "Respuestas automáticas a consultas frecuentes",
      "Comunicados para padres y representantes",
      "Recordatorios de tareas y evaluaciones",
      "Actas de reunión y minutas automáticas",
      "Informes de conducta y participación",
      "Coordinación de actividades extracurriculares",
    ],
  },
  {
    category: "Innovación Pedagógica",
    icon: "🚀",
    items: [
      "Estrategias de enseñanza diferenciada con IA",
      "Gamificación de contenidos educativos",
      "Adaptación curricular para necesidades especiales",
      "Proyectos interdisciplinarios automatizados",
      "Recursos multimedia y audiovisuales",
      "Tutoría virtual personalizada 24/7",
    ],
  },
];

export default function Capabilities() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-dark)] relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <span className="inline-block text-[var(--color-primary-light)] text-sm font-semibold tracking-widest uppercase mb-4">
            Capacidades Completas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Todo el poder de la IA
            <br />
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-cyan-400 bg-clip-text text-transparent">
              al servicio de la educación
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Más de 50 funciones automatizadas diseñadas para cubrir cada
            aspecto de la labor docente.
          </p>
        </RevealOnScroll>

        {/* Timeline / Accordion */}
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-gradient-end)] to-[var(--color-primary)] opacity-30" />

            <div className="space-y-4">
              {capabilities.map((cap, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={cap.category} className="relative pl-16 md:pl-20">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-4 md:left-6 top-5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        isOpen
                          ? "bg-[var(--color-primary)] border-[var(--color-primary-light)] scale-125 shadow-lg shadow-purple-500/40"
                          : "bg-[var(--color-surface-dark)] border-gray-600"
                      }`}
                    />

                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      className="w-full glass rounded-xl px-6 py-5 text-left hover:border-purple-500/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{cap.icon}</span>
                          <h3 className="text-lg font-bold text-white">{cap.category}</h3>
                        </div>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="space-y-2.5">
                          {cap.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <svg
                                className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span className="text-gray-300 text-sm leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
