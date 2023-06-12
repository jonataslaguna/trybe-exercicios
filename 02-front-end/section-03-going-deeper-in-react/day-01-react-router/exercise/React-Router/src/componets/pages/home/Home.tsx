/* import { Link } from 'react-router-dom'; */
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/coffees')
    }

    return(
    <>
    <div className="home-page">
     <div className="home-title">
        <h1>Home page</h1>
      </div>
    <main>
        <button onClick={ handleClick }>Conheça nossos produtos</button>
    </main>

     </div>
        
    </>

    )
}

export default Home;