"use client";

import RevealOnScroll from "./RevealOnScroll";

const useCases = [
  {
    icon: "🎒",
    role: "Profesor de primaria",
    scenario: "Creando exámenes diferenciados por nivel",
    before: "3 horas creando 3 versiones del mismo examen manualmente",
    after: "En 2 minutos genera exámenes para nivel básico, intermedio y avanzado con clave de respuestas",
  },
  {
    icon: "🏫",
    role: "Director escolar",
    scenario: "Generando reportes de rendimiento institucional",
    before: "Semanas recopilando datos de cada grupo en hojas de cálculo",
    after: "Reporte consolidado con gráficas, tendencias y recomendaciones en minutos",
  },
  {
    icon: "🔬",
    role: "Maestro de secundaria",
    scenario: "Planificando proyecto interdisciplinario",
    before: "Múltiples reuniones para coordinar contenidos entre materias",
    after: "Proyecto integrador que conecta Ciencias, Matemáticas y Español automáticamente",
  },
  {
    icon: "💜",
    role: "Docente de educación especial",
    scenario: "Adaptando material para necesidades específicas",
    before: "Horas modificando cada recurso para diferentes capacidades",
    after: "Material adaptado con instrucciones claras, apoyo visual y actividades multinivel",
  },
  {
    icon: "📋",
    role: "Coordinador académico",
    scenario: "Alineando curriculum a estándares SEP",
    before: "Revisión manual de cada plan contra el programa oficial",
    after: "Verificación automática de alineación con aprendizajes esperados de la NEM",
  },
  {
    icon: "🌍",
    role: "Profesor de idiomas",
    scenario: "Creando ejercicios de conversación",
    before: "Buscar y adaptar diálogos de libros o internet",
    after: "Diálogos contextualizados por nivel MCER con vocabulario progresivo y audio sugerido",
  },
  {
    icon: "🎯",
    role: "Tutor académico",
    scenario: "Planes de intervención para estudiantes en riesgo",
    before: "Diagnóstico informal sin seguimiento estructurado",
    after: "Plan personalizado con actividades semanales, metas medibles y seguimiento automático",
  },
  {
    icon: "📐",
    role: "Maestro de preparatoria",
    scenario: "Creando rúbricas de evaluación por competencias",
    before: "Copiar rúbricas genéricas que no se ajustan al proyecto",
    after: "Rúbrica específica con descriptores detallados por nivel de desempeño",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-dark)] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[150px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <span className="inline-block text-[var(--color-primary-light)] text-sm font-semibold tracking-widest uppercase mb-4">
            Casos de Uso
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Casos de Uso Reales
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre cómo docentes de todo México transforman su práctica diaria.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc, idx) => (
            <RevealOnScroll key={uc.role} delay={Math.min((idx % 2) + 1, 3) as 1 | 2 | 3}>
              <div className="glass rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{uc.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">{uc.role}</h3>
                    <p className="text-purple-300 text-sm mb-3">{uc.scenario}</p>
                    <div className="space-y-2">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                        <span className="text-red-400 text-xs font-semibold">❌ Sin IA:</span>
                        <p className="text-gray-400 text-sm mt-1">{uc.before}</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                        <span className="text-green-400 text-xs font-semibold">✅ Con Asistente Docente:</span>
                        <p className="text-gray-300 text-sm mt-1">{uc.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
