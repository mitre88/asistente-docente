"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const plans = [
  {
    name: "Docente Starter",
    monthlyPrice: "Gratis",
    annualPrice: "Gratis",
    period: "",
    description: "Perfecto para explorar las capacidades de la IA educativa.",
    features: [
      "50 solicitudes al mes",
      "Generación de planes de clase",
      "Creación de quizzes básicos",
      "Soporte por WhatsApp",
      "1 materia configurada",
    ],
    cta: "Empezar Gratis",
    popular: false,
  },
  {
    name: "Docente Pro",
    monthlyPrice: "$9.99",
    annualPrice: "$7.99",
    period: "/mes",
    description: "Para docentes que quieren maximizar su productividad.",
    features: [
      "Solicitudes ilimitadas",
      "Todas las funcionalidades de IA",
      "Evaluaciones con corrección automática",
      "Reportes de rendimiento estudiantil",
      "Materias ilimitadas",
      "Documentos en PDF y Word",
      "Soporte prioritario",
    ],
    cta: "Comenzar Prueba Gratis",
    popular: true,
  },
  {
    name: "Institucional",
    monthlyPrice: "Personalizado",
    annualPrice: "Personalizado",
    period: "",
    description: "Solución completa para colegios e instituciones educativas.",
    features: [
      "Todo lo de Docente Pro",
      "Panel administrativo institucional",
      "Reportes consolidados",
      "Capacitación para docentes",
      "API de integración",
      "Soporte dedicado 24/7",
      "Personalización de marca",
    ],
    cta: "Contactar Ventas",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="precios" className="py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-12">
          <span className="inline-block text-[var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4">
            Precios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            Planes para cada necesidad
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto mb-8">
            Comienza gratis y escala según tus necesidades. Sin contratos,
            cancela cuando quieras.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !annual ? "bg-white text-[var(--color-text)] shadow-sm" : "text-[var(--color-text-secondary)]"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                annual ? "bg-white text-[var(--color-text)] shadow-sm" : "text-[var(--color-text-secondary)]"
              }`}
            >
              Anual
              <span className="bg-[var(--color-accent)] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, idx) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            const showSavings = annual && plan.monthlyPrice !== "Gratis" && plan.monthlyPrice !== "Personalizado";

            return (
              <RevealOnScroll key={plan.name} delay={Math.min(idx + 1, 3) as 1 | 2 | 3}>
                <div
                  className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 group h-full ${
                    plan.popular
                      ? "border-transparent shadow-xl shadow-purple-500/10 scale-[1.02]"
                      : "border-[var(--color-border)] hover:shadow-lg"
                  }`}
                >
                  {/* Shimmer border for popular */}
                  {plan.popular && (
                    <div className="absolute -inset-[1px] rounded-2xl shimmer-border -z-10" />
                  )}

                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      MÁS POPULAR
                    </div>
                  )}

                  {/* Hover reveal badge */}
                  {plan.popular && (
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold text-[var(--color-primary)]">
                      ✨ Best Value
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-[var(--color-text)]">{price}</span>
                    {plan.period && (
                      <span className="text-[var(--color-text-secondary)]">{plan.period}</span>
                    )}
                  </div>
                  {showSavings && (
                    <div className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] font-semibold mb-2">
                      <span>Ahorras $24/año</span>
                    </div>
                  )}
                  <p className="text-[var(--color-text-secondary)] text-sm mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-[var(--color-text-secondary)] text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className={`btn-ripple block text-center py-3 rounded-full font-semibold text-sm transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white hover:shadow-lg hover:shadow-purple-500/25"
                        : "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
