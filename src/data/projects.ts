import { Project, TechStack } from '@/types';

// Tech Stack Data
export const techStacks = {
  react: {
    id: 'react',
    name: 'React',
    icon: '⚛️',
    color: '#61DAFB',
    category: 'frontend',
  },
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: '📘',
    color: '#3178C6',
    category: 'frontend',
  },
  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    icon: '🟢',
    color: '#339933',
    category: 'backend',
  },
  nextjs: {
    id: 'nextjs',
    name: 'Next.js',
    icon: '▲',
    color: '#000000',
    category: 'frontend',
  },
  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    icon: '🍃',
    color: '#47A248',
    category: 'database',
  },
  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: '🐘',
    color: '#336791',
    category: 'database',
  },
  aws: {
    id: 'aws',
    name: 'AWS',
    icon: '☁️',
    color: '#FF9900',
    category: 'devops',
  },
  docker: {
    id: 'docker',
    name: 'Docker',
    icon: '🐳',
    color: '#2496ED',
    category: 'devops',
  },
  python: {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3776AB',
    category: 'backend',
  },
  reactnative: {
    id: 'reactnative',
    name: 'React Native',
    icon: '📱',
    color: '#61DAFB',
    category: 'mobile',
  },
  figma: {
    id: 'figma',
    name: 'Figma',
    icon: '🎨',
    color: '#F24E1E',
    category: 'design',
  },
  graphql: {
    id: 'graphql',
    name: 'GraphQL',
    icon: '🔄',
    color: '#E10098',
    category: 'backend',
  },
  redis: {
    id: 'redis',
    name: 'Redis',
    icon: '🔴',
    color: '#DC382D',
    category: 'database',
  },
  socketio: {
    id: 'socketio',
    name: 'Socket.IO',
    icon: '⚡',
    color: '#010101',
    category: 'backend',
  },
  fastapi: {
    id: 'fastapi',
    name: 'FastAPI',
    icon: '🚀',
    color: '#009688',
    category: 'backend',
  },
  tailwind: {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: '🎨',
    color: '#06B6D4',
    category: 'frontend',
  },
} as const satisfies Record<string, TechStack>;

// Sample Projects Data
export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'NexusShop - Premium E-commerce Platform',
    description:
      'E-commerce premium con tecnologías de vanguardia. Minimalismo inspirado en Apple.com, animaciones fluidas con Framer Motion y experiencia de usuario premium.',
    longDescription:
      'NexusShop es una plataforma de e-commerce premium construida con React 18, TypeScript y Vite. Características destacadas: carrito inteligente con persistencia automática y Zustand, diseño glassmorphism con efectos backdrop-blur, gradientes animados y microinteracciones, performance optimizada con code splitting automático y lazy loading, PWA ready para experiencia nativa, animaciones premium con Framer Motion para transiciones suaves, hover effects interactivos y 3D transforms. Todo con responsive design mobile-first y paleta de colores inspirada en marcas premium.',
    techStack: [
      techStacks.react!,
      techStacks.typescript!,
      techStacks.tailwind!,
      techStacks.figma!,
    ],
    links: [
      { type: 'demo', url: 'https://nexus-shop-two.vercel.app/', label: 'Ver Demo' },
      { type: 'repo', url: 'https://github.com/sandrogomez-dev/nexusshop', label: 'Código' },
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    ],
    featured: true,
    category: 'frontend',
    status: 'completed',
    metrics: {
      performance: '98/100',
      coverage: 92,
    },
    challenges: [
      'Implementación de glassmorphism y efectos visuales avanzados',
      'Optimización de performance con Vite + SWC para builds ultra-rápidos',
      'Sistema de carrito inteligente con estado reactivo',
      'Animaciones fluidas sin comprometer performance',
    ],
    solutions: [
      'TailwindCSS con backdrop-blur y gradientes animados personalizados',
      'Vite con code splitting automático y lazy loading de componentes',
      'Zustand para gestión de estado minimalista y eficiente',
      'Framer Motion optimizado con transforms 3D y loading states',
    ],
    learnings: [
      'Desarrollo moderno con Vite y SWC para máxima velocidad',
      'Diseño premium inspirado en Apple con glassmorphism',
      'Arquitectura de e-commerce escalable y performante',
      'PWA patterns para experiencia nativa en web',
    ],
    createdAt: '2024-01-15',
    completedAt: '2024-03-20',
  },
  {
    id: 'task-management-app',
    title: 'TaskFlow - Gestión de Proyectos',
    description:
      'Aplicación moderna de gestión de proyectos que combina tableros Kanban, gráficos Gantt, seguimiento de tiempo y analíticas avanzadas en una interfaz elegante.',
    longDescription:
      'TaskFlow es una aplicación completa de gestión de proyectos construida con React 19 que integra funcionalidades avanzadas: tableros Kanban con drag & drop intuitivo, gráficos Gantt para vista temporal, cronómetro integrado para seguimiento de tiempo, plantillas predefinidas (Software, Marketing, Diseño), dashboard con métricas en tiempo real, sistema de notificaciones, tema claro/oscuro, y exportación de datos. Todo optimizado con diseño responsive y experiencia de usuario moderna.',
    techStack: [techStacks.react!, techStacks.typescript!, techStacks.figma!],
    links: [
      { type: 'demo', url: 'https://task-flow-red-seven.vercel.app/dashboard', label: 'Ver Demo' },
      { type: 'repo', url: 'https://github.com/sandrogomez-dev/taskflow', label: 'Código' },
    ],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    ],
    featured: true,
    category: 'frontend',
    status: 'in-progress',
    metrics: {
      performance: '95/100',
      coverage: 85,
    },
    challenges: [
      'Implementación de drag & drop fluido entre columnas Kanban',
      'Integración compleja de gráficos Gantt con dependencias',
      'Sistema de cronómetro y tracking de tiempo por tarea',
      'Dashboard responsive con múltiples visualizaciones',
    ],
    solutions: [
      'Implementación con @dnd-kit para drag & drop optimizado',
      'Gráficos Gantt custom con date-fns para manejo de fechas',
      'Sistema de persistencia local con localStorage avanzado',
      'Bootstrap 5 con componentes modulares y responsive grid',
    ],
    learnings: [
      'Desarrollo con React 19 y sus nuevas características',
      'Arquitectura de aplicaciones de gestión complejas',
      'Patrones de UX para herramientas de productividad',
      'Optimización de performance con grandes datasets',
    ],
    createdAt: '2023-10-01',
    completedAt: undefined,
  },
  {
    id: 'ai-image-generator',
    title: 'AI Image Studio',
    description:
      'Estudio avanzado de generación de imágenes con IA. Incluye editor inteligente de prompts, galería comunitaria con 10k+ imágenes y post-procesamiento con upscaling 4x.',
    longDescription:
      'Estudio completo de generación de imágenes con IA construido con Next.js 14 y FastAPI. Características destacadas: asistente contextual de prompts con +50 templates artísticos, galería comunitaria con infinite scrolling virtualizado, editor integrado con filtros y upscaling Real-ESRGAN 4x, historial semántico con Redis Vector Search, y sistema de tags colaborativo con ML. Optimizado para alto rendimiento con Lighthouse 98/100.',
    techStack: [
      techStacks.nextjs!,
      techStacks.typescript!,
      techStacks.python!,
      techStacks.fastapi!,
      techStacks.postgresql!,
      techStacks.redis!,
      techStacks.aws!,
      techStacks.docker!,
    ],
    links: [
      { type: 'demo', url: 'https://ai-image-studio-frontend.vercel.app/', label: 'Ver Demo' },
      { type: 'repo', url: 'https://github.com/sandrogomez-dev/ai-image-studio', label: 'Código' },
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop',
    ],
    featured: true,
    category: 'fullstack',
    status: 'completed',
    metrics: {
      users: 2500,
      performance: '98/100',
      coverage: 94,
    },
    challenges: [
      'Renderizado eficiente de 10,000+ imágenes con virtualización',
      'Integración con múltiples APIs de IA (OpenAI, Stability AI)',
      'Sistema de búsqueda semántica con embeddings en tiempo real',
      'Optimización de costos de API con caching inteligente',
    ],
    solutions: [
      'Infinite scrolling virtualizado con React 18 Server Components',
      'Patrón adapter unificado para múltiples proveedores de IA',
      'Redis Vector Search con búsqueda por embeddings',
      'Sistema de colas con Celery y rate limiting avanzado',
    ],
    learnings: [
      'Arquitectura fullstack escalable con Next.js 14 y FastAPI',
      'Optimización de performance para aplicaciones data-intensive',
      'Integración avanzada con servicios de Machine Learning',
      'Patrones de caching distribuido con Redis',
    ],
    createdAt: '2023-08-15',
    completedAt: '2024-01-20',
  },
  {
    id: 'mobile-fitness-app',
    title: 'Travel Guide - Planificador de Viajes',
    description:
      'Aplicación web moderna para planificar viajes personalizados con formularios inteligentes, validación robusta y arquitectura escalable.',
    longDescription:
      'Travel Guide es una aplicación completa de planificación de viajes construida con React 19 y Bootstrap 5. Características destacadas: formulario inteligente con validación en tiempo real, 7 categorías de viaje (Aventura, Cultural, Relajación), cálculo automático de duración, validación robusta con mensajes descriptivos en español, diseño responsivo mobile-first, custom hooks para lógica de negocio reutilizable, indicador de progreso del formulario, estados de carga con spinner, y arquitectura escalable con separación de responsabilidades. Código limpio con JSDoc y componentes modulares.',
    techStack: [techStacks.react!, techStacks.typescript!, techStacks.figma!],
    links: [
      { type: 'demo', url: 'https://travel-guide-kappa-nine.vercel.app/', label: 'Ver Demo' },
      { type: 'repo', url: 'https://github.com/sandrogomez-dev/travel-guide', label: 'Código' },
    ],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    ],
    featured: false,
    category: 'frontend',
    status: 'completed',
    metrics: {
      performance: '94/100',
      coverage: 92,
    },
    challenges: [
      'Validación de formularios compleja en tiempo real',
      'Arquitectura escalable con custom hooks reutilizables',
      'UX intuitiva con feedback inmediato al usuario',
      'Manejo de estados de formulario y validaciones complejas',
    ],
    solutions: [
      'Custom hook (useTravelForm) para separar lógica de negocio',
      'Bootstrap 5 con componentes modulares y responsive design',
      'Validación robusta con mensajes descriptivos y indicadores visuales',
      'Arquitectura limpia con constantes centralizadas y JSDoc',
    ],
    learnings: [
      'Desarrollo con React 19 y sus características más recientes',
      'Patrones de arquitectura escalable con custom hooks',
      'Mejores prácticas de UX/UI para formularios complejos',
      'Código limpio y mantenible con separación de responsabilidades',
    ],
    createdAt: '2023-05-01',
    completedAt: '2023-08-10',
  },
  {
    id: 'dashboard-analytics',
    title: 'Analytics Dashboard Pro',
    description:
      'Dashboard de análisis de alto rendimiento con visualización de datos en tiempo real, construido con React 18, TypeScript 5 y tecnologías web modernas.',
    longDescription:
      'Analytics Dashboard Pro es un dashboard empresarial de última generación con visualización de datos interactiva en tiempo real, integración multi-fuente (Google Analytics, Salesforce, APIs personalizadas), arquitectura limpia con patrón adapter, gestión de estado avanzada con Zustand, actualizaciones en tiempo real con WebSockets, capacidades de exportación (PDF, CSV, Excel), modo oscuro/claro automático, diseño responsive mobile-first, y optimización de performance con virtualización, componentes memoizados y lazy loading. Cero warnings de TypeScript con type safety estricto.',
    techStack: [
      techStacks.react!,
      techStacks.typescript!,
      techStacks.tailwind!,
      techStacks.graphql!,
      techStacks.socketio!,
    ],
    links: [
      {
        type: 'demo',
        url: 'https://analytics-dashboard-pro-cdc8-5hggm7bh2-sandro-gomezs-projects.vercel.app/',
        label: 'Ver Demo',
      },
      {
        type: 'repo',
        url: 'https://github.com/sandrogomez-dev/analytics-dashboard-pro',
        label: 'Código',
      },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    ],
    featured: true,
    category: 'fullstack',
    status: 'completed',
    metrics: {
      performance: '95/100',
      coverage: 98,
    },
    challenges: [
      'Visualización eficiente de grandes datasets con virtualización',
      'Integración en tiempo real con WebSockets y fallback a polling',
      'Arquitectura escalable con patrón adapter para múltiples fuentes',
      'Optimización extrema: bundle <100KB, load time <1s, cero TS warnings',
    ],
    solutions: [
      'TanStack Virtual para renderizado eficiente de tablas masivas',
      'Socket.IO con reconexión automática y manejo de errores robusto',
      'Patrón adapter extensible con factory para Google Analytics/Salesforce',
      'Vite + React 18 + strict TypeScript con tree-shaking optimizado',
    ],
    learnings: [
      'Arquitectura de dashboards empresariales de alto rendimiento',
      'Patrones avanzados de integración con múltiples APIs',
      'Optimización extrema de performance en aplicaciones data-intensive',
      'Real-time data synchronization con state management complejo',
    ],
    createdAt: '2024-02-01',
    completedAt: '2024-04-15',
  },
  {
    id: 'portfolio-website',
    title: 'Generador de Currículum Profesional v2.0',
    description:
      'Aplicación web avanzada para crear currículums profesionales con múltiples plantillas, IA integrada, análisis inteligente y optimización ATS.',
    longDescription:
      'Generador de Currículum Profesional es una aplicación completa construida con React 18 y Vite que integra IA avanzada para crear CVs impresionantes. Características destacadas: 5 plantillas profesionales (Moderno, Ejecutivo, Creativo), asistente de IA con OpenAI para generar contenido, análisis automático con puntuación y métricas, optimización para ATS, autenticación con Firebase y guardado en la nube, personalización de colores en tiempo real, modo oscuro/claro, tour guiado para nuevos usuarios, exportación PDF de alta calidad con jsPDF, y validación en tiempo real. Todo con arquitectura moderna y experiencia de usuario excepcional.',
    techStack: [techStacks.react!, techStacks.typescript!, techStacks.aws!, techStacks.figma!],
    links: [
      { type: 'demo', url: 'https://generador-curriculum.vercel.app/', label: 'Ver Demo' },
      { type: 'repo', url: 'https://github.com/sandrogomez-dev/generador-cv', label: 'Código' },
    ],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    ],
    featured: true,
    category: 'fullstack',
    status: 'completed',
    metrics: {
      performance: '96/100',
      coverage: 94,
    },
    challenges: [
      'Integración compleja con OpenAI API para generación de contenido inteligente',
      'Sistema de análisis automático con puntuación y métricas de CV',
      'Exportación PDF de alta calidad con HTML2Canvas + jsPDF',
      'Optimización ATS y arquitectura escalable con Firebase',
    ],
    solutions: [
      'OpenAI API con prompts optimizados y manejo de rate limiting',
      'Algoritmos de análisis de contenido con métricas cuantificables',
      'jsPDF con compresión inteligente y renderizado optimizado',
      'Firebase Authentication + Firestore para sync multi-dispositivo',
    ],
    learnings: [
      'Integración avanzada de IA en aplicaciones web',
      'Arquitectura fullstack moderna con React 18 + Vite + Firebase',
      'Optimización de UX con onboarding y análisis en tiempo real',
      'Patrones de exportación PDF y gestión de estado complejo',
    ],
    createdAt: '2024-03-01',
    completedAt: '2024-03-25',
  },
];

// Project categories for filtering
export const projectCategories = [
  { id: 'all', label: 'Todos los Proyectos', count: projects.length },
  {
    id: 'fullstack',
    label: 'Full Stack',
    count: projects.filter((p) => p.category === 'fullstack').length,
  },
  {
    id: 'frontend',
    label: 'Frontend',
    count: projects.filter((p) => p.category === 'frontend').length,
  },
  { id: 'mobile', label: 'Mobile', count: projects.filter((p) => p.category === 'mobile').length },
  { id: 'featured', label: 'Destacados', count: projects.filter((p) => p.featured).length },
];
