import { useState } from 'react';

const useCustomTheme = () => {
  const [themeMode, setThemeMode] = useState('light');
  const toggleTheme = () => setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  return { themeMode, toggleTheme };
};

export default useCustomTheme;