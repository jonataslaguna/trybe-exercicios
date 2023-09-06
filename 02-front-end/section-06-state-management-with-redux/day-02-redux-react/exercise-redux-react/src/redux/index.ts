import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore} from 'redux';
import rootReducer from './reducers';


const store = createStore(rootReducer, composeWithDevTools());
//Store: É onde o estado global da aplicação é armazenado e é representado por um objeto JavaScript.

export default store;


