import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'intelligent-support-assistant',
    slug: 'intelligent-support-assistant',
    title: 'Intelligent Customer Support Assistant',
    type: 'Prototype',
    category: 'AI and Automation',
    status: 'Research Phase',
    tagline: 'An AI-powered assistant that handles customer enquiries and routes complex queries.',
    overview: 'This prototype explores how AI agents can reduce the volume of enquiries that require human attention, while maintaining a high quality of response.',
    challenge: 'Small and medium organisations often lack dedicated support teams but still receive a high volume of repetitive customer enquiries. Responding consistently and promptly is resource-intensive.',
    proposedSolution: 'An AI assistant trained on organisation-specific information that can answer common questions, guide users through standard processes and escalate to humans when needed.',
    features: [
      { title: 'Intent recognition', description: 'Classifies incoming messages into defined categories.' },
      { title: 'Knowledge base integration', description: 'Draws answers from a structured information base.' },
      { title: 'Escalation logic', description: 'Identifies when a query requires human review and routes it appropriately.' },
      { title: 'Conversation logging', description: 'Records all interactions for review and improvement.' },
      { title: 'Admin interface', description: 'Simple interface for updating the knowledge base.' },
    ],
    processSteps: [
      { step: 1, title: 'Research', description: 'Reviewed existing chatbot architectures and intent classification approaches.' },
      { step: 2, title: 'Prototype design', description: 'Defined the conversation flow and escalation rules.' },
      { step: 3, title: 'Build', description: 'Developed the prototype using a combination of rule-based and AI-assisted classification.' },
      { step: 4, title: 'Testing', description: 'Evaluated performance across a set of representative queries.' },
    ],
    technologies: [
      { name: 'Python', category: 'Language' },
      { name: 'NestJS', category: 'Backend' },
      { name: 'Next.js', category: 'Frontend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Docker', category: 'Infrastructure' },
    ],
    screenshots: [],
    currentStatus: 'This is an internal prototype at the research and development stage. It is not currently deployed for any client.',
    disclaimer: 'This item is presented as a prototype and does not represent a completed client engagement.',
    relatedProjectSlugs: ['business-operations-dashboard'],
    seo: {
      title: 'Intelligent Customer Support Assistant - Nexino Technologies Ltd',
      description: 'An AI prototype for handling customer enquiries automatically with escalation to human support.',
    },
    accentColor: '#0094E8',
  },
  {
    id: 'business-operations-dashboard',
    slug: 'business-operations-dashboard',
    title: 'Business Operations Dashboard',
    type: 'Concept',
    category: 'Digital Products',
    status: 'Concept Stage',
    tagline: 'A real-time operational dashboard for business monitoring and reporting.',
    overview: 'A concept for a dashboard platform that brings together operational data from multiple sources into a single management view.',
    challenge: 'Business managers often rely on manually compiled reports from multiple systems, creating a delayed and incomplete view of business performance.',
    proposedSolution: 'A centralised dashboard that pulls data from key business systems, displays real-time metrics and generates scheduled reports automatically.',
    features: [
      { title: 'Multi-source data aggregation', description: 'Connects to multiple internal systems via API.' },
      { title: 'Configurable metrics', description: 'Managers can choose which metrics are visible.' },
      { title: 'Automated reporting', description: 'Scheduled PDF and email reports.' },
      { title: 'Role-based access', description: 'Different views for different levels of the organisation.' },
      { title: 'Alert system', description: 'Notifications when metrics fall outside defined ranges.' },
    ],
    processSteps: [
      { step: 1, title: 'Concept definition', description: 'Identified the core reporting gaps this dashboard would address.' },
      { step: 2, title: 'Design', description: 'Created wireframes for the main views and metric configurations.' },
      { step: 3, title: 'Technical planning', description: 'Defined the data integration architecture.' },
    ],
    technologies: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'NestJS', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'AWS', category: 'Infrastructure' },
    ],
    screenshots: [],
    currentStatus: 'This is a design concept. Active development has not begun.',
    disclaimer: 'This item is presented as a concept and does not represent a completed client engagement.',
    relatedProjectSlugs: ['intelligent-support-assistant', 'connected-monitoring-system'],
    seo: {
      title: 'Business Operations Dashboard - Nexino Technologies Ltd',
      description: 'A concept for a real-time business operations dashboard with multi-source data aggregation and automated reporting.',
    },
    accentColor: '#12C878',
  },
  {
    id: 'connected-monitoring-system',
    slug: 'connected-monitoring-system',
    title: 'Connected Monitoring System',
    type: 'Research Project',
    category: 'Engineering Systems',
    status: 'Research Phase',
    tagline: 'A research prototype for IoT-based environmental monitoring.',
    overview: 'A research prototype that explores how low-cost sensors can be connected to a cloud backend to provide continuous environmental monitoring for facilities.',
    challenge: 'Many facilities have no continuous monitoring of environmental conditions such as temperature, humidity and power consumption. Manual checks miss intermittent events.',
    proposedSolution: 'A network of connected sensors that transmit readings to a cloud system, trigger alerts on threshold breaches and generate historical trend reports.',
    features: [
      { title: 'Sensor firmware', description: 'Firmware for low-cost environmental sensors.' },
      { title: 'Data gateway', description: 'Edge device that aggregates and forwards sensor data.' },
      { title: 'Cloud backend', description: 'API and database for storing and querying sensor data.' },
      { title: 'Alert system', description: 'Threshold-based alert generation and notification.' },
      { title: 'Monitoring dashboard', description: 'Real-time display of current and historical readings.' },
    ],
    processSteps: [
      { step: 1, title: 'Research', description: 'Evaluated sensor hardware options and communication protocols.' },
      { step: 2, title: 'Hardware selection', description: 'Selected sensors and gateway hardware for the prototype.' },
      { step: 3, title: 'Firmware development', description: 'Wrote sensor firmware and gateway software.' },
      { step: 4, title: 'Backend and dashboard', description: 'Built the cloud API and monitoring dashboard.' },
      { step: 5, title: 'Lab testing', description: 'Validated the full system in a controlled environment.' },
    ],
    technologies: [
      { name: 'Python', category: 'Language' },
      { name: 'ESP32', category: 'Hardware' },
      { name: 'MQTT', category: 'Protocol' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'React', category: 'Frontend' },
    ],
    screenshots: [],
    currentStatus: 'This prototype has been tested in a laboratory environment. It is not currently deployed in any production facility.',
    disclaimer: 'This item is presented as a research prototype and does not represent a completed client engagement.',
    relatedProjectSlugs: ['business-operations-dashboard'],
    seo: {
      title: 'Connected Monitoring System - Nexino Technologies Ltd',
      description: 'A research prototype for IoT environmental monitoring with cloud connectivity and real-time dashboards.',
    },
    accentColor: '#0094E8',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return projects.filter((p) => slugs.includes(p.slug));
}

