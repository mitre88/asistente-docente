const testimonials = [
  {
    name: "Maria Garcia",
    role: "Profesora de Matematicas",
    school: "Colegio San Jose",
    text: "He reducido el tiempo de planificacion en un 80%. Ahora puedo dedicar mas tiempo a lo que realmente importa: mis estudiantes.",
    avatar: "MG",
    color: "from-purple-500 to-blue-500",
  },
  {
    name: "Carlos Rodriguez",
    role: "Director Academico",
    school: "Instituto Bolivariano",
    text: "Implementamos Asistente Docente en todo el instituto. Los profesores estan mas motivados y los resultados academicos han mejorado notablemente.",
    avatar: "CR",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Ana Martinez",
    role: "Docente de Ciencias",
    school: "Escuela Primaria Nacional",
    text: "La facilidad de usar WhatsApp hace que no haya excusas. Cualquier docente, sin importar su nivel tecnologico, puede usarlo desde el primer dia.",
    avatar: "AM",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-surface-dark)] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-900/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[var(--color-primary-light)] text-sm font-semibold tracking-widest uppercase mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestros docentes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Miles de educadores ya transformaron su forma de enseñar con
            Asistente Docente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                  <div className="text-gray-600 text-xs">{t.school}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
