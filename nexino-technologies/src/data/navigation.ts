import type { NavItem, MegaMenuServiceColumn, MegaMenuIndustryItem } from '@/types/navigation';

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Company', href: '/about' },
  { label: 'Services', href: '/services', megaMenu: 'services' },
  { label: 'Industries', href: '/industries', megaMenu: 'industries' },
  { label: 'Our Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export const servicesMegaMenu: MegaMenuServiceColumn[] = [
  {
    heading: 'Digital Product Development',
    items: [
      { label: 'Corporate Websites', href: '/services/corporate-websites' },
      { label: 'Custom Web Applications', href: '/services/custom-web-applications' },
      { label: 'Mobile Applications', href: '/services/mobile-applications' },
      { label: 'E-Commerce Platforms', href: '/services/ecommerce-platforms' },
      { label: 'SaaS Development', href: '/services/saas-development' },
      { label: 'UI/UX Product Design', href: '/services/ui-ux-design' },
    ],
  },
  {
    heading: 'AI and Automation',
    items: [
      { label: 'AI Agents', href: '/services/ai-agents' },
      { label: 'Business Chatbots', href: '/services/business-chatbots' },
      { label: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
      { label: 'Workflow Automation', href: '/services/workflow-automation' },
      { label: 'Customer Support Automation', href: '/services/customer-support-automation' },
    ],
  },
  {
    heading: 'Cloud and Data',
    items: [
      { label: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
      { label: 'Hosting and Maintenance', href: '/services/hosting-maintenance' },
      { label: 'System Integration', href: '/services/system-integration' },
      { label: 'Data Analytics', href: '/services/data-analytics' },
      { label: 'Business Intelligence', href: '/services/business-intelligence' },
      { label: 'Technical Research', href: '/services/technical-research' },
    ],
  },
  {
    heading: 'Engineering Systems',
    items: [
      { label: 'Embedded Systems', href: '/services/embedded-systems' },
      { label: 'Custom PCB Design', href: '/services/pcb-design' },
      { label: 'Hardware and Software Integration', href: '/services/hardware-software-integration' },
      { label: 'Intelligent Infrastructure', href: '/services/intelligent-infrastructure' },
      { label: 'Industry Technology Solutions', href: '/services/industry-technology-solutions' },
    ],
  },
];

export const industriesMegaMenu: MegaMenuIndustryItem[] = [
  {
    label: 'Business Technologies',
    href: '/industries/business-technologies',
    description: 'Digital tools for operations, teams and customers',
  },
  {
    label: 'Mining Technologies',
    href: '/industries/mining-technologies',
    description: 'Monitoring, data and safety systems for mining operations',
  },
  {
    label: 'Construction Technologies',
    href: '/industries/construction-technologies',
    description: 'Progress tracking, site coordination and project reporting',
  },
  {
    label: 'Health Technologies',
    href: '/industries/health-technologies',
    description: 'Secure platforms for appointments, operations and patient communication',
  },
  {
    label: 'Intelligent Infrastructure',
    href: '/industries/intelligent-infrastructure',
    description: 'Connected sensors, monitoring and automated reporting',
  },
];
