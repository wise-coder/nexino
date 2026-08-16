import codeTopView from '../../newimages/vecteezy_young-programmers-writing-programming-code-top-view_12509539.jpg';
import softwareDeveloperDesk from '../../newimages/vecteezy_software-develper-working-on-laptop-at-home-office_6696949.jpg';
import desktopDevices from '../../newimages/vecteezy_desktop-devices-computer-tablet-laptop-and-phone-website_4277831.jpg';
import cloudComputing from '../../newimages/vecteezy_cloud-computing-technology-data-information-on-cloud-to_6532519.jpg';
import robotAiHand from '../../newimages/vecteezy_robot-ai-with-hand-robot-pointing-ai-technology-digital_23331275.jpg';
import industrialNetwork from '../../newimages/vecteezy_hand-of-robotics-connecting-to-industrial-network-connection_7019207.jpg';
import monitorDesk from '../../newimages/vecteezy_a-computer-monitor-on-a-desk-with-a-keyboard-and-mouse_71479189.jpeg';
import phoneBusiness from '../../newimages/vecteezy_modern-phone-business-smartphone-technology-and-modern_6684101.jpg';
import laptopCode from '../../newimages/vecteezy_a-laptop-with-code-on-the-screen_71479084.jpeg';

export const homeVisuals = {
  heroPrimary: '/images/home/software-collaboration-team.jpg',
  heroSecondary: '/images/home/data-center-server-rack.jpg',
  intro: '/images/home/industrial-tablet-engineer.jpg',
};

export const aboutVisuals = {
  hero: '/images/about/about-hero-team.jpg',
  office: '/images/about/about-office-building.jpg',
};

export const contactVisuals = {
  hero: '/images/contact/contact-hero.jpg',
};

export const servicesOverviewVisuals = [
  '/images/services/corporate-websites.jpg',
  '/images/services/ai-agents.png',
  '/images/services/data-analytics.jpg',
];

export const industryOverviewVisuals = [
  '/images/industries/business-technologies.jpg',
  '/images/industries/intelligent-infrastructure.jpg',
  '/images/industries/health-technologies.jpg',
];

export const workOverviewVisuals = [
  '/images/work/support-assistant.jpg',
  '/images/work/operations-dashboard.jpg',
  '/images/work/connected-monitoring.jpg',
];

export const newVisuals = {
  homeHero: codeTopView,
  homeIntro: softwareDeveloperDesk,
  servicesPrimary: desktopDevices,
  servicesSecondary: cloudComputing,
  industriesPrimary: industrialNetwork,
  industriesSecondary: monitorDesk,
  workPrimary: laptopCode,
  workSecondary: phoneBusiness,
  aiHero: robotAiHand,
  contactHero: phoneBusiness,
};

const serviceImages: Record<string, string> = {
  'corporate-websites': '/images/services/corporate-websites.jpg',
  'custom-web-applications': '/images/services/custom-web-applications.jpg',
  'ai-agents': '/images/services/ai-agents.png',
  'business-chatbots': '/images/services/business-chatbots.jpg',
  'hosting-maintenance': '/images/services/hosting-infrastructure.jpg',
  'data-analytics': '/images/services/data-analytics.jpg',
  'embedded-systems': '/images/services/embedded-systems.jpg',
  'mobile-applications': '/images/services/mobile-applications.jpg',
  'ecommerce-platforms': '/images/services/ecommerce-platforms.jpg',
  'saas-development': '/images/services/saas-development.jpg',
  'ui-ux-design': '/images/services/ui-ux-design.jpg',
  'whatsapp-automation': '/images/services/whatsapp-automation.jpg',
  'workflow-automation': '/images/services/workflow-automation.jpg',
  'customer-support-automation': '/images/services/customer-support-automation.jpg',
  'cloud-infrastructure': '/images/services/cloud-infrastructure.jpg',
  'system-integration': '/images/services/system-integration.jpg',
  'business-intelligence': '/images/services/business-intelligence.jpg',
  'technical-research': '/images/services/technical-research.jpg',
  'pcb-design': '/images/services/pcb-design.jpg',
  'hardware-software-integration': '/images/services/hardware-software-integration.jpg',
  'intelligent-infrastructure': '/images/services/intelligent-infrastructure.jpg',
};

const industryImages: Record<string, string> = {
  'business-technologies': '/images/industries/business-technologies.jpg',
  'mining-technologies': '/images/industries/mining-technologies.jpg',
  'construction-technologies': '/images/industries/construction-technologies.jpg',
  'health-technologies': '/images/industries/health-technologies.jpg',
  'intelligent-infrastructure': '/images/industries/intelligent-infrastructure.jpg',
};

const projectImages: Record<string, string> = {
  'intelligent-support-assistant': '/images/work/support-assistant.jpg',
  'business-operations-dashboard': '/images/work/operations-dashboard.jpg',
  'connected-monitoring-system': '/images/work/connected-monitoring.jpg',
};

export function getServiceImage(slug: string) {
  return serviceImages[slug] ?? '/images/home/data-center-server-rack.jpg';
}

export function getIndustryImage(slug: string) {
  return industryImages[slug] ?? '/images/industries/business-technologies.jpg';
}

export function getProjectImage(slug: string) {
  return projectImages[slug] ?? '/images/work/operations-dashboard.jpg';
}
