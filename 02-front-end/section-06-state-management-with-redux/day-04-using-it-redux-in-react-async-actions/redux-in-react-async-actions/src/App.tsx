import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from './types';
import { fetchDogImage } from './redux/actions';

import './App.css'

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchDogImage())
  }, [dispatch])

  if (rootState.isFetching) return <h1>Carregando...</h1>;

  return (
    <>
        <div>
          {
            rootState.imageURL
            && <img
            src={ rootState.imageURL }
            alt="imagem de um cachorro aleatório"
            />
          }
        </div>
            <div>
              <button onClick={ () => { dispatch(fetchDogImage()) } }>
                Novo Doguinho
              </button>
            </div>
    </>
  )
}

export default App
