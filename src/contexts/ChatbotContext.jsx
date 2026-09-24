import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { getChatGreeting, sendChatMessage } from '../features/chatbot/chatbotApi';
import { useLanguage } from '../hooks/useLanguage';

export const ChatbotContext = createContext(null);

function nextId() {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function ChatbotProvider({ children }) {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Reset chat when language changes so greeting/suggestions match
  useEffect(() => {
    setMessages([]);
    setInitialized(false);
  }, [lang]);

  const openChat = useCallback(async () => {
    setIsOpen(true);
    if (!initialized) {
      setIsTyping(true);
      const greeting = await getChatGreeting(lang);
      setMessages([{ id: nextId(), ...greeting }]);
      setIsTyping(false);
      setInitialized(true);
    }
  }, [initialized, lang]);

  const closeChat = useCallback(() => setIsOpen(false), []);

  const toggleChat = useCallback(() => {
    if (isOpen) closeChat();
    else openChat();
  }, [isOpen, openChat, closeChat]);

  const sendMessage = useCallback(
    async (text) => {
      const trimmed = String(text || '').trim();
      if (!trimmed) return;

      const userMsg = { id: nextId(), role: 'user', content: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      try {
        const reply = await sendChatMessage(trimmed, lang);
        setMessages((prev) => [...prev, { id: nextId(), ...reply }]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: nextId(),
            role: 'assistant',
            content:
              lang === 'rw'
                ? 'Habaye ikibazo. Ongera ugerageze cyangwa twandikire kuri WhatsApp.'
                : 'Something went wrong locally. Please try again or contact us on WhatsApp.',
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    },
    [lang],
  );

  const value = useMemo(
    () => ({
      isOpen,
      messages,
      isTyping,
      openChat,
      closeChat,
      toggleChat,
      sendMessage,
    }),
    [isOpen, messages, isTyping, openChat, closeChat, toggleChat, sendMessage],
  );

  return <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>;
}
