import type { Service } from '@/types/service';

type ServiceSeed = Pick<
  Service,
  'id' | 'slug' | 'title' | 'shortTitle' | 'category' | 'categorySlug' | 'tagline' | 'overview' | 'heroDescription'
> & {
  relatedServiceSlugs?: string[];
  cta?: Service['cta'];
  seo?: Service['seo'];
};

const sharedProblems = [
  { title: 'Manual workarounds', description: 'Teams rely on spreadsheets and handoffs that slow down delivery.' },
  { title: 'Disconnected systems', description: 'Information sits in separate tools that do not communicate cleanly.' },
  { title: 'Limited scalability', description: 'Current processes work now but are hard to extend as demand grows.' },
];

const sharedCapabilities = [
  { title: 'Requirements discovery', description: 'Clarify the scope, users and success criteria before building.' },
  { title: 'Design and planning', description: 'Map the structure, workflow and interface of the solution.' },
  { title: 'Implementation', description: 'Build maintainable software with clean handoff points.' },
  { title: 'Testing and review', description: 'Validate the solution against real-world use cases.' },
  { title: 'Deployment support', description: 'Launch with sensible monitoring and operational readiness.' },
  { title: 'Ongoing improvement', description: 'Refine the solution as feedback and needs evolve.' },
];

const sharedBenefits = [
  { title: 'Clearer workflows', description: 'Reduce friction and make processes easier to follow.' },
  { title: 'Better visibility', description: 'Bring the right information into one place for decision-making.' },
  { title: 'Future-ready foundations', description: 'Create a stable base that can grow with your organisation.' },
];

const sharedDeliverySteps = [
  { step: 1, title: 'Discovery', description: 'Understand the problem, context and constraints.' },
  { step: 2, title: 'Specification', description: 'Define the key screens, flows and technical requirements.' },
  { step: 3, title: 'Build', description: 'Implement the solution in an iterative way.' },
  { step: 4, title: 'Validate', description: 'Review functionality, usability and performance.' },
];

const sharedFaqs = [
  { question: 'Can this be tailored to our organisation?', answer: 'Yes. Each service page represents a starting point that can be adapted to your exact needs.' },
];

function createService(seed: ServiceSeed): Service {
  return {
    ...seed,
    problems: sharedProblems,
    capabilities: sharedCapabilities,
    benefits: sharedBenefits,
    deliverySteps: sharedDeliverySteps,
    relatedServiceSlugs: seed.relatedServiceSlugs ?? [],
    faqs: sharedFaqs,
    cta: seed.cta ?? { label: 'Discuss This Service', href: `/contact?service=${seed.slug}` },
    seo: seed.seo ?? {
      title: `${seed.title} - Nexino Technologies Ltd`,
      description: seed.tagline,
    },
  };
}

export const services: Service[] = [
  {
    id: 'corporate-websites',
    slug: 'corporate-websites',
    title: 'Corporate Websites',
    shortTitle: 'Corporate Websites',
    category: 'Digital Product Development',
    categorySlug: 'digital-product-development',
    tagline: 'Professional digital presence built to represent your organisation.',
    overview: 'We design and build corporate websites that communicate your brand, capture leads and function reliably across all devices.',
    heroDescription: 'A corporate website is the foundation of your digital presence. We build sites that are fast, accessible and aligned with your business goals.',
    problems: [
      { title: 'Outdated online presence', description: 'Your current website does not reflect the quality of your organisation or convert visitors into enquiries.' },
      { title: 'Poor mobile experience', description: 'The site performs inconsistently on mobile devices, losing a significant portion of visitors.' },
      { title: 'Slow load times', description: 'Performance issues affect search rankings and user experience.' },
    ],
    capabilities: [
      { title: 'Responsive design', description: 'Works across all screen sizes and devices.' },
      { title: 'CMS integration', description: 'Easy content updates without technical knowledge.' },
      { title: 'SEO foundation', description: 'Structured for search visibility from the start.' },
      { title: 'Contact and inquiry forms', description: 'Capture and route leads effectively.' },
      { title: 'Performance optimisation', description: 'Fast load times on all connections.' },
      { title: 'Accessibility compliance', description: 'Built to be usable by everyone.' },
    ],
    benefits: [
      { title: 'Credibility', description: 'Present your organisation professionally to every visitor.' },
      { title: 'Lead generation', description: 'Convert visitors into contacts and customers.' },
      { title: 'Search visibility', description: 'Built with SEO foundations to support organic growth.' },
    ],
    deliverySteps: [
      { step: 1, title: 'Discovery', description: 'Understand your organisation, audience and goals.' },
      { step: 2, title: 'Design', description: 'Create wireframes and visual designs for review.' },
      { step: 3, title: 'Development', description: 'Build the site with clean, maintainable code.' },
      { step: 4, title: 'Review', description: 'Test, refine and optimise before launch.' },
      { step: 5, title: 'Launch', description: 'Deploy and confirm everything is working.' },
    ],
    relatedServiceSlugs: ['custom-web-applications', 'ui-ux-design', 'hosting-maintenance'],
    faqs: [
      { question: 'How long does a corporate website take?', answer: 'A typical corporate website takes four to eight weeks depending on scope and content.' },
      { question: 'Can I update the content myself?', answer: 'Yes. We integrate a content management system so you can manage pages, news and resources independently.' },
    ],
    cta: { label: 'Discuss This Service', href: '/contact?service=corporate-websites' },
    seo: {
      title: 'Corporate Website Development - Nexino Technologies Ltd',
      description: 'Professional corporate websites built for credibility, performance and lead generation. Responsive, fast and SEO-ready.',
    },
  },
  {
    id: 'custom-web-applications',
    slug: 'custom-web-applications',
    title: 'Custom Web Applications',
    shortTitle: 'Web Applications',
    category: 'Digital Product Development',
    categorySlug: 'digital-product-development',
    tagline: 'Tailored applications built around your specific business logic.',
    overview: 'We engineer web applications that solve specific operational challenges - from internal tools to customer-facing platforms.',
    heroDescription: 'Off-the-shelf software rarely fits complex business operations. We build custom applications designed around your exact requirements.',
    problems: [
      { title: 'Generic software limitations', description: 'Existing tools do not match your workflow, causing manual workarounds and inefficiency.' },
      { title: 'Integration gaps', description: 'Systems that cannot communicate with each other create data silos.' },
      { title: 'Scalability concerns', description: 'Current platforms cannot grow with your organisation.' },
    ],
    capabilities: [
      { title: 'Custom business logic', description: 'Built precisely for how your organisation works.' },
      { title: 'Database design', description: 'Structured data models that scale.' },
      { title: 'Role-based access', description: 'Control who sees and does what.' },
      { title: 'API integrations', description: 'Connect with third-party services and internal systems.' },
      { title: 'Dashboards and reporting', description: 'Meaningful data at a glance.' },
      { title: 'Secure authentication', description: 'Protect user accounts and sensitive information.' },
    ],
    benefits: [
      { title: 'Exact fit', description: 'Software that matches your process, not the other way around.' },
      { title: 'Efficiency', description: 'Automate repetitive steps and reduce manual effort.' },
      { title: 'Ownership', description: 'You own the codebase and can extend it over time.' },
    ],
    deliverySteps: [
      { step: 1, title: 'Requirements', description: 'Map business processes and define application scope.' },
      { step: 2, title: 'Architecture', description: 'Design the technical structure and data model.' },
      { step: 3, title: 'Development', description: 'Build iteratively with regular review checkpoints.' },
      { step: 4, title: 'Testing', description: 'Functional, performance and security testing.' },
      { step: 5, title: 'Deployment', description: 'Launch and configure the production environment.' },
    ],
    relatedServiceSlugs: ['saas-development', 'cloud-infrastructure', 'data-analytics'],
    faqs: [
      { question: 'What is the difference between a website and a web application?', answer: 'A website primarily presents information. A web application allows users to interact with data, complete tasks and manage information.' },
      { question: 'Do you build the backend too?', answer: 'Yes. We handle the full stack including frontend, backend API, database and deployment.' },
    ],
    cta: { label: 'Discuss This Service', href: '/contact?service=custom-web-applications' },
    seo: {
      title: 'Custom Web Application Development - Nexino Technologies Ltd',
      description: 'Tailored web applications engineered for specific business needs. Full-stack development with scalable architecture.',
    },
  },

  {
    id: 'ai-agents',
    slug: 'ai-agents',
    title: 'AI Agents',
    shortTitle: 'AI Agents',
    category: 'AI and Automation',
    categorySlug: 'ai-and-automation',
    tagline: 'Intelligent systems that act, reason and respond on your behalf.',
    overview: 'We design and build AI agents that handle tasks, respond to enquiries and support decisions automatically.',
    heroDescription: 'AI agents go beyond simple chatbots. They reason through problems, take actions and learn from outcomes to continuously improve.',
    problems: [
      { title: 'High volume of repetitive tasks', description: 'Staff spend significant time on tasks that follow predictable patterns.' },
      { title: 'Slow response times', description: 'Manual processes create delays that affect customer satisfaction.' },
      { title: 'Inconsistent outcomes', description: 'Human variability in repetitive tasks leads to inconsistent quality.' },
    ],
    capabilities: [
      { title: 'Task automation', description: 'Agents that complete defined workflows independently.' },
      { title: 'Natural language understanding', description: 'Process and respond to unstructured text.' },
      { title: 'Decision support', description: 'Present relevant information to assist human decision-making.' },
      { title: 'System integration', description: 'Connect agents to existing platforms and data sources.' },
      { title: 'Monitoring and logging', description: 'Track agent activity and performance.' },
      { title: 'Escalation logic', description: 'Hand off to humans when complexity requires it.' },
    ],
    benefits: [
      { title: 'Time savings', description: 'Reduce hours spent on repetitive, rule-based tasks.' },
      { title: 'Consistency', description: 'Every action follows the defined logic without variation.' },
      { title: 'Scalability', description: 'Handle increasing volumes without proportional staffing increases.' },
    ],
    deliverySteps: [
      { step: 1, title: 'Use case definition', description: 'Identify where AI agents provide the most value.' },
      { step: 2, title: 'Data and process review', description: 'Understand the inputs, logic and expected outputs.' },
      { step: 3, title: 'Prototype', description: 'Build and test a small-scale version of the agent.' },
      { step: 4, title: 'Integration', description: 'Connect to systems and deploy in a controlled environment.' },
      { step: 5, title: 'Monitoring', description: 'Track performance and refine over time.' },
    ],
    relatedServiceSlugs: ['business-chatbots', 'workflow-automation', 'customer-support-automation'],
    faqs: [
      { question: 'What kind of tasks can an AI agent handle?', answer: 'Common use cases include answering questions, routing requests, filling forms, summarising documents and triggering actions based on conditions.' },
      { question: 'Do agents require constant retraining?', answer: 'Not necessarily. Well-designed agents with clear scope operate reliably without frequent retraining. We design for maintainability.' },
    ],
    cta: { label: 'Discuss This Service', href: '/contact?service=ai-agents' },
    seo: {
      title: 'AI Agent Development - Nexino Technologies Ltd',
      description: 'Custom AI agents that automate tasks, respond intelligently and integrate with your existing systems.',
    },
  },
  {
    id: 'business-chatbots',
    slug: 'business-chatbots',
    title: 'Business Chatbots',
    shortTitle: 'Business Chatbots',
    category: 'AI and Automation',
    categorySlug: 'ai-and-automation',
    tagline: 'Intelligent conversational interfaces for customers and internal teams.',
    overview: 'We build chatbots that handle enquiries, guide users and collect information - integrated into your website, platform or communication channels.',
    heroDescription: 'A well-built chatbot extends your team capacity without adding headcount. We design conversational flows that feel natural and resolve queries effectively.',
    problems: [
      { title: 'Overwhelmed support teams', description: 'High volumes of repetitive enquiries consume team time.' },
      { title: 'After-hours gaps', description: 'Customers need responses outside working hours.' },
      { title: 'Inconsistent information', description: 'Different team members provide varying answers to the same questions.' },
    ],
    capabilities: [
      { title: 'Intent recognition', description: 'Understand what users are asking for.' },
      { title: 'FAQ automation', description: 'Answer common questions instantly.' },
      { title: 'Lead capture', description: 'Collect contact details and qualify prospects.' },
      { title: 'Appointment scheduling', description: 'Guide users through booking flows.' },
      { title: 'Escalation to humans', description: 'Seamlessly transfer complex queries.' },
      { title: 'Analytics', description: 'Understand what users ask most.' },
    ],
    benefits: [
      { title: 'Always available', description: 'Respond to enquiries at any time.' },
      { title: 'Consistent answers', description: 'Every user receives the same accurate information.' },
      { title: 'Reduced workload', description: 'Free team members for higher-value tasks.' },
    ],
    deliverySteps: [
      { step: 1, title: 'Conversation design', description: 'Map typical user journeys and define response logic.' },
      { step: 2, title: 'Build', description: 'Develop the chatbot and connect it to your knowledge base.' },
      { step: 3, title: 'Test', description: 'Validate responses across scenarios.' },
      { step: 4, title: 'Deploy', description: 'Integrate into your website or platform.' },
      { step: 5, title: 'Review', description: 'Analyse usage and improve flows over time.' },
    ],
    relatedServiceSlugs: ['ai-agents', 'whatsapp-automation', 'customer-support-automation'],
    faqs: [
      { question: 'Can the chatbot handle complex conversations?', answer: 'We design chatbots to handle defined use cases well. For complex, open-ended conversations we recommend combining chatbot flows with AI agent capabilities.' },
    ],
    cta: { label: 'Discuss This Service', href: '/contact?service=business-chatbots' },
    seo: {
      title: 'Business Chatbot Development - Nexino Technologies Ltd',
      description: 'Intelligent chatbots for websites and platforms that handle enquiries, capture leads and support customers.',
    },
  },
  {
    id: 'hosting-maintenance',
    slug: 'hosting-maintenance',
    title: 'Hosting and Maintenance',
    shortTitle: 'Hosting & Maintenance',
    category: 'Cloud and Infrastructure',
    categorySlug: 'cloud-and-infrastructure',
    tagline: 'Reliable infrastructure and ongoing support for your digital products.',
    overview: 'We provide managed hosting and monthly maintenance services that keep your digital platforms running, updated and monitored.',
    heroDescription: 'A great website or application needs reliable infrastructure behind it. We handle the technical side so you can focus on your business.',
    problems: [
      { title: 'Downtime and instability', description: 'Unreliable hosting affects customer trust and business operations.' },
      { title: 'Outdated software', description: 'Unpatched dependencies create security vulnerabilities.' },
      { title: 'No monitoring', description: 'Issues go undetected until users report them.' },
    ],
    capabilities: [
      { title: 'Managed cloud hosting', description: 'Configured, monitored and maintained hosting environments.' },
      { title: 'SSL and security', description: 'Certificates, firewall and basic security hygiene.' },
      { title: 'Regular backups', description: 'Automated backups with recovery procedures.' },
      { title: 'Uptime monitoring', description: 'Alerts when services are unavailable.' },
      { title: 'Dependency updates', description: 'Scheduled updates to keep software current.' },
      { title: 'Performance reviews', description: 'Regular checks on speed and reliability.' },
    ],
    benefits: [
      { title: 'Peace of mind', description: 'Know that technical monitoring is handled.' },
      { title: 'Reduced risk', description: 'Regular updates and backups reduce exposure.' },
      { title: 'Consistent performance', description: 'Proactive maintenance prevents degradation.' },
    ],
    deliverySteps: [
      { step: 1, title: 'Audit', description: 'Review current hosting and identify gaps.' },
      { step: 2, title: 'Setup', description: 'Configure hosting, monitoring and backup systems.' },
      { step: 3, title: 'Handover', description: 'Document access, credentials and procedures.' },
      { step: 4, title: 'Monthly cycle', description: 'Regular updates, reviews and reporting.' },
    ],
    relatedServiceSlugs: ['cloud-infrastructure', 'system-integration', 'corporate-websites'],
    faqs: [
      { question: 'What does monthly maintenance include?', answer: 'It typically includes dependency updates, security patches, uptime monitoring, backups and a monthly summary report.' },
    ],
    cta: { label: 'Discuss This Service', href: '/contact?service=hosting-maintenance' },
    seo: {
      title: 'Hosting and Website Maintenance - Nexino Technologies Ltd',
      description: 'Managed hosting and monthly maintenance services to keep your digital platforms reliable, updated and monitored.',
    },
  },
  {
    id: 'data-analytics',
    slug: 'data-analytics',
    title: 'Data Analytics',
    shortTitle: 'Data Analytics',
    category: 'Data and Research',
    categorySlug: 'data-and-research',
    tagline: 'Turn raw information into decisions that move your organisation forward.',
    overview: 'We collect, clean, analyse and visualise data to help organisations understand their operations and make better decisions.',
    heroDescription: 'Data only creates value when it is structured, analysed and presented clearly. We help organisations go from raw information to actionable insight.',
    problems: [
      { title: 'Data scattered across systems', description: 'Information lives in spreadsheets, platforms and documents with no central view.' },
      { title: 'No clear insight', description: 'Data exists but nobody knows what it means or how to use it.' },
      { title: 'Slow reporting', description: 'Creating reports takes days of manual effort.' },
    ],
    capabilities: [
      { title: 'Data collection', description: 'Gather data from internal systems, external sources and surveys.' },
      { title: 'Data cleaning', description: 'Remove errors, inconsistencies and duplicates.' },
      { title: 'Exploratory analysis', description: 'Identify patterns, trends and anomalies.' },
      { title: 'Dashboards', description: 'Visual reports updated automatically.' },
      { title: 'Statistical analysis', description: 'Rigorous quantitative methods for deeper insight.' },
      { title: 'Data documentation', description: 'Clear descriptions of data sources, methods and findings.' },
    ],
    benefits: [
      { title: 'Faster decisions', description: 'Access insight in minutes rather than days.' },
      { title: 'Evidence base', description: 'Support decisions with data rather than assumption.' },
      { title: 'Operational clarity', description: 'Understand what is working and what needs attention.' },
    ],
    deliverySteps: [
      { step: 1, title: 'Data audit', description: 'Identify what data exists and assess its quality.' },
      { step: 2, title: 'Collection and cleaning', description: 'Gather and prepare data for analysis.' },
      { step: 3, title: 'Analysis', description: 'Apply appropriate methods to answer key questions.' },
      { step: 4, title: 'Visualisation', description: 'Present findings clearly for different audiences.' },
      { step: 5, title: 'Documentation', description: 'Deliver clear reports and methodology notes.' },
    ],
    relatedServiceSlugs: ['business-intelligence', 'technical-research', 'cloud-infrastructure'],
    faqs: [
      { question: 'What if our data is messy or incomplete?', answer: 'Most organisations have imperfect data. Data cleaning is a standard part of our process. We document what we find and work with what is available.' },
    ],
    cta: { label: 'Discuss This Service', href: '/contact?service=data-analytics' },
    seo: {
      title: 'Data Analytics Services - Nexino Technologies Ltd',
      description: 'Data collection, cleaning, analysis and visualisation services to help organisations make better, evidence-based decisions.',
    },
  },
  {
    id: 'embedded-systems',
    slug: 'embedded-systems',
    title: 'Embedded Systems',
    shortTitle: 'Embedded Systems',
    category: 'Engineering Systems',
    categorySlug: 'engineering-systems',
    tagline: 'Software that runs close to the hardware, doing exactly what it needs to.',
    overview: 'We develop embedded software for microcontrollers, sensors and connected devices used in industrial, commercial and research applications.',
    heroDescription: 'Embedded systems are the invisible intelligence inside modern equipment. We engineer reliable, efficient software for constrained hardware environments.',
    problems: [
      { title: 'Unreliable device behaviour', description: 'Embedded software crashes, resets or behaves inconsistently in the field.' },
      { title: 'Integration complexity', description: 'Connecting hardware to digital dashboards and cloud systems requires multiple expertise areas.' },
      { title: 'Long development cycles', description: 'Hardware-software integration takes longer than expected without structured process.' },
    ],
    capabilities: [
      { title: 'Microcontroller programming', description: 'Firmware for common embedded platforms.' },
      { title: 'Sensor integration', description: 'Read and process data from physical sensors.' },
      { title: 'Communication protocols', description: 'UART, I2C, SPI, MQTT and similar interfaces.' },
      { title: 'Low-power design', description: 'Optimised for battery-operated devices.' },
      { title: 'OTA updates', description: 'Update device firmware remotely.' },
      { title: 'Cloud connectivity', description: 'Send device data to backend systems.' },
    ],
    benefits: [
      { title: 'Reliability', description: 'Stable firmware that operates predictably in real conditions.' },
      { title: 'Integration', description: 'Devices that communicate with digital systems and dashboards.' },
      { title: 'Custom fit', description: 'Firmware written for your exact hardware and use case.' },
    ],
    deliverySteps: [
      { step: 1, title: 'Hardware review', description: 'Understand the target hardware and constraints.' },
      { step: 2, title: 'Architecture', description: 'Define the firmware structure and communication stack.' },
      { step: 3, title: 'Development', description: 'Write and test firmware in stages.' },
      { step: 4, title: 'Integration testing', description: 'Validate on real hardware in realistic conditions.' },
      { step: 5, title: 'Deployment', description: 'Flash devices and establish update procedures.' },
    ],
    relatedServiceSlugs: ['pcb-design', 'hardware-software-integration', 'intelligent-infrastructure'],
    faqs: [
      { question: 'What platforms do you work with?', answer: 'We work with common embedded platforms including Arduino, ESP32, STM32 and Raspberry Pi, as well as custom hardware where specifications are provided.' },
    ],
    cta: { label: 'Discuss This Service', href: '/contact?service=embedded-systems' },
    seo: {
      title: 'Embedded Systems Development - Nexino Technologies Ltd',
      description: 'Embedded software for microcontrollers, sensors and connected devices. Reliable firmware for industrial and commercial applications.',
    },
  },
];

const additionalServices: Service[] = [
  createService({
    id: 'mobile-applications',
    slug: 'mobile-applications',
    title: 'Mobile Applications',
    shortTitle: 'Mobile Apps',
    category: 'Digital Product Development',
    categorySlug: 'digital-product-development',
    tagline: 'Mobile experiences designed for daily use and real business value.',
    overview: 'We design and build mobile apps that help users complete tasks quickly, reliably and with a clear experience across devices.',
    heroDescription: 'Mobile applications should feel fast, simple and useful. We focus on the product flow, the technical foundation and the handoff to deployment.',
    relatedServiceSlugs: ['custom-web-applications', 'ui-ux-design', 'hosting-maintenance'],
    seo: {
      title: 'Mobile Application Development - Nexino Technologies Ltd',
      description: 'Mobile app design and development for customer-facing and internal workflows.',
    },
  }),
  createService({
    id: 'ecommerce-platforms',
    slug: 'ecommerce-platforms',
    title: 'E-Commerce Platforms',
    shortTitle: 'E-Commerce',
    category: 'Digital Product Development',
    categorySlug: 'digital-product-development',
    tagline: 'Sales platforms built around your products, customers and fulfilment workflow.',
    overview: 'We build e-commerce platforms that support browsing, checkout, payment, order management and day-to-day store operations.',
    heroDescription: 'E-commerce systems need to feel trustworthy and quick. We focus on clear product journeys, maintainable admin tools and practical integrations.',
    relatedServiceSlugs: ['custom-web-applications', 'hosting-maintenance', 'ui-ux-design'],
    seo: {
      title: 'E-Commerce Platform Development - Nexino Technologies Ltd',
      description: 'E-commerce platforms built for product sales, order handling and business growth.',
    },
  }),
  createService({
    id: 'saas-development',
    slug: 'saas-development',
    title: 'SaaS Development',
    shortTitle: 'SaaS',
    category: 'Digital Product Development',
    categorySlug: 'digital-product-development',
    tagline: 'Subscription products with a solid foundation for growth.',
    overview: 'We help teams plan and build SaaS products with account management, billing workflows, feature controls and scalable architecture.',
    heroDescription: 'SaaS products succeed when the product logic, architecture and customer experience work together. We design for long-term maintainability.',
    relatedServiceSlugs: ['custom-web-applications', 'hosting-maintenance', 'data-analytics'],
    seo: {
      title: 'SaaS Product Development - Nexino Technologies Ltd',
      description: 'Plan and build SaaS products with scalable architecture and reliable delivery.',
    },
  }),
  createService({
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Product Design',
    shortTitle: 'UI/UX Design',
    category: 'Digital Product Development',
    categorySlug: 'digital-product-development',
    tagline: 'Interfaces shaped to feel clear, usable and easy to maintain.',
    overview: 'We design product interfaces and user flows that reduce friction, communicate clearly and support implementation.',
    heroDescription: 'Good design is not decoration. We use interface design to make products easier to use and easier to build correctly.',
    relatedServiceSlugs: ['custom-web-applications', 'mobile-applications', 'corporate-websites'],
    seo: {
      title: 'UI/UX Design Services - Nexino Technologies Ltd',
      description: 'Product interface and user experience design for websites, apps and platforms.',
    },
  }),
  createService({
    id: 'whatsapp-automation',
    slug: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    shortTitle: 'WhatsApp Automation',
    category: 'AI and Automation',
    categorySlug: 'ai-and-automation',
    tagline: 'Automated messaging flows for faster customer communication.',
    overview: 'We build WhatsApp automation systems that send updates, capture enquiries, guide users and route conversations efficiently.',
    heroDescription: 'Messaging automation works best when it is practical and controlled. We focus on real workflows, handoff logic and reliable integrations.',
    relatedServiceSlugs: ['business-chatbots', 'ai-agents', 'customer-support-automation'],
    seo: {
      title: 'WhatsApp Automation Services - Nexino Technologies Ltd',
      description: 'Automate WhatsApp workflows for customer communication, support and follow-up.',
    },
  }),
  createService({
    id: 'workflow-automation',
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    shortTitle: 'Workflow Automation',
    category: 'AI and Automation',
    categorySlug: 'ai-and-automation',
    tagline: 'Repeatable business processes turned into dependable systems.',
    overview: 'We automate structured business workflows so teams can spend less time on repetitive handoffs and more time on meaningful work.',
    heroDescription: 'Automation should remove friction, not create it. We map the process carefully before we connect systems together.',
    relatedServiceSlugs: ['ai-agents', 'business-chatbots', 'hosting-maintenance'],
    seo: {
      title: 'Workflow Automation Services - Nexino Technologies Ltd',
      description: 'Automate repeatable business processes with clear, dependable workflows.',
    },
  }),
  createService({
    id: 'customer-support-automation',
    slug: 'customer-support-automation',
    title: 'Customer Support Automation',
    shortTitle: 'Support Automation',
    category: 'AI and Automation',
    categorySlug: 'ai-and-automation',
    tagline: 'Support operations that respond faster and stay consistent.',
    overview: 'We build support automation systems that handle first-line requests, classify tickets and help teams respond more efficiently.',
    heroDescription: 'Support automation should feel helpful and calm. We design systems that guide simple cases and escalate complex ones cleanly.',
    relatedServiceSlugs: ['business-chatbots', 'ai-agents', 'whatsapp-automation'],
    seo: {
      title: 'Customer Support Automation - Nexino Technologies Ltd',
      description: 'Automation for support teams that need faster response times and better consistency.',
    },
  }),
  createService({
    id: 'cloud-infrastructure',
    slug: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    shortTitle: 'Cloud Infrastructure',
    category: 'Cloud and Infrastructure',
    categorySlug: 'cloud-and-infrastructure',
    tagline: 'A stable technical base for reliable digital products.',
    overview: 'We plan and configure cloud environments that support deployment, scaling, security and ongoing maintenance.',
    heroDescription: 'Good infrastructure is quiet, reliable and maintainable. We focus on the foundations that let your products keep running well.',
    relatedServiceSlugs: ['hosting-maintenance', 'system-integration', 'custom-web-applications'],
    seo: {
      title: 'Cloud Infrastructure Services - Nexino Technologies Ltd',
      description: 'Cloud setup and infrastructure support for dependable digital platforms.',
    },
  }),
  createService({
    id: 'system-integration',
    slug: 'system-integration',
    title: 'System Integration',
    shortTitle: 'System Integration',
    category: 'Cloud and Infrastructure',
    categorySlug: 'cloud-and-infrastructure',
    tagline: 'Connected systems that exchange data and work as one.',
    overview: 'We connect existing tools, internal systems and third-party services so information moves cleanly across your organisation.',
    heroDescription: 'Integration is often the difference between scattered tools and a usable operating system. We focus on practical connections that hold up in production.',
    relatedServiceSlugs: ['cloud-infrastructure', 'hosting-maintenance', 'custom-web-applications'],
    seo: {
      title: 'System Integration Services - Nexino Technologies Ltd',
      description: 'Connect software, data sources and operational tools into a cohesive system.',
    },
  }),
  createService({
    id: 'business-intelligence',
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    shortTitle: 'Business Intelligence',
    category: 'Data and Research',
    categorySlug: 'data-and-research',
    tagline: 'Decision-making tools that turn data into readable insight.',
    overview: 'We build business intelligence dashboards and reporting systems that help teams understand performance and patterns quickly.',
    heroDescription: 'Business intelligence should be easy to read and easy to trust. We structure data so your team can actually use it.',
    relatedServiceSlugs: ['data-analytics', 'technical-research', 'cloud-infrastructure'],
    seo: {
      title: 'Business Intelligence Services - Nexino Technologies Ltd',
      description: 'Dashboards and reporting systems that make data easier to understand and act on.',
    },
  }),
  createService({
    id: 'technical-research',
    slug: 'technical-research',
    title: 'Technical Research',
    shortTitle: 'Technical Research',
    category: 'Data and Research',
    categorySlug: 'data-and-research',
    tagline: 'Evidence-led investigation before you invest in a solution.',
    overview: 'We research tools, architectures and product options to help reduce uncertainty before a build or procurement decision.',
    heroDescription: 'Research is valuable when it answers a practical question. We document findings clearly so decisions are easier to make.',
    relatedServiceSlugs: ['data-analytics', 'business-intelligence', 'custom-web-applications'],
    seo: {
      title: 'Technical Research Services - Nexino Technologies Ltd',
      description: 'Research and evaluation support for technology decisions and prototyping.',
    },
  }),
  createService({
    id: 'pcb-design',
    slug: 'pcb-design',
    title: 'Custom PCB Design',
    shortTitle: 'PCB Design',
    category: 'Engineering Systems',
    categorySlug: 'engineering-systems',
    tagline: 'Electronics design for connected devices and hardware products.',
    overview: 'We support board-level design work for prototypes and products that require reliable hardware foundations.',
    heroDescription: 'PCB work sits close to the physical product. We approach it with the same focus on clarity, reliability and real-world constraints.',
    relatedServiceSlugs: ['embedded-systems', 'hardware-software-integration', 'intelligent-infrastructure'],
    seo: {
      title: 'Custom PCB Design - Nexino Technologies Ltd',
      description: 'PCB design support for prototypes, sensors and connected hardware products.',
    },
  }),
  createService({
    id: 'hardware-software-integration',
    slug: 'hardware-software-integration',
    title: 'Hardware and Software Integration',
    shortTitle: 'HW/SW Integration',
    category: 'Engineering Systems',
    categorySlug: 'engineering-systems',
    tagline: 'Bring devices, software and data flow together in one system.',
    overview: 'We connect firmware, devices, applications and data pipelines so hardware behaves as part of a wider system.',
    heroDescription: 'Integration work is about making the pieces fit reliably. We plan the communication between hardware and software carefully.',
    relatedServiceSlugs: ['embedded-systems', 'pcb-design', 'intelligent-infrastructure'],
    seo: {
      title: 'Hardware and Software Integration - Nexino Technologies Ltd',
      description: 'Connect hardware products, firmware and software systems into one working solution.',
    },
  }),
  createService({
    id: 'intelligent-infrastructure',
    slug: 'intelligent-infrastructure',
    title: 'Intelligent Infrastructure',
    shortTitle: 'Intelligent Infrastructure',
    category: 'Engineering Systems',
    categorySlug: 'engineering-systems',
    tagline: 'Infrastructure systems with embedded monitoring and connected intelligence.',
    overview: 'We design infrastructure-oriented systems that combine software, data, sensors and reliable connectivity.',
    heroDescription: 'Intelligent infrastructure needs durability and visibility. We focus on systems that can be monitored, maintained and extended.',
    relatedServiceSlugs: ['embedded-systems', 'cloud-infrastructure', 'system-integration'],
    seo: {
      title: 'Intelligent Infrastructure Services - Nexino Technologies Ltd',
      description: 'Engineering systems for connected infrastructure, monitoring and data flow.',
    },
  }),
];

export const allServices = [...services, ...additionalServices];

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getServicesByCategory(categorySlug: string): Service[] {
  return allServices.filter((s) => s.categorySlug === categorySlug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return allServices.filter((s) => slugs.includes(s.slug));
}

