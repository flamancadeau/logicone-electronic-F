import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useChatbot } from '../../hooks/useChatbot';
import { useLanguage } from '../../hooks/useLanguage';
import ChatMessage from './ChatMessage';
import { generateWhatsAppLink } from '../../utils/generateWhatsAppLink';
import { SUGGESTION_ACTIONS } from '../../data/chatbotKnowledge';

function resolveSuggestion(text) {
  const key = String(text || '')
    .toLowerCase()
    .trim();
  const action = SUGGESTION_ACTIONS[key];
  if (!action) return { type: 'message', value: text };
  if (action.type === 'whatsapp') return { type: 'whatsapp', value: text };
  return { type: 'route', value: action.value };
}

export default function ChatWidget() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isOpen, messages, isTyping, closeChat, toggleChat, sendMessage } = useChatbot();
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    sendMessage(input);
    setInput('');
  };

  const handleSuggestion = (text) => {
    const resolved = resolveSuggestion(text);
    if (resolved.type === 'whatsapp') {
      window.open(generateWhatsAppLink(undefined, text), '_blank', 'noopener,noreferrer');
      return;
    }
    if (resolved.type === 'route') {
      closeChat();
      navigate(resolved.value);
      return;
    }
    sendMessage(text);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleChat}
        aria-label={isOpen ? t('chat.close') : t('chat.open')}
        className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-tertiary text-on-tertiary shadow-xl hover:bg-tertiary-container transition-all right-3 sm:right-4 bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] md:bottom-6"
      >
        <span className="material-symbols-outlined text-[28px]">{isOpen ? 'close' : 'smart_toy'}</span>
        <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-primary ring-2 ring-surface animate-pulse" />
      </button>

      {isOpen && (
        <div className="fixed z-50 flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-2xl border border-surface-container right-3 sm:right-4 left-3 sm:left-auto w-auto sm:w-[min(24rem,calc(100vw-2rem))] bottom-[calc(9.5rem+env(safe-area-inset-bottom,0px))] md:bottom-24 h-[min(32rem,calc(100dvh-11rem-env(safe-area-inset-bottom,0px)))] md:h-[min(32rem,70vh)]">
          <div className="flex items-center justify-between gap-space-sm bg-inverse-surface px-space-md py-space-md text-inverse-on-surface">
            <div className="flex items-center gap-space-sm">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-tertiary text-on-tertiary">
                <span className="material-symbols-outlined">neurology</span>
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-tertiary-fixed ring-2 ring-inverse-surface" />
              </div>
              <div>
                <p className="font-label-lg text-label-lg font-semibold leading-tight">{t('chat.title')}</p>
                <p className="font-label-tech text-label-tech text-tertiary-fixed uppercase tracking-wider">
                  {t('chat.subtitle')}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeChat}
              className="rounded-lg p-1 hover:bg-white/10"
              aria-label={t('common.close')}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex-1 space-y-space-sm overflow-y-auto p-space-md bg-surface">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} onSuggestion={handleSuggestion} />
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-secondary font-label-md text-label-md">
                <span className="material-symbols-outlined animate-pulse text-[18px]">more_horiz</span>
                {t('chat.typing')}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-surface-container bg-surface-container-lowest p-space-sm">
            <div className="mb-space-xs flex gap-1.5 overflow-x-auto pb-1">
              <Link
                to="/book-service"
                onClick={closeChat}
                className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 font-label-tech text-label-tech text-primary"
              >
                {t('chat.bookService')}
              </Link>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-tertiary/10 px-2.5 py-1 font-label-tech text-label-tech text-tertiary"
              >
                {t('chat.whatsapp')}
              </a>
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-space-xs">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chat.placeholder')}
                className="flex-1 rounded-xl border border-outline-variant/30 bg-surface-container-low px-space-md py-2.5 font-body-sm text-body-sm outline-none focus:border-tertiary focus:ring-2 focus:ring-tertiary/20"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-tertiary text-on-tertiary disabled:opacity-50"
                aria-label={t('common.send')}
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
