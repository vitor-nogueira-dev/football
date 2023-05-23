import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import clubReducer from './reducer';


const store = createStore(
  clubReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;