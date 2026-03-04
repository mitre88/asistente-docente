"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Docentes activos", color: "bg-purple-100 text-purple-600", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { value: 500000, suffix: "+", label: "Tareas automatizadas", color: "bg-yellow-100 text-yellow-600", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { value: 85, suffix: "%", label: "Ahorro de tiempo promedio", color: "bg-blue-100 text-blue-600", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { value: 4.9, suffix: "/5", label: "Satisfacción docente", decimals: 1, color: "bg-amber-100 text-amber-600", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
  { value: 32, suffix: "", label: "Estados de México", color: "bg-green-100 text-green-600", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> },
  { value: 15, suffix: " seg", label: "Tiempo de respuesta", color: "bg-cyan-100 text-cyan-600", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { value: 50, suffix: "+", label: "Tipos de contenido", color: "bg-indigo-100 text-indigo-600", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { value: 98.5, suffix: "%", label: "Uptime garantizado", decimals: 1, color: "bg-emerald-100 text-emerald-600", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
];

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              current = value;
              clearInterval(timer);
            }
            setCount(current);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString("es-MX");

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-r from-[var(--color-primary)] via-purple-700 to-[var(--color-gradient-end)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Impacto en Números</h2>
          <p className="text-purple-200 text-lg">Resultados reales de docentes en todo México</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className={`w-14 h-14 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-purple-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
