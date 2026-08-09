import type { FaqItem } from '@/types/common';

export type ChatbotFaq = FaqItem & {
  id: string;
  category: string;
};

type Topic = {
  id: string;
  category: string;
  subject: string;
  focus: string;
  answer?: string;
  questions?: string[];
};

const genericQuestionTemplates = [
  'Can you help me with {subject}?',
  'Do you offer {subject}?',
  'How do you handle {subject}?',
  'What is included in {subject}?',
  'How long does {subject} take?',
  'How much does {subject} cost?',
  'Can you improve my {subject}?',
  'Can you build {subject} for my business?',
  'Can you connect {subject} with my existing systems?',
  'What should I prepare for {subject}?',
];

const chatbotTopics: Topic[] = [
  {
    id: 'what-nexino-does',
    category: 'General',
    subject: 'what Nexino Technologies Ltd does',
    focus: 'we design and build websites, custom systems, AI tools, automation workflows, cloud infrastructure and embedded solutions',
    answer:
      'Nexino Technologies Ltd designs and builds websites, custom systems, AI tools, automation workflows, cloud infrastructure and embedded solutions. If you are unsure what you need, we can help you define the right starting point.',
    questions: [
      'What does Nexino Technologies Ltd do?',
      'What services do you offer?',
      'What kind of projects do you take on?',
      'What can Nexino build?',
      'What problems do you solve for clients?',
      'Which technologies do you work with?',
      'Can you tell me about Nexino?',
      'What is Nexino Technologies Ltd best known for?',
      'What areas of technology do you cover?',
      'How can Nexino help my business?',
    ],
  },
  {
    id: 'starting-a-project',
    category: 'General',
    subject: 'starting a new project',
    focus: 'a short discovery call, scope clarification and a practical first plan',
    answer:
      'We usually start with a short discovery call so we can understand the goal, the users and the constraints. From there we shape a realistic scope and recommend the best next step.',
  },
  {
    id: 'discovery-call',
    category: 'General',
    subject: 'a discovery call',
    focus: 'the problem, the users, the outcome you want and the most practical route forward',
    answer:
      'A discovery call is where we clarify the challenge, the users and the outcome you want. It helps us recommend a realistic route forward before any design or development starts.',
  },
  {
    id: 'project-budgeting',
    category: 'General',
    subject: 'project budgeting',
    focus: 'priority features, scope options and realistic budget ranges',
    answer:
      'We discuss budget ranges early so we can recommend the right scope, phase the work if needed and avoid unrealistic expectations. The goal is to match the solution to the available budget and the business outcome.',
  },
  {
    id: 'project-timelines',
    category: 'General',
    subject: 'project timelines',
    focus: 'scope size, content readiness, integrations and review cycles',
    answer:
      'Timelines depend on the size of the scope, the number of integrations and how ready the content is. After discovery we can give a realistic phase-by-phase plan.',
  },
  {
    id: 'corporate-website',
    category: 'Websites',
    subject: 'a corporate website',
    focus: 'clear service pages, mobile-friendly layouts, contact forms and SEO foundations',
  },
  {
    id: 'website-redesign',
    category: 'Websites',
    subject: 'a website redesign',
    focus: 'stronger messaging, better structure, updated visuals and improved performance',
  },
  {
    id: 'mobile-friendly-website',
    category: 'Websites',
    subject: 'a mobile-friendly website',
    focus: 'responsive layouts, readable content and touch-friendly navigation across devices',
  },
  {
    id: 'website-seo-basics',
    category: 'Websites',
    subject: 'website SEO basics',
    focus: 'clean structure, headings, metadata and indexable pages that support search visibility',
  },
  {
    id: 'website-content-forms',
    category: 'Websites',
    subject: 'website content and forms',
    focus: 'service pages, call-to-action sections, inquiry forms and easy contact paths',
  },
  {
    id: 'custom-business-system',
    category: 'Systems',
    subject: 'a custom business system',
    focus: 'customer records, staff workflows, reporting and access control around your process',
  },
  {
    id: 'internal-dashboard',
    category: 'Systems',
    subject: 'an internal dashboard',
    focus: 'key metrics, filters, charts and role-based views for the right teams',
  },
  {
    id: 'customer-portal',
    category: 'Systems',
    subject: 'a customer portal',
    focus: 'secure self-service access, account tools and controlled data views',
  },
  {
    id: 'booking-system',
    category: 'Systems',
    subject: 'a booking system',
    focus: 'availability rules, confirmations, reminders and scheduling flows',
  },
  {
    id: 'inventory-system',
    category: 'Systems',
    subject: 'an inventory system',
    focus: 'item tracking, stock counts, alerts and reporting for better oversight',
  },
  {
    id: 'business-chatbot',
    category: 'AI Chatbots',
    subject: 'a business chatbot',
    focus: 'FAQ answers, lead capture, human handoff and conversation logging',
  },
  {
    id: 'ai-agent',
    category: 'AI Chatbots',
    subject: 'an AI agent',
    focus: 'task reasoning, information lookup and action execution inside a defined scope',
  },
  {
    id: 'whatsapp-automation',
    category: 'AI Chatbots',
    subject: 'WhatsApp automation',
    focus: 'quick replies, lead follow-up, routing and simple conversation flows',
  },
  {
    id: 'lead-capture-automation',
    category: 'AI Chatbots',
    subject: 'lead capture automation',
    focus: 'forms, routing, notifications and follow-up actions',
  },
  {
    id: 'faq-automation',
    category: 'AI Chatbots',
    subject: 'FAQ automation',
    focus: 'knowledge-base answers and escalation when the question needs a person',
  },
  {
    id: 'customer-support-automation',
    category: 'Automation',
    subject: 'customer support automation',
    focus: 'ticket routing, canned answers and human escalation paths',
  },
  {
    id: 'workflow-automation',
    category: 'Automation',
    subject: 'workflow automation',
    focus: 'approval steps, notifications and status tracking across the process',
  },
  {
    id: 'approval-workflows',
    category: 'Automation',
    subject: 'approval workflows',
    focus: 'review stages, reminders and audit-friendly process tracking',
  },
  {
    id: 'data-entry-automation',
    category: 'Automation',
    subject: 'data entry automation',
    focus: 'capturing data once and reusing it across the right systems',
  },
  {
    id: 'repetitive-admin-tasks',
    category: 'Automation',
    subject: 'repetitive admin tasks',
    focus: 'scheduled reminders, status updates and automated routine actions',
  },
  {
    id: 'hosting-maintenance',
    category: 'Hosting & Maintenance',
    subject: 'hosting and maintenance',
    focus: 'deployment management, monitoring, updates and support',
  },
  {
    id: 'uptime-monitoring',
    category: 'Hosting & Maintenance',
    subject: 'uptime monitoring',
    focus: 'health checks, alerts and early issue detection',
  },
  {
    id: 'backups-recovery',
    category: 'Hosting & Maintenance',
    subject: 'backups and recovery',
    focus: 'regular backups, restore planning and data safety',
  },
  {
    id: 'website-migration',
    category: 'Hosting & Maintenance',
    subject: 'website migration',
    focus: 'moving content, URLs and hosting with minimal disruption',
  },
  {
    id: 'security-updates',
    category: 'Hosting & Maintenance',
    subject: 'security updates',
    focus: 'dependency updates, patching and routine hardening',
  },
  {
    id: 'analytics-dashboard',
    category: 'Data & Analytics',
    subject: 'analytics dashboards',
    focus: 'charts, KPI views and decision-friendly reporting',
  },
  {
    id: 'business-intelligence',
    category: 'Data & Analytics',
    subject: 'business intelligence',
    focus: 'data modelling, reporting and insight delivery',
  },
  {
    id: 'reporting-automation',
    category: 'Data & Analytics',
    subject: 'reporting automation',
    focus: 'scheduled summaries, exports and email delivery',
  },
  {
    id: 'data-integration',
    category: 'Data & Analytics',
    subject: 'data integration',
    focus: 'connecting APIs, spreadsheets and internal systems',
  },
  {
    id: 'technical-research',
    category: 'Data & Analytics',
    subject: 'technical research',
    focus: 'evaluating options, documenting findings and recommending a path',
  },
  {
    id: 'mobile-application',
    category: 'Mobile & Ecommerce',
    subject: 'a mobile application',
    focus: 'iOS and Android flows, device-friendly interfaces and app features',
  },
  {
    id: 'ecommerce-platform',
    category: 'Mobile & Ecommerce',
    subject: 'an e-commerce platform',
    focus: 'catalogues, carts, checkout and order management',
  },
  {
    id: 'payment-integration',
    category: 'Mobile & Ecommerce',
    subject: 'payment integration',
    focus: 'secure payment gateways and transaction flow',
  },
  {
    id: 'checkout-flow',
    category: 'Mobile & Ecommerce',
    subject: 'product and checkout flows',
    focus: 'browsing, cart actions and purchase completion',
  },
  {
    id: 'app-support-updates',
    category: 'Mobile & Ecommerce',
    subject: 'app support and updates',
    focus: 'bug fixes, improvements and version maintenance',
  },
  {
    id: 'embedded-systems',
    category: 'Engineering & Infrastructure',
    subject: 'embedded systems',
    focus: 'firmware, sensors and connected devices',
  },
  {
    id: 'sensor-monitoring',
    category: 'Engineering & Infrastructure',
    subject: 'sensor monitoring',
    focus: 'data collection, alerts and live dashboards',
  },
  {
    id: 'hardware-software-integration',
    category: 'Engineering & Infrastructure',
    subject: 'hardware and software integration',
    focus: 'device communication and system bridging',
  },
  {
    id: 'pcb-design',
    category: 'Engineering & Infrastructure',
    subject: 'PCB design',
    focus: 'circuit planning, layout guidance and prototype support',
  },
  {
    id: 'cloud-infrastructure',
    category: 'Engineering & Infrastructure',
    subject: 'cloud infrastructure',
    focus: 'scalable hosting, deployment and integration',
  },
  {
    id: 'business-technologies',
    category: 'Industries',
    subject: 'business technologies',
    focus: 'operations systems, customer tools and internal workflows',
  },
  {
    id: 'mining-technologies',
    category: 'Industries',
    subject: 'mining technologies',
    focus: 'field data, monitoring and reporting tools',
  },
  {
    id: 'construction-technologies',
    category: 'Industries',
    subject: 'construction technologies',
    focus: 'site coordination, documents and progress tracking',
  },
  {
    id: 'health-technologies',
    category: 'Industries',
    subject: 'health technologies',
    focus: 'secure operational tools, scheduling and communication',
  },
  {
    id: 'intelligent-infrastructure',
    category: 'Industries',
    subject: 'intelligent infrastructure',
    focus: 'connected sensors, monitoring and alerting',
  },
  {
    id: 'contact-methods',
    category: 'Support & Contact',
    subject: 'contact methods',
    focus: 'email, phone, WhatsApp and the project form',
  },
  {
    id: 'whatsapp-communication',
    category: 'Support & Contact',
    subject: 'WhatsApp communication',
    focus: 'quick questions, project discussion and direct contact',
  },
  {
    id: 'email-support',
    category: 'Support & Contact',
    subject: 'email support',
    focus: 'detailed enquiries, documents and project notes',
  },
  {
    id: 'remote-collaboration',
    category: 'Support & Contact',
    subject: 'remote collaboration',
    focus: 'clear communication, shared reviews and online delivery',
  },
  {
    id: 'after-launch-support',
    category: 'Support & Contact',
    subject: 'after-launch support',
    focus: 'fixes, updates, monitoring and improvements after delivery',
  },
];

function buildGenericAnswer(subject: string, focus: string) {
  return `Yes. We can help with ${subject}. We usually focus on ${focus}. We start by clarifying the scope so we can recommend the most practical next step.`;
}

function normalise(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text: string) {
  const stopWords = new Set([
    'a',
    'an',
    'and',
    'are',
    'can',
    'do',
    'for',
    'from',
    'get',
    'how',
    'i',
    'in',
    'is',
    'it',
    'me',
    'my',
    'of',
    'on',
    'our',
    'the',
    'to',
    'us',
    'we',
    'what',
    'when',
    'where',
    'which',
    'with',
    'you',
    'your',
  ]);

  return normalise(text)
    .split(' ')
    .filter((token) => token.length > 1 && !stopWords.has(token));
}

function buildQuestions(topic: Topic) {
  if (topic.questions?.length) {
    return topic.questions;
  }

  return genericQuestionTemplates.map((template) => template.replace('{subject}', topic.subject));
}

export const chatbotFaqs: ChatbotFaq[] = chatbotTopics.flatMap((topic) =>
  buildQuestions(topic).map((question, index) => ({
    id: `${topic.id}-${index + 1}`,
    category: topic.category,
    question,
    answer: topic.answer ?? buildGenericAnswer(topic.subject, topic.focus),
  })),
);

export const chatbotStarterQuestions = chatbotFaqs.slice(0, 10);

export function getChatbotMatches(query: string, limit = 5) {
  const cleanedQuery = normalise(query);

  if (!cleanedQuery) {
    return chatbotStarterQuestions.slice(0, limit);
  }

  const queryTokens = tokenize(query);

  return [...chatbotFaqs]
    .map((item) => {
      const haystack = normalise(`${item.question} ${item.answer} ${item.category}`);
      const haystackTokens = new Set(tokenize(`${item.question} ${item.answer} ${item.category}`));

      let score = 0;

      if (haystack.includes(cleanedQuery)) {
        score += 30;
      }

      if (item.question.toLowerCase() === query.trim().toLowerCase()) {
        score += 100;
      }

      for (const token of queryTokens) {
        if (haystackTokens.has(token)) {
          score += 5;
        }
      }

      if (item.category && cleanedQuery.includes(normalise(item.category))) {
        score += 8;
      }

      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}

export function getChatbotAnswer(query: string) {
  const match = getChatbotMatches(query, 1)[0];

  if (match) {
    return match;
  }

  return {
    id: 'fallback',
    category: 'General',
    question: query,
    answer:
      'I could not find an exact match yet. Please try a different wording, or use the contact form and we will help you directly.',
  };
}
