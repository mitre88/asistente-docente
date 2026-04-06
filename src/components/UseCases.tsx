"use client";

import RevealOnScroll from "./RevealOnScroll";

const useCases = [
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    color: "bg-blue-500/20 text-blue-400",
    role: "Profesor de primaria",
    scenario: "Creando exámenes diferenciados por nivel",
    before: "3 horas creando 3 versiones del mismo examen manualmente",
    after: "En 2 minutos genera exámenes para nivel básico, intermedio y avanzado con clave de respuestas",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    color: "bg-purple-500/20 text-purple-400",
    role: "Director escolar",
    scenario: "Generando reportes de rendimiento institucional",
    before: "Semanas recopilando datos de cada grupo en hojas de cálculo",
    after: "Reporte consolidado con gráficas, tendencias y recomendaciones en minutos",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg>,
    color: "bg-green-500/20 text-green-400",
    role: "Maestro de secundaria",
    scenario: "Planificando proyecto interdisciplinario",
    before: "Múltiples reuniones para coordinar contenidos entre materias",
    after: "Proyecto integrador que conecta Ciencias, Matemáticas y Español automáticamente",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    color: "bg-pink-500/20 text-pink-400",
    role: "Docente de educación especial",
    scenario: "Adaptando material para necesidades específicas",
    before: "Horas modificando cada recurso para diferentes capacidades",
    after: "Material adaptado con instrucciones claras, apoyo visual y actividades multinivel",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    color: "bg-amber-500/20 text-amber-400",
    role: "Coordinador académico",
    scenario: "Alineando curriculum a estándares SEP",
    before: "Revisión manual de cada plan contra el programa oficial",
    after: "Verificación automática de alineación con aprendizajes esperados de la NEM",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    color: "bg-cyan-500/20 text-cyan-400",
    role: "Profesor de idiomas",
    scenario: "Creando ejercicios de conversación",
    before: "Buscar y adaptar diálogos de libros o internet",
    after: "Diálogos contextualizados por nivel MCER con vocabulario progresivo y audio sugerido",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    color: "bg-red-500/20 text-red-400",
    role: "Tutor académico",
    scenario: "Planes de intervención para estudiantes en riesgo",
    before: "Diagnóstico informal sin seguimiento estructurado",
    after: "Plan personalizado con actividades semanales, metas medibles y seguimiento automático",
  },
  {
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    color: "bg-indigo-500/20 text-indigo-400",
    role: "Maestro de preparatoria",
    scenario: "Creando rúbricas de evaluación por competencias",
    before: "Copiar rúbricas genéricas que no se ajustan al proyecto",
    after: "Rúbrica específica con descriptores detallados por nivel de desempeño",
  },
];

export default function UseCases() {
  return (
    <section className="py-32 md:py-40 bg-[var(--color-surface-dark)] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[150px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-24">
          <span className="inline-block text-[var(--color-primary-light)] text-sm font-semibold tracking-widest uppercase mb-4">
            Casos de Uso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Casos de Uso Reales
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre cómo docentes de todo México transforman su práctica diaria.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {useCases.map((uc, idx) => (
            <RevealOnScroll key={uc.role} delay={Math.min((idx % 2) + 1, 3) as 1 | 2 | 3}>
              <div className="glass rounded-2xl p-8 md:p-10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-full ${uc.color} flex items-center justify-center shrink-0`}>
                    {uc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">{uc.role}</h3>
                    <p className="text-purple-300 text-sm mb-4">{uc.scenario}</p>
                    <div className="space-y-3">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <span className="text-red-400 text-xs font-semibold">❌ Sin IA:</span>
                        <p className="text-gray-400 text-sm mt-1">{uc.before}</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
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
