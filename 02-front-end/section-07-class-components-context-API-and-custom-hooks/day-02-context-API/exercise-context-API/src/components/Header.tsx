import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Exercise Context API</h1>
      <button onClick={() => toggleTheme()}>
        {theme === 'dark' ? '☀️' : '🌒'}
      </button>
    </header>
  );
}

export default Header;