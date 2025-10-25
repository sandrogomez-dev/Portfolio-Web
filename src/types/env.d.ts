/// <reference types="vite/client" />

interface ImportMetaEnv {
  // App Configuration
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_URL: string;

  // Analytics
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_GTM_ID: string;

  // Contact Form
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_FORMSPREE_ID: string;

  // API Keys
  readonly VITE_GITHUB_TOKEN: string;

  // Social Media
  readonly VITE_GITHUB_USERNAME: string;
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_EMAIL: string;

  // Feature Flags
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_ENABLE_PARTICLES: string;
  readonly VITE_ENABLE_CUSTOM_CURSOR: string;
  readonly VITE_ENABLE_CONSOLE_EASTER_EGG: string;

  // Development
  readonly VITE_DEV_MODE: string;
  readonly VITE_DEBUG: string;

  // Performance
  readonly VITE_LAZY_LOAD_IMAGES: string;
  readonly VITE_PRELOAD_FONTS: string;

  // Theming
  readonly VITE_THEME_PRIMARY_COLOR: string;
  readonly VITE_THEME_SECONDARY_COLOR: string;
  readonly VITE_THEME_ACCENT_COLOR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

