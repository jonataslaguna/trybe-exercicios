import Header from './components/Header';
import Footer from './components/Footer';
import ThemeProvider from './context/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Footer />
    </ThemeProvider>
   
  );
}
