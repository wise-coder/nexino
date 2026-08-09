'use client';

import type { FormEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Send, Sparkles, X } from 'lucide-react';
import { chatbotFaqs, chatbotStarterQuestions, getChatbotAnswer, getChatbotMatches } from '@/data/chatbot-faqs';

type ChatMessage = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  category?: string;
  matchedQuestion?: string;
};

const greetingMessage: ChatMessage = {
  id: 'greeting',
  role: 'assistant',
  content:
    `Hi, I am Nexino Assistant. Ask me about websites, systems, AI, automation, hosting, data, industries or support. I can search ${chatbotFaqs.length} likely questions and answers.`,
};

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([greetingMessage]);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isOpen]);

  const suggestions = getChatbotMatches(query, query.trim() ? 6 : 8);

  const askQuestion = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    const answer = getChatbotAnswer(trimmed);

    setMessages((current) => [
      ...current,
      {
        id: `user-${crypto.randomUUID()}`,
        role: 'user',
        content: trimmed,
      },
      {
        id: `assistant-${crypto.randomUUID()}`,
        role: 'assistant',
        content: answer.answer,
        category: answer.category,
        matchedQuestion: answer.question !== trimmed ? answer.question : undefined,
      },
    ]);
    setQuery('');
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    askQuestion(query);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-[min(24rem,calc(100vw-2.5rem))] overflow-hidden rounded-[28px] border border-nexino-border bg-white shadow-2xl shadow-black/20"
          >
            <div className="flex items-start justify-between gap-4 border-b border-nexino-border bg-nexino-off-white px-5 py-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
                  <Bot className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-nexino-text">Nexino Assistant</p>
                  <p className="text-xs text-nexino-text-secondary">550 likely questions and answers</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-nexino-border p-2 text-nexino-text-secondary transition-colors hover:bg-white hover:text-nexino-text"
                aria-label="Close chatbot"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[28rem] space-y-4 overflow-y-auto px-5 py-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Ask about services, pricing, timelines and support
              </div>

              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        message.role === 'user'
                          ? 'bg-black text-white'
                          : 'bg-nexino-off-white text-nexino-text border border-nexino-border'
                      }`}
                    >
                      {message.matchedQuestion && (
                        <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-nexino-text-secondary">
                          Matched: {message.matchedQuestion}
                        </p>
                      )}
                      {message.category && (
                        <p
                          className={`mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${
                            message.role === 'user' ? 'text-white/70' : 'text-nexino-blue'
                          }`}
                        >
                          {message.category}
                        </p>
                      )}
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={endRef} />
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-nexino-text-secondary">
                  Popular questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {(query.trim() ? suggestions : chatbotStarterQuestions.slice(0, 6)).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => askQuestion(item.question)}
                      className="rounded-full border border-nexino-border bg-white px-3 py-2 text-left text-xs font-medium text-nexino-text-secondary transition-colors hover:border-black hover:text-nexino-text"
                    >
                      {item.question}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="border-t border-nexino-border bg-white p-4">
              <div className="flex items-center gap-3 rounded-full border border-nexino-border bg-nexino-off-white px-4 py-3 focus-within:border-black">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Ask about services, pricing or timelines"
                  className="min-w-0 flex-1 bg-transparent text-sm text-nexino-text placeholder:text-nexino-text-secondary/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-neutral-800"
                  aria-label="Send question"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close Nexino chatbot' : 'Open Nexino chatbot'}
        className={[
          'inline-flex items-center gap-3 rounded-full border border-black bg-black px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexino-blue/40',
        ].join(' ')}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black" aria-hidden="true">
          <Bot className="h-6 w-6" />
        </span>
        <span className="hidden sm:inline">Ask Nexino</span>
      </button>
    </div>
  );
}
