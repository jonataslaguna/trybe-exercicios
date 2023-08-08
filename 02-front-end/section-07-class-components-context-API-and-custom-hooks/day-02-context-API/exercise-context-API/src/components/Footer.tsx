import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);
  return <footer>Tema Atual: { theme }</footer>;
}

export default Footer;
