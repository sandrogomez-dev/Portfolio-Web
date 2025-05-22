import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Theme, ThemeMode } from '@/types';

interface ThemeContextType {
  theme: Theme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
  isDark: boolean;
  isLight: boolean;
}

const defaultThemes: Record<'light' | 'dark', Omit<Theme, 'mode'>> = {
  light: {
    colors: {
      primary: '#00f3ff',
      secondary: '#ff4d5a',
      accent: '#7c3aed',
      danger: '#dc2626',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
    },
    fonts: {
      primary: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
    },
  },
  dark: {
    colors: {
      primary: '#00f3ff',
      secondary: '#ff4d5a',
      accent: '#a855f7',
      danger: '#ef4444',
      background: '#0a0a0a',
      surface: '#111111',
      text: '#ffffff',
      textSecondary: '#94a3b8',
      border: '#1e293b',
    },
    fonts: {
      primary: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
    },
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return (saved as ThemeMode) || 'auto';
  });

  const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const resolveThemeMode = (mode: ThemeMode): 'light' | 'dark' => {
    return mode === 'auto' ? getSystemTheme() : mode;
  };

  const [resolvedMode, setResolvedMode] = useState<'light' | 'dark'>(() => {
    return resolveThemeMode(themeMode);
  });

  const theme: Theme = {
    mode: themeMode,
    ...defaultThemes[resolvedMode],
  };

  const toggleTheme = () => {
    const newMode = resolvedMode === 'dark' ? 'light' : 'dark';
    setThemeMode(newMode);
  };

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    localStorage.setItem('portfolio-theme', mode);
  };

  // Listen for system theme changes when in auto mode
  useEffect(() => {
    if (themeMode === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        setResolvedMode(getSystemTheme());
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      setResolvedMode(themeMode);
    }
  }, [themeMode]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    const colors = theme.colors;

    // Set CSS custom properties
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-danger', colors.danger);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-text-secondary', colors.textSecondary);
    root.style.setProperty('--color-border', colors.border);

    // Set font families
    root.style.setProperty('--font-primary', theme.fonts.primary);
    root.style.setProperty('--font-mono', theme.fonts.mono);

    // Set theme class
    root.className = resolvedMode;
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
  }, [theme, resolvedMode]);

  const contextValue: ThemeContextType = {
    theme,
    themeMode,
    toggleTheme,
    setThemeMode,
    isDark: resolvedMode === 'dark',
    isLight: resolvedMode === 'light',
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}; 