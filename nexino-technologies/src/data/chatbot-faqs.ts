import type { FaqItem } from '@/types/common';
import { allServices } from '@/data/services';
import { contactFaqs, generalFaqs } from '@/data/faqs';

export type ChatbotFaq = FaqItem & {
  id: string;
  category: string;
};

export type ChatbotAnswer = ChatbotFaq & {
  matchedQuestion?: string;
};

type Topic = {
  id: string;
  category: string;
  subject: string;
  focus: string;
  answer?: string;
  questions?: string[];
};

type ChatbotContext = {
  previousUserQuery?: string;
};

type ServiceFaq = ChatbotFaq & {
  serviceSlug?: string;
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

const topicFaqs: ChatbotFaq[] = chatbotTopics.flatMap((topic) =>
  buildQuestions(topic).map((question, index) => ({
    id: `${topic.id}-${index + 1}`,
    category: topic.category,
    question,
    answer: topic.answer ?? buildGenericAnswer(topic.subject, topic.focus),
  })),
);

function buildServiceFaqs(): ServiceFaq[] {
  return allServices.flatMap((service) => {
    const serviceTitle = service.shortTitle || service.title;
    const serviceQuestionSet: ServiceFaq[] = [
      {
        id: `${service.slug}-overview`,
        category: service.category,
        question: `What is ${serviceTitle}?`,
        answer: service.overview,
        serviceSlug: service.slug,
      },
      {
        id: `${service.slug}-help`,
        category: service.category,
        question: `Can you help with ${serviceTitle}?`,
        answer: service.heroDescription,
        serviceSlug: service.slug,
      },
      {
        id: `${service.slug}-timelines`,
        category: 'Process',
        question: `How long does ${serviceTitle} take?`,
        answer:
          service.slug === 'corporate-websites'
            ? 'A typical corporate website takes four to eight weeks depending on scope, content readiness and review cycles.'
            : 'Timelines depend on scope, integrations and how ready the content is. After discovery we can give a realistic phase-by-phase plan.',
        serviceSlug: service.slug,
      },
      {
        id: `${service.slug}-pricing`,
        category: 'Pricing',
        question: `How much does ${serviceTitle} cost?`,
        answer: buildServicePricingAnswer(service),
        serviceSlug: service.slug,
      },
    ];

    return serviceQuestionSet;
  });
}

function buildServicePricingAnswer(service: (typeof allServices)[number]) {
  if (service.slug === 'corporate-websites') {
    return 'A 10-page corporate website is usually priced by scope rather than page count alone. As a practical starting point, a simple brochure-style build can sit in the lower budget band, while a more polished 10-page site with custom design, content support, SEO setup, forms or integrations can move into the next band. Send the page list and features you want, and we will help you narrow it down.';
  }

  return `Pricing for ${service.title} depends on scope, integrations, design depth and support needs. We usually confirm the core requirements first, then give a realistic estimate that fits the project.`;
}

export const chatbotFaqs: ChatbotFaq[] = [
  ...topicFaqs,
  ...buildServiceFaqs(),
  ...generalFaqs.map((faq, index) => ({
    id: `general-faq-${index + 1}`,
    category: faq.category || 'General',
    question: faq.question,
    answer: faq.answer,
  })),
  ...contactFaqs.map((faq, index) => ({
    id: `contact-faq-${index + 1}`,
    category: faq.category || 'Contact',
    question: faq.question,
    answer: faq.answer,
  })),
];

const curatedStarterQuestions = [
  'What services do you offer?',
  'How much does a website cost?',
  'How long does a project take?',
  'Can you build a corporate website for my business?',
  'Can you build a custom system?',
  'Do you offer hosting and maintenance?',
  'Do you build AI chatbots or automation tools?',
  'How do I start a project with Nexino Technologies Ltd?',
];

export const chatbotStarterQuestions = curatedStarterQuestions
  .map((question) => chatbotFaqs.find((item) => normalise(item.question) === normalise(question)))
  .filter((item): item is ChatbotFaq => Boolean(item));

function isPricingIntent(query: string) {
  return /\b(price|cost|quote|estimate|budget|fee|fees|rate|rates|pricing|money|how much|package|charge|charges)\b/i.test(query);
}

function isTimelineIntent(query: string) {
  return /\b(timeline|timelines|time|long|how long|duration|deadline)\b/i.test(query);
}

function isServiceIntent(query: string) {
  return /\b(service|services|offer|offers|build|create|make|develop|help with|can you)\b/i.test(query);
}

function isSupportIntent(query: string) {
  return /\b(support|help|maintenance|maintenance and support|hosting|after launch|after-launch|contact|email|whatsapp|phone)\b/i.test(query);
}

function isGeneralCompanyIntent(query: string) {
  return /\b(who are you|about nexino|what is nexino|what do you do|what can you do|tell me about nexino|where are you based|location|based in)\b/i.test(query);
}

function buildServicesOverviewAnswer() {
  const serviceGroups = [
    'websites',
    'custom web applications',
    'AI agents',
    'business chatbots',
    'WhatsApp automation',
    'workflow automation',
    'hosting and maintenance',
    'cloud infrastructure',
    'data analytics',
    'business intelligence',
    'embedded systems',
    'PCB design',
    'hardware-software integration',
  ];

  return `Nexino Technologies Ltd designs and builds ${serviceGroups.join(', ')}. We also help with project discovery, system integration, support and ongoing improvement so the solution fits the real business need rather than only the initial idea.`;
}

function buildContactAnswer() {
  return `${buildSupportAnswer()} You can also contact Nexino Technologies Ltd through the form on the website, by email at stevohsunb@gmail.com, or via WhatsApp. If you share a clear summary of your project, we can help you decide the best next step.`;
}

function findServiceMention(query: string, previousUserQuery?: string) {
  const combined = normalise(`${query} ${previousUserQuery ?? ''}`);
  const queryTokens = tokenize(combined);

  return allServices.find((service) => {
    const serviceTerms = [service.title, service.shortTitle, service.slug]
      .filter(Boolean)
      .map((term) => normalise(term as string));

    if (serviceTerms.some((term) => combined.includes(term))) {
      return true;
    }

    if (service.slug === 'corporate-websites' && (combined.includes('website') || combined.includes('web pages'))) {
      return true;
    }

    if (service.slug === 'hosting-maintenance' && (combined.includes('hosting') || combined.includes('maintenance'))) {
      return true;
    }

    if (service.slug === 'business-chatbots' && combined.includes('chatbot')) {
      return true;
    }

    if (service.slug === 'workflow-automation' && combined.includes('automation')) {
      return true;
    }

    if (service.slug === 'data-analytics' && (combined.includes('data') || combined.includes('analytics'))) {
      return true;
    }

    if (service.slug === 'embedded-systems' && (combined.includes('embedded') || combined.includes('hardware') || combined.includes('device'))) {
      return true;
    }

    return queryTokens.some((token) => serviceTerms.some((term) => term.includes(token) || token.includes(term)));
  });
}

function buildCompanyAnswer() {
  return 'Nexino Technologies Ltd designs and builds websites, custom systems, AI tools, automation workflows, cloud infrastructure and embedded solutions. We focus on practical digital products that help organisations work better, serve users faster and grow with confidence.';
}

function buildSupportAnswer() {
  return 'We support projects before and after launch through hosting, maintenance, updates, monitoring and practical follow-up. You can contact us by email, phone or WhatsApp, and we usually start by understanding the issue or the change you need.';
}

function buildPricingAnswer(query: string, service?: (typeof allServices)[number], previousUserQuery?: string) {
  const pageMatch = `${query} ${previousUserQuery ?? ''}`.match(/(\d+)\s*(?:page|pages|web page|web pages)\b/i);
  const pageCount = pageMatch ? Number(pageMatch[1]) : undefined;

  if (service?.slug === 'corporate-websites' || /website|web pages/i.test(`${query} ${previousUserQuery ?? ''}`)) {
    if (pageCount && pageCount >= 8) {
      return `For a ${pageCount}-page website, we would usually price based on design depth, content support, forms, SEO setup and any integrations. A straightforward build can sit in a lower budget band, while a more polished site with custom sections and extra functionality moves higher. For a 10-page corporate website, a realistic starting conversation is usually in the 500,000 to 1,000,000 RWF range for a simple build, and 1,000,000 to 3,000,000 RWF when the project includes more custom design, content help or integrations.`;
    }

    return 'Website pricing depends on page count, design complexity, content support, forms, SEO setup and integrations. We do not treat it as one fixed package. For a standard corporate site, we usually start by understanding the page list and feature needs, then we recommend the most practical budget band.';
  }

  if (service) {
    return `Pricing for ${service.title} depends on scope, integrations, design depth and support needs. We usually confirm the core requirements first, then provide a realistic estimate and possible phase-by-phase approach.`;
  }

  return 'Pricing depends on the scope, number of pages, integrations, content support and ongoing maintenance. If you share what you want to build, I can help estimate the right budget band and next steps.';
}

function buildTimelineAnswer(service?: (typeof allServices)[number]) {
  if (service?.slug === 'corporate-websites') {
    return 'A typical corporate website takes four to eight weeks depending on scope, content readiness and review cycles.';
  }

  if (service) {
    return `Timelines for ${service.title} depend on scope, integrations and how ready the content is. After discovery we can give a realistic phase-by-phase plan.`;
  }

  return 'Timelines depend on the size of the scope, the number of integrations and how ready the content is. After discovery we can give a realistic phase-by-phase plan.';
}

function answerFromServiceQuestion(service: (typeof allServices)[number], query: string) {
  const normalized = normalise(query);

  if (isPricingIntent(query)) {
    return {
      id: `${service.slug}-pricing-answer`,
      category: 'Pricing',
      question: `How much does ${service.shortTitle || service.title} cost?`,
      answer: buildPricingAnswer(query, service),
    };
  }

  if (isTimelineIntent(query)) {
    return {
      id: `${service.slug}-timeline-answer`,
      category: 'Process',
      question: `How long does ${service.shortTitle || service.title} take?`,
      answer: buildTimelineAnswer(service),
    };
  }

  if (normalized.includes(normalise(service.title)) || normalized.includes(normalise(service.shortTitle || service.title))) {
    return {
      id: `${service.slug}-overview-answer`,
      category: service.category,
      question: `What is ${service.shortTitle || service.title}?`,
      answer: service.overview,
    };
  }

  return {
    id: `${service.slug}-help-answer`,
    category: service.category,
    question: `Can you help with ${service.shortTitle || service.title}?`,
    answer: service.heroDescription,
  };
}

export function getChatbotMatches(query: string, limit = 5) {
  const cleanedQuery = normalise(query);

  if (!cleanedQuery) {
    return chatbotStarterQuestions.slice(0, limit);
  }

  const queryTokens = tokenize(query);
  const service = findServiceMention(query);
  const pricingIntent = isPricingIntent(query);
  const timelineIntent = isTimelineIntent(query);
  const supportIntent = isSupportIntent(query);
  const companyIntent = isGeneralCompanyIntent(query);

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

      if (pricingIntent && normalise(item.category).includes('pricing')) {
        score += 20;
      }

      if (timelineIntent && normalise(item.category).includes('process')) {
        score += 12;
      }

      if (supportIntent && ['contact', 'support & contact', 'hosting & maintenance'].includes(normalise(item.category))) {
        score += 14;
      }

      if (companyIntent && normalise(item.category) === 'general') {
        score += 14;
      }

      if (service) {
        const serviceKey = normalise(service.shortTitle || service.title);
        if (normalise(item.question).includes(serviceKey) || normalise(item.answer).includes(serviceKey)) {
          score += 16;
        }
      }

      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}

export function getChatbotAnswer(query: string, context: ChatbotContext = {}): ChatbotAnswer {
  const service = findServiceMention(query, context.previousUserQuery);
  const companyIntent = isGeneralCompanyIntent(query) || isServiceIntent(query);
  const pricingIntent = isPricingIntent(query);
  const timelineIntent = isTimelineIntent(query);
  const supportIntent = isSupportIntent(query);

  if (pricingIntent) {
    const pricingAnswer = buildPricingAnswer(query, service, context.previousUserQuery);

    return {
      id: service ? `${service.slug}-pricing-answer` : 'pricing-answer',
      category: 'Pricing',
      question: service ? `How much does ${service.shortTitle || service.title} cost?` : 'How much does a website cost?',
      answer: pricingAnswer,
      matchedQuestion: service ? `How much does ${service.shortTitle || service.title} cost?` : 'How much does a website cost?',
    };
  }

  if (timelineIntent && service) {
    return {
      ...answerFromServiceQuestion(service, query),
      matchedQuestion: `How long does ${service.shortTitle || service.title} take?`,
    };
  }

  if (supportIntent) {
    return {
      id: 'support-answer',
      category: 'Support',
      question: 'How do I contact Nexino Technologies Ltd?',
      answer: buildContactAnswer(),
      matchedQuestion: 'How do I contact Nexino Technologies Ltd?',
    };
  }

  if (companyIntent) {
    return {
      id: 'what-nexino-does',
      category: 'General',
      question: 'What does Nexino Technologies Ltd do?',
      answer: companyIntent && /service|services/.test(normalise(query)) ? buildServicesOverviewAnswer() : buildCompanyAnswer(),
      matchedQuestion: 'What does Nexino Technologies Ltd do?',
    };
  }

  if (service) {
    const answer = answerFromServiceQuestion(service, query);
    return {
      ...answer,
      matchedQuestion: answer.question,
    };
  }

  const exactMatch = getChatbotMatches(query, 1)[0];
  if (exactMatch) {
    return exactMatch;
  }

  return {
    id: 'fallback',
    category: 'General',
    question: query,
    answer:
      'I can help with Nexino services, pricing, timelines, support, contact details and project planning. Try asking about websites, custom systems, AI automation, hosting or data, and I will give a more specific answer.',
  };
}
