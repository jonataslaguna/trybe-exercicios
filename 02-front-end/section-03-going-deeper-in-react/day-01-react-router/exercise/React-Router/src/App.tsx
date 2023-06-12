import { Routes, Route } from 'react-router-dom';
import Home from './componets/pages/home/Home';
import CoffeeList from './componets/pages/coffee-list/CoffeeList';
import Coffee from './componets/pages/Coffee';
import NotFound from './componets/pages/NotFound';
import Layout from './componets/pages/Layout';

function App() {

  return (
    <>
    <Routes> 
      <Route path='/' element={ <Layout />}>
        <Route index element={ <Home /> } />
        <Route path='coffees' element={ <CoffeeList /> }/>
        <Route path='/coffees/:coffee' element={ <Coffee />}> </Route>
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
    </>
  )
}

export default App
