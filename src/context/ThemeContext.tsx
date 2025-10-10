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
      primary: '#8B7355',        // Warm brown
      secondary: '#A68A64',      // Light caramel
      accent: '#6B5D52',         // Deep taupe
      danger: '#C17767',         // Muted terracotta
      background: '#F5F1ED',     // Cream background
      surface: '#FAFAF8',        // Warm off-white
      text: '#2B2421',           // Warm near-black
      textSecondary: '#6D6155',  // Dark taupe
      border: '#E5DDD5',         // Medium beige
    },
    fonts: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'SF Mono', 'Monaco', 'Inconsolata', monospace",
    },
  },
  dark: {
    colors: {
      primary: '#A68A64',        // Light caramel (lighter for dark mode)
      secondary: '#D4A373',      // Warm sand
      accent: '#8B7355',         // Warm brown
      danger: '#D4987F',         // Lighter terracotta
      background: '#1A1613',     // Warm dark bg
      surface: '#252018',        // Dark surface
      text: '#EDE8E3',           // Light beige text
      textSecondary: '#B8AFA5',  // Light taupe
      border: '#3D3530',         // Dark border
    },
    fonts: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'SF Mono', 'Monaco', 'Inconsolata', monospace",
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