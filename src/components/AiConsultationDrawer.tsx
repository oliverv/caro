import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ASSETS } from '../data';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

interface AiConsultationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: () => void;
  onOpenAiAssessment: () => void;
}

const QUICK_PROMPTS = [
  '¿Por qué acumulo grasa abdominal después de los 40?',
  '¿Qué alimentos activan mis sirtuinas y autofagia?',
  'Tengo niebla mental e insomnio, ¿por dónde empiezo?',
  '¿Qué analíticas de sangre debo pedir a mi médico?',
  '¿En qué consiste el Método Código Diosa?'
];

export const AiConsultationDrawer: React.FC<AiConsultationDrawerProps> = ({
  isOpen,
  onClose,
  onOpenBookingModal,
  onOpenAiAssessment
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: '¡Hola! Soy **Carolina AI**, tu asistente clínica especializada en **Nutrición Epigenética y Longevidad para mujeres 40+**.\n\n¿Tienes dudas sobre cambios hormonales, grasa visceral, sueño, analíticas o suplementación celular? Pregúntame lo que necesites o realiza nuestra evaluación epigenética personalizada.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 200);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim() || isLoading) return;

    setError(null);
    const newMessages: Message[] = [...messages, { role: 'user', text: messageText.trim() }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            text: m.text
          }))
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Error de conexión con el asistente de IA.');
      }

      const data = await response.json();
      setMessages([...newMessages, { role: 'assistant', text: data.reply }]);
    } catch (err: any) {
      setError(err.message || 'No pudimos procesar la consulta en este momento.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        text: 'He reiniciado nuestra conversación. ¿En qué aspecto de tu biología o nutrición epigenética te gustaría profundizar hoy?'
      }
    ]);
    setError(null);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        id="ai-drawer-backdrop"
        onClick={onClose}
        className="fixed inset-0 bg-[#201415]/65 backdrop-blur-xs z-50 transition-opacity animate-fadeIn"
      />

      {/* Drawer */}
      <aside
        id="ai-consultation-drawer"
        aria-label="Asistente de Longevidad IA"
        className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[#F6F1EA] z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out animate-slideInRight"
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#C7A46B]/25 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-full overflow-hidden fine-border shadow-xs">
                <img
                  src={ASSETS.portraitRedDress}
                  alt="Carolina AI"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-serif text-[16px] font-bold text-[#201415]">
                  Carolina AI
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#F8CFD5]/50 text-[#EE295C] text-[10px] font-bold uppercase tracking-wider">
                  Gemini 3.8
                </span>
              </div>
              <p className="text-[11px] text-[#685354]">
                Asistente de Longevidad Epigenética 40+
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={clearChat}
              title="Reiniciar conversación"
              className="w-8 h-8 rounded-full hover:bg-[#F6F1EA] text-[#685354] hover:text-[#201415] flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">restart_alt</span>
            </button>
            <button
              id="ai-drawer-close-btn"
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-[#F6F1EA] text-[#685354] hover:text-[#201415] flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Action Banner: Epigenetic Assessment */}
        <div className="px-4 py-2.5 bg-gradient-to-r from-[#201415] to-[#362224] text-white flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[17px] text-[#C7A46B]">
              auto_awesome
            </span>
            <span>¿Quieres una analítica rápida de tus síntomas?</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenAiAssessment();
            }}
            className="px-3 py-1 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[11px] font-bold rounded-full hover:opacity-90 transition-opacity cursor-pointer shrink-0"
          >
            Evaluar con IA
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((m, idx) => {
            const isUser = m.role === 'user';
            return (
              <div
                key={idx}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-full overflow-hidden fine-border shrink-0 mt-0.5">
                    <img
                      src={ASSETS.portraitRedDress}
                      alt="Carolina"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-[13.5px] leading-relaxed ${
                    isUser
                      ? 'bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white rounded-br-xs shadow-xs'
                      : 'bg-white text-[#201415] fine-border rounded-bl-xs shadow-xs prose prose-sm max-w-none'
                  }`}
                >
                  {isUser ? (
                    <p className="whitespace-pre-wrap">{m.text}</p>
                  ) : (
                    <div className="space-y-2 text-[#201415]">
                      <ReactMarkdown>{m.text}</ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full overflow-hidden fine-border shrink-0 mt-0.5">
                <img
                  src={ASSETS.portraitRedDress}
                  alt="Carolina"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="bg-white p-3.5 rounded-2xl rounded-bl-xs fine-border shadow-xs flex items-center gap-2 text-xs text-[#685354]">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#EE295C] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#EE295C] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#EE295C] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span>Consultando conocimiento clínico epigenético...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] shrink-0">error</span>
                <span>{error}</span>
              </div>
              {messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                <button
                  onClick={() => handleSendMessage(messages[messages.length - 1].text)}
                  className="px-2.5 py-1 bg-white border border-red-300 rounded-md text-[11px] font-semibold text-red-700 hover:bg-red-100 transition-colors shrink-0 cursor-pointer shadow-2xs"
                >
                  Reintentar
                </button>
              )}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Questions */}
        {messages.length < 3 && (
          <div className="px-4 py-2 border-t border-[#C7A46B]/15 bg-white/60">
            <p className="text-[10px] font-bold text-[#C7A46B] uppercase tracking-wider mb-1.5">
              Preguntas sugeridas:
            </p>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {QUICK_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="text-[11.5px] px-2.5 py-1 bg-white fine-border rounded-full text-[#685354] hover:text-[#EE295C] hover:border-[#EE295C]/40 whitespace-nowrap transition-all cursor-pointer shadow-2xs"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-[#C7A46B]/25">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              id="ai-chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pregunta sobre nutrición, hormonas, analíticas..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 rounded-full bg-[#F6F1EA] fine-border text-[13px] text-[#201415] placeholder-[#685354]/60 focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
            />
            <button
              id="ai-chat-send-btn"
              onClick={() => handleSendMessage()}
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:hover:scale-100 cursor-pointer shrink-0"
              aria-label="Enviar mensaje"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#685354]">
            <span>Respuestas clínicas basadas en Epigenética</span>
            <button
              onClick={() => {
                onClose();
                onOpenBookingModal();
              }}
              className="text-[#EE295C] font-semibold hover:underline cursor-pointer"
            >
              Agendar con Carolina en persona
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
