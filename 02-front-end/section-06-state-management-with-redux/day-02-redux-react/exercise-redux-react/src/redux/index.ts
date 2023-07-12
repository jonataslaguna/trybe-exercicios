import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore} from 'redux';
import counterReducer from './reducers/counterReducer';


const store = createStore(counterReducer, composeWithDevTools());


export default store;


