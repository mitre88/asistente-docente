"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const tabs = [
  {
    id: "plan",
    label: "Plan de Clase",
    icon: "📋",
    content: (
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 text-left">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Matemáticas · 3° Primaria</span>
          </div>
          <span className="text-xs text-gray-400">Generado en 12 seg</span>
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-1">Fracciones equivalentes</h4>
        <p className="text-sm text-gray-500 mb-4">Duración: 50 min · Competencia: Resolución de problemas</p>
        <div className="space-y-5 text-sm">
          <div className="bg-blue-50 rounded-lg p-3">
            <span className="font-semibold text-blue-800">🎯 Objetivo:</span>
            <span className="text-blue-700 ml-1">El alumno identificará y generará fracciones equivalentes usando material concreto y representaciones gráficas.</span>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <span className="font-semibold text-green-800">📖 Inicio (10 min):</span>
            <span className="text-green-700 ml-1">Activación con pizza fraccionada. Pregunta detonadora: ¿Es lo mismo 1/2 que 2/4?</span>
          </div>
          <div className="bg-yellow-50 rounded-lg p-3">
            <span className="font-semibold text-yellow-800">⚙️ Desarrollo (30 min):</span>
            <span className="text-yellow-700 ml-1">Trabajo en equipos con tiras de fracciones. Registro en cuaderno. Ejercicios diferenciados por nivel.</span>
          </div>
          <div className="bg-purple-50 rounded-lg p-3">
            <span className="font-semibold text-purple-800">✅ Cierre (10 min):</span>
            <span className="text-purple-700 ml-1">Plenaria de resultados. Ticket de salida: 3 pares de fracciones equivalentes.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "exam",
    label: "Examen Generado",
    icon: "📝",
    content: (
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 text-left">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Ciencias Naturales · 5° Primaria</span>
          <span className="text-xs text-gray-400">10 reactivos · 30 min</span>
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-4">Examen: El Sistema Solar</h4>
        <div className="space-y-5 text-sm">
          <div className="border-l-4 border-blue-400 pl-4">
            <p className="font-semibold text-gray-800">1. Opción múltiple</p>
            <p className="text-gray-600">¿Cuál es el planeta más grande del Sistema Solar?</p>
            <div className="mt-1 space-y-1 text-gray-500">
              <p>a) Marte &nbsp; b) <span className="text-green-600 font-semibold">Júpiter ✓</span> &nbsp; c) Saturno &nbsp; d) Venus</p>
            </div>
          </div>
          <div className="border-l-4 border-purple-400 pl-4">
            <p className="font-semibold text-gray-800">2. Verdadero o Falso</p>
            <p className="text-gray-600">El Sol es una estrella. <span className="text-green-600 font-semibold">(V) ✓</span></p>
          </div>
          <div className="border-l-4 border-orange-400 pl-4">
            <p className="font-semibold text-gray-800">3. Respuesta abierta</p>
            <p className="text-gray-600">Explica con tus palabras por qué Plutón ya no se considera un planeta.</p>
            <p className="text-xs text-gray-400 mt-1 italic">Rúbrica: Claridad (2pts), Argumentación (2pts), Ortografía (1pt)</p>
          </div>
          <div className="border-l-4 border-teal-400 pl-4">
            <p className="font-semibold text-gray-800">4. Relacionar columnas</p>
            <p className="text-gray-600">Une cada planeta con su característica principal...</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "report",
    label: "Reporte de Estudiante",
    icon: "📊",
    content: (
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 text-left">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Reporte Individual</span>
          <span className="text-xs text-gray-400">Periodo: Enero - Febrero 2026</span>
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-1">María García López</h4>
        <p className="text-sm text-gray-500 mb-4">4° Grado · Grupo B</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-600">8.7</div>
            <div className="text-xs text-gray-500">Promedio General</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-blue-600">92%</div>
            <div className="text-xs text-gray-500">Asistencia</div>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-gray-700 mb-2">Rendimiento por materia:</p>
          {[
            { name: "Español", pct: 90, color: "bg-green-500" },
            { name: "Matemáticas", pct: 75, color: "bg-yellow-500" },
            { name: "Ciencias", pct: 95, color: "bg-green-500" },
            { name: "Historia", pct: 85, color: "bg-blue-500" },
            { name: "Inglés", pct: 70, color: "bg-orange-500" },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-3">
              <span className="w-24 text-gray-600">{s.name}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div className={`${s.color} h-3 rounded-full transition-all`} style={{ width: `${s.pct}%` }} />
              </div>
              <span className="text-gray-700 font-semibold w-10 text-right">{s.pct}%</span>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-yellow-50 rounded-lg p-3 text-sm">
          <span className="font-semibold text-yellow-800">💡 Recomendación IA:</span>
          <span className="text-yellow-700 ml-1">Reforzar matemáticas e inglés con ejercicios de práctica adicionales. Se sugiere tutoría entre pares.</span>
        </div>
      </div>
    ),
  },
  {
    id: "letter",
    label: "Comunicado a Padres",
    icon: "✉️",
    content: (
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 text-left">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">Comunicado Oficial</span>
          <span className="text-xs text-gray-400">Tono: Formal y cálido</span>
        </div>
        <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
          <p className="font-semibold">Estimados Padres de Familia del Grupo 3°A:</p>
          <p>Les informo que la próxima semana realizaremos nuestra <strong>Feria de Ciencias</strong> el día jueves 12 de marzo, de 9:00 a 12:00 hrs en el patio principal de la escuela.</p>
          <p>Su hijo(a) participará presentando el proyecto &quot;El ciclo del agua&quot;. Los materiales necesarios ya fueron trabajados en clase. Solo solicitamos:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Una cartulina blanca</li>
            <li>Colores y plumones</li>
            <li>Asistencia puntual a las 8:30 hrs</li>
          </ul>
          <p>Los invitamos cordialmente a acompañarnos. Su presencia motiva enormemente a nuestros estudiantes.</p>
          <p>Atentamente,<br /><strong>Profra. Laura Mendoza</strong><br />Titular del Grupo 3°A</p>
        </div>
      </div>
    ),
  },
  {
    id: "rubric",
    label: "Rúbrica de Evaluación",
    icon: "📐",
    content: (
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 text-left overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">Rúbrica · Exposición Oral</span>
          <span className="text-xs text-gray-400">Escala: 4 niveles</span>
        </div>
        <table className="w-full text-xs md:text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-2 font-semibold text-gray-700">Criterio</th>
              <th className="p-2 text-center font-semibold text-red-600">Insuficiente (1)</th>
              <th className="p-2 text-center font-semibold text-yellow-600">En desarrollo (2)</th>
              <th className="p-2 text-center font-semibold text-blue-600">Satisfactorio (3)</th>
              <th className="p-2 text-center font-semibold text-green-600">Excelente (4)</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-t">
              <td className="p-2 font-semibold">Dominio del tema</td>
              <td className="p-2 text-center">Lee todo del material</td>
              <td className="p-2 text-center">Lee la mayoría</td>
              <td className="p-2 text-center">Consulta poco</td>
              <td className="p-2 text-center">No necesita material</td>
            </tr>
            <tr className="border-t bg-gray-50/50">
              <td className="p-2 font-semibold">Claridad</td>
              <td className="p-2 text-center">No se entiende</td>
              <td className="p-2 text-center">Parcialmente claro</td>
              <td className="p-2 text-center">Claro y ordenado</td>
              <td className="p-2 text-center">Muy claro y fluido</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-semibold">Material visual</td>
              <td className="p-2 text-center">Sin apoyo visual</td>
              <td className="p-2 text-center">Básico</td>
              <td className="p-2 text-center">Bien diseñado</td>
              <td className="p-2 text-center">Creativo y efectivo</td>
            </tr>
            <tr className="border-t bg-gray-50/50">
              <td className="p-2 font-semibold">Tiempo</td>
              <td className="p-2 text-center">Excede ±50%</td>
              <td className="p-2 text-center">Excede ±25%</td>
              <td className="p-2 text-center">Dentro del rango</td>
              <td className="p-2 text-center">Exacto</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
];

export default function AIShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section id="demostracion" className="scroll-mt-24 py-32 md:py-40 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-24">
          <span className="inline-block text-[var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4">
            Demostración
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-6">
            La IA en Acción
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Mira ejemplos reales de lo que el asistente genera en segundos.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-2 mb-10 pb-2 -mx-2 px-2">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActive(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === idx
                    ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white shadow-lg shadow-purple-500/20"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="transition-all duration-300">
              {tabs[active].content}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
