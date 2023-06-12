import { Routes, Route } from 'react-router-dom';
import Home from './componets/pages/home/Home';
import CoffeeList from './componets/pages/coffee-list/CoffeeList';
import NavBar from './componets/nav-bar/NavBar';
import Coffee from './componets/pages/Coffee';

function App() {

  return (
    <>
    <NavBar />
    <Routes> 
      <Route path='/' element={ <Home /> } />
      <Route path='coffees' element={ <CoffeeList /> }/>
      <Route path='/coffees/:coffee' element={ <Coffee />}> </Route>
    </Routes>
    </>
  )
}

export default App
