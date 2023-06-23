import { /* render, */ screen, } from '@testing-library/react';
/* import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'; */
import App from '../App';
import About from '../components/About';
import { renderWithRouter } from '../utils/renderWithRouter';

it('Renderiza texto da página inicial' /* e página sobre */, async () => {
    /* render(
    <BrowserRouter>
      <App />
    </BrowserRouter>); */

    /* render(<App />, { wrapper: BrowserRouter }); */
    renderWithRouter(<App />)
    expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

    //TESTANDO O COMPONENTE ABOUT ATRAVÉS DO APP:

    /* const aboutLink = screen.getByRole('link', {name: /Sobre/i});
    await userEvent.click(aboutLink)
    expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument(); */
});
    //TESTANDO O COMPONENTE ABOUT DIRETAMENTE:
it('Renderiza texto do componente About', () => {
    /* render(<About />, { wrapper: BrowserRouter }); */
    renderWithRouter(<About />)
    expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

it('Navega para a página About', async () => {
   const { user } = renderWithRouter(<App />);

   /* Ao criar um teste renderizando somente um componente específico, como renderWithRouter(<About />), 
   serão renderizados apenas os elementos presentes no componente About. */

   expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

   const aboutLink = screen.getByRole('link', {name: /Sobre/i });

   await user.click(aboutLink);
   expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();

});

it('Renderiza diretamente na rota /about', async () => {
    const { user } = renderWithRouter(<App />, { route: '/about' });

    /* Ao renderizar o App definindo uma rota, como renderWithRouter(<App />, { route: '/about' }), 
    a página inteira será renderizada.*/

    expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: /Início/i });
    await user.click(homeLink);
    expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

it('Testa rota /notFound', () => {
    renderWithRouter(<App/>, {route: '/chafundifórnio' });

    expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
});