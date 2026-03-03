const plans = [
  {
    name: "Docente Starter",
    price: "Gratis",
    period: "",
    description: "Perfecto para explorar las capacidades de la IA educativa.",
    features: [
      "50 solicitudes al mes",
      "Generacion de planes de clase",
      "Creacion de quizzes basicos",
      "Soporte por WhatsApp",
      "1 materia configurada",
    ],
    cta: "Empezar Gratis",
    popular: false,
    gradient: "from-gray-600 to-gray-800",
  },
  {
    name: "Docente Pro",
    price: "$9.99",
    period: "/mes",
    description: "Para docentes que quieren maximizar su productividad.",
    features: [
      "Solicitudes ilimitadas",
      "Todas las funcionalidades de IA",
      "Evaluaciones con correccion automatica",
      "Reportes de rendimiento estudiantil",
      "Materias ilimitadas",
      "Documentos en PDF y Word",
      "Soporte prioritario",
    ],
    cta: "Comenzar Prueba Gratis",
    popular: true,
    gradient: "from-[var(--color-primary)] to-[var(--color-primary-light)]",
  },
  {
    name: "Institucional",
    price: "Personalizado",
    period: "",
    description: "Solucion completa para colegios e instituciones educativas.",
    features: [
      "Todo lo de Docente Pro",
      "Panel administrativo institucional",
      "Reportes consolidados",
      "Capacitacion para docentes",
      "API de integracion",
      "Soporte dedicado 24/7",
      "Personalizacion de marca",
    ],
    cta: "Contactar Ventas",
    popular: false,
    gradient: "from-cyan-600 to-blue-700",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4">
            Precios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            Planes para cada necesidad
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Comienza gratis y escala segun tus necesidades. Sin contratos,
            cancela cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-[var(--color-primary)] shadow-xl shadow-purple-500/10 scale-[1.02]"
                  : "border-[var(--color-border)] hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  MAS POPULAR
                </div>
              )}
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-[var(--color-text)]">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-[var(--color-text-secondary)]">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm mb-6">
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--color-accent)] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[var(--color-text-secondary)] text-sm">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white hover:shadow-lg hover:shadow-purple-500/25"
                    : "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
