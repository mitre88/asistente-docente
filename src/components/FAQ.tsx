"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const faqs = [
  { q: "¿Cómo empiezo a usar el asistente?", a: "Solo necesitas enviar un mensaje de WhatsApp a nuestro número. En menos de 1 minuto estarás configurado y listo para generar tu primer contenido educativo." },
  { q: "¿Necesito instalar alguna app?", a: "No. El asistente funciona directamente por WhatsApp, la app que ya tienes en tu celular. No necesitas descargar ni instalar nada adicional." },
  { q: "¿Funciona con cualquier materia y nivel?", a: "Sí. Desde preescolar hasta preparatoria y universidad. El asistente se adapta a cualquier materia, incluyendo materias técnicas y artísticas." },
  { q: "¿Puedo personalizar las respuestas de la IA?", a: "Absolutamente. Puedes configurar tu materia, grado, estilo de enseñanza y preferencias. La IA aprende de tus interacciones para darte resultados cada vez más personalizados." },
  { q: "¿Mis datos y los de mis estudiantes están seguros?", a: "Sí. Usamos encriptación end-to-end, cumplimos con la LFPDPPP y no almacenamos datos de estudiantes de forma permanente. Nuestros servidores están en México." },
  { q: "¿Puedo usar el asistente en grupos de WhatsApp?", a: "Sí. Puedes agregarlo a grupos de academia o coordinación para que todos los docentes del grupo tengan acceso a las funcionalidades." },
  { q: "¿Qué tipo de archivos puedo recibir?", a: "El asistente genera documentos en PDF, Word, Excel y texto. Los planes de clase, exámenes y rúbricas se entregan listos para imprimir." },
  { q: "¿Funciona sin internet?", a: "Se requiere conexión a internet para comunicarse con la IA. Sin embargo, todos los documentos generados se pueden guardar y usar offline." },
  { q: "¿Hay capacitación disponible?", a: "Sí. Ofrecemos tutoriales en video, guías paso a paso y para planes institucionales incluimos capacitación en vivo para todo el equipo docente." },
  { q: "¿Puedo cancelar en cualquier momento?", a: "Sí. No hay contratos ni permanencia mínima. Puedes cancelar tu suscripción en cualquier momento directamente por WhatsApp." },
  { q: "¿Ofrecen descuentos para instituciones públicas?", a: "Sí. Tenemos programas especiales y precios preferenciales para escuelas públicas e instituciones gubernamentales. Contáctanos para más información." },
  { q: "¿La IA entiende el contexto educativo mexicano?", a: "Sí. Está entrenada con los planes y programas de la SEP, la Nueva Escuela Mexicana (NEM), y conoce el contexto cultural y educativo de México." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="max-w-3xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-12">
          <span className="inline-block text-[var(--color-primary)] text-sm font-semibold tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
            Preguntas Frecuentes
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[var(--color-border)] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[var(--color-text)] text-sm pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${open === idx ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === idx ? "max-h-40 pb-5" : "max-h-0"}`}>
                  <p className="px-5 text-[var(--color-text-secondary)] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
