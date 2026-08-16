export type ImageAsset = {
  src: string;
  alt: string;
};

export const pageHeroImages = {
  home: {
    src: '/images/home/software-collaboration-team.jpg',
    alt: 'Technology team collaborating around laptops in a modern workspace',
  },
  about: {
    src: '/images/about/about-hero-team.jpg',
    alt: 'Professional team in a modern office discussing a technology project',
  },
  services: {
    src: '/images/services/business-intelligence.jpg',
    alt: 'Business intelligence dashboard visual with charts and metrics',
  },
  industries: {
    src: '/images/home/industrial-tablet-engineer.jpg',
    alt: 'Engineer reviewing a digital system on an industrial tablet',
  },
  work: {
    src: '/images/home/ai-technology-icons.png',
    alt: 'Abstract AI and technology icon cluster with glowing interface details',
  },
  contact: {
    src: '/images/contact/contact-hero.jpg',
    alt: 'Professional consultation scene with a person reviewing project notes',
  },
} satisfies Record<string, ImageAsset>;

export const serviceImages = {
  'corporate-websites': {
    src: '/images/services/corporate-websites.jpg',
    alt: 'Responsive corporate website displayed on desktop and mobile devices',
  },
  'custom-web-applications': {
    src: '/images/services/custom-web-applications.jpg',
    alt: 'Custom web application interface on a laptop screen',
  },
  'ai-agents': {
    src: '/images/services/ai-agents.png',
    alt: 'Artificial intelligence automation illustration with glowing interface',
  },
  'business-chatbots': {
    src: '/images/services/business-chatbots.jpg',
    alt: 'Smartphone interface showing conversational messaging automation',
  },
  'hosting-maintenance': {
    src: '/images/services/hosting-infrastructure.jpg',
    alt: 'Managed hosting and infrastructure visual with server connectivity',
  },
  'data-analytics': {
    src: '/images/services/data-analytics.jpg',
    alt: 'Data analytics visual with dashboards and analysis tools',
  },
  'embedded-systems': {
    src: '/images/services/embedded-systems.jpg',
    alt: 'Embedded systems and connected hardware technology visual',
  },
  'mobile-applications': {
    src: '/images/services/mobile-applications.jpg',
    alt: 'Mobile application interface on a modern phone screen',
  },
  'ecommerce-platforms': {
    src: '/images/services/ecommerce-platforms.jpg',
    alt: 'E-commerce platform interface displayed across multiple devices',
  },
  'saas-development': {
    src: '/images/services/saas-development.jpg',
    alt: 'SaaS product development visual on a modern workspace screen',
  },
  'ui-ux-design': {
    src: '/images/services/ui-ux-design.jpg',
    alt: 'Product interface design and wireframing on a creative desk',
  },
  'whatsapp-automation': {
    src: '/images/services/whatsapp-automation.jpg',
    alt: 'Messaging automation and communication workflow on a phone',
  },
  'workflow-automation': {
    src: '/images/services/workflow-automation.jpg',
    alt: 'Workflow automation interface with connected process steps',
  },
  'customer-support-automation': {
    src: '/images/services/customer-support-automation.jpg',
    alt: 'Customer support automation dashboard and messaging interface',
  },
  'cloud-infrastructure': {
    src: '/images/services/cloud-infrastructure.jpg',
    alt: 'Cloud infrastructure visual with network connections and servers',
  },
  'system-integration': {
    src: '/images/services/system-integration.jpg',
    alt: 'System integration visual with connected software components',
  },
  'business-intelligence': {
    src: '/images/services/business-intelligence.jpg',
    alt: 'Business intelligence dashboard visual with charts and metrics',
  },
  'technical-research': {
    src: '/images/services/technical-research.jpg',
    alt: 'Technical research and analysis workspace with documents and devices',
  },
  'pcb-design': {
    src: '/images/services/pcb-design.jpg',
    alt: 'PCB design and electronics layout visual',
  },
  'hardware-software-integration': {
    src: '/images/services/hardware-software-integration.jpg',
    alt: 'Hardware and software integration visual with connected devices',
  },
  'intelligent-infrastructure': {
    src: '/images/services/intelligent-infrastructure.jpg',
    alt: 'Intelligent infrastructure visual with sensor and cloud connectivity',
  },
} satisfies Record<string, ImageAsset>;

export const industryImages = {
  'business-technologies': {
    src: '/images/industries/business-technologies.jpg',
    alt: 'Business technology workspace with digital collaboration tools',
  },
  'mining-technologies': {
    src: '/images/industries/mining-technologies.jpg',
    alt: 'Mining technology systems for monitoring and operational control',
  },
  'construction-technologies': {
    src: '/images/industries/construction-technologies.jpg',
    alt: 'Construction technology planning and coordination visual',
  },
  'health-technologies': {
    src: '/images/industries/health-technologies.jpg',
    alt: 'Health technology and secure digital communication visual',
  },
  'intelligent-infrastructure': {
    src: '/images/industries/intelligent-infrastructure.jpg',
    alt: 'Intelligent infrastructure and connected systems visual',
  },
} satisfies Record<string, ImageAsset>;

export const projectImages = {
  'intelligent-support-assistant': {
    src: '/images/work/support-assistant.jpg',
    alt: 'Support assistant interface shown on a mobile device',
  },
  'business-operations-dashboard': {
    src: '/images/work/operations-dashboard.jpg',
    alt: 'Business operations dashboard displayed on a widescreen monitor',
  },
  'connected-monitoring-system': {
    src: '/images/work/connected-monitoring.jpg',
    alt: 'Connected monitoring visual with sensors and data flow',
  },
} satisfies Record<string, ImageAsset>;
