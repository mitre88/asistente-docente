"use client";

import RevealOnScroll from "./RevealOnScroll";

const rows = [
  { label: "Tiempo de planificación", noAI: "4-6 horas", other: "1-2 horas", us: "5-15 minutos", noAIStatus: "bad", otherStatus: "mid", usStatus: "good" },
  { label: "Personalización", noAI: "Manual y limitada", other: "Plantillas genéricas", us: "100% personalizado", noAIStatus: "bad", otherStatus: "mid", usStatus: "good" },
  { label: "Disponibilidad", noAI: "Horario laboral", other: "Web/App", us: "24/7 por WhatsApp", noAIStatus: "bad", otherStatus: "mid", usStatus: "good" },
  { label: "Costo mensual", noAI: "Tu tiempo", other: "$20-50 USD", us: "Desde gratis", noAIStatus: "mid", otherStatus: "bad", usStatus: "good" },
  { label: "Curva de aprendizaje", noAI: "N/A", other: "Semanas", us: "Minutos", noAIStatus: "mid", otherStatus: "bad", usStatus: "good" },
  { label: "Contexto educativo mexicano", noAI: "Sí (manual)", other: "No", us: "Sí, nativo", noAIStatus: "mid", otherStatus: "bad", usStatus: "good" },
  { label: "Soporte en español", noAI: "N/A", other: "Limitado", us: "100% español", noAIStatus: "mid", otherStatus: "bad", usStatus: "good" },
  { label: "Integración WhatsApp", noAI: "No", other: "No", us: "Nativa", noAIStatus: "bad", otherStatus: "bad", usStatus: "good" },
];

const statusIcon = (s: string) => {
  if (s === "good") return <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">✓</span>;
  if (s === "mid") return <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 text-yellow-600">~</span>;
  return <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600">✗</span>;
};

export default function Comparison() {
  return (
    <section id="comparativa" className="scroll-mt-24 py-32 md:py-40 bg-[var(--color-surface-dark)]">
      <div className="max-w-5xl mx-auto px-5 md:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-24">
          <span className="inline-block text-[var(--color-primary-light)] text-sm font-semibold tracking-widest uppercase mb-4">
            Comparativa
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Por qué Asistente Docente?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="overflow-x-auto -mx-2 px-2 md:mx-0 md:px-0">
            <p className="text-gray-500 text-xs text-center mb-3 md:hidden">← Desliza para ver más →</p>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 text-gray-400 font-semibold"></th>
                  <th className="p-4 text-center text-gray-400 font-semibold">Sin IA</th>
                  <th className="p-4 text-center text-gray-400 font-semibold">Otras Herramientas</th>
                  <th className="p-4 text-center text-white font-bold bg-purple-500/20 rounded-t-lg">Asistente Docente</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={row.label} className={`border-t border-gray-800 ${idx % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                    <td className="p-4 text-gray-300 font-medium">{row.label}</td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {statusIcon(row.noAIStatus)}
                        <span className="text-gray-500 text-xs">{row.noAI}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {statusIcon(row.otherStatus)}
                        <span className="text-gray-500 text-xs">{row.other}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center bg-purple-500/10">
                      <div className="flex flex-col items-center gap-1">
                        {statusIcon(row.usStatus)}
                        <span className="text-purple-300 text-xs font-semibold">{row.us}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
