const capabilities = [
  {
    category: "Creacion de Contenido",
    items: [
      "Planes de clase adaptados a cualquier materia y nivel",
      "Guias de estudio y resúmenes automaticos",
      "Presentaciones educativas con estructura pedagogica",
      "Material didactico diferenciado por nivel",
      "Actividades interactivas y dinamicas grupales",
      "Bibliografias y recursos complementarios",
    ],
  },
  {
    category: "Evaluacion y Seguimiento",
    items: [
      "Examenes con diversos tipos de preguntas",
      "Rubricas de evaluacion personalizadas",
      "Correccion automatica con retroalimentacion",
      "Seguimiento individual del progreso estudiantil",
      "Reportes de rendimiento por competencias",
      "Deteccion temprana de estudiantes en riesgo",
    ],
  },
  {
    category: "Comunicacion y Gestion",
    items: [
      "Respuestas automaticas a consultas frecuentes",
      "Comunicados para padres y representantes",
      "Recordatorios de tareas y evaluaciones",
      "Actas de reunion y minutas automaticas",
      "Informes de conducta y participacion",
      "Coordinacion de actividades extracurriculares",
    ],
  },
  {
    category: "Innovacion Pedagogica",
    items: [
      "Estrategias de enseñanza diferenciada con IA",
      "Gamificacion de contenidos educativos",
      "Adaptacion curricular para necesidades especiales",
      "Proyectos interdisciplinarios automatizados",
      "Recursos multimedia y audiovisuales",
      "Tutoria virtual personalizada 24/7",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-dark)] relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[var(--color-primary-light)] text-sm font-semibold tracking-widest uppercase mb-4">
            Capacidades Completas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Todo el poder de la IA
            <br />
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-cyan-400 bg-clip-text text-transparent">
              al servicio de la educacion
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mas de 50 funciones automatizadas diseñadas para cubrir cada
            aspecto de la labor docente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.category}
              className="glass rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gradient-end)] flex items-center justify-center text-white font-bold text-sm">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-white">{cap.category}</h3>
              </div>
              <ul className="space-y-3">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
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
          ))}
        </div>
      </div>
    </section>
  );
}
