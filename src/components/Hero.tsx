export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-surface-dark)]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
              <span className="text-gray-400 text-sm font-medium">
                Potenciado por Inteligencia Artificial Avanzada
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.2rem] font-bold text-white leading-[1.05] tracking-tight mb-8 animate-fade-in-up text-balance">
              Tu Asistente
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--color-gradient-start) 0%, var(--color-gradient-mid) 50%, var(--color-gradient-end) 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 5s ease infinite",
                }}
              >
                Docente con IA
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up">
              Automatiza la creación de contenido, evaluaciones, planificaciones y
              comunicación con estudiantes.{" "}
              <span className="text-white font-medium">
                Todo desde WhatsApp, las 24 horas.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 animate-fade-in-up">
              <a
                href="#contacto"
                className="btn-ripple group bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary)] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] flex items-center gap-3"
              >
                Comenzar Ahora
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#funcionalidades"
                className="text-gray-300 hover:text-white border border-white/15 hover:border-white/30 px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-white/5"
              >
                Ver Funcionalidades
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-lg lg:max-w-none mx-auto animate-fade-in-up">
              {[
                { value: "10,000+", label: "Docentes Activos" },
                { value: "500K+", label: "Tareas Automatizadas" },
                { value: "85%", label: "Ahorro de Tiempo" },
                { value: "24/7", label: "Disponibilidad" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 animate-fade-in-up">
              {[
                { emoji: "🔒", text: "Datos Seguros" },
                { emoji: "🇲🇽", text: "Hecho en México" },
                { emoji: "⚡", text: "Respuesta < 5s" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                >
                  <span className="text-base">{badge.emoji}</span>
                  <span className="text-gray-400 text-xs font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Floating WhatsApp chat mockup */}
          <div className="hidden lg:flex justify-center animate-float">
            <div className="relative w-[360px]">
              {/* Phone shell */}
              <div className="bg-[#0B141A] rounded-[2.5rem] p-3 shadow-2xl shadow-black/40">
                <div className="bg-[#0B141A] rounded-[2rem] overflow-hidden">
                  {/* Chat header */}
                  <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gradient-end)] flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Asistente Docente</div>
                      <div className="text-[var(--color-accent)] text-xs">en línea</div>
                    </div>
                  </div>
                  {/* Messages */}
                  <div className="bg-[#0B141A] p-4 space-y-3 min-h-[320px]">
                    {/* User message */}
                    <div className="flex justify-end" style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
                      <div className="bg-[#005C4B] text-white rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%]">
                        <p className="text-xs leading-relaxed">
                          Crea un examen de matemáticas para 5to grado 📝
                        </p>
                        <div className="text-right mt-1">
                          <span className="text-[10px] text-gray-400">10:32 ✓✓</span>
                        </div>
                      </div>
                    </div>
                    {/* Bot response */}
                    <div className="flex justify-start" style={{ animation: "fadeInUp 0.6s ease-out 0.9s both" }}>
                      <div className="bg-[#1F2C34] text-gray-200 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                        <p className="text-xs leading-relaxed whitespace-pre-line">
                          {`¡Listo! Aquí tienes tu examen:

📚 Matemáticas – 5to Grado
📝 20 preguntas (opción múltiple)
⏱ Duración: 45 min

✅ Fracciones y decimales
✅ Geometría básica
✅ Problemas de razonamiento

📄 Archivo PDF generado
¿Quieres la rúbrica de calificación?`}
                        </p>
                        <div className="text-right mt-1">
                          <span className="text-[10px] text-gray-400">10:32</span>
                        </div>
                      </div>
                    </div>
                    {/* Typing indicator */}
                    <div className="flex justify-end" style={{ animation: "fadeInUp 0.6s ease-out 1.5s both" }}>
                      <div className="bg-[#005C4B] text-white rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%]">
                        <p className="text-xs leading-relaxed">¡Sí, y también la clave de respuestas! 🙏</p>
                        <div className="text-right mt-1">
                          <span className="text-[10px] text-gray-400">10:33 ✓✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Input bar */}
                  <div className="bg-[#1F2C34] px-3 py-2 flex items-center gap-2">
                    <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2">
                      <span className="text-gray-500 text-xs">Escribe tu solicitud...</span>
                    </div>
                    <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow behind phone */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-gradient-end)]/20 rounded-[4rem] blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
    </section>
  );
}
