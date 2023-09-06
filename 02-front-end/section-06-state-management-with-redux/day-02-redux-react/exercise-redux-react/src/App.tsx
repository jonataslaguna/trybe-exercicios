import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from './redux/actions'; 

type RootState = {
  counterReducer: {
     count: number;
     clicks: number;
  }
};

function App() {
  const rootState = useSelector((state: RootState) => state.counterReducer.count);
  const clicks = useSelector((state: RootState) => state.counterReducer.clicks)
  const dispatch = useDispatch();
  //Dispatch: É uma função que envia uma action para processamento.
  
  return (
   <>
   <h1>Counter</h1>
   <h2>{ rootState }</h2>
   <button onClick={ () => dispatch(actionCreator()) }>Increment</button>
   <button onClick={ () => dispatch(actionCreator(5)) }>Increment 5</button>
   </>
  )
}

export default App
