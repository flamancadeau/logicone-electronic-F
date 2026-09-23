import {
  chatbotGreeting,
  chatbotKnowledge,
  chatbotQuickReplies,
} from '../../data/chatbotKnowledge';
import { localize, localizeList } from '../../i18n/localize';
import { translate } from '../../i18n';

function delay(ms = 400) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function matchIntent(message) {
  const normalized = String(message || '')
    .toLowerCase()
    .replace(/[’']/g, "'");

  let best = null;
  let bestScore = 0;

  for (const article of chatbotKnowledge) {
    let score = 0;
    for (const keyword of article.keywords) {
      if (normalized.includes(keyword.toLowerCase())) {
        score += keyword.split(/\s+/).length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = article;
    }
  }

  return best;
}

export async function sendChatMessage(message, lang = 'en') {
  await delay(350 + Math.random() * 250);

  const article = matchIntent(message);

  if (!article) {
    return {
      role: 'assistant',
      content: translate(lang, 'chat.fallback'),
      suggestions: localizeList(chatbotQuickReplies, lang).slice(0, 4),
    };
  }

  return {
    role: 'assistant',
    content: localize(article.reply, lang),
    suggestions: localizeList(article.suggestions, lang),
    intentId: article.id,
  };
}

export async function getChatGreeting(lang = 'en') {
  await delay(100);
  return {
    role: 'assistant',
    content: localize(chatbotGreeting, lang),
    suggestions: localizeList(chatbotQuickReplies, lang),
  };
}
