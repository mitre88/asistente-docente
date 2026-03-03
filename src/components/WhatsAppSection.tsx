export default function WhatsAppSection() {
  const messages = [
    {
      from: "user",
      text: "Hola, necesito un plan de clase de Ciencias Naturales para 3er grado sobre el ciclo del agua",
      time: "10:32",
    },
    {
      from: "bot",
      text: "Perfecto! Aqui tienes tu plan de clase:\n\n📚 *Tema:* El Ciclo del Agua\n🎯 *Objetivo:* Comprender las fases del ciclo del agua\n⏱ *Duracion:* 45 minutos\n\n*Inicio (10 min):*\n- Video introductorio\n- Lluvia de ideas\n\n*Desarrollo (25 min):*\n- Experimento practico con materiales reciclados\n- Diagrama interactivo\n\n*Cierre (10 min):*\n- Quiz de 5 preguntas\n- Tarea: observar y documentar el clima\n\n¿Quieres que genere los materiales complementarios?",
      time: "10:32",
    },
    {
      from: "user",
      text: "Si, y tambien crea el quiz por favor",
      time: "10:33",
    },
    {
      from: "bot",
      text: "Listo! Te envio ambos documentos 📄\n\n✅ Guia de actividad con instrucciones\n✅ Quiz de 5 preguntas (opcion multiple)\n✅ Rubrica de evaluacion incluida\n\n¿Necesitas algo mas para tu clase?",
      time: "10:33",
    },
  ];

  return (
    <section id="whatsapp" className="py-24 md:py-32 bg-[var(--color-surface)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
              Integración WhatsApp
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
              Funciona donde{" "}
              <span className="text-[var(--color-accent)]">ya estas</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg mb-8 leading-relaxed">
              No necesitas aprender ninguna plataforma nueva. Asistente Docente
              funciona directamente desde WhatsApp, la aplicación que ya usas
              todos los días.
            </p>
            <div className="space-y-5">
              {[
                {
                  title: "Sin instalaciones",
                  desc: "Solo agrega nuestro número y comienza a usar la IA al instante.",
                },
                {
                  title: "Lenguaje natural",
                  desc: "Escribe como hablas. La IA entiende tu solicitud sin comandos especiales.",
                },
                {
                  title: "Archivos y documentos",
                  desc: "Recibe PDFs, documentos Word y presentaciones directamente en el chat.",
                },
                {
                  title: "Grupos de trabajo",
                  desc: "Agrega el asistente a grupos con colegas para colaborar en tiempo real.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-[var(--color-accent)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[340px] bg-[#0B141A] rounded-[3rem] p-3 shadow-2xl shadow-black/30">
                <div className="bg-[#0B141A] rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[#1F2C34] px-6 py-3 flex items-center justify-between">
                    <span className="text-white text-xs">10:32</span>
                    <div className="flex gap-1.5">
                      <div className="w-4 h-2.5 border border-white/60 rounded-sm relative">
                        <div className="absolute inset-[1px] right-[2px] bg-white/60 rounded-[1px]" />
                      </div>
                    </div>
                  </div>
                  {/* Chat header */}
                  <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gradient-end)] flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">
                        Asistente Docente
                      </div>
                      <div className="text-[var(--color-accent)] text-xs">
                        en linea
                      </div>
                    </div>
                  </div>
                  {/* Chat messages */}
                  <div className="bg-[#0B141A] p-3 space-y-2 h-[420px] overflow-y-auto" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')" }}>
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${
                          msg.from === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[85%] rounded-xl px-3 py-2 ${
                            msg.from === "user"
                              ? "bg-[#005C4B] text-white rounded-tr-sm"
                              : "bg-[#1F2C34] text-gray-200 rounded-tl-sm"
                          }`}
                        >
                          <p className="text-xs leading-relaxed whitespace-pre-line">
                            {msg.text}
                          </p>
                          <div className="text-right mt-1">
                            <span className="text-[10px] text-gray-400">
                              {msg.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Input bar */}
                  <div className="bg-[#1F2C34] px-3 py-2 flex items-center gap-2">
                    <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2">
                      <span className="text-gray-500 text-xs">
                        Escribe tu solicitud...
                      </span>
                    </div>
                    <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)]/20 to-[var(--color-primary)]/20 rounded-[4rem] blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
