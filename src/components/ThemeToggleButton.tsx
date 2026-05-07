import { useTheme } from '../context/ThemeContext';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light'
        ? '🌙 Switch to Dark'
        : '☀️ Switch to Light'}
    </button>
  );
}

export default ThemeToggleButton;
