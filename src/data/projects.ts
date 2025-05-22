import { Project, TechStack } from '@/types';

// Tech Stack Data
export const techStacks: Record<string, TechStack> = {
  react: {
    id: 'react',
    name: 'React',
    icon: '⚛️',
    color: '#61DAFB',
    category: 'frontend'
  },
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: '📘',
    color: '#3178C6',
    category: 'frontend'
  },
  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    icon: '🟢',
    color: '#339933',
    category: 'backend'
  },
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    icon: '▲',
    color: '#000000',
    category: 'frontend'
  },
  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    icon: '🍃',
    color: '#47A248',
    category: 'database'
  },
  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: '🐘',
    color: '#336791',
    category: 'database'
  },
  aws: {
    id: 'aws',
    name: 'AWS',
    icon: '☁️',
    color: '#FF9900',
    category: 'devops'
  },
  docker: {
    id: 'docker',
    name: 'Docker',
    icon: '🐳',
    color: '#2496ED',
    category: 'devops'
  },
  python: {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3776AB',
    category: 'backend'
  },
  reactnative: {
    id: 'reactnative',
    name: 'React Native',
    icon: '📱',
    color: '#61DAFB',
    category: 'mobile'
  },
  figma: {
    id: 'figma',
    name: 'Figma',
    icon: '🎨',
    color: '#F24E1E',
    category: 'design'
  },
  graphql: {
    id: 'graphql',
    name: 'GraphQL',
    icon: '🔄',
    color: '#E10098',
    category: 'backend'
  },
  redis: {
    id: 'redis',
    name: 'Redis',
    icon: '🔴',
    color: '#DC382D',
    category: 'database'
  },
  socketio: {
    id: 'socketio',
    name: 'Socket.IO',
    icon: '⚡',
    color: '#010101',
    category: 'backend'
  }
};

// Sample Projects Data
export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform Moderna',
    description: 'Plataforma de comercio electrónico completa con panel administrativo, pasarela de pagos y análisis en tiempo real.',
    longDescription: 'Una plataforma de e-commerce completa construida con React y Node.js. Incluye gestión de inventario, procesamiento de pagos con Stripe, sistema de reseñas, carrito de compras avanzado, y panel de administración con analytics en tiempo real.',
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.nodejs,
      techStacks.mongodb,
      techStacks.aws,
      techStacks.docker
    ],
    links: [
      { type: 'demo', url: 'https://ecommerce-demo.sandrodevx.com', label: 'Ver Demo' },
      { type: 'repo', url: 'https://github.com/sandrodevx/ecommerce-platform', label: 'Código' },
      { type: 'case-study', url: '/case-studies/ecommerce', label: 'Caso de Estudio' }
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    ],
    featured: true,
    category: 'fullstack',
    status: 'completed',
    metrics: {
      users: 5000,
      performance: '95/100',
      coverage: 85
    },
    challenges: [
      'Optimización de performance con gran volumen de productos',
      'Implementación de pagos seguros y PCI compliance',
      'Sistema de notificaciones en tiempo real'
    ],
    solutions: [
      'Implementación de virtual scrolling y lazy loading',
      'Integración con Stripe y tokenización de datos sensibles',
      'Sistema de WebSockets con Redis para escalabilidad'
    ],
    learnings: [
      'Arquitectura de microservicios escalable',
      'Patrones de seguridad en aplicaciones financieras',
      'Optimización de performance en aplicaciones React complejas'
    ],
    createdAt: '2024-01-15',
    completedAt: '2024-03-20'
  },
  {
    id: 'task-management-app',
    title: 'TaskFlow - Gestión de Proyectos',
    description: 'Aplicación de gestión de tareas y proyectos con colaboración en tiempo real, notificaciones y análisis de productividad.',
    longDescription: 'Una aplicación completa de gestión de proyectos similar a Asana/Trello, con funcionalidades de colaboración en tiempo real, tableros Kanban, Gantt charts, time tracking, y reporting avanzado.',
    techStack: [
      techStacks.nextjs,
      techStacks.typescript,
      techStacks.postgresql,
      techStacks.socketio,
      techStacks.redis
    ],
    links: [
      { type: 'demo', url: 'https://taskflow.sandrodevx.com', label: 'Ver Demo' },
      { type: 'repo', url: 'https://github.com/sandrodevx/taskflow', label: 'Código' }
    ],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    ],
    featured: true,
    category: 'fullstack',
    status: 'completed',
    metrics: {
      users: 1200,
      performance: '98/100',
      coverage: 92
    },
    challenges: [
      'Sincronización de datos en tiempo real entre múltiples usuarios',
      'Implementación de sistema de permisos granular',
      'Optimización de queries complejas para reporting'
    ],
    solutions: [
      'Implementación de CRDT (Conflict-free Replicated Data Types)',
      'Sistema de roles y permisos basado en RBAC',
      'Optimización con índices de base de datos y caching inteligente'
    ],
    learnings: [
      'Arquitectura de aplicaciones colaborativas',
      'Patrones de sincronización de datos en tiempo real',
      'Optimización de performance en aplicaciones complejas'
    ],
    createdAt: '2023-10-01',
    completedAt: '2024-01-10'
  },
  {
    id: 'ai-image-generator',
    title: 'AI Image Studio',
    description: 'Generador de imágenes con IA usando modelos de difusión. Interfaz intuitiva para crear arte digital profesional.',
    longDescription: 'Una aplicación web que permite a los usuarios generar imágenes usando modelos de IA como DALL-E y Stable Diffusion. Incluye editor de prompts avanzado, galería comunitaria, y herramientas de post-procesamiento.',
    techStack: [
      techStacks.react,
      techStacks.python,
      techStacks.aws,
      techStacks.mongodb,
      techStacks.docker
    ],
    links: [
      { type: 'demo', url: 'https://ai-studio.sandrodevx.com', label: 'Ver Demo' },
      { type: 'repo', url: 'https://github.com/sandrodevx/ai-image-studio', label: 'Código' }
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop'
    ],
    featured: false,
    category: 'frontend',
    status: 'completed',
    metrics: {
      users: 800,
      performance: '90/100',
      coverage: 78
    },
    challenges: [
      'Integración con múltiples APIs de IA',
      'Gestión de colas de procesamiento de alta concurrencia',
      'Optimización de costos de API'
    ],
    solutions: [
      'Patrón adapter para múltiples proveedores de IA',
      'Sistema de colas con Redis y workers distribuidos',
      'Implementación de caché inteligente y rate limiting'
    ],
    learnings: [
      'Integración con servicios de Machine Learning',
      'Arquitectura de sistemas de alta concurrencia',
      'Optimización de costos en aplicaciones basadas en IA'
    ],
    createdAt: '2023-08-15',
    completedAt: '2023-11-30'
  },
  {
    id: 'mobile-fitness-app',
    title: 'FitTracker Pro',
    description: 'App móvil de fitness con tracking de ejercicios, planes personalizados y gamificación. Integración con wearables.',
    longDescription: 'Aplicación móvil completa para tracking de fitness y salud. Incluye planes de entrenamiento personalizados, seguimiento de progreso, integración con dispositivos wearables, y sistema de gamificación para motivar a los usuarios.',
    techStack: [
      techStacks.reactnative,
      techStacks.typescript,
      techStacks.nodejs,
      techStacks.mongodb,
      techStacks.aws
    ],
    links: [
      { type: 'demo', url: 'https://fittracker.sandrodevx.com', label: 'Landing Page' },
      { type: 'repo', url: 'https://github.com/sandrodevx/fittracker-pro', label: 'Código' }
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop'
    ],
    featured: false,
    category: 'mobile',
    status: 'completed',
    metrics: {
      users: 3000,
      performance: '85/100',
      coverage: 88
    },
    challenges: [
      'Integración con múltiples APIs de wearables',
      'Sincronización offline-first',
      'Optimización de batería en dispositivos móviles'
    ],
    solutions: [
      'SDK unificado para integración con dispositivos',
      'Implementación de Redux Offline y sync queues',
      'Optimización de background tasks y lazy loading'
    ],
    learnings: [
      'Desarrollo de aplicaciones móviles cross-platform',
      'Patrones de sincronización offline-first',
      'Optimización de performance en dispositivos móviles'
    ],
    createdAt: '2023-05-01',
    completedAt: '2023-08-10'
  },
  {
    id: 'dashboard-analytics',
    title: 'Analytics Dashboard Pro',
    description: 'Dashboard empresarial con visualizaciones interactivas, reportes automáticos y integración con múltiples fuentes de datos.',
    longDescription: 'Un dashboard empresarial completo para análisis de datos con visualizaciones interactivas, reportes automatizados, alertas en tiempo real, y conectores para múltiples fuentes de datos como Google Analytics, Salesforce, y bases de datos personalizadas.',
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.graphql,
      techStacks.postgresql,
      techStacks.docker
    ],
    links: [
      { type: 'demo', url: 'https://analytics.sandrodevx.com', label: 'Ver Demo' },
      { type: 'repo', url: 'https://github.com/sandrodevx/analytics-dashboard', label: 'Código' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    ],
    featured: false,
    category: 'frontend',
    status: 'in-progress',
    metrics: {
      users: 150,
      performance: '93/100',
      coverage: 91
    },
    challenges: [
      'Renderizado eficiente de grandes datasets',
      'Integración con múltiples APIs externas',
      'Sistema de alertas y notificaciones en tiempo real'
    ],
    solutions: [
      'Virtualización de componentes y paginación inteligente',
      'Patrón de integración con adaptadores y cache distribuido',
      'WebSockets con fallback a polling y notificaciones push'
    ],
    learnings: [
      'Optimización de visualizaciones de datos complejas',
      'Arquitectura de integraciones escalables',
      'Patrones de caching y performance en dashboards'
    ],
    createdAt: '2024-02-01',
    completedAt: undefined
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Personal Interactivo',
    description: 'Portfolio personal con animaciones avanzadas, efectos 3D, partículas interactivas y optimización SEO.',
    longDescription: 'Mi portfolio personal construido con las últimas tecnologías web. Incluye animaciones con Framer Motion, efectos de partículas, glassmorphism, modo oscuro/claro, y optimizaciones avanzadas de performance y SEO.',
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.figma,
      techStacks.aws
    ],
    links: [
      { type: 'demo', url: 'https://sandrodevx.com', label: 'Ver Sitio' },
      { type: 'repo', url: 'https://github.com/sandrodevx/portfolio', label: 'Código' }
    ],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
    ],
    featured: false,
    category: 'frontend',
    status: 'completed',
    metrics: {
      performance: '98/100',
      coverage: 95
    },
    challenges: [
      'Animaciones fluidas sin comprometer performance',
      'SEO optimizado para SPA',
      'Diseño responsive con animaciones complejas'
    ],
    solutions: [
      'Optimización con React.memo y lazy loading',
      'SSG con Next.js y meta tags dinámicos',
      'CSS Grid y Flexbox con media queries optimizadas'
    ],
    learnings: [
      'Optimización avanzada de performance en React',
      'Técnicas de SEO para aplicaciones SPA',
      'Diseño de interfaces con motion design'
    ],
    createdAt: '2024-03-01',
    completedAt: '2024-03-25'
  }
];

// Project categories for filtering
export const projectCategories = [
  { id: 'all', label: 'Todos los Proyectos', count: projects.length },
  { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'featured', label: 'Destacados', count: projects.filter(p => p.featured).length }
]; 