import create from 'zustand';

export const useTheme = create<ThemeStore>((set) => ({
  theme: 'Light',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'Light' ? 'Dark' : 'Light' })),
}));
