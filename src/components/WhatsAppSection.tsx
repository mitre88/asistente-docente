"use client";

import { useEffect, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const chatMessages = [
  { from: "user" as const, text: "Hola, necesito un plan de clase de Ciencias Naturales para 3er grado sobre el ciclo del agua 🌊", time: "10:32" },
  { from: "bot" as const, text: "¡Perfecto! Aquí tienes tu plan de clase:\n\n📚 Tema: El Ciclo del Agua\n🎯 Objetivo: Comprender las fases del ciclo\n⏱ Duración: 45 minutos\n\n✅ Inicio: Video introductorio\n✅ Desarrollo: Experimento práctico\n✅ Cierre: Quiz de 5 preguntas\n\n¿Quieres los materiales complementarios?", time: "10:32" },
  { from: "user" as const, text: "Sí, y también crea el quiz por favor 📝", time: "10:33" },
  { from: "bot" as const, text: "¡Listo! Te envío ambos documentos 📄\n\n✅ Guía de actividad con instrucciones\n✅ Quiz de 5 preguntas (opción múltiple)\n✅ Rúbrica de evaluación incluida\n\n¿Necesitas algo más para tu clase?", time: "10:33" },
];

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-[#1F2C34] text-gray-200 rounded-xl rounded-tl-sm px-4 py-3">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gray-400 rounded-full"
              style={{ animation: `typing-dot 1.4s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function InteractiveChat() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    if (visibleCount >= chatMessages.length) {
      // Restart after a pause
      const timeout = setTimeout(() => {
        setVisibleCount(0);
        setShowTyping(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const delay = visibleCount === 0 ? 800 : chatMessages[visibleCount - 1]?.from === "user" ? 1500 : 2500;

    const typingTimeout = setTimeout(() => {
      setShowTyping(true);
    }, delay - 800);

    const timeout = setTimeout(() => {
      setShowTyping(false);
      setVisibleCount((c) => c + 1);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(typingTimeout);
    };
  }, [visibleCount]);

  return (
    <div className="relative w-[340px]">
      <div className="bg-[#0B141A] rounded-[3rem] p-3 shadow-2xl shadow-black/30">
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
              <div className="text-white text-sm font-medium">Asistente Docente</div>
              <div className="text-[var(--color-accent)] text-xs">en línea</div>
            </div>
          </div>
          {/* Messages */}
          <div className="bg-[#0B141A] p-3 space-y-2 h-[420px] overflow-y-auto">
            {chatMessages.slice(0, visibleCount).map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                style={{ animation: "fadeInUp 0.3s ease-out" }}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 ${
                    msg.from === "user"
                      ? "bg-[#005C4B] text-white rounded-tr-sm"
                      : "bg-[#1F2C34] text-gray-200 rounded-tl-sm"
                  }`}
                >
                  <p className="text-xs leading-relaxed whitespace-pre-line">{msg.text}</p>
                  <div className="text-right mt-1">
                    <span className="text-[10px] text-gray-400">{msg.time}</span>
                  </div>
                </div>
              </div>
            ))}
            {showTyping && visibleCount < chatMessages.length && <TypingIndicator />}
          </div>
          {/* Input */}
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
      <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent)]/20 to-[var(--color-primary)]/20 rounded-[4rem] blur-2xl -z-10" />
    </div>
  );
}

export default function WhatsAppSection() {
  return (
    <section id="whatsapp" className="py-28 md:py-36 bg-[var(--color-surface)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div>
              <span className="inline-block text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-4">
                Integración WhatsApp
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6 text-balance">
                Funciona donde{" "}
                <span className="text-[var(--color-accent)]">ya estás</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed">
                No necesitas aprender ninguna plataforma nueva. Asistente Docente
                funciona directamente desde WhatsApp, la aplicación que ya usas
                todos los días.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Sin instalaciones", desc: "Solo agrega nuestro número y comienza a usar la IA al instante." },
                  { title: "Lenguaje natural", desc: "Escribe como hablas. La IA entiende tu solicitud sin comandos especiales." },
                  { title: "Archivos y documentos", desc: "Recibe PDFs, documentos Word y presentaciones directamente en el chat." },
                  { title: "Grupos de trabajo", desc: "Agrega el asistente a grupos con colegas para colaborar en tiempo real." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-text)] mb-1">{item.title}</h4>
                      <p className="text-[var(--color-text-secondary)] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <div className="flex justify-center">
              <InteractiveChat />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
