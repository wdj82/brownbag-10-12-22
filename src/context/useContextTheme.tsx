import { useState, createContext, useContext } from 'react';
import type { PropsWithChildren } from 'react';

const ThemeContext = createContext<ThemeContext | undefined>(undefined);

// Provider helper
function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>('Light');

  function toggleTheme() {
    setTheme(theme === 'Light' ? 'Dark' : 'Light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// hook to check for context provider
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContext provider');
  }
  return context;
}

export { ThemeProvider, useTheme };
