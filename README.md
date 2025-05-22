# Sandro Gomez - Modern React Portfolio[Building🏗️]

Un portfolio moderno y técnicamente impresionante construido con React, TypeScript, Bootstrap 5 y tecnologías de vanguardia. Diseñado para destacar en procesos de selección tech con un enfoque en la experiencia de usuario y el rendimiento.

## ✨ Características Principales

### 🎨 Diseño Visual Premium
- **Efecto Hero**: Partículas interactivas con TS Particles
- **Glassmorphism**: Efectos modernos en secciones clave  
- **Gradientes Animados**: Transiciones suaves y elegantes
- **Cards 3D**: Efectos hover con `transform-style: preserve-3d`
- **Custom Cursor**: Trail effect personalizado
- **Animaciones**: Transiciones fluidas con Framer Motion

### 🏗️ Arquitectura Técnica
- **React 18** con componentes funcionales TypeScript
- **Vite** como bundler para desarrollo rápido
- **React Router v6** para navegación SPA
- **Context API** para manejo de tema global
- **Custom Hooks** para lógica reutilizable
- **Bootstrap 5** + React Bootstrap integrado

### 📱 Secciones Implementadas

#### Hero Section
- ✅ Efecto typing animation con rotación de textos
- ✅ Botones CTA con microinteracciones
- ✅ Indicador scroll down animado
- ✅ Stats en tiempo real con contadores

#### Navegación
- ✅ Header con glassmorphism al hacer scroll
- ✅ Toggle de tema (light/dark/auto)
- ✅ Menú responsive con animaciones
- ✅ Navegación suave entre secciones

#### Proyectos Destacados
- 🚧 Grid responsive con cards interactivas
- 🚧 Overlay con tech stack y badges animados
- 🚧 Lightbox para detalles técnicos
- 🚧 Filtrado por tecnologías

#### Skills Matrix
- 🚧 Radar chart interactivo (Chart.js)
- 🚧 Progress bars animadas
- 🚧 Nube de tags clickable
- 🚧 Tooltips con años de experiencia

#### Experience Timeline
- 🚧 Timeline vertical interactiva
- 🚧 Efectos parallax en logos
- 🚧 Modales con logros cuantificables
- 🚧 Sistema de endorsements

#### Certificaciones
- 🚧 Carrusel 3D de certificados
- 🚧 Badges de verificación oficial
- 🚧 Filtrado por plataforma

#### Contacto
- 🚧 Formulario con validación en tiempo real
- 🚧 Descarga de CV con tracking
- 🚧 Social links con hover effects
- 🚧 Integración con Mapbox

### 🎯 Features para Reclutadores
- **Toggle Developer/Recruiter**: Información técnica adicional
- **Daily Coding**: GitHub contribution graph mock
- **Salary Tooltip**: Rango salarial en hover
- **Easter Egg**: ASCII art en consola con info de contacto
- **Preloader**: Animación npm install metaphor

### ⚡ Optimizaciones

#### SEO & Performance
- Meta tags dinámicos optimizados
- Schema.org markup estructurado
- Lazy loading con skeleton screens
- Code splitting automático
- Preload de fuentes críticas

#### Accesibilidad
- Navegación por teclado completa
- Contrastes AAA verificados
- ARIA labels y roles
- Soporte para motion reducido

#### Responsive Design
- Mobile-first approach
- Menú hamburguesa animado
- Breakpoints optimizados
- Touch gestures

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/username/portfolio-web.git
cd portfolio-web

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de build
npm run preview
```

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run lint         # Linting con ESLint
npm run preview      # Preview del build
```

## 🎨 Personalización

### Colores y Tema
Edita `src/styles/variables.scss`:
```scss
$primary: #00f3ff;
$secondary: #ff4d5a;
$accent: #a855f7;
```

### Información Personal
Modifica `src/data/portfolio.ts`:
```typescript
export const personalInfo = {
  name: "Tu Nombre",
  title: "Tu Título",
  // ... más configuraciones
}
```

### Fuentes
Las fuentes se cargan desde Google Fonts:
- **Principal**: Montserrat (300-800)
- **Mono**: JetBrains Mono (300-600)

Para cambiar fuentes, edita `index.html` y `src/styles/variables.scss`.

### Animaciones
Configuraciones en `src/context/ThemeContext.tsx`:
```typescript
const animations = {
  duration: 300,
  easing: 'ease-in-out'
}
```

## 📦 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Layout/         # Header, Footer
│   ├── UI/             # Componentes reutilizables  
│   ├── Hero/           # Sección hero
│   ├── Projects/       # Portfolio de proyectos
│   ├── Skills/         # Skills y tecnologías
│   ├── Experience/     # Experiencia laboral
│   ├── Certifications/ # Certificaciones
│   └── Contact/        # Formulario de contacto
├── context/            # Context API providers
├── hooks/              # Custom hooks
├── utils/              # Utilidades y helpers
├── types/              # Definiciones TypeScript
├── styles/             # Estilos SCSS
└── assets/             # Imágenes y recursos
```

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **React Router** - SPA Routing
- **Bootstrap 5** - CSS Framework

### Animaciones & Efectos
- **Framer Motion** - Animaciones avanzadas
- **React Spring** - Physics-based animations
- **TS Particles** - Particle background
- **React Type Animation** - Typing effects

### Charts & Data Viz
- **Chart.js** - Gráficos interactivos
- **React ChartJS 2** - React integration

### Herramientas
- **ESLint** - Code linting
- **Sass** - CSS preprocessing
- **React Bootstrap** - Bootstrap components

## 🚀 Deployment

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar dominio personalizado
vercel domains add tu-dominio.com
```

### Netlify
```bash
# Build
npm run build

# Subir carpeta dist/ a Netlify
```

### GitHub Pages
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar script a package.json
"homepage": "https://username.github.io/portfolio-web",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 📊 Analytics

El portfolio incluye tracking de eventos:
- Page views
- Project interactions
- Contact form submissions
- Theme changes
- CV downloads

Para activar analytics en producción, configura Google Analytics en `src/utils/analytics.ts`.

## 🔧 Troubleshooting

### Error de TSParticles
Si encuentras errores con partículas:
```bash
npm install @tsparticles/react @tsparticles/basic @tsparticles/engine
```

### Problemas de SCSS
Asegúrate de tener Sass instalado:
```bash
npm install -D sass
```

### Errores de TypeScript
Verifica la configuración en `tsconfig.json` y las rutas de alias.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Sandro DevX**
- 📧 Email: contact@sandrodevx.dev
- 🔗 LinkedIn: [linkedin.com/in/sandrodevx](https://linkedin.com/in/sandrodevx)
- 🐙 GitHub: [github.com/sandrodevx](https://github.com/sandrodevx)
- 🌐 Portfolio: [sandrodevx-portfolio.vercel.app](https://sandrodevx-portfolio.vercel.app)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

**Disponible para:**
- Full-time (Remoto/Híbrido)
- Freelance projects
- Consulting
- Rango salarial: $40k - $80k USD
