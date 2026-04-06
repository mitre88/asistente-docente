"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import RevealOnScroll from "./RevealOnScroll";

const capIcons: Record<string, ReactNode> = {
  content: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  eval: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  comm: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  innov: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
};

const capabilities = [
  {
    category: "Creación de Contenido",
    iconKey: "content",
    items: [
      "Planes de clase adaptados a cualquier materia y nivel",
      "Guías de estudio y resúmenes automáticos",
      "Presentaciones educativas con estructura pedagógica",
      "Material didáctico diferenciado por nivel",
      "Actividades interactivas y dinámicas grupales",
      "Bibliografías y recursos complementarios",
      "Infografías educativas automatizadas",
      "Mapas conceptuales automáticos",
    ],
  },
  {
    category: "Evaluación y Seguimiento",
    iconKey: "eval",
    items: [
      "Exámenes con diversos tipos de preguntas",
      "Rúbricas de evaluación personalizadas",
      "Corrección automática con retroalimentación",
      "Seguimiento individual del progreso estudiantil",
      "Reportes de rendimiento por competencias",
      "Detección temprana de estudiantes en riesgo",
      "Banco de preguntas por tema",
      "Análisis de dificultad de reactivos",
    ],
  },
  {
    category: "Comunicación y Gestión",
    iconKey: "comm",
    items: [
      "Respuestas automáticas a consultas frecuentes",
      "Comunicados para padres y representantes",
      "Recordatorios de tareas y evaluaciones",
      "Actas de reunión y minutas automáticas",
      "Informes de conducta y participación",
      "Coordinación de actividades extracurriculares",
      "Bitácora docente automática",
      "Seguimiento de acuerdos con padres",
    ],
  },
  {
    category: "Innovación Pedagógica",
    iconKey: "innov",
    items: [
      "Estrategias de enseñanza diferenciada con IA",
      "Gamificación de contenidos educativos",
      "Adaptación curricular para necesidades especiales",
      "Proyectos interdisciplinarios automatizados",
      "Recursos multimedia y audiovisuales",
      "Tutoría virtual personalizada 24/7",
      "Análisis de estilos de aprendizaje",
      "Sugerencias de recursos digitales",
    ],
  },
];

export default function Capabilities() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="capacidades" className="scroll-mt-24 py-32 md:py-40 bg-[var(--color-surface-dark)] relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-24">
          <span className="inline-block text-[var(--color-primary-light)] text-sm font-semibold tracking-widest uppercase mb-4">
            Capacidades Completas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
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

            <div className="space-y-6">
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
                      className="w-full glass rounded-2xl px-8 py-6 text-left hover:border-purple-500/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                            {capIcons[cap.iconKey]}
                          </div>
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
                          isOpen ? "max-h-96 mt-5 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="space-y-3">
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
