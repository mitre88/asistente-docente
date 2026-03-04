"use client";

import RevealOnScroll from "./RevealOnScroll";

const testimonials = [
  {
    name: "María García",
    role: "Profesora de Matemáticas",
    school: "Colegio San José",
    text: "He reducido el tiempo de planificación en un 80%. Ahora puedo dedicar más tiempo a lo que realmente importa: mis estudiantes.",
    avatar: "MG",
    gradient: "from-purple-500 to-blue-500",
    stars: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Director Académico",
    school: "Instituto Bolivariano",
    text: "Implementamos Asistente Docente en todo el instituto. Los profesores están más motivados y los resultados académicos han mejorado notablemente.",
    avatar: "CR",
    gradient: "from-blue-500 to-cyan-500",
    stars: 5,
  },
  {
    name: "Ana Martínez",
    role: "Docente de Ciencias",
    school: "Escuela Primaria Nacional",
    text: "La facilidad de usar WhatsApp hace que no haya excusas. Cualquier docente, sin importar su nivel tecnológico, puede usarlo desde el primer día.",
    avatar: "AM",
    gradient: "from-green-500 to-emerald-500",
    stars: 5,
  },
  {
    name: "Roberto López",
    role: "Profesor de Historia",
    school: "Preparatoria UNAM",
    text: "Los exámenes que genera son de altísima calidad. Me ahorra fácilmente 5 horas a la semana. ¡No puedo creer que no existiera antes!",
    avatar: "RL",
    gradient: "from-orange-500 to-pink-500",
    stars: 5,
  },
  {
    name: "Laura Sánchez",
    role: "Coordinadora Académica",
    school: "Colegio Montessori",
    text: "La integración con WhatsApp fue clave para la adopción. Los profesores lo usan naturalmente como si hablaran con un colega experto.",
    avatar: "LS",
    gradient: "from-pink-500 to-purple-500",
    stars: 5,
  },
  {
    name: "Diego Fernández",
    role: "Profesor de Inglés",
    school: "Instituto Bilingüe",
    text: "Genero material bilingüe en segundos. Los padres están impresionados con la calidad de las comunicaciones que enviamos.",
    avatar: "DF",
    gradient: "from-cyan-500 to-blue-500",
    stars: 5,
  },
];

export default function Testimonials() {
  // Duplicate for infinite scroll
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonios" className="scroll-mt-24 py-32 md:py-40 bg-[var(--color-surface-dark)] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-900/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-24">
          <span className="inline-block text-[var(--color-primary-light)] text-sm font-semibold tracking-widest uppercase mb-6">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestros docentes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Miles de educadores ya transformaron su forma de enseñar con
            Asistente Docente.
          </p>
        </RevealOnScroll>

        {/* Carousel */}
        <RevealOnScroll>
          <div className="overflow-hidden">
            <div
              className="flex gap-6"
              style={{
                animation: "carousel-scroll 30s linear infinite",
                width: `${displayTestimonials.length * 400}px`,
              }}
            >
              {displayTestimonials.map((t, idx) => (
                <div
                  key={`${t.name}-${idx}`}
                  className="glass rounded-2xl p-10 hover:border-purple-500/30 transition-all duration-300 flex flex-col shrink-0"
                  style={{ width: "376px" }}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(t.stars)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-8 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.role}</div>
                      <div className="text-gray-600 text-xs">{t.school}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
