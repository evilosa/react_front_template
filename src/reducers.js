import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import clientsFeature from './features/clients';

const reducer = combineReducers({
  clients: clientsFeature.reducers.clients,
  routing: routerReducer,
});

export default reducer;