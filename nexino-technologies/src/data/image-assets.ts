export type ImageAsset = {
  src: string;
  alt: string;
};

export const pageHeroImages = {
  home: {
    src: '/images/about/about-hero-team.jpg',
    alt: 'Technology team collaborating around laptops in a modern office',
  },
  about: {
    src: '/images/about/about-hero-team.jpg',
    alt: 'Technology team collaborating around laptops in a modern office',
  },
  services: {
    src: '/images/services/corporate-websites.jpg',
    alt: 'Team planning a digital product and website strategy around a laptop',
  },
  industries: {
    src: '/images/industries/intelligent-infrastructure.jpg',
    alt: 'Connected infrastructure and smart technology systems in a city environment',
  },
  work: {
    src: '/images/work/operations-dashboard.jpg',
    alt: 'Analytics dashboard displayed on a laptop in a working session',
  },
  contact: {
    src: '/images/contact/contact-hero.jpg',
    alt: 'Support team members working on laptops in a collaborative office',
  },
} satisfies Record<string, ImageAsset>;

export const serviceImages = {
  'corporate-websites': {
    src: '/images/services/corporate-websites.jpg',
    alt: 'Team planning a corporate website and digital strategy around a laptop',
  },
  'custom-web-applications': {
    src: '/images/services/custom-web-applications.jpg',
    alt: 'Developer typing code on a laptop in a modern office setting',
  },
  'ai-agents': {
    src: '/images/services/ai-agents.png',
    alt: 'Abstract artificial intelligence illustration with glowing digital elements',
  },
  'business-chatbots': {
    src: '/images/services/business-chatbots.jpg',
    alt: 'Smartphone chat interface used for digital support and automation',
  },
  'hosting-maintenance': {
    src: '/images/services/hosting-infrastructure.jpg',
    alt: 'Modern infrastructure and office building representing reliable hosting',
  },
  'data-analytics': {
    src: '/images/services/data-analytics.jpg',
    alt: 'Analytics dashboard displayed on a tablet for data review',
  },
  'embedded-systems': {
    src: '/images/services/embedded-systems.jpg',
    alt: 'Microchip and embedded electronics representing connected hardware',
  },
  'mobile-applications': {
    src: '/images/services/mobile-applications.jpg',
    alt: 'A smartphone displaying a mobile app interface on screen',
  },
  'ecommerce-platforms': {
    src: '/images/services/ecommerce-platforms.jpg',
    alt: 'An online shopping and checkout interface on a laptop screen',
  },
  'saas-development': {
    src: '/images/services/saas-development.jpg',
    alt: 'A laptop showing a SaaS dashboard with charts and product metrics',
  },
  'ui-ux-design': {
    src: '/images/services/ui-ux-design.jpg',
    alt: 'Wireframes and interface sketches for a product design workflow',
  },
  'whatsapp-automation': {
    src: '/images/services/whatsapp-automation.jpg',
    alt: 'A smartphone used for messaging automation and customer communication',
  },
  'workflow-automation': {
    src: '/images/services/workflow-automation.jpg',
    alt: 'People reviewing automated workflow and analytics dashboards',
  },
  'customer-support-automation': {
    src: '/images/services/customer-support-automation.jpg',
    alt: 'Customer support agents in a call center using headsets and computers',
  },
  'cloud-infrastructure': {
    src: '/images/services/cloud-infrastructure.jpg',
    alt: 'Blue-lit server racks in a modern data center',
  },
  'system-integration': {
    src: '/images/services/system-integration.jpg',
    alt: 'Network and server infrastructure connected with data cables',
  },
  'business-intelligence': {
    src: '/images/services/business-intelligence.jpg',
    alt: 'Business intelligence dashboard with charts and data insights',
  },
  'technical-research': {
    src: '/images/services/technical-research.jpg',
    alt: 'A researcher examining technical information in a lab setting',
  },
  'pcb-design': {
    src: '/images/services/pcb-design.jpg',
    alt: 'A printed circuit board with chips and electronic components',
  },
  'hardware-software-integration': {
    src: '/images/services/hardware-software-integration.jpg',
    alt: 'Electronic hardware components and connectors on a circuit board',
  },
  'intelligent-infrastructure': {
    src: '/images/services/intelligent-infrastructure.jpg',
    alt: 'Connected infrastructure hardware and cabling in a technical setting',
  },
} satisfies Record<string, ImageAsset>;

export const industryImages = {
  'business-technologies': {
    src: '/images/industries/business-technologies.jpg',
    alt: 'Business team collaborating around laptops in an office setting',
  },
  'mining-technologies': {
    src: '/images/industries/mining-technologies.jpg',
    alt: 'Aerial view of an active mining site and earth-moving equipment',
  },
  'construction-technologies': {
    src: '/images/industries/construction-technologies.jpg',
    alt: 'Construction professional reviewing site information on a tablet',
  },
  'health-technologies': {
    src: '/images/industries/health-technologies.jpg',
    alt: 'Healthcare professionals reviewing information on a computer screen',
  },
  'intelligent-infrastructure': {
    src: '/images/industries/intelligent-infrastructure.jpg',
    alt: 'Smart infrastructure and connected systems in a modern environment',
  },
} satisfies Record<string, ImageAsset>;

export const projectImages = {
  'intelligent-support-assistant': {
    src: '/images/work/support-assistant.jpg',
    alt: 'Smartphone chat interface representing an intelligent support assistant',
  },
  'business-operations-dashboard': {
    src: '/images/work/operations-dashboard.jpg',
    alt: 'Analytics dashboard interface shown on a laptop screen',
  },
  'connected-monitoring-system': {
    src: '/images/work/connected-monitoring.jpg',
    alt: 'Connected smart monitoring and infrastructure systems',
  },
} satisfies Record<string, ImageAsset>;
