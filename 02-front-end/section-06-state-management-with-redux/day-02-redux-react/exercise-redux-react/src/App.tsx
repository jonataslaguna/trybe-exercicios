import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from './redux/actions'; 

type RootState = {
  count: number;
};

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  
  return (
   <>
   <h1>Counter</h1>
   <h2>{ rootState.count }</h2>
   <button onClick={ () => dispatch(actionCreator()) }>Increment</button>
   <button onClick={ () => dispatch(actionCreator(5)) }>Increment 5</button>
   </>
  )
}

export default App
